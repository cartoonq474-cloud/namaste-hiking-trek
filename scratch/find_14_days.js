const fs = require('fs');

const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const regexes = [
  /14\s*[-–]?\s*Day/gi,
  /14\s*Days/gi,
  /Day\s*14/gi,
  /14-Day/gi
];

let matches = [];
const lines = act.split('\n');
lines.forEach((l, i) => {
  if (/14\s*[-–]?\s*Day/i.test(l)) {
    matches.push({ line: i + 1, content: l.trim() });
  }
});

console.log('Total matches for 14 Days:', matches.length);
matches.slice(0, 25).forEach(m => console.log(`Line ${m.line}: ${m.content}`));
