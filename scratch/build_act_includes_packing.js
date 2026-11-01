const fs = require('fs');

function generateIncludesHtml() {
  return `
          <!-- Section 3: Includes & Excludes -->
          <section id="section-includes" class="trek-detail-section">
            <h2 class="trek-section-title">What's Included & Excluded: Annapurna Circuit Trek</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px; margin-bottom: 24px;"></div>
            
            <p style="font-size: 1.05rem; color: var(--color-neutral-700); line-height: 1.7; margin-bottom: 24px;">
              Transparency is our core principle. Here is the comprehensive breakdown of everything included in our 14-day Annapurna Circuit package and what personal expenses you should plan for.
            </p>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-bottom: 32px;">
              <!-- What's Included -->
              <div style="background: #ffffff; border: 1px solid #dcfce7; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 18px;">
                  <div style="width: 32px; height: 32px; background: #dcfce7; color: #16a34a; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h3 style="font-size: 1.2rem; color: var(--color-primary-navy); font-weight: 700; margin: 0;">What is Included</h3>
                </div>

                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; font-size: 0.95rem; color: var(--color-neutral-700);">
                  <li style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span><strong>Airport Transfers:</strong> Private arrival and departure transfers at Tribhuvan International Airport (TIA).</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span><strong>City Hotels:</strong> 2 nights 3-star hotel in Kathmandu (Thamel) and 1 night hotel in Pokhara (Lakeside) with breakfast.</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span><strong>Mountain Lodges:</strong> 10 nights best available teahouses during the trek on twin-sharing basis.</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span><strong>All Meals on Trek:</strong> Full board (Breakfast, Lunch, and Dinner) with hot tea or coffee during trekking days.</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span><strong>Welcome & Farewell Dinners:</strong> Traditional Nepali dinners in Kathmandu with cultural music.</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span><strong>All Ground Transportation:</strong> Private overland 4WD vehicle Kathmandu to Chame, Nayapul to Pokhara, and return transfer to Kathmandu.</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span><strong>Licensed Guide & Porters:</strong> Highly experienced English-speaking certified mountain guide and strong porters (1 porter per 2 trekkers, 15 kg max luggage).</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span><strong>Permits & Fees:</strong> Annapurna Conservation Area Project (ACAP) entry permit and TIMS Card.</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span><strong>Safety Equipment:</strong> Medical first aid kit and daily pulse oximeter blood oxygen saturation checks.</span>
                  </li>
                </ul>
              </div>

              <!-- What's Excluded -->
              <div style="background: #ffffff; border: 1px solid #fee2e2; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 18px;">
                  <div style="width: 32px; height: 32px; background: #fee2e2; color: #dc2626; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </div>
                  <h3 style="font-size: 1.2rem; color: var(--color-primary-navy); font-weight: 700; margin: 0;">What is Excluded</h3>
                </div>

                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; font-size: 0.95rem; color: var(--color-neutral-700);">
                  <li style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    <span><strong>International Airfare:</strong> Flights to and from Kathmandu and international airport departure taxes.</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    <span><strong>Nepal Tourist Visa:</strong> Available upon arrival at TIA ($30 for 15 days, $50 for 30 days).</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    <span><strong>Travel & Rescue Insurance:</strong> Mandatory policy covering high-altitude trekking and emergency helicopter rescue up to 5,500 m.</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    <span><strong>Personal Trekking Gear:</strong> Sleeping bag, down jacket, boots, trekking poles, and daypack (can be rented affordably in Kathmandu).</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    <span><strong>Teahouse Extras:</strong> Hot showers ($2-$4), Wi-Fi ($2-$3), battery charging ($2-$3), and bottled mineral water.</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    <span><strong>Beverages:</strong> Alcoholic drinks, soda, espresso coffees, and personal snack purchases.</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    <span><strong>Tipping:</strong> Gratuities for trekking guides and porters (customarily $100–$150 per trekker total).</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
`;
}

function generatePackingHtml() {
  return `
          <!-- Section 5: Packing List -->
          <section id="section-packing" class="trek-detail-section">
            <h2 class="trek-section-title">Annapurna Circuit Gear & Packing Checklist</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px; margin-bottom: 20px;"></div>
            
            <p style="font-size: 1.05rem; color: var(--color-neutral-700); line-height: 1.7; margin-bottom: 24px;">
              Because the Annapurna Circuit transitions from warm subtropical valleys (25°C / 77°F) to sub-zero alpine conditions at Thorong La (-15°C / 5°F), a modular layering system is paramount. Porters carry up to 15 kg of main luggage in a duffel bag, while you carry a 25–35 liter daypack with daily essentials.
            </p>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 28px;">
              <!-- Headwear & Gloves -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px;">
                <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin-bottom: 12px; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  Headwear, Face & Hands
                </h4>
                <ul style="padding-left: 18px; font-size: 0.92rem; color: var(--color-neutral-700); line-height: 1.7; margin: 0;">
                  <li>Warm wool/fleece beanie for high-altitude nights</li>
                  <li>Sun hat / baseball cap with wide brim for lower valleys</li>
                  <li>UV-blocking polarized sunglasses (Category 3 or 4)</li>
                  <li>Buff / neck gaiter (protects against dust & cold wind)</li>
                  <li>Lightweight liner gloves (touchscreen compatible)</li>
                  <li>Heavyweight insulated, windproof mountaineering mitts</li>
                </ul>
              </div>

              <!-- Upper Body Layers -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px;">
                <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin-bottom: 12px; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
                  Upper Body Layering System
                </h4>
                <ul style="padding-left: 18px; font-size: 0.92rem; color: var(--color-neutral-700); line-height: 1.7; margin: 0;">
                  <li>2-3 moisture-wicking synthetic or Merino wool base layer tees</li>
                  <li>2 long-sleeve thermal base layers (Merino 200–250g)</li>
                  <li>1 mid-weight fleece jacket or grid pullover</li>
                  <li>1 waterproof & windproof breathable shell (Gore-Tex)</li>
                  <li>1 heavy down jacket (700–800 fill power with hood)</li>
                </ul>
              </div>

              <!-- Lower Body & Footwear -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px;">
                <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin-bottom: 12px; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v-2.38C4 11.5 7 11 12 11s8 .5 8 2.62V16"/><path d="M2 16h20v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4z"/></svg>
                  Lower Body & Footwear
                </h4>
                <ul style="padding-left: 18px; font-size: 0.92rem; color: var(--color-neutral-700); line-height: 1.7; margin: 0;">
                  <li>Sturdy, broken-in trekking boots with ankle support</li>
                  <li>Light camp shoes / sandals for teahouse dining rooms</li>
                  <li>4-5 pairs Merino wool trekking socks (light to heavy)</li>
                  <li>1-2 pairs convertible quick-dry trekking trousers</li>
                  <li>1 thermal base layer long johns (for pass day)</li>
                  <li>1 waterproof breathable rain over-trousers</li>
                </ul>
              </div>

              <!-- Gear & Personal Care -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px;">
                <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin-bottom: 12px; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  Hardware, Sleeping & First Aid
                </h4>
                <ul style="padding-left: 18px; font-size: 0.92rem; color: var(--color-neutral-700); line-height: 1.7; margin: 0;">
                  <li>4-season sleeping bag (comfort rating -10°C to -15°C)</li>
                  <li>25–35 liter daypack with fitted rain cover</li>
                  <li>Adjustable trekking poles with carbide tips</li>
                  <li>Headlamp (300+ lumens) with extra batteries</li>
                  <li>2x 1L reusable water bottles & purification tablets</li>
                  <li>Power bank (10,000–20,000 mAh), blister pads & lip balm</li>
                </ul>
              </div>
            </div>

            <!-- Printable Checklist Button -->
            <div style="text-align: center; margin-top: 10px;">
              <button onclick="window.print();" class="btn btn-outline" style="padding: 10px 24px; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 8px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                Print Complete Gear Checklist
              </button>
            </div>
          </section>
`;
}

module.exports = {
  generateIncludesHtml,
  generatePackingHtml
};
console.log('build_act_includes_packing.js created successfully');
