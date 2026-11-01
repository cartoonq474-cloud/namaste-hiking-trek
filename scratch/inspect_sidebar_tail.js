const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');
const inqIdx = html.indexOf('<!-- Inquiry Modal -->');
console.log(html.slice(inqIdx - 800, inqIdx));
