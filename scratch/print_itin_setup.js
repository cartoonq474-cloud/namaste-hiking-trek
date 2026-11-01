const fs = require('fs');

const js = fs.readFileSync('js/trek-details.js', 'utf8');
const lines = js.split('\n');
console.log(lines.slice(79, 145).join('\n'));
