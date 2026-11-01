const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// 1. FAQs in EBC
const faqStart = ebcHtml.indexOf('id="section-faqs"');
const faqEnd = ebcHtml.indexOf('</section>', faqStart);
console.log('--- EBC FAQS (first 1500 chars) ---');
console.log(ebcHtml.slice(faqStart, faqStart + 1500));

// 2. Sidebar booking card in EBC
const sbStart = ebcHtml.indexOf('class="sidebar-booking-card"');
const sbEnd = ebcHtml.indexOf('</div>\n        </div>\n      </div>', sbStart);
console.log('\n--- EBC SIDEBAR BOOKING CARD (first 2500 chars) ---');
console.log(ebcHtml.slice(sbStart - 100, sbStart + 2400));
