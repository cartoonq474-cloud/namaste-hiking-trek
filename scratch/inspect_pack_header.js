const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sPack = html.indexOf('id="section-packing"');
const firstCat = html.indexOf('Hiking Gear');
console.log(html.substring(sPack, firstCat));

