const fs = require('fs');
const html = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const faqsIdx = html.indexOf('<section id="section-faqs"');
console.log('faqsIdx:', faqsIdx);

if (faqsIdx !== -1) {
  console.log('Snippet around faqs (2000 chars):\n', html.slice(faqsIdx, faqsIdx + 2000));
}

const sidebarIdx = html.indexOf('sidebar-booking-card');
console.log('sidebarIdx:', sidebarIdx);
if (sidebarIdx !== -1) {
  console.log('Snippet around sidebar (1000 chars):\n', html.slice(sidebarIdx - 100, sidebarIdx + 1000));
}

const youMightLikeIdx = html.indexOf('class="you-might-like-section"');
console.log('youMightLikeIdx:', youMightLikeIdx);
