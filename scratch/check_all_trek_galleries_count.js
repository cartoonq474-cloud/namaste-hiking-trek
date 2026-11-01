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

const allTrekFiles = getHtmlFiles('trek');

allTrekFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const galStart = content.indexOf('trek-gallery-collage');
  const factsStart = content.indexOf('Key Trip Facts');
  if (galStart !== -1 && factsStart !== -1) {
    const galChunk = content.substring(galStart, factsStart);
    const galImgs = [...galChunk.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
    if (galImgs.length !== 5) {
      console.log(`${file}: has ${galImgs.length} images in gallery (expected exactly 5)`);
    }
  }
});
