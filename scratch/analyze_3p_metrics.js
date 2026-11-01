const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

console.log('=== CURRENT PAGE METRICS ===');
console.log('File size:', html.length, 'bytes');

const itinDays = (html.match(/class="itin-accordion-card"/g) || []).length;
console.log('Itinerary accordion cards:', itinDays);

const detailCards = (html.match(/class="detail-accordion-card"/g) || []).length;
console.log('Detail accordion cards:', detailCards);

const faqItems = (html.match(/class="faq-accordion-card"/g) || []).length;
console.log('FAQ accordion cards:', faqItems);

const trekKeyMatch = html.match(/data-trek-key="([^"]+)"/);
console.log('data-trek-key:', trekKeyMatch ? trekKeyMatch[1] : 'NOT FOUND');

console.log('Has data-trek-details-wrapper:', html.includes('data-trek-details-wrapper'));
console.log('Has guide-pill-btn:', html.includes('guide-pill-btn'));
console.log('Has guideSearchInput:', html.includes('guideSearchInput'));
console.log('Has guidesToggleAllBtn:', html.includes('guidesToggleAllBtn'));
console.log('Has detailsAccordionWrapper:', html.includes('detailsAccordionWrapper'));

const scripts = [...html.matchAll(/<script[^>]+src="([^"]+)"[^>]*>/g)].map(m => m[1]);
console.log('Scripts:', scripts);

const sectionIds = [...html.matchAll(/<section[^>]*id="([^"]+)"[^>]*/g)].map(m => m[1]);
console.log('Section IDs:', sectionIds);

// Find data-detail-id values
const detailIds = [...html.matchAll(/data-detail-id="([^"]+)"/g)].map(m => m[1]);
console.log('Detail IDs:', detailIds);

// Find packing category tabs
console.log('Has gear-checklist-tab:', html.includes('gear-checklist-tab'));

// Check itinerary card structure
const firstItinPos = html.indexOf('class="itin-accordion-card"');
if (firstItinPos > -1) {
  const chunk = html.substring(firstItinPos, firstItinPos + 400);
  console.log('First itin card preview:', chunk);
}

