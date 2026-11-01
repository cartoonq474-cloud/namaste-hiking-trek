const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Section Details inspect
const detStart = ebc.indexOf('id="section-details"');
console.log('=== SECTION DETAILS IN EBC ===');
console.log(ebc.substring(detStart, detStart + 2200));

// Section FAQs inspect
const faqStart = ebc.indexOf('id="section-faqs"');
console.log('\n=== SECTION FAQS IN EBC ===');
console.log(ebc.substring(faqStart, faqStart + 2200));
