module.exports = {
  getItinerarySection: function() {
    return `
          <!-- Section 2: Itinerary -->
          <section id="section-itinerary" class="trek-detail-section">

            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 16px;">
              <h2 class="trek-section-title" style="margin: 0;">Annapurna Base Camp Luxury Trek: 15-Day Detailed Itinerary</h2>
              <div class="itinerary-bulk-actions">
                <button type="button" id="itineraryToggleAllBtn" class="itinerary-bulk-toggle-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                  <span>Expand All Days</span>
                </button>
              </div>
            </div>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 24px;">
              Our 15-day luxury itinerary is intentionally staged for maximum comfort, cultural immersion, and gradual acclimatization. By dedicating shorter walking hours to the upper Modi Khola valley (Bamboo, Dovan, Himalaya, Deurali, MBC) and providing full recovery days in Pokhara and Kathmandu, we ensure an unhurried, safe, and deeply rewarding journey into the high Annapurna Sanctuary.
            </p>

            <div class="itinerary-timeline">

              <!-- Day 01 -->
              <div class="itinerary-card active">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day 1:</span> Arrive in Kathmandu and prepare for the trek
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      Kathmandu – approximately <span data-altitude-m="1400">1,400 m / 4,593 ft</span>
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <span class="itinerary-toggle-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-meta-badges">
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      Arrival & Briefing
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      5-Star Hotel in Kathmandu
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                      Welcome Dinner Included
                    </span>
                  </div>
                  <p>
                    Upon arrival at Tribhuvan International Airport (KTM), meet our Namaste Hiking Trek airport representative outside the arrivals terminal. Transfer via private air-conditioned vehicle to your luxury hotel in Kathmandu. Keep the remainder of the day flexible around your international arrival, with time to rest, unpack, and settle into your room.
                  </p>
                  <p>
                    In the late afternoon, your lead trekking guide conducts a comprehensive pre-trek briefing. We review the full 15-day route, changing accommodation standards from city hotels to mountain teahouses, weather forecasts, and equipment requirements. You receive your complimentary waterproof duffel bag, down jacket, and four-season sleeping bag. Organize a small daypack for items needed during walking and confirm what will travel with your dedicated porter. Any missing essentials are easily acquired in Kathmandu before tomorrow's flight to Pokhara.
                  </p>
                </div>
              </div>

              <!-- Day 02 -->
              <div class="itinerary-card">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day 2:</span> Fly to Pokhara and enjoy the lakeside setting
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      Pokhara – approximately <span data-altitude-m="820">820 m / 2,690 ft</span>
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <span class="itinerary-toggle-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-meta-badges">
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>
                      25-Min Flight + Transfers
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      Premium Lakeside Resort in Pokhara
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                      Breakfast Included
                    </span>
                  </div>
                  <p>
                    Following a leisurely breakfast at your Kathmandu hotel, transfer by private car to the domestic terminal for your scenic flight to Pokhara (approx. 25 minutes). Savor aerial views of the Ganesh, Manaslu, and Annapurna massifs as you fly west along the Himalayan spine.
                  </p>
                  <p>
                    Upon touching down in Pokhara, transfer to your luxury resort nestled beside tranquil Phewa Lake. Spend the afternoon exploring the vibrant lakeside promenade, renting a colorful wooden boat (Doonga) on the lake, or relaxing by the hotel pool with views of Machhapuchhre reflecting in the water. Keep evening activities relaxed to ensure you start the trekking section well-rested.
                  </p>
                </div>
              </div>

              <!-- Day 03 -->
              <div class="itinerary-card">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day 3:</span> Travel to the Ghandruk approach and settle into your lodge
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      Ghandruk – approximately <span data-altitude-m="2000">2,000 m / 6,561 ft</span>
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <span class="itinerary-toggle-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-meta-badges">
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      2.5 hrs 4WD Drive + 1 hr gentle walk
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      Selected Boutique Lodge in Ghandruk
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                      Breakfast, Lunch & Dinner Included
                    </span>
                  </div>
                  <p>
                    Depart Pokhara after breakfast in a private 4WD vehicle, driving along the scenic highway past Nayapul and Birethanti before ascending the winding mountain road toward Ghandruk. By utilizing private road access directly toward the upper Ghandruk roadhead, we bypass dusty lower roads and save several hours of steep uphill stair climbing.
                  </p>
                  <p>
                    A gentle, scenic walk along ancient stone pathways brings you to your selected boutique lodge in Ghandruk. Settle into your room and take in the magnificent panoramic views of Annapurna South (<span data-altitude-m="7219">7,219 m</span>) and Hiunchuli dominating the skyline. In the afternoon, take a leisurely stroll through Ghandruk's stone-paved alleys, visit the local Gurung cultural museum, and observe traditional village life before an authentic warm dinner at the lodge.
                  </p>
                </div>
              </div>

              <!-- Day 04 -->
              <div class="itinerary-card">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day 4:</span> Trek from Ghandruk to Chhomrong
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      Chhomrong – approximately <span data-altitude-m="2150">2,150 m / 7,053 ft</span>
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <span class="itinerary-toggle-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-meta-badges">
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      5–6 Hours Trekking
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      Selected Mountain Lodge in Chhomrong
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                      Breakfast, Lunch & Dinner Included
                    </span>
                  </div>
                  <p>
                    Begin the main trekking phase with morning mountain views from your lodge terrace. The trail ascends out of Ghandruk through lush rhododendron and oak woodlands toward Kimrong Danda before descending steeply on stone stairs to the Kimrong Khola river. Cross the suspension bridge and stop for morning tea at a tranquil riverside tea stall.
                  </p>
                  <p>
                    From the river, the trail climbs steadily through terraced farmlands and small hamlets to Taulung, where the path joins the main route from Jhinu Danda. Continue climbing stone staircases to Chhomrong (<span data-altitude-m="2150">2,150 m</span>), the premier gateway village into the upper Sanctuary. Perched high on the hillside beneath the imposing southern face of Annapurna South, Chhomrong offers dramatic views across the Modi Khola valley toward Fishtail Mountain.
                  </p>
                </div>
              </div>

              <!-- Day 05 -->
              <div class="itinerary-card">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day 5:</span> Trek from Chhomrong through Sinuwa to Bamboo
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      Bamboo – approximately <span data-altitude-m="2300">2,300 m / 7,545 ft</span>
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <span class="itinerary-toggle-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-meta-badges">
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      5–6 Hours Trekking
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      Authentic Mountain Teahouse in Bamboo
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                      Breakfast, Lunch & Dinner Included
                    </span>
                  </div>
                  <p>
                    Today’s walk is one of the classic undulating stages of the Annapurna trail. Descend over 2,500 stone steps through the village of Chhomrong to the suspension bridge over the Chhomrong Khola (<span data-altitude-m="1860">1,860 m</span>). Cross the river and commence a sustained climb up the opposite forested ridge toward Lower Sinuwa and Upper Sinuwa (<span data-altitude-m="2350">2,350 m</span>), where you stop for lunch with sweeping backward views of Chhomrong.
                  </p>
                  <p>
                    From Sinuwa, you officially enter the restricted Modi Khola canyon where local Gurung traditions prohibit meat slaughter and smoking to honor mountain deities. The trail winds through dense, verdant bamboo and rhododendron forests alive with bird calls, descending gradually to the settlement of Bamboo (<span data-altitude-m="2300">2,300 m</span>). Settle into your clean teahouse tucked deep inside the bamboo canyon.
                  </p>
                </div>
              </div>

              <!-- Day 06 -->
              <div class="itinerary-card">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day 6:</span> Trek from Bamboo to Dovan
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      Dovan – approximately <span data-altitude-m="2600">2,600 m / 8,530 ft</span>
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <span class="itinerary-toggle-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-meta-badges">
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      2–3 Hours Trekking (Relaxed Stage)
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      Mountain Teahouse in Dovan
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                      Breakfast, Lunch & Dinner Included
                    </span>
                  </div>
                  <p>
                    This intentionally shorter stage gives our luxury itinerary a relaxed, measured rhythm that standard group treks miss. Follow the forested canyon trail along the roaring Modi Khola river, walking beneath towering canopies of moss-draped oak, rhododendron, and bamboo.
                  </p>
                  <p>
                    Arrive in Dovan (<span data-altitude-m="2600">2,600 m</span>) by lunchtime. With the afternoon free, you can take a hot shower, relax in the dining room with a book, practice deep breathing exercises, and rest your legs. Shorter stages at this elevation ensure your body builds energy and adjusts smoothly before crossing the 3,000-meter threshold.
                  </p>
                </div>
              </div>

              <!-- Day 07 -->
              <div class="itinerary-card">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day 7:</span> Trek from Dovan to Himalaya
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      Himalaya – approximately <span data-altitude-m="2870">2,870 m / 9,416 ft</span>
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <span class="itinerary-toggle-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-meta-badges">
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      2–3 Hours Trekking (Measured Ascent)
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      Mountain Teahouse at Himalaya
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                      Breakfast, Lunch & Dinner Included
                    </span>
                  </div>
                  <p>
                    Continue ascending the Modi Khola canyon as the dense subtropical forest begins to thin, giving way to alpine shrubs, steep rock faces, and cascading mountain waterfalls. Pass the sacred shrine of Baraha temple, where local porters offer prayers for safe mountain passage.
                  </p>
                  <p>
                    Arrive at Himalaya Hotel (<span data-altitude-m="2870">2,870 m</span>), nestled on a high terrace right beneath soaring cliffs. This gentle altitude gain (270 meters) allows optimal physical recovery and hydration. In the afternoon, your guide checks your oxygen saturation levels with a pulse oximeter and reviews warm clothing layers for tomorrow's entry above 3,000 meters.
                  </p>
                </div>
              </div>

              <!-- Day 08 -->
              <div class="itinerary-card">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day 8:</span> Trek from Himalaya to Deurali
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      Deurali – approximately <span data-altitude-m="3200">3,200 m / 10,498 ft</span>
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <span class="itinerary-toggle-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-meta-badges">
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      2–3 Hours Trekking
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      Mountain Teahouse in Deurali
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                      Breakfast, Lunch & Dinner Included
                    </span>
                  </div>
                  <p>
                    Climb through the dramatic gorge passing Hinku Cave, a historic overhang formed by massive fallen boulders that once sheltered early mountaineering expeditions. The trail crosses a rocky riverbed prone to seasonal avalanche debris and boulder fields before climbing on stone steps toward Deurali (<span data-altitude-m="3200">3,200 m</span>).
                  </p>
                  <p>
                    Sleeping at Deurali marks your official transition above 3,000 meters. The surrounding landscape becomes open, rocky, and distinctly alpine. The air is noticeably cooler and crisper. Take the afternoon to hydrate with garlic soup and herbal teas in the teahouse dining room while your guide assesses mountain conditions for tomorrow's ascent toward Machhapuchhre Base Camp.
                  </p>
                </div>
              </div>

              <!-- Day 09 -->
              <div class="itinerary-card">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day 9:</span> Trek from Deurali to Machhapuchhre Base Camp (MBC)
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      MBC – approximately <span data-altitude-m="3700">3,700 m / 12,139 ft</span>
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <span class="itinerary-toggle-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-meta-badges">
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      3–4 Hours Trekking
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      Mountain Teahouse at MBC
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                      Breakfast, Lunch & Dinner Included
                    </span>
                  </div>
                  <p>
                    Leaving Deurali, the narrow river canyon suddenly broadens into the dramatic southern gateway of the Annapurna Sanctuary. As you walk alongside the glacial Modi Khola torrent, tree cover disappears entirely, replaced by alpine tundra, moraine gravel, and sweeping snowy peaks.
                  </p>
                  <p>
                    Arrive at Machhapuchhre Base Camp (<span data-altitude-m="3700">3,700 m</span>) before midday. MBC offers one of the most astonishing close-up views on Earth: the iconic twin fishtail summit of Mount Machhapuchhre towering almost vertically above you, alongside Annapurna South, Hiunchuli, and Gangapurna. Spending the night at MBC provides essential physiological acclimatization and makes tomorrow's final 2-hour walk to ABC completely relaxed and enjoyable.
                  </p>
                </div>
              </div>

              <!-- Day 10 -->
              <div class="itinerary-card">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day 10:</span> Trek from MBC to Annapurna Base Camp (ABC)
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      ABC – Maximum planned altitude <span data-altitude-m="4130">4,130 m / 13,549 ft</span>
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <span class="itinerary-toggle-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-meta-badges">
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      2–3 Hours Trekking (Sanctuary Entry)
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      Mountain Teahouse at ABC (Overnight at 4,130m)
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                      Breakfast, Lunch & Dinner Included
                    </span>
                  </div>
                  <p>
                    Today is the crowning highlight of your Himalayan expedition. Embark on a gentle, awe-inspiring 2-to-3 hour ascent from MBC along the lateral moraine of the South Annapurna Glacier. As you advance into the Sanctuary amphitheater, you are encircled 360 degrees by colossal Himalayan giants: Hiunchuli, Annapurna South, Annapurna I (<span data-altitude-m="8091">8,091 m</span>), Khangsar Kang, Annapurna III, and Machhapuchhre.
                  </p>
                  <p>
                    Reach Annapurna Base Camp (<span data-altitude-m="4130">4,130 m</span>) in time for lunch. Celebrate reaching the heart of the Sanctuary, take commemorative photos at the famous ABC signpost, and watch the golden afternoon light paint the sheer southern wall of Annapurna I. Unlike day-trippers who rush back down, you enjoy an unforgettable overnight stay at ABC, watching the stars blaze over snow-capped peaks in near-total mountain silence.
                  </p>
                  <div style="margin-top: 16px; border-radius: var(--radius-md); overflow: hidden;">
                    <img src="../../images/treks/annapurna-base-camp/annapurna-base-camp-snow-covered-mountain-valley-10.jpg" alt="Spectacular Annapurna Sanctuary Amphitheater at Base Camp" style="width: 100%; height: 260px; object-fit: cover;">
                  </div>
                </div>
              </div>

              <!-- Day 11 -->
              <div class="itinerary-card">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day 11:</span> Descend from ABC to Bamboo
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      Bamboo – approximately <span data-altitude-m="2300">2,300 m / 7,545 ft</span>
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <span class="itinerary-toggle-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-meta-badges">
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      6–8 Hours Descent Trek
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      Mountain Teahouse in Bamboo
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                      Breakfast, Lunch & Dinner Included
                    </span>
                  </div>
                  <p>
                    Wake early to witness an extraordinary Himalayan sunrise: the summits of Annapurna I and Annapurna South turning from rose-gold to dazzling white against deep blue skies. After a warm breakfast, begin the long descent through the Modi Khola valley.
                  </p>
                  <p>
                    Retracing the Sanctuary corridor, pass MBC, Deurali, and Himalaya, stopping at Dovan for a hearty lunch. Although descending brings richer oxygen and warmer air, sustained downhill movement over stone stairs can place demands on knees and ankles. We maintain a controlled, steady pace with regular hydration breaks, arriving back at Bamboo (<span data-altitude-m="2300">2,300 m</span>) for a warm evening meal and well-deserved sleep.
                  </p>
                </div>
              </div>

              <!-- Day 12 -->
              <div class="itinerary-card">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day 12:</span> Walk to the Jhinu-side exit and drive to Pokhara
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      Pokhara – approximately <span data-altitude-m="820">820 m / 2,690 ft</span>
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <span class="itinerary-toggle-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-meta-badges">
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      4–6 Hours Walk + 2.5 hrs Private 4WD
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      Luxury Lakeside Hotel in Pokhara
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                      Breakfast & Lunch Included
                    </span>
                  </div>
                  <p>
                    Trek from Bamboo back up through the rhododendron woods to Upper Sinuwa, descending stone stairs to cross the Chhomrong Khola bridge once more. Climb up to Chhomrong village for a tea break, then take the fork leading down toward Jhinu Danda. If time and trail conditions allow, you can visit the natural thermal hot springs situated along the Modi Khola riverbanks below Jhinu to soothe tired muscles.
                  </p>
                  <p>
                    Cross the impressive 287-meter-long Jhinu suspension bridge to reach the usable roadhead pickup point. Your private 4WD vehicle awaits to transfer you back to Pokhara. Return to the comfort of your luxury hotel, enjoy a long hot shower, and celebrate the completion of your mountain trek with a fine dinner along the vibrant lakeside promenade.
                  </p>
                </div>
              </div>

              <!-- Day 13 -->
              <div class="itinerary-card">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day 13:</span> Fly from Pokhara to Kathmandu
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      Kathmandu – approximately <span data-altitude-m="1400">1,400 m / 4,593 ft</span>
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <span class="itinerary-toggle-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-meta-badges">
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>
                      25-Min Flight + Transfers
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      5-Star Hotel in Kathmandu
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                      Breakfast Included
                    </span>
                  </div>
                  <p>
                    Enjoy a relaxed lakeside breakfast in Pokhara before your private transfer to Pokhara Airport. Board the scheduled domestic flight back to Kathmandu, taking in final panoramic views of the Annapurna and Manaslu ranges from your window seat.
                  </p>
                  <p>
                    Upon arrival at Kathmandu Airport, transfer to your 5-star hotel. Use the remainder of the afternoon for personal relaxation, pool time, spa treatments, or souvenir shopping in Thamel and Durbar Marg.
                  </p>
                </div>
              </div>

              <!-- Day 14 -->
              <div class="itinerary-card">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day 14:</span> Kathmandu recovery and flexible buffer day
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      Kathmandu – approximately <span data-altitude-m="1400">1,400 m / 4,593 ft</span>
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <span class="itinerary-toggle-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-meta-badges">
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      Buffer Day / Optional City Sightseeing
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      5-Star Hotel in Kathmandu
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                      Breakfast & Farewell Dinner Included
                    </span>
                  </div>
                  <p>
                    This full day is a crucial luxury feature that provides essential schedule flexibility against potential domestic flight delays between Pokhara and Kathmandu. When travel runs on schedule, this day serves as a delightful cultural and recovery experience in the capital.
                  </p>
                  <p>
                    You may arrange an optional private guided tour of Kathmandu’s UNESCO World Heritage Sites—including the sacred Hindu temple of Pashupatinath, the ancient Buddhist stupas of Boudhanath and Swayambhunath (Monkey Temple), or the royal courtyards of Patan Durbar Square. In the evening, join the Namaste Hiking Trek management team for a special celebratory farewell dinner featuring traditional Nepali dance and cuisine.
                  </p>
                </div>
              </div>

              <!-- Day 15 -->
              <div class="itinerary-card">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day 15:</span> Depart from Kathmandu
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      Kathmandu – International Departure
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <span class="itinerary-toggle-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-meta-badges">
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>
                      Private Airport Transfer
                    </span>
                    <span class="itinerary-meta-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                      Breakfast Included
                    </span>
                  </div>
                  <p>
                    Enjoy breakfast at your hotel before checking out. Your private driver meets you at the hotel lobby approximately 3 hours prior to your scheduled international flight departure time.
                  </p>
                  <p>
                    Transfer to Tribhuvan International Airport for your flight home, carrying lifelong memories, stunning photographs of the Annapurna Sanctuary, and deep friendships forged in the Himalayas. Namaste and safe travels!
                  </p>
                </div>
              </div>

            </div>

          </section>
`;
  }
};
