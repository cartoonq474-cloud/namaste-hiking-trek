const fs = require('fs');
const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
const lines = act.split('\n');

let startItin = -1;
let endItin = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('id="section-itinerary"')) startItin = i;
  if (lines[i].includes('id="section-includes"')) endItin = i;
}

console.log('startItin:', startItin, 'endItin:', endItin);
console.log('Lines count between them:', endItin - startItin);
console.log('Line at startItin - 2 to + 5:');
for (let i = Math.max(0, startItin - 2); i < startItin + 6; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}
console.log('\nLine at endItin - 5 to + 3:');
for (let i = Math.max(0, endItin - 5); i < endItin + 3; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}
