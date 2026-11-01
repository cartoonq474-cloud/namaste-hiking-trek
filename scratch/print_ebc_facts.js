const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const p = ebc.indexOf('class="trek-facts-grid"');
console.log(ebc.substring(p - 100, p + 2500));
