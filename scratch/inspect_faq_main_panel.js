const fs = require('fs');

const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const faqStart = actHtml.indexOf('id="section-faqs"');
const sbStart = actHtml.indexOf('class="sidebar-booking-card"');
const faqHtml = actHtml.slice(faqStart, sbStart);

const mainPanelIdx = faqHtml.indexOf('faq-main-panel');
if (mainPanelIdx !== -1) {
  console.log('--- Inside faq-main-panel (first 2500 chars) ---');
  console.log(faqHtml.slice(mainPanelIdx, mainPanelIdx + 2500));
}
