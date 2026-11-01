const fs = require('fs');
const altJs = fs.readFileSync('js/altitude-visualizer.js', 'utf8');

console.log('Contains mera:', altJs.toLowerCase().includes('mera'));

