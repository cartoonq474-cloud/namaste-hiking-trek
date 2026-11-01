const fs = require('fs');

const weaJs = fs.readFileSync('js/weather-visualizer.js', 'utf8');
const start = weaJs.indexOf('"mera-peak": [');
console.log(weaJs.slice(start, start + 1000));
