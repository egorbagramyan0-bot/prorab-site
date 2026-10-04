// Пререндер: превращает каждую страницу из src/routes.js в готовый HTML (для Яндекса и быстрой загрузки),
// а также генерирует sitemap.xml и robots.txt. Запускается после vite build (см. npm run build).
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

process.env.NODE_ENV = 'production'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, renderHead, ROUTES, NOT_FOUND, SITE } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8')

if (!template.includes('<!--app-head-->') || !template.includes('<div id="root"></div>')) {
    throw new Error('index.html: не найдены плейсхолдеры <!--app-head--> или <div id="root"></div>')
}

async function writePage(route, file) {
    const html = template
        .replace('<!--app-head-->', renderHead(route))
        .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`)
    await fs.mkdir(path.dirname(file), { recursive: true })
    await fs.writeFile(file, html)
    console.log(`  ✓ ${path.relative(dist, file)}`)
}

for (const route of ROUTES) {
    await writePage(route, path.join(dist, route.path, 'index.html'))
}
await writePage(NOT_FOUND, path.join(dist, '404.html'))

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.filter((r) => !r.noindex).map((r) => `  <url>
    <loc>${SITE.url}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>
`
await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemap)

// Clean-param — для Яндекса: адреса с метками рекламы и соцсетей не считаются отдельными страницами
const robots = `User-agent: *
Allow: /
Disallow: /404.html
Clean-param: utm_source&utm_medium&utm_campaign&utm_content&utm_term&yclid&ysclid&gclid&fbclid&_openstat&from

Sitemap: ${SITE.url}/sitemap.xml
`
await fs.writeFile(path.join(dist, 'robots.txt'), robots)

await fs.rm(ssrDir, { recursive: true, force: true })
console.log(`Пререндер готов: ${ROUTES.length} страниц + 404, sitemap.xml, robots.txt`)
