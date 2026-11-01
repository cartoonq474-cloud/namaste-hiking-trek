const fs = require('fs');
const html = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');
const faqSection = html.match(/<section id="section-faqs"[\s\S]*?<\/section>/)?.[0] || '';
console.log('FAQ section length:', faqSection.length);
console.log('Contains faq-layout-container:', faqSection.includes('faq-layout-container'));
console.log('Contains faq-sidebar-card:', faqSection.includes('faq-sidebar-card'));
console.log('Contains faq-main-panel:', faqSection.includes('faq-main-panel'));
console.log('Contains faq-category-content active:', faqSection.includes('faq-category-content active'));

// Let's print the opening of faq-main-panel
const mainPanelMatch = faqSection.match(/<div class="faq-main-panel">[\s\S]*?(?=<div class="faq-category-content)/);
console.log('Main panel opening:', mainPanelMatch ? mainPanelMatch[0] : 'NOT FOUND');

// Let's see the first category panel in faqSection
const firstCat = faqSection.match(/<div class="faq-category-content active"[\s\S]*?<\/div>\s*<\/div>/);
console.log('First category content length:', firstCat ? firstCat[0].length : 'NOT FOUND');
if (firstCat) {
  console.log('First 300 chars of active category:\n', firstCat[0].slice(0, 300));
}
