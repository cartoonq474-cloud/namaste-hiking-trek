const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const startIdx = html.indexOf('class="ebc-highlights-section"');
const endIdx = html.indexOf('class="why-book-section"');

console.log('Highlights start:', startIdx, 'Why book start:', endIdx);
if (startIdx !== -1 && endIdx !== -1) {
  console.log(html.substring(startIdx, endIdx));
}

