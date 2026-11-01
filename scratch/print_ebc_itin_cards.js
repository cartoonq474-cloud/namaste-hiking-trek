const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const itinStart = ebc.indexOf('id="section-itinerary"');
console.log(ebc.substring(itinStart + 3000, itinStart + 6500));
