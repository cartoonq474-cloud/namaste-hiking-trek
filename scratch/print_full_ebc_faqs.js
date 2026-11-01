const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const faqStart = ebcHtml.indexOf('id="section-faqs"');
const faqEnd = ebcHtml.indexOf('</section>', faqStart);

console.log('--- EBC FAQS HTML ---');
console.log(ebcHtml.slice(faqStart, faqStart + 4000));
