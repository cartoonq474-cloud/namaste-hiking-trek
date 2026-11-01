const fs = require('fs');

const html = fs.readFileSync('scratch/ebc_review_section.html', 'utf8');

const cStart = html.indexOf('id="reviews-customer-pane"');
const pStart = html.indexOf('id="reviews-platform-pane"');

console.log(html.substring(cStart, pStart));
