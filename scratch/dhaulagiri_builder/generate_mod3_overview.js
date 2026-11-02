// Generator for Module 3: Section 1 - Trek Overview for Dhaulagiri Circuit Trek
const fs = require('fs');

function buildOverviewModule() {
  const code = `// Module 3: Section 1 - Trek Overview (Canonical Architecture with 20-Point Specs Table, Feature Cards, 6 Photo Highlights, Suitability Matrix & Trust Pillars)
function getOverviewSection() {
  return \`
        <!-- Section 1: Overview -->
        <section id="section-overview" class="trek-detail-section">
          <div style="margin-bottom: 24px;">
            <h2 class="trek-section-title">Trek Overview</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 6px;"></div>
          </div>

          <!-- Executive Summary Paragraphs -->
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 16px;">
            The <strong>Dhaulagiri Circuit Trek</strong> is a challenging high-altitude trekking expedition in western Nepal that journeys from traditional mountain settlements into remote wilderness beneath the monumental Dhaulagiri massif. This comprehensive 20-calendar-day expedition package combines the rural landscapes of the Myagdi Valley, forested river trails, self-contained expedition-style camping, Dhaulagiri Base Camp, the spectacular crossing of French Pass, the isolated environment of Hidden Valley, and the descent over Dhampus Pass toward the Kali Gandaki Valley. It is designed specifically for experienced mountaineers seeking an authentic Himalayan journey that goes far beyond conventional teahouse trekking.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 16px;">
            The expedition follows a gradual approach from lower mountain settlements toward increasingly rugged terrain. Starting with road travel from Kathmandu to Beni and Babiyachaur, the walking route progresses through Dharapani, Muri, Boghara, Dobang, and Choriban Khola before entering the remote upper valley. As the trail climbs, established village lodges give way to supported camping, and the landscape transitions from terraced hillsides and lush sub-tropical forests to rocky moraines, glacial debris, exposed alpine camps, and high passes above <span data-altitude-m="5000">5,000 metres (16,404 ft)</span>.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 16px;">
            One of the defining features of the journey is reaching <strong>Dhaulagiri Base Camp</strong> at approximately <span data-altitude-m="4750">4,740 to 4,750 metres (15,584 ft)</span> directly on the Chhonbardan Glacier before crossing <strong>French Pass</strong> at approximately <span data-altitude-m="5360">5,360 metres (17,585 ft)</span>. Beyond French Pass, the route enters <strong>Hidden Valley</strong>—an extraordinary high-altitude wilderness basin around <span data-altitude-m="5200">5,000 to 5,200 metres (16,404 to 17,060 ft)</span> where full expedition camping support is mandatory. The circuit then crosses <strong>Dhampus Pass</strong> (<span data-altitude-m="5250">5,200 to 5,250 metres</span>) before descending to Yak Kharka and Jomsom.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 28px;">
            Unlike routes where lodge accommodation is readily available each evening, much of the upper Dhaulagiri Circuit depends entirely on an organized expedition support team. Licensed high-altitude guides, porters, a professional cook and kitchen crew, expedition mountain tents, food supplies, and safety monitoring equipment are essential components. The planned return is a Day 18 scenic mountain flight from Jomsom to Pokhara and a Day 19 road journey to Kathmandu before final Day 20 international departure.
          </p>

          <!-- Key Trip Facts / Specifications Table -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 36px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <div style="background: #f8fafc; padding: 16px 20px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary-navy); margin: 0;">Dhaulagiri Circuit Trek at a Glance</h3>
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--color-copper-orange); background: #fff7ed; padding: 3px 10px; border-radius: 12px;">Expedition Specifications</span>
            </div>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.92rem;">
                <tbody>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); width: 220px; background: #fafafa;">Trek Name</td>
                    <td style="padding: 12px 20px; color: #334155;">Dhaulagiri Circuit Trek (Expedition High Pass Circuit)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Total Duration</td>
                    <td style="padding: 12px 20px; color: #334155;">20 Calendar Days (Kathmandu to Kathmandu)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Walking Stages</td>
                    <td style="padding: 12px 20px; color: #334155;">13 Active Walking Days + 2 Mandatory Acclimatization Days</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Highest Point</td>
                    <td style="padding: 12px 20px; color: #334155;"><strong>French Pass: <span data-altitude-m="5360">5,360 m (17,585 ft)</span></strong></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Highest Sleeping Altitude</td>
                    <td style="padding: 12px 20px; color: #334155;"><strong>Hidden Valley Camp: <span data-altitude-m="5200">~5,000 to 5,200 m (16,404 to 17,060 ft)</span></strong></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Second High Pass</td>
                    <td style="padding: 12px 20px; color: #334155;"><strong>Dhampus Pass: <span data-altitude-m="5250">~5,200 to 5,250 m (17,060 to 17,224 ft)</span></strong></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Major Landmarks</td>
                    <td style="padding: 12px 20px; color: #334155;">Dhaulagiri Base Camp (4,750 m), Italian Base Camp (3,660 m), French Pass, Hidden Valley, Dhampus Pass</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Trek Difficulty</td>
                    <td style="padding: 12px 20px; color: #334155;"><span style="background: #fef2f2; color: #dc2626; padding: 2px 8px; border-radius: 4px; font-weight: 700;">Strenuous / Grade 5</span> (Glacier traverses & consecutive days above 4,000 m)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Trek Style</td>
                    <td style="padding: 12px 20px; color: #334155;">Supported Expedition Camping (7+ nights tented camps) & Remote Village Teahouses</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Starting Point</td>
                    <td style="padding: 12px 20px; color: #334155;">Kathmandu overland via Beni to Babiyachaur (Myagdi Valley)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Ending Point</td>
                    <td style="padding: 12px 20px; color: #334155;">Jomsom (Kali Gandaki Valley) via flight to Pokhara & drive to Kathmandu</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Daily Walking Hours</td>
                    <td style="padding: 12px 20px; color: #334155;">5 to 8 hours daily (up to 8–9 hours on French Pass and Dhampus Pass crossing days)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Required Permits</td>
                    <td style="padding: 12px 20px; color: #334155;">Annapurna Conservation Area Permit (ACAP), TIMS Card, and Local Rural Municipality Entry</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Accommodation</td>
                    <td style="padding: 12px 20px; color: #334155;">3-star hotels in Kathmandu/Pokhara, simple village lodges on lower trail, 4-season alpine tents at high camps</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Meals Included</td>
                    <td style="padding: 12px 20px; color: #334155;">Full Board (Breakfast, Lunch, Dinner prepared by dedicated expedition cook and camp crew)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Expedition Support</td>
                    <td style="padding: 12px 20px; color: #334155;">Licensed Lead Sherpa Guide, Assistant Guides, Cook, Kitchen Helpers, Porters (2:1 client ratio)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Medical Equipment</td>
                    <td style="padding: 12px 20px; color: #334155;">Medical oxygen cylinder, twice-daily pulse oximeter monitoring, comprehensive trauma first aid kit</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Best Seasons</td>
                    <td style="padding: 12px 20px; color: #334155;">Autumn (September to November) &amp; Spring (March to May)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Flight Inclusions</td>
                    <td style="padding: 12px 20px; color: #334155;">Jomsom to Pokhara scheduled domestic flight (Day 18) included</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Prior Experience</td>
                    <td style="padding: 12px 20px; color: #334155;">Strongly recommended: previous high-altitude multi-day trekking above 4,000–4,500 m</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- What Makes the Dhaulagiri Circuit Special: 4-Card Feature Grid -->
          <div style="margin-bottom: 36px;">
            <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 16px;">What Makes the Dhaulagiri Circuit Trek Special?</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
              
              <!-- Card 1 -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
                <div style="width: 44px; height: 44px; border-radius: 10px; background: #fff7ed; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2"><path d="M12 2l7 19-7-4-7 4 7-19z"/></svg>
                </div>
                <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 8px;">Dhaulagiri Massif Panorama</h4>
                <p style="color: #64748b; font-size: 0.92rem; line-height: 1.6; margin: 0;">
                  Dhaulagiri I rises to 8,167 m (26,795 ft), the world's 7th highest mountain. Unlike single-viewpoint treks, this circuit circumnavigates the entire massif, offering constantly shifting perspectives of ice walls, hanging glaciers, and surrounding 7,000 m giants.
                </p>
              </div>

              <!-- Card 2 -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
                <div style="width: 44px; height: 44px; border-radius: 10px; background: #eff6ff; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 8px;">Two Passes Above 5,200 m</h4>
                <p style="color: #64748b; font-size: 0.92rem; line-height: 1.6; margin: 0;">
                  Cross French Pass (5,360 m / 17,585 ft) and Dhampus Pass (5,250 m / 17,224 ft). Reaching the crest reveals an immense ocean of peaks stretching into the Tibetan plateau, Mustang, and the Annapurnas across the Kali Gandaki.
                </p>
              </div>

              <!-- Card 3 -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
                <div style="width: 44px; height: 44px; border-radius: 10px; background: #f0fdf4; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M13 21V11l6 3v7"/></svg>
                </div>
                <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 8px;">True Expedition Camping</h4>
                <p style="color: #64748b; font-size: 0.92rem; line-height: 1.6; margin: 0;">
                  Experience true alpine expedition living for over a week at high camps: Italian Base Camp, Glacier Camp, Dhaulagiri Base Camp, and Hidden Valley. Fully self-contained with our Sherpa guides, kitchen crew, dining tent, and warm meals.
                </p>
              </div>

              <!-- Card 4 -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
                <div style="width: 44px; height: 44px; border-radius: 10px; background: #faf5ff; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 8px;">Pristine Wilderness Solitude</h4>
                <p style="color: #64748b; font-size: 0.92rem; line-height: 1.6; margin: 0;">
                  Free from teahouse commercialism and crowds. The trails of the upper Myagdi and Hidden Valley remain pristine, quiet, and wild—offering rare solitude and deep connection with the greatest mountain heights on Earth.
                </p>
              </div>

            </div>
          </div>

          <!-- Section 1.3: Deep-Dive Key Highlights (6 Themed Highlight Cards) -->
          <div style="margin-bottom: 36px;">
            <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 18px;">Dhaulagiri Circuit Trek Key Highlights</h3>
            
            <div style="display: flex; flex-direction: column; gap: 20px;">
              
              <!-- Highlight 1: Mount Dhaulagiri -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                <div style="height: 100%; min-height: 220px; overflow: hidden;">
                  <img src="../../images/hero-himalayas.jpg" alt="Mount Dhaulagiri Massif and Glacial Wall" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="padding: 24px; display: flex; flex-direction: column; justify-content: center;">
                  <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--color-copper-orange); margin-bottom: 6px;">Massif Immersion</span>
                  <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 10px;">Mount Dhaulagiri &amp; Himalayan Mountain Panorama</h4>
                  <p style="color: #475569; font-size: 0.93rem; line-height: 1.65; margin: 0;">
                    Mount Dhaulagiri (8,167 m) dominates the entire western Himalayan horizon. The approach takes trekkers through changing elevations, where early forest paths give way to massive rock faces, seracs, and hanging glaciers. Sunrise brings golden light across Dhaulagiri I, II, III, IV, V, and Gurja Himal.
                  </p>
                </div>
              </div>

              <!-- Highlight 2: Dhaulagiri Base Camp -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                <div style="height: 100%; min-height: 220px; overflow: hidden;">
                  <img src="../../images/gallery-peak.jpg" alt="Dhaulagiri Base Camp Glacial Amphitheater" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="padding: 24px; display: flex; flex-direction: column; justify-content: center;">
                  <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--color-copper-orange); margin-bottom: 6px;">Expedition Staging (4,750 m)</span>
                  <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 10px;">Dhaulagiri Base Camp: A Major Expedition Destination</h4>
                  <p style="color: #475569; font-size: 0.93rem; line-height: 1.65; margin: 0;">
                    Situated at approximately 4,740 to 4,750 m directly on the Chhonbardan Glacier, Dhaulagiri Base Camp is encircled by towering vertical rock walls and chaotic icefall formations. Our planned acclimatization rest day allows essential physiologic recovery and gear checks before attempting French Pass.
                  </p>
                </div>
              </div>

              <!-- Highlight 3: French Pass -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                <div style="height: 100%; min-height: 220px; overflow: hidden;">
                  <img src="../../images/gallery-pass.jpg" alt="French Pass Summit at 5,360 m" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="padding: 24px; display: flex; flex-direction: column; justify-content: center;">
                  <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--color-copper-orange); margin-bottom: 6px;">Highest Point (5,360 m)</span>
                  <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 10px;">French Pass: The Alpine Apex of the Circuit</h4>
                  <p style="color: #475569; font-size: 0.93rem; line-height: 1.65; margin: 0;">
                    At 5,360 m (17,585 ft), French Pass is the highest daytime crossing. Requiring an alpine pre-dawn departure, the ascent negotiates moraine ridges, snowfields, and rocky scree. From the prayer-flag-strewn crest, a magnificent panorama opens across Tukuche Peak, Sita Chuchura, and into the vastness of Hidden Valley.
                  </p>
                </div>
              </div>

              <!-- Highlight 4: Hidden Valley -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                <div style="height: 100%; min-height: 220px; overflow: hidden;">
                  <img src="../../images/gallery-lake.jpg" alt="Hidden Valley Remote Alpine Basin Camping" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="padding: 24px; display: flex; flex-direction: column; justify-content: center;">
                  <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--color-copper-orange); margin-bottom: 6px;">Remote High Wilderness</span>
                  <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 10px;">Hidden Valley: Uninhabited High-Altitude Basin (5,200 m)</h4>
                  <p style="color: #475569; font-size: 0.93rem; line-height: 1.65; margin: 0;">
                    Hidden Valley is one of Nepal's most remote high-altitude camping environments. Located beyond French Pass at ~5,000–5,200 m, the basin is stark, wind-carved, and completely uninhabited. Camping here under crystal Himalayan starlight provides an unforgettable expedition experience.
                  </p>
                </div>
              </div>

              <!-- Highlight 5: Dhampus Pass & Descent -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                <div style="height: 100%; min-height: 220px; overflow: hidden;">
                  <img src="../../images/gallery-pass.jpg" alt="Dhampus Pass and Kali Gandaki Valley Descent" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="padding: 24px; display: flex; flex-direction: column; justify-content: center;">
                  <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--color-copper-orange); margin-bottom: 6px;">Second High Pass (5,250 m)</span>
                  <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 10px;">Dhampus Pass &amp; The Sustained Kali Gandaki Descent</h4>
                  <p style="color: #475569; font-size: 0.93rem; line-height: 1.65; margin: 0;">
                    Crossing Dhampus Pass (5,250 m) connects Hidden Valley to the Kali Gandaki Valley. The crossing is followed by a dramatic 1,550 m descent to Yak Kharka (3,680 m) with breathtaking vistas of the Annapurna massif and Nilgiri peaks directly across the world's deepest gorge.
                  </p>
                </div>
              </div>

              <!-- Highlight 6: Cultural Diversity -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
                <div style="height: 100%; min-height: 220px; overflow: hidden;">
                  <img src="../../images/gallery-teahouse.jpg" alt="Traditional Villages of Myagdi and Marpha Thakali Heritage" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="padding: 24px; display: flex; flex-direction: column; justify-content: center;">
                  <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--color-copper-orange); margin-bottom: 6px;">Living Heritage</span>
                  <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 10px;">From Myagdi Terraces to Marpha Thakali Heritage</h4>
                  <p style="color: #475569; font-size: 0.93rem; line-height: 1.65; margin: 0;">
                    Experience Nepal's rich cultural diversity: beginning among the terraced farms and Magar settlements of the lower Myagdi Valley (Babiyachaur, Dharapani, Muri, Boghara), and concluding in the ancient stone-paved alleys, apple orchards, and Tibetan Buddhist monasteries of Marpha and Jomsom.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <!-- Section 1.4: Who is the Dhaulagiri Circuit Trek Suitable For? (6-Profile Matrix) -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 28px; margin-bottom: 36px;">
            <div style="margin-bottom: 18px;">
              <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 6px;">Who is the Dhaulagiri Circuit Trek Designed For?</h3>
              <p style="color: #64748b; font-size: 0.95rem; line-height: 1.6; margin: 0;">
                The 20-day Dhaulagiri Circuit is a serious expedition demanding high physical conditioning, wilderness adaptability, and mental resilience:
              </p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
              
              <div style="background: #ffffff; padding: 18px 20px; border-radius: 10px; border: 1px solid #e2e8f0;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                  <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-copper-orange);"></span>
                  <strong style="color: var(--color-primary-navy); font-size: 0.98rem;">Experienced High-Altitude Trekkers</strong>
                </div>
                <p style="color: #64748b; font-size: 0.88rem; line-height: 1.6; margin: 0;">
                  Trekkers who have previously completed routes above 4,000–4,500 m (such as Everest Base Camp, Annapurna Circuit, or Manaslu) and understand pacing, layering, and altitude physiology.
                </p>
              </div>

              <div style="background: #ffffff; padding: 18px 20px; border-radius: 10px; border: 1px solid #e2e8f0;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                  <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-copper-orange);"></span>
                  <strong style="color: var(--color-primary-navy); font-size: 0.98rem;">Wilderness Camping Enthusiasts</strong>
                </div>
                <p style="color: #64748b; font-size: 0.88rem; line-height: 1.6; margin: 0;">
                  Hikers who enjoy sleeping in high alpine tents, experiencing sub-zero nights, and adapting to basic camp infrastructure away from commercial teahouses.
                </p>
              </div>

              <div style="background: #ffffff; padding: 18px 20px; border-radius: 10px; border: 1px solid #e2e8f0;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                  <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-copper-orange);"></span>
                  <strong style="color: var(--color-primary-navy); font-size: 0.98rem;">Endurance Athletes &amp; Climbers</strong>
                </div>
                <p style="color: #64748b; font-size: 0.88rem; line-height: 1.6; margin: 0;">
                  Trekkers with strong cardiovascular stamina capable of sustained 6 to 9-hour mountain walking days on uneven moraine, scree, and snow.
                </p>
              </div>

              <div style="background: #ffffff; padding: 18px 20px; border-radius: 10px; border: 1px solid #e2e8f0;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                  <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-copper-orange);"></span>
                  <strong style="color: var(--color-primary-navy); font-size: 0.98rem;">Off-the-Beaten-Track Explorers</strong>
                </div>
                <p style="color: #64748b; font-size: 0.88rem; line-height: 1.6; margin: 0;">
                  Adventurers seeking complete isolation, wild Himalayan valleys, pristine rivers, and genuine peace far away from busy commercial trekking trails.
                </p>
              </div>

              <div style="background: #ffffff; padding: 18px 20px; border-radius: 10px; border: 1px solid #e2e8f0;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                  <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-copper-orange);"></span>
                  <strong style="color: var(--color-primary-navy); font-size: 0.98rem;">Mountain Photographers</strong>
                </div>
                <p style="color: #64748b; font-size: 0.88rem; line-height: 1.6; margin: 0;">
                  Photographers looking for dramatic, untamed Himalayan landscapes, towering icefalls, high passes, and unpolluted night skies in Hidden Valley.
                </p>
              </div>

              <div style="background: #ffffff; padding: 18px 20px; border-radius: 10px; border: 1px solid #fee2e2;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                  <span style="width: 8px; height: 8px; border-radius: 50%; background: #dc2626;"></span>
                  <strong style="color: #991b1b; font-size: 0.98rem;">Who It Is Not Recommended For</strong>
                </div>
                <p style="color: #7f1d1d; font-size: 0.88rem; line-height: 1.6; margin: 0;">
                  Not suitable for complete beginners, those requiring luxury lodge amenities, or individuals unable to handle cold camping conditions (-15°C to -20°C).
                </p>
              </div>

            </div>
          </div>

          <!-- Section 1.5: Why Book with Namaste Hiking Trek? (4 Trust Pillars) -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
              <span class="pill pill-copper" style="font-size: 0.75rem; text-transform: uppercase; font-weight: 800;">Expedition Assurance</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--color-primary-navy); margin: 0;">Why Book the Dhaulagiri Circuit Trek with Namaste Hiking Trek?</h3>
            </div>
            <p style="color: #475569; font-size: 0.98rem; line-height: 1.7; margin-bottom: 22px;">
              With over 15,000 travelers guided across Nepal's mountains, Namaste Hiking Trek combines rigorous wilderness safety standards with elite local Sherpa heritage:
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px;">
              <div style="display: flex; gap: 12px;">
                <div style="width: 28px; height: 28px; border-radius: 50%; background: #e6f7f0; color: #008060; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <strong style="color: var(--color-primary-navy); font-size: 0.95rem; display: block; margin-bottom: 4px;">Elite Sherpa Leadership</strong>
                  <span style="font-size: 0.88rem; color: #64748b; line-height: 1.6; display: block;">Government-licensed, high-altitude Sherpa guides certified in Wilderness First Aid with extensive multi-pass expedition leadership.</span>
                </div>
              </div>

              <div style="display: flex; gap: 12px;">
                <div style="width: 28px; height: 28px; border-radius: 50%; background: #e6f7f0; color: #008060; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <strong style="color: var(--color-primary-navy); font-size: 0.95rem; display: block; margin-bottom: 4px;">Certified Safety Protocols</strong>
                  <span style="font-size: 0.88rem; color: #64748b; line-height: 1.6; display: block;">Twice-daily pulse oximetry checks, medical oxygen cylinder carried at all times, emergency satellite phone, and 24/7 Kathmandu operations room support.</span>
                </div>
              </div>

              <div style="display: flex; gap: 12px;">
                <div style="width: 28px; height: 28px; border-radius: 50%; background: #e6f7f0; color: #008060; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <strong style="color: var(--color-primary-navy); font-size: 0.95rem; display: block; margin-bottom: 4px;">Ethical Porter Welfare</strong>
                  <span style="font-size: 0.88rem; color: #64748b; line-height: 1.6; display: block;">Strict compliance with IPPG guidelines: fair living wages, 20 kg load limit per porter, warm high-altitude clothing, insulated tents, and emergency insurance.</span>
                </div>
              </div>

              <div style="display: flex; gap: 12px;">
                <div style="width: 28px; height: 28px; border-radius: 50%; background: #e6f7f0; color: #008060; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <strong style="color: var(--color-primary-navy); font-size: 0.95rem; display: block; margin-bottom: 4px;">Transparent Tiered Pricing</strong>
                  <span style="font-size: 0.88rem; color: #64748b; line-height: 1.6; display: block;">Guaranteed departures, all ACAP &amp; TIMS permits included, private 4WD transportation, Jomsom-Pokhara flight included, and zero hidden checkout fees.</span>
                </div>
              </div>
            </div>
          </div>

        </section>
\`;
}

module.exports = { getOverviewSection };
`;

  fs.writeFileSync('scratch/dhaulagiri_builder/mod3_overview.js', code, 'utf8');
  console.log('Successfully wrote scratch/dhaulagiri_builder/mod3_overview.js');
}

buildOverviewModule();

