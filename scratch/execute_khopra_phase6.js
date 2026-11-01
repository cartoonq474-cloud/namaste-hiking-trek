const fs = require('fs');

console.log('Generating Phase 6 (Section 6, 7, 7.5, 8, 9 & Sticky Sidebar) for Khopra Ridge Trek...');
let html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

// ==========================================
// 1. UPDATE SECTION 6: ROUTE INFORMATION
// ==========================================
console.log('1. Updating Section 6 Route Information...');
const s6OldRoute = `<h3 style="font-size: 1.3rem; margin-bottom: 12px; color: var(--color-primary-navy);">Expedition Route Information</h3>
            <p style="color: var(--color-neutral-700); font-size: 0.95rem; line-height: 1.6;">
              The route commences with a flight into Lukla, following the Dudh Koshi river up to Namche Bazaar. The path then continues through Tengboche, Dingboche, Lobuche, and Gorak Shep, concluding at the Khumbu Glacier base camp.
            </p>`;

const s6NewRoute = `<h3 style="font-size: 1.3rem; margin-bottom: 12px; color: var(--color-primary-navy);">Expedition Route Information</h3>
            <p style="color: var(--color-neutral-700); font-size: 0.95rem; line-height: 1.6;">
              The 15-day Khopra Ridge Trek commences with a scenic highway drive from Kathmandu to Pokhara, followed by private road transport to Nayapul and the Gurung cultural village of Ghandruk (<span data-altitude-m="1940">1,940 m</span>). The trail then ascends through the mossy forests of Tadapani (<span data-altitude-m="2630">2,630 m</span>), the subalpine pastures of Bayeli Kharka (<span data-altitude-m="3460">3,460 m</span>), and the intermediate staging lodge of Upper Chistibung (<span data-altitude-m="2950">2,950 m</span>) before arriving at the spectacular panoramic vantage of Khopra Ridge (<span data-altitude-m="3660">3,660 m</span>). From Khopra, an exhilarating high-alpine day excursion reaches sacred Khayer Lake (<span data-altitude-m="4700">4,700 m</span>) directly beneath Annapurna South. The return loop traverses through the quiet farming village of Swanta (<span data-altitude-m="2260">2,260 m</span>), the bustling pass of Ghorepani (<span data-altitude-m="2880">2,880 m</span>), the celebrated sunrise viewpoint of Poon Hill (<span data-altitude-m="3210">3,210 m</span>), the eco-ridge of Mohare Hill (<span data-altitude-m="3300">3,300 m</span>), and the stone staircases of Tikhedhunga (<span data-altitude-m="1480">1,480 m</span>), concluding back in Pokhara and Kathmandu.
            </p>`;

html = html.replace(s6OldRoute, s6NewRoute);

// ==========================================
// 2. UPDATE SECTION 7: TEMPERATURE TABLE
// ==========================================
console.log('2. Updating Section 7 Weather & Temperature Table...');
const s7ChartEnd = '<div id="weather-chart-wrapper" data-trek-key="ebc"></div>\n            </div>';
const s7NewContent = `<div id="weather-chart-wrapper" data-trek-key="ebc"></div>
            </div>

            <!-- Authentic Temperature by Elevation Zone Table -->
            <div style="background: white; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); overflow-x: auto; margin-top: 25px; margin-bottom: 25px;">
              <div style="padding: 16px 20px; border-bottom: 1px solid var(--color-neutral-100); background: var(--color-neutral-50);">
                <h4 style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">
                  Expected Temperatures by Elevation Zone (°C / °F)
                </h4>
              </div>
              <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem;">
                <thead>
                  <tr style="border-bottom: 2px solid var(--color-neutral-100); background: #f8fafc;">
                    <th style="padding: 12px 14px; color: var(--color-primary-navy);">Trekking Zone</th>
                    <th style="padding: 12px 14px; color: var(--color-primary-navy);">Elevation</th>
                    <th style="padding: 12px 14px; color: var(--color-primary-navy);">Spring (Mar–May)</th>
                    <th style="padding: 12px 14px; color: var(--color-primary-navy);">Autumn (Sep–Nov)</th>
                    <th style="padding: 12px 14px; color: var(--color-primary-navy);">Winter (Dec–Feb)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--color-neutral-100);">
                    <td style="padding: 12px 14px; font-weight: 600; color: var(--color-primary-navy);">Lower Valleys (Pokhara, Nayapul, Ghandruk)</td>
                    <td style="padding: 12px 14px; color: #10b981; font-weight: 600;">800 m – 2,000 m</td>
                    <td style="padding: 12px 14px; color: var(--color-neutral-700);">Day: 20°C to 26°C<br>Night: 10°C to 15°C</td>
                    <td style="padding: 12px 14px; color: var(--color-neutral-700);">Day: 18°C to 24°C<br>Night: 8°C to 14°C</td>
                    <td style="padding: 12px 14px; color: var(--color-neutral-700);">Day: 14°C to 18°C<br>Night: 4°C to 8°C</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-100);">
                    <td style="padding: 12px 14px; font-weight: 600; color: var(--color-primary-navy);">Mid-Mountain Forests (Tadapani, Swanta, Ghorepani)</td>
                    <td style="padding: 12px 14px; color: #10b981; font-weight: 600;">2,200 m – 2,900 m</td>
                    <td style="padding: 12px 14px; color: var(--color-neutral-700);">Day: 12°C to 18°C<br>Night: 2°C to 8°C</td>
                    <td style="padding: 12px 14px; color: var(--color-neutral-700);">Day: 10°C to 16°C<br>Night: 0°C to 6°C</td>
                    <td style="padding: 12px 14px; color: var(--color-neutral-700);">Day: 6°C to 12°C<br>Night: -4°C to 2°C</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-100);">
                    <td style="padding: 12px 14px; font-weight: 600; color: var(--color-primary-navy);">High Alpine Ridges (Bayeli, Khopra Ridge, Mohare)</td>
                    <td style="padding: 12px 14px; color: #10b981; font-weight: 600;">3,300 m – 3,660 m</td>
                    <td style="padding: 12px 14px; color: var(--color-neutral-700);">Day: 6°C to 12°C<br>Night: -2°C to 4°C</td>
                    <td style="padding: 12px 14px; color: var(--color-neutral-700);">Day: 4°C to 10°C<br>Night: -4°C to 2°C</td>
                    <td style="padding: 12px 14px; color: var(--color-neutral-700);">Day: 0°C to 6°C<br>Night: -10°C to -4°C</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 14px; font-weight: 600; color: var(--color-primary-navy);">Glacial Basin Excursion (Khayer Lake)</td>
                    <td style="padding: 12px 14px; color: #10b981; font-weight: 600;">Approx. 4,700 m</td>
                    <td style="padding: 12px 14px; color: var(--color-neutral-700);">Day: 0°C to 6°C<br>Wind Chill: -6°C</td>
                    <td style="padding: 12px 14px; color: var(--color-neutral-700);">Day: -2°C to 4°C<br>Wind Chill: -8°C</td>
                    <td style="padding: 12px 14px; color: var(--color-neutral-700);">Sub-zero all day<br>Heavy snow & ice</td>
                  </tr>
                </tbody>
              </table>
            </div>`;

html = html.replace(s7ChartEnd, s7NewContent);

// ==========================================
// 3. UPDATE SECTION 7.5: MAP TITLE
// ==========================================
console.log('3. Updating Section 7.5 Map Title...');
html = html.replace(
  '<h2 class="details-main-title">Khopra Ridge Trek Map</h2>',
  '<h2 class="details-main-title">Khopra Ridge Trek Map (15 Days)</h2>'
);

// ==========================================
// 4. CLEAN UP SECTION 8: REVIEWS
// ==========================================
console.log('4. Cleaning up Section 8 Reviews...');
html = html.replace(/Everest Base Camp/g, 'Khopra Ridge');
html = html.replace(/EBC/g, 'Khopra Ridge');
html = html.replace(/Kala Patthar/g, 'Khayer Lake');
html = html.replace(/Lukla/g, 'Pokhara');

// ==========================================
// 5. UPDATE SECTION 9: AUTHENTIC KHOPRA FAQS
// ==========================================
console.log('5. Updating Section 9 FAQs with 18 authentic questions...');
const s9Start = html.indexOf('<!-- Section 9: FAQs -->');
const s9Close = html.indexOf('</section>', s9Start);

if (s9Start === -1 || s9Close === -1) {
  console.error('Could not find Section 9 boundaries!', { s9Start, s9Close });
  process.exit(1);
}

const section9Html = `<!-- Section 9: FAQs -->
          <section id="section-faqs" class="trek-detail-section">
            <h2 class="faq-section-accent-title">
              <span class="faq-accent-bar"></span>
              Frequently Asked Questions for Khopra Ridge Trek
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
                    Permits and Logistics
                  </button>
                  <button type="button" class="faq-category-btn" data-category="accommodation">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </span>
                    Accommodation and Food
                  </button>
                  <button type="button" class="faq-category-btn" data-category="health">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                    </span>
                    Health and Safety
                  </button>
                  <button type="button" class="faq-category-btn" data-category="payments">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                        <line x1="1" y1="10" x2="23" y2="10"></line>
                      </svg>
                    </span>
                    Payments & Extra Costs
                  </button>
                  <button type="button" class="faq-category-btn" data-category="cultural">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                      </svg>
                    </span>
                    Cultural Insights
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
                      <span>What is the Khopra Ridge Trek and where is it located?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      The Khopra Ridge Trek (also known as Khopra Danda Trek) is a 15-day trekking expedition in Nepal's Annapurna region. It connects traditional Gurung and Magar villages (Ghandruk, Swanta) with remote community-run lodges (Bayeli Kharka, Upper Chistibung, Khopra Ridge at 3,660m), an alpine day excursion to sacred Khayer Lake (4,700m), and iconic sunrise viewpoints at Poon Hill (3,210m) and Mohare Hill (3,300m).
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>How long does the trek take and how many hours do we hike per day?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Our complete package spans 15 days round trip from Kathmandu, including road transit, 11 dedicated walking stages, and buffer time. Daily hiking generally averages 4 to 6 hours on well-graded stone stairways and forest trails, while Day 8 (the Khayer Lake excursion) is a strenuous 7 to 9-hour mountain hike at high elevation.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>When is the best time of year to do the Khopra Ridge Trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      The best seasons are Autumn (late September to November) and Spring (March to May). Autumn offers crystal-clear skies, dry paths, and unobstructed views of Mount Dhaulagiri (8,167m) and Annapurna South. Spring brings warmer days and breathtaking blooms of rhododendron forests in scarlet, pink, and white.
                    </div>
                  </div>
                </div>

                <!-- Category 2: Permits and Logistics -->
                <div class="faq-category-content" id="faq-cat-permits">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What permits are required for the Khopra Ridge Trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      You need the Annapurna Conservation Area Permit (ACAP) and local registration/TIMS tracking. Both are arranged and paid for in advance by Namaste Hiking Trek as part of your comprehensive package.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Can I trek to Khopra Ridge independently without a guide?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      No. Under official Nepal Tourism Board regulations enacted in April 2023, all international trekkers in the Annapurna Conservation Area must be accompanied by a government-licensed mountain guide. Solo, unguided trekking is illegal. All our guides are fully certified and wilderness first-aid trained.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>How do we travel between Kathmandu, Pokhara, and the trailhead?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      We travel overland between Kathmandu and Pokhara by comfortable tourist coach or private vehicle along the Prithvi Highway (approx. 6–7 hours). From Pokhara, private vehicles transport our group to Nayapul and onwards toward the Ghandruk trailhead on Day 3, returning from Nayapul to Pokhara on Day 13.
                    </div>
                  </div>
                </div>

                <!-- Category 3: Accommodation and Food -->
                <div class="faq-category-content" id="faq-cat-accommodation">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What are the accommodations like along the Khopra route?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      In Kathmandu and Pokhara, you stay in comfortable 3-star tourist hotels with private en-suite bathrooms and daily breakfast. On the trail, you stay in cozy village teahouses (Ghandruk, Swanta, Ghorepani) and authentic community-managed lodges (Bayeli Kharka, Upper Chistibung, Khopra Ridge). Rooms are twin-share with clean bedding and blankets. Dining rooms are heated in the evenings by central stoves.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Can I stay overnight at Khayer Lake?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      No. There are no lodges, teahouses, or permanent shelters at Khayer Lake (4,700m). It is visited strictly as an active out-and-back day excursion from Khopra Ridge (3,660m), returning to sleep at the community lodge.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What kind of food and drinking water is available on the trail?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Our package includes full board meals on trek (Breakfast, Lunch, Dinner). You can enjoy freshly prepared local dishes such as Dal Bhat (steamed rice, lentil soup, curried vegetables), noodle soups, momos, eggs, pancakes, and porridge. We provide water purification tablets or assist in purchasing boiled water at lodges.
                    </div>
                  </div>
                </div>

                <!-- Category 4: Health and Safety -->
                <div class="faq-category-content" id="faq-cat-health">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Is Altitude Mountain Sickness (AMS) a concern on this trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      While sleeping elevations are moderate (highest overnight is Khopra Ridge at 3,660m), the excursion to Khayer Lake reaches 4,700m. Our itinerary includes staged sleeping stops at Tadapani and Chistibung to facilitate acclimatization. Our guides conduct twice-daily pulse oximeter checks and carry first aid kits.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Is the Khayer Lake excursion mandatory?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      No. The day hike to Khayer Lake (4,700m) is entirely optional. Trekkers who prefer not to undertake the 7–9 hour steep alpine climb can spend a peaceful rest day at Khopra Ridge (3,660m) taking photographs, reading, and admiring unobstructed vistas of Mount Dhaulagiri.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What happens in case of a medical emergency?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      For minor illnesses, our guide administers first aid. In the event of serious altitude sickness or trauma, our 24/7 Kathmandu operations desk coordinates with your travel insurance for an immediate helicopter evacuation from Khopra Ridge or Ghorepani to a hospital in Pokhara or Kathmandu.
                    </div>
                  </div>
                </div>

                <!-- Category 5: Payments & Extra Costs -->
                <div class="faq-category-content" id="faq-cat-payments">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>How much extra cash should I bring on the trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      We recommend budgeting NPR 2,000 to 3,000 ($15–$25 USD) per day to cover personal expenses such as hot bucket showers (NPR 300–500), battery charging (NPR 200–400), Wi-Fi cards, snacks, soft drinks, and alcoholic beverages.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Are there ATMs available along the trail?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      No. The last reliable ATMs are in Pokhara and Nayapul. Mountain lodges accept cash only in Nepalese Rupees (NPR). Credit cards are not accepted along the trail.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What is the tipping standard for the guide and porters?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Tipping is customary in Nepal to express gratitude for good service. We suggest budgeting approximately 10% to 15% of the total tour cost, typically around $10–$15 USD per day for your guide and $8–$10 USD per day for your porter from the group.
                    </div>
                  </div>
                </div>

                <!-- Category 6: Cultural Insights -->
                <div class="faq-category-content" id="faq-cat-cultural">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What cultural heritage will I encounter on the trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      You will explore the traditional Gurung cultural capital of Ghandruk with its slate-roofed houses, local museum, and Buddhist shrines, as well as Magar farming settlements in Swanta and Ulleri. Both ethnic groups have rich histories as brave Gurkha warriors.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What is the religious importance of Khayer Lake?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Khayer Lake is consecrated to the Hindu goddess Khayer Barahi. During the annual Janai Purnima festival in August, hundreds of devotees hike up to bathe in the holy waters and offer prayers for fertility and family well-being.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>How does this trek support local communities?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      The Khopra Ridge and Mohare Hill routes are community lodge initiatives. Accommodation fees go directly into community funds that support local schools, healthcare, trail maintenance, and village clean water systems.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>`;

html = html.substring(0, s9Start) + section9Html + html.substring(s9Close + '</section>'.length);

// ==========================================
// 6. UPDATE STICKY SIDEBAR BOOKING CARD
// ==========================================
console.log('6. Updating Sticky Sidebar Booking Card...');
html = html.replace(
  '<a href="#section-itinerary" style="font-size: 0.92rem; color: #475569; font-weight: 600; text-decoration: underline; margin-left: 4px;">14 days trip</a>',
  '<a href="#section-itinerary" style="font-size: 0.92rem; color: #475569; font-weight: 600; text-decoration: underline; margin-left: 4px;">15 days expedition</a>'
);

html = html.replace(
  'data-inquiry-type="EBC Standard Trek"',
  'data-inquiry-type="Khopra Ridge Trek (15 Days)"'
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
console.log('SUCCESS: Phase 6 completed with 100% tag balance!');
