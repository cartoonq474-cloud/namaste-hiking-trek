// Module 4 Full: Section 2 - 9-Day Itinerary (100% Template-Conforming Architecture)
function getItinerarySection() {
  return `
        <!-- Section 2: Itinerary -->
        <section id="section-itinerary" class="trek-detail-section">
          <!-- Section Heading & Global Action Bar -->
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 20px;">
            <div>
              <h2 class="trek-section-title" style="margin-bottom: 0;">Pikey Peak Trek Itinerary: Day by Day Details</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px;"></div>
            </div>
            <button type="button" id="toggle-all-itinerary" class="btn btn-outline" style="padding: 8px 18px; font-size: 0.88rem; font-weight: 700; border-radius: 8px; border: 1px solid #cbd5e1; background: #ffffff; color: var(--color-primary-navy); cursor: pointer; transition: all 0.2s ease;">
              Expand All Days
            </button>
          </div>

          <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 16px;">
            The nine-day Pikey Peak Trek itinerary combines a scenic road journey from Kathmandu with trekking through traditional Sherpa villages, forested mountain trails, and open Himalayan ridges. The main highlight is an early-morning ascent to Pikey Peak at approximately <span data-altitude-m="4065">4,065 m (13,336 ft)</span>, where clear weather reveals panoramic views of Mount Everest and the surrounding Himalayan range.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 24px;">
            The journey begins with an overland drive from Kathmandu to Dhap Bazaar, the starting point of the trekking route. From Dhap, you walk toward Jhapre, continue to Pikey Peak Base Camp, and prepare for the summit excursion. After visiting the viewpoint, the route descends toward Jasmane Bhanjyang and Junbesi before continuing to Phaplu for the return journey to Kathmandu. A Salleri pickup is a separately agreed variation; no domestic flights are required.
          </p>

          <!-- Itinerary Highlights & Badge Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 28px;">
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px; display: flex; align-items: center; gap: 12px;">
              <div style="width: 36px; height: 36px; border-radius: 8px; background: #fff7ed; color: var(--color-copper-orange); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div>
                <span style="font-size: 0.72rem; text-transform: uppercase; color: #64748b; font-weight: 700; display: block;">TRIP DURATION</span>
                <strong style="color: var(--color-primary-navy); font-size: 0.95rem;">9 Calendar Days</strong>
              </div>
            </div>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px; display: flex; align-items: center; gap: 12px;">
              <div style="width: 36px; height: 36px; border-radius: 8px; background: #e6f7f0; color: #008060; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <div>
                <span style="font-size: 0.72rem; text-transform: uppercase; color: #64748b; font-weight: 700; display: block;">WALKING STAGES</span>
                <strong style="color: var(--color-primary-navy); font-size: 0.95rem;">5 Walking Days (Days 3–7)</strong>
              </div>
            </div>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px; display: flex; align-items: center; gap: 12px;">
              <div style="width: 36px; height: 36px; border-radius: 8px; background: #eff6ff; color: #2563eb; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 22h20L12 2z"></path></svg>
              </div>
              <div>
                <span style="font-size: 0.72rem; text-transform: uppercase; color: #64748b; font-weight: 700; display: block;">MAX ELEVATION</span>
                <strong style="color: var(--color-primary-navy); font-size: 0.95rem;">4,065 m (Pikey Peak)</strong>
              </div>
            </div>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px; display: flex; align-items: center; gap: 12px;">
              <div style="width: 36px; height: 36px; border-radius: 8px; background: #fdf4ff; color: #a855f7; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              </div>
              <div>
                <span style="font-size: 0.72rem; text-transform: uppercase; color: #64748b; font-weight: 700; display: block;">TRANSPORTATION</span>
                <strong style="color: var(--color-primary-navy); font-size: 0.95rem;">Overland 4WD Scorpio</strong>
              </div>
            </div>
          </div>

          <!-- Section 2.1: Itinerary at a Glance Table -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <div style="padding: 16px 20px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
              <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--color-primary-navy); margin: 0;">Pikey Peak Trek Itinerary at a Glance</h3>
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--color-copper-orange); background: #fff7ed; padding: 3px 10px; border-radius: 12px;">Quick Summary</span>
            </div>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.92rem;">
                <thead>
                  <tr style="background: #f1f5f9; color: #334155; font-weight: 700; border-bottom: 2px solid #e2e8f0;">
                    <th style="padding: 12px 16px;">Day</th>
                    <th style="padding: 12px 16px;">Route Stage &amp; Daily Activity</th>
                    <th style="padding: 12px 16px;">Approx. Elevation</th>
                    <th style="padding: 12px 16px;">Duration &amp; Terrain</th>
                  </tr>
                </thead>
                <tbody style="color: #475569;">
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-primary-navy);">Day 1</td>
                    <td style="padding: 12px 16px;">Arrive in Kathmandu and prepare for the trek</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #f1f5f9; color: #334155;">1,400 m</span></td>
                    <td style="padding: 12px 16px;">Airport pickup &amp; pre-trek briefing</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-primary-navy);">Day 2</td>
                    <td style="padding: 12px 16px;">Drive from Kathmandu to Dhap Bazaar via BP Highway</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #eff6ff; color: #1d4ed8;">2,850 m</span></td>
                    <td style="padding: 12px 16px;">8 to 9 hours scenic road drive (240 km)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-primary-navy);">Day 3</td>
                    <td style="padding: 12px 16px;">Trek from Dhap Bazaar to Jhapre</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #eff6ff; color: #1d4ed8;">2,820 to 2,920 m</span></td>
                    <td style="padding: 12px 16px;">4 to 6 hours walking (approx. 13 km)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-primary-navy);">Day 4</td>
                    <td style="padding: 12px 16px;">Trek from Jhapre to Pikey Peak Base Camp</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #fff7ed; color: #c2410c;">3,640 m</span></td>
                    <td style="padding: 12px 16px;">5 to 6 hours walking (+820 m ascent)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 5</td>
                    <td style="padding: 12px 16px;"><strong>Sunrise ascent of Pikey Peak &amp; trek to Jasmane Bhanjyang</strong></td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #fee2e2; color: #b91c1c; font-weight: 700;">4,065 m (Summit)</span> / 3,550 m</td>
                    <td style="padding: 12px 16px;">5 to 7 hours walking (1.5h summit push)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-primary-navy);">Day 6</td>
                    <td style="padding: 12px 16px;">Trek from Jasmane Bhanjyang to Junbesi village</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #e6f7f0; color: #008060;">2,680 to 2,700 m</span></td>
                    <td style="padding: 12px 16px;">5 to 6 hours descent through moss forests</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-primary-navy);">Day 7</td>
                    <td style="padding: 12px 16px;">Trek from Junbesi to Phaplu</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #e6f7f0; color: #008060;">2,469 m</span></td>
                    <td style="padding: 12px 16px;">3 to 5 hours gentle valley trail</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-primary-navy);">Day 8</td>
                    <td style="padding: 12px 16px;">Drive from Phaplu to Kathmandu</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #f1f5f9; color: #334155;">1,400 m</span></td>
                    <td style="padding: 12px 16px;">8 to 10 hours by road (270 km)</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-primary-navy);">Day 9</td>
                    <td style="padding: 12px 16px;">Transfer to Tribhuvan International Airport for departure</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #f1f5f9; color: #334155;">1,400 m</span></td>
                    <td style="padding: 12px 16px;">Private transfer aligned with flight schedule</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Section 2.2: Day-by-Day Detailed Itinerary Cards (9 Cards) -->
          <div class="itinerary-timeline">

            <!-- Day 01 -->
            <div class="itinerary-card active">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 1:</span> Arrival at Tribhuvan International Airport in Kathmandu and trek preparation
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Kathmandu – approximately <span data-altitude-m="1400">1,400 m / 4,593 ft</span>
                  </p>
                </div>
                <div class="itinerary-header-right">
                  <div class="itinerary-toggle-btn-new">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="itinerary-content">
                <div class="itinerary-content-inner">
                  <div class="itinerary-metrics-list">
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>Transfer Duration: 25 to 35 minutes</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Hotel in Kathmandu</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Activity: Airport meet, pre-trek briefing &amp; gear check</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: According to confirmed package</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Kathmandu (1,400 m)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                    <p>Your Pikey Peak Trek begins with your arrival in Kathmandu, Nepal's capital and the main gateway for the journey into the Solukhumbu region. After landing at Tribhuvan International Airport, you transfer to your hotel according to the confirmed arrangements.</p>
                    <p>The remainder of the day depends on your arrival time. You can rest after your international journey, organize your luggage, and prepare for the road trip to Dhap Bazaar the following day. If you arrive early enough, you may have time to explore nearby streets in Thamel, purchase missing trekking essentials, or exchange money for personal trail expenses.</p>
                    <p>A comprehensive pre-trek briefing is held in the evening. During this meeting, the route, daily walking stages, accommodation, meal arrangements, transportation, and safety considerations are thoroughly reviewed. You can also confirm the road departure time, baggage arrangements, and equipment required for the early-morning summit walk.</p>
                    <p>Check your trekking footwear, warm clothing, rain protection, headlamp, personal medication, and daypack before the journey begins. Keeping essential items accessible will make the next day's drive much more comfortable.</p>
                    <p>Because the journey to Dhap involves several hours on the road, it is helpful to have your main luggage organized and your water bottle, snacks, travel documents, and any motion-sickness medication within reach.</p>
                  </div>

                  <div class="detail-takeaway-box" style="background: #fff7ed; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin-top: 16px;">
                    <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Important Altitude Note:</strong>
                    <p style="margin: 0; color: #334155; line-height: 1.6;">The drive on Day 2 changes sleeping elevation from Kathmandu around 1,400 m to Dhap around 2,850 m in a single day. Arriving by vehicle does not establish acclimatization; hydrate thoroughly and avoid strenuous exertion on your first evening.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Day 02 -->
            <div class="itinerary-card">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 2:</span> Scenic overland drive from Kathmandu to Dhap Bazaar
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Dhap Bazaar – approximately <span data-altitude-m="2850">2,850 m / 9,350 ft</span>
                  </p>
                </div>
                <div class="itinerary-header-right">
                  <div class="itinerary-toggle-btn-new">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="itinerary-content">
                <div class="itinerary-content-inner">
                  <div class="itinerary-metrics-list">
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>Driving Duration: Approximately 8 to 9 hours</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Teahouse / Lodge in Dhap Bazaar</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>
                      </svg>
                      <span>Overland Distance: Approx. 240 km via BP Highway</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast, lunch, and dinner</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Dhap Bazaar (2,850 m)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                    <p>After an early breakfast, you leave Kathmandu and travel overland toward Dhap Bazaar in the lower Everest region. This is generally a full-day road journey, passing through Nepal's scenic mid-hill landscapes, rural settlements, river valleys, and terraced agricultural land.</p>
                    <p>The route commonly follows the Japanese-engineered BP Highway corridor alongside the sparkling Sun Koshi River, connecting with mountain roads leading up into the Solukhumbu district. Along the way, the scenery gradually changes from the bustling urban Kathmandu Valley to quiet pine hillsides, cultivated slopes, small market towns, and traditional farming hamlets. Roadside stops provide opportunities to stretch your legs, enjoy freshly prepared lunch, and purchase refreshments.</p>
                    <p>Dhap Bazaar serves as the starting point for the main walking stages on the standard route. On arrival, you settle into your mountain lodge and prepare for your first walking day. Since the trek begins at an elevation of approximately 2,850 meters, it is useful to take the evening calmly, eat adequately, and get a solid night's rest.</p>
                  </div>

                  <div class="itinerary-photos-grid">
                    <div class="itinerary-photo-wrapper">
                      <img loading="lazy" src="../../images/treks/pikey-peak/pikey-peak-solu-valley-landscape-04.jpg" alt="Scenic road landscape leading to the Solukhumbu district">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Day 03 -->
            <div class="itinerary-card">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 3:</span> Trek from Dhap Bazaar to Jhapre
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Jhapre – approximately <span data-altitude-m="2820">2,820 to 2,920 m / 9,252 to 9,580 ft</span>
                  </p>
                </div>
                <div class="itinerary-header-right">
                  <div class="itinerary-toggle-btn-new">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="itinerary-content">
                <div class="itinerary-content-inner">
                  <div class="itinerary-metrics-list">
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>Trek Duration: Approximately 4 to 6 hours</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Teahouse / Lodge in Jhapre</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                      <span>Distance: Approx. 13 km (8.1 miles)</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast, lunch, and dinner</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Jhapre (2,820 m)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                    <p>After breakfast, you begin the first on-foot trekking stage from Dhap Bazaar toward Jhapre. The route follows village paths, dirt tracks, and hillside trails through the rural landscape of the lower Solukhumbu region.</p>
                    <p>The trail includes gentle sections, short descents, and gradual ascents as you pass through local settlements and cultivated areas. The journey passes near Sigane and other small hamlets along the way, where you will notice mani walls and prayer flags. Mountain views begin to open up to the north when the weather is clear, offering early glimpses of Numbur Himal.</p>
                    <p>Jhapre is an attractive ridge settlement perched at 2,820 m, famous for its picturesque white Buddhist stupa, small local monastery, and unobstructed views over the Solu valley. Arriving in the afternoon gives you time to explore the village, observe local Sherpa mountain culture, and settle into your teahouse.</p>
                  </div>

                  <div class="itinerary-photos-grid">
                    <div class="itinerary-photo-wrapper">
                      <img loading="lazy" src="../../images/treks/pikey-peak/pikey-peak-jhapre-stupa-village-03.jpg" alt="Jhapre Stupa and Village View">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Day 04 -->
            <div class="itinerary-card">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 4:</span> Trek from Jhapre to Pikey Peak Base Camp
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Pikey Peak Base Camp – approximately <span data-altitude-m="3640">3,640 m / 11,942 ft</span>
                  </p>
                </div>
                <div class="itinerary-header-right">
                  <div class="itinerary-toggle-btn-new">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="itinerary-content">
                <div class="itinerary-content-inner">
                  <div class="itinerary-metrics-list">
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>Trek Duration: Approximately 5 to 6 hours</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Teahouse / Lodge at Base Camp</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Elevation Gain: +820 m vertical gain to highest sleep</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast, lunch, and dinner</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Pikey Base Camp (3,640 m)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                    <p>The trek from Jhapre to Pikey Peak Base Camp is one of the most scenic stages of the journey. The trail climbs along open ridgelines and through ancient forests of rhododendron, pine, and fir trees. In spring (March to May), the forest is ablaze with red, pink, and white rhododendron blossoms.</p>
                    <p>As you gain elevation, the trees thin out and give way to open alpine grazing pastures (kharkas) where local herders graze yaks and dzo during warmer months. The route passes traditional mani walls and offers expanding panoramas across the Himalayan skyline, with Numbur Himal dominating the immediate horizon.</p>
                    <p>Reaching Pikey Peak Base Camp at 3,640 m marks your highest overnight sleeping location of the trek. After arriving, your guide will conduct a detailed briefing for the next morning's summit sunrise push. Check your headlamp batteries, warm layers, and gloves, drink plenty of hot garlic soup and ginger tea, and retire to bed early.</p>
                  </div>

                  <div class="itinerary-photos-grid">
                    <div class="itinerary-photo-wrapper">
                      <img loading="lazy" src="../../images/treks/pikey-peak/pikey-peak-ridge-trail-view-05.jpg" alt="Alpine ridgeline approaching Pikey Base Camp">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Day 05 -->
            <div class="itinerary-card">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 5:</span> Sunrise ascent of Pikey Peak (4,065 m) and trek to Jasmane Bhanjyang
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Pikey Peak Summit – <span data-altitude-m="4065">4,065 m / 13,336 ft</span> &bull; Jasmane Bhanjyang – <span data-altitude-m="3550">3,550 m</span>
                  </p>
                </div>
                <div class="itinerary-header-right">
                  <div class="itinerary-toggle-btn-new">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="itinerary-content">
                <div class="itinerary-content-inner">
                  <div class="itinerary-metrics-list">
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>Walking Duration: 5 to 7 hours total (summit + trek)</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Teahouse in Jasmane Bhanjyang</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2L2 22h20L12 2z"></path>
                      </svg>
                      <span>Highlight: 4,065 m Summit Sunrise with 360&deg; Panorama</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast, lunch, and dinner</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Jasmane Bhanjyang (3,550 m)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                    <p>Today is the highlight of the entire trek. You awake between 4:15 AM and 4:45 AM for the pre-dawn summit push to Pikey Peak (4,065 m). Walking under the beam of headlamps, you ascend steady grassy slopes and rocky ridgelines for approximately 1.5 to 2 hours.</p>
                    <p>Reaching the summit cairn adorned with colorful Buddhist prayer flags before dawn, you witness one of the most spectacular sunrises in the Himalayas. As the first rays of sunlight strike the snowcapped peaks, a breathtaking 360-degree panorama unfolds before you. Sir Edmund Hillary famously considered this view of Mount Everest (8,848 m) to be his personal favorite in all of Nepal.</p>
                    <p>On a clear morning, you can see not only Mount Everest, but six 8,000-meter peaks including Kanchenjunga to the far east, Makalu, Lhotse, Cho Oyu, and Manaslu, alongside Thamserku, Ama Dablam, and Langtang Lirung. After savoring the moment and taking photos, you descend to Base Camp for a hearty warm breakfast.</p>
                    <p>Later in the morning, you continue trekking along the high ridge toward Jasmane Bhanjyang (approximately 3,550 m). This descent allows you to enjoy the changing mountain scenery and settle in for a relaxing evening at a lower altitude.</p>
                  </div>

                  <div class="itinerary-photos-grid">
                    <div class="itinerary-photo-wrapper">
                      <img loading="lazy" src="../../images/treks/pikey-peak/pikey-peak-himalayan-sunrise-01.jpg" alt="Pikey Peak Himalayan Sunrise">
                    </div>
                    <div class="itinerary-photo-wrapper">
                      <img loading="lazy" src="../../images/treks/pikey-peak/pikey-peak-summit-cairn-view-06.jpg" alt="Summit Cairn and Prayer Flags at 4,065 m">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Day 06 -->
            <div class="itinerary-card">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 6:</span> Trek from Jasmane Bhanjyang to Junbesi
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Junbesi – approximately <span data-altitude-m="2700">2,680 to 2,700 m / 8,792 to 8,858 ft</span>
                  </p>
                </div>
                <div class="itinerary-header-right">
                  <div class="itinerary-toggle-btn-new">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="itinerary-content">
                <div class="itinerary-content-inner">
                  <div class="itinerary-metrics-list">
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>Trek Duration: Approximately 5 to 6 hours</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Teahouse / Lodge in Junbesi</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>
                      </svg>
                      <span>Descent: Gradual descent through rhododendron forest</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast, lunch, and dinner</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Junbesi (2,700 m)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                    <p>After breakfast in Jasmane Bhanjyang, you begin your descent toward Junbesi, one of the most culturally significant and picturesque Sherpa settlements in the Solukhumbu region. The trail descends through rich moss-draped forest, passing groves of pine, fir, and blooming rhododendron.</p>
                    <p>As you lose elevation, the air warms and the landscape becomes greener, with cultivated terraces, stone walls, and small streams. Junbesi sits nestled in a tranquil valley at 2,700 meters, celebrated for its traditional whitewashed stone architecture, carved wooden window frames, local apple orchards, and historic Buddhist shrines.</p>
                    <p>Arriving in Junbesi gives you the afternoon to explore the village streets, visit the local school founded by Sir Edmund Hillary's Himalayan Trust, or simply relax at your teahouse and sample fresh local apple pie or organic herbal tea.</p>
                  </div>

                  <div class="itinerary-photos-grid">
                    <div class="itinerary-photo-wrapper">
                      <img loading="lazy" src="../../images/treks/pikey-peak/pikey-peak-thupten-chholing-monastery-02.jpg" alt="Thupten Chholing Monastery near Junbesi">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Day 07 -->
            <div class="itinerary-card">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 7:</span> Trek from Junbesi to Phaplu
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Phaplu – approximately <span data-altitude-m="2469">2,469 m / 8,100 ft</span>
                  </p>
                </div>
                <div class="itinerary-header-right">
                  <div class="itinerary-toggle-btn-new">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="itinerary-content">
                <div class="itinerary-content-inner">
                  <div class="itinerary-metrics-list">
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>Trek Duration: Approximately 3 to 5 hours</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Teahouse / Lodge in Phaplu</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                      <span>Distance: Approx. 10 km (6.2 miles)</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast, lunch, and dinner</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Phaplu (2,469 m)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                    <p>The final walking stage is a comparatively relaxed and gentle journey from Junbesi to Phaplu. The trail follows the Junbesi Khola downstream before crossing gentle ridges and passing through small Sherpa farming hamlets such as Beni.</p>
                    <p>Phaplu is an established regional hub with a local airstrip, hospital, and well-appointed lodges. Arriving early in the afternoon allows you to enjoy a hot gas shower, sort your equipment, and celebrate the successful completion of the trekking circuit with your guide and porter crew over an evening farewell dinner.</p>
                  </div>

                  <div class="itinerary-photos-grid">
                    <div class="itinerary-photo-wrapper">
                      <img loading="lazy" src="../../images/treks/pikey-peak/pikey-peak-trekking-team-group-07.jpg" alt="Trekking team celebrating on the trail to Phaplu">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Day 08 -->
            <div class="itinerary-card">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 8:</span> Overland drive from Phaplu to Kathmandu
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Kathmandu – approximately <span data-altitude-m="1400">1,400 m / 4,593 ft</span>
                  </p>
                </div>
                <div class="itinerary-header-right">
                  <div class="itinerary-toggle-btn-new">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="itinerary-content">
                <div class="itinerary-content-inner">
                  <div class="itinerary-metrics-list">
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>Driving Duration: Approximately 8 to 10 hours</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Hotel in Kathmandu</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>
                      </svg>
                      <span>Overland Distance: Approx. 270 km</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast and roadside lunch</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Kathmandu (1,400 m)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                    <p>After an early breakfast in Phaplu, your private 4WD vehicle picks you up for the overland return journey to Kathmandu. (A Salleri pickup is a separately agreed variation).</p>
                    <p>The drive winds through the lower hills of Solukhumbu, descends toward the Sun Koshi River valley, and rejoins the paved BP Highway corridor. The road provides continuous views of terraced hillsides, river canyons, and rural villages. Rest stops are taken along the way for lunch and tea.</p>
                    <p>Arriving back in Kathmandu in the late afternoon or early evening, you check in to your hotel, unpack, enjoy a long hot shower, and take in the comforts of the capital city after your mountain trek.</p>
                  </div>

                  <div class="itinerary-photos-grid">
                    <div class="itinerary-photo-wrapper">
                      <img loading="lazy" src="../../images/treks/pikey-peak/pikey-peak-everest-range-panorama-08.jpg" alt="Final views of the Himalayan range from the return route">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Day 09 -->
            <div class="itinerary-card">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 9:</span> Final departure from Kathmandu
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Tribhuvan International Airport – <span data-altitude-m="1400">1,400 m / 4,593 ft</span>
                  </p>
                </div>
                <div class="itinerary-header-right">
                  <div class="itinerary-toggle-btn-new">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="itinerary-content">
                <div class="itinerary-content-inner">
                  <div class="itinerary-metrics-list">
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>Timing: Aligned with your flight departure</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: None (Trip concludes)</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Transfer: Private airport drop-off (approx. 3 hours before flight)</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast at hotel</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Departure: Tribhuvan International Airport</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                    <p>Today marks the completion of your Pikey Peak adventure in Nepal. Depending on your flight time, you can enjoy a leisurely breakfast at your hotel, do some last-minute souvenir shopping in Thamel, or relax in a garden cafe.</p>
                    <p>Our representative transfers you by private vehicle to Tribhuvan International Airport approximately three hours before your scheduled international flight. As you depart, you carry with you unforgettable memories of the pre-dawn Himalayan sunrise from Pikey Peak, the warm hospitality of Sherpa teahouses, and the pristine mountain trails of the lower Everest region.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Section 2.3: Optional Cultural Excursion & Practical Planning Guidelines -->
          <div style="margin-top: 40px; display: flex; flex-direction: column; gap: 24px;">

            <!-- Optional Excursion Card: Thupten Chholing Monastery -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 26px; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
                <span class="pill pill-copper" style="font-size: 0.75rem; text-transform: uppercase; font-weight: 800;">Cultural Extension</span>
                <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy); margin: 0;">Optional Visit: Sacred Thupten Chholing Monastery</h3>
              </div>
              <p style="color: #475569; font-size: 0.96rem; line-height: 1.7; margin-bottom: 14px;">
                Trekkers interested in local religious traditions may consider extending their stay around Junbesi to visit <strong>Thupten Chholing Monastery</strong>. Established in the late 1960s by the revered Tibetan lama Trulshik Rinpoche, this secluded mountain gompa is one of the most important centers of Tibetan Nyingma Buddhism in Nepal, home to over 300 monks and nuns.
              </p>
              <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin-bottom: 14px;">
                <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Excursion Logistics &amp; Etiquette:</strong>
                <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.6; font-size: 0.92rem;">
                  <li><strong>Trail Access:</strong> Approximately 2.5 to 3 hours round-trip walk from Junbesi village along a scenic stream.</li>
                  <li><strong>Scheduling:</strong> This visit is not automatically included in the fast-paced 9-day schedule; adding 1 extra rest/cultural day in Junbesi is recommended to fully experience the monastery without rushing.</li>
                  <li><strong>Monastery Etiquette:</strong> Visitors are welcome to observe late-morning puja chanting and butter-lamp ceremonies. Maintain silence, remove footwear before entering prayer halls, and always request permission before taking photographs.</li>
                </ul>
              </div>
            </div>

            <!-- Route Summary Stage Table -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
              <div style="padding: 18px 24px; background: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                <h3 style="font-size: 1.18rem; font-weight: 800; color: var(--color-primary-navy); margin: 0;">Pikey Peak Trek Route Summary</h3>
                <span style="font-size: 0.82rem; color: #64748b;">Road-based approach &amp; walking stages across the lower Everest region</span>
              </div>
              <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.92rem;">
                  <thead>
                    <tr style="background: #f1f5f9; color: #334155; font-weight: 700; border-bottom: 2px solid #e2e8f0;">
                      <th style="padding: 12px 18px;">Route Stage</th>
                      <th style="padding: 12px 18px;">Main Experience &amp; Landscape Highlights</th>
                    </tr>
                  </thead>
                  <tbody style="color: #475569;">
                    <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 12px 18px; font-weight: 700; color: var(--color-primary-navy);">Kathmandu to Dhap Bazaar</td><td style="padding: 12px 18px;">Scenic overland journey through Nepal's mid-hill landscapes, Sun Koshi River valley, and rural terraced farmlands.</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;"><td style="padding: 12px 18px; font-weight: 700; color: var(--color-primary-navy);">Dhap Bazaar to Jhapre</td><td style="padding: 12px 18px;">First trekking stage following village paths, pine forest ridges, and historic Buddhist stupas.</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 12px 18px; font-weight: 700; color: var(--color-primary-navy);">Jhapre to Pikey Peak Base Camp</td><td style="padding: 12px 18px;">Ascent through ancient rhododendron and fir forests to high alpine pastures (kharkas) with Numbur Himal views.</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;"><td style="padding: 12px 18px; font-weight: 700; color: var(--color-copper-orange);">Pikey Peak Summit (4,065 m)</td><td style="padding: 12px 18px;">Early-morning pre-dawn ascent for Hillary's favorite 360-degree Himalayan sunrise panorama of Everest, Kanchenjunga, and Makalu.</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 12px 18px; font-weight: 700; color: var(--color-primary-navy);">Summit Area to Jasmane Bhanjyang</td><td style="padding: 12px 18px;">Descent through open ridgelines and alpine scrub to a quiet mountain pass settlement.</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;"><td style="padding: 12px 18px; font-weight: 700; color: var(--color-primary-navy);">Jasmane Bhanjyang to Junbesi</td><td style="padding: 12px 18px;">Continued descent through moss-draped forests into the cultural Sherpa heartland of Junbesi with apple orchards.</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 12px 18px; font-weight: 700; color: var(--color-primary-navy);">Junbesi to Phaplu</td><td style="padding: 12px 18px;">Gentle final walking stage along the Junbesi Khola to the road-accessible exit hub of Phaplu.</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;"><td style="padding: 12px 18px; font-weight: 700; color: var(--color-primary-navy);">Phaplu to Kathmandu</td><td style="padding: 12px 18px;">Return overland 4WD journey via Okhaldhunga and the BP Highway back to the capital.</td></tr>
                    <tr><td style="padding: 12px 18px; font-weight: 700; color: var(--color-primary-navy);">Kathmandu Departure</td><td style="padding: 12px 18px;">Private airport transfer aligned with onward international travel.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Practical Planning & Safety Expectations Card -->
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 26px;">
              <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--color-primary-navy); margin-top: 0; margin-bottom: 10px;">Walking Times, Elevation &amp; Practical Expectations</h3>
              <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 12px;">
                Daily walking times depend on individual pace, weather conditions, trail maintenance, and group rest breaks. The figures in this itinerary are intended to provide a realistic planning framework rather than a rigid schedule.
              </p>
              <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 12px;">
                Although reaching 4,065 meters at Pikey Peak requires no technical climbing skills, the early pre-dawn start, sub-zero wind temperatures, and consecutive walking stages demand appropriate physical preparation, warm layered clothing, and proper footwear.
              </p>
              <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 0;">
                The standard itinerary should always be adjusted when necessary to protect traveler safety, maintain an appropriate pace, and respond to weather or transportation disruptions. Reaching a planned destination should never take priority over responding to altitude symptoms or unsafe conditions.
              </p>
            </div>

          </div>
        </section>
`;
}

module.exports = { getItinerarySection };
