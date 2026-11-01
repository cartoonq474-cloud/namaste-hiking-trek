const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const s3 = html.indexOf('id="section-includes"');
const s4 = html.indexOf('id="section-dates"');
const s5 = html.indexOf('id="section-packing"');

console.log('--- INCLUDES / EXCLUDES SNIPPET ---');
console.log(html.substring(s3, s3 + 1200));

console.log('--- DATES SNIPPET ---');
console.log(html.substring(s4, s4 + 1200));

