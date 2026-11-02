// Module 5: Section 3 - What's Included, What's Excluded & Booking Policies
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
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f172a; margin: 0;">What is Included in the Package</h3>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
              
              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Airport Transfers</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Private vehicle pickup and drop-off at Tribhuvan International Airport (TIA) for international flights.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Overland 4WD Transportation</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Kathmandu to Dhap Bazaar and Phaplu back to Kathmandu by comfortable private 4WD Scorpio Jeep.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Kathmandu Hotel Accommodation</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">2 nights in a standard tourist hotel in Thamel on twin-sharing basis with breakfast included.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Mountain Teahouse Accommodation</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">6 nights in authentic teahouses/lodges along the trek (Dhap, Jhapre, Base Camp, Jasmane, Junbesi, Phaplu).</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Full Board Meals on Trek</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">3 freshly prepared meals per day (Breakfast, Lunch, Dinner) selected from teahouse menus with tea/coffee.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Licensed Sherpa Mountain Guide</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Experienced, English-speaking, government-certified mountain guide trained in wilderness first aid.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Trekking Porters &amp; Luggage Support</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">1 porter for every 2 trekkers (carrying up to 20 kg total / 10 kg per trekker in waterproof duffel bags).</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Staff Insurance &amp; Ethical Protections</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Comprehensive insurance coverage, fair living wages, warm mountain clothing, and lodging for crew.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">All Permits &amp; Entry Fees</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Solukhumbu Local Area Entry Permit and Trekkers' Information Management System (TIMS) cards.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Altitude Monitoring &amp; First Aid</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Daily blood oxygen saturation (SpO2) and heart rate monitoring with pulse oximeter plus medical kit.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Namaste Hiking Trek Kit</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Company 80L waterproof duffel bag, topographic trekking route map, company sunhat/beanie, and certificate.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #16a34a; font-weight: 700; font-size: 1.1rem;">✓</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Government Taxes &amp; Welcome Dinner</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">13% Nepal government VAT, official paperwork charges, and hosted welcome/farewell dinners in Kathmandu.</p>
                </div>
              </div>

            </div>
          </div>

          <!-- Excluded Grid -->
          <div style="margin-bottom: 35px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: #fee2e2; color: #b91c1c; border-radius: 50%; font-size: 0.85rem;">✗</span>
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f172a; margin: 0;">What is Excluded from the Package</h3>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
              
              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #dc2626; font-weight: 700; font-size: 1.1rem;">✗</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">International Airfare &amp; Visa</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">International flights to/from Kathmandu and Nepal entry visa fee ($30 for 15 days, $50 for 30 days).</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #dc2626; font-weight: 700; font-size: 1.1rem;">✗</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Travel &amp; Evacuation Insurance</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Mandatory emergency medical and high-altitude helicopter rescue insurance valid up to 4,500 m.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #dc2626; font-weight: 700; font-size: 1.1rem;">✗</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Meals in Kathmandu</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Lunches and non-included dinners in Kathmandu, giving you freedom to explore local Thamel restaurants.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #dc2626; font-weight: 700; font-size: 1.1rem;">✗</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Personal Teahouse Expenses</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Hot bucket showers ($3–$5), battery charging ($2–$4), Wi-Fi scratch cards, and laundry service.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #dc2626; font-weight: 700; font-size: 1.1rem;">✗</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Beverages &amp; Boiled Water</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Bottled mineral water, boiled drinking water thermoses, soft drinks, beer, and alcoholic bar bills.</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #dc2626; font-weight: 700; font-size: 1.1rem;">✗</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Personal Trekking Gear</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Down jacket, sleeping bag (-10°C rated), and hiking poles (quality rentals available in Kathmandu for ~$1.50/day).</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #dc2626; font-weight: 700; font-size: 1.1rem;">✗</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Tipping &amp; Gratuities</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Tips for the lead guide, porters, and 4WD driver (customary in Nepal trekking; recommended ~$100–$150 total).</p>
                </div>
              </div>

              <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #dc2626; font-weight: 700; font-size: 1.1rem;">✗</span>
                <div>
                  <strong style="color: #0f172a; display: block; margin-bottom: 4px; font-size: 0.95rem;">Unforeseen Delays &amp; Route Deviations</strong>
                  <p style="margin: 0; font-size: 0.85rem; color: #64748b; line-height: 1.5;">Costs resulting from natural disasters, road blockages, health emergencies, or personal schedule changes.</p>
                </div>
              </div>

            </div>
          </div>

          <!-- Booking & Deposit Policy Box -->
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 22px; font-size: 0.95rem; color: #166534; line-height: 1.6;">
            <h4 style="font-size: 1.1rem; font-weight: 700; color: #14532d; margin-top: 0; margin-bottom: 8px;">Transparent Booking, Deposit &amp; Rescheduling Terms</h4>
            <p style="margin-bottom: 10px;">
              We require a <strong>20% advance deposit</strong> to secure your trekking permit and vehicle reservations. The remaining balance can be comfortably paid upon arrival in Kathmandu via cash (USD, EUR, GBP, NPR) or credit card (+4% bank processing fee).
            </p>
            <p style="margin: 0;">
              <strong>100% Free Rescheduling:</strong> If your international travel plans change due to flights or personal reasons, you can reschedule your departure date free of charge up to 30 days before arrival.
            </p>
          </div>
        </section>
`;
}

module.exports = { getIncludesSection };

