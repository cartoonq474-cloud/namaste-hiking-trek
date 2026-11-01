const fs = require('fs');
const lines = fs.readFileSync('js/altitude-visualizer.js', 'utf8').split('\n');

lines.forEach((l, idx) => {
  if (l.includes('annapurna_circuit')) {
    console.log(`Found around line ${idx+1}`);
    console.log(lines.slice(idx, idx + 22).join('\n'));
  }
});
