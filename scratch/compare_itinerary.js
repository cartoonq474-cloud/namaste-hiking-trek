const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const lux = fs.readFileSync('trek/everest-base-camp-luxury-trek/index.html', 'utf8');

function getDay1(html) {
  const itinStart = html.indexOf('id="section-itinerary"');
  const day1Start = html.indexOf('class="itinerary-card', itinStart);
  const day2Start = html.indexOf('class="itinerary-card', day1Start + 50);
  return html.substring(day1Start, day2Start);
}

console.log('=== EBC Trek Day 1 HTML ===\n');
console.log(getDay1(ebc));

console.log('\n=== Luxury Trek Day 1 HTML ===\n');
console.log(getDay1(lux));
