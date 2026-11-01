const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const start = ebc.indexOf('id="section-itinerary"');
console.log(ebc.slice(start - 50, start + 2500));
