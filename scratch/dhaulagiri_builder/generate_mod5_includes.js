// Module 5: Section 3 - What's Included, What's Excluded & Booking Policies for Dhaulagiri Circuit Trek
function getIncludesSection() {
  return `
        <!-- Section 3: Includes & Excludes -->
        <section id="section-includes" class="trek-detail-section">
          <div class="inc-exc-section-title-wrapper" style="border-left: 4px solid var(--color-copper-orange); padding-left: 14px; margin-bottom: 24px;">
            <h2 class="trek-section-title" style="margin-bottom: 0;">What's Included &amp; Excluded</h2>
          </div>

          <!-- Included Grid -->
          <div style="margin-bottom: 35px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: #dcfce7; color: #15803d; border-radius: 50%; font-size: 0.85rem;">✓</span>
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f172a; margin: 0;">What is Included in the 20-Day Package</h3>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
              
              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Airport Transfers</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Private vehicle pickup and drop-off at Tribhuvan International Airport (TIA) for international arrival and departure flights.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">City Hotel Accommodation</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">3 nights at 3-star boutique hotel in Kathmandu (Thamel) and 1 night at lakeside hotel in Pokhara on twin-sharing bed &amp; breakfast basis.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Overland 4WD &amp; Road Transport</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Private overland transport: Kathmandu to Beni/Babiyachaur (Day 3–4) and Pokhara to Kathmandu (Day 19) by private vehicle.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Scheduled Domestic Mountain Flight</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Jomsom to Pokhara scenic flight (Day 18) including airport departure tax and 15 kg baggage allowance (10 kg check-in + 5 kg hand luggage).</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Full-Board Mountain Meals</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Breakfast, Lunch, and Dinner freshly prepared each day by our dedicated expedition cook and camp crew, supplemented by seasonal fresh fruit and hot drinks.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">High-Altitude Camping Infrastructure</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">7+ nights supported camping: heavy-duty 4-season alpine sleeping tents (2 persons per tent), insulated foam and inflatable sleeping mattresses, dining tent, kitchen tent, and toilet tent.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Teahouse Accommodation</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">All standard village lodge / teahouse accommodation during lower approach and exit stages (Babiyachaur, Dharapani, Muri, Boghara, Dobang, Jomsom).</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Expert Guide &amp; Support Crew</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Govt-licensed, English-speaking Sherpa lead guide, assistant guide (for groups 6+), dedicated camp cook, kitchen assistants, and strong local porters (2:1 client ratio, 20 kg limit).</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">All Trekking Permits &amp; Registrations</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Annapurna Conservation Area Project (ACAP) permit, Trekkers' Information Management System (TIMS) card, and local Myagdi rural municipality entrance fees.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Wilderness Medical &amp; Safety Kit</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Comprehensive wilderness first aid kit, portable medical oxygen cylinder, emergency satellite communicator, and twice-daily pulse oximetry saturation monitoring.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Staff Insurance &amp; Fair Living Wages</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Full comprehensive medical, rescue, and life insurance, warm high-altitude alpine clothing, boots, and fair daily wages for all guides, cooks, and porters in compliance with IPPG guidelines.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Farewell Celebration Dinner</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Celebratory cultural dinner in Kathmandu on Day 19 featuring traditional Nepali cuisine and authentic live folk musical performances.</p>
                </div>
              </div>

            </div>
          </div>

          <!-- Excluded Grid -->
          <div style="margin-bottom: 30px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: #fee2e2; color: #b91c1c; border-radius: 50%; font-size: 0.85rem;">✕</span>
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f172a; margin: 0;">What is Excluded</h3>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
              
              <div style="display: flex; gap: 12px; background: #fff5f5; border: 1px solid #fed7d7; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #dc2626; font-weight: 700; font-size: 1.1rem;">✕</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">International Airfare &amp; Visa Fees</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">International roundtrip airfare to/from Kathmandu and Nepal tourist entry visa fee ($50 USD for 30-day visa, obtained upon arrival at TIA).</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #fff5f5; border: 1px solid #fed7d7; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #dc2626; font-weight: 700; font-size: 1.1rem;">✕</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Travel &amp; Medical Evacuation Insurance</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Mandatory personal insurance covering high-altitude trekking up to 6,000 m, emergency medical treatments, and emergency helicopter rescue/evacuation.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #fff5f5; border: 1px solid #fed7d7; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #dc2626; font-weight: 700; font-size: 1.1rem;">✕</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Personal Trekking Gear</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Personal sleeping bag (-20°C rated), heavy down jacket, broken-in trekking boots, microspikes/crampons, and personal clothing layers (can be rented in Kathmandu).</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #fff5f5; border: 1px solid #fed7d7; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #dc2626; font-weight: 700; font-size: 1.1rem;">✕</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Personal Lodge Expenses</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Hot showers at lower village teahouses, battery/power bank charging fees, Wi-Fi connections, alcoholic beverages, sodas, and laundry services.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #fff5f5; border: 1px solid #fed7d7; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #dc2626; font-weight: 700; font-size: 1.1rem;">✕</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Extra Hotel Nights &amp; Flight Buffer Costs</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Additional nights and meals in Kathmandu or Pokhara resulting from early arrival, delayed flights, mountain weather cancellations, or early descent.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #fff5f5; border: 1px solid #fed7d7; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #dc2626; font-weight: 700; font-size: 1.1rem;">✕</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Tips &amp; Gratuities</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Tips for high-altitude Sherpa guides, expedition cooks, kitchen helpers, and mountain porters (budget approx. $150–$200 USD total per trekker).</p>
                </div>
              </div>

            </div>
          </div>

        </section>
\`;
}

module.exports = { getIncludesSection };
`;
  fs.writeFileSync('scratch/dhaulagiri_builder/mod5_includes.js', code, 'utf8');
  console.log('Successfully wrote scratch/dhaulagiri_builder/mod5_includes.js');
}

buildIncludesModule();

