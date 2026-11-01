const fs = require('fs');

console.log('Reading cleaned authentic git orig...');
const origCleaned = fs.readFileSync('scratch/original_git_everest_view_cleaned.html', 'utf8');

const sec1Index = origCleaned.indexOf('<section id="section-overview"');
let topSection = origCleaned.slice(0, sec1Index);

// Update Quick Facts in topSection
console.log('Updating Quick facts in topSection...');
topSection = topSection.replace(
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">14 days</span>',
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">7 days</span>'
);

topSection = topSection.replace(
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;" data-altitude-m="5545">5,545 m</span>',
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;" data-altitude-m="3880">~3,880 m</span>'
);

topSection = topSection.replace(
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Everest Base Camp</span>',
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Everest & Khumbu Region</span>'
);

topSection = topSection.replace(
  'data-trek-key="ebc"',
  'data-trek-key="everest-view"'
);

// Add altitude and weather buttons to subnav if not already present
if (!topSection.includes('data-tab="altitude"')) {
  const mapBtn = '<button class="trek-sub-nav-btn" data-tab="map">';
  const altWeaBtns = `<button class="trek-sub-nav-btn" data-tab="altitude">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>Altitude
          </button>
          <button class="trek-sub-nav-btn" data-tab="weather">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>Weather
          </button>
          ` + mapBtn;
  topSection = topSection.replace(mapBtn, altWeaBtns);
}

// Load middle sections
console.log('Loading modular content sections...');
const getSection1Overview = require('./gen_everest_section1_overview');
const getSection2Itinerary = require('./gen_everest_section2_itinerary');
const getSection3to5 = require('./gen_everest_section3_5');
const getSection6Accordions = require('./gen_everest_section6_accordions');
const getSection7to12 = require('./gen_everest_section7_12');

const middleContent = 
  getSection1Overview() +
  getSection2Itinerary() +
  getSection3to5() +
  getSection6Accordions();

// Extract section 7 to 12 EXACTLY up to </section> of section-faqs
const sec7_12_full = getSection7to12();
const faqsStart = sec7_12_full.indexOf('id="section-faqs"');
const faqsEnd = sec7_12_full.indexOf('</section>', faqsStart) + 10;
const leftColContent = sec7_12_full.slice(0, faqsEnd);

// Prepare sidebar and bottom from origCleaned
console.log('Preparing authentic sidebar and footer from origCleaned...');
const origFaqsIdx = origCleaned.indexOf('id="section-faqs"');
const origFaqsEnd = origCleaned.indexOf('</section>', origFaqsIdx) + 10;
let sidebarAndBottom = origCleaned.slice(origFaqsEnd);

// Update pricing in sidebar: $1,299 -> $899, 14 days trip -> 7 days trip
sidebarAndBottom = sidebarAndBottom.replace(
  '<span style="font-size: 2.5rem; font-weight: 800; color: #0F172A; line-height: 1;">$1,299</span>',
  '<span style="font-size: 2.5rem; font-weight: 800; color: #0F172A; line-height: 1;">$899</span>'
);

sidebarAndBottom = sidebarAndBottom.replace(
  '14 days trip</a>',
  '7 days trip</a>'
);

// Update group discount table
sidebarAndBottom = sidebarAndBottom.replace(
  '<strong style="color: #0F172A;">$1,234 / person</strong>',
  '<strong style="color: #0F172A;">$869 / person</strong>'
);

sidebarAndBottom = sidebarAndBottom.replace(
  '<strong style="color: #0F172A;">$1,169 / person</strong>',
  '<strong style="color: #0F172A;">$829 / person</strong>'
);

sidebarAndBottom = sidebarAndBottom.replace(
  '<strong style="color: #0F172A;">$1,104 / person</strong>',
  '<strong style="color: #0F172A;">$799 / person</strong>'
);

// Combine everything!
const perfectHTML = topSection + middleContent + leftColContent + '\n' + sidebarAndBottom;

fs.writeFileSync('trek/everest-view-trek/index.html', perfectHTML, 'utf8');
console.log('Successfully wrote', perfectHTML.length, 'bytes to trek/everest-view-trek/index.html!');
