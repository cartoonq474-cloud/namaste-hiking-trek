const fs = require('fs');

const code = fs.readFileSync('scratch/generate_evt_sec1_full.js', 'utf8');
const lines = code.split('\n');

for (let i = 190; i < 225; i++) {
  console.log((i + 1) + ': ' + lines[i]);
}
