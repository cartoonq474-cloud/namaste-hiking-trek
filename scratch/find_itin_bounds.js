const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');
const incStart = html.indexOf('<section id="section-includes"');
console.log(html.slice(incStart - 1200, incStart));
