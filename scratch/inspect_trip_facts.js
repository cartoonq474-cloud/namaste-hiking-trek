const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const ktfIdx = html.indexOf('<!-- Key Trip Facts Grid -->');
const navIdx = html.indexOf('class="trek-sub-nav"');

console.log('=== KEY TRIP FACTS GRID ===');
console.log(html.slice(ktfIdx, navIdx));

