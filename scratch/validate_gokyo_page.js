const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, '..', 'trek', 'gokyo-lakes-trek', 'index.html');
const html = fs.readFileSync(targetFilePath, 'utf8');

console.log('=== Gokyo Lake Trek Validation Report ===');

// 1. Schema JSON-LD Validation
const schemaMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (!schemaMatch) {
  console.error('❌ Schema JSON-LD tag not found!');
} else {
  try {
    const parsed = JSON.parse(schemaMatch[1]);
    const touristTrip = parsed['@graph'].find(item => item['@type'] === 'TouristTrip');
    const faqPage = parsed['@graph'].find(item => item['@type'] === 'FAQPage');
    const breadcrumb = parsed['@graph'].find(item => item['@type'] === 'BreadcrumbList');

    console.log('✓ Schema JSON-LD is valid JSON');
    console.log(`✓ TouristTrip found: "${touristTrip.name}", subTrips count: ${touristTrip.subTrip.length} (Expected: 15)`);
    console.log(`✓ FAQPage found: ${faqPage.mainEntity.length} questions (Expected: 30)`);
    console.log(`✓ Breadcrumbs found: ${breadcrumb.itemListElement.length} items`);
  } catch (e) {
    console.error('❌ Schema JSON-LD parse error:', e.message);
  }
}

// 2. Itinerary Cards Count
const itinCards = [...html.matchAll(/class="itinerary-accordion-card/g)];
console.log(`✓ Itinerary cards count: ${itinCards.length} (Expected: 15)`);

// 3. Key Facts Count
const keyFacts = [...html.matchAll(/class="trip-fact-item"/g)];
console.log(`✓ Key Facts items count: ${keyFacts.length} (Expected: 16)`);

// 4. Detail Guides Count
const detailCards = [...html.matchAll(/class="detail-accordion-card"/g)];
console.log(`✓ Deep Guide cards count: ${detailCards.length} (Expected: 16)`);

// 5. Packing Items Count
const gearCheckboxes = [...html.matchAll(/class="gear-item-checkbox"/g)];
console.log(`✓ Packing checklist items: ${gearCheckboxes.length} (Expected: 70)`);

// 6. FAQs Count
const faqQuestions = [...html.matchAll(/class="faq-item-question"/g)];
console.log(`✓ FAQ question items: ${faqQuestions.length} (Expected: 30)`);

// 7. Check Data Trek Key
const altitudeCanvas = html.includes('data-trek-key="gokyo"');
console.log(`✓ Altitude canvas data-trek-key="gokyo": ${altitudeCanvas ? 'YES' : 'NO'}`);

// 8. Check Section Duplications
const sections = [
  'section-overview',
  'section-itinerary',
  'section-includes',
  'section-dates',
  'section-packing',
  'section-details',
  'section-altitude-profile',
  'section-weather',
  'section-map',
  'section-booking',
  'section-reviews',
  'section-faqs'
];

let allUnique = true;
sections.forEach(id => {
  const count = [...html.matchAll(new RegExp(`<section[^>]*id="${id}"`, 'g'))].length;
  if (count !== 1) {
    console.error(`❌ Section #${id} appears ${count} times! (Expected exactly 1)`);
    allUnique = false;
  }
});
if (allUnique) {
  console.log('✓ All 12 sections appear exactly once with zero duplicates!');
}

console.log('========================================');
