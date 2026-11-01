const fs = require('fs');

let html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

// 1. INCLUDES & EXCLUDES HTML
const incExcHtml = `<section id="section-includes" class="trek-detail-section">
            <style>
              .inc-exc-container {
                margin-top: 10px;
              }
              .inc-exc-section-title-wrapper {
                border-left: 4px solid var(--color-copper-orange);
                padding-left: 14px;
                margin-bottom: 24px;
                margin-top: 30px;
              }
              .inc-exc-section-title {
                font-size: 1.8rem;
                margin: 0;
                color: var(--color-primary-navy);
                font-weight: 700;
              }
              .inc-exc-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
                margin-bottom: 40px;
              }
              .inc-exc-card {
                background: var(--color-white);
                border: 1px solid #e2e8f0;
                border-radius: 16px;
                padding: 20px;
                display: flex;
                gap: 14px;
                transition: all var(--transition-fast);
              }
              .inc-exc-card:hover {
                border-color: #008060;
                box-shadow: 0 8px 20px rgba(0, 128, 96, 0.08);
                transform: translateY(-1px);
              }
              .inc-exc-card.exclude-card:hover {
                border-color: #ef4444;
                box-shadow: 0 8px 20px rgba(239, 68, 68, 0.08);
              }
              .inc-exc-icon-box {
                flex-shrink: 0;
                margin-top: 2px;
              }
              .inc-exc-card-content {
                display: flex;
                flex-direction: column;
                gap: 6px;
              }
              .inc-exc-card-title {
                font-size: 1rem;
                font-weight: 700;
                color: var(--color-primary-navy);
                line-height: 1.4;
              }
              .inc-exc-card-text {
                font-size: 0.9rem;
                line-height: 1.5;
                color: var(--color-neutral-600);
              }
              @media (max-width: 800px) {
                .inc-exc-grid {
                  grid-template-columns: 1fr;
                  gap: 16px;
                }
              }
            </style>

            <div class="inc-exc-container">
              <!-- Includes Heading -->
              <div class="inc-exc-section-title-wrapper" style="margin-top: 0; border-left-color: #008060;">
                <h2 class="inc-exc-section-title" style="color: #008060;">What's Included in the 21-Day Package</h2>
              </div>
              <p style="color: var(--color-neutral-600); font-size: 1rem; margin-bottom: 24px; line-height: 1.6;">
                The components below form our verified full-service expedition package. Your confirmed booking quotation covers all core logistics from Kathmandu arrival to final departure:
              </p>

              <!-- Includes Grid (10 Items) -->
              <div class="inc-exc-grid">
                
                <!-- 1. Airport Transfers -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">Airport Arrival & Departure Transfers</span>
                    <span class="inc-exc-card-text">Private vehicle airport transfers on arrival and final departure on the agreed dates (Day 1 and Day 21).</span>
                  </div>
                </div>

                <!-- 2. Kathmandu Hotel Nights -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">4 Nights 3-Star Kathmandu Hotel</span>
                    <span class="inc-exc-card-text">Four scheduled Kathmandu hotel nights in Thamel with daily breakfast included (Days 1, 2, 19, and 20).</span>
                  </div>
                </div>

                <!-- 3. Day 2 Sightseeing -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">Day 2 Kathmandu Cultural Tour & Gear Check</span>
                    <span class="inc-exc-card-text">Guided Kathmandu UNESCO heritage exploration, pre-trek orientation, gear inspection, and permit processing.</span>
                  </div>
                </div>

                <!-- 4. Domestic Flights -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">Lukla Return Mountain Flights & Ground Transfers</span>
                    <span class="inc-exc-card-text">Scheduled domestic flights (Kathmandu/Ramechhap to Lukla and return) including all applicable airport ground transfers.</span>
                  </div>
                </div>

                <!-- 5. 16 Nights Lodges -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">16 Mountain Teahouse & Lodge Nights</span>
                    <span class="inc-exc-card-text">Sixteen scheduled nights in standard clean mountain lodges along the unmodified circuit (Days 3 through 18).</span>
                  </div>
                </div>

                <!-- 6. Full-Board Meals -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">Full-Board Trekking Meals (B, L, D)</span>
                    <span class="inc-exc-card-text">Trekking breakfast, lunch, and dinner with hot tea/coffee during all 16 mountain walking days, plus Welcome & Farewell dinners in Kathmandu.</span>
                  </div>
                </div>

                <!-- 7. Guide & Porters -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">Licensed Sherpa Guide & Porter Support</span>
                    <span class="inc-exc-card-text">Government-certified high-altitude Sherpa guide and experienced mountain porters (1 porter for 2 trekkers, max 20–22 kg load).</span>
                  </div>
                </div>

                <!-- 8. Permits & TIMS -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">All National Park & Local Trekking Permits</span>
                    <span class="inc-exc-card-text">Sagarmatha National Park entry permit, Khumbu Pasang Lhamu Trek-Card, and official TIMS registration card.</span>
                  </div>
                </div>

                <!-- 9. Medical & Safety -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">Pulse Oximeter & Comprehensive Medical Kit</span>
                    <span class="inc-exc-card-text">Twice-daily pulse oximetry monitoring, first aid medical supplies, and 24/7 emergency response coordination.</span>
                  </div>
                </div>

                <!-- 10. Gear & Duffel Bag -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">Company Duffel Bag & Route Map</span>
                    <span class="inc-exc-card-text">Namaste Hiking Trek waterproof expedition duffel bag (yours to keep) and detailed physical topographical route map.</span>
                  </div>
                </div>

              </div>

              <!-- Excludes Heading -->
              <div class="inc-exc-section-title-wrapper">
                <h2 class="inc-exc-section-title" style="color: #ef4444;">What's Excluded from the Package</h2>
              </div>
              <p style="color: var(--color-neutral-600); font-size: 1rem; margin-bottom: 24px; line-height: 1.6;">
                Please ensure you budget separately for the following personal expenses and insurance requirements:
              </p>

              <!-- Excludes Grid (10 Items) -->
              <div class="inc-exc-grid">
                
                <!-- 1. International Flights -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">International Airfare & Nepal Entry Visa</span>
                    <span class="inc-exc-card-text">International airfare to/from Kathmandu and Nepal tourist visa fees ($30 for 15 days, $50 for 30 days on arrival).</span>
                  </div>
                </div>

                <!-- 2. Insurance -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">Travel Insurance with High-Altitude & Heli Cover</span>
                    <span class="inc-exc-card-text">Mandatory personal travel insurance covering emergency helicopter evacuation and medical care up to 6,000 meters.</span>
                  </div>
                </div>

                <!-- 3. Kathmandu Meals -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">Lunches and Dinners in Kathmandu</span>
                    <span class="inc-exc-card-text">Lunch and dinner in Kathmandu (except welcome and farewell dinners), giving you freedom to explore local restaurants.</span>
                  </div>
                </div>

                <!-- 4. Personal Gear -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">Personal Trekking Equipment & Clothing</span>
                    <span class="inc-exc-card-text">Personal clothing, broken-in trekking boots, -20°C sleeping bag, and down jacket (rental available in Kathmandu for $1/day).</span>
                  </div>
                </div>

                <!-- 5. Beverages -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">Bottled Water, Soft Drinks & Alcohol</span>
                    <span class="inc-exc-card-text">Bottled mineral water, canned soft drinks, alcoholic beverages, espresso coffees, and personal snacks.</span>
                  </div>
                </div>

                <!-- 6. Teahouse Extras -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">Hot Showers, Device Charging & Wi-Fi Fees</span>
                    <span class="inc-exc-card-text">Lodge hot water shower fees ($3–$6), battery/phone charging ($2–$5), and Everest Link Wi-Fi cards.</span>
                  </div>
                </div>

                <!-- 7. Tips & Gratuities -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">Tipping for Sherpa Guide & Mountain Porters</span>
                    <span class="inc-exc-card-text">Tips and gratuities for your guide and porter crew (customarily 10–15% of total trip cost distributed at Lukla).</span>
                  </div>
                </div>

                <!-- 8. Excess Baggage -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">Excess Baggage on Domestic Flights</span>
                    <span class="inc-exc-card-text">Weight above the standard 15 kg (10 kg check-in + 5 kg hand luggage) limit on Lukla flights ($1–$2 per extra kg).</span>
                  </div>
                </div>

                <!-- 9. Optional Upgrades -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">Helicopter Upgrades or Scenic Flights</span>
                    <span class="inc-exc-card-text">Optional helicopter transfers between Kathmandu and Lukla, or scenic fly-backs from Gorak Shep / Gokyo.</span>
                  </div>
                </div>

                <!-- 10. Force Majeure & Delays -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <span class="inc-exc-card-title">Costs Due to Severe Weather & Flight Delays</span>
                    <span class="inc-exc-card-text">Extra accommodation, meals, or rerouting arising from Lukla flight cancellations beyond our planned Day 20 buffer.</span>
                  </div>
                </div>

              </div>

              <!-- Note on Emergency Coordination -->
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px 22px; font-size: 0.92rem; color: #475569; line-height: 1.6;">
                <strong>Note on Rescue Coordination:</strong> Emergency rescue coordination is an integral part of our mountain guiding service. However, actual evacuation and medical treatment invoices are billed directly to your travel insurance policy. Always verify your insurance covers trekking up to 6,000 m.
              </div>

            </div>
          </section>`;

// 2. PACKING LIST HTML
const packingHtml = `<section id="section-packing" class="trek-detail-section">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; gap: 16px; flex-wrap: wrap;">
              <div>
                <h2 class="trek-section-title" style="margin-bottom: 8px;">Packing List for Everest Three High Passes Trek</h2>
                <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                  <span style="font-size: 0.95rem; color: var(--color-neutral-600); font-weight: 500;">
                    Gear Rental in Kathmandu: Sleeping bags & down jackets — <strong>USD 1/day per item</strong>
                  </span>
                  <a href="#" onclick="window.print(); return false;" style="font-size: 0.9rem; color: #008060; text-decoration: underline; font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Printable Checklist
                  </a>
                </div>
              </div>
              <div class="itinerary-meta-pill" style="font-size: 1rem; padding: 8px 18px; background: var(--color-glacier-bg); border-color: var(--color-alpine-blue); color: var(--color-primary-navy); border-radius: 12px; font-weight: 700; box-shadow: var(--shadow-sm);">
                Packed: <strong><span class="gear-checked-count">4</span> / <span class="gear-total-count">70</span></strong>
              </div>
            </div>

            <p style="color: var(--color-neutral-600); font-size: 0.95rem; margin-bottom: 24px;">
              Separate your porter-carried main duffle (max 10–12 kg per person) from the daypack you carry while walking. Keep warm layers, water, rain protection, medication, and valuables with you at all times.
            </p>

            <!-- 1. Hiking Gear (11 items) -->
            <div class="gear-section">
              <h3 class="gear-section-title">1. Hiking Gear <span style="font-size: 0.85rem; font-weight: normal; color: var(--color-neutral-500); margin-left: 6px;">(11 items)</span></h3>
              <div class="gear-grid">
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-1"><label for="gear-1">Daypack suited to planned walking days (30–35 L)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-2"><label for="gear-2">Soft duffle or agreed porter bag (provided free by us)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-3"><label for="gear-3">Daypack rain cover</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-4"><label for="gear-4">Waterproof liners or internal dry bags</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-5" checked><label for="gear-5">Broken-in, waterproof trekking boots</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-6"><label for="gear-6">Lodge shoes or sandals for evenings</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-7" checked><label for="gear-7">Trekking poles (collapsible, sturdy)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-8"><label for="gear-8">Headlamp with spare batteries/charging</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-9" checked><label for="gear-9">UV-protective sunglasses (Category 3 or 4)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-10"><label for="gear-10">Reusable water bottles / insulated hydration flask</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-11"><label for="gear-11">Microspikes or seasonal traction equipment</label></div>
              </div>
            </div>

            <!-- 2. Garments & Layers (19 items) -->
            <div class="gear-section">
              <h3 class="gear-section-title">2. Garments & Layers <span style="font-size: 0.85rem; font-weight: normal; color: var(--color-neutral-500); margin-left: 6px;">(19 items)</span></h3>
              <div class="gear-grid">
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-12"><label for="gear-12">Quick-drying trekking shirts (3–4)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-13"><label for="gear-13">Trekking trousers (convertible / lightweight, 2 pairs)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-14"><label for="gear-14">Warm or soft-shell windproof trousers</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-15"><label for="gear-15">Thermal base-layer tops (merino wool / synthetic, 2)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-16"><label for="gear-16">Thermal base-layer bottoms (2)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-17"><label for="gear-17">Fleece or insulating mid-layer jacket</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-18" checked><label for="gear-18">Down jacket (-15°C to -20°C rating)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-19"><label for="gear-19">Waterproof breathable shell jacket (Gore-Tex)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-20"><label for="gear-20">Waterproof shell over-trousers</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-21"><label for="gear-21">Lightweight wind layer</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-22"><label for="gear-22">Cushioned trekking socks (4–5 pairs)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-23"><label for="gear-23">Heavy wool sleeping socks</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-24"><label for="gear-24">Lightweight liner gloves</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-25"><label for="gear-25">Warm waterproof mountaineering outer gloves/mittens</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-26"><label for="gear-26">Warm fleece beanie / toque</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-27"><label for="gear-27">Wide-brim sun hat or baseball cap</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-28"><label for="gear-28">Neck gaiter or Buff (essential for Khumbu cough)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-29"><label for="gear-29">Moisture-wicking underwear (4–5 pairs)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-30"><label for="gear-30">Comfortable warm lodge and sleeping clothes</label></div>
              </div>
            </div>

            <!-- 3. Sleeping System (5 items) -->
            <div class="gear-section">
              <h3 class="gear-section-title">3. Sleeping System <span style="font-size: 0.85rem; font-weight: normal; color: var(--color-neutral-500); margin-left: 6px;">(5 items)</span></h3>
              <div class="gear-grid">
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-31"><label for="gear-31">4-season sleeping bag (-15°C to -20°C rating)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-32"><label for="gear-32">Silk or fleece sleeping-bag liner (adds 5°C warmth)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-33"><label for="gear-33">Earplugs (essential for noisy teahouse walls)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-34"><label for="gear-34">Sleep eye mask</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-35"><label for="gear-35">Compact inflatable travel pillow</label></div>
              </div>
            </div>

            <!-- 4. Toiletries & Hygiene (16 items) -->
            <div class="gear-section">
              <h3 class="gear-section-title">4. Toiletries and Hygiene <span style="font-size: 0.85rem; font-weight: normal; color: var(--color-neutral-500); margin-left: 6px;">(16 items)</span></h3>
              <div class="gear-grid">
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-36"><label for="gear-36">Toothbrush and biodegradable toothpaste</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-37"><label for="gear-37">High SPF sunscreen (SPF 50+)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-38"><label for="gear-38">SPF lip balm (zinc or wax based)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-39"><label for="gear-39">Alcohol hand sanitizer bottles (2)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-40"><label for="gear-40">Toilet paper in waterproof Ziploc bag (2 rolls)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-41"><label for="gear-41">Pocket tissues</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-42"><label for="gear-42">Biodegradable wet wipes (pack out used wipes)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-43"><label for="gear-43">Quick-drying microfiber towel</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-44"><label for="gear-44">Small washing kit / biodegradable soap</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-45"><label for="gear-45">Feminine hygiene supplies</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-46"><label for="gear-46">Nail clippers</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-47"><label for="gear-47">Small comb or hair brush</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-48"><label for="gear-48">Blister kit (Compeed, moleskin, leukotape)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-49"><label for="gear-49">Water purification tablets / drops</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-50"><label for="gear-50">Personal first-aid supplies & pain relievers (ibuprofen)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-51"><label for="gear-51">Prescribed personal medication (e.g., Diamox/Acetazolamide)</label></div>
              </div>
            </div>

            <!-- 5. Electronics (9 items) -->
            <div class="gear-section">
              <h3 class="gear-section-title">5. Electronics <span style="font-size: 0.85rem; font-weight: normal; color: var(--color-neutral-500); margin-left: 6px;">(9 items)</span></h3>
              <div class="gear-grid">
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-52"><label for="gear-52">Smartphone & offline offline map app</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-53"><label for="gear-53">High-capacity power bank (20,000 mAh recommended)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-54"><label for="gear-54">Charging cables (keep warm in sleeping bag)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-55"><label for="gear-55">Universal travel adapter plug (Nepal Types C, D, M)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-56"><label for="gear-56">Camera and protective case</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-57"><label for="gear-57">Spare camera batteries (drain rapidly in cold)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-58"><label for="gear-58">Extra high-speed memory cards</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-59"><label for="gear-59">GPS / Altimeter sports watch</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-60"><label for="gear-60">Earphones (maintain awareness of yaks & trail)</label></div>
              </div>
            </div>

            <!-- 6. Miscellaneous & Documents (10 items) -->
            <div class="gear-section">
              <h3 class="gear-section-title">6. Miscellaneous and Documents <span style="font-size: 0.85rem; font-weight: normal; color: var(--color-neutral-500); margin-left: 6px;">(10 items)</span></h3>
              <div class="gear-grid">
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-61"><label for="gear-61">Original passport (valid minimum 6 months)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-62"><label for="gear-62">Nepal visa copies and passport photos (4)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-63"><label for="gear-63">Travel insurance certificate & 24/7 hotline</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-64"><label for="gear-64">Emergency contacts list</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-65"><label for="gear-65">Booking confirmation and inclusion list</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-66"><label for="gear-66">International & Lukla flight e-tickets</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-67"><label for="gear-67">Permit photocopies</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-68"><label for="gear-68">Nepali rupees in cash (smaller notes for teahouses)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-69"><label for="gear-69">Backup credit/debit card (stored separately)</label></div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();"><input type="checkbox" id="gear-70"><label for="gear-70">Energy bars, electrolyte powder & trail snacks</label></div>
              </div>
            </div>

            <!-- Deep-Dive Guidance Cards (4 Cards) -->
            <div style="margin-top: 40px; border-top: 1px solid var(--color-neutral-100); padding-top: 30px;">
              <h3 style="font-size: 1.3rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 20px;">Essential High-Pass Gear Guidance</h3>
              
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
                
                <!-- Card 1: Traction -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                  <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                    <div style="width: 36px; height: 36px; background: #e6f7f0; color: #008060; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </div>
                    <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); font-weight: 700; margin: 0;">How should traction equipment be chosen?</h4>
                  </div>
                  <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.55; margin: 0;">
                    Do not automatically assume full mountaineering crampons are required. The standard trekking route is not a technical climbing expedition. However, snow and ice conditions on Cho La glacier and Kongma La change rapidly. Lightweight steel microspikes paired with sturdy boots provide the ideal balance. Your Sherpa guide inspects route conditions and confirms traction requirements prior to crossing.
                  </p>
                </div>

                <!-- Card 2: Sleeping Bag -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                  <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                    <div style="width: 36px; height: 36px; background: #e6f7f0; color: #008060; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
                    </div>
                    <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); font-weight: 700; margin: 0;">Choose a sleeping system for the actual season</h4>
                  </div>
                  <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.55; margin: 0;">
                    A -15°C to -20°C sleeping bag is essential for high settlements above 4,500m (Dingboche, Chhukung, Lobuche, Gorak Shep, Dzongla, Thangnak, Gokyo, and Lungden). Teahouses provide quilts, but unheated wooden bedrooms routinely drop well below freezing (-10°C to -15°C). Adding a silk liner provides hygiene and extra warmth.
                  </p>
                </div>

                <!-- Card 3: Weight segregation -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                  <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                    <div style="width: 36px; height: 36px; background: #e6f7f0; color: #008060; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    </div>
                    <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); font-weight: 700; margin: 0;">Keep airline and porter allowances separate</h4>
                  </div>
                  <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.55; margin: 0;">
                    Domestic flights to Lukla allow 15 kg total (10 kg duffel + 5 kg daypack). Our porter allocation permits 10–12 kg per trekker in the main duffel. Non-trekking city clothes and luggage can be stored securely and free of charge in our Kathmandu hotel luggage storage until your return on Day 19.
                  </p>
                </div>

                <!-- Card 4: Daypack prep -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                  <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                    <div style="width: 36px; height: 36px; background: #e6f7f0; color: #008060; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); font-weight: 700; margin: 0;">Prepare the high-pass daypack</h4>
                  </div>
                  <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.55; margin: 0;">
                    On pass days (Kongma La, Cho La, Renjo La), your porter walks at their own steady pace and will reach the next lodge hours before or after you. Always carry 2L of water in insulated flasks, high-energy snacks, wind/rain shell, warm mittens, fleece beanie, sunglasses, and personal first-aid in your walking daypack.
                  </p>
                </div>

              </div>
            </div>

          </section>`;

// Replace section-includes
const s3Start = html.indexOf('<section id="section-includes"');
const sDatesStart = html.indexOf('<section id="section-dates"');

if (s3Start === -1 || sDatesStart === -1) {
  console.error('Includes boundaries not found!');
  process.exit(1);
}

const beforeInc = html.slice(0, s3Start);
const afterInc = html.slice(sDatesStart);
html = beforeInc + incExcHtml + '\n\n          ' + afterInc;

// Replace section-packing
const sPackStart = html.indexOf('<section id="section-packing"');
const sDetailsStart = html.indexOf('<section id="section-details"');

if (sPackStart === -1 || sDetailsStart === -1) {
  console.error('Packing boundaries not found!');
  process.exit(1);
}

const beforePack = html.slice(0, sPackStart);
const afterPack = html.slice(sDetailsStart);
html = beforePack + packingHtml + '\n\n          ' + afterPack;

fs.writeFileSync('trek/everest-three-passes-trek/index.html', html, 'utf8');
console.log('Successfully applied Step 4: Includes, Excludes and Packing List!');

