const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const p = ebc.indexOf('padding: 30px 0 10px 0');
const end = ebc.indexOf('class="trek-content-grid"');
console.log(ebc.substring(p, end));
