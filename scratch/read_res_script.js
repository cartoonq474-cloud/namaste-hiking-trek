const fs = require('fs');

const lines = fs.readFileSync('js/reviews-tabs.js', 'utf8').split('\n');

for (let i = 90; i < Math.min(lines.length, 180); i++) {
  console.log((i + 1) + ': ' + lines[i]);
}
