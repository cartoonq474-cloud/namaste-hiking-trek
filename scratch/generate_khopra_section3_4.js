const fs = require('fs');

console.log('Generating authentic Section 3 (Includes & Excludes) & Section 4 for Khopra Ridge Trek...');
let html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

// Locate Section 3
const s3Start = html.indexOf('<!-- Section 3: Includes and Excludes -->');
const datesSecStart = html.indexOf('<!-- Section: Booking Dates & Availability -->');

if (s3Start === -1 || datesSecStart === -1) {
  console.error('Could not locate Section 3 or Dates section markers!', { s3Start, datesSecStart });
  process.exit(1);
}

const section3Html = `<!-- Section 3: Includes and Excludes -->
          <section id="section-includes" class="trek-detail-section">
            <style>
              .inc-exc-container {
                margin-top: 10px;
              }
              .inc-exc-section-title-wrapper {
                border-left: 4px solid var(--color-copper-orange);
                padding-left: 14px;
                margin-bottom: 20px;
              }
              .inc-exc-section-title {
                font-size: 1.4rem;
                font-weight: 700;
                color: var(--color-primary-navy);
                margin: 0;
              }
              .inc-exc-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 16px;
                margin-bottom: 35px;
              }
              .inc-exc-card {
                background: #ffffff;
                border: 1px solid var(--color-neutral-100);
                border-radius: var(--radius-md);
                padding: 16px 18px;
                display: flex;
                align-items: flex-start;
                gap: 14px;
                box-shadow: var(--shadow-sm);
                transition: transform 0.2s, box-shadow 0.2s;
              }
              .inc-exc-card:hover {
                transform: translateY(-2px);
                box-shadow: var(--shadow-md);
              }
              .inc-exc-icon-wrapper {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                margin-top: 2px;
              }
              .inc-icon-wrapper {
                background: #e6f7f0;
                color: #008060;
              }
              .exc-icon-wrapper {
                background: #fee2e2;
                color: #dc2626;
              }
              .inc-exc-card-title {
                font-size: 0.95rem;
                font-weight: 700;
                color: var(--color-primary-navy);
                margin: 0 0 4px 0;
                line-height: 1.4;
              }
              .inc-exc-card-desc {
                font-size: 0.85rem;
                color: var(--color-neutral-600);
                margin: 0;
                line-height: 1.5;
              }
            </style>

            <div class="inc-exc-container">
              <!-- Includes Header -->
              <div class="inc-exc-section-title-wrapper" style="border-left-color: #008060;">
                <h2 class="inc-exc-section-title" style="display: flex; align-items: center; gap: 8px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  What is Included in Khopra Ridge Trek Package
                </h2>
              </div>

              <!-- Includes Grid (12 Items) -->
              <div class="inc-exc-grid">
                <!-- 1. Airport Transfers -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-wrapper inc-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4 class="inc-exc-card-title">International Airport Transfers x 2</h4>
                    <p class="inc-exc-card-desc">Private airport pickup on Day 1 and drop-off on Day 15 in Kathmandu with garland welcome.</p>
                  </div>
                </div>

                <!-- 2. Kathmandu-Pokhara Transport -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-wrapper inc-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4 class="inc-exc-card-title">Kathmandu – Pokhara Overland Transfers</h4>
                    <p class="inc-exc-card-desc">Comfortable roundtrip tourist coach or private vehicle road journey along the Prithvi Highway (Day 2 & Day 14).</p>
                  </div>
                </div>

                <!-- 3. Trailhead 4WD Transport -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-wrapper inc-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4 class="inc-exc-card-title">Private Trailhead Road Transfers</h4>
                    <p class="inc-exc-card-desc">Private vehicle from Pokhara to Nayapul/trailhead on Day 3 and return transfer from Nayapul to Pokhara on Day 13.</p>
                  </div>
                </div>

                <!-- 4. ACAP Permit -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-wrapper inc-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4 class="inc-exc-card-title">Annapurna Conservation Area Permit (ACAP)</h4>
                    <p class="inc-exc-card-desc">All official Annapurna Conservation Area entrance permits, local government fees, and TIMS paperwork.</p>
                  </div>
                </div>

                <!-- 5. Certified Guide -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-wrapper inc-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4 class="inc-exc-card-title">Government-Licensed Mountain Guide</h4>
                    <p class="inc-exc-card-desc">Experienced English-speaking trekking guide certified in Wilderness First Aid and high-altitude emergency safety.</p>
                  </div>
                </div>

                <!-- 6. Porter Crew -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-wrapper inc-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4 class="inc-exc-card-title">Dedicated Mountain Porters</h4>
                    <p class="inc-exc-card-desc">1 porter for every 2 trekkers (max 20–22 kg shared weight limit, compliant with IPPG standards).</p>
                  </div>
                </div>

                <!-- 7. City Hotels -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-wrapper inc-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4 class="inc-exc-card-title">4 Nights City Hotel Accommodation</h4>
                    <p class="inc-exc-card-desc">2 nights in Kathmandu (Days 1 & 14) and 2 nights in Pokhara (Days 2 & 13) in 3-star standard hotels with daily breakfast.</p>
                  </div>
                </div>

                <!-- 8. Mountain Lodges -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-wrapper inc-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4 class="inc-exc-card-title">10 Nights Teahouses & Community Lodges</h4>
                    <p class="inc-exc-card-desc">Handpicked twin-share accommodation along the trail, including community lodges at Bayeli Kharka and Khopra Ridge.</p>
                  </div>
                </div>

                <!-- 9. Full Board Meals -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-wrapper inc-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4 class="inc-exc-card-title">All Meals on Trek (Breakfast, Lunch & Dinner)</h4>
                    <p class="inc-exc-card-desc">11 days of full board trail meals (freshly prepared hearty dishes like Dal Bhat, noodles, porridge, and hot tea/coffee).</p>
                  </div>
                </div>

                <!-- 10. Medical & Safety Equipment -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-wrapper inc-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4 class="inc-exc-card-title">Daily Oximeter Checks & Medical First Aid Kit</h4>
                    <p class="inc-exc-card-desc">Twice-daily blood oxygen (SpO2) and pulse monitoring, first aid kit, and 24/7 emergency helicopter rescue dispatch.</p>
                  </div>
                </div>

                <!-- 11. Trekking Duffle Bag & Route Map -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-wrapper inc-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4 class="inc-exc-card-title">Complimentary Duffle Bag & Annapurna Map</h4>
                    <p class="inc-exc-card-desc">Complimentary 100L waterproof duffle bag for porter portage, official Annapurna topographical map, and completion certificate.</p>
                  </div>
                </div>

                <!-- 12. Staff Insurance & Living Wages -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-wrapper inc-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4 class="inc-exc-card-title">Fair Wages & Staff Emergency Insurance</h4>
                    <p class="inc-exc-card-desc">All guide and porter daily living allowances, mountain gear, full medical/emergency evacuation insurance, and legal wages.</p>
                  </div>
                </div>
              </div>

              <!-- Excludes Header -->
              <div class="inc-exc-section-title-wrapper" style="border-left-color: #dc2626;">
                <h2 class="inc-exc-section-title" style="display: flex; align-items: center; gap: 8px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  What is Excluded in Khopra Ridge Trek Package
                </h2>
              </div>

              <!-- Excludes Grid (6 Items) -->
              <div class="inc-exc-grid">
                <!-- 1. Nepal Visa -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-wrapper exc-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </div>
                  <div>
                    <h4 class="inc-exc-card-title">Nepal Tourist Entry Visa</h4>
                    <p class="inc-exc-card-desc">Nepal entry visa fee ($30 USD for 15 days or $50 USD for 30 days), obtainable on arrival at Tribhuvan International Airport.</p>
                  </div>
                </div>

                <!-- 2. International Flights & Insurance -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-wrapper exc-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </div>
                  <div>
                    <h4 class="inc-exc-card-title">International Airfare & Travel Insurance</h4>
                    <p class="inc-exc-card-desc">International flights to/from Kathmandu and mandatory travel insurance covering high-altitude hiking up to 5,000m and helicopter evacuation.</p>
                  </div>
                </div>

                <!-- 3. City Lunches & Dinners -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-wrapper exc-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </div>
                  <div>
                    <h4 class="inc-exc-card-title">City Lunches and Dinners</h4>
                    <p class="inc-exc-card-desc">Lunches and dinners in Kathmandu and Pokhara (allowing you flexibility to enjoy the diverse restaurants and cafes).</p>
                  </div>
                </div>

                <!-- 4. Lodge Personal Expenses -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-wrapper exc-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </div>
                  <div>
                    <h4 class="inc-exc-card-title">Personal Teahouse Expenses</h4>
                    <p class="inc-exc-card-desc">Hot showers ($2–$4), battery charging ($2–$3), Wi-Fi scratch cards, mineral water, soft drinks, and bar bills along the trail.</p>
                  </div>
                </div>

                <!-- 5. Personal Gear -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-wrapper exc-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </div>
                  <div>
                    <h4 class="inc-exc-card-title">Personal Trekking Equipment</h4>
                    <p class="inc-exc-card-desc">Personal gear including sleeping bag, down jacket, trekking boots, and trekking poles (available for rent in Kathmandu for $1/day).</p>
                  </div>
                </div>

                <!-- 6. Tips -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-wrapper exc-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </div>
                  <div>
                    <h4 class="inc-exc-card-title">Tips & Gratuities for Support Crew</h4>
                    <p class="inc-exc-card-desc">Customary tipping for your mountain guide and porters (recommended $10–$15 per day per trekker split among crew).</p>
                  </div>
                </div>
              </div>
            </div>
          </section>\n\n          `;

// Splice in Section 3
html = html.substring(0, s3Start) + section3Html + html.substring(datesSecStart);

// Update Section: Dates & Availability Header
const datesHeaderOld = '<h2 class="trek-section-title" style="margin-bottom: 0;">Booking Dates & Availability for EBC trek</h2>';
const datesHeaderNew = '<h2 class="trek-section-title" style="margin-bottom: 0;">Booking Dates & Availability for Khopra Ridge Trek (15 Days)</h2>';

html = html.replace(datesHeaderOld, datesHeaderNew);

// Update Section 4: Packing List Header
html = html.replace(
  '<h2 class="trek-section-title" style="margin-bottom: 8px;">Packing List for Khopra Ridge Trek</h2>',
  '<h2 class="trek-section-title" style="margin-bottom: 8px;">Packing List for Khopra Ridge Trek (15 Days)</h2>'
);

// Validate tag balance
const tags = ['div', 'section', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'span', 'ul', 'li', 'button', 'a', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'main', 'article'];
let allOk = true;
for (const t of tags) {
  const o = (html.match(new RegExp('<' + t + '[\\s>]', 'gi')) || []).length;
  const c = (html.match(new RegExp('</' + t + '>', 'gi')) || []).length;
  if (o !== c) {
    console.error(t + ' MISMATCH: open=' + o + ', close=' + c + ', diff=' + (o - c));
    allOk = false;
  }
}

if (!allOk) {
  console.error('Validation failed! Tag balance error.');
  process.exit(1);
}

fs.writeFileSync('trek/khopra-ridge-trek/index.html', html, 'utf8');
console.log('SUCCESS: Phase 4 (Section 3: Includes/Excludes & Section 4: Packing List) completed with 100% tag balance!');
