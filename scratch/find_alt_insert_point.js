const fs = require('fs');
const altJs = fs.readFileSync('js/altitude-visualizer.js', 'utf8');

// Find where "ebc_cho_la" is located
const ebcChoLaIdx = altJs.indexOf('"ebc_cho_la"');
console.log('ebc_cho_la index:', ebcChoLaIdx);
console.log(altJs.slice(ebcChoLaIdx - 100, ebcChoLaIdx + 500));

