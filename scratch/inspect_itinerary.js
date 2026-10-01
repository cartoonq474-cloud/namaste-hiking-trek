const fs = require('fs');
const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const idx = content.indexOf('id="section-itinerary"');
const day1Idx = content.indexOf('<!-- Day 01 -->', idx);
const day2Idx = content.indexOf('<!-- Day 02 -->', idx);

console.log('--- DAY 1 COMPLETE ---');
console.log(content.substring(day1Idx, day2Idx));
