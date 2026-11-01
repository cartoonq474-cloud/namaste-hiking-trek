const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-luxury-trek/index.html', 'utf8');

const itinStart = html.indexOf('<section id="section-itinerary"');
const itinEnd = html.indexOf('</section>', itinStart);
const itinContent = html.slice(itinStart, itinEnd);

console.log('Itinerary length:', itinContent.length);
// Check for day headings
const days = [...itinContent.matchAll(/Day\s+(\d+)/gi)];
console.log('Day occurrences:', days.map(d => d[0]).slice(0, 25));

// Check for accordion classes
console.log('Accordion elements:', [...itinContent.matchAll(/class="([^"]*accordion[^"]*)"/g)].map(m => m[1]));
