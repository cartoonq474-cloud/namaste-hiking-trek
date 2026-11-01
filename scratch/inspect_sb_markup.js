const fs = require('fs');
const origCleaned = fs.readFileSync('scratch/original_git_everest_view_cleaned.html', 'utf8');
const faqsIdx = origCleaned.indexOf('id="section-faqs"');
const faqsEnd = origCleaned.indexOf('</section>', faqsIdx) + 10;
const sb = origCleaned.slice(faqsEnd, faqsEnd + 3500);
console.log(sb);
