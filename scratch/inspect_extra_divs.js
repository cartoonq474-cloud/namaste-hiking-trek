const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const modalIdx = html.indexOf('<!-- Inquiry Modal -->');
console.log(html.substring(modalIdx - 500, modalIdx + 100));

