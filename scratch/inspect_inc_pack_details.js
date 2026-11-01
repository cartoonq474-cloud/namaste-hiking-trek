const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const s3Start = html.indexOf('<section id="section-includes"');
const sDatesStart = html.indexOf('<section id="section-dates"');

console.log('=== CURRENT INCLUDES SECTION ===');
console.log(html.slice(s3Start, s3Start + 2500));

const sPackStart = html.indexOf('<section id="section-packing"');
const sDetailsStart = html.indexOf('<section id="section-details"');

console.log('=== CURRENT PACKING SECTION ===');
console.log(html.slice(sPackStart, sPackStart + 2500));

