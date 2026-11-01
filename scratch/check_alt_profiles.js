const fs = require('fs');
const altViz = fs.readFileSync('js/altitude-visualizer.js', 'utf8');

console.log('Contains everest-view?', altViz.includes('everest-view'));
console.log('Keys in altitude-visualizer.js:');
const lines = altViz.split('\n');
lines.forEach((l, i) => {
  if (l.match(/^\s*['"]?[a-z0-9-]+['"]?\s*:\s*\{/i)) {
    console.log(`Line ${i+1}: ${l.trim()}`);
  }
});
