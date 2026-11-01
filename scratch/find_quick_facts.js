const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const s1Idx = html.indexOf('id="section-overview"');
console.log('=== BEFORE SECTION OVERVIEW (last 3000 chars) ===');
console.log(html.slice(s1Idx - 3000, s1Idx));

