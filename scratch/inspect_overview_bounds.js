const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');
const ovStart = html.indexOf('<section id="section-overview"');
const itinStart = html.indexOf('<section id="section-itinerary"');

console.log('ovStart:', ovStart, 'itinStart:', itinStart);
console.log('Length of section-overview:', itinStart - ovStart);
console.log('Start snippet:');
console.log(html.slice(ovStart, ovStart + 400));
console.log('End snippet:');
console.log(html.slice(itinStart - 300, itinStart + 50));
