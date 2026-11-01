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

// Load middle sections (1 to 6)
console.log('Loading modular content sections (1 to 6)...');
const getSection1Overview = require('./gen_everest_section1_overview');
const getSection2Itinerary = require('./gen_everest_section2_itinerary');
const getSection3to5 = require('./gen_everest_section3_5');
const getSection6Accordions = require('./gen_everest_section6_accordions');

const middleContent = 
  getSection1Overview() +
  getSection2Itinerary() +
  getSection3to5() +
  getSection6Accordions();

// Prepare authentic sections 7 to 12 from origCleaned
console.log('Extracting authentic sections 7 to 12 from origCleaned...');
const altIdx = origCleaned.indexOf('<section id="section-altitude-profile"');
const origFaqsIdx = origCleaned.indexOf('id="section-faqs"');
const origFaqsEnd = origCleaned.indexOf('</section>', origFaqsIdx) + 10;
let sec7_12 = origCleaned.slice(altIdx, origFaqsEnd);

// Update visualizers in sec7_12
sec7_12 = sec7_12.replace(/data-trek-key="ebc"/g, 'data-trek-key="everest-view"');

// Update route text in altitude profile
sec7_12 = sec7_12.replace(
  'The route commences at Lukla (2,860m) and ascends through the Khumbu Valley to Everest Base Camp (5,364m) and the iconic vantage point of Kala Patthar (5,545m).',
  'The route commences at Lukla (2,860 m) and ascends through the Dudh Koshi Valley to Namche Bazaar (3,440 m) and the iconic vantage point of Hotel Everest View (~3,880 m), offering panoramic Himalayan views without trekking to Base Camp.'
);

// Prepare tailored General FAQs for Everest View Trek
const everestViewGeneralFaqs = `id="faq-cat-general">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Can I actually see Mount Everest clearly on this 7-day trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Yes! From the scenic ridge and terrace of Hotel Everest View (3,880 m) above Namche Bazaar, you get a clean, direct panoramic vista of Mount Everest (8,848.86 m), along with Lhotse, Nuptse, Ama Dablam, and Thamserku when weather is clear in morning hours.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>How difficult is the Everest View Trek compared to Everest Base Camp?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      It is significantly more manageable and accessible. The Everest View Trek lasts 7 days with a maximum elevation of ~3,880 m and sleeps no higher than 3,440 m in Namche Bazaar. The full Everest Base Camp trek lasts 12–14 days and reaches 5,364 m at Base Camp and 5,545 m at Kala Patthar.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Do I need prior mountaineering or climbing experience?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      No. The trek follows well-defined mountain trails used daily by local Sherpas and pack animals. No ropes, crampons, ice axes, or technical skills are required. A reasonable level of hiking fitness and stamina for 4–6 hours of walking per day is all that is needed.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What happens if my Lukla flight is delayed due to weather?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Lukla flights operate under Visual Flight Rules and can be delayed by morning fog or wind. Our operations team monitors conditions 24/7. In case of extended commercial delays, helicopter charters can be coordinated (extra fee, often claimable via travel insurance). We recommend keeping at least 1–2 buffer days in Kathmandu before your international flight home.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Are flights operated from Kathmandu or Ramechhap?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      During peak trekking seasons (Spring: April–May and Autumn: October–November), the Civil Aviation Authority of Nepal frequently routes Lukla flights through Manthali Airport in Ramechhap to minimize air traffic congestion in Kathmandu. We provide seamless private road transport between Kathmandu and Ramechhap. During shoulder months, flights generally operate directly from Kathmandu.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What is the accommodation like in Phakding and Namche Bazaar?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Accommodation is in comfortable mountain teahouses and lodges featuring twin-sharing bedrooms with comfortable foam mattresses, clean sheets, and warm blankets. Namche Bazaar has developed lodges featuring heated dining halls, espresso coffee bakeries, hot showers, and Wi-Fi access.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Is travel insurance mandatory for the Everest View Trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Yes. Comprehensive travel insurance covering high-altitude trekking up to 4,000 meters and emergency helicopter evacuation is strictly mandatory for all participants.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What permits are required for the Everest View Trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Two official permits are mandatory: the Sagarmatha National Park Entry Permit (NPR 3,000) and the Khumbu Pasang Lhamu Rural Municipality Entrance Permit (NPR 3,000). Both permits are included in our package and pre-arranged by our office.
                    </div>
                  </div>`;

// Replace General FAQs block in sec7_12
const origCatGenStart = sec7_12.indexOf('id="faq-cat-general"');
const origCatGenEnd = sec7_12.indexOf('id="faq-cat-permits"');
if (origCatGenStart !== -1 && origCatGenEnd !== -1) {
  // Find opening of next div or previous tag
  const sliceBefore = sec7_12.slice(0, origCatGenStart);
  // find closing </div> before id="faq-cat-permits"
  const sliceAfter = sec7_12.slice(origCatGenEnd);
  sec7_12 = sliceBefore + everestViewGeneralFaqs + '\n                </div>\n\n                <div class="faq-category-content" ' + sliceAfter;
}

// Prepare sidebar and bottom from origCleaned
console.log('Preparing authentic sidebar and footer from origCleaned...');
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
const perfectHTML = topSection + middleContent + sec7_12 + '\n' + sidebarAndBottom;

fs.writeFileSync('trek/everest-view-trek/index.html', perfectHTML, 'utf8');
console.log('Successfully wrote', perfectHTML.length, 'bytes to trek/everest-view-trek/index.html!');
