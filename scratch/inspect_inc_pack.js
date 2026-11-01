const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const s3Start = html.indexOf('<section id="section-includes"');
const sDatesStart = html.indexOf('<section id="section-dates"');
const sPackStart = html.indexOf('<section id="section-packing"');
const sDetailsStart = html.indexOf('<section id="section-details"');

console.log('s3Start:', s3Start, 'sDatesStart:', sDatesStart);
console.log('sPackStart:', sPackStart, 'sDetailsStart:', sDetailsStart);

console.log('=== INCLUDES SECTION START ===');
console.log(html.slice(s3Start, s3Start + 400));

console.log('=== PACKING SECTION START ===');
console.log(html.slice(sPackStart, sPackStart + 400));

