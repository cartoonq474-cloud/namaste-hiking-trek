const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'trek', 'langtang-valley-trek', 'index.html');
let html = fs.readFileSync(targetPath, 'utf8');

const s1Start = html.indexOf('<!-- Section 1: Overview -->');
const s1End = html.indexOf('<!-- Section 2: Itinerary -->');

if (s1Start === -1 || s1End === -1) {
  console.error('Could not find Section 1 boundaries!');
  process.exit(1);
}

const newSection1 = `<!-- Section 1: Overview -->
          <section id="section-overview" class="trek-detail-section">
            <h2 class="trek-section-title">Trek Overview</h2>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The 14-day Langtang Valley Trek is one of Nepal's most rewarding Himalayan journeys, combining high mountain scenery, rich Tamang culture, Tibetan-influenced Buddhist heritage, lush forests, alpine pastures, glaciers, and traditional stone settlements. Beginning from the road-accessible gateway of Syabrubesi, the trail follows the Langtang Khola north into the heart of Langtang National Park, opening into a broad high-altitude amphitheater at Kyanjin Gompa (3,800–3,870 m) beneath the towering summit of Langtang Lirung (7,245 m).
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
              Located approximately 130 kilometres north of Kathmandu near the Tibet border, Langtang offers remarkable accessibility without requiring domestic mountain flights. The route progresses smoothly through multiple ecological zones—from subtropical river valleys and blooming rhododendron woodlands to rugged glacial terrain. With dedicated acclimatization at Kyanjin Gompa and optional viewpoint ascents of Kyanjin Ri (4,773 m) and Tserko Ri (4,984 m), this package offers a complete, safe, and deeply immersive mountain experience.
            </p>
            
            <style>
              .rich-highlights-container {
                margin-top: 35px;
                padding-top: 25px;
                border-top: 1px solid var(--color-neutral-100);
              }
              .rich-highlights-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 24px 30px;
                margin-top: 24px;
              }
              .rich-highlight-item {
                display: flex;
                gap: 12px;
                align-items: flex-start;
              }
              .rich-highlight-icon-wrapper {
                flex-shrink: 0;
                margin-top: 3px;
                color: var(--color-copper-orange);
              }
              .rich-highlight-content {
                font-size: 0.98rem;
                line-height: 1.6;
                color: var(--color-neutral-700);
              }
              .rich-highlight-content strong {
                color: var(--color-primary-navy);
                font-weight: 700;
              }
              @media (max-width: 800px) {
                .rich-highlights-grid {
                  grid-template-columns: 1fr;
                  gap: 20px;
                }
              }
            </style>

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

            <div class="rich-highlights-container">
              <div style="border-left: 4px solid var(--color-copper-orange); padding-left: 14px; margin-bottom: 12px;">
                <h2 style="font-size: 1.8rem; margin: 0; color: var(--color-primary-navy); font-weight: 700;">Langtang Valley Trek Highlights</h2>
              </div>
              
              <p style="color: var(--color-neutral-600); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.6; max-width: 850px;">
                These aren’t promises pulled from a brochure — they’re the defining moments our trekkers keep mentioning in reviews, when returning to Kathmandu, and in messages months later.
              </p>
              
              <div class="rich-highlights-grid">
                <!-- 1. Syabrubesi Road Gateway -->
                <div class="rich-highlight-item">
                  <div class="rich-highlight-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="rich-highlight-content">
                    <strong>Syabrubesi Road Gateway (<span data-altitude-m="1420">1,420 m</span>).</strong> The traditional overland trailhead connected to Kathmandu by scenic highway, eliminating domestic flight delays, airport congestion, and strict baggage limits.
                  </div>
                </div>

                <!-- 2. Lower Langtang Forest Trail -->
                <div class="rich-highlight-item">
                  <div class="rich-highlight-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="rich-highlight-content">
                    <strong>Enchanted Lower Forest Trails.</strong> Atmospheric stone staircases and suspension bridges crossing the rushing Langtang Khola, shaded beneath tall oaks, blue pines, firs, and moss-draped canopies.
                  </div>
                </div>

                <!-- 3. Lama Hotel Milestone -->
                <div class="rich-highlight-item">
                  <div class="rich-highlight-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="rich-highlight-content">
                    <strong>Lama Hotel Forest Haven (<span data-altitude-m="2581">2,581 m</span>).</strong> A pivotal overnight settlement in mountain woodland that marks the transition from the warmer lower gorge to the cooler mid-altitude valley.
                  </div>
                </div>

                <!-- 4. Ghora Tabela Visual Transition -->
                <div class="rich-highlight-item">
                  <div class="rich-highlight-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="rich-highlight-content">
                    <strong>Ghora Tabela Milestone (<span data-altitude-m="3000">3,000 m</span>).</strong> Where the dense woodland opens dramatically into a broad glacial U-shaped valley, offering the first uninterrupted vistas of snow-capped Himalayan peaks.
                  </div>
                </div>

                <!-- 5. Langtang Village & Cultural Heritage -->
                <div class="rich-highlight-item">
                  <div class="rich-highlight-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="rich-highlight-content">
                    <strong>Langtang Village & Mundu (<span data-altitude-m="3307">3,307–3,550 m</span>).</strong> Rebuilt Tamang communities demonstrating immense resilience, featuring stone-masonry lodges, spinning prayer wheels, and Tibetan-influenced architecture.
                  </div>
                </div>

                <!-- 6. Kyanjin Gompa Destination -->
                <div class="rich-highlight-item">
                  <div class="rich-highlight-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="rich-highlight-content">
                    <strong>Kyanjin Gompa Upper Settlement (<span data-altitude-m="3800">3,800–3,870 m</span>).</strong> The spiritual heart and highest principal settlement of the trek, set in a vast alpine amphitheater flanked by giant moraines and sacred shrines.
                  </div>
                </div>

                <!-- 7. Langtang Lirung -->
                <div class="rich-highlight-item">
                  <div class="rich-highlight-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="rich-highlight-content">
                    <strong>Langtang Lirung Sovereign Wall (<span data-altitude-m="7245">7,245 m</span>).</strong> Dominating the entire upper valley, this colossal peak rises over 3,400 meters above your teahouse, showcasing hanging glaciers and thunderous icefalls.
                  </div>
                </div>

                <!-- 8. Dorje Lakpa Panorama -->
                <div class="rich-highlight-item">
                  <div class="rich-highlight-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="rich-highlight-content">
                    <strong>Dorje Lakpa (<span data-altitude-m="6989">6,989 m</span>) & Jugal Himal.</strong> An interconnected wall of ice pyramids and jagged ridges forming the eastern head of the valley toward the Tibetan frontier.
                  </div>
                </div>

                <!-- 9. Kyanjin Ri Viewpoint -->
                <div class="rich-highlight-item">
                  <div class="rich-highlight-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="rich-highlight-content">
                    <strong>Panoramic Summit of Kyanjin Ri (<span data-altitude-m="4773">4,773 m</span>).</strong> An exhilarating morning ridge climb directly from Kyanjin Gompa rewarding trekkers with 360-degree views across glaciers, moraines, and 20+ peaks.
                  </div>
                </div>

                <!-- 10. Tserko Ri Viewpoint -->
                <div class="rich-highlight-item">
                  <div class="rich-highlight-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="rich-highlight-content">
                    <strong>Tserko Ri High Expedition (<span data-altitude-m="4984">4,984 m</span>).</strong> A demanding full-day viewpoint for well-acclimatized trekkers, delivering an eagle-eye perspective into the remote Langshisa glacier basin.
                  </div>
                </div>

                <!-- 11. Langtang National Park Ecology -->
                <div class="rich-highlight-item">
                  <div class="rich-highlight-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="rich-highlight-content">
                    <strong>Langtang National Park Sanctuary.</strong> Nepal's first Himalayan national park established in 1976 (1,710 sq km), protecting unique ecosystems from subtropical riverbanks to high alpine meadows.
                  </div>
                </div>

                <!-- 12. Spring Rhododendron Forests -->
                <div class="rich-highlight-item">
                  <div class="rich-highlight-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="rich-highlight-content">
                    <strong>Rhododendron Canopies in Bloom.</strong> From March to May, wild rhododendrons burst into vibrant shades of crimson, pink, and white along the trail, contrasted against snow-covered peaks.
                  </div>
                </div>

                <!-- 13. Glaciers and Ice Landscapes -->
                <div class="rich-highlight-item">
                  <div class="rich-highlight-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="rich-highlight-content">
                    <strong>Glaciers & Alpine Icefalls.</strong> Close encounters with the lateral moraines, debris-covered glaciers, and glacial meltstreams carving the upper valley floor beyond Kyanjin Gompa.
                  </div>
                </div>

                <!-- 14. Living Tamang Culture -->
                <div class="rich-highlight-item">
                  <div class="rich-highlight-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="rich-highlight-content">
                    <strong>Authentic Tamang Cultural Immersion.</strong> Moving through living communities where local language, handwoven clothing, stone chortens, and everyday traditions remain deeply rooted.
                  </div>
                </div>

                <!-- 15. Wildlife & Red Panda Habitat -->
                <div class="rich-highlight-item">
                  <div class="rich-highlight-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="rich-highlight-content">
                    <strong>Protected Wildlife Habitat.</strong> Trekking through prime habitat for rare red pandas, Himalayan tahr, musk deer, gray langurs, and iridescent danphe pheasants.
                  </div>
                </div>

                <!-- 16. Kyanjin Yak Cheese & Teahouse Warmth -->
                <div class="rich-highlight-item">
                  <div class="rich-highlight-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="rich-highlight-content">
                    <strong>Artisanal Yak Cheese & Teahouse Dining.</strong> Visiting the high-altitude Swiss-assisted cheese factory at Kyanjin Gompa and sharing evenings beside warm lodge hearths over fresh dal bhat.
                  </div>
                </div>
              </div>
            </div>

            <style>
              .why-book-container {
                margin-top: 45px;
                padding-top: 35px;
                border-top: 1px solid var(--color-neutral-100);
              }
              .why-book-title-wrapper {
                border-left: 4px solid var(--color-copper-orange);
                padding-left: 14px;
                margin-bottom: 16px;
              }
              .why-book-title {
                font-size: 1.8rem;
                margin: 0;
                color: var(--color-primary-navy);
                font-weight: 700;
              }
              .why-book-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 24px;
                margin-top: 30px;
              }
              .why-book-card {
                background: var(--color-white);
                border: 1px solid #e2e8f0;
                border-radius: 16px;
                padding: 24px;
                display: flex;
                gap: 16px;
                transition: all var(--transition-fast);
              }
              .why-book-card:hover {
                border-color: var(--color-copper-orange);
                box-shadow: 0 10px 25px rgba(16, 185, 129, 0.08);
                transform: translateY(-2px);
              }
              .why-book-icon-box {
                flex-shrink: 0;
                width: 44px;
                height: 44px;
                background: rgba(16, 185, 129, 0.08);
                color: var(--color-copper-orange);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .why-book-card-content {
                display: flex;
                flex-direction: column;
                gap: 6px;
              }
              .why-book-card-title {
                font-size: 1.05rem;
                font-weight: 700;
                color: var(--color-primary-navy);
                line-height: 1.4;
              }
              .why-book-card-text {
                font-size: 0.92rem;
                line-height: 1.6;
                color: var(--color-neutral-600);
              }
              @media (max-width: 800px) {
                .why-book-grid {
                  grid-template-columns: 1fr;
                  gap: 16px;
                }
              }
            </style>

            <div class="why-book-container">
              <div class="why-book-title-wrapper">
                <h2 class="why-book-title">Why Book the Langtang Valley Trek with Namaste Hiking Trek?</h2>
              </div>
              
              <p style="color: var(--color-neutral-600); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.6; max-width: 850px;">
                Most agencies can arrange transport to Syabrubesi. The real difference lies in what happens across the full journey—certified altitude leadership, local lodge relationships, and responsive safety protocols. These are the qualities our guests from around the world highlight in their <a href="https://www.tripadvisor.com" target="_blank" style="color: var(--color-copper-orange); text-decoration: underline; font-weight: 600;">TripAdvisor reviews</a>. Ranked among the top agencies in Nepal, our reputation is built on dedicated care on every single departure.
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
                    <h4 class="why-book-card-title">Langtang Specialist Guides with Years of Experience</h4>
                    <p class="why-book-card-text">Our guides are licensed wilderness leaders who know the Langtang trail intimately. They understand local microclimates, lodge hosts, trail conditions, and know exactly how to manage your pace so you arrive at Kyanjin Gompa feeling strong and well-acclimatized.</p>
                  </div>
                </div>

                <!-- Card 2: 100% Guaranteed departures -->
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
                    <h4 class="why-book-card-title">100% Guaranteed Departures</h4>
                    <p class="why-book-card-text">Every scheduled date runs without cancellation. Whether you join as a solo trekker or with friends, your trip is locked in without minimum participant thresholds.</p>
                  </div>
                </div>

                <!-- Card 3: You see your group -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Connect with Your Group Before Departure</h4>
                    <p class="why-book-card-text">Through our secure client portal, you can see who is joining your trek—nationalities, names, and group details—allowing you to connect on WhatsApp before arriving in Kathmandu.</p>
                  </div>
                </div>

                <!-- Card 4: Pre-trek briefing -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Detailed Office Pre-Trek Briefing</h4>
                    <p class="why-book-card-text">We sit down together in Kathmandu to inspect your equipment, verify medical preparation, review the elevation profile, and address every practical question before heading to the trailhead.</p>
                  </div>
                </div>

                <!-- Card 5: 24/7 replies -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Real People Available 24/7 on WhatsApp</h4>
                    <p class="why-book-card-text">Lal, Kamal, and Hemlal personally respond to inquiries and coordinate trip operations. During Nepal hours we reply within minutes, keeping you fully supported before, during, and after your trek.</p>
                  </div>
                </div>

                <!-- Card 6: Private airport pickup -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                      <circle cx="7" cy="17" r="2"></circle>
                      <circle cx="15" cy="17" r="2"></circle>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Private Airport Transfers Included</h4>
                    <p class="why-book-card-text">A private driver greets you at Tribhuvan International Airport with a personalized Namaste Hiking Trek name board and transfers you directly to your hotel in Thamel.</p>
                  </div>
                </div>

                <!-- Card 7: Gear Rentals -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20.38 3.46L16 2.14a1 1 0 0 0-1 0L3.62 9.24a1 1 0 0 0-.5.85v8.5a1 1 0 0 0 1 1h16.76a1 1 0 0 0 1-1v-14a1 1 0 0 0-.5-.85zM6.5 12h11M6.5 16h11"></path>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Tested Down Jackets & Sleeping Bags</h4>
                    <p class="why-book-card-text">Rent high-grade four-season down jackets and -20°C sleeping bags directly from our Kathmandu equipment store at nominal rates, eliminating the need to buy bulky winter gear at home.</p>
                  </div>
                </div>

                <!-- Card 8: Duffle bag -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Complimentary Heavy-Duty Duffle Bag</h4>
                    <p class="why-book-card-text">We provide a rugged, weather-resistant Namaste Hiking Trek duffle bag for your porter luggage, pre-sized to protect your belongings and comply with mountain weight limits.</p>
                  </div>
                </div>

                <!-- Card 9: Booking System -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="2" y1="10" x2="22" y2="10"></line>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Streamlined Online Booking Portal</h4>
                    <p class="why-book-card-text">Secure online card payments, easy passport and insurance uploads, and direct itinerary tracking without endless back-and-forth emails.</p>
                  </div>
                </div>

                <!-- Card 10: 24/7 Emergency Support -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="4"></circle>
                      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                      <line x1="19.07" y1="4.93" x2="14.83" y2="9.17"></line>
                      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                      <line x1="9.17" y1="14.83" x2="4.93" y2="19.07"></line>
                    </svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Daily Health Monitoring & Rapid Rescue</h4>
                    <p class="why-book-card-text">Every guide carries a pulse oximeter for daily oxygen and pulse checks at breakfast and dinner. In the event of acute altitude illness or injury, our Kathmandu headquarters coordinates immediate helicopter extraction.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>\n\n          `;

html = html.substring(0, s1Start) + newSection1 + html.substring(s1End);
fs.writeFileSync(targetPath, html, 'utf8');
console.log('Section 1 updated successfully. New length:', html.length);
