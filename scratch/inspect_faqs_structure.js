const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sFaq = html.indexOf('id="section-faqs"');
const secFaq = html.substring(sFaq);

// Find categories in sidebar
const catBtns = secFaq.match(/data-category="[^"]+"/g);
console.log('FAQ Categories:');
console.log(catBtns);

const totalFaqs = (secFaq.match(/class="faq-accordion-card"/g) || []).length;
console.log('Total FAQ cards:', totalFaqs);

const firstFaq = secFaq.indexOf('class="faq-accordion-card"');
console.log(secFaq.substring(firstFaq, firstFaq + 600));
