const fs = require('fs');
const js = fs.readFileSync('js/trek-details.js', 'utf8');

const matches = [];
let idx = 0;
while ((idx = js.indexOf('.detail-accordion-card', idx)) !== -1) {
  matches.push(idx);
  idx += 20;
}
console.log('Matches count:', matches.length);
matches.forEach(m => {
  console.log('--- At index', m, '---');
  console.log(js.slice(Math.max(0, m - 50), m + 200));
});
