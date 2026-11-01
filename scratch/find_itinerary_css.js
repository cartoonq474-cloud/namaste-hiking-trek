const fs = require('fs');
const css = fs.readFileSync('index.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('.itinerary-card') || l.includes('.itinerary-timeline') || l.includes('.itinerary-header')) {
    console.log(`Line ${i + 1}: ${l.slice(0, 80)}`);
  }
});
