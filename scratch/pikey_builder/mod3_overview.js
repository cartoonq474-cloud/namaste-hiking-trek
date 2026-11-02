// Module 3: Section 1 - Overview, Key Trip Facts, Why Choose 9-Day, Highlights
function getOverviewSection() {
  return `
        <!-- Section 1: Overview -->
        <section id="section-overview" style="margin-bottom: 50px;">
          <div style="border-bottom: 2px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 24px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #ffedd5; color: #c2410c; border-radius: 8px; font-weight: 700;">01</span>
              <span class="pill pill-copper">Trip Overview &amp; Key Facts</span>
            </div>
            <h2 style="font-size: 1.85rem; font-weight: 800; color: #0f172a; margin: 0;">Pikey Peak Trek Overview</h2>
          </div>

          <!-- Lead Paragraphs -->
          <div style="font-size: 1.05rem; line-height: 1.7; color: #334155; margin-bottom: 24px;">
            <p style="margin-bottom: 16px;">
              The <strong>Pikey Peak Trek</strong> is a scenic Himalayan adventure in the lower Everest region of Nepal, offering panoramic mountain views, traditional Sherpa villages, Buddhist heritage, and peaceful walking trails away from the busy routes in the Khumbu. Reaching an elevation of approximately <strong>4,065 meters (13,337 feet)</strong> at Pikey Peak, this trek provides an exceptional opportunity to enjoy views of Mount Everest and the surrounding Himalayan range without undertaking the longer Everest Base Camp journey or facing the unpredictability of Lukla flights.
            </p>
            <p style="margin-bottom: 16px;">
              This comprehensive nine-calendar-day itinerary includes arrival in Kathmandu, an overland road approach to <strong>Dhap Bazaar (2,850 m)</strong>, five scheduled walking days through Jhapre, Pikey Peak Base Camp, Jasmane Bhanjyang, and Junbesi to Phaplu, the road return, and final departure. Phaplu serves as the standard vehicle pickup point, while Salleri remains a separately agreed variation. No domestic flights are required on the standard route, making the itinerary remarkably dependable and cost-effective.
            </p>
            <p style="margin-bottom: 16px;">
              <strong>Pikey Peak (4,065 m)</strong> is the conditional Day 5 daytime viewpoint reached via an early-morning summit climb. The highest scheduled sleep is at Pikey Peak Base Camp around <strong>3,640 meters</strong> on Day 4, followed by a lower overnight at Jasmane Bhanjyang around 3,550 meters after the summit outing. The trail descends through the tranquil Sherpa heartland of Junbesi (2,700 m) with an optional cultural excursion to the renowned Thupten Chholing Monastery.
            </p>
          </div>

          <!-- Package at a Glance Table -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 30px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
            <div style="background: #f8fafc; padding: 14px 20px; border-bottom: 1px solid #e2e8f0;">
              <h3 style="font-size: 1.1rem; font-weight: 700; color: #0f172a; margin: 0;">Package at a Glance</h3>
            </div>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
                <thead>
                  <tr style="background: #f1f5f9; text-align: left; color: #475569;">
                    <th style="padding: 12px 20px; font-weight: 600; width: 35%;">Trek Feature</th>
                    <th style="padding: 12px 20px; font-weight: 600;">Package Details</th>
                  </tr>
                </thead>
                <tbody style="color: #334155;">
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 600;">Trek Duration</td>
                    <td style="padding: 12px 20px;">9 days (5 walking days, 2 scenic overland drive days, 2 Kathmandu days)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 20px; font-weight: 600;">Trek Region</td>
                    <td style="padding: 12px 20px;">Solukhumbu / Lower Everest Region, Nepal</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 600;">Starting &amp; Ending Point</td>
                    <td style="padding: 12px 20px;">Kathmandu, Nepal (TIA Airport transfers included)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 20px; font-weight: 600;">Trek Starting Point (Trailhead)</td>
                    <td style="padding: 12px 20px;">Dhap Bazaar (approx. 2,850 m / 9,350 ft) via scenic overland road</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 600;">Trek Ending Point (Exit Hub)</td>
                    <td style="padding: 12px 20px;">Phaplu (approx. 2,469 m / 8,100 ft); Salleri is an alternative variation</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 20px; font-weight: 600;">Accommodation</td>
                    <td style="padding: 12px 20px;">2 nights Kathmandu hotel (Thamel) &amp; 6 nights authentic mountain teahouses/lodges</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 600;">Highest Point of the Standard Route</td>
                    <td style="padding: 12px 20px;"><strong>Pikey Peak Summit (approx. 4,065 m / 13,337 ft)</strong></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 20px; font-weight: 600;">Highest Scheduled Overnight</td>
                    <td style="padding: 12px 20px;">Pikey Peak Base Camp (approx. 3,640 m / 11,942 ft)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 600;">Cultural Excursion</td>
                    <td style="padding: 12px 20px;">Thupten Chholing Monastery near Junbesi &amp; Jhapre Gompa</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 20px; font-weight: 600;">Main Cultural Group</td>
                    <td style="padding: 12px 20px;">Sherpa communities of Solukhumbu</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 20px; font-weight: 600;">Transportation</td>
                    <td style="padding: 12px 20px;">Comfortable private 4WD Scorpio Jeep / overland vehicle (Kathmandu &ndash; Dhap / Phaplu &ndash; Kathmandu)</td>
                  </tr>
                  <tr style="background: #fafafa;">
                    <td style="padding: 12px 20px; font-weight: 600;">Recommended Seasons</td>
                    <td style="padding: 12px 20px;">Spring (March to May) &amp; Autumn (September to November)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Why Choose a 9-Day Format -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 14px;">Why Choose a Nine-Day Pikey Peak Trek?</h3>
            <p style="font-size: 0.95rem; color: #475569; line-height: 1.6; margin-bottom: 16px;">
              The nine-day timeframe strikes an optimal balance between scenic exploration, gradual altitude acclimatization, and practical travel logistics. The main benefits include:
            </p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
              <div style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block; margin-bottom: 6px;">Manageable Walking Days</strong>
                <p style="margin: 0; font-size: 0.9rem; color: #64748b; line-height: 1.5;">Daily walking stages average 4 to 6 hours, allowing hikers to maintain a steady, enjoyable pace without exhausting physical pressure.</p>
              </div>
              <div style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block; margin-bottom: 6px;">Gentle Acclimatization Curve</strong>
                <p style="margin: 0; font-size: 0.9rem; color: #64748b; line-height: 1.5;">With only two nights above 3,500 meters and immediate descent to 2,700 m after the summit, the risk of serious altitude sickness is significantly reduced.</p>
              </div>
              <div style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block; margin-bottom: 6px;">Zero Flight Cancellations</strong>
                <p style="margin: 0; font-size: 0.9rem; color: #64748b; line-height: 1.5;">By utilizing overland Jeep transport along the BP Highway, your holiday avoids the frequent weather delays and baggage stress of Lukla flights.</p>
              </div>
              <div style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <strong style="color: #0f172a; display: block; margin-bottom: 6px;">Deep Cultural Immersion</strong>
                <p style="margin: 0; font-size: 0.9rem; color: #64748b; line-height: 1.5;">Spend quality time in centuries-old Sherpa settlements like Junbesi and visit Thupten Chholing Monastery, enjoying warm authentic hospitality.</p>
              </div>
            </div>
          </div>

          <!-- Pikey Peak Trek Highlights -->
          <div style="margin-bottom: 30px;">
            <h3 style="font-size: 1.35rem; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Pikey Peak Trek Highlights</h3>
            
            <div style="display: grid; grid-template-columns: 1fr; gap: 14px; font-size: 0.95rem; color: #334155; line-height: 1.6;">
              <div style="display: flex; gap: 12px; align-items: flex-start; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #c2410c; font-size: 1.2rem; line-height: 1;">✦</span>
                <div>
                  <strong style="color: #0f172a;">Legendary 360-Degree Sunrise Viewpoint (4,065 m):</strong>
                  Sir Edmund Hillary famously declared the panorama from Pikey Peak to be the finest view in Nepal. In clear weather, you gaze upon a sweep of 6 eight-thousanders: Mount Everest (8,848 m), Kanchenjunga (8,586 m), Lhotse (8,516 m), Makalu (8,485 m), Cho Oyu (8,188 m), and Shishapangma (8,027 m), alongside Thamserku, Mera Peak, and Numbur Himal.
                </div>
              </div>

              <div style="display: flex; gap: 12px; align-items: flex-start; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #c2410c; font-size: 1.2rem; line-height: 1;">✦</span>
                <div>
                  <strong style="color: #0f172a;">Jhapre Ridge &amp; Ancient Stupas:</strong>
                  The charming settlement of Jhapre offers quiet mountain lodges, ancient painted chortens, mani walls carved with Tibetan script, and local apple orchards framing dramatic views of northern snow peaks.
                </div>
              </div>

              <div style="display: flex; gap: 12px; align-items: flex-start; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #c2410c; font-size: 1.2rem; line-height: 1;">✦</span>
                <div>
                  <strong style="color: #0f172a;">Old-Growth Forests &amp; Blooming Rhododendrons:</strong>
                  Traverse diverse botanical zones ranging from subtropical mid-hill terraced valleys to dense moss-draped hemlock, oak, fir, and bamboo groves, illuminated by vibrant crimson and pink rhododendron blossoms in spring.
                </div>
              </div>

              <div style="display: flex; gap: 12px; align-items: flex-start; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #c2410c; font-size: 1.2rem; line-height: 1;">✦</span>
                <div>
                  <strong style="color: #0f172a;">Pikey Base Camp Alpine Meadows:</strong>
                  Rest beneath open alpine pastures where yaks graze during summer months, enjoying panoramic ridge sunsets and an enchanting star-filled Himalayan night sky before the early morning summit ascent.
                </div>
              </div>

              <div style="display: flex; gap: 12px; align-items: flex-start; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #c2410c; font-size: 1.2rem; line-height: 1;">✦</span>
                <div>
                  <strong style="color: #0f172a;">Traditional Sherpa Heritage in Junbesi:</strong>
                  Junbesi is regarded as the cultural heart of the Solu valley. Walk among traditional stone-masonry Sherpa houses, prayer wheels spun by mountain streams, and school projects established by the Himalayan Trust.
                </div>
              </div>

              <div style="display: flex; gap: 12px; align-items: flex-start; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
                <span style="color: #c2410c; font-size: 1.2rem; line-height: 1;">✦</span>
                <div>
                  <strong style="color: #0f172a;">Sacred Thupten Chholing Monastery Excursion:</strong>
                  An enriching side excursion leads to Thupten Chholing, one of Nepal's most revered Tibetan Buddhist monasteries, founded in 1968 by Kyabje Trulshik Rinpoche, housing hundreds of resident monks and nuns.
                </div>
              </div>
            </div>
          </div>

          <!-- Highlights at a Glance Table -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 30px;">
            <div style="background: #f8fafc; padding: 14px 20px; border-bottom: 1px solid #e2e8f0;">
              <h3 style="font-size: 1.1rem; font-weight: 700; color: #0f172a; margin: 0;">Pikey Peak Trek Highlights at a Glance</h3>
            </div>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
                <thead>
                  <tr style="background: #f1f5f9; text-align: left; color: #475569;">
                    <th style="padding: 10px 18px; font-weight: 600;">Highlight Area</th>
                    <th style="padding: 10px 18px; font-weight: 600;">Main Attractions &amp; Experiences</th>
                  </tr>
                </thead>
                <tbody style="color: #334155;">
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 18px; font-weight: 600;">Pikey Peak Summit (4,065 m)</td>
                    <td style="padding: 10px 18px;">Pre-dawn sunrise ascent; 360-degree vista of Everest, Kanchenjunga, Makalu, and Lhotse</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 10px 18px; font-weight: 600;">Jhapre Ridge</td>
                    <td style="padding: 10px 18px;">Buddhist gompa, chortens, mani walls, local orchards, and early northern mountain views</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 18px; font-weight: 600;">Forests &amp; Natural Scenery</td>
                    <td style="padding: 10px 18px;">Rhododendron blooms (spring), hemlock and pine woodlands, birdwatching, and alpine ridgelines</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 10px 18px; font-weight: 600;">Base Camp &amp; Jasmane Bhanjyang</td>
                    <td style="padding: 10px 18px;">High alpine meadows, yak pastures, peaceful mountain lodges, and post-summit ridge descent</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 18px; font-weight: 600;">Junbesi Village</td>
                    <td style="padding: 10px 18px;">Traditional Sherpa stone architecture, hospitality, river valley setting, and cultural landmarks</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 10px 18px; font-weight: 600;">Thupten Chholing Monastery</td>
                    <td style="padding: 10px 18px;">Spiritual pilgrimage center, prayer ceremonies, traditional butter lamps, and monastic culture</td>
                  </tr>
                  <tr style="background: #ffffff;">
                    <td style="padding: 10px 18px; font-weight: 600;">Overland Road Journey</td>
                    <td style="padding: 10px 18px;">Scenic rural Nepalese highway via Sun Koshi river, zero flight anxiety, and reliable schedules</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Why Book With Namaste Hiking Trek -->
          <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 12px; padding: 24px;">
            <h3 style="font-size: 1.2rem; font-weight: 700; color: #9a3412; margin-top: 0; margin-bottom: 12px;">Why Book the Pikey Peak Trek with Namaste Hiking Trek?</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; font-size: 0.9rem; color: #7c2d12;">
              <div>✔ <strong>Local Sherpa Expertise:</strong> Native licensed guides with deep cultural ties to the Solukhumbu region.</div>
              <div>✔ <strong>Comprehensive Safety:</strong> Daily pulse oximeter saturation checks and wilderness first-aid kits on all departures.</div>
              <div>✔ <strong>Reliable Private 4WD:</strong> Comfortable Scorpio Jeeps for overland transit, ensuring safety and comfort.</div>
              <div>✔ <strong>Fair Porter Ethics:</strong> 100% compliance with IPPG guidelines, fair wages, warm gear, and full medical insurance.</div>
            </div>
          </div>
        </section>
`;
}

module.exports = { getOverviewSection };

