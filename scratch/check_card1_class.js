const fs = require('fs');

const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');
const pos = html.indexOf('data-detail-id="accommodation"');
console.log(html.substring(pos - 60, pos + 200));
