const fs = require('fs');

const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const cards = [...html.matchAll(/<div class="itinerary-card[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<!-- End Day/gi)] || [];
console.log(`Found ${cards.length} itinerary cards matching pattern.`);

if (cards.length === 0) {
  // Let's search by itinerary-header
  const headers = [...html.matchAll(/<div class="itinerary-header">([\s\S]*?)<\/h4>/gi)];
  console.log(`Found ${headers.length} itinerary headers.`);
}

const photoGrids = [...html.matchAll(/<div class="itinerary-photo-grid">([\s\S]*?)<\/div>\s*<\/div>/gi)];
console.log(`Found ${photoGrids.length} photo grids in EBC.`);
if (photoGrids.length > 0) {
  console.log('Sample photo grid 1 in EBC:');
  console.log(photoGrids[0][0]);
}
