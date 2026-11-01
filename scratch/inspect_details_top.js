const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sDetails = html.indexOf('id="section-details"');
console.log(html.substring(sDetails, sDetails + 1800));

