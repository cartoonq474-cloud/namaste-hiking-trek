const fs = require('fs');
const html = fs.readFileSync('scratch/competitor_itinerary_full.html', 'utf8');

const pos = html.indexOf('Arrival in Kathmandu');
console.log(html.slice(pos - 300, pos + 2500));
