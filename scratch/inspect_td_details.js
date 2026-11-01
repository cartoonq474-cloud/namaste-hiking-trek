const fs = require('fs');
const js = fs.readFileSync('js/trek-details.js', 'utf8');
const lines = js.split('\n');

lines.forEach((l, i) => {
  if (l.includes('detail-accordion') || l.includes('details-progress') || l.includes('detail-icon') || l.includes('readCount')) {
    console.log(`L${i + 1}: ${l.slice(0, 100)}`);
  }
});
