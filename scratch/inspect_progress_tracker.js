const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const sIdx = html.indexOf('class="details-progress-wrapper"');
console.log(html.slice(sIdx - 50, sIdx + 1200));

