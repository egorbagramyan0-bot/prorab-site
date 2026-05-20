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

    let sharpInstance = sharp(inputPath).resize({ width: resizeWidth, withoutEnlargement: true });

    let buffer;
    if (options.asPng) {
        buffer = await sharpInstance.png({ compressionLevel: 9, effort: 7 }).toBuffer();
    } else {
        buffer = await sharpInstance.webp({ quality: q, effort: 6 }).toBuffer();

        // If maxSizeKB specified, reduce quality until we fit (only for webp)
        if (maxSizeKB) {
            while (buffer.length > maxSizeKB * 1024 && q > 30) {
                q -= 5;
                buffer = await sharpInstance.webp({ quality: q, effort: 6 }).toBuffer();
            }
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

    // 3. Salon photos → max 1200px wide, max 200KB each
    console.log('\n--- Salon Photos ---');
    for (const name of ['s1.jpg', 's2.jpg', 's3.jpg', 's4.jpg', 's5.jpg', 's6.jpg']) {
        const input = path.join(PUBLIC, name);
        const output = path.join(PUBLIC, name.replace('.jpg', '.webp'));
        if (fs.existsSync(input)) {
            totalBefore += fs.statSync(input).size;
            totalAfter += await optimizeImage(input, output, { width: 1200, quality: 82, maxSizeKB: 200 });
        }
    }

    // 3.5. Stone Sphere (3D backdrop) → max 800px wide, max 300KB
    console.log('\n--- Stone Sphere ---');
    const sphereInput = path.join(PUBLIC, 'sphere.png');
    const sphereOutput = path.join(PUBLIC, 'sphere.webp');
    if (fs.existsSync(sphereInput)) {
        totalBefore += fs.statSync(sphereInput).size;
        totalAfter += await optimizeImage(sphereInput, sphereOutput, { width: 800, quality: 80, maxSizeKB: 300 });
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
        const outputName = file.toLowerCase().replace(/\s+/g, '-');
        const output = path.join(brandsOptDir, outputName);
        totalBefore += fs.statSync(input).size;
        totalAfter += await optimizeImage(input, output, { width: 300, asPng: true });
    }

    console.log(`\n📊 Итого:`);
    console.log(`   До:    ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   После: ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Экономия: ${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%`);
}

main().catch(console.error);
