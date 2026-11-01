const fs = require('fs');

const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

console.log('Contains faq-accordion-list?', actHtml.includes('faq-accordion-list'));
console.log('Contains faq-question-btn?', actHtml.includes('faq-question-btn'));
console.log('Contains faq-layout-container?', actHtml.includes('faq-layout-container'));
console.log('Matches for id="section-faqs":', (actHtml.match(/id="section-faqs"/gi) || []).length);
console.log('Matches for faq-layout-container:', (actHtml.match(/class="[^"]*faq-layout-container[^"]*"/gi) || []).length);
