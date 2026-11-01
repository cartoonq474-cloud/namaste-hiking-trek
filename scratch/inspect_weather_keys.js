const fs = require('fs');
const weaJs = fs.readFileSync('js/weather-visualizer.js', 'utf8');

const m = weaJs.match(/([a-zA-Z0-9_-]+)\s*:\s*\{[\s\S]*?spring/g);
console.log('Matches:', m ? m.map(x => x.split(':')[0].trim()) : 'None');
console.log(weaJs.slice(0, 1000));

