const fs = require('fs');
const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const s9 = html.indexOf('<!-- Section 9: FAQs -->');
console.log(html.substring(s9 + 4000, s9 + 7000));
