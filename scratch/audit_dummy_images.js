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

const trekFiles = getHtmlFiles('trek');

trekFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n========================================`);
  console.log(`File: ${file}`);
  
  // Find where trek-gallery-collage starts and where the gallery section ends
  const galleryMatch = content.match(/<div class="trek-gallery-collage">([\s\S]*?)<\/section>/i) ||
                       content.match(/<section[^>]*class="[^"]*gallery[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
  
  if (galleryMatch) {
    const sectionChunk = galleryMatch[0];
    const unsplashImgs = [...sectionChunk.matchAll(/<img[^>]+src=["']([^"']*unsplash[^"']*)["'][^>]*>/gi)];
    console.log(`Unsplash images in/near gallery section: ${unsplashImgs.length}`);
    unsplashImgs.forEach((m, idx) => {
      console.log(`  [Orphan ${idx + 1}] ${m[0].slice(0, 100)}...`);
    });

    // Also check for orphan trek-gallery-sub outside trek-gallery-collage
    const collageBlocks = [...sectionChunk.matchAll(/<div class="trek-gallery-collage">([\s\S]*?)<\/div>\s*<\/div>/gi)];
    console.log(`Collage blocks matched: ${collageBlocks.length}`);
  } else {
    console.log('No gallery section match');
  }
});
