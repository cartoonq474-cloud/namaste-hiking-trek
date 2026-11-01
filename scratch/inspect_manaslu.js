const fs = require('fs');
const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

console.log('Total characters:', html.length);

const sections = [...html.matchAll(/id="(section-[^"]+)"/g)].map(m => m[1]);
console.log('Sections found:', sections);

const subNavs = [...html.matchAll(/class="trek-sub-nav-btn[^"]*"[^>]*data-target="([^"]+)"/g)].map(m => m[1]);
console.log('Sub-nav buttons target:', subNavs);

// Check data-trek-key
const trekKeyMatch = html.match(/data-trek-key="([^"]+)"/);
console.log('data-trek-key:', trekKeyMatch ? trekKeyMatch[1] : 'none');

// Check H1
const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
console.log('H1:', h1Match ? h1Match[1].replace(/\s+/g, ' ').trim() : 'none');

// Check Days in itinerary
const dayCards = [...html.matchAll(/class="itinerary-card"/g)];
console.log('Itinerary cards count:', dayCards.length);

// Check Accordion cards in section-details
const detailCards = [...html.matchAll(/class="detail-accordion-card"/g)];
console.log('Detail accordion cards count:', detailCards.length);

// Check FAQs
const faqCards = [...html.matchAll(/class="faq-card"/g)];
console.log('FAQ cards count:', faqCards.length);
