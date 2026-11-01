const fs = require('fs');

let html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const startMarker = '<!-- Section 1: Overview -->';
const endMarker = '<!-- Section 2: Itinerary -->';

const startIndex = html.indexOf(startMarker);
const endIndex = html.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Markers not found!');
  process.exit(1);
}

const newOverview = `<!-- Section 1: Overview -->
          <section id="section-overview" class="trek-detail-section">
            <h2 class="trek-section-title">Expedition Overview</h2>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              Rising to <span data-altitude-m="6476">6,476 m (21,247 ft)</span> above sea level, <strong>Mera Peak Central</strong> stands proudly as the highest officially designated trekking peak in Nepal. Nestled in the dramatic Solukhumbu and Makalu-Barun borderlands, this extraordinary 18-day expedition bridges the gap between classic high-altitude trekking and true Himalayan mountaineering. It offers adventurous trekkers and aspiring alpinists the ultimate opportunity to reach a genuine Himalayan summit without requiring advanced technical climbing experience.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              What truly sets the Mera Peak expedition apart is its route. Unlike the heavily traveled highways of the Everest Base Camp corridor, our journey ventures south from Lukla through the secluded, wild trails of the <strong>Hinku Valley</strong>. Walking through ancient rhododendron and bamboo cloud forests, across rushing torrents, and through traditional Rai and Sherpa hamlets such as Paiya and Pangkongma, you experience an authentic side of Nepal that few trekkers ever witness. As you ascend, the forests give way to alpine pastures, tumbling moraines, and the towering granite spires of Peak 41, Kyashar, and Mera itself.
            </p>

            <h3 style="font-size: 1.4rem; color: var(--color-primary-navy); margin-top: 28px; margin-bottom: 12px; font-weight: 700;">
              What is the Mera Peak Climbing Experience Really Like?
            </h3>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              Mera Peak is officially graded <strong>Alpine PD (Peu Difficile / Slightly Difficult)</strong> on the international mountaineering scale. While the non-technical glaciated slopes rarely exceed 30 to 35 degrees, the immense altitude, sub-zero temperatures, and thin air present a formidable physical and mental challenge. At <span data-altitude-m="6476">6,476 m</span>, the barometric pressure delivers less than half the atmospheric oxygen available at sea level.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              To ensure safety and success, our 18-day itinerary is meticulously paced. We follow a gentle, circular acclimatization approach via Pangkongma La (<span data-altitude-m="3174">3,174 m</span>) and Kothe (<span data-altitude-m="3600">3,600 m</span>) before reaching Khare Base Camp (<span data-altitude-m="5045">5,045 m</span>). Here, under the dedicated guidance of our UIAGM/NMA-certified Climbing Sherpas, you spend a full training day mastering glacier travel skills: practicing crampon technique on real ice, handling fixed ropes with jumar ascenders, utilizing figure-eight descenders, and synchronizing tied-in rope team movement.
            </p>

            <h3 style="font-size: 1.4rem; color: var(--color-primary-navy); margin-top: 28px; margin-bottom: 12px; font-weight: 700;">
              The Unrivaled 360-Degree Summit Panorama
            </h3>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The crowning jewel of Mera Peak is undeniably its summit vantage point. Positioned strategically east of the Khumbu range, the central summit offers what mountaineering historians widely agree is the finest mountain panorama anywhere in the Himalaya. As the morning sun pierces the horizon, five of the earth’s fourteen 8,000-meter giants ignite in golden light:
            </p>
            <ul style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.8; margin-bottom: 20px; padding-left: 24px;">
              <li><strong>Mount Everest (<span data-altitude-m="8848">8,848.86 m</span>):</strong> Towering dominantly to the north over the Lhotse wall.</li>
              <li><strong>Lhotse (<span data-altitude-m="8516">8,516 m</span>):</strong> Flanking Everest with its sheer south face glowing crimson.</li>
              <li><strong>Makalu (<span data-altitude-m="8481">8,481 m</span>):</strong> Rising as an immense four-sided granite pyramid to the immediate northeast.</li>
              <li><strong>Cho Oyu (<span data-altitude-m="8188">8,188 m</span>):</strong> Anchoring the northern skyline near the Tibetan border.</li>
              <li><strong>Kanchenjunga (<span data-altitude-m="8586">8,586 m</span>):</strong> The world’s third-highest peak shimmering majestically on the far eastern horizon.</li>
            </ul>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              In addition to these five titans, you stand surrounded by celebrated peaks including Ama Dablam (<span data-altitude-m="6812">6,812 m</span>), Baruntse (<span data-altitude-m="7129">7,129 m</span>), Chamlang (<span data-altitude-m="7319">7,319 m</span>), and Naulekha. It is a vista that burns permanently into your memory, making every step of the strenuous ascent profoundly rewarding.
            </p>

            <h3 style="font-size: 1.4rem; color: var(--color-primary-navy); margin-top: 28px; margin-bottom: 12px; font-weight: 700;">
              Is the Mera Peak Climbing Expedition Right for You?
            </h3>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
              This expedition is tailor-made for physically fit trekkers seeking their first Himalayan summit, seasoned hillwalkers ready for a greater challenge, and mountaineers looking to build acclimatization and high-altitude endurance before tackling 7,000 m or 8,000 m peaks. Previous technical mountaineering experience is not mandatory, but solid cardiovascular stamina, mental perseverance, and prior trekking experience at altitudes above 4,000 meters are strongly recommended.
            </p>

            <!-- Highlights Section Replicating EBC Pattern -->
            <div class="ebc-highlights-section">
              <div class="ebc-highlights-header">
                <h2 class="ebc-highlights-title">Mera Peak Climbing Highlights</h2>
                <p class="ebc-highlights-intro-p">
                  From deep river valleys and ancient Sherpa monasteries to suspended high camps and an unforgettable sunrise above 6,400 meters, here are the hallmark highlights that define this Himalayan mountaineering journey.
                </p>
              </div>

              <div class="ebc-highlights-grid">
                <!-- Highlight 1: Mera Peak Central Summit -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22L12 2l8 20H4z"/><path d="M9 22l3-7 3 7H9z"/></svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">Mera Peak Central Summit (<span data-altitude-m="6476">6,476 m</span>)</h3>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>Stand on the apex of Nepal's highest trekking peak at <span data-altitude-m="6476">6,476 m (21,247 ft)</span>. Achieving this milestone delivers immense personal pride, validating your dedication, endurance, and mountaineering spirit in the heart of the Himalaya.</p>
                  </div>
                </div>

                <!-- Highlight 2: 360-Degree Panorama of 5 Eight-Thousanders -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12s1.5 2 4 2 4-2 4-2"/></svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">360° Panorama of 5 Eight-Thousanders</h3>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>Marvel at an unobstructed vista of five of the world's six highest mountains simultaneously: Mount Everest (<span data-altitude-m="8848">8,848 m</span>), Kanchenjunga (<span data-altitude-m="8586">8,586 m</span>), Lhotse (<span data-altitude-m="8516">8,516 m</span>), Makalu (<span data-altitude-m="8481">8,481 m</span>), and Cho Oyu (<span data-altitude-m="8188">8,188 m</span>).</p>
                  </div>
                </div>

                <!-- Highlight 3: Untamed Hinku Valley Wilderness -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">Untamed Hinku Valley Wilderness</h3>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>Leave commercial trails behind to explore the wild, forested Hinku Valley. Follow rushing alpine rivers, hike through ancient moss-draped hemlock and rhododendron forests, and experience true wilderness tranquility seldom found on mainstream routes.</p>
                  </div>
                </div>

                <!-- Highlight 4: Pre-Climbing Glacier Clinic at Khare -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">Pre-Climbing Glacier Clinic at Khare (<span data-altitude-m="5045">5,045 m</span>)</h3>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>Gain hands-on mountaineering proficiency with our certified Climbing Sherpas. Learn proper crampon footwork, ice axe arrest, rope handling, safety knots, and ascending fixed lines using a jumar before stepping onto the Mera Glacier.</p>
                  </div>
                </div>

                <!-- Highlight 5: High Camp Perched at 5,780m -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">Mera High Camp Perched at <span data-altitude-m="5780">5,780 m</span></h3>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>Spend a memorable night sheltered in premium 4-season expedition tents behind a rocky outcrop on the Mera glacier edge. Watch the dramatic sunset turn Makalu, Chamlang, and Everest into fiery silhouettes right outside your tent door.</p>
                  </div>
                </div>

                <!-- Highlight 6: Thrilling Early Morning Alpine Push -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">Thrilling 2:00 AM Alpine Summit Push</h3>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>Experience the pure adrenaline of climbing by headlamp on crisp, frozen snowfields. Roped together under a canopy of countless stars, you steadily gain elevation until the first golden rays of dawn reveal the grandeur of the Himalaya.</p>
                  </div>
                </div>

                <!-- Highlight 7: Gradual Acclimatization Route -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">Gradual Acclimatization via Paiya & Pangkongma</h3>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>Our circular 18-day itinerary prioritizes physiological adaptation. By taking the southern route over Pangkongma La (<span data-altitude-m="3174">3,174 m</span>) and spending active rest days in Thangnak and Khare, your summit success rate is maximized.</p>
                  </div>
                </div>

                <!-- Highlight 8: High Pass Crossing over Zatrwa La -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">High Pass Traverse over Zatrwa La (<span data-altitude-m="4610">4,610 m</span>)</h3>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>On your return journey, conquer the dramatic Zatrwa La Pass (<span data-altitude-m="4610">4,610 m</span>) connecting the Hinku Valley back to Lukla. The pass provides a magnificent final panoramic perspective looking back across your entire expedition route.</p>
                  </div>
                </div>

                <!-- Highlight 9: Authentic Mountain Cultures -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">Authentic Rai, Sherpa & Chhetri Culture</h3>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>Encounter remote hill communities untouched by heavy tourism. Visit secluded Buddhist gompas, spin prayer wheels in Pangkongma, and enjoy warm Himalayan hospitality by traditional hearths in local teahouses.</p>
                  </div>
                </div>

                <!-- Highlight 10: Certified Safety & Dedicated Contingency -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">Certified Safety & Dedicated Contingency Day</h3>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>Travel with total peace of mind. Benefit from a 1:2 guide-to-climber ratio on summit day, daily pulse oximeter saturation checks, emergency medical kits, satellite comms, and an integrated Day 15 weather buffer day.</p>
                  </div>
                </div>
              </div>

              <!-- At a Glance Section Replicating EBC Pattern -->
              <div class="ebc-glance-section" style="margin-top: 40px; padding: 28px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-md);">
                <div class="ebc-glance-header" style="margin-bottom: 20px;">
                  <h3 style="font-size: 1.3rem; color: var(--color-primary-navy); margin-bottom: 6px; font-weight: 700;">At a glance: the key milestones you will experience</h3>
                  <p style="color: var(--color-neutral-600); font-size: 0.95rem; margin: 0;">Quick reference for critical altitudes, passes, and high points across your 18-day expedition.</p>
                </div>

                <div class="ebc-glance-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;">
                  <div class="ebc-glance-item" style="display: flex; align-items: flex-start; gap: 10px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Mera Peak Central Summit:</strong> Reach the apex at <span data-altitude-m="6476">6,476 m</span>.</div>
                  </div>
                  <div class="ebc-glance-item" style="display: flex; align-items: flex-start; gap: 10px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Mera High Camp:</strong> Sleep perched above the clouds at <span data-altitude-m="5780">5,780 m</span>.</div>
                  </div>
                  <div class="ebc-glance-item" style="display: flex; align-items: flex-start; gap: 10px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Khare Base Camp:</strong> Alpine training hub at <span data-altitude-m="5045">5,045 m</span>.</div>
                  </div>
                  <div class="ebc-glance-item" style="display: flex; align-items: flex-start; gap: 10px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Zatrwa La Pass:</strong> Return mountain traverse at <span data-altitude-m="4610">4,610 m</span>.</div>
                  </div>
                  <div class="ebc-glance-item" style="display: flex; align-items: flex-start; gap: 10px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>5 Eight-Thousanders:</strong> Everest, Lhotse, Makalu, Cho Oyu & Kanchenjunga.</div>
                  </div>
                  <div class="ebc-glance-item" style="display: flex; align-items: flex-start; gap: 10px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Charpate Viewpoint:</strong> Acclimatization hike at <span data-altitude-m="5000">5,000 m</span> near Thangnak.</div>
                  </div>
                  <div class="ebc-glance-item" style="display: flex; align-items: flex-start; gap: 10px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Pangkongma La Pass:</strong> Scenic ridge crossing at <span data-altitude-m="3174">3,174 m</span>.</div>
                  </div>
                  <div class="ebc-glance-item" style="display: flex; align-items: flex-start; gap: 10px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Hinku Valley Wilderness:</strong> Undisturbed forests, wildlife, and river canyons.</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Why Book Section Replicating EBC Pattern -->
            <div class="why-book-section" style="margin-top: 48px;">
              <div class="why-book-header">
                <h2 style="font-size: 1.8rem; color: var(--color-primary-navy); margin-bottom: 12px; font-weight: 700;">
                  Why Climb Mera Peak with Namaste Hiking Trek?
                </h2>
              </div>
              
              <p style="color: var(--color-neutral-600); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.6; max-width: 850px;">
                Scaling a 6,476-meter Himalayan peak requires far more than basic logistics. The difference lies in expert alpine leadership, elite safety protocols, superior high-camp infrastructure, and the individual attention you receive when pushing for the summit. Rated #2 out of over 2,900 operators in Nepal on <a href="https://www.tripadvisor.com" target="_blank" style="color: var(--color-copper-orange); text-decoration: underline; font-weight: 600;">TripAdvisor</a>, we ensure your climb is executed with absolute professionalism.
              </p>
              
              <div class="why-book-grid">
                <!-- Card 1: Guides -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="why-book-card-title">Licensed UIAGM/NMA Climbing Sherpas</h3>
                    <p class="why-book-card-text">Every expedition is led by seasoned climbing Sherpas certified by the Nepal Mountaineering Association and UIAGM/IFMGA, with multiple summits of Everest, Mera, and Ama Dablam.</p>
                  </div>
                </div>

                <!-- Card 2: 1:2 Summit Ratio -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <div>
                    <h3 class="why-book-card-title">Dedicated 1:2 Summit Guiding Ratio</h3>
                    <p class="why-book-card-text">On summit night, we maintain a strict ratio of one certified climbing Sherpa for every two climbers, ensuring personalized pacing, safety roping, and individual attention throughout the push.</p>
                  </div>
                </div>

                <!-- Card 3: Medical & Pulse Oximetry -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="why-book-card-title">Twice-Daily Pulse Oximetry & Medical Kits</h3>
                    <p class="why-book-card-text">We track your blood oxygen saturation (SpO2) and heart rate twice daily (morning and evening) in our expedition log, identifying early acclimatization issues before they become critical.</p>
                  </div>
                </div>

                <!-- Card 4: High-Camp Tents & Warmth -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="why-book-card-title">Premium 4-Season Expedition Tents</h3>
                    <p class="why-book-card-text">At Mera High Camp (<span data-altitude-m="5780">5,780 m</span>), we provide rugged 4-season geodesic tents (Mountain Hardwear / The North Face) with thick foam insulating mats and hot, calorie-dense alpine meals.</p>
                  </div>
                </div>

                <!-- Card 5: Pre-Climbing Training -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="why-book-card-title">Dedicated Glacier Training Day at Khare</h3>
                    <p class="why-book-card-text">You won't step onto the glacier unprepared. Day 12 is dedicated to comprehensive hands-on instruction covering crampons, jumar ascending, abseiling, and fixed-line transitions.</p>
                  </div>
                </div>

                <!-- Card 6: Ethical Porter Welfare -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="why-book-card-title">Ethical Porter Welfare & IPPG Compliance</h3>
                    <p class="why-book-card-text">Our support crew and porters receive fair living wages, complete high-altitude gear, insurance coverage, and strict 20 kg weight limits in full accordance with the International Porter Protection Group.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>\n\n          `;

html = html.substring(0, startIndex) + newOverview + html.substring(endIndex);

fs.writeFileSync('trek/mera-peak-climbing-trek/index.html', html, 'utf8');
console.log('Successfully updated Section 1: Overview for Mera Peak!');

