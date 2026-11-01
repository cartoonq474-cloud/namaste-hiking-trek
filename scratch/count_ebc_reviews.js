const fs = require('fs');

const html = fs.readFileSync('scratch/ebc_review_section.html', 'utf8');

const cStart = html.indexOf('id="reviews-customer-pane"');
const pStart = html.indexOf('id="reviews-platform-pane"');
const mStart = html.indexOf('id="video-review-modal"');

const custHtml = html.substring(cStart, pStart);
const platHtml = html.substring(pStart, mStart);

const custReviews = [...custHtml.matchAll(/<span class="reviewer-name">([^<]+)<\/span>/g)].map(m => m[1]);
console.log('Customer reviews:', custReviews);

const platReviews = [...platHtml.matchAll(/<div class="customer-review-card platform-review-item"[^>]*data-platform="([^"]+)"[^>]*>[\s\S]*?<span class="reviewer-name">([^<]+)<\/span>/g)].map(m => ({ platform: m[1], name: m[2] }));
console.log('Platform reviews:', platReviews);
