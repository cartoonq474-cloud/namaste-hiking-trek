const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');
const datesStart = html.indexOf('<section id="section-dates"');
const packStart = html.indexOf('<section id="section-packing"');

console.log(html.slice(datesStart + 800, datesStart + 2200));
