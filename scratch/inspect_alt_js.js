const fs = require('fs');
const js = fs.readFileSync('js/altitude-visualizer.js', 'utf8');
console.log('altitude-visualizer.js length:', js.length);
console.log('Trek keys found:');
const keys = js.match(/['"][a-zA-Z0-9_-]+['"]\s*:\s*\{/g);
console.log(keys);
