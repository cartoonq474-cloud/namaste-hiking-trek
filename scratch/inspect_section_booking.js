const fs = require('fs');
const content = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const start = content.indexOf('id="section-booking"');
const end = content.indexOf('id="section-reviews"');
console.log(content.slice(start, end));
