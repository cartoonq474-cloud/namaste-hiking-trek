const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-luxury-trek/index.html', 'utf8');

const itinStart = html.indexOf('<section id="section-itinerary"');
const itinEnd = html.indexOf('</section>', itinStart);
console.log('Itinerary start:', itinStart, 'end:', itinEnd);
console.log('Snippet:\n', html.slice(itinStart, itinStart + 1500));
