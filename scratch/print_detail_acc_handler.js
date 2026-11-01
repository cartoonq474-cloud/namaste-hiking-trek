const fs = require('fs');
const js = fs.readFileSync('js/trek-details.js', 'utf8');

console.log(js.slice(15200, 16400));
