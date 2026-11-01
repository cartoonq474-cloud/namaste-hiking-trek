const fs = require('fs');
const mContent = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const endFaqs = mContent.indexOf('</section>', mContent.indexOf('id="section-faqs"'));
console.log('Mardi after section-faqs:');
console.log(mContent.slice(endFaqs + 10, endFaqs + 1500));
