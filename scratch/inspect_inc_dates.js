const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const s3 = html.indexOf('id="section-includes"');
const s4 = html.indexOf('id="section-dates"');
const s5 = html.indexOf('id="section-packing"');

console.log('Includes start:', s3, 'Dates start:', s4, 'Packing start:', s5);
console.log('Snippet of includes:');
console.log(html.substring(s3, s3 + 500));
console.log('Snippet of dates:');
console.log(html.substring(s4, s4 + 500));

