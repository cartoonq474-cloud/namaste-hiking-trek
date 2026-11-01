const fs = require('fs');
const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

const faqsIdx = html.indexOf('id="section-faqs"');
const footerIdx = html.indexOf('<footer class="site-footer"');

console.log('--- From FAQs to Footer ---');
const snippet = html.substring(faqsIdx + 500, footerIdx);
// find sidebar card
const sidebarIdx = snippet.indexOf('class="sidebar-booking-card"');
console.log('Sidebar found in snippet at:', sidebarIdx);
console.log('Snippet length:', snippet.length);
console.log('Snippet end 1000 chars:');
console.log(snippet.substring(snippet.length - 1000));
