const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const start = html.indexOf('<!-- Day 01 -->');
const day2 = html.indexOf('<!-- Day 02 -->');
console.log(html.substring(start, day2));

