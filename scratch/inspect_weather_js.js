const fs = require('fs');
const weaJs = fs.readFileSync('js/weather-visualizer.js', 'utf8');

console.log('weather-visualizer.js length:', weaJs.length);
const keyMatches = weaJs.match(/['"][a-z0-9_-]+['"]\s*:\s*\{/g);
console.log('Weather keys found:', keyMatches);

const lookupMatch = weaJs.match(/data-trek-key[^\n]*/g);
console.log('Weather lookup match:', lookupMatch);

