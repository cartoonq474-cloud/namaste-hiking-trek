const fs = require('fs');

const trekDetails = fs.readFileSync('js/trek-details.js', 'utf8');
const idx = trekDetails.indexOf('dates-mode-btn');
console.log('--- trek-details.js dates logic ---');
console.log(trekDetails.slice(idx - 100, idx + 1200));
