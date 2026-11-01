const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const s1Idx = html.indexOf('id="section-overview"');
const galIdx = html.indexOf('trek-gallery-collage');

console.log('Between gallery and section-overview:');
console.log(html.slice(galIdx + 500, s1Idx).slice(0, 2000));

