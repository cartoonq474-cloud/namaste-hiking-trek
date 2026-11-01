const fs = require('fs');

const abc = fs.readFileSync('trek/annapurna-base-camp-trek/index.html', 'utf8');

const faqSec = abc.substring(abc.indexOf('id="section-faqs"'), abc.indexOf('</section>', abc.indexOf('id="section-faqs"')));

const faqAnswers = [...faqSec.matchAll(/class="[^"]*faq-[^"]*answer[^"]*"([^>]*)>/g)].map(m => m[0]);
console.log('Total FAQ answer tags:', faqAnswers.length);
console.log('Sample FAQ answer tags:', faqAnswers.slice(0, 5));

const faqInlineStyles = [...faqSec.matchAll(/class="faq-[^"]*"[^>]*style="([^"]*)"/g)].map(m => m[0]);
console.log('Inline styles in FAQ items:', faqInlineStyles.length);
if (faqInlineStyles.length) console.log(faqInlineStyles.slice(0, 5));
