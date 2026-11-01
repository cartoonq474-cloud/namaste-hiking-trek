const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = ebc.indexOf('gallery');
console.log('First gallery match in EBC at:', sIdx);
if (sIdx !== -1) {
  console.log(ebc.slice(sIdx - 100, sIdx + 400));
}

// Find gallery script in EBC
const gModalIdx = ebc.indexOf('galleryModal');
console.log('galleryModal in EBC at:', gModalIdx);
if (gModalIdx !== -1) {
  console.log(ebc.slice(gModalIdx - 100, gModalIdx + 500));
}
