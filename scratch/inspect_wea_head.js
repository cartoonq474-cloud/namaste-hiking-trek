const fs = require('fs');
const weaViz = fs.readFileSync('js/weather-visualizer.js', 'utf8');
console.log(weaViz.slice(0, 1500));
