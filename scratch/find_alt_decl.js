const fs = require('fs');
const js = fs.readFileSync('js/altitude-visualizer.js', 'utf8');
const lines = js.split('\n').slice(0, 30);
console.log(lines.join('\n'));

