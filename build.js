const fs = require('fs');
const path = require('path');
const { transform } = require('lightningcss');

const srcFile = path.join(__dirname, 'src', 'filter-grayscale.css');
const distDir = path.join(__dirname, 'dist');

// Read source
const source = fs.readFileSync(srcFile, 'utf8');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Unminified — just normalize formatting
const { code: unminified } = transform({
  filename: 'filter-grayscale.css',
  code: Buffer.from(source),
  minify: false,
});

fs.writeFileSync(path.join(distDir, 'filter-grayscale.css'), unminified);

// Minified
const { code: minified } = transform({
  filename: 'filter-grayscale.css',
  code: Buffer.from(source),
  minify: true,
});

fs.writeFileSync(path.join(distDir, 'filter-grayscale.min.css'), minified);

console.log('Build complete:');
console.log(`  dist/filter-grayscale.css     ${unminified.length} bytes`);
console.log(`  dist/filter-grayscale.min.css ${minified.length} bytes`);
