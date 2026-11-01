const fs = require('fs');

const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
const lines = act.split('\n');

console.log('--- ALL OCCURRENCES OF 14 ---');
lines.forEach((line, i) => {
  if (/\b14\b/.test(line)) {
    // ignore CSS values like 14px or rgba
    const stripped = line.replace(/14px/g, '').replace(/#CBD5E1/g, '').replace(/14\./g, '');
    if (/\b14\b/.test(stripped)) {
      console.log(`Line ${i + 1}: ${line.trim()}`);
    }
  }
});
