const fs = require('fs');

if (!fs.existsSync('trek/everest-base-camp-luxury-trek/index.html')) {
  console.log('File does not exist');
  process.exit(0);
}
const html = fs.readFileSync('trek/everest-base-camp-luxury-trek/index.html', 'utf8');
console.log('File size:', html.length);
const itinCards = [...html.matchAll(/class="itinerary-accordion-card/g)].length;
const detailCards = [...html.matchAll(/class="detail-accordion-card/g)].length;
const faqItems = [...html.matchAll(/class="faq-item-question/g)].length;
const sections = [...html.matchAll(/<section[^>]*id="([^"]+)"/g)].map(m => m[1]);
console.log('Itinerary cards count:', itinCards);
console.log('Detail guide cards count:', detailCards);
console.log('FAQ items count:', faqItems);
console.log('Sections list:', sections);

const keyFacts = [...html.matchAll(/class="trip-fact-item"/g)].length;
console.log('Key facts count:', keyFacts);

const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
console.log('H1:', h1 ? h1[1].trim() : 'NONE');

const sidebarPrice = html.match(/<span style="font-size: 2.5rem[^>]*>([\s\S]*?)<\/span>/);
console.log('Sidebar price:', sidebarPrice ? sidebarPrice[1].trim() : 'NONE');
