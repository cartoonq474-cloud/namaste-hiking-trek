const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const faqsStart = ebc.indexOf('id="section-faqs"');
const closingSection = ebc.indexOf('</section>', faqsStart);
console.log(ebc.substring(closingSection, closingSection + 800));
