const fs = require('fs');

console.log('Reading index.html for Phase 6 updates...');
let html = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8');

// ==========================================
// 1. UPDATE SECTION 6: MAP & ELEVATION
// ==========================================
console.log('1. Updating Section 6: Altitude Profile & Route Info...');
html = html.replace(
  'Altitude Profile of Kanchenjunga Base Camp Trek',
  'Altitude Profile of Kanchenjunga Circuit Trek (26 Days)'
);

html = html.replace(
  `<p style="color: var(--color-neutral-700); font-size: 0.95rem; line-height: 1.6;">
              The route commences with a flight into Lukla, following the Dudh Koshi river up to Namche Bazaar. The path then continues through Tengboche, Dingboche, Lobuche, and Gorak Shep, concluding at the Khumbu Glacier base camp.
            </p>`,
  `<p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.7;">
              The Kanchenjunga Circuit Trek commences from Suketar / Mitlung (<span data-altitude-m="921">921 m</span>), following the pristine Tamor and Ghunsa river valleys through Chirwa, Sukathum, and Amjilosa up to Ghunsa (<span data-altitude-m="3475">3,475 m</span>). It ascends through alpine birch and larch forests to Khambachen (<span data-altitude-m="4050">4,050 m</span>) and across glacial moraines to Lhonak (<span data-altitude-m="4770">4,770 m</span>), culminating at the high northern amphitheater of Pangpema (<span data-altitude-m="5143">5,143 m</span>) directly facing the immense north face of Mount Kanchenjunga (<span data-altitude-m="8586">8,586 m</span>). The circuit then crosses the rugged Sele Le pass (<span data-altitude-m="4290">4,290 m</span>) into the Simbua Khola valley toward Cheram (<span data-altitude-m="3870">3,870 m</span>) and Ramche (<span data-altitude-m="4580">4,580 m</span>) overlooking the Yalung Glacier, descending through Tortong and Yamphudin back to Suketar.
            </p>`
);

// ==========================================
// 2. UPDATE SECTION 7: WEATHER & TEMPERATURES
// ==========================================
console.log('2. Updating Section 7: Weather & Temperatures...');
html = html.replace(
  'Weather on the Kanchenjunga Base Camp Trek',
  'Weather & Temperature Profile on Kanchenjunga Circuit Trek'
);

// Add authentic temperature elevation table below chart in Section 7
const weatherTableHtml = `            <!-- Temperature by Elevation Table -->
            <div style="background: white; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--color-neutral-100); box-shadow: var(--shadow-sm); margin-bottom: 30px; overflow-x: auto;">
              <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 14px;">
                Temperature by Elevation Zone on Kanchenjunga Circuit
              </h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem; text-align: left;">
                <thead>
                  <tr style="background: rgba(15, 23, 42, 0.04); border-bottom: 2px solid var(--color-border);">
                    <th style="padding: 10px 14px; font-weight: 700; color: var(--color-primary-navy);">Elevation Zone</th>
                    <th style="padding: 10px 14px; font-weight: 700; color: var(--color-primary-navy);">Key Stops</th>
                    <th style="padding: 10px 14px; font-weight: 700; color: var(--color-primary-navy);">Spring (Mar–May)</th>
                    <th style="padding: 10px 14px; font-weight: 700; color: var(--color-primary-navy);">Autumn (Sep–Nov)</th>
                    <th style="padding: 10px 14px; font-weight: 700; color: var(--color-primary-navy);">Winter (Dec–Feb)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--color-border);">
                    <td style="padding: 10px 14px; font-weight: 600; color: var(--color-teal);">Lower Valleys (<span data-altitude-m="900">900 m</span>–<span data-altitude-m="2500">2,500 m</span>)</td>
                    <td style="padding: 10px 14px; color: var(--color-neutral-800);">Mitlung, Chirwa, Sukathum, Yamphudin</td>
                    <td style="padding: 10px 14px; color: var(--color-neutral-700);">Day: 18°C to 26°C<br>Night: 8°C to 14°C</td>
                    <td style="padding: 10px 14px; color: var(--color-neutral-700);">Day: 16°C to 24°C<br>Night: 6°C to 12°C</td>
                    <td style="padding: 10px 14px; color: var(--color-neutral-700);">Day: 12°C to 18°C<br>Night: 2°C to 6°C</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-border); background: rgba(0,0,0,0.015);">
                    <td style="padding: 10px 14px; font-weight: 600; color: var(--color-teal);">Mid-Mountain (<span data-altitude-m="2500">2,500 m</span>–<span data-altitude-m="4000">4,000 m</span>)</td>
                    <td style="padding: 10px 14px; color: var(--color-neutral-800);">Amjilosa, Gyabla, Ghunsa, Cheram, Tortong</td>
                    <td style="padding: 10px 14px; color: var(--color-neutral-700);">Day: 10°C to 16°C<br>Night: 0°C to 5°C</td>
                    <td style="padding: 10px 14px; color: var(--color-neutral-700);">Day: 8°C to 15°C<br>Night: -2°C to 4°C</td>
                    <td style="padding: 10px 14px; color: var(--color-neutral-700);">Day: 2°C to 8°C<br>Night: -8°C to -3°C</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-border);">
                    <td style="padding: 10px 14px; font-weight: 600; color: var(--color-teal);">High Alpine (<span data-altitude-m="4000">4,000 m</span>–<span data-altitude-m="5150">5,150 m</span>)</td>
                    <td style="padding: 10px 14px; color: var(--color-neutral-800);">Khambachen, Lhonak, Pangpema, Sele Le</td>
                    <td style="padding: 10px 14px; color: var(--color-neutral-700);">Day: 2°C to 8°C<br>Night: -6°C to -12°C</td>
                    <td style="padding: 10px 14px; color: var(--color-neutral-700);">Day: 0°C to 7°C<br>Night: -8°C to -15°C</td>
                    <td style="padding: 10px 14px; color: var(--color-neutral-700);">Day: -5°C to 2°C<br>Night: -15°C to -22°C</td>
                  </tr>
                </tbody>
              </table>
            </div>`;

if (!html.includes('Temperature by Elevation Zone on Kanchenjunga Circuit')) {
  html = html.replace(
    '<!-- Section 7.5: Kanchenjunga Base Camp Trek Map -->',
    weatherTableHtml + '\n\n          <!-- Section 7.5: Kanchenjunga Base Camp Trek Map -->'
  );
}

// ==========================================
// 3. UPDATE SECTION 7.5: TREK MAP
// ==========================================
console.log('3. Updating Section 7.5: Map heading...');
html = html.replace(
  'Kanchenjunga Base Camp Trek Map</h2>',
  'Kanchenjunga Circuit Trek Route Map (26 Days)</h2>'
);

// ==========================================
// 4. UPDATE SECTION 9: FAQS (AUTHENTIC KANCHENJUNGA)
// ==========================================
console.log('4. Updating Section 9: Authentic Kanchenjunga FAQs...');

const s9Start = '<!-- Section 9: FAQs -->';
const idx9 = html.indexOf(s9Start);
const idx9Close = html.indexOf('</section>', idx9) + '</section>'.length;

if (idx9 === -1 || idx9Close === -1) {
  console.error('ERROR: Could not locate Section 9 start or close!', { idx9, idx9Close });
  process.exit(1);
}

const section9Html = `<!-- Section 9: FAQs -->
          <section id="section-faqs" class="trek-detail-section">
            <h2 class="faq-section-accent-title">
              <span class="faq-accent-bar"></span>
              Frequently Asked Questions: Kanchenjunga Circuit Trek (26 Days)
            </h2>

            <div class="faq-layout-container">
              <!-- Left Sidebar Category Navigation -->
              <div class="faq-sidebar-card">
                <div class="faq-category-nav">
                  <button type="button" class="faq-category-btn active" data-category="general">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </span>
                    General Information
                  </button>
                  <button type="button" class="faq-category-btn" data-category="permits">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                      </svg>
                    </span>
                    Permits & Regulations
                  </button>
                  <button type="button" class="faq-category-btn" data-category="accommodation">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </span>
                    Accommodation & Food
                  </button>
                  <button type="button" class="faq-category-btn" data-category="health">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                    </span>
                    Health & Altitude Safety
                  </button>
                  <button type="button" class="faq-category-btn" data-category="payments">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                        <line x1="1" y1="10" x2="23" y2="10"></line>
                      </svg>
                    </span>
                    Logistics & Cash Needs
                  </button>
                  <button type="button" class="faq-category-btn" data-category="cultural">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                      </svg>
                    </span>
                    Culture & Environment
                  </button>
                </div>
              </div>

              <!-- Right FAQ Content Panel -->
              <div class="faq-main-panel">
                <!-- Header Bar -->
                <div class="faq-panel-header">
                  <h3 class="faq-active-category-title" id="faq-current-category-title">General Information</h3>
                  <button type="button" class="faq-expand-all-btn" id="faq-expand-all-btn">Expand All</button>
                </div>

                <!-- Category 1: General Information -->
                <div class="faq-category-content active" id="faq-cat-general">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>How long does the Kanchenjunga Circuit Trek take?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Our complete expedition spans 26 calendar days, starting and concluding in Kathmandu. It includes arrival and departure days, 2 days of preparation and permit verification in Kathmandu, travel to eastern Nepal, 21 days of trail trekking covering both northern and southern base camp valleys, and a post-trek buffer day in Kathmandu.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What is the highest elevation reached on this trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      The highest excursion point is Pangpema (Kanchenjunga North Base Camp) at approximately <span data-altitude-m="5143">5,143 metres (16,873 ft)</span>. Other high points include the high pass of Sele Le at <span data-altitude-m="4290">4,290 metres</span>, Lhonak at <span data-altitude-m="4770">4,770 metres</span>, and the Ramche viewpoint at <span data-altitude-m="4580">4,580 metres</span>.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>When is the best season to trek the Kanchenjunga Circuit?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      The prime seasons are Autumn (mid-September to late November) and Spring (March to late May). Autumn offers crystal-clear skies, dry trails, and spectacular mountain vistas. Spring brings warmer daytime temperatures, flourishing rhododendron forests, and receding snow lines.
                    </div>
                  </div>
                </div>

                <!-- Category 2: Permits & Regulations -->
                <div class="faq-category-content" id="faq-cat-permits" style="display: none;">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Can I trek the Kanchenjunga Circuit independently without a guide?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      No. By Government of Nepal immigration law, Kanchenjunga is a strictly restricted wilderness area bordering India (Sikkim) and Tibet. Independent solo trekking is illegal. All trekkers must travel in a registered group of at least 2 persons accompanied by a government-licensed mountain guide.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What permits are required and are they included in the package?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Two official permits are mandatory: the Kanchenjunga Restricted Area Permit (RAP, USD $20 per week per person issued by the Department of Immigration) and the Kanchenjunga Conservation Area Project (KCAP) entry permit. Both permits, as well as local municipality entry fees, are 100% included and arranged by Namaste Hiking Trek.
                    </div>
                  </div>
                </div>

                <!-- Category 3: Accommodation & Food -->
                <div class="faq-category-content" id="faq-cat-accommodation" style="display: none;">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What is the accommodation like on the circuit?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Accommodation is in authentic family-owned mountain teahouses and lodges. Rooms are clean, simple twin-share wooden bedrooms with foam mattresses and pillows. Because high-altitude lodges have unheated bedrooms, a -20°C rated down sleeping bag is essential for warmth.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What kind of food can I expect during the 22 walking days?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Teahouses serve freshly prepared, wholesome meals. The staple is traditional Dal Bhat (rice, lentil soup, curried vegetables, and greens), providing sustained carbohydrates and protein with free refills. Other meals include porridge, eggs, pancakes, Tibetan bread, vegetable noodles, momos, and hot soups.
                    </div>
                  </div>
                </div>

                <!-- Category 4: Health & Altitude Safety -->
                <div class="faq-category-content" id="faq-cat-health" style="display: none;">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>How do you handle acclimatization on this 26-day trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Our itinerary features two dedicated acclimatization stops: two nights at Ghunsa (<span data-altitude-m="3475">3,475 m</span>) on Days 8 & 9, and two nights at Khambachen (<span data-altitude-m="4050">4,050 m</span>) on Days 10 & 11. Your guide conducts daily morning and evening pulse oximeter blood oxygen checks and leads gentle "climb high, sleep low" walks.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What happens in case of a medical emergency or severe altitude illness?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Your licensed guide is certified in wilderness first aid and carries an altitude medical kit. In cases of acute mountain sickness (HAPE/HACE) or serious trauma, immediate descent to lower altitude is initiated, and our Kathmandu 24/7 operations desk coordinates an emergency helicopter evacuation directly with your travel insurance provider.
                    </div>
                  </div>
                </div>

                <!-- Category 5: Logistics & Cash Needs -->
                <div class="faq-category-content" id="faq-cat-payments" style="display: none;">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>How do we travel from Kathmandu to the start of the trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      The standard route utilizes a scheduled domestic flight from Kathmandu to Suketar Airport (Taplejung). When direct flights are not operating due to airline seasonal schedules or weather, we take a 45-minute flight to Bhadrapur followed by a scenic private 4WD jeep drive winding through the Ilam tea estates directly to Taplejung.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Are there ATMs on the trek? How much cash should I carry?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      There are no ATMs anywhere on the trail beyond Taplejung/Suketar. While your package includes all meals and accommodation on the trek, we recommend carrying approx. NPR 25,000 to 35,000 (approx. USD $200–$280) in cash for personal expenses such as hot showers, battery charging, snacks, and guide/porter tips.
                    </div>
                  </div>
                </div>

                <!-- Category 6: Culture & Environment -->
                <div class="faq-category-content" id="faq-cat-cultural" style="display: none;">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What cultures and ethnic communities live along the route?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      In the lower valleys (Mitlung, Chirwa, Yamphudin), you walk through Limbu and Rai villages with terraced farming and rich Kirat traditions. In the higher alpine valleys (Ghunsa, Phale, Khambachen), you experience Tibetan Buddhist Bhotia and Sherpa cultures, historic monasteries with colorful prayer flags, and yak-herding settlements.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What wildlife might I encounter in the Kanchenjunga Conservation Area?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      KCAP is one of Nepal's most pristine wildlife sanctuaries. Trekkers frequently spot blue sheep (bharal) grazing on alpine slopes, Himalayan monal (Nepal's national bird), musk deer, and blood pheasants. The sanctuary is also a vital habitat for elusive snow leopards and red pandas.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>`;

html = html.substring(0, idx9) + section9Html + html.substring(idx9Close);

// ==========================================
// 5. VALIDATE TAG BALANCE
// ==========================================
console.log('5. Validating final HTML tag balance across the entire document...');
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

fs.writeFileSync('trek/kanchenjunga-base-camp-trek/index.html', html, 'utf8');
console.log('SUCCESS: Phase 6 (Sections 6, 7, 7.5, and 9 FAQs) completed with 100% tag balance!');
