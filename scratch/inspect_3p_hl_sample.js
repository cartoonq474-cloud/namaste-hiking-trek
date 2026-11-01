const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const sIdx = html.indexOf('<!-- Highlight 1 -->');
const sEnd = html.indexOf('<!-- Highlight 3 -->');
console.log(html.substring(sIdx, sEnd));

