const fs = require('fs');
const js = fs.readFileSync('js/weather-visualizer.js', 'utf8');
console.log('weather-visualizer.js length:', js.length);
const keys = js.match(/['"][a-zA-Z0-9_-]+['"]\s*:\s*\{/g);
console.log(keys);

