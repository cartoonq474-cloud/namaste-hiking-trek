const fs = require('fs');

const dh = fs.readFileSync('trek/dhaulagiri-circuit-trek/index.html', 'utf8');
const pk = fs.readFileSync('trek/pikey-peak-trek/index.html', 'utf8');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const audit = [];

function check(name, testFn) {
  const result = testFn(dh, pk, ebc);
  audit.push({ name, ...result });
}

// 1. Core Stylesheets
check('Core Stylesheet', (d, p, e) => ({
  dh: d.includes('index.css?v=7'),
  pk: p.includes('index.css?v=7'),
  ebc: e.includes('index.css?v=7'),
  match: d.includes('index.css?v=7') === p.includes('index.css?v=7')
}));

// 2. Component CSS (video-modal, reviews)
check('Component CSS in head', (d, p, e) => ({
  dh: d.includes('video-modal.css') && d.includes('reviews.css'),
  pk: p.includes('video-modal.css') && p.includes('reviews.css'),
  ebc: e.includes('video-modal.css') && e.includes('reviews.css'),
  match: false,
  note: 'Check if index.css already embeds video-modal and reviews rules or if standalone link is needed'
}));

// 3. Hero Toggle Script
check('Hero Toggle Script', (d, p, e) => ({
  dh: d.includes('dhaulagiri-toggle-btn') && d.includes("getElementById('dhaulagiri-toggle-btn')"),
  pk: p.includes('pikey-toggle-btn') && p.includes("getElementById('pikey-toggle-btn')"),
  ebc: e.includes('ebc-toggle-btn'),
  match: d.includes("getElementById('dhaulagiri-toggle-btn')"),
  divergence: !d.includes("getElementById('dhaulagiri-toggle-btn')") ? 'Missing click listener script for #dhaulagiri-toggle-btn' : null
}));

// 4. Facts Grid Count
check('Key Trip Facts Count', (d, p, e) => {
  const countD = (d.match(/class="[^"]*trek-fact-item[^"]*"|class="[^"]*trek-fact-card[^"]*"/g) || []).length;
  const countP = (p.match(/class="[^"]*trek-fact-item[^"]*"|class="[^"]*trek-fact-card[^"]*"/g) || []).length;
  return {
    dhCount: countD,
    pkCount: countP,
    match: countD === countP,
    divergence: countD !== countP ? `Dhaulagiri has ${countD} facts items while Pikey has ${countP} (standard is 8 items: Duration, Difficulty, Max Altitude, Destination, Activity, Group Size, Best Season, Accommodation)` : null
  };
});

// 5. Trust Grid Count
check('Trust Guarantee Pillars Count', (d, p, e) => {
  const countD = (d.match(/class="[^"]*trust-pillar[^"]*"|class="[^"]*trek-trust-card[^"]*"/g) || []).length;
  const countP = (p.match(/class="[^"]*trust-pillar[^"]*"|class="[^"]*trek-trust-card[^"]*"/g) || []).length;
  return {
    dhCount: countD,
    pkCount: countP,
    match: countD === countP
  };
});

// 6. Section 6 Controls (Search ID, Filter Button Classes, Toggle All ID)
check('Section 6 Search Input ID', (d, p, e) => ({
  dhHasCorrectId: d.includes('id="guideSearchInput"'),
  dhCurrentId: d.match(/id="guide[^"]*search[^"]*"/i)?.[0],
  expected: 'id="guideSearchInput"',
  divergence: !d.includes('id="guideSearchInput"') ? 'Using id="guide-search-input" instead of id="guideSearchInput" expected by js/trek-details.js?v=11' : null
}));

check('Section 6 Filter Pills Class', (d, p, e) => ({
  dhHasPillBtnClass: d.includes('class="guide-pill-btn') || d.includes("class='guide-pill-btn"),
  dhCurrentClass: d.match(/class="guide-filter-pill[^"]*"/)?.[0],
  expected: 'class="guide-pill-btn"',
  divergence: !d.includes('guide-pill-btn') ? 'Using class="guide-filter-pill" instead of class="guide-pill-btn" expected by js/trek-details.js?v=11' : null
}));

check('Section 6 Toggle All Button ID', (d, p, e) => ({
  dhHasToggleAllId: d.includes('id="guidesToggleAllBtn"'),
  dhCurrentId: d.match(/id="[^"]*toggle[^"]*guide[^"]*"/i)?.[0],
  expected: 'id="guidesToggleAllBtn"',
  divergence: !d.includes('id="guidesToggleAllBtn"') ? 'Using id="toggle-all-guides-btn" instead of id="guidesToggleAllBtn" expected by js/trek-details.js?v=11' : null
}));

check('Section 6 Accordion Wrapper ID', (d, p, e) => ({
  dhHasWrapperId: d.includes('id="detailsAccordionWrapper"'),
  expected: 'id="detailsAccordionWrapper"',
  divergence: !d.includes('id="detailsAccordionWrapper"') ? 'Missing id="detailsAccordionWrapper" on accordion container required for live search no-results insertion' : null
}));

// 7. Section 6 Detail Card Attributes
check('Section 6 data-guide-category', (d, p, e) => {
  const countWithCat = (d.match(/data-guide-category="[^"]+"/g) || []).length;
  return {
    cardsWithCategory: countWithCat,
    match: countWithCat === 21,
    divergence: countWithCat < 21 ? `Only ${countWithCat}/21 cards have data-guide-category attribute for category filtering` : null
  };
});

// 8. Visualizer Mounts and Keys
check('Altitude Chart Wrapper Key', (d, p, e) => ({
  dhKey: d.match(/id="altitude-chart-wrapper"[^>]*data-trek-key="([^"]+)"/)?.[1],
  expected: 'dhaulagiri_circuit',
  match: d.match(/id="altitude-chart-wrapper"[^>]*data-trek-key="([^"]+)"/)?.[1] === 'dhaulagiri_circuit'
}));

check('Weather Chart Wrapper Key', (d, p, e) => ({
  dhKey: d.match(/id="weather-chart-wrapper"[^>]*data-trek-key="([^"]+)"/)?.[1],
  expected: 'dhaulagiri_circuit',
  match: d.match(/id="weather-chart-wrapper"[^>]*data-trek-key="([^"]+)"/)?.[1] === 'dhaulagiri_circuit'
}));

// 9. Sidebar Pricing & Calculator
check('Sidebar Guest Counter & Pricing Script', (d, p, e) => ({
  dhScript: d.includes('Sidebar Guest Counter & Price Recalculator'),
  pkScript: p.includes('Sidebar Guest Counter & Price Recalculator'),
  dhPrice: d.match(/tieredPrices = \{[\s\S]*?\}/)?.[0],
  pkPrice: p.match(/tieredPrices = \{[\s\S]*?\}/)?.[0]
}));

// 10. Reviews Tab Switcher
check('Reviews 3-Tab Structure', (d, p, e) => ({
  dhPanes: d.includes('reviews-video-pane') && d.includes('reviews-customer-pane') && d.includes('reviews-platform-pane'),
  pkPanes: p.includes('reviews-video-pane') && p.includes('reviews-customer-pane') && p.includes('reviews-platform-pane')
}));

// 11. FAQ Two-Column Layout
check('FAQ Two-Column Layout', (d, p, e) => ({
  dhLayout: d.includes('class="faq-layout-container"') && d.includes('class="faq-sidebar-card"'),
  pkLayout: p.includes('class="faq-layout-container"') && p.includes('class="faq-sidebar-card"')
}));

// 12. Modals and Floating CTA
check('Modals and Mobile Floating CTA', (d, p, e) => ({
  dhVideoModal: d.includes('id="video-review-modal"'),
  dhInquiryModal: d.includes('id="inquiry-modal"'),
  dhMobileCta: d.includes('class="mobile-book-cta"'),
  pkVideoModal: p.includes('id="video-review-modal"'),
  pkInquiryModal: p.includes('id="inquiry-modal"'),
  pkMobileCta: p.includes('class="mobile-book-cta"')
}));

fs.writeFileSync('scratch/detailed_audit_results.json', JSON.stringify(audit, null, 2));
console.log('Detailed section audit complete. Saved to scratch/detailed_audit_results.json');

