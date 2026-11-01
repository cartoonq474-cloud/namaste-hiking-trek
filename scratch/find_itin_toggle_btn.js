const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const m1 = ebc.indexOf('toggle-all-itinerary');
const m2 = ebc.indexOf('itin-expand-all-btn');
console.log('m1:', m1, 'm2:', m2);
if (m1 !== -1) console.log(ebc.slice(m1 - 50, m1 + 200));
if (m2 !== -1) console.log(ebc.slice(m2 - 50, m2 + 200));
