const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sIdx = html.indexOf('Mera Peak Climbing Highlights');
console.log(html.substring(sIdx - 100, sIdx + 4000));

