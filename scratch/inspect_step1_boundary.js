const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const s1Idx = html.indexOf('id="section-overview"');

// Find the section wrapper
const wrapperIdx = html.indexOf('data-trek-details-wrapper');
console.log('wrapperIdx:', wrapperIdx);
console.log(html.slice(wrapperIdx - 100, wrapperIdx + 150));

