const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const eIdx = html.indexOf('class="why-book-section"');
console.log(html.substring(eIdx - 200, eIdx + 50));

