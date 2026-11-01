const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sIdx = html.indexOf('class="ebc-highlights-section"');
const eIdx = html.indexOf('class="why-book-section"');

console.log('Start index:', sIdx, 'End index:', eIdx);
console.log('Before start:');
console.log(html.substring(sIdx - 150, sIdx));

