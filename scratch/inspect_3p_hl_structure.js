const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const sIdx = html.indexOf('Highlights');
console.log(html.substring(sIdx - 50, sIdx + 1500));

