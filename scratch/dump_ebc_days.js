const fs = require('fs');

const ebcContent = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Find Day 1 and Day 2 in full
const itinIdx = ebcContent.indexOf('id="section-itinerary"');
const day1Idx = ebcContent.indexOf('class="itinerary-header"', itinIdx);
const day3Idx = ebcContent.indexOf('Day 3:', day1Idx);

console.log('=== EBC DAY 1 & DAY 2 FULL MARKUP ===');
console.log(ebcContent.slice(day1Idx - 100, day3Idx));
