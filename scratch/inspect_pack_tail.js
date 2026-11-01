const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sPack = html.indexOf('id="section-packing"');
const sNext = html.indexOf('id="section-details"');
const secPack = html.substring(sPack, sNext);

const lastCat = secPack.indexOf('Miscellaneous');
console.log(secPack.substring(lastCat));

