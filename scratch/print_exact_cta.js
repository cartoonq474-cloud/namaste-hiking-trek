const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const idx = ebc.indexOf('Not satisfied with this Itinerary');
console.log(ebc.slice(idx - 250, idx + 400));
