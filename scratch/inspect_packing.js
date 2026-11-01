const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');
const packStart = html.indexOf('<section id="section-packing"');
const detStart = html.indexOf('<section id="section-details"');

console.log('packStart:', packStart, 'detStart:', detStart);
console.log('Packing snippet:');
console.log(html.slice(packStart, packStart + 1200));
