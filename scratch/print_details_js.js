const fs = require('fs');

const js = fs.readFileSync('js/trek-details.js', 'utf8');

const idx = js.indexOf('details-progress-ring-bar');
console.log(js.slice(idx - 100, idx + 1000));
