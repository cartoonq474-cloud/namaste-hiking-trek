const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const count = (html.match(/<h3 class="faq-question-title">/g) || []).length;
console.log('Total h3.faq-question-title count:', count);

const whyBookH4Count = (html.match(/<h4 class="why-book-card-title">/g) || []).length;
const whyBookDivCount = (html.match(/<div class="why-book-card-title">/g) || []).length;
console.log('Why Book H4 count:', whyBookH4Count, '| Why Book Div count:', whyBookDivCount);

const incExcH4Count = (html.match(/<h4 class="inc-exc-card-title">/g) || []).length;
const incExcDivCount = (html.match(/<div class="inc-exc-card-title">/g) || []).length;
console.log('Inc/Exc H4 count:', incExcH4Count, '| Inc/Exc Div count:', incExcDivCount);

const depH4Count = (html.match(/<h4 class="departure-title">/g) || []).length;
const depDivCount = (html.match(/<div class="departure-title">/g) || []).length;
console.log('Departure H4 count:', depH4Count, '| Departure Div count:', depDivCount);

const accH3Count = (html.match(/<h3 class="detail-accordion-title">/g) || []).length;
const accH4Count = (html.match(/<h4 class="detail-accordion-title">/g) || []).length;
console.log('Detail Accordion H3 count:', accH3Count, '| H4 count:', accH4Count);

const keyFactsH2 = (html.match(/<h2[^>]*>\s*<svg[^>]*>[\s\S]*?Key Trip Facts\s*<\/h2>/g) || []).length;
console.log('Key Trip Facts H2 count:', keyFactsH2);
