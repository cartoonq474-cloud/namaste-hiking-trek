const fs = require('fs');

let html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');

const detStart = html.indexOf('<section id="section-details"');
const altProfStart = html.indexOf('<section id="section-altitude-profile"');

if (detStart === -1 || altProfStart === -1) {
  console.error('Could not find section-details or section-altitude-profile');
  process.exit(1);
}

const newDetailsHtml = `<section id="section-details" class="trek-detail-section">
            <div class="details-section-container">
              <!-- Heading -->
              <div class="details-title-wrapper">
                <h2 class="details-main-title">Read Before You Book: Mera Peak Climbing Expedition</h2>
                <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <!-- Subtitle Paragraphs -->
              <p class="details-subtitle-text">To help you prepare with absolute confidence for climbing Nepal's premier 6,000-metre trekking peak, we have compiled comprehensive, transparent guidance covering mountaineering difficulty, high camp life, glacier training, gear rental, and safety protocols.</p>
              <p class="details-subtitle-text" style="margin-bottom: 24px;">Have questions about technical preparation, high-altitude gear, or group fitness? Email our alpine specialists or message us directly on <a href="https://wa.me/9779800000000" target="_blank" style="color: #008060; font-weight: 600; text-decoration: underline;">WhatsApp</a> — our certified climbing directors will reply within 24 hours.</p>

              <!-- Interactive Progress Tracker Badge -->
              <div class="details-progress-wrapper">
                <div class="details-progress-badge">
                  <div class="details-progress-ring-box">
                    <svg width="44" height="44">
                      <circle class="details-progress-ring-bg" r="18" cx="22" cy="22"></circle>
                      <circle class="details-progress-ring-bar" r="18" cx="22" cy="22"></circle>
                    </svg>
                  </div>
                  <div class="details-progress-text-box">
                    <span class="details-progress-count">0/21 read</span>
                    <span class="details-progress-status">Nice start — keep going</span>
                  </div>
                </div>
              </div>

              <!-- 21 Accordion Cards Grid -->
              <div class="detail-accordion-list">
                <!-- 1. Accommodation -->
                <div class="detail-accordion-card" data-detail-id="accommodation">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                      </div>
                      <span class="detail-title-text">Accommodation: Teahouses vs Mera High Camp</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>During the approach trek through Chutanga, Thuli Kharka, Kothe, Thangnak, and Khare, accommodation consists of local mountain teahouses and lodges. Rooms are twin-share with twin foam mattresses, pillows, and blankets (bringing your own -20°C sleeping bag is essential for cold nights).</p>
                    <p>At <strong>Mera High Camp (<span data-altitude-m="5780">5,780 m</span>)</strong>, conditions are authentic high-altitude mountaineering: climbers sleep in heavy-duty four-season expedition tents (North Face VE 25 / Mountain Hardwear) pitched on a rocky shelf overlooking the icefall. High-density closed-cell thermal foam sleeping pads are provided. Dining is conducted in a dedicated group mess tent with hot food prepared by our high-camp kitchen staff.</p>
                  </div>
                </div>

                <!-- 2. Food -->
                <div class="detail-accordion-card" data-detail-id="food">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path></svg>
                      </div>
                      <span class="detail-title-text">Expedition Meals & High-Altitude Nutrition</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>Proper nutrition is critical for high-altitude recovery and energy. All meals on trek and climb are included: hearty breakfasts (porridge, eggs, toast, pancakes, muesli), energizing lunches (fried rice, noodles, potato dishes, momos), and warm dinners (traditional Nepali Dal Bhat, pasta, soup, seasonal vegetables, and canned meats).</p>
                    <p>At Mera High Camp, our dedicated cook prepares hot garlic soup (proven to assist acclimatization), high-carbohydrate pasta or rice dishes, and warm electrolyte tea. Climbers also receive a summit-day snack pack including energy bars, chocolates, nuts, and dried fruits for the midnight ascent.</p>
                  </div>
                </div>

                <!-- 3. Water -->
                <div class="detail-accordion-card" data-detail-id="water">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
                      </div>
                      <span class="detail-title-text">Drinking Water & Hydration Strategy</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>Dehydration accelerates Acute Mountain Sickness (AMS) dramatically. Climbers must drink between 4 and 5 litres of fluids every day. We recommend carrying two 1-litre wide-mouth Nalgene bottles fitted with insulated thermal jackets, plus a 1-litre vacuum thermos flask.</p>
                    <p>Boiled water is provided in lodges and at High Camp. We strongly advise using purification tablets (chlorine dioxide) or UV purifiers (SteriPEN) on tap water rather than buying disposable single-use plastic bottles, which cause severe environmental waste in the delicate Hinku wilderness.</p>
                  </div>
                </div>

                <!-- 4. Difficulty -->
                <div class="detail-accordion-card" data-detail-id="difficulty">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      </div>
                      <span class="detail-title-text">Expedition Difficulty & Technical Mountaineering Grade</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>Mera Peak is classified as an <strong>Alpine Grade PD (Peu Difficile / Slightly Difficult)</strong> peak. In mountaineering terms, this means the route consists primarily of non-technical snow and glacier travel on moderate 25° to 35° slopes, without vertical ice walls or rock climbing pitches.</p>
                    <p>However, the challenge stems from the extreme elevation (<span data-altitude-m="6476">6,476 m</span>), thin air (less than 45% effective oxygen compared to sea level), sub-zero temperatures (-15°C to -25°C), and the physical stamina required for an 8 to 12-hour summit day. Strong cardiovascular fitness, leg strength, and mental endurance are far more important than prior rock-climbing experience.</p>
                  </div>
                </div>

                <!-- 5. Best Time -->
                <div class="detail-accordion-card" data-detail-id="best-time">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line></svg>
                      </div>
                      <span class="detail-title-text">Best Climbing Seasons: Spring vs Autumn</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>The two premier seasons for climbing Mera Peak are:</p>
                    <ul style="margin: 8px 0 12px 20px; line-height: 1.6;">
                      <li><strong>Spring (March to May):</strong> Warmer temperatures, blooming rhododendrons in the lower Hinku forest, stable snow conditions on the glacier, and longer daylight hours. Daytime temperatures at Base Camp range from 5°C to 12°C.</li>
                      <li><strong>Autumn (September to November):</strong> The most popular climbing season in Nepal. Offers crystalline post-monsoon skies, extraordinary long-distance mountain visibility, and predictable weather patterns, though nighttime temperatures are colder (-20°C at High Camp).</li>
                    </ul>
                    <p><strong>Monsoon (June–August)</strong> is not recommended due to torrential rains, leeches, cloud cover, and avalanche risk. <strong>Winter (December–February)</strong> brings extreme arctic conditions (-30°C summit winds) suitable only for specialized alpine teams.</p>
                  </div>
                </div>

                <!-- 6. Permits & DoT Royalties -->
                <div class="detail-accordion-card" data-detail-id="permits">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      </div>
                      <span class="detail-title-text">Climbing Permits & Department of Tourism Royalties</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>Mera Peak is an officially gazetted trekking peak under the authority of the Nepal Mountaineering Association (NMA) and the Nepal Department of Tourism (DoT). <strong>All permit fees and royalties are 100% included in our package.</strong></p>
                    <p><strong>Official DoT Peak Royalty Schedule (Effective September 1, 2025):</strong></p>
                    <ul style="margin: 8px 0 12px 20px; line-height: 1.6;">
                      <li><strong>Spring (March–May):</strong> USD $350 per foreign climber</li>
                      <li><strong>Autumn (September–November):</strong> USD $175 per foreign climber</li>
                      <li><strong>Winter & Summer (Dec–Feb / Jun–Aug):</strong> USD $175 per foreign climber</li>
                    </ul>
                    <p>Additionally, our office secures the <strong>Makalu-Barun National Park Entry Permit</strong> ($30 USD), <strong>Sagarmatha National Park Permit</strong> ($30 USD), the <strong>Pasang Lhamu Rural Municipality Card</strong> ($20 USD), and places the required refundable expedition garbage deposit in Kathmandu.</p>
                  </div>
                </div>

                <!-- 7. Acclimatization -->
                <div class="detail-accordion-card" data-detail-id="acclimatization">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                      </div>
                      <span class="detail-title-text">Acclimatization Schedule & Altitude Safety Protocol</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>Our 18-day itinerary incorporates two mandatory acclimatization and rest stops: <strong>Day 7 at Thangnak (<span data-altitude-m="4350">4,350 m</span>)</strong> and <strong>Day 9 at Khare (<span data-altitude-m="5045">5,045 m</span>)</strong>. These staged rest days follow the proven alpine principle of "climb high, sleep low", allowing your body to produce necessary red blood cells and adapt to reduced atmospheric pressure.</p>
                    <p>Your lead guide carries a medical pulse oximeter to check your blood oxygen saturation ($SpO_2$) and resting heart rate twice daily (morning and evening). If altitude symptoms (persistent headache, nausea, loss of appetite) appear, our guides follow strict protocols including rest, hydration, Diamox (acetazolamide), and immediate descent if necessary.</p>
                  </div>
                </div>

                <!-- 8. Training & Skills -->
                <div class="detail-accordion-card" data-detail-id="training-skills">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                      </div>
                      <span class="detail-title-text">Glacier Training School at Khare Base Camp</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>No prior mountaineering experience is required before joining this expedition because <strong>Day 9 is dedicated to hands-on glacier training at Khare (<span data-altitude-m="5045">5,045 m</span>)</strong>. Your climbing Sherpas take the team to the lower ice slopes of the Mera glacier to review and practice all technical skills.</p>
                    <p>You will learn: how to properly fit and walk in double mountaineering boots and crampons; ice axe positioning and walking rhythm; ascending fixed ropes using a mechanical ascender (Jumar) with safety tether; descending fixed lines using an ATC / Figure-8 descender; and roped-team travel procedures for navigating glaciated snow ramps.</p>
                  </div>
                </div>

                <!-- 9. Summit Day -->
                <div class="detail-accordion-card" data-detail-id="summit-day">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      </div>
                      <span class="detail-title-text">Summit Day Timeline: 2:00 AM Alpine Start</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>Summit push begins with a wake-up call at 1:30 AM at Mera High Camp (<span data-altitude-m="5780">5,780 m</span>). After a hot breakfast and gear checks, teams rope up and begin climbing by headlamp around 2:00 AM to take advantage of firm, frozen morning snow crust and low wind speeds.</p>
                    <p>The climb steadily ascends the open snow slopes of Mera glacier. By dawn (around 5:30 AM), the first golden rays strike Mount Everest, Lhotse, and Makalu in an awe-inspiring spectacle. The final 40-metre summit dome requires fixed-rope ascending to reach the prayer flags atop <strong>Mera Peak (<span data-altitude-m="6476">6,476 m</span>)</strong> around 7:30 to 9:00 AM. After celebrating and capturing photos, teams descend carefully back to High Camp for hot soup, then continue to Khare (<span data-altitude-m="5045">5,045 m</span>) for well-deserved rest.</p>
                  </div>
                </div>

                <!-- 10. High Camp -->
                <div class="detail-accordion-card" data-detail-id="high-camp">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7l9-4 9 4v14H3V7z"></path></svg>
                      </div>
                      <span class="detail-title-text">Mera High Camp Experience (<span data-altitude-m="5780">5,780 m</span>)</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>Mera High Camp is one of the most dramatically perched high camps in the Himalayas, set on a rocky shelf at <span data-altitude-m="5780">5,780 m (18,963 ft)</span> above the glacier. The vantage point offers a front-row panoramic view of five 8,000m giants bathed in orange alpine glow at sunset.</p>
                    <p>Living at 5,780m is physically demanding: atmospheric pressure is low, temperatures drop to -15°C to -25°C at night, and simple tasks take double effort. Our team ensures maximum comfort with sturdy four-season expedition tents, thick thermal ground mats, warm tea, and hot, easily digestible dinners before early bedtime.</p>
                  </div>
                </div>

                <!-- 11. Weather Conditions -->
                <div class="detail-accordion-card" data-detail-id="weather-conditions">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
                      </div>
                      <span class="detail-title-text">Mountain Weather & Wind Management</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>High Himalayan weather can shift rapidly. While mornings in spring and autumn are consistently clear and crisp, afternoon thermal convective clouds often bring mist or localized light snowfall above 4,500m. On the upper slopes of Mera Peak, wind chill is the primary factor affecting ambient temperature.</p>
                    <p>Our expedition leaders monitor real-time satellite weather updates via our base in Kathmandu. If high winds (exceeding 40 km/h) or low visibility threaten summit day, the expedition leader will activate <strong>Day 12 (Field Contingency Day)</strong>, delaying the summit push until optimal conditions align.</p>
                  </div>
                </div>

                <!-- 12. Flights -->
                <div class="detail-accordion-card" data-detail-id="flights">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
                      </div>
                      <span class="detail-title-text">Lukla Flight Operations: Kathmandu vs Ramechhap</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>The gateway to the Mera Peak region is Tenzing-Hillary Airport in Lukla (<span data-altitude-m="2850">2,850 m</span>). During peak trekking seasons (April–May and October–November), Nepal's Civil Aviation Authority mandates that Lukla flights operate out of Manthali Airport in Ramechhap to avoid air traffic congestion in Kathmandu.</p>
                    <p>When operating via Ramechhap, we provide comfortable private tourist vehicle transport between Kathmandu and Manthali (a 4-hour scenic drive). The domestic baggage allowance is strictly 15 kg per climber (10 kg duffel + 5 kg daypack). Excess weight costs approximately $2–$3 USD per kg subject to aircraft weight limits.</p>
                  </div>
                </div>

                <!-- 13. Insurance -->
                <div class="detail-accordion-card" data-detail-id="insurance">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                      </div>
                      <span class="detail-title-text">Mandatory Mountaineering & Rescue Insurance</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>Standard travel insurance is NOT sufficient for climbing Mera Peak. Every climber must possess a dedicated travel insurance policy that explicitly covers: (1) high-altitude mountaineering with ropes and crampons up to <span data-altitude-m="6500">6,500 m</span>; (2) emergency helicopter search, rescue, and evacuation; and (3) high-altitude medical treatment.</p>
                    <p>Reputable insurers offering 6,500m mountaineering cover include Global Rescue, Ripcord Rescue Travel Insurance, World Nomads (Explorer plan with mountaineering rider), and the British Mountaineering Council (BMC). Please provide your policy copy before departing Kathmandu.</p>
                  </div>
                </div>

                <!-- 14. Emergency Safety -->
                <div class="detail-accordion-card" data-detail-id="emergency-safety">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                      </div>
                      <span class="detail-title-text">Emergency Medical Equipment & Helicopter Evacuation</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>Safety is the foundational bedrock of Namaste Hiking Trek. Our expedition kit includes an emergency supplemental oxygen cylinder with mask and regulator at High Camp, a Portable Altitude Chamber (PAC bag) protocol, a wilderness first aid kit stocked with prescription altitude medications, and digital pulse oximeters.</p>
                    <p>In the unlikely event of severe altitude sickness (HAPE or HACE) or critical injury, our guides carry satellite communication devices to coordinate immediate emergency helicopter rescue directly from Khare or lower Hinku drop zones to a specialized hospital in Kathmandu.</p>
                  </div>
                </div>

                <!-- 15. Gear Rental -->
                <div class="detail-accordion-card" data-detail-id="gear-rental">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                      </div>
                      <span class="detail-title-text">Technical Gear Rental: Kathmandu & Khare</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>You do not need to invest thousands of dollars purchasing high-altitude mountaineering equipment if this is your first 6,000m climb. Premium mountaineering gear can be rented easily in Kathmandu (Thamel) or directly at Khare Base Camp.</p>
                    <p>Rental rates are very affordable: double climbing boots ($3–$5/day), crampons ($1–$2/day), ice axe ($1–$2/day), harness with carabiners & jumar ($2–$3/day), climbing helmet ($1–$2/day), down jacket (-20°C rated, $2–$3/day), and 4-season sleeping bag ($2/day). Our guides will accompany you to trusted gear shops in Kathmandu on Day 2 to inspect equipment fit and quality.</p>
                  </div>
                </div>

                <!-- 16. Packing Tips -->
                <div class="detail-accordion-card" data-detail-id="packing-tips">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                      </div>
                      <span class="detail-title-text">Essential Layering & Cold-Weather Gear Tips</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>Managing body temperature through proper layering is key to surviving and enjoying high-altitude cold. Follow the four-layer system: (1) Next-to-skin moisture-wicking merino wool thermal base layer; (2) Insulating mid-layer fleece jacket and softshell pants; (3) Windproof and waterproof Gore-Tex hardshell jacket and pants; and (4) Heavy expedition box-wall down jacket (800+ fill power) for High Camp and summit day.</p>
                    <p>Extremities freeze first: bring heavy summit down mittens, windproof mountaineering gloves, and thin glove liners. Category 4 UV glacier glasses are mandatory to prevent debilitating snow blindness from intense solar radiation reflected off snowfields.</p>
                  </div>
                </div>

                <!-- 17. Cultural Etiquette -->
                <div class="detail-accordion-card" data-detail-id="cultural-etiquette">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                      </div>
                      <span class="detail-title-text">Sherpa Culture, Mani Walls & Environmental Ethics</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>The Hinku Valley and Khumbu regions are home to the Sherpa and Rai people, deeply rooted in Tibetan Buddhism. Always pass Buddhist mani stone walls, prayer flag poles, and chortens on the left side (clockwise direction). Ask for permission before taking photographs of local residents, herders, or monks.</p>
                    <p>We practice strict <strong>Leave No Trace</strong> environmental mountaineering. All solid waste at High Camp and along the trail is packed out. Do not leave snack wrappers, batteries, or trash on the mountain. Clean water is sacred in the high Himalayas.</p>
                  </div>
                </div>

                <!-- 18. Connectivity -->
                <div class="detail-accordion-card" data-detail-id="connectivity">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
                      </div>
                      <span class="detail-title-text">Mobile Coverage, Wi-Fi & Electricity on Trail</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>Mobile cellular reception (Ncell and Nepal Telecom SIM cards) is available in Lukla, Chutanga, and Kothe, but becomes intermittent at Thangnak. Khare has limited cellular service and occasional satellite Wi-Fi scratch cards sold by teahouses ($5–$10 USD for 24 hours).</p>
                    <p>Above Khare, at Mera High Camp and on the summit, there is zero cellular or internet connectivity. Our climbing leaders carry satellite phones for emergency communications. Electricity is solar-powered in lodges: device charging costs $3–$6 USD per power bank. Bring a 20,000 mAh cold-resistant power bank.</p>
                  </div>
                </div>

                <!-- 19. Money Budget -->
                <div class="detail-accordion-card" data-detail-id="money-budget">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                      </div>
                      <span class="detail-title-text">Cash Currency & Personal Budgeting</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>There are NO ATMs or credit card facilities in the Hinku Valley or at Khare (the last functioning ATM is in Lukla, but it frequently runs out of cash or loses network). All personal trail expenses must be paid in physical <strong>Nepali Rupees (NPR)</strong>.</p>
                    <p>We recommend withdrawing between <strong>NPR 35,000 to 50,000 (approx. USD $250–$380)</strong> in Kathmandu prior to departure. This covers hot showers ($3–$5), battery charging ($3–$6), Wi-Fi vouchers, snacks, boiled drinking water, and staff tips.</p>
                  </div>
                </div>

                <!-- 20. Porter Welfare -->
                <div class="detail-accordion-card" data-detail-id="porter-welfare">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                      </div>
                      <span class="detail-title-text">Porter Welfare & Fair Treatment Standards</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>Porters are the unsung heroes of Himalayan mountaineering. Namaste Hiking Trek strictly enforces ethical porter welfare guidelines in full compliance with the <strong>International Porter Protection Group (IPPG)</strong>.</p>
                    <p>Our porters carry a maximum load limit of 20 to 25 kg (shared between 2 climbers). Every porter receives fair industry-leading wages, proper insulated clothing, sturdy boots, sunglasses, warm sleeping gear, meals, and full medical and emergency evacuation insurance. We treat our mountain crew like family.</p>
                  </div>
                </div>

                <!-- 21. Post Climb -->
                <div class="detail-accordion-card" data-detail-id="post-climb">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      </div>
                      <span class="detail-title-text">Summit Certificates & Kathmandu Celebration</span>
                    </div>
                    <div class="detail-arrow-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <p>After your safe descent to Lukla and return flight to Kathmandu, Namaste Hiking Trek coordinates your official summit verification. Climbers who reach the top of Mera Peak receive an official <strong>Nepal Mountaineering Association (NMA) Summit Certificate</strong> recognizing their high-altitude mountaineering accomplishment.</p>
                    <p>On the evening of Day 17, our company hosts a celebratory farewell dinner in Kathmandu featuring authentic Nepali delicacies, cultural dance performances, and a formal presentation of your climbing certificate, marking an unforgettable conclusion to your Himalayan journey.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>\n\n          <!-- Section 7: Elevation Profile Visualizer -->\n          `;

// Replace section-details
html = html.slice(0, detStart) + newDetailsHtml + html.slice(altProfStart);

fs.writeFileSync('trek/mera-peak-climbing/index.html', html, 'utf8');
console.log('Successfully updated Section 6 (Trip Details / 21 Accordions)!');
