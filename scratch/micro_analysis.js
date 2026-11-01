const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const mardi = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

function extractTag(html, startPattern, endPattern) {
  const s = html.indexOf(startPattern);
  if (s === -1) return null;
  const e = html.indexOf(endPattern, s);
  if (e === -1) return null;
  return html.slice(s, e + endPattern.length);
}

console.log('=== HERO COMPARISON ===');
const ebcHero = ebc.slice(ebc.indexOf('<header class="trek-hero-header'), ebc.indexOf('</header>', ebc.indexOf('<header class="trek-hero-header')) + 9);
const mardiHero = mardi.slice(mardi.indexOf('<header class="trek-hero-header'), mardi.indexOf('</header>', mardi.indexOf('<header class="trek-hero-header')) + 9);
console.log('EBC Hero length:', ebcHero.length);
console.log('Mardi Hero length:', mardiHero.length);

console.log('\n=== GALLERY COMPARISON ===');
console.log('EBC has gallery-collage:', ebc.includes('gallery-collage'));
console.log('Mardi has gallery-collage:', mardi.includes('gallery-collage'));

console.log('\n=== TRIP FACTS COMPARISON ===');
console.log('EBC has quick-facts-grid:', ebc.includes('quick-facts-grid') || ebc.includes('trip-facts-grid'));
console.log('Mardi has quick-facts-grid:', mardi.includes('quick-facts-grid') || mardi.includes('trip-facts-grid'));

console.log('\n=== SUBNAV COMPARISON ===');
const ebcNavMatches = [...ebc.matchAll(/<a[^>]*class=["'][^"']*trek-sub-nav-btn[^"']*["'][^>]*href=["']([^"']+)["']/g)].map(m => m[1]);
const mardiNavMatches = [...mardi.matchAll(/<a[^>]*class=["'][^"']*trek-sub-nav-btn[^"']*["'][^>]*href=["']([^"']+)["']/g)].map(m => m[1]);
console.log('EBC subnav links:', ebcNavMatches);
console.log('Mardi subnav links:', mardiNavMatches);

console.log('\n=== OVERVIEW HIGHLIGHTS & GLANCE COMPARISON ===');
console.log('EBC has ebc-glance-box:', ebc.includes('ebc-glance-box'));
console.log('Mardi has ebc-glance-box:', mardi.includes('ebc-glance-box'));
console.log('EBC has ebc-highlights-section:', ebc.includes('ebc-highlights-section'));
console.log('Mardi has ebc-highlights-section:', mardi.includes('ebc-highlights-section'));

console.log('\n=== DATES & AVAILABILITY COMPARISON ===');
console.log('EBC has dates-departure-list:', ebc.includes('dates-departure-list'));
console.log('Mardi has dates-departure-list:', mardi.includes('dates-departure-list'));
console.log('EBC has dates-month-tab:', ebc.includes('dates-month-tab'));
console.log('Mardi has dates-month-tab:', mardi.includes('dates-month-tab'));

console.log('\n=== PACKING LIST COMPARISON ===');
console.log('EBC has gear-item-checkbox:', ebc.includes('gear-item-checkbox'));
console.log('Mardi has gear-item-checkbox:', mardi.includes('gear-item-checkbox'));
console.log('EBC has gear-checked-count:', ebc.includes('gear-checked-count'));
console.log('Mardi has gear-checked-count:', mardi.includes('gear-checked-count'));

console.log('\n=== REVIEWS COMPARISON ===');
console.log('EBC has review-tabs-container:', ebc.includes('review-tabs-container'));
console.log('Mardi has review-tabs-container:', mardi.includes('review-tabs-container'));
console.log('EBC has video-review-card:', ebc.includes('video-review-card'));
console.log('Mardi has video-review-card:', mardi.includes('video-review-card'));
console.log('EBC has helpful-vote-btn:', ebc.includes('helpful-vote-btn'));
console.log('Mardi has helpful-vote-btn:', mardi.includes('helpful-vote-btn'));
console.log('EBC has platform-sub-tab:', ebc.includes('platform-sub-tab'));
console.log('Mardi has platform-sub-tab:', mardi.includes('platform-sub-tab'));

console.log('\n=== GUIDES READ TRACKER COMPARISON ===');
console.log('EBC has detail-accordion-card:', ebc.includes('detail-accordion-card'));
console.log('Mardi has detail-accordion-card:', mardi.includes('detail-accordion-card'));
console.log('EBC has details-progress-ring-bar:', ebc.includes('details-progress-ring-bar'));
console.log('Mardi has details-progress-ring-bar:', mardi.includes('details-progress-ring-bar'));

console.log('\n=== SIDEBAR COMPARISON ===');
console.log('EBC has booking-calculator:', ebc.includes('booking-calculator'));
console.log('Mardi has booking-calculator:', mardi.includes('booking-calculator'));
console.log('EBC has booking-discount-toggle:', ebc.includes('booking-discount-toggle'));
console.log('Mardi has booking-discount-toggle:', mardi.includes('booking-discount-toggle'));
