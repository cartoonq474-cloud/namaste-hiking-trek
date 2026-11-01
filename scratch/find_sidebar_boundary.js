const fs = require('fs');
const refHtml = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

const faqsIdx = refHtml.indexOf('id="section-faqs"');
const afterFaqs = refHtml.indexOf('</section>', faqsIdx);
console.log('afterFaqs index:', afterFaqs);
console.log(refHtml.slice(afterFaqs, afterFaqs + 600));
