const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = ebc.indexOf('id="section-itinerary"');
console.log('section-itinerary at:', sIdx);

// Look for Day 1 inside section-itinerary
const itinSection = ebc.slice(sIdx, sIdx + 15000);
const d1 = itinSection.indexOf('Day 1') !== -1 ? itinSection.indexOf('Day 1') : itinSection.indexOf('Day 01');
console.log('Day 1 in itinSection at offset:', d1);
if (d1 !== -1) {
  console.log(itinSection.slice(d1 - 300, d1 + 1500));
}
