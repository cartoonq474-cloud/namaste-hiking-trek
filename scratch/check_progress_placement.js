const fs = require('fs');
const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const pos = html.indexOf('details-progress-wrapper');
console.log(html.substring(pos - 300, pos + 400));

