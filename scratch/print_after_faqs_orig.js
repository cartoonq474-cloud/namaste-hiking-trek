const fs = require('fs');
const orig = fs.readFileSync('scratch/original_git_everest_view.html', 'utf8');

const faqsSectionEnd = orig.lastIndexOf('</section>');
console.log('Last </section> in orig index:', faqsSectionEnd);

// Find id="section-faqs"
const faqsStart = orig.indexOf('id="section-faqs"');
const thisFaqsEnd = orig.indexOf('</section>', faqsStart);

console.log('After faqs section in orig:');
console.log(orig.slice(thisFaqsEnd, thisFaqsEnd + 1000));
