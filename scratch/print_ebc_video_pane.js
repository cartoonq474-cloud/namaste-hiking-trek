const fs = require('fs');

const html = fs.readFileSync('scratch/ebc_review_section.html', 'utf8');

const vStart = html.indexOf('id="reviews-video-pane"');
const cStart = html.indexOf('id="reviews-customer-pane"');

console.log(html.substring(vStart, cStart));
