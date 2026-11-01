const fs = require('fs');
const path = require('path');

const trekImagesDir = 'Trek Images';
const trekDir = 'trek';

// Subfolders in Trek Images
const imageFolders = fs.readdirSync(trekImagesDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

console.log('Trek Image Folders in Trek Images/:');
imageFolders.forEach(f => {
  const files = fs.readdirSync(path.join(trekImagesDir, f));
  console.log(` - "${f}": ${files.length} images`);
});

// Subfolders in trek/
const trekPages = fs.readdirSync(trekDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

console.log(`\nTrek Pages in trek/ (${trekPages.length} pages):`);
trekPages.forEach(p => console.log(` - ${p}`));
