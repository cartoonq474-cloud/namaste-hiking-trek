const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'trek', 'everest-base-camp-with-cho-la-pass-trek', 'index.html');
const content = fs.readFileSync(targetFile, 'utf8');

console.log('File size:', content.length);
console.log('Title:', content.match(/<title>(.*?)<\/title>/i)?.[1]);
console.log('H1:', content.match(/<h1[^>]*>(.*?)<\/h1>/i)?.[1]);
console.log('Canonical:', content.match(/<link rel="canonical" href="(.*?)"/i)?.[1]);

const dayCards = [...content.matchAll(/class="itinerary-card/g)];
console.log('Total itinerary day cards:', dayCards.length);

const photoGrids = [...content.matchAll(/class="itinerary-photos-grid/g)];
console.log('Total photo grids in itinerary:', photoGrids.length);

const images = [...content.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m => m[1]);
console.log('Total images on page:', images.length);

const missingImages = [];
images.forEach(img => {
  if (img.startsWith('../../')) {
    const localPath = path.join(__dirname, '..', img.replace(/^\.\.\/\.\.\//, ''));
    if (!fs.existsSync(localPath)) {
      missingImages.push(img);
    }
  }
});
console.log('Missing images count:', missingImages.length);
if (missingImages.length > 0) {
  console.log('Missing sample:', missingImages.slice(0, 5));
}
