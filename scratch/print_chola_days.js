const fs = require('fs');
const chola = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

const sIdx = chola.indexOf('id="section-itinerary"');
const d1Start = chola.indexOf('<!-- Day 01 -->', sIdx);
const d2End = chola.indexOf('<!-- Day 03 -->', sIdx);

console.log('=== Cho La Day 1 & Day 2 Full HTML ===');
console.log(chola.slice(d1Start, d2End));
