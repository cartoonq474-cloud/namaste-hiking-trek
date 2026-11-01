const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const mardi = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

function inspectSection(name, sectionId, ebcHtml, mardiHtml) {
  console.log(`\n======================================================`);
  console.log(`SECTION: ${name} (${sectionId})`);
  console.log(`======================================================`);

  // Extract from EBC
  let ebcSnippet = '';
  const ebcRegex = new RegExp(`<section[^>]*id=["']${sectionId}["'][\\s\\S]*?<\\/section>`, 'i');
  const ebcMatch = ebcHtml.match(ebcRegex);
  if (ebcMatch) {
    ebcSnippet = ebcMatch[0];
  } else {
    // Check if id is on a div
    const divRegex = new RegExp(`<div[^>]*id=["']${sectionId}["'][\\s\\S]*?<\\/div>`, 'i');
    const divMatch = ebcHtml.match(divRegex);
    if (divMatch) ebcSnippet = divMatch[0];
  }

  // Extract from Mardi
  let mardiSnippet = '';
  const mardiRegex = new RegExp(`<section[^>]*id=["']${sectionId}["'][\\s\\S]*?<\\/section>`, 'i');
  const mardiMatch = mardiHtml.match(mardiRegex);
  if (mardiMatch) {
    mardiSnippet = mardiMatch[0];
  } else {
    const divRegex = new RegExp(`<div[^>]*id=["']${sectionId}["'][\\s\\S]*?<\\/div>`, 'i');
    const divMatch = mardiHtml.match(divRegex);
    if (divMatch) mardiSnippet = divMatch[0];
  }

  console.log(`EBC Length: ${ebcSnippet.length} chars | Mardi Length: ${mardiSnippet.length} chars`);

  // Check key structural elements
  const checks = {
    'section-overview': [
      'overview-highlights-grid',
      'highlight-card',
      'overview-comparison-table',
      'ecological-zones',
      'eco-zone-card',
      'mardi-toggle-btn',
      'overview-stats-grid'
    ],
    'section-itinerary': [
      'itin-expand-all-btn',
      'itinerary-card',
      'itinerary-header',
      'itinerary-metrics-list',
      'itinerary-meta-box',
      'itinerary-photos-grid',
      'itinerary-day-badge'
    ],
    'section-includes': [
      'inc-exc-container',
      'inc-exc-grid',
      'inc-exc-card',
      'inc-exc-item',
      'inc-tag'
    ],
    'section-dates': [
      'dates-mode-btn',
      'dates-group-view',
      'dates-private-view',
      'dates-month-tab',
      'departure-item-row',
      'btn-load-more-dates',
      'dual-calendar-mount',
      'private-selected-date-text',
      'btn-select-private-date'
    ],
    'section-packing': [
      'gear-tab-btn',
      'gear-tab-panel',
      'gear-item-checkbox',
      'gear-checked-count',
      'gear-total-count',
      'rental-info-banner',
      'print-gear-btn'
    ],
    'section-details': [
      'detail-accordion-card',
      'details-progress-ring-bar',
      'details-progress-count',
      'guide-pill-btn',
      'guideSearchInput',
      'guidesToggleAllBtn',
      'reading-time-badge'
    ],
    'section-altitude-profile': [
      'altitude-chart',
      'altitude-table',
      'data-altitude-m'
    ],
    'section-weather': [
      'weather-visualizer',
      'weather-season-card',
      'weather-chart'
    ],
    'section-map': [
      'route-map-container',
      'map-legend',
      'map-stats'
    ],
    'section-booking': [
      'booking-form',
      'booking-calculator',
      'calc-group-size',
      'calc-display-total'
    ],
    'section-reviews': [
      'review-tab-btn',
      'video-review-card',
      'helpful-vote-btn',
      'platform-sub-tab',
      'reviews-video-pane',
      'reviews-customer-pane',
      'reviews-platform-pane'
    ],
    'section-faqs': [
      'faq-category-btn',
      'faq-category-content',
      'faq-category-panel',
      'faq-item-question',
      'faq-expand-all-btn',
      'faq-sidebar'
    ]
  };

  const sectionChecks = checks[sectionId] || [];
  sectionChecks.forEach(term => {
    const eHas = ebcSnippet.includes(term);
    const mHas = mardiSnippet.includes(term);
    console.log(`  - ${term.padEnd(25)} | EBC: ${eHas ? 'YES' : 'NO '} | Mardi: ${mHas ? 'YES' : 'NO '}`);
  });
}

inspectSection('Overview', 'section-overview', ebc, mardi);
inspectSection('Itinerary', 'section-itinerary', ebc, mardi);
inspectSection('Includes & Excludes', 'section-includes', ebc, mardi);
inspectSection('Dates & Availability', 'section-dates', ebc, mardi);
inspectSection('Packing List', 'section-packing', ebc, mardi);
inspectSection('Essential Guides', 'section-details', ebc, mardi);
inspectSection('Altitude Profile', 'section-altitude-profile', ebc, mardi);
inspectSection('Weather & Seasons', 'section-weather', ebc, mardi);
inspectSection('Route Map', 'section-map', ebc, mardi);
inspectSection('Booking Form', 'section-booking', ebc, mardi);
inspectSection('Reviews & Ratings', 'section-reviews', ebc, mardi);
inspectSection('FAQs', 'section-faqs', ebc, mardi);
