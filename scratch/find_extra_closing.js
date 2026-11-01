const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');
const footerIdx = html.indexOf('<footer');
console.log('Snippet before footer:');
console.log(html.slice(footerIdx - 600, footerIdx + 50));
