const fs = require('fs');
const js = fs.readFileSync('js/altitude-visualizer.js', 'utf8');
const ebcIdx = js.indexOf('"ebc": {');
console.log(js.substring(ebcIdx, ebcIdx + 1200));

