const fs = require('fs');
const html = fs.readFileSync('peak-climbing-nepal/index.html', 'utf8');

const idx = html.indexOf('Mera Peak (6,476m)</span>');
console.log(html.substring(idx - 350, idx));

