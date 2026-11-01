const fs = require('fs');

const html = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

// Find all occurrences of itinerary-photo-wrapper or itinerary-card
const matches = [...html.matchAll(/<div class="itinerary-photo-wrapper">([\s\S]*?)<\/div>/gi)];
console.log(`Found ${matches.length} itinerary-photo-wrapper divs in Annapurna Circuit.`);

// Let's also see what img tags exist inside itinerary
const itinStart = html.indexOf('class="itinerary-list"');
console.log(`itinerary-list pos: ${itinStart}`);

if (itinStart !== -1) {
  const nextSection = html.indexOf('</section>', itinStart);
  console.log(`itin closing section pos: ${nextSection}`);
  const itinChunk = html.substring(itinStart, nextSection);
  const imgs = [...itinChunk.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
  console.log(`Found ${imgs.length} images inside itinerary-list section:`);
  imgs.forEach((m, idx) => {
    const alt = m[0].match(/alt=["']([^"']*)["']/i);
    console.log(`${idx + 1}. src="${m[1]}" | alt="${alt ? alt[1] : ''}"`);
  });
}
