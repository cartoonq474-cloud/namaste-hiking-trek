const fs = require('fs');

const altJs = fs.readFileSync('js/altitude-visualizer.js', 'utf8');
const start = altJs.indexOf('"mera-peak": {');
console.log(altJs.slice(start, start + 1800));
