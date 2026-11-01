const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sWea = html.indexOf('id="section-weather"');
const sMap = html.indexOf('id="section-map"');
const sBook = html.indexOf('id="section-booking"');
const sRev = html.indexOf('id="section-reviews"');
const sFaq = html.indexOf('id="section-faqs"');
const endMain = html.indexOf('</main>');

console.log('--- SECTION WEATHER (full) ---');
console.log(html.substring(sWea, sMap));

console.log('--- SECTION MAP (full) ---');
console.log(html.substring(sMap, sBook));

console.log('--- SECTION BOOKING (full) ---');
console.log(html.substring(sBook, sRev));

console.log('--- SECTION FAQS (start) ---');
console.log(html.substring(sFaq, sFaq + 1200));
