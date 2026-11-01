const fs = require('fs');

const js = fs.readFileSync('js/trek-details.js', 'utf8');
const lines = js.split('\n');

lines.forEach((line, idx) => {
  if (line.toLowerCase().includes('itinerary')) {
    console.log(`${idx + 1}: ${line}`);
  }
});
