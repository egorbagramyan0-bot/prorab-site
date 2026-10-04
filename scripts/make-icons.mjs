// Генерирует фавиконки и OG-картинку в public/. Запуск: node scripts/make-icons.mjs
// Исходник иконки — public/favicon.svg, OG — фото салона public/images/salon-bg/s3.webp.
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const pub = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public')
const svg = await fs.readFile(path.join(pub, 'favicon.svg'))

const png = (size, opts = {}) => {
    const img = sharp(svg, { density: 72 * (size / 64) * 2 }).resize(size, size)
    return (opts.background ? img.flatten({ background: opts.background }) : img).png().toBuffer()
}

// apple-touch-icon — на тёмном фоне, iOS сам скругляет углы
const appleIcon = await sharp(svg, { density: 600 })
    .resize(140, 140)
    .extend({ top: 20, bottom: 20, left: 20, right: 20, background: '#1C1917' })
    .flatten({ background: '#1C1917' })
    .png()
    .toBuffer()

await fs.writeFile(path.join(pub, 'apple-touch-icon.png'), appleIcon)
await fs.writeFile(path.join(pub, 'icon-192.png'), await png(192))
await fs.writeFile(path.join(pub, 'icon-512.png'), await png(512))

// favicon.ico с PNG внутри (поддерживается всеми современными браузерами и Яндексом)
const sizes = [16, 32, 48]
const images = await Promise.all(sizes.map((s) => png(s)))
const header = Buffer.alloc(6)
header.writeUInt16LE(0, 0)
header.writeUInt16LE(1, 2)
header.writeUInt16LE(sizes.length, 4)
let offset = 6 + 16 * sizes.length
const entries = sizes.map((s, i) => {
    const e = Buffer.alloc(16)
    e.writeUInt8(s, 0)
    e.writeUInt8(s, 1)
    e.writeUInt16LE(1, 4)
    e.writeUInt16LE(32, 6)
    e.writeUInt32LE(images[i].length, 8)
    e.writeUInt32LE(offset, 12)
    offset += images[i].length
    return e
})
await fs.writeFile(path.join(pub, 'favicon.ico'), Buffer.concat([header, ...entries, ...images]))

// OG-картинка 1200×630
await sharp(path.join(pub, 'images', 'salon-bg', 's3.webp'))
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(pub, 'images', 'og.jpg'))

console.log('Иконки и OG-картинка сгенерированы')
