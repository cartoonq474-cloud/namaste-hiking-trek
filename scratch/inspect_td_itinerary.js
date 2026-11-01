const fs = require('fs');
const js = fs.readFileSync('js/trek-details.js', 'utf8');
const lines = js.split('\n');
lines.forEach((l, i) => {
  if (l.includes('itinerary') || l.includes('toggle-all') || l.includes('itinerary-card') || l.includes('itinerary-header')) {
    console.log(`Line ${i + 1}: ${l.slice(0, 100)}`);
  }
});
