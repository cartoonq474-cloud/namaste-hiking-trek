const fs = require('fs');

const js = fs.readFileSync('js/trek-details.js', 'utf8');

const matches = [];
let idx = 0;
while ((idx = js.indexOf('itinerary', idx)) !== -1) {
  matches.push(idx);
  idx += 9;
}

console.log('Matches count:', matches.length);
matches.forEach(pos => {
  console.log('--- At pos ' + pos + ' ---');
  console.log(js.slice(pos - 50, pos + 250));
});
