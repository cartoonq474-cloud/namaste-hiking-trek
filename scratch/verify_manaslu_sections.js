const fs = require('fs');

const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

console.log('=== COMPREHENSIVE SECTION-BY-SECTION AUDIT ===');
console.log('Total file length:', html.length, 'bytes');

// 1. Check for any leftover Everest / Lukla / EBC mentions
const forbiddenTerms = [
  'Everest Base Camp',
  'Lukla',
  'Namche Bazaar',
  'Tengboche',
  'Khumbu Glacier',
  'Kala Patthar',
  'Sagarmatha',
  'Dudh Koshi'
];

console.log('\n--- 1. Checking for Legacy EBC Remnants ---');
let foundRemnants = 0;
forbiddenTerms.forEach(term => {
  const matches = [...html.matchAll(new RegExp(term, 'gi'))];
  if (matches.length > 0) {
    console.warn(`WARNING: Found ${matches.length} occurrences of "${term}"`);
    foundRemnants += matches.length;
  } else {
    console.log(`Clean: 0 occurrences of "${term}"`);
  }
});
if (foundRemnants === 0) {
  console.log('RESULT: 100% clean of legacy Everest/Lukla text!');
}

// 2. Section Existence & IDs
console.log('\n--- 2. Checking Section IDs & Order ---');
const expectedSections = [
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

expectedSections.forEach(id => {
  const exists = html.includes(`id="${id}"`);
  console.log(`Section #${id}: ${exists ? 'EXISTS' : 'MISSING!'}`);
});

// 3. Sub-Nav Buttons
console.log('\n--- 3. Checking Sub-Navigation Tabs ---');
const subNavBtns = [...html.matchAll(/class="trek-sub-nav-btn[^"]*"[^>]*data-tab="([^"]*)"/g)].map(m => m[1]);
console.log('Sub-nav tabs found:', subNavBtns);

// 4. Hero & Key Facts
console.log('\n--- 4. Checking Hero Section & Trip Facts ---');
const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
console.log('H1 Title:', h1Match ? h1Match[1].trim() : 'MISSING');
const factsCount = (html.match(/class="trip-fact-item"/g) || []).length;
console.log('Key Trip Facts count:', factsCount, '(expected 12)');

// 5. Section 1 Overview
console.log('\n--- 5. Checking Section 1 Overview ---');
const atAGlanceCount = (html.match(/<tr style="border-bottom: 1px solid #f1f5f9;">/g) || []).length;
console.log('At-a-Glance table rows in Overview:', atAGlanceCount);
const highlightsCount = (html.match(/class="rich-highlight-card"/g) || []).length;
console.log('Signature Highlights count:', highlightsCount, '(expected 6)');

// 6. Section 2 Itinerary
console.log('\n--- 6. Checking Section 2 Itinerary Days ---');
const dayCards = [...html.matchAll(/<span class="day-label">Day (\d+):<\/span>\s*([^<\n]+)/g)];
console.log(`Itinerary Days found: ${dayCards.length}`);
dayCards.forEach(d => {
  console.log(`  Day ${d[1].padStart(2, '0')}: ${d[2].trim()}`);
});

// Check metrics for each day
const metricsCount = (html.match(/class="itinerary-metric-item"/g) || []).length;
console.log(`Total metrics items across all days: ${metricsCount} (expected ${dayCards.length * 5})`);
const photosCount = (html.match(/class="itinerary-photo"/g) || []).length;
console.log(`Total photos across all days: ${photosCount} (expected ${dayCards.length})`);
const metaPillsCount = (html.match(/class="itinerary-meta-pill"/g) || []).length;
console.log(`Total meta pills across all days: ${metaPillsCount} (expected ${dayCards.length * 2})`);

// 7. Section 3 Includes & Excludes
console.log('\n--- 7. Checking Section 3 Includes & Excludes ---');
const incCards = (html.match(/class="inc-exc-icon-box"[^>]*background:\s*#e6f7f0/g) || []).length;
const excCards = (html.match(/class="inc-exc-icon-box"[^>]*background:\s*#fee2e2/g) || []).length;
console.log(`Inclusions count: ${incCards} (expected 12)`);
console.log(`Exclusions count: ${excCards} (expected 8)`);

// 8. Section 4 Dates & Availability
console.log('\n--- 8. Checking Section 4 Dates & Availability ---');
const datesRows = (html.match(/<tr data-year=/g) || []).length;
console.log(`Dates Table rows: ${datesRows} (expected 7+)`);
console.log(`Group view panel exists: ${html.includes('id="dates-group-view"')}`);
console.log(`Private view panel exists: ${html.includes('id="dates-private-view"')}`);

// 9. Section 5 Packing List
console.log('\n--- 9. Checking Section 5 Packing List ---');
const gearCheckboxes = (html.match(/class="gear-item-checkbox"/g) || []).length;
console.log(`Gear checklist items: ${gearCheckboxes}`);
console.log(`Total count badge text: ${html.includes('class="gear-total-count"')}`);

// 10. Section 6 Details (Guides)
console.log('\n--- 10. Checking Section 6 Read Before You Book Guides ---');
const guideCards = [...html.matchAll(/class="detail-accordion-card"[^>]*data-detail-id="([^"]*)"/g)].map(m => m[1]);
console.log(`Detail Accordion Cards found: ${guideCards.length}`);
guideCards.forEach((id, i) => {
  console.log(`  Guide ${i+1}: ${id}`);
});
console.log(`Progress Ring SVG exists: ${html.includes('class="details-progress-ring-bar"')}`);
console.log(`Search input exists: ${html.includes('id="guideSearchInput"')}`);

// 11. Section 7 Altitude Profile
console.log('\n--- 11. Checking Section 7 Altitude Profile ---');
const altitudeKeyMatch = html.match(/id="altitude-chart-wrapper"[^>]*data-trek-key="([^"]*)"/);
console.log(`Altitude chart trek key: "${altitudeKeyMatch ? altitudeKeyMatch[1] : 'NONE'}" (expected "manaslu")`);
const altitudeRows = (html.match(/data-altitude-m=/g) || []).length;
console.log(`Total data-altitude-m tags on page: ${altitudeRows}`);

// 12. Section 8 Weather & Seasons
console.log('\n--- 12. Checking Section 8 Weather & Seasons ---');
const weatherKeyMatch = html.match(/id="weather-chart-wrapper"[^>]*data-trek-key="([^"]*)"/);
console.log(`Weather chart trek key: "${weatherKeyMatch ? weatherKeyMatch[1] : 'NONE'}" (expected "manaslu")`);
const seasonCardsCount = (html.match(/Autumn \(Sep – Nov\)|Spring \(Mar – May\)|Summer \/ Monsoon|Winter \(Dec – Feb\)/g) || []).length;
console.log(`Season cards found: ${seasonCardsCount} (expected 4)`);

// 13. Section 9 Map & Section 10 Booking
console.log('\n--- 13. Checking Section 9 Map & Section 10 Booking ---');
console.log(`Map image exists: ${html.includes('manaslu-circuit-suspension-bridge-mountain-view-03.jpg')}`);
console.log(`Booking form exists: ${html.includes('id="inline-booking-form"')}`);

// 14. Section 11 Reviews
console.log('\n--- 14. Checking Section 11 Reviews ---');
console.log(`Customer Reviews panel: ${html.includes('id="review-panel-customer"')}`);
console.log(`Video Reviews panel: ${html.includes('id="review-panel-video"')}`);
console.log(`Platform Ratings panel: ${html.includes('id="review-panel-platform"')}`);

// 15. Section 12 FAQs
console.log('\n--- 15. Checking Section 12 FAQs ---');
const faqCategories = [...html.matchAll(/class="faq-category-btn[^"]*"[^>]*data-category="([^"]*)"/g)].map(m => m[1]);
console.log('FAQ Categories in sidebar:', faqCategories);
const faqItems = (html.match(/class="faq-item"/g) || []).length;
console.log(`Total FAQ Items: ${faqItems} (expected 20)`);

// 16. Sidebar & Related Treks
console.log('\n--- 16. Checking Sidebar & Related Treks ---');
console.log(`Sidebar Booking Card exists: ${html.includes('class="sidebar-booking-card"')}`);
console.log(`Group Discount Toggle exists: ${html.includes('class="group-discount-toggle"')}`);
console.log(`Group Discount Table exists: ${html.includes('class="group-discount-content"')}`);
console.log(`Related Treks section exists: ${html.includes('You Might Also Like')}`);
const ymlCards = (html.match(/class="yml-card"/g) || []).length;
console.log(`Related Trek cards count: ${ymlCards} (expected 4)`);

console.log('\n=== AUDIT COMPLETE ===');
