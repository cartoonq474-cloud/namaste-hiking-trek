// Module 3 Full: Section 1 - Trek Overview (Canonical Architecture with Highlights Grid & Specifications Table)
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
            The <strong>Pikey Peak Trek</strong> is a scenic Himalayan trekking adventure in the lower Everest region of Nepal, offering panoramic mountain views, traditional Sherpa villages, Buddhist heritage, and peaceful walking trails away from the busier commercial routes in the upper Khumbu. Reaching an elevation of approximately <span data-altitude-m="4065">4,065 meters (13,336 ft)</span> at Pikey Peak, this trek provides an exceptional opportunity to enjoy views of Mount Everest and the surrounding Himalayan giants without undertaking the longer, physically demanding Everest Base Camp expedition.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 16px;">
            This nine-calendar-day itinerary includes arrival in Kathmandu, a road approach to Dhap Bazaar, five scheduled walking days through Jhapre, Pikey Peak Base Camp, Jasmane Bhanjyang, and Junbesi to Phaplu, followed by an overland road return and final departure. Phaplu is the default pickup in the detailed plan; Salleri is a separately agreed variation. No domestic flight to Lukla is included in the standard route, making the journey 100% immune to mountain flight cancelations.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 28px;">
            One of the primary attractions is the early-morning ascent to Pikey Peak for sunrise. When weather permits, the elevated summit offers an awe-inspiring Himalayan panorama—famously celebrated by Sir Edmund Hillary as his personal favorite viewpoint in Nepal. The experience is complemented by rhododendron forests, open grazing land (kharkas), rolling ridges, ancient stone trails, prayer flags, monasteries, and authentic mountain settlements where traditional Sherpa life remains an organic part of the landscape.
          </p>

          <!-- Key Trip Facts / Specifications Table -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 36px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <div style="background: #f8fafc; padding: 16px 20px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
              <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--color-primary-navy); margin: 0;">Pikey Peak Trek at a Glance</h3>
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--color-copper-orange); background: #fff7ed; padding: 3px 10px; border-radius: 12px;">Trip Specifications</span>
            </div>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.92rem;">
                <tbody>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); width: 220px; background: #fafafa;">Trek Name</td>
                    <td style="padding: 12px 20px; color: #334155;">Pikey Peak Trek (Lower Everest Scenic &amp; Cultural Circuit)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Total Duration</td>
                    <td style="padding: 12px 20px; color: #334155;">9 Calendar Days (Kathmandu to Kathmandu overland)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Destination Region</td>
                    <td style="padding: 12px 20px; color: #334155;">Lower Everest Region, Solukhumbu District, Nepal</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Starting &amp; Ending Points</td>
                    <td style="padding: 12px 20px; color: #334155;">Kathmandu (Start) &rarr; Dhap Bazaar (Trailhead) &bull; Phaplu (Exit) &rarr; Kathmandu</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Main Trekking Route</td>
                    <td style="padding: 12px 20px; color: #334155;">Dhap &rarr; Jhapre &rarr; Pikey Base Camp &rarr; Pikey Peak Summit &rarr; Jasmane Bhanjyang &rarr; Junbesi &rarr; Phaplu</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Highest Elevation</td>
                    <td style="padding: 12px 20px; color: #c2410c; font-weight: 700;">4,065 m (13,336 ft) at Pikey Peak Summit</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Highest Sleeping Elevation</td>
                    <td style="padding: 12px 20px; color: #334155;">3,640 m (11,942 ft) at Pikey Peak Base Camp (Day 4)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Trekking Style &amp; Lodging</td>
                    <td style="padding: 12px 20px; color: #334155;">Teahouse &amp; lodge-based trekking; comfortable hotel in Kathmandu</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Difficulty Rating</td>
                    <td style="padding: 12px 20px; color: #008060; font-weight: 700;">Moderate (No technical climbing required under normal conditions)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Main Attractions</td>
                    <td style="padding: 12px 20px; color: #334155;">360&deg; Sunrise view of Everest, Makalu, Kanchenjunga; Thupten Chholing Monastery; Junbesi Sherpa culture</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Transportation</td>
                    <td style="padding: 12px 20px; color: #334155;">Private 4WD Mahindra Scorpio Overland transfers via Japanese-built BP Highway</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Best Seasons</td>
                    <td style="padding: 12px 20px; color: #334155;">Autumn (Oct–Nov: Crystal-clear skies) &amp; Spring (Mar–May: Rhododendron blossoms)</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 20px; font-weight: 700; color: var(--color-primary-navy); background: #fafafa;">Route Customization</td>
                    <td style="padding: 12px 20px; color: #334155;">Highly customizable (Optional Thupten Chholing Monastery or Dudhkunda Lake extension)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Section 1.2: What Makes the Pikey Peak Trek Special (Feature Grid) -->
          <div style="margin-bottom: 36px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px;">
              <span class="pill pill-copper" style="font-size: 0.75rem; text-transform: uppercase; font-weight: 800;">Distinctive Character</span>
              <h3 style="font-size: 1.45rem; font-weight: 800; color: var(--color-primary-navy); margin: 0;">What Makes the Pikey Peak Trek Special?</h3>
            </div>
            <p style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.7; margin-bottom: 20px;">
              The appeal of the Pikey Peak Trek comes from its rich combination of Himalayan panoramas, tranquil trails, living Sherpa heritage, and a dependable road-accessible route. Rather than focusing on a single crowded destination, travelers experience genuine variety across consecutive walking days.
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px;">
              <!-- Feature 1 -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
                <div style="width: 42px; height: 42px; border-radius: 10px; background: #fff7ed; color: var(--color-copper-orange); display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                </div>
                <h4 style="font-size: 1.12rem; font-weight: 700; color: var(--color-primary-navy); margin: 0 0 8px 0;">Sunrise Views from Pikey Peak</h4>
                <p style="font-size: 0.94rem; color: #475569; line-height: 1.65; margin: 0;">
                  At 4,065 meters, Pikey Peak provides an elevated viewpoint over the surrounding Himalayan landscape. On a clear morning, you can see Mount Everest, Kanchenjunga, Makalu, and Lhotse across the distant horizon, illuminated in golden alpine glow.
                </p>
              </div>

              <!-- Feature 2 -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
                <div style="width: 42px; height: 42px; border-radius: 10px; background: #e6f7f0; color: #008060; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                </div>
                <h4 style="font-size: 1.12rem; font-weight: 700; color: var(--color-primary-navy); margin: 0 0 8px 0;">A Different Perspective on Everest</h4>
                <p style="font-size: 0.94rem; color: #475569; line-height: 1.65; margin: 0;">
                  This trek explores the lower Everest region rather than following the busy Base Camp highway. It offers a broader, full-range perspective of the mountain wall from south of the main crest, without requiring weeks of high-altitude travel.
                </p>
              </div>

              <!-- Feature 3 -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
                <div style="width: 42px; height: 42px; border-radius: 10px; background: #eff6ff; color: #2563eb; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                </div>
                <h4 style="font-size: 1.12rem; font-weight: 700; color: var(--color-primary-navy); margin: 0 0 8px 0;">Traditional Sherpa Settlements</h4>
                <p style="font-size: 0.94rem; color: #475569; line-height: 1.65; margin: 0;">
                  Villages such as Jhapre and Junbesi introduce travelers to authentic Sherpa architecture, apple orchards, painted stupas, mani walls, and active monasteries reflecting living Tibetan Buddhist culture.
                </p>
              </div>

              <!-- Feature 4 -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
                <div style="width: 42px; height: 42px; border-radius: 10px; background: #fdf4ff; color: #a855f7; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                </div>
                <h4 style="font-size: 1.12rem; font-weight: 700; color: var(--color-primary-navy); margin: 0 0 8px 0;">100% Road-Based Approach</h4>
                <p style="font-size: 0.94rem; color: #475569; line-height: 1.65; margin: 0;">
                  Approaching the region by road via the BP Highway and returning from Phaplu completely avoids Lukla flight cancellations. Your holiday starts on time and returns on schedule without weather delays.
                </p>
              </div>
            </div>
          </div>

          <!-- Section 1.3: Deep Dive - Pikey Peak Trek Highlights (with Real Photography) -->
          <div style="margin-bottom: 40px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px;">
              <span class="pill pill-copper" style="font-size: 0.75rem; text-transform: uppercase; font-weight: 800;">Experience Gallery</span>
              <h3 style="font-size: 1.45rem; font-weight: 800; color: var(--color-primary-navy); margin: 0;">Pikey Peak Trek Key Highlights</h3>
            </div>
            <p style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.7; margin-bottom: 24px;">
              A day-by-day exploration of the landmarks, natural phenomena, and cultural heritage that make Pikey Peak an unforgettable adventure:
            </p>

            <div style="display: flex; flex-direction: column; gap: 20px;">
              
              <!-- Highlight Card 1: Summit Sunrise -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                  <div style="height: 100%; min-height: 240px; max-height: 320px; overflow: hidden;">
                    <img loading="lazy" src="../../images/treks/pikey-peak/pikey-peak-himalayan-sunrise-01.jpg" alt="Pikey Peak Himalayan Sunrise" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div style="padding: 24px;">
                    <span style="font-size: 0.72rem; font-weight: 800; color: var(--color-copper-orange); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">SUMMIT CLIMAX &bull; 4,065 M</span>
                    <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy); margin: 0 0 10px 0;">Sunrise Panorama from Pikey Peak</h4>
                    <p style="font-size: 0.94rem; color: #475569; line-height: 1.65; margin-bottom: 12px;">
                      Reaching the summit cairn before dawn unveils a breathtaking 360-degree spectacle. When morning skies are clear, the golden sunrise illuminates Mount Everest, Kanchenjunga, Makalu, Lhotse, Cho Oyu, and Manaslu, alongside the striking profile of Numbur Himal.
                    </p>
                    <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <li>Unobstructed view across 300+ km of the Himalayan crest</li>
                      <li>Vibrant prayer flags framing pristine mountain peaks</li>
                      <li>Sea-of-clouds inversions blanket the lower river valleys</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Highlight Card 2: Jhapre Village & Stupa -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                  <div style="height: 100%; min-height: 240px; max-height: 320px; overflow: hidden;">
                    <img loading="lazy" src="../../images/treks/pikey-peak/pikey-peak-jhapre-stupa-village-03.jpg" alt="Jhapre Stupa and Village" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div style="padding: 24px;">
                    <span style="font-size: 0.72rem; font-weight: 800; color: #008060; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">CULTURAL HERITAGE &bull; 2,820 M</span>
                    <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy); margin: 0 0 10px 0;">Traditional Sherpa Village of Jhapre</h4>
                    <p style="font-size: 0.94rem; color: #475569; line-height: 1.65; margin-bottom: 12px;">
                      Perched on a scenic ridge overlooking terraced fields and valleys, Jhapre introduces trekkers to traditional mountain life. The village features an ancient Buddhist stupa, small prayer wheels, and cozy lodges with wood-fired stoves.
                    </p>
                    <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <li>Striking whitewashed stupa framed against mountain ridgelines</li>
                      <li>First expansive vistas of Numbur Himal on the walking route</li>
                      <li>Warm hospitality in family-operated mountain teahouses</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Highlight Card 3: Thupten Chholing Monastery & Junbesi -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                  <div style="height: 100%; min-height: 240px; max-height: 320px; overflow: hidden;">
                    <img loading="lazy" src="../../images/treks/pikey-peak/pikey-peak-thupten-chholing-monastery-02.jpg" alt="Thupten Chholing Monastery" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div style="padding: 24px;">
                    <span style="font-size: 0.72rem; font-weight: 800; color: #2563eb; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">SACRED BUDDHISM &bull; 2,700 M</span>
                    <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy); margin: 0 0 10px 0;">Junbesi Village &amp; Thupten Chholing Monastery</h4>
                    <p style="font-size: 0.94rem; color: #475569; line-height: 1.65; margin-bottom: 12px;">
                      Junbesi is the cultural jewel of the Solu region, famed for its stone masonry and apple orchards. An optional 2.5-hour side trip takes you to Thupten Chholing Monastery, founded in the 1960s by Trulshik Rinpoche and home to over 300 practicing monks and nuns.
                    </p>
                    <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <li>Atmospheric puja chanting and traditional butter-lamp ceremonies</li>
                      <li>Historic chortens and clockwise mani stone walks</li>
                      <li>Himalayan Trust school founded by Sir Edmund Hillary</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Highlight Card 4: Alpine Ridges & Forest Ecosystems -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                  <div style="height: 100%; min-height: 240px; max-height: 320px; overflow: hidden;">
                    <img loading="lazy" src="../../images/treks/pikey-peak/pikey-peak-ridge-trail-view-05.jpg" alt="Alpine ridge trail view" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div style="padding: 24px;">
                    <span style="font-size: 0.72rem; font-weight: 800; color: #a855f7; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">NATURE &amp; ECOLOGY</span>
                    <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy); margin: 0 0 10px 0;">Forests, Ridgelines &amp; Alpine Landscapes</h4>
                    <p style="font-size: 0.94rem; color: #475569; line-height: 1.65; margin-bottom: 12px;">
                      The route traverses diverse ecological zones—from temperate pine and moss-draped oak woodlands to subalpine rhododendron forests and high yak pastures (kharkas). In spring, entire hillsides bloom in vivid crimson and pink.
                    </p>
                    <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      <li>Vibrant spring rhododendrons and wild mountain orchids</li>
                      <li>Sweeping high ridgeline paths with views on both flanks</li>
                      <li>Peaceful yak pastures beneath high Himalayan peaks</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- Section 1.4: Who is the Pikey Peak Trek Suitable For? (7 Profiles) -->
          <div style="margin-bottom: 36px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px;">
              <span class="pill pill-copper" style="font-size: 0.75rem; text-transform: uppercase; font-weight: 800;">Trekker Suitability</span>
              <h3 style="font-size: 1.45rem; font-weight: 800; color: var(--color-primary-navy); margin: 0;">Who is the Pikey Peak Trek Suitable For?</h3>
            </div>
            <p style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.7; margin-bottom: 20px;">
              The moderate physical grading, road access, and 9-day format make this journey appealing to a diverse range of international travelers:
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px;">
                <strong style="color: var(--color-primary-navy); font-size: 1.02rem; display: block; margin-bottom: 6px;">1. First-Time Himalayan Trekkers</strong>
                <p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">An approachable introduction to multi-day lodge trekking with manageable 4–6 hour walking days and a maximum sleep at 3,640 m.</p>
              </div>
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px;">
                <strong style="color: var(--color-primary-navy); font-size: 1.02rem; display: block; margin-bottom: 6px;">2. Hikers Seeking a Shorter Route</strong>
                <p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Delivers majestic 8,000 m Everest views in just 9 calendar days without requiring the two-week commitment of the classic EBC trail.</p>
              </div>
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px;">
                <strong style="color: var(--color-primary-navy); font-size: 1.02rem; display: block; margin-bottom: 6px;">3. Couples &amp; Private Groups</strong>
                <p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">A personalized mountain holiday with quiet teahouses, private 4WD transfers, and customized walking paces for friends and families.</p>
              </div>
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px;">
                <strong style="color: var(--color-primary-navy); font-size: 1.02rem; display: block; margin-bottom: 6px;">4. Solo Travelers</strong>
                <p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Safe, guided travel with dedicated Sherpa guides and welcoming lodge hosts along well-established community paths.</p>
              </div>
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px;">
                <strong style="color: var(--color-primary-navy); font-size: 1.02rem; display: block; margin-bottom: 6px;">5. Photographers &amp; Nature Lovers</strong>
                <p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Spectacular golden-hour ridgeline photography, mountain panoramas, prayer flags, dense rhododendron forests, and rural Sherpa life.</p>
              </div>
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px;">
                <strong style="color: var(--color-primary-navy); font-size: 1.02rem; display: block; margin-bottom: 6px;">6. Cultural Explorers</strong>
                <p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Direct immersion into living Buddhist traditions at Jhapre, Junbesi, and the revered Thupten Chholing Monastery.</p>
              </div>
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px;">
                <strong style="color: var(--color-primary-navy); font-size: 1.02rem; display: block; margin-bottom: 6px;">7. Travelers Preferring Road Access</strong>
                <p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Appealing to anyone wishing to avoid the uncertainty, anxiety, and weather disruptions of mountain flights into Lukla.</p>
              </div>
            </div>
          </div>

          <!-- Section 1.5: Why Book With Namaste Hiking Trek? (Trust Pillars) -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
              <span class="pill pill-copper" style="font-size: 0.75rem; text-transform: uppercase; font-weight: 800;">Agency Assurance</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--color-primary-navy); margin: 0;">Why Book the Pikey Peak Trek with Namaste Hiking Trek?</h3>
            </div>
            <p style="color: #475569; font-size: 0.98rem; line-height: 1.7; margin-bottom: 22px;">
              With over 15,000 travelers guided across Nepal's mountains, Namaste Hiking Trek combines rigorous safety standards with authentic local Sherpa heritage:
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px;">
              <div style="display: flex; gap: 12px;">
                <div style="width: 28px; height: 28px; border-radius: 50%; background: #e6f7f0; color: #008060; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <strong style="color: var(--color-primary-navy); font-size: 0.95rem; display: block; margin-bottom: 4px;">Local Sherpa Leadership</strong>
                  <span style="font-size: 0.88rem; color: #64748b; line-height: 1.6; display: block;">Government-licensed, English-fluent guides born and raised in the Solukhumbu region with intimate knowledge of mountain trails and culture.</span>
                </div>
              </div>

              <div style="display: flex; gap: 12px;">
                <div style="width: 28px; height: 28px; border-radius: 50%; background: #e6f7f0; color: #008060; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <strong style="color: var(--color-primary-navy); font-size: 0.95rem; display: block; margin-bottom: 4px;">Certified Safety Protocols</strong>
                  <span style="font-size: 0.88rem; color: #64748b; line-height: 1.6; display: block;">Twice-daily pulse oximetry monitoring, comprehensive wilderness medical trauma kits, and 24/7 Kathmandu operations room support.</span>
                </div>
              </div>

              <div style="display: flex; gap: 12px;">
                <div style="width: 28px; height: 28px; border-radius: 50%; background: #e6f7f0; color: #008060; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <strong style="color: var(--color-primary-navy); font-size: 0.95rem; display: block; margin-bottom: 4px;">Ethical Porter Welfare</strong>
                  <span style="font-size: 0.88rem; color: #64748b; line-height: 1.6; display: block;">Strict adherence to IPPG guidelines: fair living wages, 10–12 kg load limits per client, warm mountain clothing, and complete emergency insurance.</span>
                </div>
              </div>

              <div style="display: flex; gap: 12px;">
                <div style="width: 28px; height: 28px; border-radius: 50%; background: #e6f7f0; color: #008060; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <strong style="color: var(--color-primary-navy); font-size: 0.95rem; display: block; margin-bottom: 4px;">Transparent Tiered Pricing</strong>
                  <span style="font-size: 0.88rem; color: #64748b; line-height: 1.6; display: block;">Guaranteed departures, all permits included, private 4WD transportation, and zero hidden checkout markups or agent commissions.</span>
                </div>
              </div>
            </div>
          </div>

        </section>
`;
}

module.exports = { getOverviewSection };
