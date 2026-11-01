const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const faqStart = ebcHtml.indexOf('id="section-faqs"');
console.log(ebcHtml.slice(faqStart, faqStart + 3500));
