const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');

const s7 = html.indexOf('id="section-altitude-profile"');
const s8 = html.indexOf('id="section-weather"');
const s9 = html.indexOf('id="section-map"');
const s10 = html.indexOf('id="section-booking"');
const s11 = html.indexOf('id="section-reviews"');
const s12 = html.indexOf('id="section-faqs"');
const footer = html.indexOf('<footer');

console.log({ s7, s8, s9, s10, s11, s12, footer });
console.log('Section 7 start:');
console.log(html.slice(s7, s7 + 350));
console.log('Section 12 start:');
console.log(html.slice(s12, s12 + 350));

