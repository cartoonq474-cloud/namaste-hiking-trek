const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const faqIdx = ebc.indexOf('id="section-faqs"');
const nextIdx = ebc.indexOf('</section>', faqIdx);
console.log('=== SECTION FAQS FULL STRUCTURE ===');
console.log(ebc.slice(faqIdx, faqIdx + 2000));
