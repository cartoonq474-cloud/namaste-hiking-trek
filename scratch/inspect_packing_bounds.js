const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sPack = html.indexOf('id="section-packing"');
const sNext = html.indexOf('id="section-details"');

console.log('Packing start:', sPack, 'Details start:', sNext);
console.log('Snippet of packing start:');
console.log(html.substring(sPack - 50, sPack + 350));
console.log('Snippet of packing end:');
console.log(html.substring(sNext - 300, sNext));

