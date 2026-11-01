const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const sMap = html.indexOf('id="section-map"');
const sBook = html.indexOf('id="section-booking"');

console.log('=== MAP SECTION ===');
console.log(html.slice(sMap, sBook));

