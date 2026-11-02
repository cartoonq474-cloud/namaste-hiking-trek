// Module 8: Section 6 - Read Before You Book (21 Canonical Guides for Dhaulagiri Circuit Trek)
function getDetailsSection() {
  return `
        <!-- Section 6: Read Before You Book -->
        <section id="section-details" class="trek-detail-section">
          <div class="details-section-container">
            <!-- Heading -->
            <div class="details-title-wrapper" style="margin-bottom: 18px;">
              <h2 class="details-main-title" style="margin-bottom: 6px;">Read before you book, Dhaulagiri Circuit Trek</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 6px;"></div>
            </div>

            <!-- Subtitle Paragraphs -->
            <p class="details-subtitle-text" style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.65; margin-bottom: 12px;">
              To help you prepare for this challenging 20-day high-altitude camping expedition, our mountain operations team has compiled 21 essential operational, medical, and logistical guides covering trail progression, French Pass safety, cold-weather camping, and emergency protocols.
            </p>
            <p class="details-subtitle-text" style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.65; margin-bottom: 24px;">
              If you have any specific medical, dietary, or climbing gear questions, please <a href="https://wa.me/9779800000000" target="_blank" style="color: var(--color-copper-orange); font-weight: 700; text-decoration: underline;">WhatsApp our expedition specialists directly</a>. We reply within 24 hours.
            </p>

            <!-- Interactive Progress Tracker Badge -->
            <div class="details-progress-wrapper" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; margin-bottom: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="details-progress-badge" style="display: flex; align-items: center; gap: 14px;">
                <div class="details-progress-ring-box" style="position: relative; width: 44px; height: 44px;">
                  <svg width="44" height="44" viewBox="0 0 44 44" style="transform: rotate(-90deg);">
                    <circle class="details-progress-ring-bg" r="18" cx="22" cy="22" stroke="#e2e8f0" stroke-width="4" fill="none"></circle>
                    <circle class="details-progress-ring-bar" r="18" cx="22" cy="22" stroke="var(--color-copper-orange)" stroke-width="4" fill="none" stroke-dasharray="113.1" stroke-dashoffset="113.1" style="transition: stroke-dashoffset 0.3s ease;"></circle>
                  </svg>
                  <span id="details-progress-percent" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 800; color: var(--color-primary-navy);">0%</span>
                </div>
                <div class="details-progress-text-box">
                  <span class="details-progress-count" style="font-size: 0.95rem; font-weight: 700; color: var(--color-primary-navy); display: block;"><span id="read-guides-count">0</span> of 21 guides completed</span>
                  <span class="details-progress-status" style="font-size: 0.8rem; color: #64748b;">Read and check off all cards before departure</span>
                </div>
              </div>

              <!-- Global Toggle Button -->
              <div style="display: flex; gap: 10px;">
                <button type="button" id="guidesToggleAllBtn" class="btn btn-secondary btn-sm" style="font-size: 0.82rem; padding: 6px 14px; border-radius: 6px; cursor: pointer;"><span>Expand All Guides</span></button>
              </div>
            </div>

            <!-- Search & Category Filters -->
            <div style="margin-bottom: 20px; display: flex; flex-direction: column; gap: 12px;">
              <!-- Live Search Input -->
              <div style="position: relative;">
                <input type="text" id="guideSearchInput" class="guide-search-input" placeholder="Search guides by keyword (e.g., French Pass, Diamox, camping, flights, porters)..." style="width: 100%; padding: 12px 42px 12px 42px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.92rem; outline: none; transition: border-color 0.2s;">
                <button type="button" id="guideSearchClearBtn" style="display: none; position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; font-size: 1.1rem; color: #94a3b8; cursor: pointer; padding: 4px;" aria-label="Clear search">✕</button>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); pointer-events: none;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>

              <!-- Filter Pills -->
              <div id="guide-filter-pills" style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button type="button" class="guide-pill-btn active" data-filter="all" aria-selected="true" style="padding: 6px 14px; border-radius: 20px; font-size: 0.84rem; font-weight: 600; cursor: pointer; border: 1px solid var(--color-copper-orange); background: var(--color-copper-orange); color: #fff;">All 21 Guides</button>
                <button type="button" class="guide-pill-btn" data-filter="route" aria-selected="false" style="padding: 6px 14px; border-radius: 20px; font-size: 0.84rem; font-weight: 600; cursor: pointer; border: 1px solid #cbd5e1; background: #fff; color: #475569;">Route &amp; Passes</button>
                <button type="button" class="guide-pill-btn" data-filter="health" aria-selected="false" style="padding: 6px 14px; border-radius: 20px; font-size: 0.84rem; font-weight: 600; cursor: pointer; border: 1px solid #cbd5e1; background: #fff; color: #475569;">Altitude &amp; Safety</button>
                <button type="button" class="guide-pill-btn" data-filter="logistics" aria-selected="false" style="padding: 6px 14px; border-radius: 20px; font-size: 0.84rem; font-weight: 600; cursor: pointer; border: 1px solid #cbd5e1; background: #fff; color: #475569;">Logistics &amp; Camping</button>
                <button type="button" class="guide-pill-btn" data-filter="permits" aria-selected="false" style="padding: 6px 14px; border-radius: 20px; font-size: 0.84rem; font-weight: 600; cursor: pointer; border: 1px solid #cbd5e1; background: #fff; color: #475569;">Permits &amp; Prep</button>
              </div>
            </div>

            <!-- 21 Accordion Cards -->
            <div id="detailsAccordionWrapper" class="guides-accordion-container detail-accordion-list" style="display: flex; flex-direction: column; gap: 12px;">
              <!-- Guide Card 01 -->
              <div class="detail-accordion-card" id="detail-card-01" data-detail-id="01" data-guide-category="logistics">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">01. Overland Journey Logistics: Kathmandu to Beni & Babiyachaur via Middle Hills</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      The Dhaulagiri Circuit Trek begins with an essential overland approach into western Nepal. From Kathmandu, our private vehicle transfer travels west along the Prithvi Highway, tracing the Trisuli and Marsyangdi river corridors toward Pokhara and continuing north along the Kali Gandaki highway to Beni (Day 3, approx. 7 to 9 hours). Road travel takes up a substantial portion of the day, passing through bustling trading towns, river confluences, and terraced agricultural hillsides.<br><br>
      From Beni, the gateway to Myagdi district, the journey continues on Day 4 along an unpaved rural road network deeper into the Myagdi Valley to Babiyachaur (approx. 24 km, 2 to 3 hours). Utilizing this vehicular link saves repetitive walking along dirt roads and positions the group right at the true foot trailhead. Keep your daypack with personal water, snacks, windbreaker, and motion sickness medication inside the passenger cabin.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Key Logistics Note:</strong> Private overland transport ensures comfort and flexibility for meal and photo stops. Vehicular access terminates at Babiyachaur, where foot trekking commences.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 02 -->
              <div class="detail-accordion-card" id="detail-card-02" data-detail-id="02" data-guide-category="route">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">02. Trail Progression & Staging: From Low Valley Terraces to Alpine Glacial Moraines</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      One of the most remarkable aspects of the Dhaulagiri Circuit is its geographical transition. The trek starts in the sub-tropical lower Myagdi Valley around 950 m, ascending through terraced rice paddies, citrus orchards, and lush bamboo forests through settlements like Dharapani, Muri, and Boghara.<br><br>
      As the trail enters the deep river gorge beyond Dobang (2,520 m), the landscape transforms into dense oak and rhododendron forest before climbing above the tree line at Choriban Khola (3,110 m). From Italian Base Camp (3,660 m), you enter a colossal glacial amphitheater, stepping onto the rubble-covered Chhonbardan Glacier to Glacier Camp (4,200 m) and Dhaulagiri Base Camp (4,750 m). This gradual staging allows steady cardiovascular conditioning before tackling French Pass (5,360 m).
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Topological Reality:</strong> Expect steep, undulating trails on the lower days with frequent ascents and descents across tributary river canyons before reaching the continuous alpine moraines.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 03 -->
              <div class="detail-accordion-card" id="detail-card-03" data-detail-id="03" data-guide-category="logistics">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">03. Expedition Camping Realities: High-Altitude Tents, Sub-Zero Nights & Daily Camp Life</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      Unlike popular teahouse routes in the Annapurna or Everest regions, the central stages of the Dhaulagiri Circuit require self-contained expedition camping for 7+ consecutive nights. From Choriban Khola through Italian Base Camp, Glacier Camp, Dhaulagiri Base Camp, Hidden Valley, and Yak Kharka, there are no permanent lodge facilities.<br><br>
      Our dedicated camp crew handles all logistics: erecting heavy-duty, two-person four-season alpine sleeping tents, laying out thick closed-cell foam and self-inflating sleeping pads, and setting up the communal mess tent with tables and camp stools. Evening temperatures at Dhaulagiri Base Camp and Hidden Valley regularly plunge between -15°C and -20°C (0°F to -4°F). A four-season sleeping bag rated to -20°C combined with thermal down booties is essential for restorative sleep.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Camp Routine:</strong> Wake up at 6:00 AM with hot washing water and 'bed tea' served directly to your tent, followed by a warm, hearty breakfast in the mess tent before packing duffels.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 04 -->
              <div class="detail-accordion-card" id="detail-card-04" data-detail-id="04" data-guide-category="logistics">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">04. The Expedition Kitchen: High-Altitude Nutrition, Caloric Needs & Camp Meals</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      Maintaining adequate caloric intake is crucial when trekking 6 to 8 hours daily at extreme elevation. High altitude suppresses appetite while drastically accelerating metabolic expenditure. Our experienced expedition cooks and kitchen crew prepare three hot, freshly cooked meals daily using pressurized kerosene and gas stoves in the kitchen tent.<br><br>
      Mornings feature porridge, eggs (fried, scrambled, boiled), pancakes, muesli, toast, and hot drinks (tea, coffee, hot chocolate). Midday lunches along the trail feature hot noodle soup, fried rice, pasta, or fresh flatbreads with cooked vegetables. Evenings in camp provide multi-course dinners: garlic soup (proven to assist acclimatization), followed by traditional Nepali Dal Bhat (steamed rice, rich lentil soup, curried vegetables, pickles), Sherpa stew (Syakpa), momos, or pasta, concluding with hot tea and canned fruit.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Caloric Imperative:</strong> Aim for 3,500 to 4,000 calories daily. Even if altitude diminishes your appetite, prioritize hot soups, carbohydrates, and healthy fats.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 05 -->
              <div class="detail-accordion-card" id="detail-card-05" data-detail-id="05" data-guide-category="health">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">05. Safe Drinking Water Protocols & Plastic-Free Hydration in Freezing Moraine Camps</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      Hydration is your primary defense against Acute Mountain Sickness (AMS). Trekkers must consume between 3.5 and 4.5 liters of clean water daily. In remote moraine camps, water is drawn from glacial melt streams that contain high levels of mineral sediment and rock flour.<br><br>
      Our kitchen team boils all cooking and drinking water thoroughly. Trekkers should carry two 1-liter wide-mouth Nalgene bottles and a 750ml–1L vacuum insulated thermos flask. Fill your thermos with boiling water each evening; keep it inside your sleeping bag as a hot water bottle for warmth, and enjoy warm drinking water the following morning without fear of bottles freezing solid on high passes. Avoid untreated natural stream water; supplement with Chlorine Dioxide purification tablets or a micro-filter.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Freezing Prevention:</strong> Hydration bladder hoses freeze solid within minutes above 4,000 m. Pack insulated Nalgene bottle jackets and keep your thermos handy on French Pass.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 06 -->
              <div class="detail-accordion-card" id="detail-card-06" data-detail-id="06" data-guide-category="logistics">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">06. Sanitation, Toilet Tents & Personal Hygiene in Remote High Camps</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      In the remote camping sections above Dobang, there are no indoor bathrooms or plumbed plumbing facilities. Our crew erects a dedicated, private toilet tent at every campsite positioned safely away from water sources. The toilet tent features a deep, dug dry pit with clean soil or ashes provided for covering after each use.<br><br>
      Personal hygiene at sub-zero temperatures requires practical preparation. Running hot showers are unavailable in high camps; our crew provides small basins of hot water each morning and evening for sponge washing face and hands. Trekkers should bring alcohol-based hand sanitizer, biodegradable wet wipes (warm them inside your jacket before use), and zip-lock waste bags for pack-it-out personal trash disposal.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Environmental Ethics:</strong> Follow Leave No Trace (LNT) principles strictly. All sanitary paper must be disposed of into camp waste receptacles, never left exposed on the trail.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 07 -->
              <div class="detail-accordion-card" id="detail-card-07" data-detail-id="07" data-guide-category="logistics">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">07. Device Charging, Cold Battery Care & Mobile Connectivity Drops</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      Sub-zero temperatures dramatically reduce lithium-ion battery capacity. In the remote wilderness section between Dobang and Jomsom (Days 8 through 16), there is zero mains electricity and no access to generator charging. Trekkers must be completely self-reliant for camera and phone power.<br><br>
      Pack at least two high-capacity (20,000+ mAh) power banks rated for cold conditions. Store all phones, camera batteries, and power banks inside wool socks and keep them in your interior jacket pockets during the day, and deep inside the foot of your sleeping bag at night. Cellular network signal (NTC and Ncell) is available intermittently in the lower Myagdi villages up to Muri/Boghara, after which signal drops completely until reaching Jomsom. Our expedition guide carries a satellite communicator for emergency operational contact.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Cold Battery Rule:</strong> Never leave electronics exposed to ambient air overnight. An uninsulated phone can discharge from 100% to dead within 3 hours at -15°C.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 08 -->
              <div class="detail-accordion-card" id="detail-card-08" data-detail-id="08" data-guide-category="route">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">08. Trek Difficulty Breakdown: Strenuous Grade 5 Physical & Glacial Demands</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      The Dhaulagiri Circuit is classified as Strenuous to Very Challenging (Grade 5 Expedition Trek). Unlike teahouse routes with established steps and lodge comforts, this expedition demands continuous endurance over 20 days, including 13 days of strenuous mountain walking and 7+ days living in remote alpine tents.<br><br>
      Key difficulty factors include: crossing French Pass at 5,360 m (17,585 ft) and Dhampus Pass at 5,250 m (17,224 ft); spending consecutive nights above 4,000 m (Glacier Camp, DBC, Hidden Valley); navigating shifting glacial moraine, loose scree, and snow slopes; and enduring sub-zero temperatures. Trekkers must carry a 6–8 kg daypack containing personal warm layers, water, first aid, and camera gear throughout long 6 to 9-hour walking stages.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Difficulty Benchmark:</strong> Significantly more physically and mentally demanding than Everest Base Camp or Annapurna Circuit due to wilderness camping and remote pass crossings.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 09 -->
              <div class="detail-accordion-card" id="detail-card-09" data-detail-id="09" data-guide-category="health">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">09. 12-Week Physical Preparation Plan for High-Altitude Mountain Endurance</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      A structured training plan over 12 weeks builds the cardiovascular base, leg strength, and mental endurance required for Dhaulagiri. Your regimen should focus on aerobic conditioning, eccentric quadricep strength for sustained descents, and pack-bearing stamina.<br><br>
      <strong>Weeks 1–4 (Base Foundation):</strong> 3–4 days/week of moderate cardio (jogging, cycling, swimming for 45–60 mins) combined with bodyweight squats, lunges, calf raises, and core planks.<br>
      <strong>Weeks 5–8 (Hill & Pack Loading):</strong> Introduce stair climbing (stairmaster or outdoor stadium steps) and hill walking 2 days/week carrying a 5 kg daypack. Increase weekend long hikes to 4–5 hours on uneven terrain.<br>
      <strong>Weeks 9–11 (Expedition Peak):</strong> Perform back-to-back weekend mountain hikes (5–7 hours each day) carrying an 8 kg daypack. Practice walking on rocky scree with trekking poles and broken-in boots.<br>
      <strong>Week 12 (Taper):</strong> Reduce training volume by 50% to allow full muscular recovery and arrive in Kathmandu feeling fresh and injury-free.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Training Focus:</strong> Prioritize stair climbing and weighted steep hill hiking. Leg endurance and knee stability during descents matter just as much as uphill cardiovascular capacity.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 10 -->
              <div class="detail-accordion-card" id="detail-card-10" data-detail-id="10" data-guide-category="health">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">10. Weekly Mountain Training Schedule: Balancing Cardio, Leg Strength & Recovery</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      To maximize consistency and prevent overuse injuries before departure, follow a balanced weekly training template:<br><br>
      • <strong>Monday:</strong> Easy 45-minute aerobic recovery session (brisk walking or zone-2 cycling).<br>
      • <strong>Tuesday:</strong> High-incline treadmill walking (12–15% incline) or stair climbing for 45–60 minutes.<br>
      • <strong>Wednesday:</strong> Lower-body strength training: Bulgarian split squats, step-ups onto 18-inch box, Romanian deadlifts, calf raises, and 10 minutes of core stability.<br>
      • <strong>Thursday:</strong> 60-minute tempo cardio session or swimming to build lung capacity and thoracic endurance.<br>
      • <strong>Friday:</strong> Complete rest, stretching, and foam rolling.<br>
      • <strong>Saturday:</strong> Long wilderness hike (4 to 7 hours) on rough outdoor trails wearing your actual trekking boots and carrying a loaded 7 kg pack.<br>
      • <strong>Sunday:</strong> Light yoga, mobility drills, and active recovery walk.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Consistency Over Intensity:</strong> Progressive load building over 3 months builds resilient tendons and ligaments, preventing knee tendonitis and trail fatigue.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 11 -->
              <div class="detail-accordion-card" id="detail-card-11" data-detail-id="11" data-guide-category="health">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">11. Mental Toughness, Weather Uncertainty & Handling Remote Wilderness Isolation</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      High-altitude wilderness trekking is as much a mental challenge as a physical one. Spending a week without hot showers, cell service, heated common rooms, or modern conveniences in sub-zero camps requires psychological resilience and patience.<br><br>
      Weather in the Dhaulagiri massif can change rapidly from clear blue skies to blinding snowfall and gale-force wind within hours. Delays and flexible scheduling are normal parts of mountaineering expeditions. Maintaining a positive group mindset, supporting your teammates, trusting your expedition leader's decisions, and finding joy in the raw simplicity of camp life are the hallmarks of successful expedition members.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Mindset Principle:</strong> Control what you can control: hydration, pacing, warm layering, and positive attitude. Leave itinerary timing flexibility to your lead Sherpa guide.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 12 -->
              <div class="detail-accordion-card" id="detail-card-12" data-detail-id="12" data-guide-category="route">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">12. The High Passes: Tactical Timings & Crossing French Pass (5,360m) & Dhampus Pass (5,250m)</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      Crossing French Pass (5,360 m / 17,585 ft) on Day 15 and Dhampus Pass (5,250 m / 17,224 ft) on Day 16 represents the crux of the circuit. These crossings demand precise tactical timing to ensure safety.<br><br>
      • <strong>French Pass:</strong> The team wakes at 4:30 AM at Dhaulagiri Base Camp, departs by 5:30 AM under headlamps, ascends the steep lateral moraine and snow slopes onto the crest of the pass by mid-morning, capturing awe-inspiring views of Dhaulagiri I, Tukuche Peak, and the vast Hidden Valley before descending to camp.<br>
      • <strong>Dhampus Pass:</strong> Departing early from Hidden Valley, the trail ascends gentle snow slopes to the broad saddle of Dhampus Pass. From the pass, magnificent vistas open eastward across the Annapurna massif and Nilgiri, followed by an immense 1,570-meter descent down steep scree trails to Yak Kharka (3,680 m).<br><br>
      Afternoon winds across both passes frequently reach 40–60 km/h, bringing wind-chill temperatures down to -25°C. Reaching pass summits before 10:30 AM is critical.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Alpine Safety Rule:</strong> Early alpine starts beat afternoon cloud build-up and fierce pass winds. Always keep microspikes, windproof mittens, and goggles in your daypack.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 13 -->
              <div class="detail-accordion-card" id="detail-card-13" data-detail-id="13" data-guide-category="route">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">13. Glacial Moraine Navigation: Chhonbardan Glacier, Loose Scree & Microspikes Usage</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      Between Italian Base Camp and French Pass, the route traverses the dynamic Chhonbardan Glacier. Unlike bare ice glaciers, the Chhonbardan is a classic Himalayan debris-covered glacier carpeted in rocky rubble, shifting moraine ridges, ablation valleys, and unstable scree slopes.<br><br>
      Footing can be slippery and uneven. Trekking poles with carbide tips are mandatory to maintain three points of contact. When traversing moraine troughs, maintain safe distance between trekkers to prevent dislodging loose rocks onto companions below. During spring and late autumn, hard snow and black ice patches can form across the upper glacier; personal traction microspikes or light crampons provide critical grip. Always follow your guide's exact footstep line across moraine ridges.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Gear Requirement:</strong> Pack high-quality steel microspikes and sturdy 3-section trekking poles with snow baskets. Never wander onto the glacier alone without guide supervision.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 14 -->
              <div class="detail-accordion-card" id="detail-card-14" data-detail-id="14" data-guide-category="health">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">14. High-Altitude Physiology: Acclimatization Staging, Oximeter Tracking & AMS Symptoms</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      At French Pass (5,360 m), effective oxygen availability drops to approximately 51% of sea-level values. Gradual acclimatization is non-negotiable. Our 20-day itinerary incorporates two scheduled acclimatization rest days: Day 11 at Italian Base Camp (3,660 m) and Day 14 at Dhaulagiri Base Camp (4,750 m).<br><br>
      Your lead guide conducts daily medical check-ins every morning and evening, recording your resting pulse and blood oxygen saturation (SpO2) using a pulse oximeter. Be vigilant for early Acute Mountain Sickness (AMS) symptoms: persistent headache, nausea, dizziness, loss of appetite, and insomnia. Communicate all symptoms immediately to your guide. Mild AMS is managed with rest, hydration, and prophylactic Acetazolamide (Diamox 125–250 mg twice daily).
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Golden Rule of Altitude:</strong> Never ascend with symptoms of altitude sickness. If symptoms worsen despite rest and medication, immediate descent to lower altitude is mandatory.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 15 -->
              <div class="detail-accordion-card" id="detail-card-15" data-detail-id="15" data-guide-category="health">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">15. Emergency Evacuation Protocols: Wilderness First Aid, Medical Oxygen & Helicopter Rescue</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      In the remote gorges and glaciated valleys of Dhaulagiri, rapid medical evacuation requires robust protocols. Our lead guides are certified in Wilderness First Responder (WFR) emergency medicine and carry a comprehensive expedition medical trauma kit.<br><br>
      • <strong>Medical Oxygen:</strong> We carry pressurized bottled medical oxygen with non-rebreather masks for high-altitude pulmonary edema (HAPE) or cerebral edema (HACE) stabilization.<br>
      • <strong>Satellite Communications:</strong> A Garmin InReach or Iridium satellite device accompanies every group, maintaining direct 24/7 contact with our Kathmandu operations base and emergency rescue dispatchers.<br>
      • <strong>Helicopter Rescue:</strong> In critical medical emergencies, our operations team coordinates high-altitude helicopter rescue dispatch. Landing zones exist at Italian Base Camp, Dhaulagiri Base Camp, Hidden Valley, and Yak Kharka, weather permitting.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Insurance Requirement:</strong> You must possess comprehensive travel insurance explicitly covering trekking up to 6,000 m and emergency helicopter evacuation with direct cashless payment guarantees.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 16 -->
              <div class="detail-accordion-card" id="detail-card-16" data-detail-id="16" data-guide-category="route">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">16. Weather Patterns & Best Climbing Windows: Autumn vs Spring Climatic Realities</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      The Dhaulagiri massif generates complex microclimates. Choosing the optimal seasonal window is critical for pass crossing safety and mountain visibility.<br><br>
      • <strong>Autumn (Late September to Late November):</strong> The premier expedition season. Post-monsoon high-pressure systems bring crystal-clear visibility, stable high-pressure windows, and dry moraine trails. October daytime temperatures reach 10°C to 15°C in lower valleys and -5°C to -18°C in high camps. November is colder but exceptionally clear.<br>
      • <strong>Spring (April to Late May):</strong> Warmer temperatures and vibrant blooming rhododendron forests in the lower Myagdi Valley. Upper moraines feature remaining winter snowpack, making microspikes essential. Afternoon cloud convection and snow flurries are more frequent than in autumn.<br>
      • <strong>Winter (Dec–Feb) & Monsoon (Jun–Aug):</strong> Strictly not recommended. Winter brings impassable deep snowdrifts on French Pass and -30°C temps; monsoon brings dangerous landslides in the Myagdi gorge and leech-infested trails.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Peak Success Window:</strong> Mid-October through early November offers the highest statistical probability of clear pass crossings and stable weather.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 17 -->
              <div class="detail-accordion-card" id="detail-card-17" data-detail-id="17" data-guide-category="permits">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">17. Required Permits, National Park Regulations & Checkpoints: ACAP & TIMS</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      The Dhaulagiri Circuit crosses administrative boundaries requiring two primary trekking permits. All paperwork and fee processing are handled in advance by Namaste Hiking Trek in Kathmandu:<br><br>
      1. <strong>Annapurna Conservation Area Project (ACAP) Permit:</strong> Required as the circuit crosses Dhampus Pass into the Mustang / Kali Gandaki conservation zone (NPR 3,000 / approx. $25 USD).<br>
      2. <strong>Trekkers' Information Management System (TIMS) Card:</strong> Mandatory national tracking card administered by the Trekking Agencies Association of Nepal (TAAN) and Nepal Tourism Board (NPR 2,000 / approx. $17 USD).<br><br>
      Permits are inspected at police and national park checkpoints in Beni, Babiyachaur, and Jomsom. Trekkers must carry 4 passport-sized photos and their physical passport during transit.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Hassle-Free Logistics:</strong> All permit fees, local taxes, and government royalties are fully inclusive in your Namaste Hiking Trek expedition package.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 18 -->
              <div class="detail-accordion-card" id="detail-card-18" data-detail-id="18" data-guide-category="permits">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">18. Travel Insurance Compliance: Verifying 6,000m Coverage & Evacuation Clauses</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      Standard international travel insurance policies almost universally exclude trekking above 3,000 m or categorize pass crossings over 5,000 m as 'extreme mountaineering'. Participating in the Dhaulagiri Circuit without compliant insurance is strictly prohibited.<br><br>
      Before departure, verify that your policy explicitly includes:<br>
      • Medical expenses and hospitalization up to at least $100,000 USD.<br>
      • Emergency helicopter evacuation and search-and-rescue coverage up to 6,000 m (19,685 ft).<br>
      • Direct-billing / cashless evacuation guarantee with Kathmandu emergency medical providers.<br>
      • Trip cancellation and flight interruption protection covering domestic Jomsom–Pokhara flight weather delays.<br><br>
      Recommended global providers with proven Nepal track records include Global Rescue, World Nomads (Explorer plan), Ripcord Rescue Travel Insurance, and Allianz Global Assistance.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Verification Step:</strong> Provide a copy of your insurance policy certificate and 24-hour emergency medical assistance phone number to our office during the Kathmandu trip briefing.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 19 -->
              <div class="detail-accordion-card" id="detail-card-19" data-detail-id="19" data-guide-category="logistics">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">19. Expedition Gear Selection: -20°C Sleeping Bags, Thermal Boots & Daypack Setup</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      High-altitude camping requires specialized personal gear engineered for sub-zero mountain environments. Substandard gear risks frostbite and hypothermia.<br><br>
      • <strong>Sleeping System:</strong> A 4-season down sleeping bag with a comfort rating of -15°C to -20°C (comfort limit -25°C) filled with 800+ fill-power water-resistant down. We provide supplementary insulated sleeping pads.<br>
      • <strong>Footwear:</strong> Sturdy, waterproof B1 or B2-rated mountaineering trekking boots with rigid Vibram soles and ankle support. Boots must be thoroughly broken in before arriving in Nepal to avoid debilitating blisters.<br>
      • <strong>Layering Architecture:</strong> Merino wool thermal base layers (top and bottom, 200–250 g/m²); mid-layer fleece or Polartec jacket; heavy expedition down parka (800+ fill, box-wall baffled construction); and waterproof/windproof Gore-Tex hard shell jacket and pants.<br>
      • <strong>Gloves & Headwear:</strong> Lightweight liner gloves, heavy windproof ski gloves, insulated down mittens for pass days, thermal beanie, and UV400 category 3 or 4 glacier glasses.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Gear Rental in Kathmandu:</strong> High-end expedition down jackets and -20°C sleeping bags can be rented in Kathmandu through our team for just $1–$2 USD per day.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 20 -->
              <div class="detail-accordion-card" id="detail-card-20" data-detail-id="20" data-guide-category="logistics">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">20. The Jomsom Return: Mountain Flights to Pokhara, Weather Delays & Kali Gandaki Road</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      On Day 18, the itinerary schedules a scenic morning flight from Jomsom Airport (2,720 m) through the deep Kali Gandaki gorge between Dhaulagiri and Annapurna to Pokhara (approx. 20 minutes). This thrilling mountain flight provides sensational aerial views of Nilgiri, Dhaulagiri, and Annapurna South.<br><br>
      Jomsom Airport is famous for strong thermal valley winds that build up rapidly by late morning. Consequently, all flights operate strictly between 6:30 AM and 10:30 AM. If morning flights are cancelled due to low cloud or gale-force winds in the Kali Gandaki, our ground operations team immediately arranges private 4WD overland jeep transfer down the Beni-Jomsom road corridor to Pokhara (approx. 6–8 hours). Having built-in contingency time in Kathmandu before international departures is essential.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Contingency Buffer:</strong> Never schedule your international departure flight home on the same day as your Jomsom–Pokhara flight. Day 19 road transit to Kathmandu provides this vital safety cushion.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Card 21 -->
              <div class="detail-accordion-card" id="detail-card-21" data-detail-id="21" data-guide-category="permits">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">21. Ethical Porter Welfare, IPPG Standards & Fair Tipping Culture</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      The porters and kitchen crew are the true heroes of the Dhaulagiri Circuit. Carrying expedition tents, cooking stoves, fresh vegetables, and duffel bags through freezing moraines requires exceptional endurance and dedication. Namaste Hiking Trek strictly enforces International Porter Protection Group (IPPG) ethical standards:<br><br>
      • Maximum load limit of 20 kg per porter (one porter assigned between two clients).<br>
      • High-altitude alpine outerwear, windproof jackets, thermal base layers, sturdy boots, sunglasses, and gloves supplied by the agency.<br>
      • Comprehensive medical and helicopter rescue insurance for all support staff.<br>
      • Warm, dry tented accommodation and identical nutritious food rations as clients.<br><br>
      <strong>Tipping Guidelines:</strong> Tipping is a customary Himalayan tradition acknowledging extraordinary hard work. We recommend budgeting approx. $150 to $200 USD per client into a collective group tip pool, distributed during the celebratory farewell dinner in Jomsom on Day 17.
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <strong>Ethical Tourism:</strong> Treat porters with dignity and respect. Keep your main duffel bag strictly under 10–12 kg so your porter's total load never exceeds safe limits.
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
`;
}

module.exports = { getDetailsSection };
