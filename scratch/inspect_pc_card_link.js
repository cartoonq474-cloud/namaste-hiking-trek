const fs = require('fs');
const html = fs.readFileSync('peak-climbing-nepal/index.html', 'utf8');

const idx = html.indexOf('Mera Peak Climbing Expedition</h3>');
console.log(html.substring(idx + 350, idx + 800));

