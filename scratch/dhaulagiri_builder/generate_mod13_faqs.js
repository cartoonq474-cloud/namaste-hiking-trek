// Generator for Module 13: Section 11 - FAQs for Dhaulagiri Circuit Trek
const fs = require('fs');

function buildFaqsModule() {
  const faqs = [
    // Category: Planning & Logistics
    {
      cat: "planning",
      q: "How many days are required for the complete Dhaulagiri Circuit Trek?",
      a: "Our comprehensive expedition package requires 20 calendar days from Kathmandu arrival to international departure. This includes 2 days of preparation and sightseeing in Kathmandu, 2 days overland approach (Beni/Babiyachaur), 13 active trekking days, 2 mandatory high-altitude acclimatization rest days (Italian Base Camp and Dhaulagiri Base Camp), a scenic mountain flight from Jomsom to Pokhara, and overland return to Kathmandu."
    },
    {
      cat: "planning",
      q: "What is the highest point reached on the Dhaulagiri Circuit?",
      a: "The highest daytime crossing is French Pass at 5,360 meters (17,585 ft), which connects the Chhonbardan Glacier moraine with Hidden Valley. The second major high pass is Dhampus Pass at approximately 5,200 to 5,250 meters. The highest scheduled overnight camp is in Hidden Valley at approximately 5,000 to 5,200 meters."
    },
    {
      cat: "planning",
      q: "What happens if the Jomsom to Pokhara flight is cancelled due to weather?",
      a: "Jomsom flights operate early in the morning before strong midday thermal winds develop in the Kali Gandaki Gorge. In the event of mountain weather delays or cancellations, Namaste Hiking Trek immediately initiates our overland backup plan by arranging private 4WD Scorpio vehicles to transport the group via Beni and Kushma to Pokhara. Our 20-day itinerary features built-in buffer time on Days 18 and 19 to protect your international flight connections."
    },
    {
      cat: "planning",
      q: "Which permits are required for the Dhaulagiri Circuit Trek?",
      a: "Three official permits are mandatory: 1) Annapurna Conservation Area Project (ACAP) permit, 2) Trekkers' Information Management System (TIMS) registration card, and 3) Myagdi Rural Municipality local entry registration. Namaste Hiking Trek arranges all documentation, fees, and government checkpoint registrations in advance."
    },

    // Category: Accommodation & Camping
    {
      cat: "accommodation",
      q: "What type of accommodation is provided during the expedition?",
      a: "The Dhaulagiri Circuit combines three styles of lodging: 3-star boutique hotels in Kathmandu and lakeside Pokhara (twin-sharing, breakfast included); basic village teahouses during the lower approach (Babiyachaur, Dharapani, Muri, Boghara, Dobang, Jomsom); and full expedition camping for 7+ consecutive nights in the remote alpine wilderness (Choriban Khola, Italian Base Camp, Glacier Camp, Dhaulagiri Base Camp, Hidden Valley, and Yak Kharka) using 4-season alpine tents with insulated foam and inflatable sleeping pads."
    },
    {
      cat: "accommodation",
      q: "What are the camping facilities and toilet arrangements in high camps?",
      a: "Our support crew establishes a self-contained camp at each wilderness site. This includes heavy-duty sleeping tents, a warm communal dining mess tent with camp chairs and tables, a kitchen tent, and a private toilet tent featuring a dug dry-pit system with clean soil covering. In sub-zero high camps, running water is unavailable; our crew provides basins of hot water for morning washing."
    },
    {
      cat: "accommodation",
      q: "What kind of food is served during the camping stages?",
      a: "Our professional expedition cooks prepare fresh, hot, and hygienic meals three times daily. Menus emphasize high carbohydrates and warmth: porridge, eggs, pancakes, and toast for breakfast; hot noodle soups, fried rice, pasta, or chapati with vegetables for lunch; and multi-course dinners including garlic soup, traditional Dal Bhat (lentil soup, rice, curries), Sherpa vegetable stews (Syakpa), momos, pasta, and canned fruits with hot tea, coffee, and lemon drinks."
    },
    {
      cat: "accommodation",
      q: "Can dietary restrictions (vegetarian, vegan, gluten-free) be accommodated?",
      a: "Yes, absolutely! Our expedition cooks are trained in catering to vegetarian, vegan, lactose-free, and gluten-free dietary requirements. Please notify us of your dietary preferences upon booking so our operations team can pack specialized rations in Kathmandu."
    },

    // Category: Health & Altitude Safety
    {
      cat: "health",
      q: "How does the itinerary prevent Acute Mountain Sickness (AMS)?",
      a: "Our 20-day itinerary incorporates a gradual 5-day lower-valley approach from 970 m to 2,520 m, followed by two mandatory acclimatization rest days: Day 11 at Italian Base Camp (3,660 m) and Day 14 at Dhaulagiri Base Camp (4,750 m). This gradual curve allows your body to produce more red blood cells and adapt. Our guides conduct twice-daily pulse oximetry checks and carry supplemental medical oxygen."
    },
    {
      cat: "health",
      q: "Should I take Diamox (Acetazolamide) during the trek?",
      a: "Diamox is widely recommended as a prophylactic to assist acclimatization by stimulating deeper breathing. A standard dosage of 125 mg to 250 mg twice daily is typically started 24 hours before ascending above 3,000 m (around Dobang or Choriban Khola). Consult your personal physician before departure. Diamox is a mild diuretic, so daily fluid intake should be increased to 4 liters."
    },
    {
      cat: "health",
      q: "What emergency protocols are in place if someone falls seriously ill?",
      a: "Our lead Sherpa guides are certified Wilderness First Responders equipped with comprehensive medical kits and a portable medical oxygen cylinder. In the event of severe AMS, HAPE, or HACE, the primary treatment is immediate descent. If life-threatening conditions arise, our guides activate an emergency satellite SOS beacon to dispatch an emergency rescue helicopter from Kathmandu or Pokhara."
    },
    {
      cat: "health",
      q: "Is emergency helicopter rescue insurance mandatory?",
      a: "Yes. All participants must provide proof of comprehensive travel insurance that explicitly covers high-altitude trekking and mountaineering up to 6,000 meters elevation, emergency medical treatments, and helicopter evacuation/rescue."
    },

    // Category: High Passes & Equipment
    {
      cat: "equipment",
      q: "Are crampons and ice axes required for French Pass and Dhampus Pass?",
      a: "Crampons or sturdy microspikes are mandatory for crossing French Pass (5,360 m) and Dhampus Pass (5,250 m). While technical climbing ropes and ice axes are typically not required during standard autumn conditions, early spring departures often encounter frozen snowfields and hard ice where microspikes or flexible 10-point crampons combined with alpine gaiters provide essential traction."
    },
    {
      cat: "equipment",
      q: "What temperature rating should my sleeping bag have?",
      a: "You need a genuine 4-season down sleeping bag rated to at least -15°C to -20°C (0°F to -4°F). Nighttime temperatures in Hidden Valley (5,200 m) routinely drop to -20°C. If you do not own a high-altitude sleeping bag or heavy down jacket, high-quality gear can be rented in Kathmandu through Namaste Hiking Trek for approximately USD $1/day per item."
    },
    {
      cat: "equipment",
      q: "What weight limit applies to luggage carried by porters?",
      a: "In strict compliance with International Porter Protection Group (IPPG) guidelines, each porter carries a maximum of 20 kg (divided between two trekkers, meaning a 10 kg limit per client's main duffel bag). You carry your own 30–35L daypack (approx. 5–7 kg) containing daily essentials: water bottles, thermos, rain jacket, warm fleece, gloves, sunscreen, personal medication, and camera."
    },
    {
      cat: "equipment",
      q: "How cold does it get on the Dhaulagiri Circuit?",
      a: "Temperatures vary widely across the 20 days. In the lower valleys (Beni to Boghara), daytime temperatures range from 18°C to 24°C. Above 3,500 m, daytime temperatures drop to 5°C to 12°C. At Dhaulagiri Base Camp, French Pass, and Hidden Valley, daytime temperatures hover around -2°C to 4°C with wind chill, while nighttime temperatures drop to -15°C to -22°C."
    },

    // Category: Payments & Booking
    {
      cat: "payments",
      q: "What is the group size and guide-to-client ratio?",
      a: "To ensure high wilderness safety and personalized care, our standard group departures are capped at a maximum of 10–12 trekkers. We maintain a high staff-to-client ratio: 1 Lead Sherpa Guide, 1 Assistant Guide for groups of 6+, 1 Expedition Cook, 2–3 Kitchen Helpers, and 1 Porter per 2 clients."
    },
    {
      cat: "payments",
      q: "Can solo travelers join a group departure?",
      a: "Yes! Solo travelers are welcome to join any of our guaranteed fixed group departures in autumn or spring. You will share a twin room in hotels/teahouses and a spacious two-person alpine tent at high camps with a fellow trekker of the same gender. Private single-room and single-tent supplements are also available upon request."
    },
    {
      cat: "payments",
      q: "How do I secure my booking and what are the payment terms?",
      a: "To confirm your reservation, a 20% deposit per person is required along with a copy of your passport and flight itinerary. The remaining 80% balance can be settled upon arrival in Kathmandu via credit card or cash (USD, EUR, GBP, AUD) during our pre-trek briefing before departure."
    },
    {
      cat: "payments",
      q: "What is the tipping standard for the expedition guide, cook, and porters?",
      a: "Tipping is a customary tradition in the Himalayas acknowledging the immense physical dedication of your support team. We recommend budgeting approximately $150 to $200 USD total per client. Tips are pooled collectively and distributed transparently to your guides, cooks, and porters during the celebratory farewell dinner in Jomsom."
    }
  ];

  let faqsHtml = '';
  faqs.forEach(f => {
    faqsHtml += `
              <div class="faq-item" data-category="${f.cat}">
                <button type="button" class="faq-question" onclick="toggleFaq(this)">
                  <span>${f.q}</span>
                  <span class="faq-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </span>
                </button>
                <div class="faq-answer">
                  <div class="faq-answer-inner">
                    <p>${f.a}</p>
                  </div>
                </div>
              </div>
`;
  });

  const code = `// Module 13: Section 11 - Frequently Asked Questions for Dhaulagiri Circuit Trek
function getFaqsSection() {
  return \`
        <!-- Section 11: FAQs -->
        <section id="section-faqs" class="trek-detail-section">
          <h2 class="faq-section-accent-title">
            <span class="faq-accent-bar"></span>
            Frequently Asked Questions for Dhaulagiri Circuit Trek
          </h2>

          <div class="faq-layout-container">
            <!-- Left Sidebar Category Navigation -->
            <div class="faq-sidebar-card">
              <div class="faq-category-nav">
                <button type="button" class="faq-category-btn active" data-category="all" onclick="filterFaqs('all', this)">
                  <span class="faq-cat-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                  </span>
                  All 20 FAQs
                </button>
                <button type="button" class="faq-category-btn" data-category="planning" onclick="filterFaqs('planning', this)">
                  <span class="faq-cat-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </span>
                  Planning &amp; Logistics
                </button>
                <button type="button" class="faq-category-btn" data-category="accommodation" onclick="filterFaqs('accommodation', this)">
                  <span class="faq-cat-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M13 21V11l6 3v7"/></svg>
                  </span>
                  Camping &amp; Food
                </button>
                <button type="button" class="faq-category-btn" data-category="health" onclick="filterFaqs('health', this)">
                  <span class="faq-cat-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </span>
                  Health &amp; Altitude Safety
                </button>
                <button type="button" class="faq-category-btn" data-category="equipment" onclick="filterFaqs('equipment', this)">
                  <span class="faq-cat-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l7 19-7-4-7 4 7-19z"/></svg>
                  </span>
                  Passes &amp; Equipment
                </button>
                <button type="button" class="faq-category-btn" data-category="payments" onclick="filterFaqs('payments', this)">
                  <span class="faq-cat-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                  </span>
                  Payments &amp; Booking
                </button>
              </div>

              <!-- Quick Assistance Contact Card -->
              <div class="faq-support-card">
                <span class="faq-support-label">Have More Questions?</span>
                <p class="faq-support-text">Our high-altitude expedition specialists are available 24/7 to assist with gear advice and custom departure planning.</p>
                <a href="https://wa.me/9779800000000" target="_blank" class="faq-support-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <!-- Right Content List of FAQ Accordions -->
            <div class="faq-content-column">
              <div class="faq-accordion-list">
${faqsHtml}
              </div>
            </div>
          </div>
        </section>
\`;
}

module.exports = { getFaqsSection };
`;

  fs.writeFileSync('scratch/dhaulagiri_builder/mod13_faqs.js', code, 'utf8');
  console.log('Successfully wrote scratch/dhaulagiri_builder/mod13_faqs.js');
}

buildFaqsModule();

