const fs = require('fs');

let html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sFaqMarker = '<!-- Section 9: FAQs -->';
const sFaqStartIdx = html.indexOf(sFaqMarker);

if (sFaqStartIdx === -1) {
  console.error('sFaqMarker not found!');
  process.exit(1);
}

const sFaqEndIdx = html.indexOf('</section>', sFaqStartIdx) + '</section>'.length;

const faqContent = `<!-- Section 9: FAQs -->
          <section id="section-faqs" class="trek-detail-section">
            <h2 class="faq-section-accent-title">
              <span class="faq-accent-bar"></span>
              Frequently Asked Questions for Mera Peak Climbing Trek
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
                    General & Route
                  </button>
                  <button type="button" class="faq-category-btn" data-category="permits">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </span>
                    Permits & Gear
                  </button>
                  <button type="button" class="faq-category-btn" data-category="accommodation">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </span>
                    Lodging & Food
                  </button>
                  <button type="button" class="faq-category-btn" data-category="health">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </span>
                    Health & Safety
                  </button>
                  <button type="button" class="faq-category-btn" data-category="payments">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <line x1="6" y1="12" x2="18" y2="12"></line>
                      </svg>
                    </span>
                    Pricing & Booking
                  </button>
                  <button type="button" class="faq-category-btn" data-category="cultural">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </span>
                    Culture & Porters
                  </button>
                </div>
              </div>

              <!-- Right FAQ Content Panel -->
              <div class="faq-main-panel">
                <div class="faq-panel-header">
                  <h3 class="faq-active-category-title" id="faq-current-cat-name">General & Route Information</h3>
                  <button type="button" class="faq-expand-all-btn" id="faq-expand-toggle">Expand All</button>
                </div>

                <!-- CATEGORY 1: GENERAL -->
                <div class="faq-category-content active" id="faq-cat-general">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">What is the exact elevation of Mera Peak and which summit is climbed?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>Mera Peak has three distinct summits: Mera Central (<span data-altitude-m="6476">6,476 m / 21,247 ft</span>), Mera North (<span data-altitude-m="6461">6,461 m</span>), and Mera South (<span data-altitude-m="6065">6,065 m</span>). Our expedition targets <strong>Mera Peak Central</strong>, which is the highest officially designated trekking peak in Nepal and provides the legendary 360-degree panoramic vantage point overlooking five 8,000-meter giants.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">How does Mera Peak compare in difficulty to Island Peak and Lobuche East?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>Mera Peak (<span data-altitude-m="6476">6,476 m</span>) is significantly higher than Island Peak (<span data-altitude-m="6189">6,189 m</span>) and Lobuche East (<span data-altitude-m="6119">6,119 m</span>), but technically less steep. While Island Peak features an exposed knife-edge ridge and steep headwall, Mera Peak is predominantly a non-technical glacier climb (Alpine Grade PD) with only the final 40-meter summit dome requiring fixed lines. It demands greater cardiovascular endurance and cold tolerance due to its higher altitude.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">Which 8,000-meter peaks can be seen from the summit?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>From the central summit dome, you enjoy an unobstructed 360-degree view of five of the world's six highest mountains: Mount Everest (<span data-altitude-m="8848">8,848 m</span>), Kanchenjunga (<span data-altitude-m="8586">8,586 m</span>), Lhotse (<span data-altitude-m="8516">8,516 m</span>), Makalu (<span data-altitude-m="8481">8,481 m</span>), and Cho Oyu (<span data-altitude-m="8188">8,188 m</span>), plus dramatic views of Chamlang, Baruntse, and Ama Dablam.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">Why does your itinerary approach via Paiya and Pangkongma instead of the direct Zatrwa La route?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>Crossing the 4,610-meter Zatrwa La Pass on Day 2 directly from Lukla is notorious for causing severe Acute Mountain Sickness (AMS) and trek abandonment. Our southern approach through Paiya (<span data-altitude-m="2730">2,730 m</span>) and Pangkongma (<span data-altitude-m="2846">2,846 m</span>) provides 5 full days of gradual physiological adaptation below 3,600m, yielding an industry-leading summit success rate over 92%.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">What happens on the built-in Day 15 weather contingency day?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>If high summit winds or snow flurries delay our Day 14 push, Day 15 is used immediately for our second summit window. If the summit was already achieved on Day 14, Day 15 serves as a leisurely rest day in Khare or allows an extra slow, enjoyable descent down the Hinku Valley.</p>
                    </div>
                  </div>
                </div>

                <!-- CATEGORY 2: PERMITS & GEAR -->
                <div class="faq-category-content" id="faq-cat-permits">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">What permits are legally required to climb Mera Peak?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>Three official permits are mandatory: (1) Nepal Mountaineering Association (NMA) Mera Peak climbing permit, (2) Makalu-Barun National Park entry permit, and (3) Khumbu Pasang Lhamu Rural Municipality entry fee. All fees, documentation, and the NMA environmental garbage deposit are fully included in our package.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">Do I need double mountaineering boots, or are standard trekking boots enough?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>Standard trekking boots are suitable up to Khare Base Camp (<span data-altitude-m="5045">5,045 m</span>). Above Khare, insulated 6000m double mountaineering boots (plastic or hybrid double boots like La Sportiva G2 SM or Scarpa Phantom 6000) are non-negotiable to prevent severe frostbite during the -25°C summit morning.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">Can I rent all technical mountaineering gear in Nepal?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>Yes. Climbing boots, crampons, ice axes, harnesses, helmets, and jumar ascenders can be rented either in Kathmandu during Day 2 or directly at Khare Base Camp. Renting in Khare is popular because it eliminates carrying heavy boots over the lower forest trail.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">What type of crampons and ice axe do I need?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>You need 12-point steel crampons with anti-balling plates (semi-automatic or automatic step-in to match your double boots) and a classic straight-shaft walking ice axe (60 cm to 70 cm). Technical ice climbing tools are not required.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">What sleeping bag rating is necessary for High Camp?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>A four-season down sleeping bag with a comfort rating of -20°C to -25°C (-4°F to -13°F) is essential for Mera High Camp (<span data-altitude-m="5780">5,780 m</span>). High-quality down bags can be rented in Kathmandu for ~$2 USD per day.</p>
                    </div>
                  </div>
                </div>

                <!-- CATEGORY 3: ACCOMMODATION & FOOD -->
                <div class="faq-category-content" id="faq-cat-accommodation">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">What is the accommodation like in the Hinku Valley teahouses?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>Teahouses are clean, family-run mountain lodges offering twin-share bedrooms with foam mattresses, pillows, and blankets. Common dining areas feature a central wood/yak-dung stove. Bathrooms are shared, typically Western-style or squat toilets.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">How do we sleep at Mera High Camp (5,780 m)?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>We sleep in premium 4-season geodesic expedition tents (Mountain Hardwear / North Face) erected by our Sherpa staff. Inside, thick insulating foam pads are laid out beneath your sub-zero sleeping bag. Hot meals and tea are served directly to your tent.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">What kind of food is served on the trek and at High Camp?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>Lodge dining rooms serve freshly prepared meals including traditional Dal Bhat, fried rice, noodle chowmein, momos, porridge, eggs, potato dishes, and Sherpa garlic stew. At High Camp, our expedition cooks prepare hot, high-energy pasta and vegetable stews.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">Are hot showers and charging facilities available?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>Hot gas or bucket showers are available up to Khare (costing approx. $4–$6 USD). Solar/hydro electricity is available in dining rooms to charge phones and cameras for a modest fee ($2–$4 USD). High Camp has no showers or electrical outlets.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">How is drinking water handled above 5,000 meters?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>In lodges, boiled water is purchased and treated with purification tablets. At High Camp, our Sherpas melt snow and boil water thoroughly for cooking, hot drinks, and filling insulated thermoses for the summit climb.</p>
                    </div>
                  </div>
                </div>

                <!-- CATEGORY 4: HEALTH & SAFETY -->
                <div class="faq-category-content" id="faq-cat-health">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">What is your climbing guide-to-client ratio on summit day?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>We maintain a strict <strong>1:2 ratio</strong> (one certified Climbing Sherpa for every two climbers) on summit day, with 1:1 available upon request. This ensures individual roping, personal pace monitoring, and immediate assistance at all times.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">How do you monitor climber acclimatization and health?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>Our lead guide conducts twice-daily health checks using pulse oximeters to record blood oxygen saturation (SpO2) and heart rate. We also evaluate the Lake Louise Score to catch early symptoms of altitude illness.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">Should I take Diamox (Acetazolamide)?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>Many climbers choose to take Diamox (125 mg to 250 mg twice daily) starting around Kothe (<span data-altitude-m="3600">3,600 m</span>) to stimulate breathing and speed acclimatization. Consult your personal physician before your trip.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">What happens if someone in the team cannot continue or suffers from AMS?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>Because we operate with multiple Sherpas and assistant guides, an unwell climber is safely escorted down to lower elevation immediately by a dedicated Sherpa, while the rest of the team continues safely toward the summit.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">What level of mountaineering insurance is required?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>You must hold a specialized policy covering alpine mountaineering and helicopter evacuation up to <strong>6,500 meters (21,325 ft)</strong>. Policies from Global Rescue, Ripcord, or World Nomads Explorer are commonly used.</p>
                    </div>
                  </div>
                </div>

                <!-- CATEGORY 5: PRICING & BOOKING -->
                <div class="faq-category-content" id="faq-cat-payments">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">What is included in the $1,850 package price?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>The price covers domestic Lukla flights, NMA climbing permits, national park permits, garbage deposits, UIAGM/NMA climbing Sherpas (1:2 summit ratio), 4-season high camp tents, 17 nights accommodation, all meals on the mountain, porters, safety equipment, and medical kits.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">What is the summit bonus for Climbing Sherpas and tipping guidelines?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>A customary summit bonus of $150 to $250 USD per climber is awarded to your personal Climbing Sherpa upon reaching the summit. For trekking guides and porters, a communal tip pool of $120–$180 USD per climber is customary.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">What is the deposit requirement and payment schedule?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>We require a 20% deposit per person to secure your climbing permits, domestic flights, and guide bookings. The remaining balance can be settled in Kathmandu upon arrival via wire transfer, credit card (+3.5% fee), or cash (USD/EUR/GBP/NPR).</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">Can I book a private or custom departure date?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>Absolutely. We operate private expeditions on any date during Spring and Autumn for solo climbers, couples, or private groups. Private trips allow customized pacing, private tents, and 1:1 summit guiding ratios.</p>
                    </div>
                  </div>
                </div>

                <!-- CATEGORY 6: CULTURE & PORTERS -->
                <div class="faq-category-content" id="faq-cat-cultural">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">What ethnic communities will we encounter in the lower Hinku Valley?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>The southern approach traverses traditional Rai and Chhetri farming hamlets before reaching Sherpa communities around Pangkongma. You will experience traditional animist and Buddhist cultural practices, terraced farms, and historic stone gompas.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">What are your porter welfare standards?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>We are strict adherents of the International Porter Protection Group (IPPG) guidelines: maximum 20 kg loads, fair living wages, warm protective clothing, insulated footwear, and full emergency medical and helicopter evacuation insurance.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">How is expedition waste managed under NMA environmental regulations?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>We practice strict Leave No Trace mountaineering. All non-biodegradable waste (canisters, batteries, plastics) is packed down from High Camp and Khare to Lukla for official NMA waste audit inspection to reclaim the garbage deposit.</p>
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span class="faq-question-title">Can Mera Peak be combined with Amphu Lapcha Pass or Baruntse?</span>
                      <div class="faq-toggle-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <div class="faq-item-answer">
                      <p>Yes! A classic mountaineering extension is the <strong>Mera Peak to Amphu Lapcha Pass (<span data-altitude-m="5845">5,845 m</span>) traverse</strong> into the Khumbu Valley, or using Mera Peak as an acclimatization ascent before climbing Mount Baruntse (<span data-altitude-m="7129">7,129 m</span>). Contact us for custom extension itineraries.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>`;

html = html.substring(0, sFaqStartIdx) + faqContent + html.substring(sFaqEndIdx);

fs.writeFileSync('trek/mera-peak-climbing-trek/index.html', html, 'utf8');
console.log('Successfully updated Section 9: FAQs with all 28+ categorized FAQs for Mera Peak!');

