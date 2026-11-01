const fs = require('fs');
const altViz = fs.readFileSync('js/altitude-visualizer.js', 'utf8');

// Check if everest-view or similar is defined
const matches = altViz.match(/['"]?[a-z0-9-]+['"]?\s*:\s*\{[\s\S]*?points\s*:\s*\[[\s\S]*?\][\s\S]*?\}/gi);
console.log('Found route profiles in altitude-visualizer.js:');
const keys = altViz.match(/['"]([a-z0-9-]+)['"]\s*:\s*\{[\s\S]*?name\s*:/gi);
console.log('Keys:', keys);
