const fs = require('fs');
const js = fs.readFileSync('js/trek-details.js', 'utf8');

console.log('Has dates mode toggle listener:', js.includes('dates-mode-btn'));
console.log('Has review tab listener:', js.includes('review-tab-btn'));
console.log('Has faq category listener:', js.includes('faq-category-btn'));
console.log('Has load more dates listener:', js.includes('btn-load-more-dates'));
