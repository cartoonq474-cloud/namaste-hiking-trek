const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = html.indexOf('.ebc-highlight-card');
console.log(html.substring(sIdx - 100, sIdx + 1200));

