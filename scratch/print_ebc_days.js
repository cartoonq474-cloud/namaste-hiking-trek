const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = ebc.indexOf('id="section-itinerary"');
const d1Start = ebc.indexOf('<!-- Day 01 -->', sIdx);
const d2End = ebc.indexOf('<!-- Day 03 -->', sIdx);

console.log('=== EBC Day 1 & Day 2 Full HTML ===');
console.log(ebc.slice(d1Start, d2End));
