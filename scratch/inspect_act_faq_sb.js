const fs = require('fs');

const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Check FAQ section in ACT
const actFaqStart = actHtml.indexOf('id="section-faqs"');
const actSbStart = actHtml.indexOf('class="sidebar-booking-card"');

console.log('--- ACT FAQ section length & sample ---');
if (actFaqStart !== -1) {
  const faqSlice = actHtml.slice(actFaqStart, actSbStart !== -1 ? actSbStart : actFaqStart + 5000);
  console.log('FAQ section slice length:', faqSlice.length);
  console.log('Has faq-layout-container:', faqSlice.includes('faq-layout-container'));
  console.log('Has faq-category-btn:', faqSlice.includes('faq-category-btn'));
  console.log('Has faq-item-question:', faqSlice.includes('faq-item-question'));
  console.log('Has faq-item.active:', faqSlice.includes('faq-item'));
  console.log('First 500 chars of ACT FAQ:');
  console.log(faqSlice.slice(0, 500));
}

// Check Sidebar in ACT
console.log('\n--- ACT Sidebar slice ---');
if (actSbStart !== -1) {
  const sbSlice = actHtml.slice(actSbStart, actSbStart + 1500);
  console.log(sbSlice);
}
