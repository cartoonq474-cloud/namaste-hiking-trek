const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const mardi = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

function extractBlock(html, startRegex, endRegex) {
  const startMatch = html.match(startRegex);
  if (!startMatch) return null;
  const startIndex = startMatch.index;
  const sub = html.slice(startIndex);
  const endMatch = sub.match(endRegex);
  if (!endMatch) return sub;
  return sub.slice(0, endMatch.index + endMatch[0].length);
}

// Compare sections
const sections = [
  'header',
  'hero',
  'gallery',
  'quick-facts',
  'trust-badges',
  'subnav',
  'overview',
  'itinerary',
  'includes-excludes',
  'dates-prices',
  'packing-list',
  'important-notes', // trip guides
  'altitude-profile',
  'weather',
  'route-map',
  'book-now',
  'reviews',
  'faqs',
  'sidebar'
];

console.log('=== SECTION CHECKLIST & CLASS INSPECTION ===');

// Check interactive JS hooks in trek-details.js
const trekJs = fs.readFileSync('js/trek-details.js', 'utf8');
const jsHooks = [
  'setupGalleryModal',
  'setupSubnavScroll',
  'setupOverviewReadMore',
  'setupItineraryAccordions',
  'setupDatesFilter',
  'setupGearChecklist',
  'setupReadTracker',
  'setupWeatherVisualizer',
  'setupHimalayanReviews',
  'setupFaqSection',
  'setupBookingForm',
  'setupStickySidebar'
];

console.log('\n--- JS Hooks in js/trek-details.js ---');
jsHooks.forEach(hook => {
  const exists = trekJs.includes(hook);
  console.log(`${hook}: ${exists ? 'EXISTS' : 'MISSING'}`);
});

// Check hook selectors in Mardi vs EBC
console.log('\n--- Interactive Selectors in Mardi vs EBC ---');
const selectorsToCheck = [
  // Packing checklist
  '.packing-tab-btn',
  '.gear-check-item',
  '.gear-checked-count',
  '.gear-total-count',
  '#print-gear-btn',
  // Reviews 3-pill
  '.review-tab-btn',
  '#reviews-video-pane',
  '#reviews-customer-pane',
  '#reviews-platform-pane',
  '.video-review-card',
  '.open-video-modal-btn',
  // Dates
  '.dates-mode-toggle',
  '.date-row',
  // Read tracker
  '.details-read-progress',
  // FAQ
  '.faq-sidebar-btn',
  '.faq-item',
  // Overview
  '#mardi-toggle-btn',
  '#mardi-more-text',
  '.overview-badge',
  // Itinerary
  '.itinerary-card',
  '.itinerary-metrics-list',
  '.itinerary-photos-grid',
  // Includes / Excludes
  '.inc-exc-container',
  '.inc-exc-card'
];

selectorsToCheck.forEach(sel => {
  const inEbc = ebc.includes(sel.replace(/^[.#]/, ''));
  const inMardi = mardi.includes(sel.replace(/^[.#]/, ''));
  console.log(`${sel.padEnd(28)} | EBC: ${inEbc ? 'YES' : 'NO '} | Mardi: ${inMardi ? 'YES' : 'NO '}`);
});
