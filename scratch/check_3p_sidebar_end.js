const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const modalIdx = html.indexOf('<!-- Inquiry Modal -->');
console.log(html.substring(modalIdx - 300, modalIdx + 50));

