const fs = require('fs');
const orig = fs.readFileSync('scratch/original_git_everest_view_cleaned.html', 'utf8');
const faqsIdx = orig.indexOf('id="section-faqs"');
const faqsEnd = orig.indexOf('</section>', faqsIdx) + 10;
console.log('Orig FAQs total length:', faqsEnd - faqsIdx);
console.log(orig.slice(faqsIdx, faqsIdx + 1000));
console.log('... [middle] ...');
console.log(orig.slice(faqsEnd - 800, faqsEnd));
