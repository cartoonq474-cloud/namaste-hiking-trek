const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'trek', 'langtang-valley-trek', 'index.html');
let html = fs.readFileSync(targetPath, 'utf8');

// 1. UPDATE ALTITUDE PROFILE & WEATHER DATA-TREK-KEY
html = html.replace(/<div id="altitude-chart-wrapper" data-trek-key="[^"]*"><\/div>/, '<div id="altitude-chart-wrapper" data-trek-key="langtang"></div>');
html = html.replace(/<div id="weather-chart-wrapper" data-trek-key="[^"]*"><\/div>/, '<div id="weather-chart-wrapper" data-trek-key="langtang"></div>');

// 2. UPDATE EXPEDITION ROUTE INFORMATION TEXT
const oldRouteText = /The route commences with a flight into Lukla, following the Dudh Koshi river up to Namche Bazaar\. The path then continues through Tengboche, Dingboche, Lobuche, and Gorak Shep, concluding at the Khumbu Glacier base camp\./;
const newRouteText = `The route commences with a scenic overland drive from Kathmandu to Syabrubesi (1,420 m), the road gateway to Langtang National Park. Following the roaring Langtang Khola upstream, the trail ascends progressively through Bamboo (1,975 m), Lama Hotel (2,480 m), and Ghora Tabela (3,000 m), where the dense forest gives way to the open glacial valley at Langtang Village (3,430 m). The destination is Kyanjin Gompa (3,870 m), surrounded by dramatic 360-degree mountain amphitheaters beneath Langtang Lirung (7,245 m). Acclimatized hikers can ascend Kyanjin Ri (4,773 m) or Tserko Ri (4,984 m) for panoramic Himalayan vistas before retracing the route.`;

html = html.replace(oldRouteText, newRouteText);

// 3. UPDATE REVIEW STRINGS IN SECTION 11
html = html.replace(
  /Our Everest Base Camp trek with Namaste Hiking Trek went beyond every expectation we had\. What first pulled us towards them was their strict safety protocol and personal care\. From the landing at Lukla to reaching Everest Base Camp \(5,364m\) and Kala Patthar, Sagar and the team made sure we were comfortable, safe, and hydrated every single day!/g,
  'Our Langtang Valley trek with Namaste Hiking Trek went beyond every expectation we had. What first pulled us towards them was their strict safety protocol and personal care. From the scenic drive to Syabrubesi to reaching Kyanjin Gompa (3,870m) and summiting Kyanjin Ri for sunrise views over Langtang Lirung, our guide and the team made sure we were comfortable, safe, and well-acclimatized every single day!'
);

html = html.replace(
  /Booking Everest Base Camp through Namaste Hiking Trek was seamless\. Exceptional Sherpa guides and flawless logistics! From airport pickup to high altitude tea houses, every detail was handled professionally\./g,
  'Booking the Langtang Valley Trek through Namaste Hiking Trek was seamless. Exceptional local guides and flawless logistics! From airport pickup in Kathmandu to high altitude tea houses in Kyanjin Gompa, every detail was handled professionally.'
);

// 4. UPDATE SECTION 12: FAQS
const faqStart = html.indexOf('<section id="section-faqs" class="trek-detail-section">');
const faqEnd = html.indexOf('<!-- Sticky Booking Sidebar Column -->');

if (faqStart === -1 || faqEnd === -1) {
  console.error('Could not find FAQ boundaries!');
  process.exit(1);
}

const newFaqSection = `<section id="section-faqs" class="trek-detail-section">
            <h2 class="faq-section-accent-title">
              <span class="faq-accent-bar"></span>
              Frequently Asked Questions for Langtang Valley Trek
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
                  <h3 class="faq-active-category-title" id="faq-current-category-title">General Information</h3>
                  <button type="button" class="faq-expand-all-btn" id="faq-expand-all-btn">Expand All</button>
                </div>

                <!-- Category 1: General Information -->
                <div class="faq-category-content active" id="faq-cat-general">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>When is the best time to trek the Langtang Valley?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      The best times for the Langtang Valley Trek are Autumn (September to November) and Spring (March to May). Autumn brings stable, dry weather with crystal-clear panoramic visibility of Langtang Lirung and surrounding peaks. Spring offers comfortable daytime temperatures and spectacular blooming rhododendron forests.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>How long does the Langtang Valley Trek take?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Our comprehensive itinerary takes 14 calendar days round trip from Kathmandu. This includes international arrival/departure, Kathmandu sightseeing and preparation, overland transport to/from Syabrubesi, 8 days on the trail, 3 full nights at Kyanjin Gompa (3,870m) with dedicated acclimatization, and built-in buffer days in Kathmandu. Shorter 7 to 8-day options are also available as private departures.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>How does the Langtang Valley Trek compare to Everest or Annapurna?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Langtang is located just 130 km north of Kathmandu and is reached in 6–8 hours by road rather than weather-dependent flights to Lukla. It offers a more intimate, less crowded Himalayan trail, transitioning rapidly from lush subtropical and oak forests into a dramatic glacial amphitheater beneath 7,000-meter peaks.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Is the Langtang Valley Trek suitable for beginners?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Yes! Hikers with a reasonable level of physical fitness can complete the classic route to Kyanjin Gompa. It requires no technical climbing skills or glacier walking. Pacing is kept steady ('Bistari, Bistari'), and our 14-day schedule allows ample time to adjust to elevation.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What is the daily walking time and distance on the Langtang trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      On average, you walk 5 to 6 hours per day covering 8 to 12 kilometers (5–7.5 miles). The walk from Langtang Village to Kyanjin Gompa is shorter (3–4 hours) to assist acclimatization, while the optional day hike to Kyanjin Ri or Tserko Ri is 5 to 8 hours.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Can I trek the Langtang Valley solo?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Under current Nepal Tourism Board regulations, foreign trekkers are required to hike with a licensed guide in national parks. Solo travelers can easily book a private guided trek or join one of our small fixed group departures.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What are the top highlights of the Langtang Valley Trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Highlights include the road gateway at Syabrubesi, the forested gorge of the Langtang Khola, resilient Tamang mountain villages, the sacred monastery and yak cheese factory at Kyanjin Gompa (3,870m), and the 360-degree viewpoints from Kyanjin Ri (4,773m) and Tserko Ri (4,984m) looking directly at Langtang Lirung (7,245m) and Dorje Lakpa (6,989m).
                    </div>
                  </div>
                </div>

                <!-- Category 2: Permits and Logistics -->
                <div class="faq-category-content" id="faq-cat-permits">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What permits are required for the Langtang Valley Trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Two permits are required: the Langtang National Park Entry Permit (NPR 3,000 / ~USD 25) and the TIMS (Trekkers' Information Management System) Card (NPR 2,000 / ~USD 16). Both permits are arranged and fully included in your Namaste Hiking Trek package.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>How do we get to the trailhead at Syabrubesi?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      We travel overland from Kathmandu by private 4WD jeep or shared tourist vehicle along the Pasang Lhamu Highway via Trishuli and Dhunche. The drive takes approximately 6 to 8 hours and provides beautiful views of terraced hills and valleys.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What is the luggage allowance for porters on the Langtang trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      We assign one porter for every two trekkers, with a strict maximum weight limit of 20 kg total (10 kg / 22 lbs per person). We provide a complimentary durable waterproof duffle bag for your porter luggage. You carry your own small daypack (5–7 kg) with essentials.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Can I leave extra luggage in Kathmandu?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Yes. You can securely store your excess city clothes, suitcases, and non-trekking items for free in our Kathmandu office storage room until you return from the mountains.
                    </div>
                  </div>
                </div>

                <!-- Category 3: Accommodation and Food -->
                <div class="faq-category-content" id="faq-cat-accommodation">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What is teahouse accommodation like in the Langtang Valley?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Teahouses in Syabrubesi, Lama Hotel, Langtang Village, and Kyanjin Gompa provide private twin rooms with wooden beds, foam mattresses, pillows, and clean blankets. Bathrooms are shared, featuring a mix of Western sitting toilets and traditional squat toilets. There is no heating in private rooms, but dining halls are kept warm with central stoves.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Are hot showers and electricity charging available on the trail?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Yes, hot gas/solar showers are available at most lodges for an extra charge of NPR 300 to NPR 500 (USD 3–5). Electricity from solar or local micro-hydro allows device and power bank charging in the dining hall for NPR 200 to NPR 400 per device.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What kind of food is served on the trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Teahouse menus offer a varied selection of freshly cooked meals: Dal Bhat (lentil soup, rice, curry, and pickles with free refills), vegetable fried rice, noodles, pasta, momo dumplings, potato pancakes, porridge, toast, and eggs. We strongly recommend a vegetarian diet while in the mountains for hygiene.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Is drinking water safe along the trail?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      You should never drink untreated tap or stream water. We recommend bringing reusable water bottles or a hydration bladder, and treating water with purification tablets, water filter bottles (e.g. LifeStraw or Sawyer), or UV SteriPENs. Safe boiled water can also be purchased at all teahouses.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Can I buy fresh yak cheese in Kyanjin Gompa?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Yes! Kyanjin Gompa is home to Nepal's famous government-established yak cheese factory, producing delicious, organic mountain cheese made from local nak (female yak) milk. You can tour the facility and purchase fresh cheese directly.
                    </div>
                  </div>
                </div>

                <!-- Category 4: Health and Safety -->
                <div class="faq-category-content" id="faq-cat-health">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Is Altitude Mountain Sickness (AMS) a risk on the Langtang trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Yes, any trek above 2,500 meters carries a risk of AMS. The Langtang route reaches 3,870 m at Kyanjin Gompa and up to 4,984 m on viewpoint day. However, our itinerary gains elevation gradually and includes three nights at Kyanjin Gompa for acclimatization.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>How does Namaste Hiking Trek monitor trekker health?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Our certified guides carry medical pulse oximeters to check your blood oxygen saturation (SpO2) and heart rate every morning and evening. They are trained in wilderness first aid and altitude sickness management.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What happens if someone develops severe altitude sickness?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      If symptoms of severe AMS, HAPE, or HACE occur, the first and most vital treatment is immediate descent to lower elevation (such as Lama Hotel or Syabrubesi). In an emergency, our Kathmandu headquarters coordinates rapid helicopter evacuation directly from Kyanjin Gompa or Langtang Village.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Do I need travel insurance for the Langtang trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Yes, comprehensive travel and medical insurance is mandatory. Your policy must explicitly cover high-altitude mountain trekking up to 5,000 meters and emergency helicopter search and rescue evacuation.
                    </div>
                  </div>
                </div>

                <!-- Category 5: Payments & Extra Costs -->
                <div class="faq-category-content" id="faq-cat-payments">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Are there ATMs along the Langtang Valley trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      There are ATMs in Kathmandu and limited bank branches in Dhunche, but no reliable ATMs exist on the trail past Syabrubesi. You must bring sufficient Nepalese Rupee (NPR) cash from Kathmandu to cover personal expenses.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>How much personal spending money should I bring?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      We recommend budgeting approximately USD 15 to USD 25 (NPR 2,000–3,500) per person per day to cover hot showers, device charging, hot drinks, snacks, Wi-Fi cards, and tips.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What is the tipping custom for guides and porters in Nepal?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Tipping is customary and greatly appreciated by local staff. As a general benchmark, groups tip approximately 10% to 15% of the trip cost, distributed between the guide (around USD 100–140) and porter (around USD 70–100) on the last evening.
                    </div>
                  </div>
                </div>

                <!-- Category 6: Cultural Insights -->
                <div class="faq-category-content" id="faq-cat-cultural">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Who are the local people living in the Langtang Valley?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      The valley is inhabited predominantly by the Tamang community, alongside ethnic Tibetan Bhotia families. Their culture, dress, dialect, and architecture reflect rich Buddhist traditions dating back centuries.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What cultural customs should I observe on the trail?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Always walk to the left of Buddhist stupas, chortens, and mani walls so they remain on your right (clockwise). Remove your shoes when entering gompas and monasteries, dress modestly, do not touch religious artifacts, ask before photographing residents, and greet locals with 'Namaste' or 'Tashi Delek'.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

        </div>\n\n        `;

html = html.substring(0, faqStart) + newFaqSection + html.substring(faqEnd);
fs.writeFileSync(targetPath, html, 'utf8');
console.log('Sections 7, 8, 9, 11, 12 updated successfully! New length:', html.length);
