const fs = require('fs');
const html = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const faqsIdx = html.indexOf('<section id="section-faqs"');
const afterFaqs = html.indexOf('</section>', faqsIdx);
console.log('section-faqs starts at:', faqsIdx);
console.log('section-faqs ends at:', afterFaqs);

const sidebarIdx = html.indexOf('class="sidebar-booking-card"');
console.log('sidebar-booking-card at:', sidebarIdx);
