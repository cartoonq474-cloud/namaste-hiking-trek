const fs = require('fs');
const js = fs.readFileSync('js/trek-details.js', 'utf8');

const lines = js.split('\n');
lines.forEach((l, i) => {
  if (l.includes('detail-accordion')) {
    console.log(`Line ${i + 1}: ${l}`);
  }
});
