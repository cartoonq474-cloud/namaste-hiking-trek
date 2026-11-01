const fs = require('fs');

const html = fs.readFileSync('scratch/ebc_review_section.html', 'utf8');

const pStart = html.indexOf('id="reviews-platform-pane"');
console.log(html.substring(pStart, pStart + 3500));
