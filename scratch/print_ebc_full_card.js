const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Find itinerary Day 1 and Day 2 in EBC
const itinMatch = ebc.match(/<div class="itinerary-card active">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
if (itinMatch) {
  console.log('=== EBC FULL DAY 1 CARD HTML ===');
  console.log(itinMatch[0]);
} else {
  const start = ebc.indexOf('<div class="itinerary-card');
  console.log(ebc.slice(start, start + 3500));
}
