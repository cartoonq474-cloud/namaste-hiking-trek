const fs = require('fs');

const sec1Html = `          <!-- Section 1: Overview -->
          <section id="section-overview" class="trek-detail-section">
            <h2 class="trek-section-title">Kanchenjunga Circuit Trek Overview</h2>
            
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The Kanchenjunga Circuit Trek is a 26-day guided trekking adventure in eastern Nepal, designed for travelers who want to explore one of the country's most remote Himalayan regions. The journey combines traditional mountain villages, deep river valleys, forested trails, high-altitude landscapes, glacial terrain, and spectacular views of the Kanchenjunga massif (<span data-altitude-m="8586">8,586 m</span>), the world's third-highest peak. It follows a complete circuit-style route through the northern and southern sides of the region, including an excursion to Pangpema, the North Base Camp area, and a high mountain crossing over Sele Le before descending toward the southern trekking trails.
            </p>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              Reaching the remote Kanchenjunga region requires more planning than trekking in Nepal's busier mountain destinations. The route involves long walking days, significant elevation changes, limited facilities, and high-altitude sections where weather and trail conditions can influence daily progress. However, these challenges are part of what makes the journey distinctive. Instead of following a heavily developed trekking corridor, you travel through quieter settlements where traditional village life, mountain farming, and local hospitality remain central to the experience.
            </p>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              This expedition allows ample time for gradual altitude gain, acclimatization, exploration of both sides of the mountain region, and a return journey through remote communities. With trekking arrangements, accommodation planning, authorized permit support, and local guidance organized in advance, you can focus on the experience of walking through the eastern Himalayas while being thoroughly prepared for the practical demands of a long expedition.
            </p>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
              The source schedule spans 26 calendar days, including arrival, Kathmandu preparation, travel to eastern Nepal, the northern and southern trekking sections, return travel, Day 25 in Kathmandu, and Day 26 international departure. Ghunsa (<span data-altitude-m="3475">3,475 m</span>) and Khambachen (<span data-altitude-m="4050">4,050 m</span>) feature dedicated acclimatization stays, while Pangpema (<span data-altitude-m="5143">5,143 m</span>) serves as the high alpine excursion.
            </p>

            <!-- Ask Experts WhatsApp CTA Banner Card -->
            <div class="trek-expert-cta-card">
              <div class="expert-cta-left">
                <div class="expert-cta-badge-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <div class="expert-cta-text-group">
                  <h3 class="expert-cta-title">Want to know more about this trek?</h3>
                  <p class="expert-cta-subtitle">Chat with us — real trekking experts, not bots.</p>
                  <div class="expert-cta-status">
                    <span class="status-dot"></span>
                    <span>Replies within 6–7 hours</span>
                  </div>
                </div>
              </div>
              <a href="https://wa.me/9779800000000" target="_blank" rel="noopener" class="expert-whatsapp-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#008060">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp us</span>
              </a>
            </div>

            <!-- Subsection 1 -->
            <div class="trek-editorial-section" style="margin-top: 36px;">
              <h3 class="trek-overview-subtitle" style="font-size: 1.4rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 14px;">
                Explore the Remote Kanchenjunga Region
              </h3>
              <p style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.7; margin-bottom: 14px;">
                Kanchenjunga, rising to <span data-altitude-m="8586">8,586 metres</span>, is the world's third-highest mountain. Its vast mountain system lies in far-eastern Nepal near the borders with India (Sikkim) and the Tibet Autonomous Region of China. The surrounding landscape includes immense peaks, glaciers, alpine valleys, rugged ridgelines, and protected habitats that support a wide variety of Himalayan plants and wildlife.
              </p>
              <p style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.7; margin-bottom: 14px;">
                The Kanchenjunga region offers a different trekking experience from destinations with frequent road access, extensive lodge networks, and large numbers of visitors. Many of the settlements along this route remain small, and facilities become increasingly basic as you gain altitude. Walking between villages involves following rivers, crossing suspension bridges, climbing forested hillsides, and moving through narrow valleys before reaching open alpine country.
              </p>
              <p style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.7; margin-bottom: 14px;">
                As the route progresses, the scenery changes considerably. Lower elevations feature subtropical vegetation, cultivated land, waterfalls, and forested trails. Higher sections bring cooler temperatures, conifer forests, rugged mountain slopes, glacial streams, and increasingly expansive views of the surrounding peaks. Beyond the last major high-altitude settlements, the landscape becomes more exposed and rocky, with fewer signs of permanent habitation.
              </p>
            </div>

            <!-- Subsection 2 -->
            <div class="trek-editorial-section" style="margin-top: 28px;">
              <h3 class="trek-overview-subtitle" style="font-size: 1.4rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 14px;">
                A Two-Sided Journey Through the Kanchenjunga Mountains
              </h3>
              <p style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.7; margin-bottom: 14px;">
                The Kanchenjunga Circuit Trek is planned to explore both the northern and southern sides of the mountain region within one extended itinerary. This approach provides a broader experience than a trek that visits only one base camp area.
              </p>
              <p style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.7; margin-bottom: 14px;">
                The northern section follows remote valleys toward Ghunsa, Khambachen, and Lhonak before continuing to Pangpema, at approximately <span data-altitude-m="5143">5,143 metres</span>, the North Base Camp area. This is one of the highest points of the planned trek. The surrounding terrain is dramatic, with immense mountain walls, glacial formations, barren slopes, and expansive views across the high Himalayas. The final approach requires a full effort at altitude, and actual progress depends on weather, snow, trail conditions, and the group's physical condition.
              </p>
              <p style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.7; margin-bottom: 14px;">
                After exploring the northern side, the route descends toward Ghunsa before crossing the high mountain terrain of Sele Le (<span data-altitude-m="4290">4,290 m</span>). This section provides a transition between the two sides of the Kanchenjunga region. The crossing is physically demanding, with steep ascents and descents, exposed trail sections, and conditions that vary with the season. Good weather, suitable equipment, and careful pacing are particularly important here.
              </p>
              <p style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.7; margin-bottom: 14px;">
                The journey then continues toward Cheram and the Ramche area (<span data-altitude-m="4580">4,580 m</span>), where the southern side of the mountain landscape offers a different perspective on the surrounding peaks and valleys. The route subsequently descends through Tortong and Yamphudin, followed by lower settlements such as Mamanke and Lalikharka, before returning to the Suketar area.
              </p>
            </div>

            <!-- Subsection 3 -->
            <div class="trek-editorial-section" style="margin-top: 28px;">
              <h3 class="trek-overview-subtitle" style="font-size: 1.4rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 14px;">
                Pangpema and the North Base Camp Experience
              </h3>
              <p style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.7; margin-bottom: 14px;">
                One of the defining parts of the Kanchenjunga Circuit Trek is the journey toward Pangpema, commonly known as the North Base Camp area. Located at approximately <span data-altitude-m="5143">5,143 metres</span>, Pangpema sits in a stark high-altitude environment shaped by glaciers, rocky slopes, and enormous Himalayan peaks.
              </p>
              <p style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.7; margin-bottom: 14px;">
                The approach begins after spending time at Ghunsa and Khambachen, followed by the trek to Lhonak. These intermediate stops are critical because they help divide the ascent into manageable stages and provide time for the body to adjust to increasing elevation. Even with a gradual itinerary, walking at this altitude is demanding, and the pace remains conservative.
              </p>
              <p style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.7; margin-bottom: 14px;">
                The trail toward Pangpema becomes increasingly exposed as vegetation gives way to rock, scree, and glacial terrain. You may encounter cold winds, rapidly changing cloud cover, and sections where the path requires careful footing. The base camp excursion is not simply a distance achievement; it is an opportunity to experience the immense scale of the Kanchenjunga massif and the remoteness of the northern Himalayas.
              </p>
            </div>

            <!-- Subsection 4 -->
            <div class="trek-editorial-section" style="margin-top: 28px;">
              <h3 class="trek-overview-subtitle" style="font-size: 1.4rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 14px;">
                Acclimatization for a High-Altitude Trek
              </h3>
              <p style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.7; margin-bottom: 14px;">
                Altitude management is a central part of the Kanchenjunga Circuit Trek. The itinerary includes planned acclimatization days in Ghunsa, at approximately <span data-altitude-m="3475">3,475 metres</span>, and Khambachen, at approximately <span data-altitude-m="4050">4,050 metres</span>, before continuing toward Lhonak and Pangpema. These stops create opportunities to rest, undertake suitable short walks where conditions allow, and monitor how each trekker is responding to the increasing altitude.
              </p>
              <p style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.7; margin-bottom: 14px;">
                Acclimatization does not eliminate the risk of altitude illness. Even experienced hikers can develop symptoms when ascending to high elevations. A gradual itinerary, steady walking pace, adequate hydration, regular meals, and honest communication about symptoms all contribute to safer trekking. Any persistent headache, nausea, unusual fatigue, dizziness, or worsening breathlessness should be taken seriously.
              </p>
            </div>

            <!-- Subsection 5 -->
            <div class="trek-editorial-section" style="margin-top: 28px;">
              <h3 class="trek-overview-subtitle" style="font-size: 1.4rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 14px;">
                Traditional Villages and Local Himalayan Culture
              </h3>
              <p style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.7; margin-bottom: 14px;">
                The Kanchenjunga region is home to communities whose traditions have developed in close relationship with the mountains. Throughout the trek, you pass settlements where farming, livestock, seasonal trade, and family-based hospitality remain important parts of everyday life.
              </p>
              <p style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.7; margin-bottom: 14px;">
                Villages such as Chirwa, Ghunsa, and Yamphudin provide glimpses of the cultural diversity of eastern Nepal. Settlement patterns, house designs, religious practices, languages, and food traditions vary across the region. Ghunsa is an important settlement on the northern approach, known for its traditional wooden-and-stone architecture, ancient Buddhist gompas, and surrounding larch forests.
              </p>
            </div>

            <!-- Subsection 6 -->
            <div class="trek-editorial-section" style="margin-top: 28px;">
              <h3 class="trek-overview-subtitle" style="font-size: 1.4rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 14px;">
                What Makes the Kanchenjunga Circuit Trek Different?
              </h3>
              <div style="background: var(--color-neutral-50); border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 20px 24px; margin-bottom: 18px;">
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">
                  <li style="display: flex; gap: 10px; align-items: flex-start; font-size: 0.98rem; color: var(--color-neutral-700); line-height: 1.6;">
                    <span style="color: var(--color-copper-orange); font-weight: 700; flex-shrink: 0;">•</span>
                    <span><strong style="color: var(--color-primary-navy);">A Remote Himalayan Setting:</strong> Traverses less-developed trekking corridors with quieter trails and far fewer commercial settlements than Nepal's busiest regions.</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start; font-size: 0.98rem; color: var(--color-neutral-700); line-height: 1.6;">
                    <span style="color: var(--color-copper-orange); font-weight: 700; flex-shrink: 0;">•</span>
                    <span><strong style="color: var(--color-primary-navy);">High-Altitude Base Camp Excursion:</strong> Reaches Pangpema (<span data-altitude-m="5143">5,143 m</span>) for an intimate encounter with the sheer North Face of Kanchenjunga.</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start; font-size: 0.98rem; color: var(--color-neutral-700); line-height: 1.6;">
                    <span style="color: var(--color-copper-orange); font-weight: 700; flex-shrink: 0;">•</span>
                    <span><strong style="color: var(--color-primary-navy);">High Mountain Pass Crossing:</strong> Crosses the Sele Le pass (<span data-altitude-m="4290">4,290 m</span>), connecting the northern and southern watersheds.</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start; font-size: 0.98rem; color: var(--color-neutral-700); line-height: 1.6;">
                    <span style="color: var(--color-copper-orange); font-weight: 700; flex-shrink: 0;">•</span>
                    <span><strong style="color: var(--color-primary-navy);">Extraordinary Ecosystem Transitions:</strong> Moves from subtropical river valleys through rhododendron and conifer forests to high glacial moraines.</span>
                  </li>
                  <li style="display: flex; gap: 10px; align-items: flex-start; font-size: 0.98rem; color: var(--color-copper-orange); font-weight: 700; flex-shrink: 0;">
                    <span><strong style="color: var(--color-primary-navy);">Comprehensive 26-Day Itinerary:</strong> Organizes arrival, preparation, trekking, acclimatization, return travel, and a Kathmandu contingency buffer into one seamless expedition.</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Highlights Grid -->
            <div class="rich-highlights-container" style="margin-top: 35px; padding-top: 25px; border-top: 1px solid var(--color-neutral-100);">
              <div style="border-left: 4px solid var(--color-copper-orange); padding-left: 14px; margin-bottom: 12px;">
                <h2 style="font-size: 1.8rem; margin: 0; color: var(--color-primary-navy); font-weight: 700;">Kanchenjunga Circuit Trek Highlights</h2>
              </div>
              
              <p style="color: var(--color-neutral-600); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.6; max-width: 850px;">
                The Kanchenjunga Circuit Trek highlights combine dramatic Himalayan scenery, remote mountain villages, high-altitude exploration, and a demanding route through both the northern and southern sides of the Kanchenjunga region:
              </p>
              
              <div class="rich-highlights-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px 30px; margin-top: 24px;">
                <!-- Highlight 1 -->
                <div class="rich-highlight-item" style="display: flex; gap: 12px; align-items: flex-start;">
                  <div class="rich-highlight-icon-wrapper" style="flex-shrink: 0; margin-top: 3px; color: var(--color-copper-orange);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22L12 2l8 20H4z"/><path d="M9 22l3-7 3 7H9z" fill="currentColor"/></svg>
                  </div>
                  <div class="rich-highlight-content" style="font-size: 0.98rem; line-height: 1.6; color: var(--color-neutral-700);">
                    <strong style="color: var(--color-primary-navy); font-weight: 700;">Mount Kanchenjunga Massif (<span data-altitude-m="8586">8,586 m</span>):</strong> Experience up-close views of the world's third-highest peak, its colossal mountain walls, and expansive glacial cirques.
                  </div>
                </div>

                <!-- Highlight 2 -->
                <div class="rich-highlight-item" style="display: flex; gap: 12px; align-items: flex-start;">
                  <div class="rich-highlight-icon-wrapper" style="flex-shrink: 0; margin-top: 3px; color: var(--color-copper-orange);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
                  </div>
                  <div class="rich-highlight-content" style="font-size: 0.98rem; line-height: 1.6; color: var(--color-neutral-700);">
                    <strong style="color: var(--color-primary-navy); font-weight: 700;">Pangpema North Base Camp (<span data-altitude-m="5143">5,143 m</span>):</strong> High-altitude alpine excursion to the legendary north face base camp with views across the vast Kanchenjunga Glacier.
                  </div>
                </div>

                <!-- Highlight 3 -->
                <div class="rich-highlight-item" style="display: flex; gap: 12px; align-items: flex-start;">
                  <div class="rich-highlight-icon-wrapper" style="flex-shrink: 0; margin-top: 3px; color: var(--color-copper-orange);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </div>
                  <div class="rich-highlight-content" style="font-size: 0.98rem; line-height: 1.6; color: var(--color-neutral-700);">
                    <strong style="color: var(--color-primary-navy); font-weight: 700;">Sherpa Cultural Hub of Ghunsa (<span data-altitude-m="3475">3,475 m</span>):</strong> Historic stone village nestled in alpine larch forests, serving as the cultural heart and primary acclimatization haven of the northern valley.
                  </div>
                </div>

                <!-- Highlight 4 -->
                <div class="rich-highlight-item" style="display: flex; gap: 12px; align-items: flex-start;">
                  <div class="rich-highlight-icon-wrapper" style="flex-shrink: 0; margin-top: 3px; color: var(--color-copper-orange);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 22 22 22"/></svg>
                  </div>
                  <div class="rich-highlight-content" style="font-size: 0.98rem; line-height: 1.6; color: var(--color-neutral-700);">
                    <strong style="color: var(--color-primary-navy); font-weight: 700;">Alpine Transition at Khambachen (<span data-altitude-m="4050">4,050 m</span>):</strong> Second acclimatization station surrounded by dramatic peaks including Jannu (Kumbhakarna, 7,711 m) and high glacial outwashes.
                  </div>
                </div>

                <!-- Highlight 5 -->
                <div class="rich-highlight-item" style="display: flex; gap: 12px; align-items: flex-start;">
                  <div class="rich-highlight-icon-wrapper" style="flex-shrink: 0; margin-top: 3px; color: var(--color-copper-orange);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  </div>
                  <div class="rich-highlight-content" style="font-size: 0.98rem; line-height: 1.6; color: var(--color-neutral-700);">
                    <strong style="color: var(--color-primary-navy); font-weight: 700;">Demanding Sele Le Pass Crossing (<span data-altitude-m="4290">4,290 m</span>):</strong> Sustained high mountain crossing connecting the northern and southern valleys over rugged alpine ridges.
                  </div>
                </div>

                <!-- Highlight 6 -->
                <div class="rich-highlight-item" style="display: flex; gap: 12px; align-items: flex-start;">
                  <div class="rich-highlight-icon-wrapper" style="flex-shrink: 0; margin-top: 3px; color: var(--color-copper-orange);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div class="rich-highlight-content" style="font-size: 0.98rem; line-height: 1.6; color: var(--color-neutral-700);">
                    <strong style="color: var(--color-primary-navy); font-weight: 700;">Southern Vistas at Cheram & Ramche (<span data-altitude-m="4580">4,580 m</span>):</strong> Explore the Yalung Glacier moraine and the sweeping southern amphitheater of the Kanchenjunga range.
                  </div>
                </div>

                <!-- Highlight 7 -->
                <div class="rich-highlight-item" style="display: flex; gap: 12px; align-items: flex-start;">
                  <div class="rich-highlight-icon-wrapper" style="flex-shrink: 0; margin-top: 3px; color: var(--color-copper-orange);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div class="rich-highlight-content" style="font-size: 0.98rem; line-height: 1.6; color: var(--color-neutral-700);">
                    <strong style="color: var(--color-primary-navy); font-weight: 700;">Kanchenjunga Conservation Area Biodiversity:</strong> Traverse pristine habitats protecting rare wildlife including the snow leopard, red panda, Himalayan black bear, and blood pheasant.
                  </div>
                </div>

                <!-- Highlight 8 -->
                <div class="rich-highlight-item" style="display: flex; gap: 12px; align-items: flex-start;">
                  <div class="rich-highlight-icon-wrapper" style="flex-shrink: 0; margin-top: 3px; color: var(--color-copper-orange);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </div>
                  <div class="rich-highlight-content" style="font-size: 0.98rem; line-height: 1.6; color: var(--color-neutral-700);">
                    <strong style="color: var(--color-primary-navy); font-weight: 700;">Authentic Circuit Route:</strong> Return through traditional foothill villages including Tortong, Yamphudin, Mamanke, and Lalikharka to complete a true Himalayan loop.
                  </div>
                </div>
              </div>
            </div>

            <!-- Signature Glance Box -->
            <div class="ebc-glance-box" style="margin-top: 35px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 24px 28px;">
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #166534; margin: 0 0 16px 0; display: flex; align-items: center; gap: 8px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                At a Glance: Defining Milestones of the 26-Day Kanchenjunga Circuit
              </h3>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px 24px;">
                <div style="display: flex; gap: 8px; align-items: center; font-size: 0.95rem; color: #14532d;">
                  <span style="color: #16a34a; font-weight: 700;">✓</span> 26 Calendar Days Comprehensive Expedition
                </div>
                <div style="display: flex; gap: 8px; align-items: center; font-size: 0.95rem; color: #14532d;">
                  <span style="color: #16a34a; font-weight: 700;">✓</span> Maximum Elevation: <span data-altitude-m="5143">5,143 m</span> (Pangpema)
                </div>
                <div style="display: flex; gap: 8px; align-items: center; font-size: 0.95rem; color: #14532d;">
                  <span style="color: #16a34a; font-weight: 700;">✓</span> 2 Rest & Acclimatization Stays: Ghunsa & Khambachen
                </div>
                <div style="display: flex; gap: 8px; align-items: center; font-size: 0.95rem; color: #14532d;">
                  <span style="color: #16a34a; font-weight: 700;">✓</span> High Pass Crossing: Sele Le (<span data-altitude-m="4290">4,290 m</span>)
                </div>
                <div style="display: flex; gap: 8px; align-items: center; font-size: 0.95rem; color: #14532d;">
                  <span style="color: #16a34a; font-weight: 700;">✓</span> Both North (Pangpema) & South (Ramche) Viewpoints
                </div>
                <div style="display: flex; gap: 8px; align-items: center; font-size: 0.95rem; color: #14532d;">
                  <span style="color: #16a34a; font-weight: 700;">✓</span> Protected Wilderness in Kanchenjunga Conservation Area
                </div>
                <div style="display: flex; gap: 8px; align-items: center; font-size: 0.95rem; color: #14532d;">
                  <span style="color: #16a34a; font-weight: 700;">✓</span> Authentic, Uncommercialized Teahouse Experiences
                </div>
                <div style="display: flex; gap: 8px; align-items: center; font-size: 0.95rem; color: #14532d;">
                  <span style="color: #16a34a; font-weight: 700;">✓</span> Licensed High-Altitude Guide & Insured Porter Team
                </div>
                <div style="display: flex; gap: 8px; align-items: center; font-size: 0.95rem; color: #14532d;">
                  <span style="color: #16a34a; font-weight: 700;">✓</span> Kanchenjunga RAP & KCAP Permits Included
                </div>
                <div style="display: flex; gap: 8px; align-items: center; font-size: 0.95rem; color: #14532d;">
                  <span style="color: #16a34a; font-weight: 700;">✓</span> Dedicated Kathmandu Buffer Day for Flexible Flights
                </div>
              </div>
            </div>

            <!-- Why Book With Us Section -->
            <div class="why-book-container" style="margin-top: 40px; padding-top: 30px; border-top: 1px solid var(--color-neutral-100);">
              <h3 class="why-book-title" style="font-size: 1.6rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 24px;">
                Why Book the Kanchenjunga Circuit Trek With Us
              </h3>
              
              <div class="why-book-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
                <!-- Card 1: Certified Guides -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <polyline points="17 11 19 13 23 9"></polyline>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Licensed Eastern Nepal Mountain Guides</h4>
                    <p class="why-book-card-text">Our guides hold government wilderness certifications, high-altitude medical training, and multiple years of experience leading expeditions across the remote Kanchenjunga corridor.</p>
                  </div>
                </div>

                <!-- Card 2: Fair Porter Wages -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Fair Wages & Full Insurance for Porters</h4>
                    <p class="why-book-card-text">We strictly abide by the International Porter Protection Group (IPPG) guidelines, ensuring equitable wages, warm cold-weather gear, and comprehensive medical insurance for every crew member.</p>
                  </div>
                </div>

                <!-- Card 3: Medical Safety -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Daily Oximeter Checks & Medical Protocol</h4>
                    <p class="why-book-card-text">Guides conduct pulse oximeter readings and pulse rate checks twice daily (morning and evening) to detect early indicators of altitude distress before symptoms escalate.</p>
                  </div>
                </div>

                <!-- Card 4: Permit Management -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Complete Restricted Area Permit Handling</h4>
                    <p class="why-book-card-text">We handle all Nepal Immigration Restricted Area Permits (RAP) and KCAP conservation permits in advance in Kathmandu, ensuring you meet government pair-trekking regulations without administrative delay.</p>
                  </div>
                </div>

                <!-- Card 5: Emergency Satellite / Logistics -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">24/7 Kathmandu Operations & Evacuation Dispatch</h4>
                    <p class="why-book-card-text">Our Kathmandu base team coordinates daily with guides and holds direct relationships with helicopter charter operators for swift emergency medical evacuations when weather permits.</p>
                  </div>
                </div>

                <!-- Card 6: Tailored Acclimatization -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Expertly Paced 26-Day Altitude Schedule</h4>
                    <p class="why-book-card-text">Unlike rushed commercial itineraries, our route incorporates 2 dedicated rest days in Ghunsa and Khambachen, significantly enhancing success rates for the Pangpema and Sele Le crossings.</p>
                  </div>
                </div>

                <!-- Card 7: Quality Equipment Support -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Complimentary Expedition Duffle Bag</h4>
                    <p class="why-book-card-text">Receive a heavy-duty, waterproof 100L Namaste Hiking Trek duffle bag for porter transport on the trek, plus affordable rental options for -20°C sleeping bags and down jackets.</p>
                  </div>
                </div>

                <!-- Card 8: Local Village Relations -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Sustainable & Respectful Community Tourism</h4>
                    <p class="why-book-card-text">We partner directly with local family teahouse owners across Ghunsa, Khambachen, and Yamphudin, ensuring trek revenue directly benefits eastern Nepal mountain communities.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>`;

// Now replace Section 1 in index.html
let html = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8');

const sec1StartMarker = '<!-- Section 1: Overview -->';
const sec2StartMarker = '<!-- Section 2: Itinerary -->';

const startIdx = html.indexOf(sec1StartMarker);
const endIdx = html.indexOf(sec2StartMarker);

if (startIdx === -1 || endIdx === -1) {
  console.error('ERROR: Section 1 or Section 2 start markers not found!');
  process.exit(1);
}

html = html.substring(0, startIdx) + sec1Html + '\n\n          ' + html.substring(endIdx);

// Validate tag balance
const tags = ['div', 'section', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'span', 'ul', 'li', 'button', 'a', 'main', 'article'];
let allOk = true;
for (const t of tags) {
  const o = (html.match(new RegExp('<' + t + '[\\s>]', 'gi')) || []).length;
  const c = (html.match(new RegExp('</' + t + '>', 'gi')) || []).length;
  if (o !== c) {
    console.error(t + ' MISMATCH: open=' + o + ', close=' + c + ', diff=' + (o - c));
    allOk = false;
  }
}

if (!allOk) {
  console.error('Tag balance validation failed!');
  process.exit(1);
}

fs.writeFileSync('trek/kanchenjunga-base-camp-trek/index.html', html, 'utf8');
console.log('SUCCESS: Section 1 (Overview & Highlights) applied cleanly with 100% tag balance!');
