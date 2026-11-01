const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const sDetailsStart = html.indexOf('<section id="section-details"');
const sAltStart = html.indexOf('<section id="section-altitude-profile"');

console.log('sDetailsStart:', sDetailsStart, 'sAltStart:', sAltStart);
console.log('Length of section details:', sAltStart - sDetailsStart);
console.log('Start of section details:');
console.log(html.slice(sDetailsStart, sDetailsStart + 1200));
console.log('End of section details:');
console.log(html.slice(sAltStart - 500, sAltStart));
