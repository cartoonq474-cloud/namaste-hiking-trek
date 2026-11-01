const fs = require('fs');

const pStyle = `style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;"`;
const h3SubtitleStyle = `class="trek-overview-subtitle" style="font-size: 1.4rem; color: var(--color-primary-navy); font-weight: 700; margin-top: 32px; margin-bottom: 12px; line-height: 1.35;"`;

// Read the deep 16 highlights component from scratch/evt_highlights_upgraded.html
const deepHighlightsContent = fs.readFileSync('scratch/evt_highlights_upgraded.html', 'utf8').trim();

let html = `        <!-- SECTION 1: OVERVIEW -->
        <section id="section-overview" class="trek-detail-section">
          <h2 class="trek-section-title">Trek Overview</h2>

          <p ${pStyle}>
            The Everest View Trek is a rewarding short Himalayan journey through the heart of Nepal's Khumbu region, taking you from the mountain airstrip of Lukla through pine-scented river gorges, vibrant Sherpa settlements, Buddhist monasteries, and some of the most celebrated mountain viewpoints in the world. Designed specifically for travelers who want to experience the grandeur of Mount Everest without the strenuous physical commitment and extreme altitude of the 14-day Base Camp expedition, this 7-day route culminates at the iconic Hotel Everest View at <span data-altitude-m="3880">3,880 m (12,729 ft)</span>.
          </p>
          <p ${pStyle}>
            While the summit of Mount Everest stands at an imposing <span data-altitude-m="8848">8,848.86 m</span>, the perspective from the high ridge above Namche Bazaar is widely regarded as one of the finest in the Himalayas. From the panoramic terrace of Hotel Everest View, Everest, Lhotse (<span data-altitude-m="8516">8,516 m</span>), Nuptse (<span data-altitude-m="7861">7,861 m</span>), Thamserku (<span data-altitude-m="6623">6,623 m</span>), and the majestic soaring spire of Ama Dablam (<span data-altitude-m="6812">6,812 m</span>) form an uninterrupted high-altitude amphitheater. In many ways, this vantage point offers a broader and more photogenic view of Everest than Base Camp itself, where the summit is often obscured by Nuptse's western ridge.
          </p>
          <p ${pStyle}>
            The journey is as much about cultural immersion as it is about mountain landscapes. You follow the Dudh Koshi River Valley across high steel suspension bridges draped with colorful prayer flags, enter Sagarmatha National Park (a UNESCO World Heritage Site), walk past sacred Mani walls and chortens, and spend nights in authentic, locally operated Sherpa mountain teahouses. In Namche Bazaar—the historic trading hub and Sherpa capital—and the traditional twin villages of Khumjung and Khunde, the trail becomes a living encounter with Sherpa heritage, mountaineering lore, and warm Himalayan hospitality.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
            Our 7-day itinerary is intentionally paced to maximize acclimatization safety and travel comfort. By scheduling three consecutive nights in Namche Bazaar at <span data-altitude-m="3440">3,440 m</span>, our route strictly follows the proven mountaineering rule of &quot;climb high, sleep low.&quot; You undertake an active day hike up to the Everest View Hotel and traditional villages before returning to sleep at a stable altitude, providing an unhurried, luxurious introduction to the world's highest mountains.
          </p>

          <!-- 1A: Canonical Editorial Subsections -->
          <h3 ${h3SubtitleStyle}>What the Everest View Trek is really like?</h3>
          <p ${pStyle}>
            Trekking through the Khumbu region on the 7-day Everest View Trek provides an intimate, deeply immersive taste of Himalayan adventure without requiring technical mountaineering experience or extreme high-altitude endurance. Each morning begins with crisp mountain air, steaming cups of milk tea, and panoramic views of rocky peaks catching the early morning sunlight. Walking days typically start around 7:30 to 8:00 AM, following well-defined stone trails that wind alongside the glacial torrent of the Dudh Koshi River before climbing through forested hillsides to Namche Bazaar.
          </p>
          <p ${pStyle}>
            Expect approximately 3 to 6 hours of walking on most trekking days, combining gradual riverside paths, stone staircases, thrilling suspension bridges, and sustained uphill ascents. The terrain does not involve technical climbing, glacier walking, or ropes, but the elevation gain requires reasonable cardiovascular endurance. The physical highlight is the steady 2.5-hour ascent from the Hillary Suspension Bridge through pine forests up to Namche Bazaar, where you gain approximately 600 vertical meters. Along the way, you share the stone trail with friendly local Sherpa families, trekking groups from around the globe, and sturdy pack trains of dzo and mules carrying supplies.
          </p>
          <p ${pStyle}>
            Accommodations along the route consist of welcoming, family-run mountain teahouses in Phakding and Namche Bazaar. Unlike higher, more remote sections of the Khumbu, lodges in these lower settlements are well-developed, offering comfortable twin-bed rooms (frequently with attached private bathrooms), electric charging facilities, hot gas showers, and heated dining halls warmed by wood-burning stoves. In the evenings, trekkers gather around the stove to enjoy hearty Nepali Dal Bhat, hot noodle soups, and freshly baked bakery treats while discussing the day's journey.
          </p>

          <h3 ${h3SubtitleStyle}>From Lukla to Namche Bazaar and Hotel Everest View</h3>
          <p ${pStyle}>
            The classic route follows the historical approach trail carved out by early mountaineering expeditions. After an exhilarating 30-minute mountain flight from Kathmandu (or Ramechhap/Manthali during peak seasons) into Tenzing-Hillary Airport at Lukla (<span data-altitude-m="2860">2,860 m</span>), you meet your guide and porters and descend through gentle farmland to Phakding (<span data-altitude-m="2610">2,610 m</span>). The lower altitude of Phakding allows for an easy first day, easing your muscles into the walking rhythm before the elevation increases.
          </p>
          <p ${pStyle}>
            On Day 2, the trail enters Sagarmatha National Park at Monjo, crossing the famous double suspension bridges high above the river chasm before tackling the steep forested zig-zags up to Namche Bazaar (<span data-altitude-m="3440">3,440 m</span>). Emerging onto the rim of Namche's natural mountain amphitheater is an unforgettable milestone. Colorful tin-roofed lodges, bakeries, cafes, gear shops, and prayer flag poles cascade down the terraced bowl, with the soaring white pyramid of Kongde Ri rising behind.
          </p>
          <p ${pStyle}>
            The architectural climax of the journey takes place on Day 4, when you hike up past the Syangboche airstrip to Hotel Everest View (<span data-altitude-m="3880">3,880 m</span>). Perched atop a forested ridge, this world-renowned landmark provides an unobstructed, front-row panorama of Mount Everest, Lhotse, and Ama Dablam. Savoring hot coffee on the hotel's sunlit terrace while admiring the world's highest peak is widely considered one of the pinnacle experiences in the entire Himalayas.
          </p>

          <h3 ${h3SubtitleStyle}>More than a mountain trek: Sherpa Heritage &amp; Sacred Khumbu</h3>
          <p ${pStyle}>
            While the jagged skyline of Everest commands international attention, the living soul of this journey lies in the Sherpa villages and Tibetan Buddhist cultural landmarks of the Khumbu Valley. The Sherpa people migrated from eastern Tibet over five centuries ago, creating a resilient, deeply spiritual mountain society in harmony with the extreme environment. Throughout the trail, you encounter physical expressions of this sacred relationship: carved mani stones engraved with the compassion mantra <em>Om Mani Padme Hum</em>, whitewashed stupas (chortens), spinning prayer wheels, and thousands of multi-colored prayer flags carrying blessings across the mountain valleys.
          </p>
          <p ${pStyle}>
            During our exploration beyond Hotel Everest View, we visit the serene twin villages of Khumjung (<span data-altitude-m="3790">3,790 m</span>) and Khunde (<span data-altitude-m="3840">3,840 m</span>). Surrounded by stone-walled potato plots and sacred juniper trees beneath Mount Khumbila, these tranquil settlements offer a glimpse into authentic Sherpa village life away from the commercial trekking thoroughfare. In Khumjung, you can visit the ancient Khumjung Gompa, famous for housing an enigmatic preserved &quot;Yeti Scalp&quot; relic, as well as the Hillary School, founded in 1961 by Sir Edmund Hillary. In neighboring Khunde, the Khunde Hospital stands as a testament to the enduring humanitarian bond between Himalayan mountaineers and local communities.
          </p>

          <h3 ${h3SubtitleStyle}>Is the Everest View Trek right for you?</h3>
          <p ${pStyle}>
            The Everest View Trek is exceptionally well-suited for travelers seeking a world-class Himalayan trekking experience without committing to a grueling multi-week expedition. With a maximum elevation of <span data-altitude-m="3880">3,880 m</span> at Hotel Everest View and a highest overnight sleeping elevation of <span data-altitude-m="3440">3,440 m</span> in Namche Bazaar, the route stays well below the 5,000+ meter threshold where severe acute mountain sickness (AMS) risks multiply significantly. This makes it an ideal adventure for active beginners, couples, photographers, busy professionals with limited vacation time, and families trekking with teenagers.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 32px; line-height: 1.7;">
            While moderate in difficulty, the trek still involves walking 8 to 12 kilometers per day over rocky trails, ascending steep stone staircases, and navigating thinner mountain air. Preparation should include regular cardiovascular workouts (hiking, jogging, stair climbing) for 4 to 6 weeks before departure. If you are looking for an inspiring, comfortable, and culturally enriching encounter with Mount Everest that balances adventure with reliable teahouse comfort, this 7-day trek is the ultimate Himalayan introduction.
          </p>

${deepHighlightsContent.replace('<!-- 1B: Distinct Highlights Section -->\n          <div class="ebc-highlights-section">', '<!-- 1B: Distinct Highlights Section -->\n          <div class="ebc-highlights-section">')}

            <!-- At a Glance: Feature Box -->
            <div class="ebc-glance-box">
              <div class="ebc-glance-header">
                <div style="width: 36px; height: 36px; border-radius: 10px; background: rgba(217, 119, 6, 0.12); color: var(--color-copper-orange); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 11l3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <h3>At a glance: the highlights you will experience on the Everest View Trek</h3>
              </div>

              <div class="ebc-glance-grid">
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Hotel Everest View Terrace:</strong> Savor morning tea overlooking Mount Everest (<span data-altitude-m="8848">8,848.86 m</span>), Lhotse, and Ama Dablam from <span data-altitude-m="3880">3,880 m</span>.</div>
                </div>
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Namche Bazaar Hub:</strong> Three consecutive nights in the Khumbu's trading capital (<span data-altitude-m="3440">3,440 m</span>) with cafes, bakeries, and Sherpa markets.</div>
                </div>
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Lukla Mountain Flight:</strong> Thrilling STOL aircraft flight into Tenzing-Hillary Airport (<span data-altitude-m="2860">2,860 m</span>), the gateway to Everest.</div>
                </div>
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Hillary Suspension Bridge:</strong> Cross the famous high suspension bridge spanning the roaring Dudh Koshi river gorge.</div>
                </div>
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Sagarmatha National Park:</strong> Trek through a UNESCO World Heritage landscape of pine and rhododendron forests beneath snow peaks.</div>
                </div>
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Khumjung Village &amp; Monastery:</strong> Explore the traditional green-roofed settlement and see the historic yeti scalp relic.</div>
                </div>
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Hillary School &amp; Khunde Hospital:</strong> Witness Sir Edmund Hillary's enduring philanthropic legacy in the high Himalayas.</div>
                </div>
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Sherpa Culture &amp; Buddhist Traditions:</strong> Pass ancient Mani stone walls (clockwise), chortens, and colorful prayer flags.</div>
                </div>
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Comfortable Teahouse Living:</strong> Stay in the region's best-developed lodges with attached bathrooms and warm dining hall stoves.</div>
                </div>
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Himalayan Wildlife:</strong> Spot Himalayan tahr, musk deer, and Nepal's national bird (Danphe) along forest trails.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 1C: Why Book With Us Section -->
          <div class="why-book-container">
            <div class="why-book-title-wrapper">
              <h2 class="why-book-title">Why Book the Everest View Trek with Namaste Hiking Trek?</h2>
            </div>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 20px; line-height: 1.7;">
              Planning a Himalayan journey requires more than just an itinerary—it requires authentic local expertise, reliable logistics, fair treatment of mountain crew, and responsive care from people who live and work in Nepal. Here is why travelers worldwide trust Namaste Hiking Trek for their Khumbu adventure:
            </p>
            <div class="why-book-grid">
              <!-- Card 1: Guides -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">Local Sherpa Guides with 6 to 10+ Years Experience</div>
                  <p class="why-book-card-text">Not seasonal hires—our lead guides (Sujan, Sharad, Bishal, Sandip, Biraj, Pradip) are licensed veterans who grew up in the Himalayas and undergo annual Wilderness First Aid certification.</p>
                </div>
              </div>

              <!-- Card 2: 100% Guaranteed departures -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">100% Guaranteed Departures</div>
                  <p class="why-book-card-text">Once your booking is confirmed, your trek runs. We never cancel departures due to low participant numbers, ensuring your international travel plans are completely secure.</p>
                </div>
              </div>

              <!-- Card 3: You see your group -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">Small Groups (Max 8) with Real-Time Profiles</div>
                  <p class="why-book-card-text">We keep group sizes small for personalized pacing and intimate cultural encounters. On our live dates system, you can see group member profiles, ages, and nationalities before departure.</p>
                </div>
              </div>

              <!-- Card 4: Safety protocols -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">Rigorous Medical Safety Protocol</div>
                  <p class="why-book-card-text">Your lead guide carries an FAA-approved pulse oximeter for twice-daily SpO2 and pulse readings, a comprehensive alpine first aid medical kit, and maintains direct satellite phone communication.</p>
                </div>
              </div>

              <!-- Card 5: Ethically treated porters -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">Fair Pay &amp; Full Insurance for All Mountain Crew</div>
                  <p class="why-book-card-text">We adhere strictly to IPPG guidelines: maximum 20kg porter load limit (1 porter for 2 trekkers), fair wages, warm mountaineering gear, shelter, and full medical/evacuation insurance coverage.</p>
                </div>
              </div>

              <!-- Card 6: Teahouse quality -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">Hand-Picked Teahouses with Private Rooms</div>
                  <p class="why-book-card-text">We pre-book clean, comfortable lodges in Phakding and Namche Bazaar featuring private twin rooms with attached bathrooms where available, ensuring peaceful rest after walking days.</p>
                </div>
              </div>

              <!-- Card 7: Free flexibility -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">Free Date Changes &amp; Lifetime Deposit</div>
                  <p class="why-book-card-text">Life happens. If your travel dates change, transfer your deposit to any future departure or alternate Nepal trek at zero penalty. Your deposit never expires with Namaste Hiking Trek.</p>
                </div>
              </div>

              <!-- Card 8: Transparent pricing -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">Transparent Pricing with No Hidden Costs</div>
                  <p class="why-book-card-text">All permits (Sagarmatha National Park + Khumbu Pasang Lhamu), domestic flights (KTM/Ramechhap-Lukla return), meals on trek, licensed guide, and porters are fully covered with zero surprise fees.</p>
                </div>
              </div>

              <!-- Card 9: 24/7 Kathmandu support -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">24/7 Kathmandu Operations Desk</div>
                  <p class="why-book-card-text">From airport meet-and-greets in Kathmandu to flight weather monitoring and helicopter evacuation coordination, our Kathmandu operations team backs your mountain crew around the clock.</p>
                </div>
              </div>

              <!-- Card 10: Environmental care -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">Sustainable &amp; Responsible Himalayan Tourism</div>
                  <p class="why-book-card-text">We enforce strict Leave No Trace mountain ethics, encourage water purification over single-use plastic bottles, and support local Khumbu communities by patronizing family-run lodges.</p>
                </div>
              </div>
            </div>
          </div>

        </section>`;

// Notice that in deepHighlightsContent, line 2 is: <div class="ebc-highlights-section">
// and line 269 is: </div> (closing ebc-highlights-section).
// But deepHighlightsContent has its own closing </div>!
// If we append deepHighlightsContent, we want ebc-glance-box to be inside ebc-highlights-section, OR we close ebc-highlights-section after ebc-glance-box!
// Let's ensure ebc-highlights-section wraps both the grid and the glance box:
// Remove the final </div> from deepHighlightsContent so ebc-glance-box is nested inside, and then close it at line 265 above!
// Let's check deepHighlightsContent:
const innerHighlights = deepHighlightsContent.replace(/<\/div>\s*$/, ''); // removes the trailing </div> of ebc-highlights-section

html = html.replace(deepHighlightsContent, innerHighlights);

fs.writeFileSync('scratch/evt_section1_upgraded.html', html, 'utf8');
console.log('Successfully written scratch/evt_section1_upgraded.html! Length:', html.length);
