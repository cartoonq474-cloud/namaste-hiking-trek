const fs = require('fs');

const code = fs.readFileSync('scratch/generate_evt_sec1_full.js', 'utf8');
const lines = code.split('\n');

for (let i = 80; i < 110; i++) {
  console.log((i + 1) + ': ' + lines[i]);
}
