const fs = require('fs');

function generateOverviewHtml() {
  return `
          <!-- Section 1: Overview -->
          <section id="section-overview" class="trek-detail-section">
            <h2 class="trek-section-title">Annapurna Circuit Trek Overview</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px; margin-bottom: 24px;"></div>
            
            <p style="font-size: 1.05rem; color: var(--color-neutral-700); line-height: 1.75; margin-bottom: 18px;">
              The <strong>Annapurna Circuit Trek</strong> is one of Nepal's most geographically diverse long-distance trekking journeys. Instead of following one valley toward a single mountain objective and returning along the same route, the circuit travels around the entire Annapurna massif, linking the lush Marsyangdi Valley in the east with the arid Kali Gandaki Valley in the west. Along the way, trekkers move through subtropical foothills, terraced farmland, pine and rhododendron forests, high-altitude settlements, alpine terrain, the rain-shadow desert of Manang and Mustang, historic trading villages, major pilgrimage sites, and some of the most recognizable mountain viewpoints in the Nepal Himalaya.
            </p>

            <p style="font-size: 1.05rem; color: var(--color-neutral-700); line-height: 1.75; margin-bottom: 18px;">
              The classic route crosses <strong>Thorong La Pass at 5,416 m (17,769 ft)</strong>, making the pass the highest point and physical climax of the standard circuit. The Nepal Tourism Board describes the Annapurna Circuit as a major trekking route that progresses from subtropical conditions toward the trans-Himalayan environment of Manang and Mustang, crosses Thorong La, and follows the Kali Gandaki corridor between the 8,000-meter giants of Annapurna I (8,091 m) and Dhaulagiri (8,167 m).
            </p>

            <p style="font-size: 1.05rem; color: var(--color-neutral-700); line-height: 1.75; margin-bottom: 24px;">
              For many trekkers, the defining feature of the Annapurna Circuit is not simply the altitude—it is the extraordinary sequence of change. You begin the journey in a warm river valley surrounded by crops and dense vegetation, spend several days climbing through increasingly cooler forests, reach the dry high-altitude world of Manang, cross a 5,416-meter pass, and then descend into the trans-Himalayan landscape of Mustang. Later, the route drops into warmer conditions again before climbing through rhododendron forest toward Ghorepani and Poon Hill. That degree of environmental variation within a single trek gives the Annapurna Circuit a character that is difficult to reproduce anywhere else on earth.
            </p>

            <!-- Key Trip Facts Summary Card -->
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
              <h3 style="font-size: 1.25rem; color: var(--color-primary-navy); margin-bottom: 16px; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                Key Trip Facts at a Glance
              </h3>
              <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
                  <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy); width: 28%;">Duration</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">14 calendar days, including Kathmandu arrival and departure</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #ffffff;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Main Walking Route</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Chame → Lower Pisang → Ghyaru/Ngawal → Manang → Yak Kharka → Thorong La → Muktinath</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Southern Finish</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Kagbeni/Jomsom → Tatopani → Ghorepani → Poon Hill → Nayapul / Pokhara</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #ffffff;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Highest Point</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Thorong La Pass (5,416 m / 17,769 ft); Day 8 daytime crossing</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Acclimatization</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Day 5 in Manang (~3,500 m); side hike selected according to health and conditions</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #ffffff;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Pre-pass Overnight</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Thorong Phedi (~4,450 m), or individually assessed High Camp (~4,925 m)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Travel Style</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Road-supported trekking; optimized walking/vehicle split preserving the high-altitude wilderness</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #ffffff;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Return Journey</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Pokhara to Kathmandu on Day 13; international departure on Day 14</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Price Reference</td>
                      <td style="padding: 10px 12px; color: #008060; font-weight: 700;">USD $1,199 per person (2026/27 seasonal quotation)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Deep Dive Sections -->
            <div style="margin-bottom: 32px;">
              <h3 style="font-size: 1.35rem; color: var(--color-primary-navy); margin-bottom: 14px; font-weight: 700;">What is the Annapurna Circuit Trek?</h3>
              <p style="font-size: 1.02rem; color: var(--color-neutral-700); line-height: 1.75; margin-bottom: 14px;">
                The Annapurna Circuit is a counterclockwise trekking route that circumnavigates the entire Annapurna massif and crosses the high Himalayan watershed at Thorong La before descending through the Kali Gandaki Valley. A traditional sequence begins around Besisahar, follows the Marsyangdi River upstream, reaches Chame, continues toward Pisang and Manang, climbs through Yak Kharka toward Thorong Phedi, crosses Thorong La (5,416 m), and then descends through Muktinath, Kagbeni, and Jomsom. The journey continues through Marpha, Tukuche, Ghasa, and Tatopani before climbing through lush forests to Ghorepani and Poon Hill, eventually reaching the Pokhara lakeside.
              </p>
              <p style="font-size: 1.02rem; color: var(--color-neutral-700); line-height: 1.75; margin-bottom: 14px;">
                This counterclockwise direction is vital because the circuit's highest terrain is approached progressively rather than immediately. Manang becomes the pivotal acclimatization staging point before the trek pushes above 4,000 meters. The route creates an authentic sense of geographical progression: you are not merely walking toward a single viewpoint, but traveling around an entire mountain kingdom and repeatedly entering new valleys, settlements, and ecological zones.
              </p>
            </div>

            <div style="margin-bottom: 32px;">
              <h3 style="font-size: 1.35rem; color: var(--color-primary-navy); margin-bottom: 14px; font-weight: 700;">Where is the Annapurna Circuit Located?</h3>
              <p style="font-size: 1.02rem; color: var(--color-neutral-700); line-height: 1.75; margin-bottom: 14px;">
                The Annapurna Circuit is located in north-central Nepal within the Annapurna Conservation Area (ACAP), the country's largest protected biodiversity zone. The region spans an extraordinary range of elevations, from subtropical river valleys below 1,000 m to glacial summits exceeding 8,000 m.
              </p>
              <p style="font-size: 1.02rem; color: var(--color-neutral-700); line-height: 1.75; margin-bottom: 14px;">
                The southern valleys receive substantial monsoon moisture and support dense vegetation and terraced farming. As the trail climbs northward past the Annapurna barrier, the landscape enters a dramatic rain shadow. Manang and Mustang feature stark, rocky, semi-arid terrain closely resembling the Tibetan plateau. After crossing Thorong La, the trail enters the trans-Himalayan desert of Mustang before following the Kali Gandaki south into green temperate forests and subtropical orchards around Tatopani.
              </p>
            </div>

            <!-- Highlights Grid -->
            <h3 style="font-size: 1.4rem; color: var(--color-primary-navy); margin-top: 36px; margin-bottom: 20px; font-weight: 700;">Annapurna Circuit Trek Highlights</h3>
            
            <div class="rich-highlights-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 32px;">
              <!-- 1. Thorong La -->
              <div class="rich-highlight-item" style="display: flex; gap: 14px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div class="rich-highlight-icon-wrapper" style="color: #008060; flex-shrink: 0; margin-top: 2px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22L12 2l8 20H4z"/><path d="M9 22l3-7 3 7H9z" fill="#e6f7f0"/></svg>
                </div>
                <div class="rich-highlight-content">
                  <strong style="display: block; font-size: 1.05rem; color: var(--color-primary-navy); margin-bottom: 4px;">Cross Thorong La Pass (5,416 m)</strong>
                  Reach the highest point and physical pinnacle of the Annapurna Circuit. Stand among fluttering prayer flags overlooking a vast panorama of Annapurna and Dhaulagiri peaks.
                </div>
              </div>

              <!-- 2. Muktinath Temple -->
              <div class="rich-highlight-item" style="display: flex; gap: 14px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div class="rich-highlight-icon-wrapper" style="color: #008060; flex-shrink: 0; margin-top: 2px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M10 9h4v4h-4z"/></svg>
                </div>
                <div class="rich-highlight-content">
                  <strong style="display: block; font-size: 1.05rem; color: var(--color-primary-navy); margin-bottom: 4px;">Sacred Muktinath Pilgrimage (~3,800 m)</strong>
                  Visit one of the Himalaya's most sacred sites, revered by both Hindus and Buddhists. Witness the 108 sacred water spouts, eternal natural gas flame, and ancient Buddhist gompas.
                </div>
              </div>

              <!-- 3. Kali Gandaki Valley -->
              <div class="rich-highlight-item" style="display: flex; gap: 14px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div class="rich-highlight-icon-wrapper" style="color: #008060; flex-shrink: 0; margin-top: 2px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
                </div>
                <div class="rich-highlight-content">
                  <strong style="display: block; font-size: 1.05rem; color: var(--color-primary-navy); margin-bottom: 4px;">World's Deepest Kali Gandaki Gorge</strong>
                  Walk through the dramatic canyon flanked by Dhaulagiri (8,167 m) to the west and Annapurna I (8,091 m) to the east—a vertical relief of over 5,500 meters.
                </div>
              </div>

              <!-- 4. Poon Hill Sunrise -->
              <div class="rich-highlight-item" style="display: flex; gap: 14px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div class="rich-highlight-icon-wrapper" style="color: #008060; flex-shrink: 0; margin-top: 2px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                </div>
                <div class="rich-highlight-content">
                  <strong style="display: block; font-size: 1.05rem; color: var(--color-primary-navy); margin-bottom: 4px;">Sunrise over Poon Hill (3,210 m)</strong>
                  Catch the golden sunrise over Dhaulagiri, Annapurna I, Annapurna South, and Machhapuchhre (Fishtail)—the perfect photographic conclusion to your circuit.
                </div>
              </div>

              <!-- 5. Manang Acclimatization -->
              <div class="rich-highlight-item" style="display: flex; gap: 14px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div class="rich-highlight-icon-wrapper" style="color: #008060; flex-shrink: 0; margin-top: 2px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div class="rich-highlight-content">
                  <strong style="display: block; font-size: 1.05rem; color: var(--color-primary-navy); margin-bottom: 4px;">High-Altitude Cultural Hub of Manang (~3,500 m)</strong>
                  Spend an essential acclimatization day exploring stone alleyways, Praken Gompa, Gangapurna glacial lake, and ancient Tibetan-Buddhist monasteries.
                </div>
              </div>

              <!-- 6. High Route Ghyaru & Ngawal -->
              <div class="rich-highlight-item" style="display: flex; gap: 14px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div class="rich-highlight-icon-wrapper" style="color: #008060; flex-shrink: 0; margin-top: 2px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <div class="rich-highlight-content">
                  <strong style="display: block; font-size: 1.05rem; color: var(--color-primary-navy); margin-bottom: 4px;">High Ridge Route via Ghyaru & Ngawal</strong>
                  Traverse high cliffside paths above the Marsyangdi Valley with sweeping panoramic views of Annapurna II, III, and IV, passing medieval stone villages.
                </div>
              </div>

              <!-- 7. Tatopani Hot Springs -->
              <div class="rich-highlight-item" style="display: flex; gap: 14px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div class="rich-highlight-icon-wrapper" style="color: #008060; flex-shrink: 0; margin-top: 2px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                </div>
                <div class="rich-highlight-content">
                  <strong style="display: block; font-size: 1.05rem; color: var(--color-primary-navy); margin-bottom: 4px;">Natural Hot Springs at Tatopani (~1,190 m)</strong>
                  Soothe your trekking muscles in the natural thermal mineral pools on the banks of the Kali Gandaki River after descending from the high pass.
                </div>
              </div>

              <!-- 8. Marpha Thakali Heritage -->
              <div class="rich-highlight-item" style="display: flex; gap: 14px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div class="rich-highlight-icon-wrapper" style="color: #008060; flex-shrink: 0; margin-top: 2px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                </div>
                <div class="rich-highlight-content">
                  <strong style="display: block; font-size: 1.05rem; color: var(--color-primary-navy); margin-bottom: 4px;">Thakali Culture & Marpha Apple Orchards</strong>
                  Walk through pristine whitewashed alleys, taste fresh Himalayan apple cider and pies, and experience famous Thakali hospitality along the historic salt route.
                </div>
              </div>
            </div>

            <!-- Deep Environmental & Cultural Section -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
              <h3 style="font-size: 1.3rem; color: var(--color-primary-navy); margin-bottom: 14px; font-weight: 700;">More Than a Mountain Trek: Culture & History</h3>
              <p style="font-size: 1.02rem; color: var(--color-neutral-700); line-height: 1.75; margin-bottom: 12px;">
                The Annapurna Circuit is often marketed for its dramatic mountain views, but the route's deeper significance lies in the interaction between geography, people, and centuries of history:
              </p>
              <ul style="padding-left: 20px; color: var(--color-neutral-700); line-height: 1.8; font-size: 1rem; margin-bottom: 16px;">
                <li><strong>Gurung and Middle-Hill Communities:</strong> Terraced agriculture, stone slate architecture, and vibrant community life in the lower Marsyangdi Valley.</li>
                <li><strong>Manang Trading Heritage:</strong> Centuries-old Tibetan-influenced stone architecture, high pastures, gompas, and traditional salt trade networks.</li>
                <li><strong>Muktinath Sacred Confluence:</strong> A holy pilgrimage hub where Hindu Vaishnavite devotion and Tibetan Buddhist traditions harmoniously converge.</li>
                <li><strong>Historic Kali Gandaki Salt Corridor:</strong> The ancient trade artery connecting the Tibetan plateau with the Indian subcontinent.</li>
                <li><strong>Thakali Mountain Hospitality:</strong> Renowned culinary traditions, immaculate lodges, and rich merchant culture in Marpha and Tukuche.</li>
              </ul>
            </div>

            <!-- Ask Experts WhatsApp CTA Banner Card -->
            <div class="trek-expert-cta-card">
              <div class="trek-expert-cta-left">
                <div class="trek-expert-cta-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="trek-expert-cta-title">Planning your Annapurna Circuit Trek?</h4>
                  <p class="trek-expert-cta-desc">Speak directly with our certified Himalayan route planners for custom dates, road condition updates, and group discounts.</p>
                </div>
              </div>
              <a href="https://wa.me/9779800000000?text=Hi%2C%20I%20am%20planning%20the%2014-Day%20Annapurna%20Circuit%20Trek.%20Could%20you%20please%20help%20me%20with%20details%3F" target="_blank" rel="noopener noreferrer" class="trek-expert-cta-btn">
                <span>Chat on WhatsApp</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

          </section>
`;
}

module.exports = { generateOverviewHtml };
console.log('build_act_overview.js created successfully');
