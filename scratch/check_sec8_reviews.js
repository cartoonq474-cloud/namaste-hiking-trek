const fs = require('fs');
const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const s8 = html.indexOf('<!-- Section 8: Reviews -->');
const s9 = html.indexOf('<!-- Section 9: FAQs -->');
console.log(html.substring(s8, s8 + 1800));
