const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const h1Idx = html.indexOf('<h1');
const sec1Idx = html.indexOf('id="section-overview"');

console.log('Distance from h1 to section-overview:', sec1Idx - h1Idx);
console.log(html.slice(h1Idx, h1Idx + 3000));

