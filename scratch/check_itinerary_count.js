const fs = require('fs');

const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const s2 = html.indexOf('<!-- Section 2: Itinerary -->');
const s3 = html.indexOf('<!-- Section 3: Includes', s2);
const itinBlock = html.substring(s2, s3);

const cardMatches = itinBlock.match(/class="itinerary-card[^"]*"/g);
console.log('cardMatches count:', cardMatches ? cardMatches.length : 0);

for (let d = 1; d <= 15; d++) {
  const hasDay = itinBlock.indexOf(`data-day="${d}"`) !== -1;
  console.log(`Day ${d}: ${hasDay ? 'PRESENT' : 'MISSING'}`);
}
