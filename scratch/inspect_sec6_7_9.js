const fs = require('fs');
const html = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8');

const s6 = html.indexOf('<!-- Section 6: Map & Elevation -->');
const s8 = html.indexOf('<!-- Section 8: Reviews -->');
console.log(html.substring(s6, s8));
