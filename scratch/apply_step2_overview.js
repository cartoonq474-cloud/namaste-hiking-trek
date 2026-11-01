const fs = require('fs');

const overviewHtml = `<!-- Section 1: Overview -->
          <section id="section-overview" class="trek-detail-section">
            <h2 class="trek-section-title">Trek Overview: The Ultimate Khumbu High-Altitude Circuit</h2>
            
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The <strong>Everest Three High Passes Trek</strong> is a complete high-altitude trekking circuit through the Khumbu region, combining the three major mountain pass crossings of <strong>Renjo La</strong> (<span data-altitude-m="5360">5,360m</span>), <strong>Cho La</strong> (<span data-altitude-m="5420">5,420m</span>), and <strong>Kongma La</strong> (<span data-altitude-m="5535">5,535m</span>) with the landscapes and destinations that make the Everest region one of Nepal's most sought-after trekking areas. The route links the Gokyo Valley, Thame Valley, Khumbu Valley, and Imja Valley, creating a significantly more extensive Himalayan journey than a conventional Everest Base Camp itinerary.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
              This trek is designed for travelers who want more than a single destination. Instead of following the standard Everest Base Camp trail and returning along a similar route, the Three High Passes itinerary crosses high mountain terrain between different valleys and combines remote trail sections with major Everest-region highlights including Everest Base Camp (<span data-altitude-m="5364">5,364m</span>), Kala Patthar (<span data-altitude-m="5545">5,545m</span>), Gokyo Lakes, and Gokyo Ri (<span data-altitude-m="5357">5,357m</span>).
            </p>

            <!-- Subsections Grid -->
            <div style="display: grid; grid-template-columns: 1fr; gap: 20px; margin: 28px 0;">
              
              <!-- Sub 1 -->
              <div style="background: #f8fafc; border-left: 4px solid #008060; border-radius: 0 10px 10px 0; padding: 20px 24px; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
                <h3 style="font-size: 1.15rem; color: var(--color-primary-navy); margin-bottom: 8px; font-weight: 700;">What is the Three High Passes circuit?</h3>
                <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                  The circuit connects different Khumbu valleys through three named passes above 5,300 m. It combines long ascents and descents with Sherpa settlements, Buddhist heritage, glacial landscapes, and two major viewpoint hikes. The detailed 21-day itinerary below is the package route used throughout this page.
                </p>
                <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin-top: 10px; margin-bottom: 0;">
                  The experience is therefore significantly different from a normal teahouse trek at moderate altitude. The Three High Passes Trek requires preparation for long walking days, substantial elevation gain and loss, high-altitude exposure, cold temperatures, and changing trail conditions. Some sections can involve snow, ice, rocky terrain, and glacial landscapes, particularly around the high passes. For travelers looking for a challenging Everest-region itinerary with multiple valleys, high passes, Gokyo, and the Everest Base Camp area included in one journey, the Three High Passes route provides a comprehensive trekking framework.
                </p>
              </div>

              <!-- Sub 2 -->
              <div style="background: #f8fafc; border-left: 4px solid #008060; border-radius: 0 10px 10px 0; padding: 20px 24px; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
                <h3 style="font-size: 1.15rem; color: var(--color-primary-navy); margin-bottom: 8px; font-weight: 700;">How is it different from the classic Everest Base Camp trek?</h3>
                <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                  The Three High Passes Trek is built around variety. A conventional Everest Base Camp trek focuses primarily on reaching the Everest Base Camp area and returning through the Khumbu Valley. The Three Passes route adds a much broader circuit.
                </p>
                <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin-top: 10px; margin-bottom: 0;">
                  This plan adds Kongma La, Cho La, Renjo La, and the Gokyo/Thame-side circuit to the Everest Base Camp visit. It involves more high-altitude stages and more complex route decisions than a straightforward return along the main EBC corridor.
                </p>
              </div>

              <!-- Sub 3 -->
              <div style="background: #f8fafc; border-left: 4px solid #008060; border-radius: 0 10px 10px 0; padding: 20px 24px; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
                <h3 style="font-size: 1.15rem; color: var(--color-primary-navy); margin-bottom: 8px; font-weight: 700;">Which direction does this itinerary follow?</h3>
                <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px 16px; margin: 10px 0; font-family: monospace; font-size: 0.92rem; color: #0f172a; line-height: 1.6;">
                  Kathmandu → Lukla → Phakding → Namche → Tengboche → Dingboche → Chhukung → <strong>Kongma La (5,535m)</strong> → Lobuche → Gorak Shep / <strong>Everest Base Camp (5,364m)</strong> → <strong>Kala Patthar (5,545m)</strong> → Dzongla → <strong>Cho La (5,420m)</strong> → Thangnak / Dragnak → Gokyo / <strong>Gokyo Ri (5,357m)</strong> → <strong>Renjo La (5,360m)</strong> → Lungden → Thame → Namche → Lukla → Kathmandu.
                </div>
                <p style="color: var(--color-neutral-600); font-size: 0.9rem; line-height: 1.5; margin: 0;">
                  <em>Note: A Renjo La-first circuit is a separate route arrangement. It is discussed under route alternatives and should be assessed with its own acclimatization and overnight plan.</em>
                </p>
              </div>

            </div>

            <!-- Deep Dive Feature Highlights (10 Topics) -->
            <div style="margin-top: 40px;">
              <h3 style="font-size: 1.45rem; color: var(--color-primary-navy); font-weight: 800; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                Everest Three High Passes Trek Highlights
              </h3>
              
              <div style="display: grid; grid-template-columns: 1fr; gap: 20px;">
                
                <!-- Highlight 1 -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                  <h4 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-flex; width: 28px; height: 28px; background: #e6f7f0; color: #008060; border-radius: 50%; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 800;">1</span>
                    Cross Kongma La (<span data-altitude-m="5535">5,535 m</span>), the highest of the three named passes
                  </h4>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0 0 10px 0;">
                    Kongma La, at approximately <span data-altitude-m="5535">5,535 metres</span>, is the highest of the three named passes. The crossing connects the Lobuche and Chhukung sides of the route and takes the trek into highly exposed alpine terrain. The surrounding landscape includes glaciers, moraine, and high mountain slopes.
                  </p>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                    Kongma La is often treated as one of the major objectives of the complete circuit because the pass requires a sustained high-altitude effort followed by a long descent. The experience can vary dramatically according to weather: on clear days, the high terrain provides expansive views across the surrounding peaks and valleys; after snowfall or under cloud, visibility can decrease substantially and the trail becomes more demanding. A flexible package allows the guide and group to assess conditions before committing to the crossing.
                  </p>
                </div>

                <!-- Highlight 2 -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                  <h4 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-flex; width: 28px; height: 28px; background: #e6f7f0; color: #008060; border-radius: 50%; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 800;">2</span>
                    Connect the Everest Base Camp and Gokyo sides over Cho La (<span data-altitude-m="5420">5,420 m</span>)
                  </h4>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0 0 10px 0;">
                    Cho La is the second major pass in the Three High Passes circuit. The route over Cho La connects the Gokyo side of the region with the Everest Base Camp corridor near the Lobuche area. The approach is a major trekking highlight because the landscape becomes increasingly alpine as the route rises above the settled valleys.
                  </p>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                    Depending on season and current trail conditions, trekkers may encounter snow and ice around sections of the crossing. The crossing requires careful movement, appropriate clothing and footwear, and an understanding that the terrain can be substantially more difficult than ordinary village trekking. Cho La is one of the days where the Three Passes package demonstrates its difference from a normal Everest Base Camp itinerary: moving between valleys through a high mountain environment.
                  </p>
                </div>

                <!-- Highlight 3 -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                  <h4 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-flex; width: 28px; height: 28px; background: #e6f7f0; color: #008060; border-radius: 50%; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 800;">3</span>
                    Cho La glacier and the changing terrain
                  </h4>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0 0 10px 0;">
                    The terrain around Cho La can include glacial and snow-covered sections depending on seasonal conditions. This creates a visual transition from the rocky terrain around the lower valley to a colder, more exposed high-altitude environment. For trekkers, the changing surface is part of the attraction but also part of the preparation requirement.
                  </p>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                    Conditions can vary according to season, recent snowfall, temperature, visibility, trail maintenance, and regional weather patterns. The appropriate traction equipment should therefore be based on actual conditions and professional local assessment. The glacier environment around Cho La also emphasizes the importance of moving at a controlled pace and maintaining adequate spacing within the group.
                  </p>
                </div>

                <!-- Highlight 4 -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                  <h4 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-flex; width: 28px; height: 28px; background: #e6f7f0; color: #008060; border-radius: 50%; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 800;">4</span>
                    Cross Renjo La (<span data-altitude-m="5360">5,360 m</span>) between Gokyo and the Lungden side
                  </h4>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0 0 10px 0;">
                    Renjo La is one of the three principal high passes of the trek and provides a spectacular transition between the Gokyo and Thame sides of the Khumbu. The approach gradually leaves the settled lower valley behind and enters more exposed high-altitude terrain where vegetation becomes sparse and surrounding mountains dominate the landscape.
                  </p>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                    Crossing Renjo La is not simply a viewpoint stop: it is a complete high-altitude trekking day involving a sustained ascent, a high pass crossing, and a long descent toward Lungden. From the pass and surrounding high ground, trekkers experience wide views across the Everest region, with turquoise Gokyo Lake glittering far below.
                  </p>
                </div>

                <!-- Highlight 5 -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                  <h4 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-flex; width: 28px; height: 28px; background: #e6f7f0; color: #008060; border-radius: 50%; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 800;">5</span>
                    Explore the sacred turquoise Gokyo Lakes
                  </h4>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0 0 10px 0;">
                    The Gokyo Lakes are among the most recognizable landscapes in the Everest region. The turquoise glacial lakes sit within the high-altitude Gokyo Valley and create a striking visual contrast with the surrounding rocky slopes, glaciers, and snow-covered peaks. The lakes also carry sacred religious significance for both Hindu and Buddhist communities.
                  </p>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                    The Gokyo wetland system includes a series of six oligotrophic lakes rather than one isolated body of water, making the valley a landscape to experience through several viewpoints, lakeside walks, photography, and exploring the lateral moraine of the massive Ngozumpa Glacier.
                  </p>
                </div>

                <!-- Highlight 6 -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                  <h4 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-flex; width: 28px; height: 28px; background: #e6f7f0; color: #008060; border-radius: 50%; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 800;">6</span>
                    Climb Gokyo Ri (<span data-altitude-m="5357">5,357 m</span>) for panoramic views of 4 eight-thousanders
                  </h4>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0 0 10px 0;">
                    Gokyo Ri reaches approximately <span data-altitude-m="5357">5,357 metres</span> and is one of the premier high-altitude viewpoints in the Himalayas. The climb begins directly from the Gokyo settlement and ascends steeply to the summit crest.
                  </p>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                    The summit panorama takes in four of the world's 14 eight-thousanders in a single sweep: <strong>Mount Everest (8,848m)</strong>, <strong>Lhotse (8,516m)</strong>, <strong>Makalu (8,481m)</strong>, and <strong>Cho Oyu (8,188m)</strong>, with the turquoise lakes and Ngozumpa Glacier spread out beneath.
                  </p>
                </div>

                <!-- Highlight 7 -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                  <h4 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-flex; width: 28px; height: 28px; background: #e6f7f0; color: #008060; border-radius: 50%; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 800;">7</span>
                    Reach Everest Base Camp (<span data-altitude-m="5364">5,364 m</span>) from Gorak Shep
                  </h4>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0 0 10px 0;">
                    For packages that include it, Everest Base Camp becomes one of the major destination highlights of the Three Passes Trek. The route to Base Camp passes through the high-altitude settlements of Lobuche and Gorak Shep before continuing along the active Khumbu Glacier moraine.
                  </p>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                    At the Base Camp section, the landscape is dominated by ice formations, moraine, towering mountain walls, and the dramatic Khumbu Icefall. Reaching Everest Base Camp delivers an iconic milestone in global mountaineering history.
                  </p>
                </div>

                <!-- Highlight 8 -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                  <h4 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-flex; width: 28px; height: 28px; background: #e6f7f0; color: #008060; border-radius: 50%; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 800;">8</span>
                    Climb Kala Patthar (<span data-altitude-m="5545">5,545 m</span>) for the classic Everest panorama
                  </h4>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0 0 10px 0;">
                    Kala Patthar reaches approximately <span data-altitude-m="5545">5,545 metres</span> and is the highest viewpoint on the entire itinerary. Ascended from Gorak Shep in the early morning, it offers an unobstructed, close-up view of Everest's south face, West Ridge, and Nuptse that cannot be seen from Base Camp itself.
                  </p>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                    Including both Kala Patthar and Gokyo Ri gives the trekker two distinct vantage points: Kala Patthar for the sheer face of Everest and the Khumbu Glacier, and Gokyo Ri for the vast four-peak panorama and sacred turquoise lakes.
                  </p>
                </div>

                <!-- Highlight 9 -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                  <h4 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-flex; width: 28px; height: 28px; background: #e6f7f0; color: #008060; border-radius: 50%; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 800;">9</span>
                    Return through the quiet and historic Thame Valley
                  </h4>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0 0 10px 0;">
                    Compared with the heavily traveled Everest Base Camp corridor, the Thame Valley represents a serene, authentic side of the Khumbu. It is particularly rich for travelers interested in traditional Sherpa culture, historic trans-Himalayan yak trade routes with Tibet, and centuries-old monasteries.
                  </p>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                    The descent through Lungden, Marlung, and Thame ensures you don't merely retrace your steps, but complete a true loop through the remote valleys of the upper Sagarmatha region.
                  </p>
                </div>

                <!-- Highlight 10 -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                  <h4 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-flex; width: 28px; height: 28px; background: #e6f7f0; color: #008060; border-radius: 50%; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 800;">10</span>
                    Sherpa settlements and Buddhist heritage
                  </h4>
                  <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                    The route combines the bustling Sherpa trading hub of Namche Bazaar with spiritual landmarks including Tengboche Monastery, Pangboche, Dingboche, high seasonal pastoral settlements, mani stones, and chortens. It offers deep insight into Himalayan Buddhism and the resilient mountain heritage of the Khumbu people.
                  </p>
                </div>

              </div>
            </div>

            <!-- Highlights at a Glance Summary Table -->
            <div style="margin-top: 36px;">
              <h3 style="font-size: 1.25rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 14px;">Highlights at a Glance</h3>
              <div style="overflow-x: auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; text-align: left;">
                  <thead>
                    <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                      <th style="padding: 12px 16px; font-weight: 700; color: #0f172a;">Experience</th>
                      <th style="padding: 12px 16px; font-weight: 700; color: #0f172a;">Scheduled Stage</th>
                      <th style="padding: 12px 16px; font-weight: 700; color: #0f172a;">Approx. Elevation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 16px; font-weight: 600; color: #1e293b;">Kathmandu sightseeing and preparation</td>
                      <td style="padding: 10px 16px; color: #475569;">Day 2</td>
                      <td style="padding: 10px 16px; color: #475569;"><span data-altitude-m="1355">1,355 m</span></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #fafbfc;">
                      <td style="padding: 10px 16px; font-weight: 600; color: #1e293b;">Namche acclimatization & Everest View Hotel</td>
                      <td style="padding: 10px 16px; color: #475569;">Day 5</td>
                      <td style="padding: 10px 16px; color: #475569;"><span data-altitude-m="3880">3,880 m</span></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 16px; font-weight: 600; color: #1e293b;">Tengboche & Dingboche approach</td>
                      <td style="padding: 10px 16px; color: #475569;">Days 6–7</td>
                      <td style="padding: 10px 16px; color: #475569;"><span data-altitude-m="3860">3,860m</span> – <span data-altitude-m="4450">4,450m</span></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #fafbfc;">
                      <td style="padding: 10px 16px; font-weight: 600; color: #1e293b;">Nangkartshang Hill acclimatization hike</td>
                      <td style="padding: 10px 16px; color: #475569;">Day 8</td>
                      <td style="padding: 10px 16px; color: #475569;"><span data-altitude-m="5100">5,100 m</span></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 16px; font-weight: 600; color: #1e293b;">Kongma La Pass (Highest Pass)</td>
                      <td style="padding: 10px 16px; color: #475569;">Day 10</td>
                      <td style="padding: 10px 16px; font-weight: 700; color: #008060;"><span data-altitude-m="5535">5,535 m</span></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #fafbfc;">
                      <td style="padding: 10px 16px; font-weight: 600; color: #1e293b;">Everest Base Camp</td>
                      <td style="padding: 10px 16px; color: #475569;">Day 11</td>
                      <td style="padding: 10px 16px; color: #475569;"><span data-altitude-m="5364">5,364 m</span></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 16px; font-weight: 600; color: #1e293b;">Kala Patthar (Highest Viewpoint) & Dzongla</td>
                      <td style="padding: 10px 16px; color: #475569;">Day 12</td>
                      <td style="padding: 10px 16px; font-weight: 700; color: #008060;"><span data-altitude-m="5545">5,545 m</span></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #fafbfc;">
                      <td style="padding: 10px 16px; font-weight: 600; color: #1e293b;">Cho La Pass (Glacier Crossing)</td>
                      <td style="padding: 10px 16px; color: #475569;">Day 13</td>
                      <td style="padding: 10px 16px; font-weight: 700; color: #008060;"><span data-altitude-m="5420">5,420 m</span></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 16px; font-weight: 600; color: #1e293b;">Gokyo Lakes & Gokyo Ri Panorama</td>
                      <td style="padding: 10px 16px; color: #475569;">Days 14–15</td>
                      <td style="padding: 10px 16px; color: #475569;"><span data-altitude-m="4750">4,750m</span> / <span data-altitude-m="5357">5,357m</span></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #fafbfc;">
                      <td style="padding: 10px 16px; font-weight: 600; color: #1e293b;">Renjo La Pass & Lungden Descent</td>
                      <td style="padding: 10px 16px; color: #475569;">Day 16</td>
                      <td style="padding: 10px 16px; font-weight: 700; color: #008060;"><span data-altitude-m="5360">5,360 m</span></td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 16px; font-weight: 600; color: #1e293b;">Thame-side descent to Namche & Lukla</td>
                      <td style="padding: 10px 16px; color: #475569;">Days 17–18</td>
                      <td style="padding: 10px 16px; color: #475569;"><span data-altitude-m="3443">3,443m</span> – <span data-altitude-m="2850">2,850m</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Ask Experts WhatsApp CTA Banner Card -->
            <div class="trek-expert-cta-card" style="margin-top: 36px;">
              <div class="expert-cta-left">
                <div class="expert-avatar-wrap">
                  <img src="../../images/reviews/Biraj-Sherpa.jpg" alt="Biraj Sherpa - High Altitude Guide" class="expert-avatar-img">
                  <div class="expert-online-badge" title="Online now to help"></div>
                </div>
                <div class="expert-cta-text">
                  <span class="expert-cta-label">Local Khumbu Mountain Specialists</span>
                  <p class="expert-cta-title">Planning the Everest Three Passes circuit for 2026/2027?</p>
                  <p class="expert-cta-desc">Chat directly with Biraj or our senior Sherpa guiding team on WhatsApp. Get honest advice on pass conditions, snow gear, acclimatization, and custom route pacing.</p>
                </div>
              </div>
              <div class="expert-cta-action">
                <a href="https://wa.me/9779851000000?text=Hi%20Namaste%20Hiking%20Trek,%20I'm%20planning%20the%20Everest%20Three%20Passes%20Trek%20and%20would%20like%20to%20ask%20a%20few%20questions." target="_blank" rel="noopener noreferrer" class="btn-expert-whatsapp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
                <span class="expert-response-time">Average response: 5 to 10 minutes</span>
              </div>
            </div>

            <!-- Why Book Section -->
            <div class="why-book-container" style="margin-top: 40px; border-top: 1px solid var(--color-neutral-100); padding-top: 30px;">
              <div class="why-book-title-wrapper">
                <h2 class="why-book-title">Why Book the Everest Three Passes Trek with Namaste Hiking Trek?</h2>
              </div>
              
              <p style="color: var(--color-neutral-600); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.6; max-width: 850px;">
                Crossing three passes above 5,300 meters is significantly more demanding than an ordinary out-and-back trek. The difference lies in what happens around the trek — before you arrive, during the harder days on high glaciers, and how emergencies are managed. Ranked among the top trekking operators in Nepal with hundreds of verified 5-star reviews on TripAdvisor and Google, we operate with rigorous safety and welfare standards.
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
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Licensed High-Altitude Sherpa Guides</h4>
                    <p class="why-book-card-text">Every Three Passes expedition is led by government-licensed, Wilderness First Responder (WFR) certified Sherpa guides with multi-year high-pass navigation experience in snow, ice, and moraine conditions.</p>
                  </div>
                </div>

                <!-- Card 2: Health Monitoring -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Twice-Daily Pulse Oximeter & Health Checks</h4>
                    <p class="why-book-card-text">Your guide monitors and logs your blood oxygen saturation (SpO2) and resting pulse twice every day (morning and evening), tracking acclimatization trends and catching early AMS symptoms before passes.</p>
                  </div>
                </div>

                <!-- Card 3: Porter Welfare -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">100% Ethical Porter Welfare (IPPG Compliant)</h4>
                    <p class="why-book-card-text">We strictly abide by International Porter Protection Group (IPPG) guidelines: maximum 20–22 kg loads (1 porter for 2 trekkers), fair mountain wages, life/medical insurance, and appropriate high-altitude gear.</p>
                  </div>
                </div>

                <!-- Card 4: Operations Support -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">24/7 Kathmandu Operations & Emergency Network</h4>
                    <p class="why-book-card-text">From Lukla flight rescheduling to rapid emergency helicopter dispatch, our Kathmandu headquarters team coordinates round the clock with guides, airlines, and medical personnel across the Khumbu.</p>
                  </div>
                </div>

              </div>
            </div>

          </section>`;

let html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const s1Start = html.indexOf('<section id="section-overview"');
const s2Start = html.indexOf('<section id="section-itinerary"');

if (s1Start === -1 || s2Start === -1) {
  console.error('Boundaries not found!');
  process.exit(1);
}

const before = html.slice(0, s1Start);
const after = html.slice(s2Start);

html = before + overviewHtml + '\n\n          ' + after;

fs.writeFileSync('trek/everest-three-passes-trek/index.html', html, 'utf8');
console.log('Successfully applied Step 2: Overview Section!');

