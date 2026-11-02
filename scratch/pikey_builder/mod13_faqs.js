// Module 13: Section 11 - Frequently Asked Questions (Two-Column Categorized Layout matching EBC)
const fs = require('fs');

function getFaqsSection() {
  const content = fs.readFileSync('scratch/pikey_builder/mod13_faqs.js', 'utf8');
  
  // Return the complete canonical HTML
  return `
        <!-- Section 11: FAQs -->
        <section id="section-faqs" class="trek-detail-section">
          <h2 class="faq-section-accent-title">
            <span class="faq-accent-bar"></span>
            Frequently Asked Questions for Pikey Peak Trek
          </h2>

          <div class="faq-layout-container">
            <!-- Left Sidebar Category Navigation -->
            <div class="faq-sidebar-card">
              <div class="faq-category-nav">
                <button type="button" class="faq-category-btn active" data-category="planning">
                  <span class="faq-cat-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </span>
                  Planning &amp; Logistics
                </button>
                <button type="button" class="faq-category-btn" data-category="accommodation">
                  <span class="faq-cat-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </span>
                  Lodging &amp; Food
                </button>
                <button type="button" class="faq-category-btn" data-category="safety">
                  <span class="faq-cat-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </span>
                  Fitness &amp; Safety
                </button>
                <button type="button" class="faq-category-btn" data-category="gear">
                  <span class="faq-cat-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                    </svg>
                  </span>
                  Gear &amp; Culture
                </button>
              </div>

              <!-- Need Help Box -->
              <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <p style="font-size: 0.85rem; color: #64748b; margin-bottom: 12px; line-height: 1.5;">Have more questions about the trek?</p>
                <button class="open-inquiry-btn" style="width: 100%; padding: 10px 16px; background: #0f172a; color: #ffffff; border: none; border-radius: 8px; font-weight: 600; font-size: 0.88rem; cursor: pointer; transition: background 0.2s ease;">Ask an Expert ↗</button>
              </div>
            </div>

            <!-- Right FAQ Content Panel -->
            <div class="faq-main-panel">
              <div class="faq-panel-header">
                <div class="faq-active-category-title" id="faq-current-category-title">Planning &amp; Logistics</div>
                <button type="button" class="faq-expand-all-btn" id="faq-expand-all-btn">Expand All</button>
              </div>

              <!-- Category 1: Planning & Logistics -->
              <div class="faq-category-content active" id="faq-cat-planning">
                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">How long is the Pikey Peak Trek?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    The standard itinerary is 9 calendar days from Kathmandu arrival to final departure. This includes 2 travel days by road (Kathmandu to Dhap Bazaar, and Phaplu back to Kathmandu) and 5 full days of walking on the trail through Jhapre, Pikey Base Camp, Jasmane Bhanjyang, Junbesi, and Phaplu.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">Why do we drive instead of fly to Lukla?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    Pikey Peak is located in the Lower Everest (Solukhumbu) region, accessible via the scenic paved BP Highway to Dhap Bazaar. Approaching by road avoids the frequent weather delays and flight cancellations associated with Lukla Airport while offering a gradual road ascent and stunning rural hill views.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">What permits are required and who arranges them?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    The trek requires two permits: the Solukhumbu Rural Municipality Entry Permit and the Trekkers' Information Management System (TIMS) Card. When booking an all-inclusive package with Namaste Hiking Trek, our team handles all paperwork and fees in advance in Kathmandu.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">What is the best month to trek Pikey Peak?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    October and November in autumn offer crystal-clear mountain visibility, dry trails, and golden fall foliage. March to May in spring features mild temperatures, blooming rhododendron forests, and vibrant Sherpa festivals. Winter (Dec–Feb) is clear but cold, while monsoon (Jun–Aug) brings rain and cloud cover.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">Can I trek solo or do I need a licensed guide?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    Under Nepal Tourism Board regulations, solo foreign trekkers must be accompanied by a licensed mountain guide. Beyond legal compliance, our local Sherpa guides provide indispensable navigation, cultural insights, emergency wilderness response, and lodge coordination.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">How do I confirm my booking and pay the deposit?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    You can reserve your departure date by paying a 20% refundable deposit via credit card, bank wire transfer, or online payment gateway. The remaining 80% balance is payable upon your arrival in Kathmandu before departing for the trail.
                  </div>
                </div>
              </div>

              <!-- Category 2: Lodging & Food -->
              <div class="faq-category-content" id="faq-cat-accommodation" style="display: none;">
                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">What are the mountain teahouses like on this route?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    Teahouses on the Pikey Peak route are family-run Sherpa lodges. Rooms are clean, twin-sharing with foam mattresses, pillows, and warm blankets (sleeping bags recommended). Common dining halls are heated in the evening with wood stoves, providing a cozy atmosphere for meals.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">What food and drinks are available on the trail?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    Menus feature nutritious, freshly prepared mountain staples including Dal Bhat (steamed rice, lentil soup, vegetables), Sherpa stew (Syakpa), Tibetan bread, Tsampa porridge, fried rice, noodle soups, potatoes, eggs, pancakes, and hot herbal teas.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">Can I charge my camera, phone, and power bank?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    Yes. Most lower lodges have hydroelectric or solar electricity in the dining hall. At higher camps (Pikey Base Camp), power is solar-dependent. Lodges may charge a small fee ($2–$4 USD) to recharge devices. Carrying a 10,000–20,000 mAh power bank is strongly advised.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">Is Wi-Fi or mobile cellular reception available?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    Ncell and Nepal Telecom (NTC) 4G coverage is available in Kathmandu, Dhap, Junbesi, and Phaplu. Along the high ridge and at Pikey Base Camp, signal can be intermittent. Some teahouses offer satellite or cellular Wi-Fi vouchers for a small fee.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">How do I obtain safe drinking water along the route?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    Never drink untreated tap or stream water. We encourage using reusable bottles with water purification tablets (Aquatabs / chlorine dioxide) or UV purifiers (SteriPEN). Boiled filtered water can also be purchased from teahouse kitchens for a small charge.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">Are hot showers available in the lodges?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    Gas geyser or solar-heated bucket showers are available at lodges in Dhap, Jhapre, Junbesi, and Phaplu (typically NPR 300–500 / $3–$4 USD). At Pikey Base Camp (3,640 m), running water is limited and wet wipes are recommended.
                  </div>
                </div>
              </div>

              <!-- Category 3: Fitness & Safety -->
              <div class="faq-category-content" id="faq-cat-safety" style="display: none;">
                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">How physically difficult is the Pikey Peak Trek?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    The trek is rated Moderate (Grade 3). You walk 5 to 7 hours daily covering 10–16 km with an average elevation gain of 500–800 m. The toughest section is the pre-dawn summit climb from Base Camp (3,640 m) to Pikey Peak (4,065 m), taking 2 to 2.5 hours on an uphill trail.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">Can beginners complete this trek successfully?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    Yes. Pikey Peak is an excellent entry-level Himalayan trek for reasonably fit beginners. No technical mountaineering skills, ropes, or crampons are required. Regular cardiovascular training (hiking, stairs, jogging) 4–6 weeks prior ensures comfort and endurance.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">What is the risk of altitude sickness at 4,065 meters?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    Acute Mountain Sickness (AMS) can occur above 2,500 m, but our itinerary features gradual elevation gains (Dhap 2,850m &bull; Jhapre 2,920m &bull; Base Camp 3,640m). We touch 4,065 m briefly for sunrise before descending to sleep lower at Jasmane Bhanjyang (3,550m), following the 'climb high, sleep low' rule.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">What medical facilities exist along the Solukhumbu route?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    Small health posts operate in Junbesi, and the Phaplu District Hospital offers physician care, x-rays, and basic emergency treatment. Our guides carry comprehensive first aid kits, pulse oximeters for daily oxygen checks, and are trained in high-altitude medicine.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">What happens if I get injured or cannot continue walking?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    For minor illness or fatigue, our guide can arrange a horse or pony in villages like Jhapre or Junbesi, or arrange road vehicle evacuation via jeep from Phaplu or Salleri. In a severe medical emergency, 24/7 helicopter evacuation to Kathmandu is coordinated immediately.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">What kind of travel and evacuation insurance do I need?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    You must obtain comprehensive travel medical insurance that explicitly covers high-altitude trekking up to 4,500 meters (15,000 ft) and emergency helicopter search, rescue, and repatriation. Bring a paper copy of your policy and emergency insurer hotline.
                  </div>
                </div>
              </div>

              <!-- Category 4: Gear & Culture -->
              <div class="faq-category-content" id="faq-cat-gear" style="display: none;">
                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">What essential clothing and gear should I bring?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    Key essentials include a 3-layer clothing system (merino base layers, fleece mid-layer, wind/waterproof hardshell), a warm down jacket (rated to -10°C), broken-in trekking boots, -10°C sleeping bag, trekking poles, polarized sunglasses, and a 300+ lumen headlamp.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">How much cash in Nepali Rupees should I carry?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    There are no ATMs along the trekking trail between Dhap and Phaplu (ATM available in Salleri/Phaplu only). We recommend withdrawing NPR 15,000 to 20,000 ($120–$160 USD) in Kathmandu for personal expenses such as hot showers, device charging, snacks, and tips.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">What is the customary tipping amount for guides and porters?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    Tipping is customary in Nepal to show appreciation for hard work. We recommend budgeting roughly $10–$15 USD per day for your guide and $7–$10 USD per day for your porter, usually handed in an envelope at the end of the trek in Phaplu or Kathmandu.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">What cultural etiquette should I follow when visiting monasteries?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    Always walk clockwise around Buddhist stupas, chortens, and mani stone walls. Remove your shoes and hat before entering monastery prayer halls (like Thupten Chholing), ask permission before taking photos of monks, and maintain a quiet, respectful demeanor.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">How much luggage can my porter carry for me?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    We adhere strictly to IPPG (International Porter Protection Group) ethical weight limits. Porters carry a maximum of 20–25 kg total, typically shared between 2 trekkers (10–12 kg per trekker in the main duffel bag). You carry only your personal daypack with water and layers.
                  </div>
                </div>

                <div class="faq-item">
                  <div class="faq-item-question">
                    <h3 class="faq-question-title">How cold does it get during the summit sunrise?</h3>
                    <span class="faq-toggle-circle">∨</span>
                  </div>
                  <div class="faq-item-answer">
                    During the 4:00 AM ascent to Pikey Peak (4,065 m), temperatures typically range between -5°C and 0°C (23°F to 32°F) in spring and autumn, and can drop to -12°C (10°F) in winter with windchill. Wearing a warm down jacket, thermal gloves, and windproof pants is essential.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
`;
}

module.exports = { getFaqsSection };
