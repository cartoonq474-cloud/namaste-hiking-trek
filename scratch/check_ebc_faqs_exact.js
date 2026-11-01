const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const p = ebc.indexOf('id="section-faqs"');
console.log(ebc.substring(p, p + 2500));
