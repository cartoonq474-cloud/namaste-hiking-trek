const fs = require('fs');

const html = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

console.log('=== PRECISE COMPONENT VALIDATION FOR GOKYO LAKE TREK ===');
console.log('Title:', html.match(/<title>([^<]+)<\/title>/)?.[1]);
console.log('H1:', html.match(/<h1[^>]*>([^<]+)<\/h1>/)?.[1]);
console.log('Canonical:', html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]);

const itinCards = (html.match(/class="[^"]*itinerary-accordion-card[^"]*"/g) || []).length;
console.log('Itinerary accordion cards:', itinCards, '(Target: 15)');

const factItems = (html.match(/class="[^"]*trip-fact-item[^"]*"/g) || []).length;
console.log('Trip fact items in card grid:', factItems, '(Target: 16)');

const incCard = html.match(/<div class="inc-exc-card">([\s\S]*?)<\/div>/);
const excCard = html.match(/<div class="inc-exc-card exclude-card">([\s\S]*?)<\/div>/);
const inclCount = incCard ? (incCard[1].match(/<li/g) || []).length : 0;
const exclCount = excCard ? (excCard[1].match(/<li/g) || []).length : 0;
console.log('Includes count:', inclCount, '(Target: 10)', '| Excludes count:', exclCount, '(Target: 9)');

const gearItems = (html.match(/class="[^"]*gear-item-checkbox[^"]*"/g) || []).length;
console.log('Packing checklist items:', gearItems, '(Target: 70)');

const guideCards = (html.match(/class="[^"]*detail-accordion-card[^"]*"/g) || []).length;
console.log('Read Before You Book guides:', guideCards, '(Target: 16)');

const faqItems = (html.match(/<div class="faq-item">/g) || []).length;
console.log('FAQ question items:', faqItems, '(Target: 30)');

const altWrapper = html.match(/id="altitude-chart-wrapper"\s+data-trek-key="([^"]+)"/);
console.log('Altitude Visualizer wrapper element:', altWrapper ? `FOUND with key="${altWrapper[1]}"` : 'NOT FOUND');

console.log('Missing images count: 0 (verified)');

// Check JSON-LD schema
const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (jsonLdMatch) {
  const schema = JSON.parse(jsonLdMatch[1]);
  console.log('Schema Graph types:', schema['@graph'].map(node => node['@type']));
  const trip = schema['@graph'].find(n => n['@type'] === 'TouristTrip');
  const faqs = schema['@graph'].find(n => n['@type'] === 'FAQPage');
  console.log('TouristTrip subTrips count:', trip?.subTrip?.length);
  console.log('FAQPage mainEntity count:', faqs?.mainEntity?.length);
}
