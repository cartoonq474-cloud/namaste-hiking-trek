const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-luxury-trek/index.html', 'utf8');

console.log('=== VALIDATING CANONICAL LUXURY TREK PAGE ===\n');

// 1. Title & Meta
const title = content.match(/<title>([\s\S]*?)<\/title>/i)[1].trim();
console.log('Title:', title);
console.log('Canonical link:', content.match(/<link\s+rel="canonical"[^>]*href="([^"]*)"/i)[1]);

// 2. Itinerary Cards
const itinCards = [...content.matchAll(/class="itinerary-card([^"]*)"/g)];
console.log('\nTotal itinerary cards:', itinCards.length);
console.log('Day 1 active?', itinCards[0][1].includes('active'));
console.log('Day 2 active?', itinCards[1][1].includes('active'));

// Check critical .itinerary-content in each card
const contentMatches = [...content.matchAll(/class="itinerary-content"/g)];
console.log('Total .itinerary-content blocks:', contentMatches.length, '(Must be 12)');

const innerMatches = [...content.matchAll(/class="itinerary-content-inner"/g)];
console.log('Total .itinerary-content-inner blocks:', innerMatches.length, '(Must be 12)');

const metricsMatches = [...content.matchAll(/class="itinerary-metrics-list"/g)];
console.log('Total .itinerary-metrics-list blocks:', metricsMatches.length, '(Must be 12)');

const photoGridMatches = [...content.matchAll(/class="itinerary-photos-grid"/g)];
console.log('Total .itinerary-photos-grid blocks:', photoGridMatches.length, '(Must be 12)');

const photoWrappers = [...content.matchAll(/class="itinerary-photo-wrapper"/g)];
console.log('Total .itinerary-photo-wrapper images:', photoWrappers.length, '(Must be 48, 4 per day)');

// 3. Key Trip Facts
const factItems = [...content.matchAll(/class="trip-fact-item"/g)];
console.log('\nTotal .trip-fact-item elements:', factItems.length, '(Must be 16)');

// 4. Includes & Excludes
const allIncExcCards = [...content.matchAll(/class="inc-exc-card(?:\s+exclude-card)?"/g)];
const excCards = [...content.matchAll(/class="inc-exc-card\s+exclude-card"/g)];
const incCards = allIncExcCards.length - excCards.length;
console.log('\nIncludes cards:', incCards, '(Must be 10)');
console.log('Excludes cards:', excCards.length, '(Must be 9)');

// 5. Packing List
const gearCheckboxes = [...content.matchAll(/class="gear-item-checkbox"/g)];
console.log('\nTotal gear checklist items:', gearCheckboxes.length, '(Must be 70)');
console.log('Counter display:', content.match(/Packed:\s*<strong><span class="gear-checked-count">0<\/span>\s*\/\s*<span class="gear-total-count">(\d+)<\/span><\/strong>/)[0]);

// 6. Important Details (Guides)
const guideCards = [...content.matchAll(/class="detail-accordion-card"/g)];
console.log('\nTotal .detail-accordion-card elements:', guideCards.length, '(Must be 16)');
console.log('Progress tracker:', content.match(/<span class="details-progress-count">([^<]+)<\/span>/)[1]);

// 7. FAQs
const faqItems = [...content.matchAll(/class="faq-item"/g)];
console.log('\nTotal .faq-item elements:', faqItems.length, '(Must be 30)');
const faqButtons = [...content.matchAll(/class="faq-category-btn([^"]*)"/g)];
console.log('Total FAQ category buttons:', faqButtons.length, '(Must be 6)');

// 8. Altitude Profile & Trek Keys
const detailWrapperKey = content.match(/data-trek-details-wrapper\s+data-trek-key="([^"]+)"/)[1];
const altitudeKey = content.match(/id="altitude-chart-wrapper"\s+data-trek-key="([^"]+)"/)[1];
console.log('\nDetail wrapper trek key:', detailWrapperKey, '(Must be ebc_luxury)');
console.log('Altitude chart trek key:', altitudeKey, '(Must be ebc_luxury)');

// 9. Sidebar Pricing
console.log('Sidebar price:', content.match(/\$2,490/)[0]);
console.log('Sidebar badge:', content.match(/LUXURY EXPEDITION/)[0]);

// 10. JSON-LD Schemas
const ldJsonBlocks = [...content.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
console.log('\nTotal JSON-LD script blocks:', ldJsonBlocks.length);
ldJsonBlocks.forEach((block, idx) => {
  try {
    const parsed = JSON.parse(block[1]);
    console.log(`Block ${idx + 1} JSON valid! Types:`, parsed['@type'] || parsed['@graph']?.map(g => g['@type']));
  } catch (e) {
    console.error(`Block ${idx + 1} JSON INVALID:`, e.message);
  }
});
