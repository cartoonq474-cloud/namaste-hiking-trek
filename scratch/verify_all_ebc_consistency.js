const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const abc = fs.readFileSync('trek/annapurna-base-camp-luxury-trek/index.html', 'utf8');

const features = [
  { name: 'Site Footer class="site-footer"', ebc: ebc.includes('<footer class="site-footer">'), abc: abc.includes('<footer class="site-footer">') },
  { name: 'Footer 4-Col Layout "footer-luxury-layout"', ebc: ebc.includes('footer-luxury-layout'), abc: abc.includes('footer-luxury-layout') },
  { name: 'Footer Brand Watermark "NAMASTE."', ebc: ebc.includes('watermark-brand-text'), abc: abc.includes('watermark-brand-text') },
  { name: 'Sidebar class="sidebar-booking-card"', ebc: ebc.includes('class="sidebar-booking-card"'), abc: abc.includes('class="sidebar-booking-card"') },
  { name: 'Sidebar Ribbon Badge', ebc: ebc.includes('BEST SELLER'), abc: abc.includes('LUXURY EXPEDITION') },
  { name: 'Group Discount Toggle "group-discount-toggle"', ebc: ebc.includes('group-discount-toggle'), abc: abc.includes('group-discount-toggle') },
  { name: 'Group Discount Content "group-discount-content"', ebc: ebc.includes('group-discount-content'), abc: abc.includes('group-discount-content') },
  { name: 'Instant Help with Phone & WhatsApp buttons', ebc: ebc.includes('INSTANT HELP'), abc: abc.includes('INSTANT HELP') },
  { name: 'Dates Header "dates-section-header"', ebc: ebc.includes('dates-section-header'), abc: abc.includes('dates-section-header') },
  { name: 'Dates Mode Toggle "dates-mode-toggle"', ebc: ebc.includes('dates-mode-toggle'), abc: abc.includes('dates-mode-toggle') },
  { name: 'Dates Private View "dates-private-view"', ebc: ebc.includes('id="dates-private-view"'), abc: abc.includes('id="dates-private-view"') },
  { name: 'Review 3-Pill Switcher "review-tabs-container"', ebc: ebc.includes('review-tabs-container'), abc: abc.includes('review-tabs-container') },
  { name: 'Review Video Pane "reviews-video-pane"', ebc: ebc.includes('id="reviews-video-pane"'), abc: abc.includes('id="reviews-video-pane"') },
  { name: 'Review Customer Pane "reviews-customer-pane"', ebc: ebc.includes('id="reviews-customer-pane"'), abc: abc.includes('id="reviews-customer-pane"') },
  { name: 'Review Platform Pane "reviews-platform-pane"', ebc: ebc.includes('id="reviews-platform-pane"'), abc: abc.includes('id="reviews-platform-pane"') },
  { name: 'Video Lightbox Modal "video-review-modal"', ebc: ebc.includes('id="video-review-modal"'), abc: abc.includes('id="video-review-modal"') },
  { name: 'FAQ Accent Title "faq-section-accent-title"', ebc: ebc.includes('faq-section-accent-title'), abc: abc.includes('faq-section-accent-title') },
  { name: 'FAQ 2-Col Layout "faq-layout-container"', ebc: ebc.includes('faq-layout-container'), abc: abc.includes('faq-layout-container') },
  { name: 'FAQ Category Sidebar "faq-sidebar-card"', ebc: ebc.includes('faq-sidebar-card'), abc: abc.includes('faq-sidebar-card') },
  { name: 'FAQ Main Panel "faq-main-panel"', ebc: ebc.includes('faq-main-panel'), abc: abc.includes('faq-main-panel') },
  { name: '16 In-Depth Guides Section', ebc: ebc.includes('id="section-details"'), abc: abc.includes('id="section-details"') },
  { name: 'Itinerary Toggle All Button "itineraryToggleAllBtn"', ebc: ebc.includes('id="itineraryToggleAllBtn"'), abc: abc.includes('id="itineraryToggleAllBtn"') },
  { name: 'Mobile Floating CTA "mobile-book-cta"', ebc: ebc.includes('class="mobile-book-cta"'), abc: abc.includes('class="mobile-book-cta"') }
];

console.log('=== FULL EBC VS ABC LUXURY COMPARISON ===');
let allPassed = true;
features.forEach(f => {
  const match = f.ebc && f.abc;
  if (!match) allPassed = false;
  console.log(`${match ? '✅' : '❌'} ${f.name.padEnd(50)} | EBC: ${f.ebc ? 'YES' : 'NO'} | ABC: ${f.abc ? 'YES' : 'NO'}`);
});

console.log('\nOVERALL RESULT:', allPassed ? 'PERFECT 100% CONSISTENCY!' : 'SOME FEATURES DIFFER');
