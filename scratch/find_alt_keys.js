const fs = require('fs');
const alt = fs.readFileSync('js/altitude-visualizer.js', 'utf8');

const keys = alt.match(/['"]?([a-zA-Z0-9_-]+)['"]?\s*:\s*\{[\s\n]*name\s*:/g) || [];
console.log('Datasets in altitude-visualizer.js:');
console.log(keys);
