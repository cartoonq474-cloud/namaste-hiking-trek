const fs = require('fs');
const js = fs.readFileSync('js/trek-details.js', 'utf8');

const sIdx = js.indexOf('function setupAccordions');
console.log(js.slice(sIdx, sIdx + 1500));
