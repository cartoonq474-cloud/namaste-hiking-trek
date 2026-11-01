const fs = require('fs');
const weaViz = fs.readFileSync('js/weather-visualizer.js', 'utf8');

console.log('Contains everest-view in weather-visualizer?', weaViz.includes('everest-view'));
console.log('Keys in weather-visualizer.js:');
const lines = weaViz.split('\n');
lines.forEach((l, i) => {
  if (l.match(/^\s*['"]?[a-z0-9-]+['"]?\s*:\s*\{/i)) {
    console.log(`Line ${i+1}: ${l.trim()}`);
  }
});
