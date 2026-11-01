const fs = require('fs');
const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const sIdx = gokyo.indexOf('id="section-itinerary"');
const d1 = gokyo.indexOf('<!-- Day 1 -->', sIdx);
const d3 = gokyo.indexOf('<!-- Day 3 -->', sIdx);

console.log('=== Gokyo Day 1 & Day 2 Full Content ===');
console.log(gokyo.slice(d1, d3));
