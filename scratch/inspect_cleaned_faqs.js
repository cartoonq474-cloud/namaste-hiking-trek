const fs = require('fs');
const orig = fs.readFileSync('scratch/original_git_everest_view_cleaned.html', 'utf8');
const faqsIdx = orig.indexOf('id="section-faqs"');
const faqsEnd = orig.indexOf('</section>', faqsIdx) + 10;
console.log('--- Snippet after section-faqs end in cleaned orig: ---');
console.log(orig.slice(faqsEnd, faqsEnd + 600));

console.log('--- Checking tag counts in cleaned orig ---');
const mainOpen = (orig.match(/<main\b/gi) || []).length;
const mainClose = (orig.match(/<\/main>/gi) || []).length;
console.log('mainOpen:', mainOpen, 'mainClose:', mainClose);
