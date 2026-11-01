const fs = require('fs');

const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const lines = act.split('\n');

console.log('Searching for "at a Glance" or "calendar days" or "14"...');

lines.forEach((l, i) => {
  if (/at a glance/i.test(l) || /calendar days/i.test(l) || /14 calendar/i.test(l) || /\b14\b.*day/i.test(l)) {
    console.log(`Line ${i + 1}: ${l.trim()}`);
  }
});
