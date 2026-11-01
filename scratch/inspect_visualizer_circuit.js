const fs = require('fs');
const txt = fs.readFileSync('js/altitude-visualizer.js', 'utf8');

const start = txt.indexOf('"annapurna_circuit":');
const end = txt.indexOf('},', start + 50);
console.log(txt.slice(start, start + 1200));
