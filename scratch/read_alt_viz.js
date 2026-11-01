const fs = require('fs');
const js = fs.readFileSync('js/altitude-visualizer.js', 'utf8');
console.log('Size:', js.length);
console.log(js.slice(0, 1500));

