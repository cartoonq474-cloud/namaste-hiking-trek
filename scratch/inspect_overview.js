const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');
const start = html.indexOf('id="section-overview"');
const end = html.indexOf('id="section-itinerary"');
console.log('Overview start:', start, 'Itinerary start:', end);
console.log('Snippet of overview start:');
console.log(html.substring(start - 30, start + 300));
console.log('Snippet of overview end:');
console.log(html.substring(end - 300, end));
