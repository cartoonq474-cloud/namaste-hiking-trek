const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');
const incStart = html.indexOf('<section id="section-includes"');
const datesStart = html.indexOf('<section id="section-dates"');
const packStart = html.indexOf('<section id="section-packing"');

console.log('incStart:', incStart, 'datesStart:', datesStart, 'packStart:', packStart);
console.log('Includes start snippet:');
console.log(html.slice(incStart, incStart + 400));
console.log('Dates start snippet:');
console.log(html.slice(datesStart, datesStart + 400));
console.log('Packing start snippet:');
console.log(html.slice(packStart - 100, packStart + 200));

