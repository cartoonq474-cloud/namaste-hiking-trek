const fs = require('fs');

const html = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const itinStart = html.indexOf('id="itinerary"') !== -1 ? html.indexOf('id="itinerary"') : html.indexOf('itinerary-card');
const itinEnd = html.indexOf('id="included"') !== -1 ? html.indexOf('id="included"') : html.indexOf('Included in the Package');

console.log(`Itinerary section bounds: ${itinStart} to ${itinEnd}`);

const itinChunk = html.substring(itinStart, itinEnd);
const imgMatches = [...itinChunk.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];

console.log(`Found ${imgMatches.length} images inside itinerary of Annapurna Circuit:`);
imgMatches.forEach((m, i) => {
  const alt = m[0].match(/alt=["']([^"']*)["']/i);
  console.log(`${i + 1}. src="${m[1]}" | alt="${alt ? alt[1] : ''}"`);
});
