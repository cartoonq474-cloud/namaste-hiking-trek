const fs = require('fs');
const weaViz = fs.readFileSync('js/weather-visualizer.js', 'utf8');
console.log('Size of weather-visualizer.js:', weaViz.length);
console.log('First 500 chars:');
console.log(weaViz.slice(0, 500));
