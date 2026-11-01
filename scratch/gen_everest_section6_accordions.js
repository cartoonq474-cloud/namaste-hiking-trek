// scratch/gen_everest_section6_accordions.js
module.exports = function getSection6Accordions() {
  return `        <!-- SECTION 6: PRACTICAL GUIDANCE ACCORDIONS -->
        <section id="section-details" class="trek-detail-section scroll-mt-36">
          <div class="border-b border-gray-200 pb-4 mb-8">
            <span class="text-emerald-700 text-xs font-bold uppercase tracking-wider">Expert Trail Guide</span>
            <h2 class="text-2xl sm:text-3xl font-heading font-bold text-primary-navy mt-1">
              Read Before You Book: Everest View Trek Practical Guide
            </h2>
            <div class="w-16 h-1 bg-amber-500 rounded-full mt-3"></div>
          </div>

          <p class="text-gray-700 text-base leading-relaxed mb-6">
            Detailed, verified operational guidance covering logistics, physiology, seasonal shifts, local culture, and trail safety. Click each topic below to expand.
          </p>

          <!-- Reading Progress Bar -->
          <div class="w-full bg-gray-200 h-1.5 rounded-full mb-8 overflow-hidden">
            <div id="accordion-progress" class="bg-emerald-700 h-full w-0 transition-all duration-300"></div>
          </div>

          <!-- 21 Accordion Items -->
                    <!-- Guidance Search and Category Filter -->
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 24px;">
            <div style="position: relative; margin-bottom: 12px;">
              <input type="text" id="guidance-search-input" placeholder="Type to search all 21 guide topics (e.g. luggage, altitude, wifi, shower, charging, permits, tips)..." style="width: 100%; padding: 11px 16px 11px 40px; border: 1.5px solid #CBD5E1; border-radius: 8px; font-size: 0.92rem; outline: none; transition: border-color 0.2s; background: #ffffff;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2" style="position: absolute; left: 13px; top: 50%; transform: translateY(-50%);"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                <button type="button" class="guide-filter-btn active" data-guide-filter="all" style="padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 700; background: #008060; color: #ffffff; border: none; cursor: pointer;">All Guides (21)</button>
                <button type="button" class="guide-filter-btn" data-guide-filter="logistics" style="padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; background: #ffffff; color: #475569; border: 1px solid #CBD5E1; cursor: pointer;">Logistics &amp; Flights</button>
                <button type="button" class="guide-filter-btn" data-guide-filter="health" style="padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; background: #ffffff; color: #475569; border: 1px solid #CBD5E1; cursor: pointer;">Health &amp; Altitude</button>
                <button type="button" class="guide-filter-btn" data-guide-filter="teahouse" style="padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; background: #ffffff; color: #475569; border: 1px solid #CBD5E1; cursor: pointer;">Teahouse Living</button>
                <button type="button" class="guide-filter-btn" data-guide-filter="permits" style="padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; background: #ffffff; color: #475569; border: 1px solid #CBD5E1; cursor: pointer;">Permits &amp; Money</button>
              </div>
              <button type="button" id="toggle-all-guidance" style="background: none; border: 1px solid #CBD5E1; color: #0C2B4E; padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 700; cursor: pointer;">Expand All</button>
            </div>
          </div>
          <div class="space-y-4" id="details-accordion-group">
            
            <!-- Accordion 1 -->
            <div class="guidance-card border border-gray-200" data-guide-category="teahouse" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
                  <span>Accommodation Along the Trail: Teahouses, Mountain Lodges & Room Amenities</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  Staying in mountain teahouses is an integral part of the Everest View Trek. These locally operated lodges provide accommodation and meals along the route, allowing travelers to spend several days exploring the region without carrying camping equipment.
                </p>
                <p>
                  Rooms are generally simple and functional, with arrangements usually consisting of twin-sharing wooden beds with mattresses, pillows, and clean blankets. In popular settlements such as Namche Bazaar, lodges often feature slightly more developed amenities than in smaller villages, including some rooms with attached private bathrooms (subject to availability).
                </p>
                <p>
                  The communal dining room is the social centerpiece in the evening. Trekkers gather to enjoy warm meals, chat around the central wood- or yak-dung-heated stove, and prepare for the next morning. Heating is confined to the dining hall; bedrooms are unheated, so packing a 4-season sleeping bag ensures warmth during cold nights.
                </p>
              </div>
            </div>

            <!-- Accordion 2 -->
            <div class="guidance-card border border-gray-200" data-guide-category="teahouse" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
                  <span>Available Food, Nutrition & Dining Options on the Khumbu Route</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  Food is a cornerstone of the trekking experience. Teahouses along the Everest View route offer menus that blend hearty Nepali staples with familiar international dishes.
                </p>
                <p>
                  The premier choice is traditional Nepali <strong>Dal Bhat</strong>—a nutrient-rich platter of steamed rice, lentil soup, spiced vegetable curry, greens, and pickles. It is prepared fresh and comes with complimentary second servings, making it the most energizing meal for sustained walking.
                </p>
                <p>
                  Other lodge offerings include fried noodles (chow mein), vegetable momos (dumplings), fried rice, potato dishes (boiled, baked, or rosti-style), vegetable soups, garlic soup (renowned locally for acclimatization), porridge, pancakes, toast, and eggs. Travelers with dietary preferences (vegetarian, vegan, gluten-free) are readily accommodated.
                </p>
              </div>
            </div>

            <!-- Accordion 3 -->
            <div class="guidance-card border border-gray-200" data-guide-category="teahouse" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
                  <span>Best Time to Trek: Seasonal Weather Breakdown</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  Spring (March to May) and Autumn (September to November) are the two premier trekking seasons for the Everest View Trek:
                </p>
                <ul class="list-disc pl-5 space-y-1">
                  <li><strong>Spring (March–May):</strong> Features warming temperatures, longer daylight hours, and vivid rhododendron and magnolia blooms across the lower valleys between Lukla and Namche. April is widely favored for pleasant walking temperatures.</li>
                  <li><strong>Autumn (September–November):</strong> Offers the cleanest atmospheric clarity following the monsoon rains. October and November provide sharply defined mountain panoramas and crisp blue skies, making it the top season for photographers.</li>
                  <li><strong>Winter (December–February):</strong> Features quiet trails and crystal clear days, but cold mornings and nights (-10°C to -15°C) require heavyweight thermal insulation.</li>
                  <li><strong>Monsoon (June–August):</strong> Brings summer rain, cloudy skies, slippery trails, and higher risk of Lukla flight delays. Not recommended for panoramic sightseeing.</li>
                </ul>
              </div>
            </div>

            <!-- Accordion 4 -->
            <div class="guidance-card border border-gray-200" data-guide-category="teahouse" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">4</span>
                  <span>A Typical Day on the Everest View Trek: Daily Rhythm & Pacing</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  A standard trekking day follows an energizing, predictable mountain rhythm designed to maximize daylight and walking comfort:
                </p>
                <p>
                  <strong>6:30 AM – 7:30 AM:</strong> Wake up, pack your main duffle bag for porters, and enjoy a warm breakfast in the teahouse dining room (porridge, eggs, toast, tea).
                </p>
                <p>
                  <strong>7:45 AM – 8:00 AM:</strong> Hit the trail while mountain skies are freshest. Walk for 3 to 4 hours at a steady, rhythmic pace with periodic photography and water breaks.
                </p>
                <p>
                  <strong>12:00 PM – 1:00 PM:</strong> Stop at a scenic trailside lodge for a freshly prepared hot lunch (dal bhat, noodles, soup).
                </p>
                <p>
                  <strong>1:00 PM – 3:30 PM:</strong> Complete the afternoon walking stage, arriving at the scheduled overnight teahouse. Check into your room, change into warm, dry camp clothing, and relax.
                </p>
                <p>
                  <strong>6:30 PM – 8:30 PM:</strong> Enjoy a hearty dinner, daily pulse oximeter briefing with your guide, review the next day's route, read, and head to bed for restful sleep.
                </p>
              </div>
            </div>

            <!-- Accordion 5 -->
            <div class="guidance-card border border-gray-200" data-guide-category="teahouse" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">5</span>
                  <span>Permits & Regulations: Sagarmatha National Park & Khumbu Entry</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  Two government permits are legally required for the Everest View Trek:
                </p>
                <ol class="list-decimal pl-5 space-y-2">
                  <li><strong>Sagarmatha National Park Entry Permit:</strong> Managed by the Department of National Parks and Wildlife Conservation (DNPWC). The fee is NPR 3,000 per person (~USD 23) plus 13% VAT, checked at the Monjo park entrance.</li>
                  <li><strong>Khumbu Pasang Lhamu Rural Municipality Entry Permit:</strong> Issued directly by the local government at Lukla to fund regional infrastructure, emergency healthcare, and trail maintenance. Cost is NPR 3,000 per person (~USD 23).</li>
                </ol>
                <p>
                  Both permits and all processing paperwork are fully included in our package. Your guide carries the documents and handles registration at every checkpoint.
                </p>
              </div>
            </div>

            <!-- Accordion 6 -->
            <div class="guidance-card border border-gray-200" data-guide-category="teahouse" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">6</span>
                  <span>Acclimatization Strategy: Why Namche Bazaar (3,440 m) is Critical</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  At Namche Bazaar (3,440 m), atmospheric pressure is approximately 68% of sea level. Between Phakding (2,610 m) and Namche, you gain 830 meters of sleeping altitude in a single day.
                </p>
                <p>
                  Our itinerary schedules three consecutive nights in Namche Bazaar (Days 2, 3, and 4). Day 3 is dedicated to gentle exploration and physical adaptation, allowing your respiratory and circulatory systems to increase red blood cell production before ascending to the 3,880 m viewpoint at Hotel Everest View on Day 4.
                </p>
                <p>
                  By returning to sleep at Namche on Day 4, the itinerary strictly follows the proven mountaineering rule of "climb high, sleep low", drastically minimizing the risk of altitude sickness.
                </p>
              </div>
            </div>

            <!-- Accordion 7 -->
            <div class="guidance-card border border-gray-200" data-guide-category="teahouse" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">7</span>
                  <span>Difficulty, Fitness Level & 6-Week Physical Training Plan</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 border-t border-gray-100 pt-4 hidden">
                <p>
                  The Everest View Trek is rated <strong>moderate</strong>. It follows well-trodden stone trails and involves no technical climbing or glacier crossing. However, the sustained 830 m climb to Namche Bazaar and the 5–7 hour excursion day to Hotel Everest View require good cardiovascular endurance, strong leg muscles, and joint resilience.
                </p>
                <p>
                  We recommend starting a targeted preparation routine 6 to 8 weeks before departure:
                </p>
                <div class="table-responsive">
                  <table class="custom-trek-table">
                    <thead>
                      <tr>
                        <th>Training Period</th>
                        <th>Main Focus</th>
                        <th>Suggested Activities</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Week 1</strong></td>
                        <td>Establish Routine</td>
                        <td>Brisk walking (30–45 min), light bodyweight squats, gentle stair climbing.</td>
                      </tr>
                      <tr>
                        <td><strong>Week 2</strong></td>
                        <td>Build Endurance</td>
                        <td>Longer walks (45–60 min), cycling or swimming, basic core exercises.</td>
                      </tr>
                      <tr>
                        <td><strong>Week 3</strong></td>
                        <td>Introduce Incline</td>
                        <td>Incline treadmill walking, stair climbing (15–20 floors), 2-hour weekend outdoor hike.</td>
                      </tr>
                      <tr>
                        <td><strong>Week 4</strong></td>
                        <td>Increase Duration</td>
                        <td>Hilly walks, step-ups on benches, 3-hour hike with a 5 kg loaded daypack.</td>
                      </tr>
                      <tr>
                        <td><strong>Week 5</strong></td>
                        <td>Consecutive Days</td>
                        <td>Successive weekend hikes (3–4 hours each day) to simulate multi-day trail recovery.</td>
                      </tr>
                      <tr>
                        <td><strong>Week 6</strong></td>
                        <td>Taper & Rest</td>
                        <td>Comfortable, light walks, stretching, gear testing, and adequate sleep.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Accordion 8 -->
            <div class="guidance-card border border-gray-200" data-guide-category="health" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">8</span>
                  <span>Cultural Insights of the Khumbu: Sherpa Traditions & Heritage</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  The Khumbu is the sacred ancestral homeland of the Sherpa people, who migrated from eastern Tibet over five centuries ago. Their Tibetan Buddhist spirituality permeates every aspect of mountain life.
                </p>
                <p>
                  Along the trail, you will encounter <em>mani walls</em> (long stone structures intricately carved with the sacred mantra <em>Om Mani Padme Hum</em>), whitewashed <em>chortens</em> (stupas), and fluttering prayer flags positioned on high ridges and bridges to disperse blessings on the wind. Always pass religious monuments on your left (clockwise).
                </p>
                <p>
                  In Khumjung village, you can visit the local monastery housing a revered Yeti scalp artifact, and see the Khumjung Hillary School founded in 1961 by Sir Edmund Hillary, which transformed education for Sherpa children.
                </p>
              </div>
            </div>

            <!-- Accordion 9 -->
            <div class="guidance-card border border-gray-200" data-guide-category="health" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">9</span>
                  <span>Route Overview & Elevation Progression: From Lukla to Hotel Everest View</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  The route begins with a flight from Kathmandu (1,400 m) to Lukla (2,860 m). Day 1 features a gentle net descent of 250 m down the valley to Phakding (2,610 m), providing an easy physical introduction.
                </p>
                <p>
                  Day 2 is the primary climbing stage, gaining approximately 830 meters up to Namche Bazaar (3,440 m). The route crosses suspension bridges over the Dudh Koshi, passes Monjo, and ascends sustained forest switchbacks.
                </p>
                <p>
                  Day 4 features a 440 m climb up to Hotel Everest View (3,880 m), with side trails winding through Khumjung (3,790 m) and Khunde (3,840 m) before descending back to Namche. Days 5 and 6 retrace the trail back down to Phakding and Lukla.
                </p>
              </div>
            </div>

            <!-- Accordion 10 -->
            <div class="guidance-card border border-gray-200" data-guide-category="health" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">10</span>
                  <span>Lukla Flight Logistics: Kathmandu vs. Ramechhap Operations & Buffer Days</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  During peak trekking seasons (April–May and October–November), the Civil Aviation Authority of Nepal (CAAN) often reroutes Lukla flights through Manthali Airport in Ramechhap to avoid Kathmandu air traffic congestion.
                </p>
                <p>
                  When Ramechhap flights are mandated, we provide comfortable private road transport departing Kathmandu at approximately 1:30 AM to 2:00 AM for the 4 to 5-hour drive to Manthali, ensuring you catch early morning flights to Lukla.
                </p>
                <p>
                  Mountain weather at Lukla can change rapidly, and flights are operated strictly under Visual Flight Rules (VFR). We strongly recommend maintaining at least one buffer day in Kathmandu after Day 7 before departing on your international flight.
                </p>
              </div>
            </div>

            <!-- Accordion 11 -->
            <div class="guidance-card border border-gray-200" data-guide-category="logistics" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">11</span>
                  <span>High-Altitude Illness (AMS, HACE, HAPE): Early Warning Signs</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 border-t border-gray-100 pt-4 hidden">
                <p>
                  Acute Mountain Sickness (AMS) can affect anyone above 2,500 meters, regardless of physical fitness or past trekking experience. Recognizing early symptoms is critical to prevent severe complications:
                </p>
                <div class="table-responsive">
                  <table class="custom-trek-table">
                    <thead>
                      <tr>
                        <th>Symptom</th>
                        <th>What It Feels Like</th>
                        <th>Recommended Response</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Headache</strong></td>
                        <td>Persistent dull ache, throbbing at temples after ascent.</td>
                        <td>Inform guide promptly; hydrate, take paracetamol, assess other signs.</td>
                      </tr>
                      <tr>
                        <td><strong>Nausea / Appetite Loss</strong></td>
                        <td>Queasy stomach, reluctance to eat nutritious meals.</td>
                        <td>Rest, stop exertion, drink warm ginger tea and electrolytes.</td>
                      </tr>
                      <tr>
                        <td><strong>Dizziness / Fatigue</strong></td>
                        <td>Lightheadedness, disproportionate exhaustion while walking.</td>
                        <td>Halt climbing; monitor pulse oximeter SpO2; do not ascend higher.</td>
                      </tr>
                      <tr>
                        <td><strong>Insomnia</strong></td>
                        <td>Difficulty sleeping or irregular breathing while resting.</td>
                        <td>Stay calm; avoid alcohol and sleeping pills; notify guide.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p class="text-xs text-red-600 font-semibold">
                  Severe warning signs such as confusion, loss of coordination (ataxia), persistent cough with pink sputum, or severe breathlessness at rest represent medical emergencies (HACE/HAPE) requiring immediate descent and evacuation.
                </p>
              </div>
            </div>

            <!-- Accordion 12 -->
            <div class="guidance-card border border-gray-200" data-guide-category="logistics" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">12</span>
                  <span>Comparing Everest View Trek vs. Everest Base Camp Trek</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  While both treks share the initial Lukla–Namche trail, they serve distinct travel goals:
                </p>
                <ul class="list-disc pl-5 space-y-1">
                  <li><strong>Duration:</strong> Everest View Trek takes 7 route days; EBC requires 12 to 14 days.</li>
                  <li><strong>Maximum Elevation:</strong> Everest View peaks at ~3,880 m at Hotel Everest View; EBC reaches 5,364 m at Base Camp and 5,545 m at Kala Patthar.</li>
                  <li><strong>Overnight Staging:</strong> Everest View never sleeps above 3,440 m; EBC requires multiple nights between 4,300 m and 5,160 m (Gorak Shep) in sub-zero lodge conditions.</li>
                  <li><strong>Mountain Views:</strong> Hotel Everest View offers wide panoramic angles of Everest, Lhotse, Nuptse, and Ama Dablam; ironically, from EBC itself, Mount Everest's peak is blocked by the Nuptse ridge.</li>
                </ul>
              </div>
            </div>

            <!-- Accordion 13 -->
            <div class="guidance-card border border-gray-200" data-guide-category="logistics" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">13</span>
                  <span>Drinking Water Safety, Purification & Hydration Guidelines</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  Staying hydrated is essential for acclimatization. Trekkers should aim to drink 3 to 4 liters of clean fluids daily (water, clear soups, herbal tea).
                </p>
                <p>
                  Never drink untreated tap or stream water. Single-use plastic bottles are restricted in Sagarmatha National Park. Carry two 1-liter reusable wide-mouth bottles (such as Nalgene) and treat tap water using chlorine dioxide purification tablets or a UV purifier (SteriPEN).
                </p>
                <p>
                  Boiled drinking water is also available for purchase at all teahouses (approx. NPR 200–400 per liter).
                </p>
              </div>
            </div>

            <!-- Accordion 14 -->
            <div class="guidance-card border border-gray-200" data-guide-category="logistics" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">14</span>
                  <span>Electricity, Device Charging & Internet/Wi-Fi Availability</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  Electricity along the trail is generated through local hydroelectricity and solar power:
                </p>
                <p>
                  <strong>Device Charging:</strong> Available in lodge dining rooms. Teahouses charge a small fee per device or power bank (approx. NPR 200 to NPR 400 / USD 2–$4). Bring a 10,000–20,000 mAh power bank to keep your phone and camera charged.
                </p>
                <p>
                  <strong>Internet / Wi-Fi:</strong> Most teahouses in Phakding and Namche Bazaar offer Wi-Fi via Everest Link prepaid cards (approx. USD 5 for 10 GB to 20 GB). Cellular 4G data coverage through Ncell and Nepal Telecom (NTC) is also available in most sections up to Namche.
                </p>
              </div>
            </div>

            <!-- Accordion 15 -->
            <div class="guidance-card border border-gray-200" data-guide-category="logistics" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">15</span>
                  <span>Toilets, Hot Showers & Hygiene Standards on the Trail</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  Teahouse bathrooms feature a mix of western-style sit-down toilets and traditional Asian squat toilets. In Namche Bazaar, many lodges have modern western plumbing with running water.
                </p>
                <p>
                  Gas-heated hot showers are available at lodges for an additional fee of NPR 400 to NPR 600 (~USD 3–$5). Remember to carry your own quick-drying microfiber towel, biodegradable soap, toilet paper, and hand sanitizer.
                </p>
              </div>
            </div>

            <!-- Accordion 16 -->
            <div class="guidance-card border border-gray-200" data-guide-category="permits" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">16</span>
                  <span>Packing Essentials & Luggage Weight Limits (15 kg Allowance)</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  Domestic airlines operating the Lukla route enforce a strict luggage allowance of <strong>15 kg (33 lbs) per person</strong> total (10 kg check-in duffle bag + 5 kg hand-carry daypack).
                </p>
                <p>
                  Any extra non-trekking items (city clothing, suitcases, souvenirs) can be stored free of charge at our secure Kathmandu office or your hotel luggage storage room.
                </p>
              </div>
            </div>

            <!-- Accordion 17 -->
            <div class="guidance-card border border-gray-200" data-guide-category="permits" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">17</span>
                  <span>Travel Insurance Requirements: Mandatory High-Altitude Evacuation</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  Travel insurance is mandatory for all trekkers. Your policy must explicitly include medical treatment and emergency helicopter evacuation coverage up to 4,000 meters.
                </p>
                <p>
                  Verify with your insurance provider that "hiking/trekking up to 4,000 m" is not listed under high-risk policy exclusions. Keep a printed copy of your policy and emergency claim assistance phone numbers accessible in your daypack.
                </p>
              </div>
            </div>

            <!-- Accordion 18 -->
            <div class="guidance-card border border-gray-200" data-guide-category="permits" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">18</span>
                  <span>Money, ATMs, Currency Exchange & Daily Personal Budget</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  All transactions in mountain teahouses are in cash (Nepali Rupees - NPR). Foreign currencies and credit cards are rarely accepted outside high-end shops in Namche.
                </p>
                <p>
                  There are bank ATMs in Lukla and Namche Bazaar, but they are frequently offline due to satellite link disruptions or out of cash. We advise withdrawing approximately NPR 15,000 to NPR 25,000 (~USD 120–$200) per person in Kathmandu before departure for hot showers, Wi-Fi, battery charging, snacks, and tips.
                </p>
              </div>
            </div>

            <!-- Accordion 19 -->
            <div class="guidance-card border border-gray-200" data-guide-category="logistics" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">19</span>
                  <span>Solo Trekkers, Couples, Families & Older Travelers Suitability</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  The Everest View Trek is exceptionally versatile:
                </p>
                <ul class="list-disc pl-5 space-y-1">
                  <li><strong>Solo Trekkers:</strong> Join a warm, supportive small group or opt for a private guide offering tailored pacing.</li>
                  <li><strong>Couples:</strong> Enjoy romantic teahouse evenings and private room arrangements with breathtaking mountain sunrises.</li>
                  <li><strong>Active Families:</strong> Suitable for fit children aged 10+ capable of 4–6 hour daily walks. Pacing can be customized.</li>
                  <li><strong>Older Travelers:</strong> Highly manageable with trekking poles and steady pacing, avoiding the extreme 5,000+ m altitude exposure of higher expeditions.</li>
                </ul>
              </div>
            </div>

            <!-- Accordion 20 -->
            <div class="guidance-card border border-gray-200" data-guide-category="logistics" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">20</span>
                  <span>Tipping Etiquette for Guides & Porters in Nepal</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  Tipping is a customary tradition in Nepal to reward exceptional service, safety care, and mountain hospitality:
                </p>
                <ul class="list-disc pl-5 space-y-1">
                  <li><strong>Trekking Guide:</strong> Recommended USD 10 to USD 15 per day (per group).</li>
                  <li><strong>Porter:</strong> Recommended USD 8 to USD 12 per day (per group).</li>
                </ul>
                <p>
                  Tips are typically presented in envelopes on the final evening in Lukla during the celebration dinner.
                </p>
              </div>
            </div>

            <!-- Accordion 21 -->
            <div class="guidance-card border border-gray-200" data-guide-category="logistics" rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0">21</span>
                  <span>Responsible Trekking: Sagarmatha Environmental Code</span>
                </span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-6 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 border-t border-gray-100 pt-4 hidden">
                <p>
                  As a UNESCO World Heritage site, Sagarmatha National Park demands conscientious conservation:
                </p>
                <ul class="list-disc pl-5 space-y-1">
                  <li><strong>Pack It In, Pack It Out:</strong> Bring non-biodegradable waste (batteries, plastics, foil) back to Kathmandu.</li>
                  <li><strong>Stay on Designated Trails:</strong> Avoid cutting switchbacks, which accelerates soil erosion on steep hillsides.</li>
                  <li><strong>Respect Cultural Sensitivities:</strong> Always ask permission before photographing individuals, homes, or religious ceremonies. Dress modestly when visiting monasteries.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>
`;
};
