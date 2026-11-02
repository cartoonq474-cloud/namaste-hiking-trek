// Comprehensive Canonical Audit for Dhaulagiri Circuit Trek
const fs = require('fs');

const html = fs.readFileSync('trek/dhaulagiri-circuit-trek/index.html', 'utf8');
console.log('=== DHAULAGIRI CIRCUIT COMPREHENSIVE AUDIT ===');
console.log('File size:', html.length, 'bytes');

const checks = [
  // 1. Core Stylesheet & Head Meta
  { name: 'Core stylesheet index.css?v=7', pass: html.includes('href="../../index.css?v=7"') },
  { name: 'No legacy style.css link', pass: !html.includes('href="../../style.css"') },
  { name: 'Canonical link for Dhaulagiri', pass: html.includes('https://namastehikingtrek.com/trek/dhaulagiri-circuit-trek/') },
  { name: 'JSON-LD Schema (20 Days)', pass: html.includes('"@type": "TouristTrip"') && html.includes('Dhaulagiri Circuit Trek (20 Days)') },

  // 2. Hero & Trust Elements
  { name: 'TripAdvisor badge', pass: html.includes("TripAdvisor Travelers' Choice 2026") },
  { name: 'Google reviews badge', pass: html.includes('4.9/5') && html.includes('Verified Climbers') },
  { name: 'Hero title class trek-hero-title', pass: html.includes('<h1 class="trek-hero-title"') },
  { name: 'Collapsible Learn More toggle', pass: html.includes('id="dhaulagiri-toggle-btn"') && html.includes('id="dhaulagiri-more-text"') },
  { name: 'Hero gallery collage .trek-gallery-collage', pass: html.includes('class="trek-gallery-collage"') },
  { name: 'Main collage image with badge', pass: html.includes('class="trek-gallery-main') && html.includes('20 Days Challenging Circuit') },
  { name: 'See all photos button overlay', pass: html.includes('class="trek-gallery-see-all-btn') },
  { name: 'Key Trip Facts .trek-facts-grid (20 Days & 5,360 m)', pass: html.includes('class="trek-facts-grid"') && html.includes('20 Days') && html.includes('5,360 m') },
  { name: 'Trust Guarantee .trek-trust-grid', pass: html.includes('class="trek-trust-grid"') },

  // 3. Sub-Nav & Layout
  { name: 'Sub-nav wrapper .trek-sub-nav', pass: html.includes('class="trek-sub-nav"') },
  { name: '11 sub-nav buttons', pass: (html.match(/class="trek-sub-nav-btn[^"]*"/g) || []).length === 11 },
  { name: 'Wrapper data-trek-details-wrapper & key dhaulagiri_circuit', pass: html.includes('data-trek-details-wrapper') && html.includes('data-trek-key="dhaulagiri_circuit"') },
  { name: 'Two-column layout .trek-detail-layout', pass: html.includes('trek-detail-layout') && html.includes('2.2fr 1fr') },
  { name: '11 sections have trek-detail-section class', pass: (html.match(/class="trek-detail-section"/g) || []).length === 11 },

  // 4. Section 1 Overview
  { name: 'Overview section title', pass: html.includes('class="trek-section-title">Trek Overview</h2>') },
  { name: 'Dhaulagiri specifications table (20 points)', pass: html.includes('Dhaulagiri Circuit Trek at a Glance') && html.includes('French Pass') },
  { name: 'What Makes Special (4 feature cards)', pass: html.includes('What Makes the Dhaulagiri Circuit Trek Special?') },
  { name: 'Key Highlights (Official Template matching EBC)', pass: html.includes('dhaulagiri-highlights-section') && html.includes('dhaulagiri-highlights-grid') && html.includes('dhaulagiri-glance-box') && html.includes('Mount Dhaulagiri and its Himalayan mountain panorama') },
  { name: 'Suitability Matrix (6 profiles)', pass: html.includes('Who is the Dhaulagiri Circuit Trek Designed For?') },
  { name: 'Why Book with Namaste (4 trust pillars)', pass: html.includes('Why Book the Dhaulagiri Circuit Trek with Namaste Hiking Trek?') },

  // 5. Section 2 Itinerary
  { name: 'Itinerary section title', pass: html.includes('Dhaulagiri Circuit Trek Itinerary: Day by Day Details') },
  { name: '4 Trip Stat Badges', pass: html.includes('Total Days') && html.includes('Walking Stages') && html.includes('Acclimatization') },
  { name: 'Itinerary at a Glance 20-day table', pass: html.includes('Itinerary at a Glance') && html.includes('Days 1 to 20') },
  { name: '20 Interactive Day Cards', pass: (html.match(/class="itinerary-card(\s|")/g) || []).length === 20 },
  { name: 'Day 15 French Pass 5,360 m card', pass: html.includes('Cross French Pass (5,360 m) & Trek to Hidden Valley') },
  { name: 'Day 16 Dhampus Pass 5,250 m card', pass: html.includes('Cross Dhampus Pass (5,250 m) & Trek to Yak Kharka') },

  // 6. Section 3 Includes/Excludes
  { name: 'Includes/Excludes copper bar & title', pass: html.includes('inc-exc-section-title-wrapper') },
  { name: 'Includes list with full camping support', pass: html.includes('High-Altitude Camping Infrastructure') && html.includes('Teahouse Accommodation') },
  { name: 'No legacy EBC in Section 3', pass: (() => {
      const incSec = html.match(/<section id="section-includes"[\s\S]*?<\/section>/);
      return incSec && !incSec[0].includes('Lukla') && !incSec[0].includes('Everest');
    })() },

  // 7. Section 4 Dates & Availability
  { name: 'Dates section title for Dhaulagiri', pass: html.includes('Booking Dates &amp; Availability for Dhaulagiri Circuit Trek') },
  { name: 'No EBC dates header bug', pass: !html.includes('Booking Dates & Availability for EBC trek') },
  { name: 'Dual calendar mount #dual-calendar-mount', pass: html.includes('id="dual-calendar-mount"') },
  { name: 'Fixed group departures ($1,999 pp)', pass: html.includes('$1,999') && html.includes('Guaranteed Fixed Group Departures') },

  // 8. Section 5 Packing List
  { name: 'Packing list title for Dhaulagiri', pass: html.includes('Packing List for Dhaulagiri Circuit Trek') },
  { name: 'Rental pill & print checklist link', pass: html.includes('Rent it with us — <strong>USD 1/day per item</strong>') && html.includes('Print Checklist') },
  { name: 'Category 1 to 6 checklists', pass: html.includes('Head &amp; Face Protection') && html.includes('Sleeping &amp; Camp Gear') },

  // 9. Section 6 Read Before You Book
  { name: 'Read before you book title for Dhaulagiri', pass: html.includes('Read before you book, Dhaulagiri Circuit Trek') },
  { name: 'SVG progress ring & counter (21 guides)', pass: html.includes('details-progress-ring-bar') && html.includes('21 guides completed') },
  { name: 'Search input #guideSearchInput', pass: html.includes('id="guideSearchInput"') },
  { name: 'Filter pills #guide-filter-pills', pass: html.includes('id="guide-filter-pills"') },
  { name: 'Toggle all guides button #guidesToggleAllBtn', pass: html.includes('id="guidesToggleAllBtn"') },
  { name: '21 Detail Accordion Cards', pass: (html.match(/class="detail-accordion-card"/g) || []).length === 21 },
  { name: 'No legacy EBC accordion titles', pass: !html.includes('Tell Me About the Flight to Lukla') && !html.includes('Sherpa Traditions of Everest Region') },

  // 10. Sections 7-11
  { name: 'Altitude visualizer mount #altitude-chart-wrapper', pass: html.includes('id="altitude-chart-wrapper"') },
  { name: 'Weather visualizer mount #weather-chart-wrapper', pass: html.includes('id="weather-chart-wrapper"') },
  { name: 'Route Map section & waypoints', pass: html.includes('Dhaulagiri Circuit Trek Map') && html.includes('Key Expedition Trailhead &amp; Summit Landmarks') },
  { name: 'Reviews 3-tab switcher', pass: html.includes('Best Himalayan Trekking Reviews') && html.includes('reviews-video-pane') && html.includes('reviews-customer-pane') },
  { name: 'FAQ two-column layout & category buttons', pass: html.includes('faq-layout-container') && html.includes('Frequently Asked Questions for Dhaulagiri Circuit Trek') },
  { name: '20+ FAQs in accordion list', pass: (html.match(/class="faq-item"/g) || []).length >= 20 },

  // 11. Sidebar, Modals & Footer
  { name: 'Sidebar booking card ($1,999 & 20 days)', pass: html.includes('class="sidebar-booking-card"') && html.includes('$1,999') && html.includes('20 days trip') },
  { name: 'Group discount accordion table', pass: html.includes('group-discount-toggle') && html.includes('group-discount-table') },
  { name: 'Guest counter with +/- controls', pass: html.includes('changeSidebarGuests') },
  { name: 'Video review modal #video-review-modal', pass: html.includes('id="video-review-modal"') },
  { name: 'Inquiry modal #inquiry-modal', pass: html.includes('id="inquiry-modal"') },
  { name: 'Mobile floating CTA bar .mobile-book-cta', pass: html.includes('class="mobile-book-cta"') },
  { name: 'Luxury site footer with NAMASTE watermark', pass: html.includes('class="site-footer"') && html.includes('class="watermark-brand-text">NAMASTE.</div>') }
];

let failed = 0;
checks.forEach(c => {
  console.log(`${c.pass ? 'PASS' : 'FAIL'}: ${c.name}`);
  if (!c.pass) failed++;
});

console.log(`\nVerification Result: ${checks.length - failed}/${checks.length} passed.`);
if (failed > 0) process.exit(1);
