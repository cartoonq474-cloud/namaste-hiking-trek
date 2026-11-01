const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const p = ebc.indexOf('id="section-includes"');
const nextSection = ebc.indexOf('<section', p + 10);
console.log(ebc.substring(nextSection - 200, nextSection + 100));
