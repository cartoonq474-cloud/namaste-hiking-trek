const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const mardi = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const sections = [
  { id: 'hero-top', name: 'Hero Top & Badges' },
  { id: 'gallery', name: 'Gallery Collage' },
  { id: 'key-facts', name: 'Key Trip Facts Grid' },
  { id: 'trust-badges', name: 'Trust Badges' },
  { id: 'sub-nav', name: 'Sub-Navigation Bar' },
  { id: 'section-overview', name: 'Section 1: Overview' },
  { id: 'section-itinerary', name: 'Section 2: Itinerary' },
  { id: 'section-includes', name: 'Section 3: Includes & Excludes' },
  { id: 'section-dates', name: 'Section 4: Dates & Availability' },
  { id: 'section-packing', name: 'Section 5: Packing List' },
  { id: 'section-details', name: 'Section 6: Read Before You Book / Guides' },
  { id: 'section-altitude-profile', name: 'Section 7: Altitude Profile' },
  { id: 'section-weather', name: 'Section 8: Weather' },
  { id: 'section-map', name: 'Section 9: Map' },
  { id: 'section-booking', name: 'Section 10: Booking Form' },
  { id: 'section-reviews', name: 'Section 11: Reviews' },
  { id: 'section-faqs', name: 'Section 12: FAQs' },
  { id: 'sidebar', name: 'Sidebar Booking Card' },
  { id: 'similar-treks', name: 'Similar Treks' }
];

console.log('=== SECTION PRESENCE & SIZE COMPARISON ===\n');

sections.forEach(s => {
  let ebcStart = -1, ebcLen = 0;
  let mardiStart = -1, mardiLen = 0;

  if (s.id.startsWith('section-')) {
    ebcStart = ebc.indexOf(`id="${s.id}"`);
    if (ebcStart !== -1) {
      const ebcEnd = ebc.indexOf('</section>', ebcStart);
      ebcLen = ebcEnd - ebcStart;
    }
    mardiStart = mardi.indexOf(`id="${s.id}"`);
    if (mardiStart !== -1) {
      const mardiEnd = mardi.indexOf('</section>', mardiStart);
      mardiLen = mardiEnd - mardiStart;
    }
  } else if (s.id === 'hero-top') {
    ebcStart = ebc.indexOf('<section class="trek-hero-header"');
    ebcLen = 1500;
    mardiStart = mardi.indexOf('<section class="trek-hero-header"');
    mardiLen = 1500;
  } else if (s.id === 'gallery') {
    ebcStart = ebc.indexOf('trek-gallery-collage');
    ebcLen = 1000;
    mardiStart = mardi.indexOf('trek-gallery-collage');
    mardiLen = 1000;
  } else if (s.id === 'key-facts') {
    ebcStart = ebc.indexOf('Key Trip Facts');
    ebcLen = 1500;
    mardiStart = mardi.indexOf('Key Trip Facts');
    mardiLen = 1500;
  } else if (s.id === 'trust-badges') {
    ebcStart = ebc.indexOf('Govt-registered local Nepal agency');
    ebcLen = 1000;
    mardiStart = mardi.indexOf('Govt-registered local Nepal agency');
    mardiLen = 1000;
  } else if (s.id === 'sub-nav') {
    ebcStart = ebc.indexOf('trek-sub-nav');
    ebcLen = 1200;
    mardiStart = mardi.indexOf('trek-sub-nav');
    mardiLen = 1200;
  } else if (s.id === 'sidebar') {
    ebcStart = ebc.indexOf('sidebar-booking-card');
    ebcLen = 2500;
    mardiStart = mardi.indexOf('sidebar-booking-card');
    mardiLen = 2500;
  } else if (s.id === 'similar-treks') {
    ebcStart = ebc.indexOf('Other Iconic Treks') !== -1 ? ebc.indexOf('Other Iconic Treks') : ebc.indexOf('You May Also Like');
    ebcLen = 1500;
    mardiStart = mardi.indexOf('Other Iconic Treks');
    mardiLen = 1500;
  }

  console.log(`${s.name.padEnd(40)} | EBC: ${ebcStart !== -1 ? ebcLen + ' chars' : 'MISSING'} | Mardi: ${mardiStart !== -1 ? mardiLen + ' chars' : 'MISSING'}`);
});
