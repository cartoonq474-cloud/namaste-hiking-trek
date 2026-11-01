const fs = require('fs');

const html = fs.readFileSync('scratch/ebc_review_section.html', 'utf8');

console.log('Total characters in EBC review section:', html.length);
console.log('Includes video modal:', html.includes('id="video-review-modal"'));
console.log('Includes platform sub tabs:', html.includes('platform-sub-tabs'));
console.log('Includes customer reviews stack:', html.includes('customer-reviews-stack'));
console.log('Includes video reviews grid:', html.includes('video-reviews-grid'));
