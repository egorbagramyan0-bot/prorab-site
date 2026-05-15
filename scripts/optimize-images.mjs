import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC = path.resolve('public/images');

async function optimizeImage(inputPath, outputPath, options) {
    const { width, quality, maxSizeKB } = options;

    const metadata = await sharp(inputPath).metadata();
    const inputSize = fs.statSync(inputPath).size;

    let q = quality || 80;
    let resizeWidth = width || metadata.width;

    // Resize and convert to WebP
    let buffer = await sharp(inputPath)
        .resize({ width: resizeWidth, withoutEnlargement: true })
        .webp({ quality: q, effort: 6 })
        .toBuffer();

    // If maxSizeKB specified, reduce quality until we fit
    if (maxSizeKB) {
        while (buffer.length > maxSizeKB * 1024 && q > 30) {
            q -= 5;
            buffer = await sharp(inputPath)
                .resize({ width: resizeWidth, withoutEnlargement: true })
                .webp({ quality: q, effort: 6 })
                .toBuffer();
        }
    }

    fs.writeFileSync(outputPath, buffer);
    const outputSize = buffer.length;

    const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);
    console.log(`✅ ${path.basename(inputPath)} (${(inputSize / 1024).toFixed(0)}KB) → ${path.basename(outputPath)} (${(outputSize / 1024).toFixed(0)}KB) | -${savings}% | q=${q}`);

    return outputSize;
}

async function main() {
    console.log('🖼️  Оптимизация изображений...\n');

    let totalBefore = 0;
    let totalAfter = 0;

    // 1. Hero image → 1920px wide, max 400KB
    console.log('--- Hero Image ---');
    const heroInput = path.join(PUBLIC, 'hero2.png');
    const heroOutput = path.join(PUBLIC, 'hero2.webp');
    totalBefore += fs.statSync(heroInput).size;
    totalAfter += await optimizeImage(heroInput, heroOutput, { width: 1920, quality: 82, maxSizeKB: 400 });

    // 2. Logo → max width 400px, high quality
    console.log('\n--- Logo ---');
    const logoInput = path.join(PUBLIC, 'logo2.png');
    const logoOutput = path.join(PUBLIC, 'logo2.webp');
    totalBefore += fs.statSync(logoInput).size;
    totalAfter += await optimizeImage(logoInput, logoOutput, { width: 400, quality: 85, maxSizeKB: 80 });

    // 3. Salon photos → max 800px wide, max 150KB each
    console.log('\n--- Salon Photos ---');
    for (const name of ['salon.png', 'salon2.png', 'salon3.png']) {
        const input = path.join(PUBLIC, name);
        const output = path.join(PUBLIC, name.replace('.png', '.webp'));
        totalBefore += fs.statSync(input).size;
        totalAfter += await optimizeImage(input, output, { width: 800, quality: 80, maxSizeKB: 150 });
    }

    // 4. Brand logos → max 300px wide, max 80KB each
    console.log('\n--- Brand Logos ---');
    const brandsDir = path.join(PUBLIC, 'brands correct');
    const brandFiles = fs.readdirSync(brandsDir).filter(f => f.endsWith('.png'));

    // Create optimized brands directory
    const brandsOptDir = path.join(PUBLIC, 'brands-opt');
    if (!fs.existsSync(brandsOptDir)) fs.mkdirSync(brandsOptDir);

    for (const file of brandFiles) {
        const input = path.join(brandsDir, file);
        const outputName = file.toLowerCase().replace(/\s+/g, '-').replace('.png', '.webp');
        const output = path.join(brandsOptDir, outputName);
        totalBefore += fs.statSync(input).size;
        totalAfter += await optimizeImage(input, output, { width: 300, quality: 80, maxSizeKB: 80 });
    }

    console.log(`\n📊 Итого:`);
    console.log(`   До:    ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   После: ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Экономия: ${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%`);
}

main().catch(console.error);
