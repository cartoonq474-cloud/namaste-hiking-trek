const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === '.git' || file === 'node_modules' || file === 'scratch') return;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  });
  return results;
}

const htmlFiles = getHtmlFiles('.');

console.log(`Auditing ${htmlFiles.length} HTML files for trek image replacement opportunities...`);

const trekKeywords = [
  'Everest Base Camp',
  'Annapurna Circuit',
  'Annapurna Base Camp',
  'Mardi Himal',
  'Gokyo',
  'Cho La',
  'Manaslu',
  'Langtang',
  'Gosaikunda',
  'Tilicho',
  'Mera Peak'
];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Check if this file has unsplash images associated with any trek keywords
  const unsplashMatches = [...content.matchAll(/<img[^>]+src=["']([^"']*unsplash[^"']*)["'][^>]*>/gi)];
  if (unsplashMatches.length === 0) return;

  const relevantImgs = [];
  unsplashMatches.forEach(m => {
    const alt = m[0].match(/alt=["']([^"']*)["']/i);
    const altText = alt ? alt[1] : '';
    // Check if alt text or surrounding matches a trek keyword
    const matchKw = trekKeywords.find(kw => altText.toLowerCase().includes(kw.toLowerCase()));
    if (matchKw) {
      relevantImgs.push({ alt: altText, src: m[1], keyword: matchKw });
    }
  });

  if (relevantImgs.length > 0) {
    console.log(`\n${file} has ${relevantImgs.length} relevant Unsplash trek images:`);
    relevantImgs.forEach(r => console.log(`  - [${r.keyword}] alt="${r.alt}"`));
  }
});
