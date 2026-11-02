// Module 4: Section 2 - 20-Day Itinerary for Dhaulagiri Circuit Trek
// Upgraded to match canonical flagship template (Everest Base Camp & Pikey Peak)
function getItinerarySection() {
  return `
        <!-- Section 2: Itinerary -->
        <section id="section-itinerary" class="trek-detail-section">
          <!-- Section Heading & Global Action Bar -->
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 20px;">
            <div>
              <h2 class="trek-section-title" style="margin-bottom: 0;">Dhaulagiri Circuit Trek Itinerary: Day by Day Details</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px;"></div>
            </div>
            <button type="button" id="toggle-all-itinerary" class="btn btn-outline" style="padding: 8px 18px; font-size: 0.88rem; font-weight: 700; border-radius: 8px; border: 1px solid #cbd5e1; background: #ffffff; color: var(--color-primary-navy); cursor: pointer; transition: all 0.2s ease;">
              Expand All Days
            </button>
          </div>

          <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-top: 16px; margin-bottom: 16px;">
            Our 20-calendar-day Dhaulagiri Circuit Trek itinerary is built around a gradual, expedition-supported approach to high altitude rather than an accelerated race around the massif. Starting with an overland approach through Beni and Babiyachaur into the lush Myagdi Valley, the route progresses along traditional Magar trails, ascends through remote alpine gorges to Italian Base Camp (<span data-altitude-m="3660">3,660 m / 12,008 ft</span>), negotiates the active Chhonbardan Glacier to Dhaulagiri Base Camp (<span data-altitude-m="4750">4,750 m / 15,584 ft</span>), crosses the panoramic French Pass (<span data-altitude-m="5360">5,360 m / 17,585 ft</span>) into high-altitude Hidden Valley (<span data-altitude-m="5200">5,200 m / 17,060 ft</span>), and traverses Dhampus Pass (<span data-altitude-m="5250">5,250 m / 17,224 ft</span>) before descending into the Kali Gandaki Valley at Jomsom.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 16px;">
            The itinerary features 13 dedicated walking stages (Days 5 to 17) accompanied by full expedition camping support, two mandatory acclimatization rest days at Italian Base Camp and Dhaulagiri Base Camp, road transfers from Kathmandu to the Myagdi trailhead, a scenic mountain flight from Jomsom to Pokhara, and return travel to Kathmandu.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 24px;">
            Unlike standard teahouse routes, upper Dhaulagiri requires a complete, self-sustained expedition infrastructure. Professional high-altitude mountain guides, cooks, kitchen staff, and porters transport all 4-season alpine camping gear, dining tents, kitchen equipment, fresh food supplies, and safety reserves across the high passes.
          </p>

          <!-- Before Your Trek Starts Guidance Box -->
          <h3 style="font-size: 1.35rem; color: var(--color-primary-navy); font-weight: 700; margin-top: 32px; margin-bottom: 14px; line-height: 1.35;">
            Before Your Dhaulagiri Circuit Trek Starts
          </h3>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
            The start date you select is your arrival date in Kathmandu. Your actual expedition preparation and mandatory gear check take place on Day 2 in Kathmandu before departing overland toward Beni and the Myagdi Valley on Day 3.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
            During your pre-trek briefing in Kathmandu, your expedition leader reviews the day-by-day staging, high-pass weather forecasts, acclimatization protocol, and camping routines. Our gear specialists inspect all mandatory alpine equipment—including high-altitude mountaineering boots, crampons or microspikes, -20°C sleeping bag, insulated down parka, glacier glasses (Category 4 UV), and waterproof shell layers. Any missing items must be procured or rented in Kathmandu before departure, as no equipment shops exist after leaving Beni.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
            Because upper Dhaulagiri traverses completely uninhabited glacial moraine and high-altitude alpine zones with zero teahouse infrastructure between Dobang and Marpha, our crew transports complete expedition camping gear, heavy-duty 4-season alpine tents, mess and kitchen tents, kitchen equipment, fresh produce, and high-calorie expedition rations.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 28px; line-height: 1.7;">
            We strongly recommend booking travel insurance that explicitly covers high-altitude search, medical treatment, and emergency helicopter evacuation up to 6,000 meters elevation. Additionally, scheduling 2–3 contingency days in Nepal following the trek is highly recommended to protect against weather delays affecting the Jomsom–Pokhara mountain flight.
          </p>

          <!-- 4 Trip Stat Badges Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 28px;">
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px; display: flex; align-items: center; gap: 12px;">
              <div style="width: 36px; height: 36px; border-radius: 8px; background: #fff7ed; color: var(--color-copper-orange); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div>
                <span style="font-size: 0.72rem; text-transform: uppercase; color: #64748b; font-weight: 700; display: block;">Total Days</span>
                <strong style="color: var(--color-primary-navy); font-size: 0.95rem;">20 Calendar Days</strong>
              </div>
            </div>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px; display: flex; align-items: center; gap: 12px;">
              <div style="width: 36px; height: 36px; border-radius: 8px; background: #e6f7f0; color: #008060; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <div>
                <span style="font-size: 0.72rem; text-transform: uppercase; color: #64748b; font-weight: 700; display: block;">WALKING STAGES</span>
                <strong style="color: var(--color-primary-navy); font-size: 0.95rem;">13 Walking Days (Days 5–17)</strong>
              </div>
            </div>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px; display: flex; align-items: center; gap: 12px;">
              <div style="width: 36px; height: 36px; border-radius: 8px; background: #eff6ff; color: #2563eb; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 22h20L12 2z"></path></svg>
              </div>
              <div>
                <span style="font-size: 0.72rem; text-transform: uppercase; color: #64748b; font-weight: 700; display: block;">MAX ELEVATION</span>
                <strong style="color: var(--color-primary-navy); font-size: 0.95rem;"><span data-altitude-m="5360">5,360 m</span> (French Pass)</strong>
              </div>
            </div>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px; display: flex; align-items: center; gap: 12px;">
              <div style="width: 36px; height: 36px; border-radius: 8px; background: #fdf4ff; color: #a855f7; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div>
                <span style="font-size: 0.72rem; text-transform: uppercase; color: #64748b; font-weight: 700; display: block;">ACCLIMATIZATION</span>
                <strong style="color: var(--color-primary-navy); font-size: 0.95rem;">2 Scheduled Days (3,660m &amp; 4,750m)</strong>
              </div>
            </div>
          </div>

          <!-- Section 2.1: Itinerary at a Glance Table -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <div style="padding: 16px 20px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
              <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--color-primary-navy); margin: 0;">Itinerary at a Glance</h3>
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--color-copper-orange); background: #fff7ed; padding: 3px 10px; border-radius: 12px;">Days 1 to 20</span>
            </div>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem;">
                <thead>
                  <tr style="background: #fafafa; border-bottom: 2px solid #e2e8f0; color: var(--color-primary-navy);">
                    <th style="padding: 12px 16px; font-weight: 700;">Day</th>
                    <th style="padding: 12px 16px; font-weight: 700;">Scheduled Overnight</th>
                    <th style="padding: 12px 16px; font-weight: 700;">Sleeping Elevation</th>
                    <th style="padding: 12px 16px; font-weight: 700;">Daytime Activity / Staging</th>
                  </tr>
                </thead>
                <tbody style="color: #475569;">
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 1–2</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Kathmandu</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #f1f5f9; color: #334155;"><span data-altitude-m="1355">1,355 m (4,445 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Arrival, trek briefing, permit checks, and valley sightseeing</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 3</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Beni</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #f1f5f9; color: #334155;"><span data-altitude-m="836">836 m (2,743 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Scenic overland drive via Prithvi Highway (7–9 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 4</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Babiyachaur</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #f1f5f9; color: #334155;"><span data-altitude-m="970">970 m (3,182 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Road transfer into Myagdi Valley; walking starts Day 5</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 5</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Dharapani (Myagdi)</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #eff6ff; color: #1d4ed8;"><span data-altitude-m="1560">1,560 m (5,118 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Trek starts: village paths and terraced valley hillsides (5–6 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 6</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Muri</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #eff6ff; color: #1d4ed8;"><span data-altitude-m="1850">1,850 m (6,070 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Magar village approach; first views of Dhaulagiri I (5–6 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 7</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Boghara</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #eff6ff; color: #1d4ed8;"><span data-altitude-m="2080">2,080 m (6,824 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Stone staircase climbs and canyon trail undulations (6–7 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 8</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Dobang</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #eff6ff; color: #1d4ed8;"><span data-altitude-m="2520">2,520 m (8,268 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Bamboo and rhododendron gorge; final teahouse transition (6–7 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 9</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Choriban Khola</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #fff7ed; color: #c2410c;"><span data-altitude-m="3110">3,110 m (10,203 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Transition to full expedition-supported tented camping (5 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 10</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Italian Base Camp</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #fff7ed; color: #c2410c;"><span data-altitude-m="3660">3,660 m (12,008 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Ascent into alpine amphitheater beneath Dhaulagiri west face (5–6 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #f0fdf4;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 11</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Italian Base Camp</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #dcfce7; color: #15803d;"><span data-altitude-m="3660">3,660 m (12,008 ft)</span></span></td>
                    <td style="padding: 12px 16px; color: #16a34a; font-weight: 700;">Mandatory Acclimatization &amp; Rest Day (active ridge hike)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 12</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Glacier Camp</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #fff7ed; color: #c2410c;"><span data-altitude-m="4200">4,200 m (13,780 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Chhonbardan Glacier moraine traverse and rock navigation (5–6 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 13</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Dhaulagiri Base Camp</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #fef2f2; color: #b91c1c;"><span data-altitude-m="4750">4,750 m (15,584 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Glacier spine climb into high base camp beneath Dhaulagiri I (4–5 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #f0fdf4;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 14</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Dhaulagiri Base Camp</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #dcfce7; color: #15803d;"><span data-altitude-m="4750">4,750 m (15,584 ft)</span></span></td>
                    <td style="padding: 12px 16px; color: #16a34a; font-weight: 700;">Mandatory Acclimatization &amp; French Pass Preparation Day</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fef2f2;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 15</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Hidden Valley</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #fee2e2; color: #991b1b;"><span data-altitude-m="5200">5,200 m (17,060 ft)</span></span></td>
                    <td style="padding: 12px 16px; color: #dc2626; font-weight: 700;">Cross French Pass (<span data-altitude-m="5360">5,360 m / 17,585 ft</span>) into high basin (7–8+ hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fef2f2;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 16</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Yak Kharka</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #fff7ed; color: #c2410c;"><span data-altitude-m="3680">3,680 m (12,073 ft)</span></span></td>
                    <td style="padding: 12px 16px; color: #dc2626; font-weight: 700;">Cross Dhampus Pass (<span data-altitude-m="5250">5,250 m</span>) and descend 1,570 m (7–8+ hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 17</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Jomsom</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #eff6ff; color: #1d4ed8;"><span data-altitude-m="2720">2,720 m (8,924 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Descent to Kali Gandaki Valley; visit Marpha &amp; hotel celebration (6–7 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 18</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Pokhara</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #f1f5f9; color: #334155;"><span data-altitude-m="822">822 m (2,697 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Scenic mountain flight over Kali Gandaki Gorge; lakeside hotel</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 19</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Kathmandu</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #f1f5f9; color: #334155;"><span data-altitude-m="1355">1,355 m (4,445 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Overland drive back to capital (6–8 hrs); farewell cultural dinner</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 20</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Departure</td>
                    <td style="padding: 12px 16px;">Homebound</td>
                    <td style="padding: 12px 16px;">Private hotel-to-airport transfer according to international flight</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Section 2.2: Day-by-Day Detailed Itinerary Cards (20 Cards) -->
          <div class="itinerary-timeline">
            <!-- Day 01 -->
            <div class="itinerary-card active" id="day-1">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 1:</span> Arrival at Tribhuvan International Airport in Kathmandu
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Kathmandu – approximately <span data-altitude-m="1355">1,355 m / 4,445 ft</span>
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
                      <span>Duration / Timing: 20 to 40 minutes private airport transfer</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: Airport to Thamel Hotel (6–8 km)</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: 3-Star Boutique Hotel in Thamel</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: Airport welcome, private transfer, trip orientation & rest</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Welcome Dinner included</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Kathmandu (<span data-altitude-m="1355">1,355 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>Your Dhaulagiri Circuit Trek begins with your arrival at Tribhuvan International Airport in Kathmandu. After completing airport formalities, you will meet the designated representative and transfer to your hotel. The drive generally takes around 20 to 40 minutes, depending on traffic and the hotel's location.</p>
                      <p>Once you have checked in, the remainder of the day is available for resting after international travel. Depending on your arrival time and energy level, you may explore the surrounding neighborhood, visit nearby shops, or enjoy a meal at a local restaurant. Keeping the schedule relaxed is advisable because the coming days involve equipment preparation, road travel, and a demanding mountain itinerary.</p>
                      <p>Kathmandu is the main preparation point for the expedition. Before entering the Dhaulagiri region, you will need to confirm your trekking equipment, personal medication, travel insurance, passport details, and the arrangements for the guide and expedition crew.</p>
                      <p>Use the arrival day to identify any missing personal items and inform the trip coordinator if your luggage has been delayed. Important equipment should be organized before departure from Kathmandu because replacement options become limited after you enter the remote trekking region.</p>
                      <p>The guide or trip coordinator will confirm the meeting time for the following day and explain the initial arrangements. Keep your passport, insurance documents, emergency contact information, and essential medication in a secure and accessible place.</p>
                      <p>The first day focuses on arrival and recovery rather than strenuous activity. Getting sufficient rest helps you begin the expedition in a better condition for the preparation and travel stages ahead.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 02 -->
            <div class="itinerary-card" id="day-2">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 2:</span> Kathmandu Valley Sightseeing & Expedition Gear Preparation
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Kathmandu – approximately <span data-altitude-m="1355">1,355 m / 4,445 ft</span>
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
                      <span>Duration / Timing: Full day cultural sightseeing & gear staging</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: City transit & gear inspection</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: 3-Star Boutique Hotel in Thamel</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: UNESCO Heritage site exploration, gear check & ACAP/TIMS permit verification</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast included</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Kathmandu (<span data-altitude-m="1355">1,355 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>The second day combines preparation for the Dhaulagiri expedition with an opportunity to explore selected cultural and heritage sites in the Kathmandu Valley. The sightseeing program depends on the available time, traffic, and the amount of preparation required before departure.</p>
                      <p>After breakfast, you may visit heritage locations that introduce Nepal's religious architecture, traditional urban settlements, and cultural history. Possible stops include selected historic squares, Buddhist stupas, or Hindu temple complexes. The final selection should be confirmed according to the operating schedule rather than assuming that every major attraction can be visited in one day.</p>
                      <p>The remainder of the day is important for final expedition preparation. Review the 20-day itinerary, confirm the transportation arrangements, and check that you have suitable trekking boots, warm clothing, waterproof layers, a headlamp, a sleeping bag if required, and other personal equipment. Verify which tents, sleeping mats, and camping supplies are provided by the package.</p>
                      <p>Your guide or trip coordinator should also explain the expedition's practical arrangements, including the baggage allowance, porters, cook and kitchen crew, camping routines, and how meals will be handled in the remote sections. This is the time to clarify which expenses are included and which remain your responsibility.</p>
                      <p>Travel insurance requires particular attention because the itinerary reaches elevations above 5,000 m. Confirm that your policy covers the intended trekking activity and maximum elevation, along with appropriate emergency medical and evacuation benefits.</p>
                      <p>Review the symptoms of altitude-related illness and understand how to communicate health concerns to the guide. Although the lower approach provides some time to establish a walking routine, it does not eliminate the risks associated with the high camps and mountain passes.</p>
                      <p>Finish the day by organizing your luggage and preparing for the drive toward Beni. Keep essentials accessible and avoid carrying unnecessary items into the mountains.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 03 -->
            <div class="itinerary-card" id="day-3">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 3:</span> Drive from Kathmandu to Beni via Prithvi Highway
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Beni – approximately <span data-altitude-m="836">836 m / 2,743 ft</span>
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
                      <span>Duration / Timing: Approximately 7 to 9 hours scenic drive</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: 285 km overland journey</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Hotel or Guesthouse in Beni</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: Scenic highway drive along Trishuli and Kali Gandaki river valleys</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast, Lunch & Dinner included</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Beni (<span data-altitude-m="836">836 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>After breakfast, begin the overland journey from Kathmandu toward Beni, an important gateway to the Dhaulagiri trekking region. The drive commonly takes around 7 to 9 hours or longer, depending on traffic, construction, weather, and the condition of the road.</p>
                      <p>The journey follows Nepal's middle hills and river valleys, passing towns, agricultural areas, and rural settlements. As you travel westward, the landscape gradually changes from the busy Kathmandu Valley toward the mountainous surroundings of the Myagdi region.</p>
                      <p>Road travel takes up a substantial part of the day, so it is sensible to carry drinking water, personal snacks, and any essential medication where they are easily accessible. Stops for meals and refreshments depend on the driver, route, traffic, and travel schedule.</p>
                      <p>Beni is an important transportation and supply point for journeys into the Myagdi Valley. Reaching the town brings you closer to the trekking region, although the route still includes further road access and several walking stages before the expedition reaches the upper Dhaulagiri camps.</p>
                      <p>After arriving, settle into your accommodation and check the equipment you will need for the following days. Confirm the next morning's departure arrangement and clarify whether the journey to Babiyachaur will be completed by vehicle under the planned itinerary.</p>
                      <p>The road journey can be affected by temporary disruptions. If travel takes longer than expected, the group should follow the revised arrangements rather than trying to compensate by rushing the next stage.</p>
                      <p>Beni provides the first practical transition from city travel toward the expedition. Use the evening to rest, eat adequately, and ensure that your personal belongings are organized for the upcoming road and trekking stages.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 04 -->
            <div class="itinerary-card" id="day-4">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 4:</span> Drive from Beni to Babiyachaur
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Babiyachaur – approximately <span data-altitude-m="970">970 m / 3,182 ft</span>
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
                      <span>Duration / Timing: Approximately 2 to 3 hours road transfer</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: 24 km along Myagdi river road</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Local Lodge / Guesthouse in Babiyachaur</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: 4WD road transfer into Myagdi Valley; final roadhead staging</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast, Lunch & Dinner included</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Babiyachaur (<span data-altitude-m="970">970 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>Today's journey continues from Beni toward Babiyachaur, following the road network into the Myagdi Valley. This stage provides further access to the trekking region and helps position the group for the walking route beginning the following day.</p>
                      <p>The drive passes through rural settlements and cultivated landscapes, with views of the surrounding hills and river valleys. Road quality may vary, and journey times depend on the selected vehicle, weather, traffic, and current access conditions. The exact drop-off point should be confirmed before departure because rural road access may change with maintenance or seasonal disruption.</p>
                      <p>Although the journey is shorter than the drive from Kathmandu, it is still important to allow adequate time for the transfer and any stops required along the way. Travelers should keep their daypacks and essential belongings separate from the main luggage so that important items remain accessible.</p>
                      <p>Babiyachaur is part of the lower Myagdi Valley approach to the Dhaulagiri Circuit. From this area, the itinerary transitions toward walking through mountain villages and increasingly rugged terrain. The road approach helps reduce the distance covered on foot before the group begins the sustained trekking stages.</p>
                      <p>After arrival, take time to organize trekking equipment, check your footwear, and prepare clothing appropriate for the next day's conditions. Review the daypack essentials, including water, snacks, waterproof layers, a warm layer, personal medication, and sun protection.</p>
                      <p>The guide will explain the following day's route and estimated walking duration. This is a good opportunity to clarify the baggage arrangements and the responsibilities of the support team before the expedition begins in earnest.</p>
                      <p>The overnight stay in Babiyachaur provides a practical staging point for the transition from road travel to walking in the Myagdi Valley.</p>
                      <p>Dharapani here is the Myagdi approach settlement, not the same-named Annapurna Circuit stop. Confirm the actual trailhead and connected route rather than substituting an alternative road-access point into this schedule.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 05 -->
            <div class="itinerary-card" id="day-5">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 5:</span> Trek from Babiyachaur to Dharapani (Myagdi)
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Dharapani – approximately <span data-altitude-m="1560">1,560 m / 5,118 ft</span>
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
                      <span>Duration / Timing: Approximately 5 to 6 hours walking</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: Approximately 10 km</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Guesthouse / Local Lodge in Dharapani</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: Foot trekking commences through terraced hillsides and rural villages</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast, Lunch & Dinner included</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Dharapani (<span data-altitude-m="1560">1,560 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>The main trekking section begins as you leave Babiyachaur and walk toward Dharapani. Today's route moves through the lower Myagdi Valley, with village paths, cultivated slopes, rural settlements, and sections of uneven trail forming part of the journey.</p>
                      <p>The walking day introduces the rhythm of the expedition. You will begin managing regular breaks, carrying your daypack, and maintaining a sustainable pace over several hours. Although the elevation remains relatively low compared with the upper camps, the trail can include both uphill and downhill sections.</p>
                      <p>The route provides opportunities to observe the agricultural landscape and everyday life of the communities along the valley. Terraced fields and scattered houses are features of the rural setting, while the surrounding hills gradually become more prominent as you move farther into the region.</p>
                      <p>Your guide will help establish an appropriate walking pace and indicate where to take breaks. Avoid rushing during the first trekking day, especially if you have recently completed a long road journey. A comfortable pace makes it easier to maintain energy across the following stages.</p>
                      <p>The exact duration and distance depend on the trail used and current conditions. The group should allow time for meals, rest stops, and any slower sections caused by weather or uneven ground.</p>
                      <p>After reaching Dharapani, settle into the planned accommodation and take time to recover. Check your feet for rubbing or blisters, refill your water bottles, and make sure your rain protection and warm clothing remain accessible.</p>
                      <p>This stage is an important introduction to walking in the Myagdi Valley, preparing you for the longer ascents and more remote sections ahead.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 06 -->
            <div class="itinerary-card" id="day-6">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 6:</span> Trek from Dharapani to Muri
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Muri – approximately <span data-altitude-m="1850">1,850 m / 6,070 ft</span>
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
                      <span>Duration / Timing: Approximately 5 to 6 hours walking</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: Approximately 12 km</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Guesthouse / Local Lodge in Muri</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: Ascent through traditional Magar villages; first panoramic glimpse of Dhaulagiri I</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast, Lunch & Dinner included</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Muri (<span data-altitude-m="1850">1,850 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>After breakfast, continue toward Muri along village trails and hillside paths in the Myagdi Valley. This stage gradually increases the trekking challenge through a combination of ascents, descents, and uneven terrain.</p>
                      <p>The surrounding landscape may include cultivated terraces, forested slopes, small settlements, and views across the valley when visibility permits. The route follows the terrain rather than a perfectly level path, so your walking speed will vary with the gradient and trail surface.</p>
                      <p>Muri is a notable settlement along the approach to the Dhaulagiri region. It offers another opportunity to experience the rural mountain environment before the route moves farther into areas where regular facilities are more limited.</p>
                      <p>As you walk, focus on steady progress rather than maintaining a fast pace. Take appropriate breaks, drink regularly, and address any discomfort with your boots or backpack early. These small measures become increasingly important as the trek progresses into more demanding terrain.</p>
                      <p>The elevation at Muri is approximately 1,850 m, although exact values vary by location and map source. At this stage, altitude itself is not usually the main challenge for a prepared walker; the cumulative walking effort and changes in trail elevation are more relevant.</p>
                      <p>Upon arrival, take time to eat and rest. Review the next day's stage toward Boghara, including its expected duration and terrain. Organize your daypack and check that essential items are accessible rather than packed in luggage carried separately.</p>
                      <p>The walk to Muri continues the gradual transition from the lower valley into the Dhaulagiri region, allowing the group to develop a consistent trekking rhythm before the more remote stages begin.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 07 -->
            <div class="itinerary-card" id="day-7">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 7:</span> Trek from Muri to Boghara
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Boghara – approximately <span data-altitude-m="2080">2,080 m / 6,824 ft</span>
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
                      <span>Duration / Timing: Approximately 6 to 7 hours walking</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: Approximately 12 km</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Guesthouse / Local Lodge in Boghara</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: Stone staircase ascents, forested river gorges and suspension bridge crossings</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast, Lunch & Dinner included</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Boghara (<span data-altitude-m="2080">2,080 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>Today's route continues from Muri toward Boghara, taking you farther along the mountain trails of the Myagdi Valley. The walk combines sustained uphill sections, descents, and uneven paths through a landscape of hillsides, vegetation, and rural settlements.</p>
                      <p>The route requires a measured pace because the terrain can become more demanding than the lower approach. Stone steps and narrow paths may appear in some sections, and the trail's condition can vary with recent rain, seasonal changes, and local maintenance.</p>
                      <p>As you move toward Boghara, the route becomes more remote and the organization of overnight accommodation and supplies takes on greater importance. The group is gradually approaching the area where permanent facilities become less dependable and expedition camping becomes a more significant part of the plan.</p>
                      <p>The guide will help coordinate the day's progress and identify appropriate rest points. Use breaks to drink water, eat snacks, and check that your clothing is comfortable. On a multi-day trek, conserving energy is often more effective than walking quickly and becoming exhausted early.</p>
                      <p>Boghara provides a stopping point before the route continues toward Dobang and the more isolated upper valley. When you arrive, confirm the next day's departure time and understand the planned accommodation arrangements.</p>
                      <p>You should also make sure that your headlamp, waterproof clothing, warm layer, and personal medication are easy to reach. As the group moves higher, the environment becomes less convenient for obtaining replacement equipment or additional supplies.</p>
                      <p>This stage contributes to the progressive nature of the Dhaulagiri Circuit. You are still moving through inhabited terrain, but the route is gradually leading toward the more remote mountain sections that define the expedition.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 08 -->
            <div class="itinerary-card" id="day-8">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 8:</span> Trek from Boghara to Dobang
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Dobang – approximately <span data-altitude-m="2520">2,520 m / 8,268 ft</span>
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
                      <span>Duration / Timing: Approximately 6 to 7 hours walking</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: Approximately 13 km</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Local Lodge / Supported Wilderness Camp in Dobang</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: Dense bamboo and rhododendron forest ascent; final village-lodge transition</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast, Lunch & Dinner included</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Dobang (<span data-altitude-m="2520">2,520 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>After breakfast, continue toward Dobang through increasingly remote terrain in the Myagdi Valley. The route may include forested paths, steep hillside sections, uneven ground, and further elevation gain.</p>
                      <p>This stage is an important transition toward the upper Dhaulagiri region. The trail moves farther away from the larger settlements, and services become more limited. Depending on the final operating plan, Dobang may be among the last stops where village-style accommodation is available before the group relies more heavily on camping.</p>
                      <p>Walking conditions depend on the route, weather, and trail maintenance. Some sections may feel slow because of uneven ground or repeated changes in gradient. Maintain a steady pace and pay attention during descents, when tired legs can affect balance.</p>
                      <p>The surrounding vegetation and landscape continue to change as the elevation increases. The day is less about reaching a particular viewpoint and more about steadily progressing toward the remote upper valley while managing the physical demands of consecutive trekking days.</p>
                      <p>On arrival at Dobang, review the upcoming camping stages with the guide or expedition leader. Confirm how the crew will manage the equipment and food supplies required farther up the route, and make sure your personal daypack contains the items you will need during the walk.</p>
                      <p>Take time to check footwear and adjust any areas of discomfort. Blisters and poorly fitting equipment can become increasingly problematic once the group enters remote terrain, where replacement supplies may not be readily available.</p>
                      <p>The evening should focus on rest, sufficient food, hydration, and preparation for the following stage toward Choriban Khola.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 09 -->
            <div class="itinerary-card" id="day-9">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 9:</span> Trek from Dobang to Choriban Khola
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Choriban Khola – approximately <span data-altitude-m="3110">3,110 m / 10,203 ft</span>
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
                      <span>Duration / Timing: Approximately 5 hours walking</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: Approximately 10 km</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Supported Alpine Tented Camp at Choriban Khola</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: Ascent into upper Myagdi gorge; transition to full expedition-supported camping</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Expedition meals (Breakfast, Lunch & Dinner)</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Choriban Khola (<span data-altitude-m="3110">3,110 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>The expedition continues into higher mountain terrain as you walk from Dobang toward Choriban Khola. The elevation gain marks a more noticeable transition from the lower valley into the environment of the upper Dhaulagiri route.</p>
                      <p>The trail passes through increasingly remote surroundings, with changing vegetation and sections of uneven ground. Depending on the route, you may encounter forested paths, rocky sections, steep gradients, and terrain where progress is slower than expected.</p>
                      <p>As the overnight elevation approaches 3,100 m, it is important to pay closer attention to your physical condition. Walking at a steady pace, eating adequately, and drinking regularly can help manage the exertion, but they do not eliminate the risk of altitude-related illness.</p>
                      <p>Inform the guide promptly if you develop a headache, nausea, dizziness, unusual fatigue, or other symptoms that may indicate a health problem. Do not continue ascending if symptoms suggest altitude illness until the situation has been assessed appropriately.</p>
                      <p>Choriban Khola is part of the transition toward remote camping. The accommodation and facilities may be simpler than those in the lower villages, and arrangements depend on the actual operating route and campsite.</p>
                      <p>After reaching camp, allow time to recover and prepare for the ascent toward Italian Base Camp. Make sure your warm layers, waterproof clothing, headlamp, and sleeping equipment are ready for the next stage. The group should also review the route, estimated duration, and current weather conditions before continuing.</p>
                      <p>This is a key day in the gradual approach to higher elevation. A conservative pace and attention to individual health are important as the itinerary moves into more demanding terrain.</p>
                      <p>The printed Choriban Khola ~3,110 m → Italian Base Camp ~3,660 m stage gains about 550 m in sleeping elevation. Review this with the actual camp locations and the group’s response to altitude; a subsequent rest day does not make every preceding gain appropriate for every traveler.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 10 -->
            <div class="itinerary-card" id="day-10">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 10:</span> Trek from Choriban Khola to Italian Base Camp
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Italian Base Camp – approximately <span data-altitude-m="3660">3,660 m / 12,008 ft</span>
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
                      <span>Duration / Timing: Approximately 5 to 6 hours walking</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: Approximately 12 km</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Supported Alpine Tented Camp at Italian Base Camp</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: Ascent into high alpine amphitheater directly beneath Dhaulagiri West Face</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Expedition meals (Breakfast, Lunch & Dinner)</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Italian Base Camp (<span data-altitude-m="3660">3,660 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>Today's trek continues toward Italian Base Camp, one of the main staging points before the upper Dhaulagiri camps. The route gains elevation and moves into a more exposed mountain environment where views of the surrounding peaks may become more prominent when weather conditions allow.</p>
                      <p>Walking conditions can be demanding because of the ascent, rugged ground, and increasing altitude. Maintain a slow, consistent pace and avoid unnecessary exertion. At higher elevation, even a moderate gradient can feel more strenuous than the same terrain would at a lower altitude.</p>
                      <p>The exact route may involve rocky ground and other uneven surfaces. Follow the guide's instructions and remain with the group rather than attempting unverified shortcuts. The expedition team will coordinate the movement of supplies and camping equipment, while you should carry the essentials required during the day's walk.</p>
                      <p>Italian Base Camp, commonly reported at approximately 3,660 m, is an important overnight stop because it provides time to rest before the route continues toward Glacier Camp and Dhaulagiri Base Camp. The surrounding landscape may include open mountain slopes, rocky terrain, and views toward the Dhaulagiri massif, depending on visibility.</p>
                      <p>On arrival, the crew will establish the camp and organize the evening meal. Conditions can be cold, so put on an insulating layer before your body cools down after walking. Eat adequately, drink water, and avoid unnecessary strenuous activity after reaching camp.</p>
                      <p>The following day is reserved for acclimatization and rest. Use the evening to organize your equipment, review the next stage, and communicate any symptoms or concerns to the guide.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 11 -->
            <div class="itinerary-card" id="day-11">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 11:</span> Acclimatization and Rest Day at Italian Base Camp
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Italian Base Camp – approximately <span data-altitude-m="3660">3,660 m / 12,008 ft</span>
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
                      <span>Duration / Timing: 2 to 3 hours optional ridge acclimatization hike</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: Acclimatization excursion & rest</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Supported Alpine Tented Camp at Italian Base Camp</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: Mandatory altitude acclimatization, pulse-oximetry checks & glacier reconnaissance</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Expedition meals (Breakfast, Lunch & Dinner)</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Italian Base Camp (<span data-altitude-m="3660">3,660 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>Today is reserved for acclimatization and recovery at Italian Base Camp. After several days of walking and a considerable increase in elevation, a rest day provides an opportunity to assess how the group is responding before continuing to higher camps.</p>
                      <p>The day should remain flexible. A short acclimatization walk may be appropriate if the guide considers conditions and individual health suitable, but additional exertion is not required simply to fill the schedule.</p>
                      <p>Pay attention to how you feel both at rest and during light activity. Headache, nausea, dizziness, unusual fatigue, appetite loss, or sleep disturbance can occur at altitude. Report symptoms promptly rather than assuming that they are ordinary effects of trekking. Severe or worsening symptoms require urgent assessment, and further ascent may be unsafe.</p>
                      <p>The expedition crew can use the day to review supplies, prepare meals, and organize equipment for the more remote stages. Travelers should check warm clothing, waterproof protection, sleeping equipment, headlamp, water-treatment supplies, and personal medication.</p>
                      <p>The guide should explain the route toward Glacier Camp and the likely conditions on the approach to Dhaulagiri Base Camp. If the weather forecast indicates a significant change, the expedition team may adjust the schedule accordingly.</p>
                      <p>Acclimatization can improve the opportunity to adapt to altitude, but it does not guarantee that every traveler will be ready to move higher. The guide should assess the group before departure, and the itinerary must remain flexible when health or weather requires a change.</p>
                      <p>Using the daily itinerary values, Italian Base Camp ~3,660 m → Glacier Camp ~4,200 m gains about 540 m in sleeping elevation. The source also gives a 4,200–4,250 m camp range. Agree the actual camp and a suitable ascent plan before departure.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 12 -->
            <div class="itinerary-card" id="day-12">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 12:</span> Trek from Italian Base Camp to Glacier Camp
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Glacier Camp – approximately <span data-altitude-m="4200">4,200 m / 13,780 ft</span>
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
                      <span>Duration / Timing: Approximately 5 to 6 hours walking</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: Approximately 10 km</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Alpine Tented Camp on Chhonbardan Glacier Moraine</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: Chhonbardan Glacier lateral moraine navigation across rugged scree and ice-margin paths</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Expedition meals (Breakfast, Lunch & Dinner)</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Glacier Camp (<span data-altitude-m="4200">4,200 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>After the acclimatization day, the expedition continues toward Glacier Camp, commonly reported at approximately 4,200 m. This stage takes the group into higher and more exposed terrain, where the effects of altitude become more noticeable and walking may feel considerably slower.</p>
                      <p>The route may pass through rocky slopes and moraine areas, with the exact surface conditions varying according to the season, recent weather, and route alignment. Snow and ice may affect some sections, so the expedition leader must assess the conditions and explain any additional precautions required.</p>
                      <p>Maintain a steady pace and take suitable breaks. Avoid using speed as a measure of progress, since conserving energy and monitoring health become increasingly important at this elevation. Keep warm layers and waterproof protection accessible because the weather can change during the walk.</p>
                      <p>The camp is organized by the expedition crew, including the movement of tents, food, and other supplies. Facilities are limited compared with the lower villages, and travelers should expect a basic tented overnight stay.</p>
                      <p>On arrival, protect yourself from the cold and take time to recover. Eat adequately, drink appropriately, and report unusual symptoms. The next stage continues toward Dhaulagiri Base Camp, so a steady and conservative approach remains important.</p>
                      <p>The actual route and walking duration should be confirmed by the expedition leader according to current conditions. If the route becomes unsafe, the group may need to modify the schedule.</p>
                      <p>Using Glacier Camp ~4,200 m and Dhaulagiri Base Camp ~4,740 m, this night adds about 540 m in sleeping elevation. The actual gain depends on camp locations. Preserve the Day 14 rest day and allow changes or extra staging when required.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 13 -->
            <div class="itinerary-card" id="day-13">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 13:</span> Trek from Glacier Camp to Dhaulagiri Base Camp
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Dhaulagiri Base Camp – approximately <span data-altitude-m="4750">4,750 m / 15,584 ft</span>
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
                      <span>Duration / Timing: Approximately 4 to 5 hours walking</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: Approximately 8 km</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Alpine Tented Camp at Dhaulagiri Base Camp</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: Glacier spine ascent to high base camp beneath towering Dhaulagiri I (8,167 m)</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Expedition meals (Breakfast, Lunch & Dinner)</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Dhaulagiri Base Camp (<span data-altitude-m="4750">4,750 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>Today's destination is Dhaulagiri Base Camp, one of the principal highlights of the entire expedition. The route continues through high-altitude terrain beneath the Dhaulagiri massif, where rocky ground, moraine, and glacier-adjacent sections may form part of the approach.</p>
                      <p>The walking day is demanding because of the elevation and the condition of the terrain. Walking surfaces can be uneven, and progress may be slower than expected. Stay with the guide, follow the designated route, and avoid approaching unstable ice or unfamiliar glacial terrain.</p>
                      <p>As you approach approximately 4,740 to 4,750 m, the effects of altitude may become more pronounced. Keep a measured pace and communicate symptoms such as headache, nausea, dizziness, or unusual fatigue. Severe symptoms, particularly confusion, difficulty walking straight, or breathlessness at rest, require urgent action and may make further ascent or an overnight stay inappropriate.</p>
                      <p>After reaching the base-camp area, the expedition crew will organize the planned camp. The surroundings are characterized by the dramatic high-mountain landscape, including rock, glacier-related features, and towering peaks when visibility permits.</p>
                      <p>The arrival marks a major milestone after the sustained approach through the Myagdi Valley and the higher camps. However, the expedition is not complete. The group still needs time to recover and prepare for French Pass, the highest point of the standard itinerary.</p>
                      <p>Use the evening to eat, hydrate, organize equipment, and rest. The guide will explain the next day's plan and review the current conditions around the base-camp area.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 14 -->
            <div class="itinerary-card" id="day-14">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 14:</span> Acclimatization and French Pass Preparation at Dhaulagiri Base Camp
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Dhaulagiri Base Camp – approximately <span data-altitude-m="4750">4,750 m / 15,584 ft</span>
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
                      <span>Duration / Timing: Rest, hydration & high-pass equipment check</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: Base camp vicinity & route review</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Alpine Tented Camp at Dhaulagiri Base Camp</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: Mandatory rest day, French Pass weather review, harness & microspike inspection</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Expedition meals (Breakfast, Lunch & Dinner)</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Dhaulagiri Base Camp (<span data-altitude-m="4750">4,750 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>This day provides time for recovery and acclimatization at Dhaulagiri Base Camp before the expedition attempts French Pass. The planned overnight elevation is approximately 4,740 to 4,750 m, making this a significant stage in the group's adaptation to high altitude.</p>
                      <p>Rest, hydration, nutrition, and health monitoring should be the main priorities. A short activity may be considered only if the expedition leader determines that the group's condition and the weather permit it. Avoid unnecessary exertion, particularly if you have experienced symptoms during the previous days.</p>
                      <p>Each participant should communicate honestly about their health. Altitude-related illness can develop even in physically fit people, and completing an acclimatization day does not guarantee readiness for the next ascent. If symptoms appear or worsen, the expedition leader must assess whether continuing is appropriate.</p>
                      <p>The group can also use this day to prepare for the high-pass crossing. Check insulated clothing, gloves, waterproof layers, headlamp, food, water, personal medication, and other essentials. Confirm any equipment required for the actual snow, ice, or terrain conditions.</p>
                      <p>The guide should review the weather forecast, the proposed departure time, and the plan for descending into Hidden Valley. French Pass is a demanding crossing above 5,000 m, and the decision to proceed must depend on current conditions and the group's readiness.</p>
                      <p>A successful expedition requires flexibility. If the crossing is unsafe, it may need to be delayed, changed, or cancelled rather than attempted simply to maintain the published schedule.</p>
                      <p>This is a crossing day followed by an overnight in Hidden Valley, not a rest day. Confirm a camp location within the source’s approximate 5,000–5,200 m range, shelter and supply reserves, communication and retreat options. Neither pass crossing is guaranteed.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 15 -->
            <div class="itinerary-card" id="day-15">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 15:</span> Cross French Pass (5,360 m) and Trek to Hidden Valley
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    French Pass – <span data-altitude-m="5360">5,360 m / 17,585 ft</span> | Hidden Valley – <span data-altitude-m="5200">5,200 m / 17,060 ft</span>
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
                      <span>Duration / Timing: Approximately 7 to 8+ hours demanding alpine crossing</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: Approximately 15 km</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Wilderness Alpine Tented Camp in Hidden Valley</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: Summit French Pass (5,360 m) with 360° Himalayan views; descend into remote Hidden Valley</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Expedition meals (Breakfast, Lunch & Dinner)</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Hidden Valley (<span data-altitude-m="5200">5,200 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>Today is one of the most demanding days of the Dhaulagiri Circuit Trek. The route climbs toward French Pass, the highest point of the standard itinerary at approximately 5,360 m, before descending into Hidden Valley for an overnight camp.</p>
                      <p>The day normally begins early to allow adequate time for the ascent and descent. At this elevation, reduced oxygen availability affects walking speed and endurance, so maintaining a steady pace is more important than trying to move quickly. The guide will set the pace and monitor the group's progress.</p>
                      <p>The route may involve rocky terrain, snow, ice, or exposed sections depending on the season and current conditions. The expedition leader must assess whether the pass is safe to cross. Strong wind, poor visibility, dangerous snow or ice, or altitude-related symptoms may require a change of plan.</p>
                      <p>On reaching the pass, clear weather may provide broad views of the surrounding mountain landscape. However, conditions can change quickly, and time at the top should remain limited by safety, temperature, and the schedule for reaching the campsite.</p>
                      <p>The descent toward Hidden Valley can also be physically demanding. Uneven ground and possible snow or ice require careful foot placement. The group should conserve energy and avoid unnecessary delays in exposed conditions.</p>
                      <p>Hidden Valley is a remote high-altitude camping destination, and the overnight arrangements need to be planned in advance. The support crew establishes the camp, while trekkers should organize their sleeping equipment, protect themselves from cold, and eat and drink adequately.</p>
                      <p>French Pass is a major highlight, but reaching the top is only part of the day's challenge. The objective is to complete the crossing and descend to camp safely.</p>
                      <p>Yak Kharka here refers to the Dhaulagiri exit toward the Kali Gandaki Valley. It must not be confused with the Annapurna Circuit’s higher settlement of the same name. The full descent and any snow/ice traverse require current route assessment.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 16 -->
            <div class="itinerary-card" id="day-16">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 16:</span> Cross Dhampus Pass (5,250 m) and Trek to Yak Kharka
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Dhampus Pass – <span data-altitude-m="5250">5,250 m / 17,224 ft</span> | Yak Kharka – <span data-altitude-m="3680">3,680 m / 12,073 ft</span>
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
                      <span>Duration / Timing: Approximately 7 to 8+ hours high pass crossing & descent</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: Approximately 14 km</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Alpine Tented Camp at Yak Kharka</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: Traverse Dhampus Pass (5,250 m) followed by long 1,570 m descent toward Kali Gandaki exit</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Expedition meals (Breakfast, Lunch & Dinner)</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Yak Kharka (<span data-altitude-m="3680">3,680 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>The expedition continues across Dhampus Pass, the second major high-altitude crossing of the circuit. From Hidden Valley, the route climbs toward the pass and then descends substantially toward Yak Kharka, where the lower elevation marks a transition away from the highest section of the journey.</p>
                      <p>This remains a demanding day because the group has already completed the French Pass crossing. Fatigue can accumulate over consecutive high-altitude stages, and the ability to descend safely is just as important as reaching the pass.</p>
                      <p>The ascent requires a controlled pace and close attention to weather and trail conditions. Snow, ice, wind, and reduced visibility may affect the route. The expedition leader should assess the situation before departure and continue monitoring the group's condition throughout the day.</p>
                      <p>At Dhampus Pass, favorable weather may allow views across the surrounding mountain terrain and toward the Kali Gandaki side of the route. Time spent at the pass should be guided by safety and the need to begin the descent promptly.</p>
                      <p>The descent toward Yak Kharka can be long and physically demanding. Use careful foot placement, particularly on loose or uneven ground, and follow the guide's instructions around difficult sections. Trekking poles may be helpful where appropriate.</p>
                      <p>Reaching Yak Kharka marks the end of the two principal high-pass crossings in the standard itinerary. Although the elevation is lower, the group should still allow time to recover and prepare for the continuation toward Jomsom.</p>
                      <p>If conditions make the crossing unsafe or the group is not ready to continue, the itinerary must be adapted according to the expedition leader's judgment. Neither pass should be treated as an unconditional requirement regardless of conditions.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 17 -->
            <div class="itinerary-card" id="day-17">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 17:</span> Trek from Yak Kharka to Jomsom via Marpha
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Jomsom – approximately <span data-altitude-m="2720">2,720 m / 8,924 ft</span>
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
                      <span>Duration / Timing: Approximately 7 to 8 hours descent</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: Approximately 18 km</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Mountain Lodge / Hotel in Jomsom</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: Descent into Kali Gandaki Valley; visit historic apple orchards of Marpha & arrive in Jomsom</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast, Lunch & Dinner included</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Jomsom (<span data-altitude-m="2720">2,720 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>After completing the two high-pass crossings, the route descends toward the Kali Gandaki Valley and continues to Jomsom. This stage marks a major change in the character of the expedition as the group leaves the remote high-altitude camping environment and returns to an area with more established settlements and services.</p>
                      <p>The route may pass through or near Marpha, depending on the final itinerary. Marpha is known for its traditional settlement, Thakali cultural heritage, and agricultural products. If the route and walking schedule allow, the stop provides an opportunity to observe the different cultural and geographical setting of the Kali Gandaki Valley.</p>
                      <p>The descent involves continued walking and may include uneven terrain, dusty or rocky paths, and long downhill sections. Although the altitude is decreasing, the accumulated fatigue from the preceding days can affect concentration and balance. A controlled pace remains important.</p>
                      <p>The exact distance and walking time depend on the chosen trail and whether the itinerary includes time in Marpha. The final operating plan should clarify the planned route and overnight destination rather than assuming that every version of the circuit follows the same walking stages.</p>
                      <p>Upon reaching Jomsom, settle into the planned accommodation and review the return transportation arrangements. The following day's flight to Pokhara is subject to weather and operating conditions, so the group should understand what happens if the flight is delayed or cancelled.</p>
                      <p>This stage completes the main walking circuit and provides time to transition back toward the travel facilities of the lower valley.</p>
                      <p>Confirm the airline’s actual operating schedule, passenger and expedition-equipment allowances, staff exit plan, and the cost and feasibility of road alternatives. A printed flight leg is not a confirmed seat or a guarantee of operation.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 18 -->
            <div class="itinerary-card" id="day-18">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 18:</span> Scenic Mountain Flight from Jomsom to Pokhara
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Pokhara – approximately <span data-altitude-m="822">822 m / 2,697 ft</span>
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
                      <span>Duration / Timing: Approximately 20 to 25 minutes scenic flight</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: Mountain flight over Annapurna & Dhaulagiri massifs</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: 3-Star Lakeside Hotel in Pokhara</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: Early morning mountain flight through Kali Gandaki Gorge; lakeside relaxation in Pokhara</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast included</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Pokhara (<span data-altitude-m="822">822 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>After breakfast, transfer to Jomsom Airport for the planned flight to Pokhara. The flight is a convenient way to return from the Kali Gandaki Valley, and it may offer views of the surrounding mountain landscape when visibility is favorable.</p>
                      <p>Mountain flight operations depend on weather, visibility, wind, and operational conditions. Departure times may change, and cancellations can occur. The itinerary should therefore allow flexibility rather than assuming the flight will operate exactly as scheduled.</p>
                      <p>If the flight is delayed, the trip coordinator will explain the available options according to the circumstances. Additional accommodation or alternative transportation may be required, and responsibility for the associated costs depends on the confirmed package terms and applicable insurance coverage.</p>
                      <p>After arriving in Pokhara, transfer to the planned hotel and allow time to recover from the expedition. The lower elevation and access to established accommodation provide a useful transition after several days of remote camping.</p>
                      <p>Depending on the arrival time and the confirmed package, you may have an opportunity to rest or explore the lakeside area. Any sightseeing should remain optional unless it is explicitly included in the itinerary.</p>
                      <p>The return journey should not be scheduled too tightly against an international departure. If flight disruption affects the remaining travel days, the group may need to adjust its plans.</p>
                      <p>Day 19 is the scheduled road return. It does not provide a separate full Kathmandu contingency day before Day 20 departure. Agree additional flexibility and disruption costs before committing to onward flights.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 19 -->
            <div class="itinerary-card" id="day-19">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 19:</span> Drive from Pokhara to Kathmandu
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Kathmandu – approximately <span data-altitude-m="1355">1,355 m / 4,445 ft</span>
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
                      <span>Duration / Timing: Approximately 6 to 8 hours overland drive</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: 200 km overland drive (or optional 25-minute flight)</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: 3-Star Boutique Hotel in Thamel</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: Scenic highway drive along Trishuli river valley; evening farewell cultural dinner</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast & Farewell Cultural Dinner included</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Kathmandu (<span data-altitude-m="1355">1,355 m</span>)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>Today you return to Kathmandu by road according to the confirmed transportation arrangement. The journey generally takes around 6 to 8 hours, although traffic, road conditions, construction, and weather can increase the travel time.</p>
                      <p>The drive follows the river valleys and middle hills of Nepal, providing a final look at the changing landscapes encountered during the journey. After spending several days in remote mountain terrain, the return to established roads and city facilities marks the end of the expedition's trekking phase.</p>
                      <p>Road travel can be unpredictable, so maintain a flexible schedule. The group should allow time for meal stops and should not assume an exact arrival time regardless of conditions.</p>
                      <p>Upon reaching Kathmandu, transfer to the planned hotel and settle in. The evening can be used to rest, organize your luggage, and prepare for international departure.</p>
                      <p>If the Jomsom flight was delayed or other disruptions occurred, this day may require adjustment. Travelers should have an appropriate buffer before their international flight rather than relying on a tight connection.</p>
                      <p>Confirm the airport transfer time with the trip coordinator and keep your passport, tickets, and other departure documents accessible.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Day 20 -->
            <div class="itinerary-card" id="day-20">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day 20:</span> Final Departure from Kathmandu
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    Tribhuvan International Airport – Departure Flight
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
                      <span>Duration / Timing: 20 to 40 minutes private airport transfer</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: Hotel to Tribhuvan International Airport (6–8 km)</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: Departure Day (Hotel checkout)</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: Final souvenir shopping in Thamel and private transfer to airport for international flight</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: Breakfast included</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: Departure (Homebound Flight)</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
                      <p>Your Dhaulagiri Circuit Trek concludes with a transfer to Tribhuvan International Airport according to your international flight schedule.</p>
                      <p>After breakfast, check that you have collected all your personal belongings, passport, travel documents, medication, electronics, and other important items. Ensure that no essential equipment has been left at the hotel.</p>
                      <p>The transfer time should be confirmed with the trip coordinator, allowing adequate time for road traffic and airport check-in procedures. Travelers should not assume that the city transfer will take the same amount of time under every traffic condition.</p>
                      <p>If your arrival back in Kathmandu was delayed because of road or flight disruption, the departure arrangements may need to change. The trip organizer can explain the available options, while any change to international flights remains subject to the relevant airline conditions.</p>
                      <p>The itinerary concludes after the airport transfer. Over the preceding days, you have traveled through the Myagdi Valley, progressed to Dhaulagiri Base Camp, crossed French Pass into Hidden Valley, crossed Dhampus Pass, and returned toward Jomsom and Pokhara.</p>
                      <p>This final day allows you to conclude the journey after completing one of Nepal's more demanding remote trekking circuits.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  `;
}

module.exports = { getItinerarySection };
