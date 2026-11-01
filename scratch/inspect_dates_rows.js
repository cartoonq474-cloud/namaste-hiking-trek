const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const s4 = html.indexOf('id="section-dates"');
const s5 = html.indexOf('id="section-packing"');
const sec4 = html.substring(s4, s5);

const rowIdx = sec4.indexOf('<tbody');
console.log(sec4.substring(rowIdx, rowIdx + 1500));

