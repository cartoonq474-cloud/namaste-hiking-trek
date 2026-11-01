const fs = require('fs');

const html = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const faqsIdx = html.indexOf('id="section-faqs"');
const sbIdx = html.indexOf('class="sidebar-booking-card"');
console.log('--- BETWEEN FAQS AND SIDEBAR ---');
console.log(html.slice(sbIdx - 300, sbIdx + 100));

const sbEnd = html.indexOf('</section>', sbIdx);
console.log('--- AROUND SIDEBAR END ---');
console.log(html.slice(sbEnd - 200, sbEnd + 200));
