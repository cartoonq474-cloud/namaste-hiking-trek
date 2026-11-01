const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sDetails = html.indexOf('id="section-details"');
const sRest = html.indexOf('id="section-altitude-profile"');

console.log('Details start:', sDetails, 'Altitude start:', sRest);
console.log('Snippet of details start:');
console.log(html.substring(sDetails - 50, sDetails + 450));
console.log('Snippet of details end:');
console.log(html.substring(sRest - 300, sRest));

