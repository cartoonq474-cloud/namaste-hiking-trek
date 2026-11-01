const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const s = ebc.indexOf('id="section-itinerary"');
console.log(ebc.slice(s, s + 1500));
