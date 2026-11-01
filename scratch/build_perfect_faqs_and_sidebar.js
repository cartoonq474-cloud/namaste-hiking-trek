const fs = require('fs');

function generateCategorizedFaqsHtml() {
  return `
          <!-- Section 12: FAQs -->
          <section id="section-faqs" class="trek-detail-section">
            <h2 class="faq-section-accent-title">
              <span class="faq-accent-bar"></span>
              Frequently Asked Questions for Annapurna Circuit Trek
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
                  <div class="faq-active-category-title" id="faq-current-category-title">General Information</div>
                  <button type="button" class="faq-expand-all-btn" id="faq-expand-all-btn">Expand All</button>
                </div>

                <!-- Category 1: General Information -->
                <div class="faq-category-content active" id="faq-cat-general">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">How long is this Annapurna Circuit Trek package?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      This package is 14 calendar days from Kathmandu arrival to final international departure. Days 2–12 encompass the mountain journey, including the strategic road approach to Chame, the mandatory Day 5 acclimatization in Manang, the Thorong La crossing (5,416 m), and the southern conclusion through Tatopani hot springs and Poon Hill.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">How high are Thorong La Pass and Manang?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Thorong La Pass stands at 5,416 m (17,769 ft), making it the highest point and physical pinnacle of the Annapurna Circuit. Manang sits at approximately 3,500 m (11,482 ft) and serves as the vital acclimatization base. The highest overnight stop is Thorong Phedi (~4,450 m) or an individually assessed High Camp (~4,925 m).
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What is the best season to trek the Annapurna Circuit?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      The two optimal seasons are <strong>Autumn (September to November)</strong> and <strong>Spring (March to May)</strong>. Autumn offers exceptionally clear skies, stable dry weather, and crisp Himalayan panoramas after the monsoon. Spring brings warmer daytime temperatures, longer daylight, and magnificent blooming rhododendron forests between Tatopani and Ghorepani.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">How does the Annapurna Circuit compare to Everest Base Camp?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      While Everest Base Camp follows a single valley to a mountain foot and returns along the same route, the Annapurna Circuit is a complete circumnavigation of an entire mountain massif. It connects two contrasting river systems (Marsyangdi and Kali Gandaki), crosses a 5,416-meter pass, and provides unmatched ecological diversity—from subtropical valleys to the Tibetan-style rain shadow desert.
                    </div>
                  </div>
                </div>

                <!-- Category 2: Permits and Logistics -->
                <div class="faq-category-content" id="faq-cat-permits" style="display: none;">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What permits are required for the Annapurna Circuit?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Trekkers require two official permits: the <strong>Annapurna Conservation Area Project (ACAP) Permit</strong> and the <strong>Trekkers' Information Management System (TIMS) Card</strong>. As per Nepal Tourism Board regulations, foreign trekkers must be accompanied by a certified licensed trekking guide. All permits and official paperwork are fully organized and included in your booking.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">How do we travel from Kathmandu to the starting trail?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      We provide private 4WD overland transportation from Kathmandu directly to Chame (2,710 m) on Day 2. Driving past the lower road-affected sections preserves valuable vacation time and physical stamina for the pristine alpine sections between Pisang, Manang, and Thorong La.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What are the luggage limits for domestic transport and porters?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Porters carry up to 15 kg (33 lbs) of main luggage per trekker in a waterproof duffel bag provided by us. You only carry a light daypack (25–35 liters) with daily water, warm layers, camera, sun protection, and personal valuables.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">How do we return to Kathmandu at the end of the trek?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      On Day 12, after watching sunrise from Poon Hill, we descend to Nayapul and take a private vehicle to Pokhara. On Day 13, you travel from Pokhara to Kathmandu via a scenic 25-minute flight or deluxe tourist coach, as confirmed in your package schedule.
                    </div>
                  </div>
                </div>

                <!-- Category 3: Accommodation and Food -->
                <div class="faq-category-content" id="faq-cat-accommodation" style="display: none;">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What is accommodation like along the Annapurna Circuit?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Accommodation is in family-run mountain teahouses and lodges. Rooms are clean, twin-sharing with foam mattresses, pillows, and blankets. In lower villages like Chame, Manang, and Jomsom, rooms often feature private attached bathrooms. High-altitude stops (Yak Kharka and Thorong Phedi) offer simpler communal facilities. Bringing a 4-season (-10°C to -15°C) sleeping bag is essential.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What meals are served during the trek?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Full board (Breakfast, Lunch, and Dinner) with hot tea or coffee is included during all trekking days. Menus feature authentic Nepali Dal Bhat (steamed rice, spiced lentil soup, seasonal vegetable curry, greens, and pickles with complimentary refills), Tibetan momos, fried noodles, garlic soups, porridge, pancakes, and famous Thakali apple pies in Marpha.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">Are hot showers and Wi-Fi available at teahouses?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Hot gas or solar showers ($2–$4) and Wi-Fi ($2–$3) are available at most teahouses up to Manang and from Muktinath southward. Connectivity is naturally limited or unavailable at Thorong Phedi and High Camp due to remote high-altitude geography.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">How is safe drinking water managed along the route?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Safe drinking water is essential. Teahouses sell boiled drinking water, and ACAP community water stations provide safe filtered water. To minimize single-use plastic waste, we recommend carrying two 1-liter reusable water bottles with chlorine dioxide water purification drops or a Sawyer Squeeze filter.
                    </div>
                  </div>
                </div>

                <!-- Category 4: Health and Safety -->
                <div class="faq-category-content" id="faq-cat-health" style="display: none;">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">How do we prevent Acute Mountain Sickness (AMS)?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      By following our progressive counterclockwise ascent curve and mandatory Day 5 acclimatization rest in Manang (~3,500 m). Trekkers climb high during day hikes and return to sleep lower, maintaining 3–4 liters of daily hydration, eating high-carbohydrate meals, and ascending at an easy conversational pace ('bistari, bistari').
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">Do your guides carry safety equipment and medical supplies?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Yes. All our lead guides carry certified digital pulse oximeters to check blood oxygen saturation (SpO2) and pulse twice daily (morning and evening). Guides are certified in wilderness first aid and carry comprehensive medical kits.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What happens in case of an emergency evacuation?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      In the rare event of severe altitude illness or traumatic injury, our operations base in Kathmandu coordinates rapid emergency helicopter rescue to specialized medical facilities in Pokhara or Kathmandu through your travel insurance provider.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">Should I take Diamox (Acetazolamide)?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Many trekkers carry Diamox (125mg or 250mg) as a preventative aid. Consult your personal physician before departure. Diamox helps the body adapt more quickly to reduced oxygen, but it is not a substitute for gradual acclimatization and hydration.
                    </div>
                  </div>
                </div>

                <!-- Category 5: Payments & Extra Costs -->
                <div class="faq-category-content" id="faq-cat-payments" style="display: none;">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What is the booking deposit and cancellation policy?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      We require a 20% deposit upon booking confirmation via secure online bank transfer or credit card. The remaining balance can be settled upon arrival in Kathmandu in USD or cash. We offer flexible free date changes up to 30 days prior to departure.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">How much personal spending money should I bring?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      We recommend carrying approximately $25 to $35 USD per day in Nepali Rupees (NPR) to cover hot showers, Wi-Fi, electronic device charging, personal snacks, and beverages. ATMs are available in Kathmandu, Pokhara, and Jomsom.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">How much should I tip the guide and porters?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Tipping is customary in Himalayan trekking and deeply appreciated by the local crews. A common guideline is approximately $100 to $150 USD per trekker, divided among your lead guide, assistant guide, and porter team at the farewell dinner.
                    </div>
                  </div>
                </div>

                <!-- Category 6: Cultural Insights -->
                <div class="faq-category-content" id="faq-cat-cultural" style="display: none;">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What cultural etiquette should I follow at Muktinath and gompas?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Dress modestly with shoulders and knees covered when entering temples and monasteries. Always walk clockwise around Buddhist chortens, mani walls, and prayer wheels. Ask permission before photographing worshippers or monks inside active prayer halls.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What distinct ethnic communities will we encounter?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      In the lower Marsyangdi Valley: Gurung and Magar agricultural communities. In Manang: the Tibetan-influenced Manangi (Nyeshang) people with a rich trading heritage. In the Kali Gandaki Valley: the Thakali people, historic masters of Himalayan trade and hospitality.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What environmental principles apply to the circuit?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      We strictly practice 'Leave No Trace' mountain ethics. Pack out all non-biodegradable trash, avoid single-use plastic water bottles, use existing toilet facilities, and preserve the delicate alpine flora and fauna within the Annapurna Conservation Area.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
`;
}

function generateSidebarBookingCardHtml() {
  return `
        <!-- Sticky Booking Sidebar Column -->
        <div>
          <div class="sidebar-booking-card">
              
              <!-- Top Right Best Seller Ribbon Badge -->
              <div style="position: absolute; top: 18px; right: 0; background: #F59E0B; color: #FFFFFF; font-size: 0.72rem; font-weight: 800; padding: 5px 14px; border-radius: 4px 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 2px 6px rgba(245, 158, 11, 0.3);">
                BEST SELLER
              </div>

              <!-- Pricing Header -->
              <span style="font-size: 0.75rem; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">FROM</span>
              <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 16px; flex-wrap: wrap;">
                <span style="font-size: 2.5rem; font-weight: 800; color: #0F172A; line-height: 1;">$1,199</span>
                <span style="font-size: 0.92rem; color: #64748B; font-weight: 500;">/ person</span>
                <a href="#section-itinerary" style="font-size: 0.92rem; color: #475569; font-weight: 600; text-decoration: underline; margin-left: 4px;">14 days trip</a>
              </div>

              <!-- Group Discount Accordion Toggle -->
              <div class="group-discount-toggle" onclick="const table = this.nextElementSibling; const arrow = this.querySelector('.gd-arrow'); if (table.style.display === 'none') { table.style.display = 'block'; arrow.style.transform = 'rotate(180deg)'; } else { table.style.display = 'none'; arrow.style.transform = 'rotate(0deg)'; }" style="border-top: 1px dashed #CBD5E1; border-bottom: 1px dashed #CBD5E1; padding: 10px 0; margin-bottom: 18px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none;">
                <span style="font-size: 0.78rem; font-weight: 800; color: #0F172A; text-transform: uppercase; letter-spacing: 0.04em;">WE OFFER GROUP DISCOUNT</span>
                <span class="gd-arrow" style="font-size: 0.85rem; color: #0F172A; transition: transform 0.2s ease;">▼</span>
              </div>

              <!-- Group Discount Table (Hidden by default, expandable) -->
              <div class="group-discount-content" style="display: none; margin-bottom: 18px; background: #F8FAFC; border-radius: 10px; padding: 12px; font-size: 0.85rem; border: 1px solid #E2E8F0;">
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">2 - 4 Persons</span>
                  <strong style="color: #0F172A;">$1,149 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">5 - 8 Persons</span>
                  <strong style="color: #0F172A;">$1,099 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0;">
                  <span style="color: #64748B;">9+ Persons</span>
                  <strong style="color: #047857;">$1,049 / person (Best Deal)</strong>
                </div>
              </div>

              <!-- Action Buttons -->
              <button class="btn open-inquiry-btn" data-trek-title="Annapurna Circuit Trek (14 Days)" style="width: 100%; padding: 14px; background: #008060; color: #FFFFFF; border: none; border-radius: 50px; font-size: 1.05rem; font-weight: 800; cursor: pointer; margin-bottom: 12px; box-shadow: 0 4px 14px rgba(0, 128, 96, 0.25); transition: background 0.2s;">
                Book Now
              </button>
              <button class="btn open-inquiry-btn" data-trek-title="Annapurna Circuit Trek (14 Days)" style="width: 100%; padding: 12px; background: #FFFFFF; color: #0F172A; border: 1px solid #CBD5E1; border-radius: 50px; font-size: 0.98rem; font-weight: 700; cursor: pointer; margin-bottom: 22px;">
                Make an Enquiry
              </button>

              <!-- 5 Bullet Features with Emerald Sparkles -->
              <ul style="list-style: none; padding: 0; margin: 0 0 20px 0; display: flex; flex-direction: column; gap: 11px;">
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Trek Leading by well trained Team</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Hassle-Free & Instant Booking</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>100% Customers Satisfaction</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Reasonable Price & Best Service</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>No Hidden Cost & Secure Payment</span>
                </li>
              </ul>

              <!-- Bottom Instant Help Footer Section -->
              <div style="border-top: 1px dashed #CBD5E1; padding-top: 18px; display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <span style="font-size: 0.72rem; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">INSTANT HELP</span>
                  <strong style="font-size: 1.05rem; font-weight: 800; color: #0F172A;">Call or WhatsApp</strong>
                </div>

                <!-- Phone & WhatsApp Round Buttons -->
                <div style="display: flex; align-items: center; gap: 10px;">
                  <!-- Phone Call Button -->
                  <a href="tel:+9779800000000" style="display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; background: #008060; color: #FFFFFF; text-decoration: none; box-shadow: 0 4px 10px rgba(0, 128, 96, 0.3); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'" title="Call Us Directly">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </a>

                  <!-- WhatsApp Button -->
                  <a href="https://wa.me/9779800000000?text=Hi%2C%20I%20am%20interested%20in%20the%2014-Day%20Annapurna%20Circuit%20Trek." target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; background: #25D366; color: #FFFFFF; text-decoration: none; box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'" title="Chat on WhatsApp">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.25-1.48-1.4-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.42 1.44.54.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z"/>
                    </svg>
                  </a>
                </div>
              </div>

          </div>
        </div>
`;
}

// Read current index.html
let html = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

// Replace Section 12: FAQs
const faqStart = html.indexOf('<section id="section-faqs"');
const faqEnd = html.indexOf('</section>', faqStart) + '</section>'.length;
console.log('Replacing FAQs from', faqStart, 'to', faqEnd);
html = html.slice(0, faqStart) + generateCategorizedFaqsHtml().trim() + html.slice(faqEnd);

// Replace Sidebar Booking Card
const sbStart = html.indexOf('<!-- Sticky Booking Sidebar Column -->');
const sbEnd = html.indexOf('</section>\n\n  <section class="you-might-like-section">', sbStart);
console.log('Replacing Sidebar from', sbStart, 'to', sbEnd);
html = html.slice(0, sbStart) + generateSidebarBookingCardHtml().trim() + '\n      </div>\n    ' + html.slice(sbEnd);

fs.writeFileSync('trek/annapurna-circuit-trek/index.html', html, 'utf8');
console.log('Updated index.html with categorized FAQs and full EBC-style sidebar card!');
