// Builder: Assemble all 14 modules into trek/pikey-peak-trek/index.html
const fs = require('fs');

const { getHeadAndHeader } = require('./mod1_head_header.js');
const { getHeroAndSubnav } = require('./mod2_hero_subnav.js');
const { getOverviewSection } = require('./mod3_overview.js');
const { getItinerarySection } = require('./mod4_itinerary.js');
const { getIncludesSection } = require('./mod5_includes.js');
const { getDatesSection } = require('./mod6_dates.js');
const { getPackingSection } = require('./mod7_packing.js');
const { getDetailsSection } = require('./mod8_details.js');
const { getAltitudeSection } = require('./mod9_altitude.js');
const { getWeatherSection } = require('./mod10_weather.js');
const { getMapSection } = require('./mod11_map.js');
const { getReviewsSection } = require('./mod12_reviews.js');
const { getFaqsSection } = require('./mod13_faqs.js');
const { getSidebarAndFooter } = require('./mod14_sidebar_footer.js');

console.log("Assembling all modules...");

const fullHtml = [
  getHeadAndHeader(),
  getHeroAndSubnav(),
  getOverviewSection(),
  getItinerarySection(),
  getIncludesSection(),
  getDatesSection(),
  getPackingSection(),
  getDetailsSection(),
  getAltitudeSection(),
  getWeatherSection(),
  getMapSection(),
  getReviewsSection(),
  getFaqsSection(),
  getSidebarAndFooter()
].join('\n');

console.log("Total generated HTML length:", fullHtml.length, "bytes");

// Verification checks:
// 1. All 11 section IDs
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
  'section-reviews',
  'section-faqs'
];

let allSectionsPresent = true;
expectedSections.forEach(sec => {
  const has = fullHtml.includes(`id="${sec}"`);
  console.log(`Checking #${sec}: ${has ? 'FOUND' : 'MISSING'}`);
  if (!has) allSectionsPresent = false;
});

if (!allSectionsPresent) {
  console.error("FATAL: Missing section IDs!");
  process.exit(1);
}

// 2. Interactive mount IDs
const mounts = ['altitude-chart-wrapper', 'weather-chart-wrapper', 'dual-calendar-mount', 'video-review-modal', 'inquiry-modal'];
mounts.forEach(m => {
  const has = fullHtml.includes(`id="${m}"`);
  console.log(`Checking mount #${m}: ${has ? 'FOUND' : 'MISSING'}`);
  if (!has) {
    console.error(`FATAL: Missing mount #${m}`);
    process.exit(1);
  }
});

// 3. Check tag balance for critical tags
const tagsToCheck = ['div', 'section', 'article', 'main', 'header', 'footer', 'nav', 'table'];
tagsToCheck.forEach(tag => {
  const openRegex = new RegExp(`<${tag}(\\s+[^>]*)?>`, 'gi');
  const closeRegex = new RegExp(`</${tag}>`, 'gi');
  const opens = (fullHtml.match(openRegex) || []).length;
  const closes = (fullHtml.match(closeRegex) || []).length;
  console.log(`Tag <${tag}>: ${opens} open vs ${closes} close | diff: ${opens - closes}`);
  if (opens !== closes) {
    console.warn(`WARNING: Tag imbalance on <${tag}>! (${opens} vs ${closes})`);
  }
});

// Write to destination
const destPath = 'trek/pikey-peak-trek/index.html';
fs.writeFileSync(destPath, fullHtml, 'utf8');
console.log(`SUCCESS: Successfully wrote ${fullHtml.length} bytes to ${destPath}`);

