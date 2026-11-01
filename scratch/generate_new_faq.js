const fs = require('fs');

function makeFaqItem(q, a) {
  return `                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>${q}</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      ${a}
                    </div>
                  </div>`;
}

// 1. General Information
const generalItems = [
  {
    q: "How long is this Everest Base Camp Trek?",
    a: "This package is 14 calendar days from Kathmandu arrival to final departure. Days 2–12 include walking and the two acclimatization hikes. Extra contingency days are outside the advertised schedule."
  },
  {
    q: "How high are Everest Base Camp and Kala Patthar?",
    a: "Everest Base Camp is approximately 5,364 m. The itinerary uses approximately 5,545 m for Kala Patthar, its highest scheduled viewpoint. Gorak Shep, around 5,164 m, is the highest overnight stop."
  },
  {
    q: "Can I see Everest from Base Camp?",
    a: "Base Camp does not provide the classic unobstructed summit panorama. Kala Patthar is the main viewpoint included for the familiar Everest perspective, when conditions permit."
  },
  {
    q: "Can a beginner do this trek?",
    a: "A well-prepared beginner may be suitable. You need endurance for consecutive mountain days, realistic expectations about teahouses and cold, and a willingness to follow the acclimatization plan. Discuss your readiness with the team."
  },
  {
    q: "Do I need climbing experience?",
    a: "The standard route is a non-technical trek. It does not include rope climbing or technical glacier travel. High altitude and sustained walking still make it demanding."
  },
  {
    q: "Can I book a private trek or join as a solo traveler?",
    a: "Yes, the supplied article describes group and private guided arrangements. Confirm the price, departure status and any supplement, particularly if nobody else books the date."
  },
  {
    q: "When should I go?",
    a: "Spring and autumn are the main planning choices. Your preferred scenery, tolerance for cold, crowd preference and flight flexibility determine the most suitable departure."
  },
  {
    q: "Can children or older adults join?",
    a: "Suitability is individual. Health, preparation, previous altitude experience, ability to report symptoms and itinerary flexibility matter more than age alone. Discuss family or senior requirements before booking."
  },
  {
    q: "Can I add Gokyo, a peak climb or more time in Nepal?",
    a: "Yes, the article describes those options, but mountain extensions need a revised itinerary and peak climbs need separate climbing arrangements. Keep a flight buffer before fixed onward travel."
  },
  // Retained helpful extras
  {
    q: "What is the daily hiking distance and hours during the trek to Everest Base Camp?",
    a: "On average, trekkers walk 5 to 7 hours per day covering approximately 10 to 15 kilometers (6-9 miles). Pacing is kept slow and steady (\"Bistari Bistari\") to help acclimatization."
  },
  {
    q: "What are the highlights of the Everest Base Camp trek (besides Everest)?",
    a: "Highlights include landing at Lukla Airport, exploring the vibrant Sherpa capital Namche Bazaar, visiting Tengboche Monastery, standing on Kala Patthar (5,545m) for panoramic sunrise views of Mt. Everest, and crossing high suspension bridges decorated with prayer flags."
  },
  {
    q: "Do I need to book the Everest Base Camp trek in advance?",
    a: "Yes, we strongly recommend booking 2 to 4 months in advance, especially for Spring and Autumn departures, to secure domestic flight tickets to Lukla and high-quality teahouse accommodations."
  },
  {
    q: "What fitness level is required for the Everest Base Camp trek?",
    a: "A moderate to strong level of cardiovascular fitness is recommended. Regular exercise such as stair climbing, jogging, swimming, or weekend hikes carrying a 5-7kg daypack for 2-3 months prior to your trip is ideal preparation."
  }
];

// 2. Permits and Logistics
const permitsItems = [
  {
    q: "Is a guide included, and what about permits?",
    a: "The source package includes a licensed guide and applicable permits. NTB’s published revised route list includes EBC under its guide/TIMS provisions, and Khumbu operates local registration. Confirm the exact documents in your booking."
  },
  {
    q: "Will I fly from Kathmandu or Ramechhap?",
    a: "The departure airport depends on the operating arrangements for your dates. The team should confirm the airport, pickup and transfer plan before the flight day."
  },
  {
    q: "What happens if the Lukla flight is delayed?",
    a: "The team reviews rebooking and itinerary options according to actual conditions. Extra nights or replacement transport may cost more. Confirm the delay policy and leave contingency time."
  },
  {
    q: "How much luggage can my porter carry?",
    a: "The draft describes about 20 kg per porter and a common shared arrangement for two trekkers. Confirm your personal allowance, the crew’s equipment allowance and the exact ratio in writing; do not treat the maximum as a packing target."
  },
  {
    q: "What should stay in my daypack?",
    a: "Water, snacks, warm and waterproof layers, sun protection, headlamp, essential medication, passport, money, electronics and other items you need before the next lodge. Your porter may be walking ahead."
  },
  {
    q: "Can I return by helicopter?",
    a: "A separately arranged helicopter return may shorten the descent. Confirm the price, pickup, baggage and weather backup. It does not remove the need to acclimatize on the ascent."
  },
  {
    q: "What should I confirm before booking?",
    a: "The exact itinerary, group/private basis, guide and porter arrangement, permits, flights, accommodation, meals, live price, deposit, exclusions, cancellation terms, emergency support and delay-related costs."
  },
  // Retained helpful extra
  {
    q: "What is the luggage weight limit for Lukla flights?",
    a: "Domestic flights to Lukla strictly enforce a 15 kg (33 lbs) total weight limit per person (10 kg duffel bag + 5 kg hand carry daypack). Excess weight incurs extra charges or may be restricted."
  }
];

// 3. Accommodation and Food
const accommodationItems = [
  {
    q: "What accommodation should I expect?",
    a: "Kathmandu hotels and mountain teahouses, normally twin-sharing. Facilities become more basic higher up, and a private room or attached bathroom is not guaranteed at every stop."
  },
  {
    q: "Are meals included, and can I eat vegetarian food?",
    a: "The standard source package includes breakfast, lunch and dinner during trekking. Vegetarian dishes are common. Declare allergies, vegan requirements and other restrictions beforehand; menu choice and preparation vary."
  },
  {
    q: "How do I manage drinking water?",
    a: "Use treated water and a suitable purification method. Reusable bottles are practical. Ask about local boiled or filtered water and its cost, and protect bottles from freezing higher up."
  },
  {
    q: "Will Wi-Fi, charging and hot showers be available?",
    a: "They may be available for additional fees at some lodges, but service and reliability vary. Carry a power bank and download essential information offline."
  }
];

// 4. Health and Safety
const healthItems = [
  {
    q: "Why are there two acclimatization days?",
    a: "The Namche and Dingboche stops allow time to adapt and usually include a controlled hike followed by a return to the same sleeping elevation. They should not be removed simply to shorten the trip."
  },
  {
    q: "What if I develop altitude symptoms?",
    a: "Tell your guide immediately and do not continue ascending with symptoms. The response may include rest, assessment, descent and medical care. Severe or worsening symptoms need urgent help."
  },
  {
    q: "What insurance should I arrange?",
    a: "Check that your policy covers the actual planned trekking altitude, medical treatment and appropriate helicopter evacuation. Review exclusions, pre-existing conditions and the authorization procedure directly with your insurer."
  },
  {
    q: "Is helicopter evacuation guaranteed?",
    a: "No. Medical need, weather, daylight, aircraft availability and suitable landing conditions affect evacuation. Insurance coverage does not guarantee an aircraft can operate immediately."
  }
];

// 5. Payments & Extra Costs
const paymentItems = [
  {
    q: "How should I handle cash and tipping?",
    a: "Prepare Nepali rupees in Kathmandu, with smaller notes and an emergency reserve. Ask for current crew tipping guidance and clarify group distribution. Mountain ATMs and card payments should not be your main plan."
  },
  // Retained helpful extras
  {
    q: "What extra personal expenses should I budget for?",
    a: "You should budget $15 to $25 USD per day for personal items such as device charging ($2-$5), hot showers ($3-$5), Wi-Fi scratch cards ($3-$5), soft drinks/snacks, and guide/porter tipping."
  },
  {
    q: "How much deposit is required to confirm booking?",
    a: "We require a 20% advance deposit to secure your flights, permits, and guides. The remaining balance can be paid upon arrival in Kathmandu via cash (USD/NPR) or credit card."
  }
];

// 6. Cultural Insights
const culturalItems = [
  {
    q: "What cultural customs should I observe in the Khumbu region?",
    a: "Always pass mani stones, chortens, and prayer wheels clockwise (keeping them on your right). Remove shoes before entering Buddhist monasteries, ask permission before taking photos of locals, and greet people with \"Namaste\"."
  }
];

// Build Section HTML
const faqSectionHtml = `      <!-- Section 9: FAQs -->
          <section id="section-faqs" class="trek-detail-section">
            <h2 class="faq-section-accent-title">
              <span class="faq-accent-bar"></span>
              Frequently Asked Questions for Everest Base Camp Trek
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
                    Permits and Logistic
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
${generalItems.map(it => makeFaqItem(it.q, it.a)).join('\n\n')}
                </div>

                <!-- Category 2: Permits and Logistic -->
                <div class="faq-category-content" id="faq-cat-permits">
${permitsItems.map(it => makeFaqItem(it.q, it.a)).join('\n\n')}
                </div>

                <!-- Category 3: Accommodation and Food -->
                <div class="faq-category-content" id="faq-cat-accommodation">
${accommodationItems.map(it => makeFaqItem(it.q, it.a)).join('\n\n')}
                </div>

                <!-- Category 4: Health and Safety -->
                <div class="faq-category-content" id="faq-cat-health">
${healthItems.map(it => makeFaqItem(it.q, it.a)).join('\n\n')}
                </div>

                <!-- Category 5: Payments & Extra Costs -->
                <div class="faq-category-content" id="faq-cat-payments">
${paymentItems.map(it => makeFaqItem(it.q, it.a)).join('\n\n')}
                </div>

                <!-- Category 6: Cultural Insights -->
                <div class="faq-category-content" id="faq-cat-cultural">
${culturalItems.map(it => makeFaqItem(it.q, it.a)).join('\n\n')}
                </div>

              </div>
            </div>
          </section>`;

fs.writeFileSync('scratch/generated_faq_section.html', faqSectionHtml, 'utf8');
console.log('Successfully generated scratch/generated_faq_section.html');
console.log('Length:', faqSectionHtml.length);

// Generate JSON-LD schema with all 25 FAQs
const all25Faqs = [
  ...generalItems.slice(0, 9),
  ...permitsItems.slice(0, 7),
  ...accommodationItems,
  ...healthItems,
  paymentItems[0]
];

console.log('Total 25 FAQs for schema:', all25Faqs.length);

const schemaMainEntity = all25Faqs.map(f => ({
  "@type": "Question",
  "name": f.q,
  "acceptedAnswer": {
    "@type": "Answer",
    "text": f.a
  }
}));

fs.writeFileSync('scratch/generated_faq_schema.json', JSON.stringify(schemaMainEntity, null, 2), 'utf8');
console.log('Successfully generated scratch/generated_faq_schema.json');
