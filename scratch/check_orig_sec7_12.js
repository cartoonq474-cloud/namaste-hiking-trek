const fs = require('fs');
const orig = fs.readFileSync('scratch/original_git_everest_view_cleaned.html', 'utf8');
const altIdx = orig.indexOf('<section id="section-altitude-profile"');
const faqsIdx = orig.indexOf('id="section-faqs"');
const faqsEnd = orig.indexOf('</section>', faqsIdx) + 10;
const sec7_12 = orig.slice(altIdx, faqsEnd);
console.log('sec7_12 from orig length:', sec7_12.length);
console.log('data-trek-key occurrences:', sec7_12.match(/data-trek-key="[^"]+"/g));
