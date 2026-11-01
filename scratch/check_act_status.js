const fs = require('fs');

const content = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

console.log('File length:', content.length);
console.log('Contains faq-layout-container?', content.includes('faq-layout-container'));
console.log('Contains sidebar-booking-card?', content.includes('sidebar-booking-card'));
console.log('Index of section-faqs:', content.indexOf('id="section-faqs"'));
console.log('Index of sidebar-booking-card:', content.indexOf('class="sidebar-booking-card"'));

const openDivs = (content.match(/<div(\s|>)/gi) || []).length;
const closeDivs = (content.match(/<\/div>/gi) || []).length;
console.log('Open divs:', openDivs, 'Close divs:', closeDivs, 'Diff:', openDivs - closeDivs);

// Check around sidebar-booking-card and section-faqs
const faqIdx = content.indexOf('id="section-faqs"');
const sbIdx = content.indexOf('class="sidebar-booking-card"');

if (faqIdx !== -1) {
  console.log('\n--- Slice around section-faqs (first 200 chars) ---');
  console.log(content.slice(faqIdx, faqIdx + 200));
}

if (sbIdx !== -1) {
  console.log('\n--- Slice before sidebar-booking-card (200 chars) ---');
  console.log(content.slice(Math.max(0, sbIdx - 200), sbIdx));
  console.log('\n--- Slice after sidebar-booking-card (200 chars) ---');
  console.log(content.slice(sbIdx, sbIdx + 200));
}
