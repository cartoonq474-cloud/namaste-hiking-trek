// Module 3: Section 1 - Trek Overview (Canonical Architecture with 20-Point Specs Table, Feature Cards, 6 Photo Highlights, Suitability Matrix & Trust Pillars)
function getOverviewSection() {
  return `
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

          <!-- Section 1.3: Deep-Dive Key Highlights (8 Themed Highlight Cards) -->
          <div style="margin-bottom: 36px;">
            <div style="margin-bottom: 14px;">
              <span class="pill pill-copper" style="margin-bottom: 8px; font-size: 0.75rem; text-transform: uppercase; font-weight: 800;">Experience Gallery</span>
              <h3 style="font-size: 1.45rem; font-weight: 800; color: var(--color-primary-navy); margin: 0;">Dhaulagiri Circuit Trek Key Highlights</h3>
            </div>
            <p style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.7; margin-bottom: 24px;">
              The Dhaulagiri Circuit Trek brings together western Nepal's most dramatic landscapes and demanding wilderness challenges—transitioning from the terraced fields of the Myagdi Valley into glaciated base camps, two passes above 5,200 meters, and the desolate basin of Hidden Valley. These are the core experiences, natural phenomena, and cultural landmarks that define this authentic 20-day Himalayan expedition:
            </p>

            <div style="display: flex; flex-direction: column; gap: 20px;">
              
              <!-- Highlight Card 1: Mount Dhaulagiri & Himalayan Mountain Panorama -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.03); transition: transform 0.2s ease, box-shadow 0.2s ease;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                  <div style="height: 100%; min-height: 240px; max-height: 320px; overflow: hidden;">
                    <img loading="lazy" src="../../images/hero-himalayas.jpg" alt="Mount Dhaulagiri Massif and Western Himalayan Crest" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div style="padding: 24px;">
                    <span style="font-size: 0.72rem; font-weight: 800; color: var(--color-copper-orange); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">MASSIF IMMERSION &bull; 8,167 M</span>
                    <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy); margin: 0 0 10px 0;">Mount Dhaulagiri &amp; Himalayan Mountain Panorama</h4>
                    <p style="font-size: 0.94rem; color: #475569; line-height: 1.65; margin-bottom: 12px;">
                      Mount Dhaulagiri (8,167 m) is the world's 7th highest peak and the defining landmark of this expedition. As the trail advances from the deep Myagdi Valley onto the Chhonbardan Glacier, the massif unfolds in staggering vertical scale—dominated by Dhaulagiri I, II, III, IV, V, and Gurja Himal.
                    </p>
                    <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <li>Close-up vistas of Dhaulagiri I's sheer 4,000-meter south and west rock-and-ice faces</li>
                      <li>Shifting alpine light from fiery morning alpenglow to evening gold across glacial cirques</li>
                      <li>Dramatic panoramas across Tukuche Peak, Sita Chuchura, and the Nilgiri range</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Highlight Card 2: Dhaulagiri Base Camp -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.03); transition: transform 0.2s ease, box-shadow 0.2s ease;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                  <div style="height: 100%; min-height: 240px; max-height: 320px; overflow: hidden;">
                    <img loading="lazy" src="../../images/gallery-peak.jpg" alt="Dhaulagiri Base Camp on the Chhonbardan Glacier" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div style="padding: 24px;">
                    <span style="font-size: 0.72rem; font-weight: 800; color: #008060; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">EXPEDITION STAGING &bull; 4,750 M</span>
                    <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy); margin: 0 0 10px 0;">Dhaulagiri Base Camp: World-Class Glacial Milestone</h4>
                    <p style="font-size: 0.94rem; color: #475569; line-height: 1.65; margin-bottom: 12px;">
                      Reaching Dhaulagiri Base Camp at approximately 4,740 to 4,750 meters on the lateral moraine of the Chhonbardan Glacier marks a defining milestone after days of rugged wilderness trekking. Enclosed by vertical rock faces, active seracs, and hanging icefalls, base camp serves as our high-altitude staging ground where our scheduled acclimatization rest day prepares trekkers for the two high passes.
                    </p>
                    <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <li>Tented expedition camp directly on the glacier with a 360-degree amphitheater of ice and stone</li>
                      <li>Scheduled rest and acclimatization day for physiologic recovery, hydration, and technical gear checks</li>
                      <li>Front-row views of mountaineering climbing routes and cascading avalanches across distant cirques</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Highlight Card 3: French Pass -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.03); transition: transform 0.2s ease, box-shadow 0.2s ease;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                  <div style="height: 100%; min-height: 240px; max-height: 320px; overflow: hidden;">
                    <img loading="lazy" src="../../images/gallery-pass.jpg" alt="Trekking Group Crossing French Pass Summit at 5,360 m" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div style="padding: 24px;">
                    <span style="font-size: 0.72rem; font-weight: 800; color: #2563eb; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">THE ALPINE APEX &bull; 5,360 M</span>
                    <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy); margin: 0 0 10px 0;">French Pass: The 5,360m High-Altitude Apex</h4>
                    <p style="font-size: 0.94rem; color: #475569; line-height: 1.65; margin-bottom: 12px;">
                      At 5,360 m (17,585 ft), French Pass is the geographic and physical summit of the circuit. Following a crisp pre-dawn alpine departure from base camp, trekkers navigate moraine ridges, snowfields, and rocky scree to reach the prayer-flag-strewn saddle. The pass bridges the glaciated Myagdi drainage with the uninhabited northern basin of Hidden Valley.
                    </p>
                    <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <li>Sweeping 360-degree summit panorama spanning Dhaulagiri I, Tukuche Peak, and Mukut Himal</li>
                      <li>Demanding alpine crossing requiring stamina, steady footwork, and warm expedition layering</li>
                      <li>Historic landmark first traversed by the 1950 French Annapurna expedition led by Maurice Herzog</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Highlight Card 4: Hidden Valley -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.03); transition: transform 0.2s ease, box-shadow 0.2s ease;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                  <div style="height: 100%; min-height: 240px; max-height: 320px; overflow: hidden;">
                    <img loading="lazy" src="../../images/gallery-lake.jpg" alt="Hidden Valley Remote Alpine Basin Camping at 5,200 m" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div style="padding: 24px;">
                    <span style="font-size: 0.72rem; font-weight: 800; color: #7c3aed; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">UNINHABITED WILDERNESS &bull; 5,200 M</span>
                    <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy); margin: 0 0 10px 0;">Hidden Valley: Pristine Alpine Wilderness (5,200 m)</h4>
                    <p style="font-size: 0.94rem; color: #475569; line-height: 1.65; margin-bottom: 12px;">
                      Nestled between French Pass and Dhampus Pass at an elevation around 5,000 to 5,200 meters, Hidden Valley is one of Nepal's most remote and starkly beautiful high-altitude basins. Completely uninhabited with zero permanent settlements or teahouses, this windswept alpine sanctuary delivers an unforgettable night of wilderness expedition camping beneath snowbound peaks.
                    </p>
                    <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <li>True wilderness tented camping in an exposed, wind-carved basin isolated from modern civilization</li>
                      <li>Crystalline nocturnal skies offering world-class stargazing and astronomical photography</li>
                      <li>Essential recovery campsite positioned between the two 5,000m+ passes of the circuit</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Highlight Card 5: Dhampus Pass & Descent -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.03); transition: transform 0.2s ease, box-shadow 0.2s ease;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                  <div style="height: 100%; min-height: 240px; max-height: 320px; overflow: hidden;">
                    <img loading="lazy" src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-high-altitude-trail-08.jpg" alt="Dhampus Pass Ridge Crest and Kali Gandaki Valley Descent" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div style="padding: 24px;">
                    <span style="font-size: 0.72rem; font-weight: 800; color: #0284c7; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">SECOND HIGH PASS &bull; 5,250 M</span>
                    <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy); margin: 0 0 10px 0;">Dhampus Pass (5,250 m) &amp; The Annapurna Panorama</h4>
                    <p style="font-size: 0.94rem; color: #475569; line-height: 1.65; margin-bottom: 12px;">
                      Crossing Dhampus Pass (also known as Thapa Pass, approximately 5,200–5,250 m) completes the second major high-altitude crossing of the journey. Standing atop the crest rewards trekkers with breathtaking views across the world's deepest gorge toward the Annapurna massif and Nilgiri peaks before beginning the sustained 1,550-meter descent to the alpine meadows of Yak Kharka (3,680 m).
                    </p>
                    <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <li>Expansive vistas looking directly across the Kali Gandaki gorge into Annapurna I and Annapurna South</li>
                      <li>Dramatic transition from frozen snowfields and moraines to alpine tussock and grazing meadows</li>
                      <li>Final mountain pass signaling safe progression toward the rain-shadow villages of Lower Mustang</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Highlight Card 6: Traditional Villages of Myagdi -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.03); transition: transform 0.2s ease, box-shadow 0.2s ease;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                  <div style="height: 100%; min-height: 240px; max-height: 320px; overflow: hidden;">
                    <img loading="lazy" src="../../images/treks/manaslu-circuit/manaslu-circuit-river-gorge-08.jpg" alt="Terraced Hillsides and River Gorges of the Lower Myagdi Valley" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div style="padding: 24px;">
                    <span style="font-size: 0.72rem; font-weight: 800; color: #059669; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">CULTURAL IMMERSION &bull; 1,100 M – 2,500 M</span>
                    <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy); margin: 0 0 10px 0;">Traditional Villages &amp; Terraced Hillsides of Myagdi</h4>
                    <p style="font-size: 0.94rem; color: #475569; line-height: 1.65; margin-bottom: 12px;">
                      The lower approach through Babiyachaur, Dharapani, Muri, Boghara, and Dobang provides a rich cultural contrast to the barren glacial realm above. Walking through ancient Magar communities, terraced rice paddies, bamboo groves, and subtropical gorges, trekkers observe authentic agrarian hill life and experience genuine Nepali hospitality before entering the wilderness.
                    </p>
                    <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <li>Stone-and-slate village architecture nestled amidst stepped terraces of barley, millet, and maize</li>
                      <li>Subtropical and temperate forest trails adorned with rhododendrons, oaks, and thundering waterfalls</li>
                      <li>Progressive physical conditioning that allows legs and cardiovascular rhythm to adapt naturally</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Highlight Card 7: Marpha & Jomsom Thakali Heritage -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.03); transition: transform 0.2s ease, box-shadow 0.2s ease;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                  <div style="height: 100%; min-height: 240px; max-height: 320px; overflow: hidden;">
                    <img loading="lazy" src="../../images/treks/upper-mustang/upper-mustang-kagbeni-gateway-04.jpg" alt="Historic Stone Architecture and Thakali Heritage in Marpha" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div style="padding: 24px;">
                    <span style="font-size: 0.72rem; font-weight: 800; color: #d97706; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">LOWER MUSTANG CULTURE &bull; 2,670 M – 2,720 M</span>
                    <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy); margin: 0 0 10px 0;">Marpha &amp; Jomsom: Thakali Heritage &amp; Apple Orchards</h4>
                    <p style="font-size: 0.94rem; color: #475569; line-height: 1.65; margin-bottom: 12px;">
                      Descending into the Kali Gandaki Valley reintroduces trekkers to settled village life with a distinct northern character. Marpha is celebrated across Nepal for its whitewashed stone architecture, flagstone-paved alleys, flat earthen rooftops, wood-carved windows, Buddhist chortens, and famous apple cider, while nearby Jomsom provides the airfield for the scenic flight back to Pokhara.
                    </p>
                    <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <li>Exploring the centuries-old Samtenling Gompa and tranquil stone alleys of historic Marpha</li>
                      <li>Relishing hearty Thakali cuisine, fresh apple pies, and warm lodge hospitality after 10 days of camping</li>
                      <li>Thrilling mountain flight from Jomsom to Pokhara cruising between Annapurna and Dhaulagiri</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Highlight Card 8: Supported Expedition Camping & Wilderness Rigor -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.03); transition: transform 0.2s ease, box-shadow 0.2s ease;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                  <div style="height: 100%; min-height: 240px; max-height: 320px; overflow: hidden;">
                    <img loading="lazy" src="../../images/gallery-teahouse.jpg" alt="Expedition Camping Setup and Mountain Support Crew" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div style="padding: 24px;">
                    <span style="font-size: 0.72rem; font-weight: 800; color: var(--color-primary-navy); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">EXPEDITION RIGOR &bull; WILDERNESS CREW</span>
                    <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy); margin: 0 0 10px 0;">Supported Wilderness Camping with Dedicated Sherpa Crew</h4>
                    <p style="font-size: 0.94rem; color: #475569; line-height: 1.65; margin-bottom: 12px;">
                      What elevates the Dhaulagiri Circuit into a true Himalayan expedition is its full camping format. Because there are no commercial teahouses between Dobang and Yak Kharka, our certified Sherpa guides, cook team, and kitchen porters carry all 4-season alpine tents, warm dining structures, kitchen equipment, fresh food, and emergency safety gear to support the group in extreme conditions.
                    </p>
                    <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <li>4-season geodesic mountain tents, closed-cell insulation sleeping mats, and heated dining tent</li>
                      <li>Freshly prepared three-course hot meals cooked three times daily for sustained high-altitude energy</li>
                      <li>Medical oxygen, pulse oximeters, portable altitude chamber (PAC bag), and satellite comms on every trek</li>
                    </ul>
                  </div>
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
`;
}

module.exports = { getOverviewSection };
