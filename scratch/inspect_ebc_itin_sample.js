const fs = require('fs');

const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const s2 = html.indexOf('<!-- Section 2: Itinerary -->');
const d1 = html.indexOf('itinerary-card', s2);

console.log(html.substring(d1 + 4500, d1 + 6500));
