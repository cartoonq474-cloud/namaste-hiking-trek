const fs = require('fs');

const ebcContent = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Find in section-itinerary where day cards are
const itinIdx = ebcContent.indexOf('id="section-itinerary"');
const afterItin = ebcContent.slice(itinIdx);

// Look for Day 1 inside section-itinerary
const m = afterItin.match(/<div[^>]*class="[^"]*itinerary[^"]*"[\s\S]*?<\/div>/i) || afterItin.match(/Day 1/i);
console.log('Match index:', afterItin.indexOf('Day 1'));
const d1Idx = afterItin.indexOf('Day 1');
console.log(afterItin.slice(d1Idx - 200, d1Idx + 2000));
