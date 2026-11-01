const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const sDates = html.indexOf('id="section-dates"');
const sPack = html.indexOf('id="section-packing"');

console.log(html.slice(sDates, sDates + 3000));

