const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const sDates = html.indexOf('id="section-dates"');
const sPack = html.indexOf('id="section-packing"');

const slice = html.slice(sDates, sPack);
const titles = slice.match(/departure-title\">.*?<\/h4>/g);
console.log('Departure titles found:', titles);

