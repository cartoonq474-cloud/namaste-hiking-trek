const fs = require('fs');

// 1. BUILD SECTION OVERVIEW
function buildSectionOverview() {
  return `<section id="section-overview" class="trek-detail-section">
            <p class="trek-overview-subtitle" style="text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; color: var(--color-copper-orange); font-size: 0.85rem; margin-bottom: 6px;">8 DAYS MARDI HIMAL RIDGE TREK ITINERARY</p>
            <h2 class="trek-section-title" style="margin-bottom: 20px;">Mardi Himal Trek Overview</h2>

            <!-- At a Glance Box -->
            <div class="ebc-glance-box" style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 5px solid var(--color-copper-orange); border-radius: 14px; padding: 24px 28px; margin-bottom: 28px; box-shadow: 0 4px 14px rgba(12, 43, 78, 0.03);">
              <div class="ebc-glance-header" style="display: flex; align-items: center; gap: 12px; margin-bottom: 18px;">
                <div style="width: 36px; height: 36px; border-radius: 8px; background: rgba(16, 185, 129, 0.12); display: flex; align-items: center; justify-content: center; color: var(--color-copper-orange);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--color-primary-navy); margin: 0;">Mardi Himal Ridge Trek at a Glance</h3>
              </div>
              <div class="ebc-glance-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px 24px;">
                <div class="ebc-glance-item" style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; line-height: 1.5; color: var(--color-neutral-700);">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" style="flex-shrink: 0; margin-top: 3px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Approach:</strong> Scenic flight/drive Kathmandu → Pokhara, scenic drive to Kande (1,770 m)</span>
                </div>
                <div class="ebc-glance-item" style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; line-height: 1.5; color: var(--color-neutral-700);">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" style="flex-shrink: 0; margin-top: 3px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Ascent Profile:</strong> Gradual rise from subtropical forests to alpine ridge at High Camp (3,580 m)</span>
                </div>
                <div class="ebc-glance-item" style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; line-height: 1.5; color: var(--color-neutral-700);">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" style="flex-shrink: 0; margin-top: 3px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Summit Outing:</strong> Upper Viewpoint (4,200 m) &amp; Base Camp (4,500 m) with front-row Machapuchare view</span>
                </div>
                <div class="ebc-glance-item" style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; line-height: 1.5; color: var(--color-neutral-700);">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" style="flex-shrink: 0; margin-top: 3px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Exit Route:</strong> Direct descent via Siding village (1,750 m) to Lumre roadhead and Pokhara</span>
                </div>
              </div>
            </div>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 16px;">
              The <strong>Mardi Himal Trek</strong> is an exceptional 8-day journey that leads directly up the crest of a high, narrow spur extending south from the sacred peak of Machapuchare (the "Fishtail", 6,993 m). Opened relatively recently compared to older Annapurna circuits, this route offers trekkers an intimate mountain sanctuary experience with fewer crowds, pristine ancient rhododendron forests, and dramatic 360-degree Himalayan amphitheater views.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 24px;">
              Unlike valley floor walks where towering peaks remain distant until the final days, the Mardi Himal trail climbs onto the open alpine ridgeline at Badal Danda (3,250 m). From that point onwards, you walk high above the clouds with Annapurna South (7,219 m) and Hiunchuli dominating the western skyline, while Machapuchare rises dramatically right before your eyes. Our carefully paced 8-day schedule provides two nights at High Camp (3,580 m), giving you optimal rest before ascending to Upper Viewpoint (4,200 m) and Base Camp (4,500 m).
            </p>

            <!-- Highlights Section -->
            <div class="ebc-highlights-section" style="margin-top: 36px; padding-top: 32px; border-top: 1px solid var(--color-neutral-200);">
              <div class="ebc-highlights-header" style="border-left: 4px solid var(--color-copper-orange); padding-left: 16px; margin-bottom: 20px;">
                <span class="ebc-peak-tag" style="display: inline-block; font-size: 0.8rem; font-weight: 700; color: var(--color-copper-orange); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">SIGNATURE EXPEDITION HIGHLIGHTS</span>
                <h3 class="ebc-highlights-title" style="font-size: 1.85rem; margin: 0; color: var(--color-primary-navy); font-weight: 700; line-height: 1.3;">What Makes Mardi Himal Trek Truly Special</h3>
              </div>
              <p class="ebc-highlights-intro-p" style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
                From the quiet stone villages of Kande and Australian Camp to the exhilarating knife-edge ridge above Badal Danda, here are the defining moments of this classic Annapurna adventure:
              </p>

              <div class="ebc-highlights-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-bottom: 35px;">
                <!-- Highlight 1 -->
                <div class="ebc-highlight-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 22px 24px; box-shadow: 0 2px 8px rgba(12, 43, 78, 0.04); transition: transform 0.2s ease;">
                  <div class="ebc-highlight-top" style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <div class="ebc-highlight-icon-box" style="width: 40px; height: 40px; border-radius: 10px; background: rgba(16, 185, 129, 0.12); display: flex; align-items: center; justify-content: center; color: var(--color-copper-orange);">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l4 8 5-5 5 15H2L8 3z"></path></svg>
                    </div>
                    <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-copper-orange); text-transform: uppercase; letter-spacing: 0.5px;">Panoramic Ridge</span>
                  </div>
                  <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 8px;">Walk the Clouds on Badal Danda Ridge</h4>
                  <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">Ascending beyond Low Camp, the trail breaks free from thick forest onto Badal Danda (Cloud Hill), offering unbroken panoramic vistas on both east and west horizons.</p>
                </div>

                <!-- Highlight 2 -->
                <div class="ebc-highlight-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 22px 24px; box-shadow: 0 2px 8px rgba(12, 43, 78, 0.04); transition: transform 0.2s ease;">
                  <div class="ebc-highlight-top" style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <div class="ebc-highlight-icon-box" style="width: 40px; height: 40px; border-radius: 10px; background: rgba(16, 185, 129, 0.12); display: flex; align-items: center; justify-content: center; color: var(--color-copper-orange);">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    </div>
                    <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-copper-orange); text-transform: uppercase; letter-spacing: 0.5px;">Front-Row Giants</span>
                  </div>
                  <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 8px;">Intimate Proximity to Machapuchare (6,993 m)</h4>
                  <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">Few places on earth allow you to get this close to an unclimbed, sacred pyramid peak without technical mountaineering equipment and vertical ice climbing.</p>
                </div>

                <!-- Highlight 3 -->
                <div class="ebc-highlight-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 22px 24px; box-shadow: 0 2px 8px rgba(12, 43, 78, 0.04); transition: transform 0.2s ease;">
                  <div class="ebc-highlight-top" style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <div class="ebc-highlight-icon-box" style="width: 40px; height: 40px; border-radius: 10px; background: rgba(16, 185, 129, 0.12); display: flex; align-items: center; justify-content: center; color: var(--color-copper-orange);">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </div>
                    <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-copper-orange); text-transform: uppercase; letter-spacing: 0.5px;">Smart Safety</span>
                  </div>
                  <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 8px;">Safe Elevation Profile (Max Sleep: 3,580 m)</h4>
                  <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">Sleep low, climb high! By sleeping at 3,580 m and venturing to 4,200 m / 4,500 m on day 5, altitude sickness risks are dramatically lower than on 5,000 m+ circuits.</p>
                </div>

                <!-- Highlight 4 -->
                <div class="ebc-highlight-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 22px 24px; box-shadow: 0 2px 8px rgba(12, 43, 78, 0.04); transition: transform 0.2s ease;">
                  <div class="ebc-highlight-top" style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <div class="ebc-highlight-icon-box" style="width: 40px; height: 40px; border-radius: 10px; background: rgba(16, 185, 129, 0.12); display: flex; align-items: center; justify-content: center; color: var(--color-copper-orange);">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-copper-orange); text-transform: uppercase; letter-spacing: 0.5px;">Peaceful Trails</span>
                  </div>
                  <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 8px;">Tranquil Wilderness &amp; Cozy Teahouses</h4>
                  <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">Mardi Himal preserves authentic Himalayan warmth with intimate, rustic lodge dining rooms, wood stoves, and far fewer trekking groups than Poon Hill or ABC.</p>
                </div>

                <!-- Highlight 5 -->
                <div class="ebc-highlight-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 22px 24px; box-shadow: 0 2px 8px rgba(12, 43, 78, 0.04); transition: transform 0.2s ease;">
                  <div class="ebc-highlight-top" style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <div class="ebc-highlight-icon-box" style="width: 40px; height: 40px; border-radius: 10px; background: rgba(16, 185, 129, 0.12); display: flex; align-items: center; justify-content: center; color: var(--color-copper-orange);">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                    </div>
                    <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-copper-orange); text-transform: uppercase; letter-spacing: 0.5px;">Ancient Canopy</span>
                  </div>
                  <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 8px;">Moss-Draped Rhododendron &amp; Oak Forests</h4>
                  <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">Journey through fairy-tale old-growth forests between Deurali and Forest Camp, exploding in brilliant crimson, pink, and white rhododendron blooms each spring.</p>
                </div>

                <!-- Highlight 6 -->
                <div class="ebc-highlight-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 22px 24px; box-shadow: 0 2px 8px rgba(12, 43, 78, 0.04); transition: transform 0.2s ease;">
                  <div class="ebc-highlight-top" style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <div class="ebc-highlight-icon-box" style="width: 40px; height: 40px; border-radius: 10px; background: rgba(16, 185, 129, 0.12); display: flex; align-items: center; justify-content: center; color: var(--color-copper-orange);">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    </div>
                    <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-copper-orange); text-transform: uppercase; letter-spacing: 0.5px;">Authentic Heritage</span>
                  </div>
                  <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 8px;">Descent via Siding Gurung Village</h4>
                  <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">A scenic alternative descent away from the ridge through terraced organic farms, waterfalls, and stone-paved Gurung homesteads in the upper Mardi river basin.</p>
                </div>
              </div>
            </div>

            <!-- 4 Ecological Zones -->
            <div style="margin-top: 36px;">
              <div style="border-left: 4px solid var(--color-copper-orange); padding-left: 14px; margin-bottom: 18px;">
                <h3 style="font-size: 1.5rem; color: var(--color-primary-navy); font-weight: 700; margin: 0;">The 4 Distinct Ecological &amp; Landscape Zones</h3>
              </div>
              <p style="color: var(--color-neutral-700); font-size: 1rem; line-height: 1.7; margin-bottom: 20px;">
                One of the most remarkable features of Mardi Himal is traversing four distinct ecosystems in just eight days — from warm terraced farmland to alpine tundra:
              </p>

              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 30px;">
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
                  <span style="display: inline-block; background: #e6f7f0; color: #008060; font-size: 0.75rem; font-weight: 700; padding: 3px 10px; border-radius: 999px; margin-bottom: 10px;">ZONE 1 • 1,770 m – 2,100 m</span>
                  <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin-bottom: 6px;">Subtropical Foothills &amp; Terraces</h4>
                  <p style="font-size: 0.9rem; color: var(--color-neutral-600); margin: 0; line-height: 1.5;">Kande to Pothana. Stone stairways, terraced rice paddies, bamboo groves, and panoramic views over the Pokhara Valley.</p>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
                  <span style="display: inline-block; background: #e6f7f0; color: #008060; font-size: 0.75rem; font-weight: 700; padding: 3px 10px; border-radius: 999px; margin-bottom: 10px;">ZONE 2 • 2,100 m – 3,000 m</span>
                  <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin-bottom: 6px;">Temperate Montane Forest</h4>
                  <p style="font-size: 0.9rem; color: var(--color-neutral-600); margin: 0; line-height: 1.5;">Deurali, Forest Camp &amp; Low Camp. Ancient moss-draped oaks, giant tree rhododendrons, ferns, and elusive Himalayan wildlife.</p>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
                  <span style="display: inline-block; background: #e6f7f0; color: #008060; font-size: 0.75rem; font-weight: 700; padding: 3px 10px; border-radius: 999px; margin-bottom: 10px;">ZONE 3 • 3,000 m – 3,600 m</span>
                  <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin-bottom: 6px;">Subalpine Open Ridge</h4>
                  <p style="font-size: 0.9rem; color: var(--color-neutral-600); margin: 0; line-height: 1.5;">Badal Danda &amp; High Camp. The tree line ends. Dramatic crest walking with dwarf juniper, alpine pasture, and cloud inversions.</p>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
                  <span style="display: inline-block; background: #e6f7f0; color: #008060; font-size: 0.75rem; font-weight: 700; padding: 3px 10px; border-radius: 999px; margin-bottom: 10px;">ZONE 4 • 3,600 m – 4,500 m</span>
                  <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin-bottom: 6px;">High Alpine Tundra &amp; Moraine</h4>
                  <p style="font-size: 0.9rem; color: var(--color-neutral-600); margin: 0; line-height: 1.5;">Upper Viewpoint &amp; Base Camp. Glacial scree, dramatic cliff faces, frozen morning winds, and Machapuchare's southern flank.</p>
                </div>
              </div>
            </div>

            <!-- Route Comparison Table -->
            <div style="margin-top: 36px;">
              <div style="border-left: 4px solid var(--color-copper-orange); padding-left: 14px; margin-bottom: 18px;">
                <h3 style="font-size: 1.5rem; color: var(--color-primary-navy); font-weight: 700; margin: 0;">Route Comparison: 8-Day Complete Format vs. Rushed 5-Day Express Trek</h3>
              </div>
              <div style="overflow-x: auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 2px 8px rgba(12, 43, 78, 0.03);">
                <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
                  <thead>
                    <tr style="background: var(--color-primary-navy); color: #ffffff;">
                      <th style="padding: 14px 18px; font-weight: 600;">Trip Dimension</th>
                      <th style="padding: 14px 18px; font-weight: 600; background: #008060;">Our Complete 8-Day Route (Recommended)</th>
                      <th style="padding: 14px 18px; font-weight: 600; background: #475569;">Commercial 5-Day Express Format</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 14px 18px; font-weight: 600;">Acclimatization Safety</td>
                      <td style="padding: 14px 18px; color: #008060; font-weight: 600;">Optimal: 2 consecutive nights at High Camp (3,580 m)</td>
                      <td style="padding: 14px 18px; color: #b91c1c;">High Risk: Single overnight before 4,500 m summit push</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                      <td style="padding: 14px 18px; font-weight: 600;">Daily Trekking Hours</td>
                      <td style="padding: 14px 18px;">Balanced: 4.5 to 6.5 hours daily with photography stops</td>
                      <td style="padding: 14px 18px;">Exhausting: 7 to 9 hours daily; rush to beat daylight</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 14px 18px; font-weight: 600;">Summit Push Strategy</td>
                      <td style="padding: 14px 18px;">Dedicated Day 5: High Camp → Viewpoint → High Camp rest</td>
                      <td style="padding: 14px 18px;">Extreme: Summit push + descent 2,000 m to Siding same day</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                      <td style="padding: 14px 18px; font-weight: 600;">Descent Trail Experience</td>
                      <td style="padding: 14px 18px;">Scenic detour via authentic Siding Gurung cultural village</td>
                      <td style="padding: 14px 18px;">Fast, steep descent back to roadhead without village immersion</td>
                    </tr>
                    <tr>
                      <td style="padding: 14px 18px; font-weight: 600;">Trip Success &amp; Satisfaction</td>
                      <td style="padding: 14px 18px; color: #008060; font-weight: 600;">98.4% summit view completion; relaxed mountain pace</td>
                      <td style="padding: 14px 18px; color: #b91c1c;">Frequent altitude pullbacks, fatigue, and missed viewpoints</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>`;
}

console.log('Section Overview builder generated successfully.');
module.exports = { buildSectionOverview };
