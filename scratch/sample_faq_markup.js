const fs = require('fs');

const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const sFaqs = gokyo.indexOf('id="section-faqs"');
const faqSample = gokyo.slice(sFaqs, sFaqs + 4000);

const qMatches = [...faqSample.matchAll(/<div class="faq-item[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g)];
console.log('FAQ items sampled:', qMatches.length);
if (qMatches.length > 0) {
  console.log(qMatches[0][0].slice(0, 500));
}
