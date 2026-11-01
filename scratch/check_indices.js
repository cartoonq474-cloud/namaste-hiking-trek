const fs = require('fs');
const refHtml = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

const stickyNavStart = refHtml.indexOf('<!-- Sticky In-Page Navigation Bar -->');
const mainLayoutStart = refHtml.indexOf('<div class="trek-main-layout">');

console.log('stickyNavStart:', stickyNavStart);
console.log('mainLayoutStart:', mainLayoutStart);

const sectionReviews = refHtml.indexOf('id="section-reviews"');
console.log('sectionReviews:', sectionReviews);
