import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const BRANDS_SRC = 'c:/Users/User/Desktop/qwe/public/images/brands correct';
const BRANDS_OPT = 'c:/Users/User/Desktop/qwe/public/images/brands-opt';

const NEW_BRANDS = [
    'altacera',
    'gracia',
    'laparet',
    'protile',
    'vitra'
];

async function optimize(name) {
    const input = path.join(BRANDS_SRC, `${name}.png`);
    const outputWebp = path.join(BRANDS_OPT, `${name}.webp`);
    const outputPng = path.join(BRANDS_OPT, `${name}.png`);

    console.log(`Optimizing ${name}...`);

    // WebP version (consistent with Brands.jsx)
    await sharp(input)
        .resize({ width: 300, withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(outputWebp);

    // PNG version (consistent with existing optimized folder)
    await sharp(input)
        .resize({ width: 300, withoutEnlargement: true })
        .png({ compressionLevel: 9, effort: 7 })
        .toFile(outputPng);

    console.log(`✅ ${name} optimized.`);
}

async function run() {
    for (const brand of NEW_BRANDS) {
        await optimize(brand);
    }
}

run().catch(console.error);
