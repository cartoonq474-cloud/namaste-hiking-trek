const fs = require('fs');

const html = fs.readFileSync('scratch/ebc_review_section.html', 'utf8');

const pStart = html.indexOf('id="reviews-platform-pane"');
const modalStart = html.indexOf('id="video-review-modal"');

console.log(html.substring(pStart, modalStart));
