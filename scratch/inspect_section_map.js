const fs = require('fs');
const content = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const start = content.indexOf('id="section-map"');
const end = content.indexOf('id="section-booking"');
console.log(content.slice(start, end));
