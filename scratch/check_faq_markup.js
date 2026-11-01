const fs = require('fs');
const html = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');
const faqSection = html.match(/<section id="section-faqs"[\s\S]*?<\/section>/)?.[0] || '';

// Find the first 2 faq items
const faqMatches = [...faqSection.matchAll(/<div class="faq-item[^"]*"[\s\S]*?(?=<div class="faq-item|<\/div>\s*<\/div>\s*<div class="faq-category|<\/section>)/g)];

console.log('Total faq matches found:', faqMatches.length);
if (faqMatches.length > 0) {
  console.log('--- FAQ ITEM 1 ---');
  console.log(faqMatches[0][0].slice(0, 600));
  console.log('--- FAQ ITEM 2 ---');
  console.log(faqMatches[1][0].slice(0, 600));
}
