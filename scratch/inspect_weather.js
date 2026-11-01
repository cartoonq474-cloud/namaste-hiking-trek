const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const sWea = html.indexOf('id="section-weather"');
const sMap = html.indexOf('id="section-map"');

console.log('=== WEATHER SECTION ===');
console.log(html.slice(sWea, sMap));

