const fs = require('fs');
const html = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8');

const s5 = html.indexOf('<!-- Section 5: Trip Details -->');
const s6 = html.indexOf('<!-- Section 6:');
const s5Text = html.substring(s5, s6);

console.log(s5Text.substring(1500, 3500));
