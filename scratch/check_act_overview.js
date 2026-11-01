const fs = require('fs');
const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
const lines = act.split('\n');
let lineOverview = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('id="section-overview"')) {
    lineOverview = i;
    break;
  }
}
console.log('ACT section-overview is at line:', lineOverview);
for (let i = Math.max(0, lineOverview - 15); i < lineOverview + 15; i++) {
  console.log(`${i}: ${lines[i]}`);
}
