const fs = require('fs');
const altViz = fs.readFileSync('js/altitude-visualizer.js', 'utf8');

// Inspect where ebc or other routes are defined
const ebcIndex = altViz.indexOf('"ebc":');
console.log('EBC index:', ebcIndex);
if (ebcIndex !== -1) {
  console.log(altViz.slice(ebcIndex, ebcIndex + 600));
}
