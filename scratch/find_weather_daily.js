const fs = require('fs');
const lines = fs.readFileSync('js/weather-visualizer.js', 'utf8').split('\n');

console.log(lines.slice(25, 75).join('\n'));
