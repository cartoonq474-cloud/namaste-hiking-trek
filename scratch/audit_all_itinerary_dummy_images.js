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

console.log('--- AUDITING ITINERARY PHOTOS ACROSS ALL TREK PAGES ---');
allTrekFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match itinerary section or cards
  const itinCards = [...content.matchAll(/<div class="itinerary-card[^"]*"[\s\S]*?(?=<div class="itinerary-card|<\/div>\s*<\/div>\s*<\/section>)/gi)];
  const wrappers = [...content.matchAll(/<div class="itinerary-photo-wrapper">([\s\S]*?)<\/div>/gi)];
  if (wrappers.length > 0) {
    const unsplashCount = wrappers.filter(w => w[1].includes('unsplash.com')).length;
    const realCount = wrappers.filter(w => w[1].includes('images/treks/')).length;
    console.log(`${file}: ${wrappers.length} photo slots | ${unsplashCount} Unsplash dummy | ${realCount} Authentic real`);
  }
});
