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

          <!-- Section 1.3: Canonical Trek Highlights (Official Template matching EBC) -->
          <style>
            .dhaulagiri-highlights-section {
              margin-top: 36px;
              padding-top: 30px;
              border-top: 1px solid var(--color-neutral-100);
            }
            .dhaulagiri-highlights-header {
              border-left: 4px solid var(--color-copper-orange);
              padding-left: 16px;
              margin-bottom: 16px;
            }
            .dhaulagiri-highlights-title {
              font-size: 1.85rem;
              margin: 0;
              color: var(--color-primary-navy);
              font-weight: 700;
              line-height: 1.3;
            }
            .dhaulagiri-highlights-intro-p {
              color: var(--color-neutral-700);
              font-size: 1.05rem;
              margin-bottom: 16px;
              line-height: 1.7;
            }
            .dhaulagiri-highlights-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
              margin-top: 26px;
              margin-bottom: 35px;
            }
            .dhaulagiri-highlight-card {
              background: #ffffff;
              border: 1px solid #e2e8f0;
              border-radius: 16px;
              padding: 24px 26px;
              display: flex;
              flex-direction: column;
              transition: all var(--transition-fast, 0.25s ease);
              box-shadow: 0 2px 8px rgba(12, 43, 78, 0.03);
            }
            .dhaulagiri-highlight-card:hover {
              border-color: var(--color-copper-orange);
              box-shadow: 0 10px 28px rgba(16, 185, 129, 0.12);
              transform: translateY(-2px);
            }
            .dhaulagiri-highlight-top {
              display: flex;
              align-items: center;
              gap: 14px;
              margin-bottom: 14px;
            }
            .dhaulagiri-highlight-icon-box {
              width: 44px;
              height: 44px;
              flex-shrink: 0;
              background: rgba(16, 185, 129, 0.08);
              color: var(--color-copper-orange);
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .dhaulagiri-highlight-card-title {
              font-size: 1.15rem;
              margin: 0;
              color: var(--color-primary-navy);
              font-weight: 700;
              line-height: 1.35;
            }
            .dhaulagiri-highlight-body {
              font-size: 0.98rem;
              line-height: 1.68;
              color: var(--color-neutral-700);
              margin: 0;
            }
            .dhaulagiri-peak-tags {
              display: flex;
              flex-wrap: wrap;
              gap: 8px;
              margin: 14px 0 14px 0;
            }
            .dhaulagiri-peak-tag {
              background: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 8px;
              padding: 5px 11px;
              font-size: 0.86rem;
              font-weight: 600;
              color: var(--color-primary-navy);
              display: inline-flex;
              align-items: center;
              gap: 4px;
            }
            .dhaulagiri-peak-tag span {
              color: var(--color-copper-orange);
              font-weight: 500;
            }

            /* Summary Box: At a Glance */
            .dhaulagiri-glance-box {
              background: #f8fafc;
              border: 1px solid #e2e8f0;
              border-left: 5px solid var(--color-copper-orange);
              border-radius: 14px;
              padding: 28px 30px;
              margin-top: 10px;
              margin-bottom: 35px;
              box-shadow: 0 4px 14px rgba(12, 43, 78, 0.03);
            }
            .dhaulagiri-glance-header {
              display: flex;
              align-items: center;
              gap: 12px;
              margin-bottom: 20px;
            }
            .dhaulagiri-glance-header h3 {
              font-size: 1.25rem;
              font-weight: 700;
              color: var(--color-primary-navy);
              margin: 0;
            }
            .dhaulagiri-glance-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 16px 24px;
            }
            .dhaulagiri-glance-item {
              display: flex;
              align-items: flex-start;
              gap: 12px;
              font-size: 0.95rem;
              line-height: 1.55;
              color: var(--color-neutral-700);
            }
            .dhaulagiri-glance-item svg {
              flex-shrink: 0;
              margin-top: 3px;
              color: var(--color-copper-orange);
            }
            .dhaulagiri-glance-item strong {
              color: var(--color-primary-navy);
              font-weight: 700;
            }

            @media (max-width: 900px) {
              .dhaulagiri-highlights-grid {
                grid-template-columns: 1fr;
              }
              .dhaulagiri-glance-grid {
                grid-template-columns: 1fr;
              }
            }
            @media (max-width: 600px) {
              .dhaulagiri-highlight-card {
                padding: 20px 18px;
              }
              .dhaulagiri-glance-box {
                padding: 20px 18px;
              }
            }
          </style>

          <div class="dhaulagiri-highlights-section">
            <div class="dhaulagiri-highlights-header">
              <h2 class="dhaulagiri-highlights-title">Dhaulagiri Circuit Trek Highlights</h2>
            </div>
            
            <p class="dhaulagiri-highlights-intro-p">
              The Dhaulagiri Circuit Trek brings together some of the most dramatic landscapes and demanding trekking experiences in western Nepal. The journey leads from the inhabited valleys of the Myagdi region into remote mountain terrain beneath the Dhaulagiri massif, with several days of expedition camping, a visit to Dhaulagiri Base Camp, a crossing of French Pass, an overnight stay in Hidden Valley, and a second high-pass crossing over Dhampus Pass. The route then descends toward the Kali Gandaki Valley, creating a varied trekking experience that combines natural scenery, cultural landscapes, and the physical challenge of crossing high Himalayan terrain.
            </p>
            <p class="dhaulagiri-highlights-intro-p">
              Unlike a trek focused on a single base camp or viewpoint, the Dhaulagiri Circuit develops gradually over multiple stages. The following highlights explain what makes the Dhaulagiri Circuit Trek distinctive and what travelers can expect from its principal destinations, while recognizing that weather, visibility, trail conditions, and the expedition leader's decisions can affect the actual experience.
            </p>
            
            <div class="dhaulagiri-highlights-grid">
              
              <!-- 1. Mount Dhaulagiri and Himalayan Panorama -->
              <div class="dhaulagiri-highlight-card">
                <div class="dhaulagiri-highlight-top">
                  <div class="dhaulagiri-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                    </svg>
                  </div>
                  <h3 class="dhaulagiri-highlight-card-title">Mount Dhaulagiri and its Himalayan mountain panorama</h3>
                </div>
                <p class="dhaulagiri-highlight-body">
                  Mount Dhaulagiri is the defining landmark of this trekking expedition. Dhaulagiri I rises to approximately <span data-altitude-m="8167">8,167 metres</span> above sea level, making it the 7th highest mountain in the world and one of Nepal's most prominent Himalayan peaks. The surrounding massif dominates the landscape across much of the upper route, creating a dramatic setting for the journey toward base camp and the two high passes. As the route enters the higher valleys, the surroundings become more open, and the Dhaulagiri wall becomes increasingly central to the experience. Depending on the section of the route and visibility, you can view:
                </p>
                <div class="dhaulagiri-peak-tags">
                  <div class="dhaulagiri-peak-tag">Dhaulagiri I <span>8,167 m</span></div>
                  <div class="dhaulagiri-peak-tag">Dhaulagiri II <span>7,751 m</span></div>
                  <div class="dhaulagiri-peak-tag">Dhaulagiri III <span>7,715 m</span></div>
                  <div class="dhaulagiri-peak-tag">Dhaulagiri IV <span>7,661 m</span></div>
                  <div class="dhaulagiri-peak-tag">Dhaulagiri V <span>7,618 m</span></div>
                  <div class="dhaulagiri-peak-tag">Gurja Himal <span>7,193 m</span></div>
                  <div class="dhaulagiri-peak-tag">Tukuche Peak <span>6,920 m</span></div>
                  <div class="dhaulagiri-peak-tag">Sita Chuchura <span>6,611 m</span></div>
                  <div class="dhaulagiri-peak-tag">Nilgiri <span>7,061 m</span></div>
                  <div class="dhaulagiri-peak-tag">Annapurna I <span>8,091 m</span></div>
                </div>
                <p class="dhaulagiri-highlight-body">
                  The attraction is not limited to seeing the mountain from one viewpoint. The approach takes trekkers through different elevations and landscapes, allowing the character of the massif to change from dense forest to glaciated cirques as the journey progresses.
                </p>
              </div>

              <!-- 2. Stand at Dhaulagiri Base Camp -->
              <div class="dhaulagiri-highlight-card">
                <div class="dhaulagiri-highlight-top">
                  <div class="dhaulagiri-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                      <line x1="4" y1="22" x2="4" y2="15"></line>
                    </svg>
                  </div>
                  <h3 class="dhaulagiri-highlight-card-title">Stand at Dhaulagiri Base Camp at <span data-altitude-m="4750">4,750 m</span></h3>
                </div>
                <p class="dhaulagiri-highlight-body">
                  Dhaulagiri Base Camp, at approximately <span data-altitude-m="4750">4,740 to 4,750 metres</span>, is one of the central highlights of the circuit. Reaching the camp marks a major milestone after several days of trekking through the Myagdi Valley and progressing into higher mountain terrain. The destination is surrounded by an imposing landscape of rock, glacier-related features, snow, and towering Himalayan peaks. The high camp on the active Chhonbardan Glacier offers rare close perspectives on vertical rock faces, hanging seracs, and massive icefalls. The itinerary includes dedicated time for acclimatization and recovery here before the high-pass section, allowing the guide to monitor the group's condition and review the forthcoming route.
                </p>
              </div>

              <!-- 3. Cross French Pass -->
              <div class="dhaulagiri-highlight-card">
                <div class="dhaulagiri-highlight-top">
                  <div class="dhaulagiri-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                    </svg>
                  </div>
                  <h3 class="dhaulagiri-highlight-card-title">Cross French Pass, the apex of the circuit at <span data-altitude-m="5360">5,360 m</span></h3>
                </div>
                <p class="dhaulagiri-highlight-body">
                  French Pass is the highest point of the standard itinerary at approximately <span data-altitude-m="5360">5,360 metres (17,585 ft)</span> and one of its most physically demanding sections. The crossing begins from Dhaulagiri Base Camp and involves moving over glacier terrain, rocky moraine, and snowfields. Reaching the pass requires stamina, steady footwork, and favorable weather. From the prayer-flag-draped summit, a magnificent panorama opens across Dhaulagiri I, Tukuche Peak, Sita Chuchura, and into the stark expanse of Hidden Valley. The pass forms the crucial link between the glaciated base-camp area and the remote wilderness beyond.
                </p>
              </div>

              <!-- 4. Camp in Hidden Valley -->
              <div class="dhaulagiri-highlight-card">
                <div class="dhaulagiri-highlight-top">
                  <div class="dhaulagiri-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                  </div>
                  <h3 class="dhaulagiri-highlight-card-title">Camp in Hidden Valley, an isolated alpine basin at <span data-altitude-m="5200">5,200 m</span></h3>
                </div>
                <p class="dhaulagiri-highlight-body">
                  Hidden Valley is one of the most distinctive highlights of the circuit because of its remoteness, high altitude, and position between the two passes. Located around <span data-altitude-m="5200">5,000 to 5,200 metres</span>, the surroundings are stark, wind-carved, and completely uninhabited with zero permanent settlements or teahouses. Camping here under pristine Himalayan starlight provides an authentic expedition experience. The overnight stay requires careful preparation for sub-zero temperatures and wind exposure, offering an unforgettable encounter with true mountain isolation before continuing to Dhampus Pass.
                </p>
              </div>

              <!-- 5. Cross Dhampus Pass -->
              <div class="dhaulagiri-highlight-card">
                <div class="dhaulagiri-highlight-top">
                  <div class="dhaulagiri-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <h3 class="dhaulagiri-highlight-card-title">Cross Dhampus Pass and descend toward the Kali Gandaki</h3>
                </div>
                <p class="dhaulagiri-highlight-body">
                  Dhampus Pass (commonly reported around <span data-altitude-m="5250">5,200 to 5,250 metres</span>) completes the second high crossing and marks the transition from the remote expedition section toward the Kali Gandaki Valley. From the crest, the views open dramatically toward the Annapurna massif and Nilgiri peaks across the world's deepest gorge. The descent from Dhampus Pass involves a long drop of over 1,550 vertical metres toward Yak Kharka (<span data-altitude-m="3680">3,680 m</span>), requiring sensible pacing and trekking poles as the terrain shifts from snow and rock into alpine pastures.
                </p>
              </div>

              <!-- 6. Traditional Villages of Myagdi -->
              <div class="dhaulagiri-highlight-card">
                <div class="dhaulagiri-highlight-top">
                  <div class="dhaulagiri-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <h3 class="dhaulagiri-highlight-card-title">Walk through traditional Magar villages and terraced hills</h3>
                </div>
                <p class="dhaulagiri-highlight-body">
                  The lower approach through the Myagdi Valley—passing Babiyachaur, Dharapani, Muri, Boghara, and Dobang—offers a rich cultural and geographical contrast to the remote high camps. Walking through these areas provides an opportunity to observe traditional rural life, terraced crop fields, suspension bridges over roaring rivers, and authentic Magar hill architecture. The gradual progression allows your walking rhythm to build naturally while experiencing warm local hospitality before transitioning into full wilderness camping.
                </p>
              </div>

              <!-- 7. Marpha & Thakali Culture -->
              <div class="dhaulagiri-highlight-card">
                <div class="dhaulagiri-highlight-top">
                  <div class="dhaulagiri-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M3 21h18"></path>
                      <path d="M5 21V10l7-5 7 5v11"></path>
                      <path d="M9 21v-4a3 3 0 0 1 6 0v4"></path>
                      <line x1="12" y1="2" x2="12" y2="5"></line>
                    </svg>
                  </div>
                  <h3 class="dhaulagiri-highlight-card-title">Experience Marpha, Jomsom, and ancient Thakali culture</h3>
                </div>
                <p class="dhaulagiri-highlight-body">
                  Descending into the Kali Gandaki Valley introduces a completely different cultural landscape. Marpha is one of the most celebrated villages in the Annapurna and Mustang regions, famed for its clean stone-paved alleys, whitewashed buildings, Tibetan Buddhist chortens, and apple orchards. After several days of expedition camping in the high mountains, arriving in settled villages with hot meals, local bakeries, and Thakali hospitality is an immense physical and cultural reward before boarding the flight from Jomsom to Pokhara.
                </p>
              </div>

              <!-- 8. Supported Expedition Camping -->
              <div class="dhaulagiri-highlight-card">
                <div class="dhaulagiri-highlight-top">
                  <div class="dhaulagiri-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 class="dhaulagiri-highlight-card-title">Experience supported expedition camping with our Sherpa crew</h3>
                </div>
                <p class="dhaulagiri-highlight-body">
                  Expedition camping is a defining feature of the Dhaulagiri Circuit Trek. While the lower approach uses village accommodation, the upper route depends on organized camps because conventional lodges are not available in the high mountain sections. A dedicated support team—including licensed high-altitude Sherpa guides, cooks, kitchen staff, and porters—carries 4-season alpine tents, kitchen equipment, fresh food, and emergency supplies, ensuring hot meals and safe shelter throughout the wild crossing.
                </p>
              </div>

              <!-- 9. Diverse Eco-Zones -->
              <div class="dhaulagiri-highlight-card">
                <div class="dhaulagiri-highlight-top">
                  <div class="dhaulagiri-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 2L7 10h3l-4 7h12l-4-7h3z"></path>
                      <path d="M12 17v5"></path>
                    </svg>
                  </div>
                  <h3 class="dhaulagiri-highlight-card-title">Trek through diverse eco-zones from forests to alpine glaciers</h3>
                </div>
                <p class="dhaulagiri-highlight-body">
                  One of the most rewarding aspects of the Dhaulagiri Circuit is its dramatic ecological progression. The route starts in subtropical farmland and deep bamboo river gorges, climbs through temperate oak and blooming rhododendron forests, passes into alpine birch and juniper zones, and ultimately reaches the barren realm of lateral moraines, active glaciers, and high-altitude scree. You watch the living geography of the Himalayas transform with every 500 meters of elevation gained.
                </p>
              </div>

              <!-- 10. Complete the Journey Safely as a Team (Full-width) -->
              <div class="dhaulagiri-highlight-card" style="grid-column: 1 / -1;">
                <div class="dhaulagiri-highlight-top">
                  <div class="dhaulagiri-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h3 class="dhaulagiri-highlight-card-title">Complete a world-class wilderness circuit safely as a team</h3>
                </div>
                <p class="dhaulagiri-highlight-body">
                  The Dhaulagiri Circuit is an authentic, demanding Himalayan expedition where safety, preparation, and teamwork take priority over rigid schedules. Every trek is led by government-certified high-altitude Sherpa guides equipped with medical oxygen, pulse oximeters, portable altitude chambers (PAC bag), and satellite communications. With well-planned rest days at Italian Base Camp and Dhaulagiri Base Camp, continuous health monitoring, and a professional wilderness crew, our trekkers cross French Pass and Dhampus Pass with confidence, safety, and camaraderie.
                </p>
              </div>

            </div>

            <!-- Summary Box: Dhaulagiri Circuit Highlights at a Glance -->
            <div class="dhaulagiri-glance-box">
              <div class="dhaulagiri-glance-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--color-copper-orange);"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
                <h3>Dhaulagiri Circuit Highlights at a Glance</h3>
              </div>
              <div class="dhaulagiri-glance-grid">
                <div class="dhaulagiri-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <div><strong>Mount Dhaulagiri Massif (8,167 m):</strong> Complete encirclement of the world's 7th highest peak with panoramic views of Dhaulagiri I–V and Gurja Himal.</div>
                </div>
                <div class="dhaulagiri-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <div><strong>Dhaulagiri Base Camp (4,750 m):</strong> High-altitude expedition staging camp set directly on the active Chhonbardan Glacier.</div>
                </div>
                <div class="dhaulagiri-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <div><strong>French Pass Summit (5,360 m):</strong> Demanding alpine crossing between the glaciated Myagdi drainage and Hidden Valley.</div>
                </div>
                <div class="dhaulagiri-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <div><strong>Hidden Valley Wilderness (5,200 m):</strong> Remote, uninhabited high-altitude basin delivering pristine expedition camping.</div>
                </div>
                <div class="dhaulagiri-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <div><strong>Dhampus Pass (5,250 m):</strong> Second high pass with sweeping panoramas of Annapurna I, Nilgiri, and the Kali Gandaki Valley.</div>
                </div>
                <div class="dhaulagiri-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <div><strong>Traditional Magar Villages:</strong> Agrarian cultural approach through Babiyachaur, Dharapani, Muri, Boghara, and Dobang.</div>
                </div>
                <div class="dhaulagiri-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <div><strong>Marpha &amp; Thakali Heritage:</strong> Historic whitewashed stone village, apple orchards, and Samtenling Gompa in Lower Mustang.</div>
                </div>
                <div class="dhaulagiri-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <div><strong>Supported Wilderness Expedition:</strong> Full alpine camp operations with dedicated Sherpa guides, cooks, tents, and medical oxygen.</div>
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
