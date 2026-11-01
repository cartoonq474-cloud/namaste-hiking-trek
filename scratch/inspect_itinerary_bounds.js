const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const start = html.indexOf('id="section-itinerary"');
const end = html.indexOf('id="section-includes"');
console.log('Itinerary start:', start, 'Includes start:', end);
console.log('Snippet of itinerary header:');
console.log(html.substring(start - 40, start + 400));
console.log('Snippet of itinerary end:');
console.log(html.substring(end - 400, end));

