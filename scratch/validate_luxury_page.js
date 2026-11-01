const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-luxury-trek/index.html', 'utf8');

console.log('=== LUXURY PAGE VALIDATION ===');
const itinCards = (html.match(/<div class="itinerary-card/g) || []).length;
console.log('Itinerary Cards count:', itinCards, itinCards === 12 ? '✅' : '❌');

const guideCards = (html.match(/<div class="detail-accordion-card/g) || []).length;
console.log('Guide Cards count:', guideCards, guideCards === 16 ? '✅' : '❌');

const faqItems = (html.match(/class="faq-item-question"/g) || []).length;
console.log('FAQ Items count:', faqItems, faqItems === 30 ? '✅' : '❌');

const packingItems = (html.match(/class="pack-check-item"/g) || []).length;
console.log('Packing Items count:', packingItems, packingItems === 70 ? '✅' : '❌');

const price2490 = (html.match(/\$2,490/g) || []).length;
console.log('$2,490 occurrences:', price2490, price2490 > 0 ? '✅' : '❌');

const hasEbcLuxuryKey = html.includes('data-trek-key="ebc_luxury"');
console.log('Altitude Visualizer key ebc_luxury:', hasEbcLuxuryKey ? '✅' : '❌');
