const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const sDates = html.indexOf('id="section-dates"');
console.log('=== DATES SECTION ===');
console.log(html.slice(sDates, sDates + 800));

const sBook = html.indexOf('id="section-booking"');
console.log('=== BOOKING SECTION ===');
console.log(html.slice(sBook, sBook + 800));

