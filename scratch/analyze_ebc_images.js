const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const itinMatch = ebc.match(/<section[^>]*id="section-itinerary"[\s\S]*?<\/section>/i);
if (itinMatch) {
  const imgs = [...itinMatch[0].matchAll(/<img[^>]+src="([^"]+)"[^>]*>/g)].map(m => m[1]);
  console.log('Images in itinerary count:', imgs.length);
  console.log('Sample images:', imgs.slice(0, 15));
}
