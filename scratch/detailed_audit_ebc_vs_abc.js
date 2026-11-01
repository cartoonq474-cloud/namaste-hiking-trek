const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const abc = fs.readFileSync('trek/annapurna-base-camp-luxury-trek/index.html', 'utf8');

// 1. Check Header & Nav
console.log('=== 1. HEADER & HERO COMPARISON ===');
const ebcHeroMatch = ebc.match(/<section[^>]*style="[^"]*padding:[^"]*background:[^"]*var\(--color-neutral-50\)[\s\S]*?<\/section>/i);
const abcHeroMatch = abc.match(/<section[^>]*style="[^"]*padding:[^"]*background:[^"]*var\(--color-neutral-50\)[\s\S]*?<\/section>/i);
console.log('EBC Hero exists:', !!ebcHeroMatch);
console.log('ABC Hero exists:', !!abcHeroMatch);

// 2. Check Photo Collage
console.log('\n=== 2. PHOTO COLLAGE ===');
const ebcCollage = ebc.match(/class="trek-gallery-collage"/);
const abcCollage = abc.match(/class="trek-gallery-collage"/);
console.log('EBC Collage exists:', !!ebcCollage);
console.log('ABC Collage exists:', !!abcCollage);

// 3. Key Facts
console.log('\n=== 3. KEY FACTS ===');
const ebcFacts = [...ebc.matchAll(/class="trip-fact-item"/g)].length;
const abcFacts = [...abc.matchAll(/class="trip-fact-item"/g)].length;
console.log('EBC Facts count:', ebcFacts);
console.log('ABC Facts count:', abcFacts);

// 4. Subnav tabs
console.log('\n=== 4. SUBNAV TABS ===');
const ebcTabs = [...ebc.matchAll(/class="trek-sub-nav-btn[^"]*"\s+data-tab="([^"]+)"/g)].map(m => m[1]);
const abcTabs = [...abc.matchAll(/class="trek-sub-nav-btn[^"]*"\s+data-tab="([^"]+)"/g)].map(m => m[1]);
console.log('EBC Tabs:', ebcTabs);
console.log('ABC Tabs:', abcTabs);

// 5. Sections detail comparison
console.log('\n=== 5. SECTION BY SECTION BREAKDOWN ===');
const checkSection = (id) => {
  const eSec = ebc.indexOf(`id="${id}"`) !== -1;
  const aSec = abc.indexOf(`id="${id}"`) !== -1;
  console.log(`- ${id}: EBC=${eSec ? 'YES' : 'NO'}, ABC=${aSec ? 'YES' : 'NO'}`);
};

const allSections = [
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
allSections.forEach(checkSection);

// Check classes and features in each section
console.log('\n=== 6. SPECIFIC FEATURE COMPARISON ===');
console.log('EBC Itinerary timeline class:', ebc.includes('class="itinerary-timeline"'));
console.log('ABC Itinerary timeline class:', abc.includes('class="itinerary-timeline"'));
console.log('EBC Itinerary toggle all btn:', ebc.includes('id="itineraryToggleAllBtn"'));
console.log('ABC Itinerary toggle all btn:', abc.includes('id="itineraryToggleAllBtn"'));

console.log('\nGuides section features:');
console.log('EBC Guide category pills:', ebc.includes('class="guide-category-pills"'));
console.log('ABC Guide category pills:', abc.includes('class="guide-category-pills"'));
console.log('EBC Guide search input:', ebc.includes('id="guideSearchInput"'));
console.log('ABC Guide search input:', abc.includes('id="guideSearchInput"'));
console.log('EBC Guide progress ring:', ebc.includes('class="details-progress-wrapper"'));
console.log('ABC Guide progress ring:', abc.includes('class="details-progress-wrapper"'));

console.log('\nSidebar & Floating CTA:');
console.log('EBC Booking Sidebar:', ebc.includes('class="trek-booking-sidebar"'));
console.log('ABC Booking Sidebar:', abc.includes('class="trek-booking-sidebar"'));
console.log('EBC Mobile Book CTA:', ebc.includes('class="mobile-book-cta"'));
console.log('ABC Mobile Book CTA:', abc.includes('class="mobile-book-cta"'));
