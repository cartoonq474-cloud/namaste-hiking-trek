const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sWea = html.indexOf('id="section-weather"');
const sMap = html.indexOf('id="section-map"');
const sBook = html.indexOf('id="section-booking"');
const sRev = html.indexOf('id="section-reviews"');
const sFaq = html.indexOf('id="section-faqs"');

console.log('sWea:', sWea, 'sMap:', sMap, 'sBook:', sBook, 'sRev:', sRev, 'sFaq:', sFaq);
console.log('Weather snippet:');
console.log(html.substring(sWea, sWea + 400));
console.log('Map snippet:');
console.log(html.substring(sMap, sMap + 400));

