const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
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

console.log('--- SCANNING ALL HTML FILES FOR ORPHAN GALLERY SUB DIVS ---');
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.includes('trek-gallery-collage')) return;

  // Check how many trek-gallery-sub divs exist vs how many are inside trek-gallery-collage
  const collageMatch = content.match(/<div class="trek-gallery-collage">([\s\S]*?)<\/div>\s*<\/div>/i);
  const totalSubDivs = (content.match(/trek-gallery-sub/g) || []).length;
  
  // Look for any trek-gallery-sub that appears AFTER the trek-gallery-collage closing
  const collageIndex = content.indexOf('trek-gallery-collage');
  const nextContainer = content.indexOf('Key Trip Facts', collageIndex);
  
  if (collageIndex !== -1 && nextContainer !== -1) {
    const betweenChunk = content.substring(collageIndex, nextContainer);
    const imgsInBetween = [...betweenChunk.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
    console.log(`\nFile: ${file}`);
    console.log(`  Total images between gallery start and Key Trip Facts: ${imgsInBetween.length}`);
    imgsInBetween.forEach((img, idx) => {
      console.log(`    ${idx + 1}. ${img[1].slice(0, 70)}...`);
    });
  }
});
