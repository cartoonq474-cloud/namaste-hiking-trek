const fs = require('fs');

const html = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const pos = html.indexOf('data-detail-id="accommodation"');
console.log(html.substring(pos, pos + 1500));
