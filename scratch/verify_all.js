const fs = require('fs');
const path = require('path');

function findFiles(dir, filter, list = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (file === 'node_modules' || file === '.git' || file === '.system_generated' || file === 'scratch') continue;
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findFiles(fullPath, filter, list);
    } else if (filter(file)) {
      list.push(fullPath);
    }
  }
  return list;
}

console.log('=== 1. VERIFYING ASSET INTEGRITY ===');
const logoPath = 'images/logo.png';
const logoExists = fs.existsSync(logoPath);
console.log('images/logo.png exists:', logoExists);
if (logoExists) {
  const buf = fs.readFileSync(logoPath);
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  const bitDepth = buf.readUInt8(24);
  const colorType = buf.readUInt8(25);
  console.log(`Dimensions: ${width}x${height} px, Bit Depth: ${bitDepth}, Color Type: ${colorType} (RGBA), File Size: ${buf.length} bytes`);
}

console.log('\n=== 2. VERIFYING HTML FILES (88 TOTAL) ===');
const htmlFiles = findFiles('.', f => f.endsWith('.html'));
console.log('Total HTML files scanned:', htmlFiles.length);

let logoTextGroupCount = 0;
let brandTitleCount = 0;
let brandSubtitleCount = 0;
let hardcodedHeightCount = 0;
let validLogoBrandAnchorCount = 0;
let redirectFilesCount = 0;
let missingAriaLabel = [];
let brokenImgPaths = [];

for (const file of htmlFiles) {
  const rel = path.relative('.', file);
  const content = fs.readFileSync(file, 'utf8');

  if (content.includes('http-equiv="refresh"')) {
    redirectFilesCount++;
    continue;
  }

  if (content.includes('logo-text-group')) logoTextGroupCount++;
  if (content.includes('brand-title')) brandTitleCount++;
  if (content.includes('brand-subtitle')) brandSubtitleCount++;

  const anchorMatch = content.match(/<a[^>]*class=["'][^"']*logo-brand[^"']*["'][^>]*>([\s\S]*?)<\/a>/i);
  if (anchorMatch) {
    validLogoBrandAnchorCount++;
    const fullAnchor = anchorMatch[0];
    if (!fullAnchor.includes('aria-label')) {
      missingAriaLabel.push(rel);
    }
    const imgMatch = anchorMatch[1].match(/<img[^>]*src=["']([^"']+)["'][^>]*>/i);
    if (imgMatch) {
      const src = imgMatch[1];
      const fullImgTag = imgMatch[0];
      if (fullImgTag.includes('height:') || fullImgTag.includes('style=')) {
        hardcodedHeightCount++;
      }
      // Check if relative path resolves to images/logo.png
      const resolvedPath = path.resolve(path.dirname(file), src);
      const expectedPath = path.resolve('.', 'images/logo.png');
      if (resolvedPath !== expectedPath || !fs.existsSync(resolvedPath)) {
        brokenImgPaths.push({ file: rel, src, resolvedPath });
      }
    }
  }
}

console.log(`Active pages with valid .logo-brand: ${validLogoBrandAnchorCount}`);
console.log(`Redirect pages (no header): ${redirectFilesCount}`);
console.log(`Remaining logo-text-group occurrences in HTML: ${logoTextGroupCount}`);
console.log(`Remaining brand-title occurrences in HTML: ${brandTitleCount}`);
console.log(`Remaining brand-subtitle occurrences in HTML: ${brandSubtitleCount}`);
console.log(`Remaining hardcoded inline styles in logo img: ${hardcodedHeightCount}`);
console.log(`Missing aria-label on .logo-brand: ${missingAriaLabel.length}`);
console.log(`Broken logo img paths: ${brokenImgPaths.length}`);

console.log('\n=== 3. VERIFYING CSS RULES (index.css) ===');
const css = fs.readFileSync('index.css', 'utf8');
const logoBrandImgMatch = css.match(/\.logo-brand\s+img\s*\{[^}]+\}/i);
const mediaQueryMatch = css.match(/@media[^{]*768px[^{]*\{[\s\S]*?\.logo-brand\s+img\s*\{[^}]+\}[\s\S]*?\}/i);
const hideRuleMatch = css.match(/\.logo-text-group\s*\{[^}]+\}/i);

console.log('.logo-brand img base rule:\n', logoBrandImgMatch ? logoBrandImgMatch[0].trim() : 'MISSING');
console.log('.logo-brand img mobile rule:\n', mediaQueryMatch ? mediaQueryMatch[0].trim() : 'MISSING');
console.log('.logo-text-group safeguard rule:\n', hideRuleMatch ? hideRuleMatch[0].trim() : 'MISSING');
