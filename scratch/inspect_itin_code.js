const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Search for itinerary accordion classes or handlers in EBC
const dayMatch = ebc.match(/<div class="itinerary-[^"]*"[\s\S]*?(?=<div class="itinerary-|$)/);
if (dayMatch) {
  console.log('EBC Day structure sample:');
  console.log(dayMatch[0].slice(0, 1500));
}

// Check scripts in trek-details.js or index.html for accordion logic
const td = fs.readFileSync('js/trek-details.js', 'utf8');
console.log('\n--- Trek details itinerary accordion matches ---');
const tdLines = td.split('\n');
tdLines.forEach((l, idx) => {
  if (l.includes('itinerary') || l.includes('accordion') || l.includes('toggle-all')) {
    console.log(`L${idx+1}: ${l}`);
  }
});
