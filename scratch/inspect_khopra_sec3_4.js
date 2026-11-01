const fs = require('fs');
const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const s4 = html.indexOf('<!-- Section 4: Packing List -->');
const s5 = html.indexOf('<!-- Section 5: Trip Details -->');

console.log(html.substring(s4, s4 + 1000));
