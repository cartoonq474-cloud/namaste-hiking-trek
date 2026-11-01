const fs = require('fs');

console.log('Generating authentic Section 1 for Khopra Ridge Trek...');

const section1Html = `<!-- Section 1: Overview -->
          <section id="section-overview" class="trek-detail-section">
            <h2 class="trek-section-title">Trek Overview</h2>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The Khopra Ridge Trek is a 15-day Himalayan trekking adventure in Nepal's Annapurna region, combining spectacular mountain panoramas, traditional Gurung and Magar villages, pristine forest trails, community-managed lodges, and a strenuous high-altitude excursion to sacred Khayer Lake (<span data-altitude-m="4700">4,700 m</span>). Also known as the Khopra Danda Trek, this route is an exceptional choice for travelers seeking an authentic alternative to the busiest Annapurna corridors while still enjoying unmatched close-up vistas of the massive Annapurna and Dhaulagiri mountain ranges.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The journey begins in Kathmandu and continues to the lakeside city of Pokhara before reaching the traditional Gurung cultural village of Ghandruk (<span data-altitude-m="1940">1,940 m</span>), where the walking portion of the trek commences. From Ghandruk, the trail climbs steadily through the moss-draped rhododendron woods of Tadapani (<span data-altitude-m="2630">2,630 m</span>), the alpine pastures of Bayeli Kharka (<span data-altitude-m="3460">3,460 m</span>), and the intermediate staging stop of Upper Chistibung (<span data-altitude-m="2950">2,950 m</span>) toward Khopra Ridge (<span data-altitude-m="3660">3,660 m</span>). Situated along a high vantage directly opposite the massive south face of Annapurna and the towering pyramid of Dhaulagiri (<span data-altitude-m="8167">8,167 m</span>), Khopra Ridge delivers one of the most breathtaking panoramic viewpoints in all of Nepal.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              A major highlight of this expedition is the demanding out-and-back day excursion to Khayer Lake, situated at approximately <span data-altitude-m="4700">4,700 metres</span>. Sacred to both Hindu and Buddhist pilgrims who visit during the Janai Purnima festival, this remote glacial lake rests in an austere, high-alpine basin surrounded by hanging glaciers and rocky moraines. After completing the lake hike, the trail descends through the tranquil farming hamlet of Swanta (<span data-altitude-m="2260">2,260 m</span>) before connecting with the famous ridgelines of Ghorepani, Poon Hill (<span data-altitude-m="3210">3,210 m</span>), and Mohare Hill (<span data-altitude-m="3300">3,300 m</span>), descending finally to Tikhedhunga (<span data-altitude-m="1480">1,480 m</span>) and returning to Pokhara and Kathmandu.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
              This combination of ridge walking, high-altitude alpine exploration, community-based hospitality, and multi-viewpoint mountain photography makes the Khopra Ridge Trek truly distinctive. Our comprehensive 15-day package provides full logistics, official ACAP permits, dedicated local guide and porter crews, and balanced acclimatization to ensure a safe, enriching, and unforgettable Himalayan experience.
            </p>

            <!-- WhatsApp & Phone Expert Guide CTA Banner -->
            <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.04) 100%); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: var(--radius-md); padding: 22px 26px; margin: 28px 0 35px 0; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap;">
              <div style="display: flex; align-items: center; gap: 16px; max-width: 580px;">
                <div style="width: 48px; height: 48px; border-radius: 50%; background: #10b981; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: white;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 4px;">Have Questions About Khopra Ridge & Khayer Lake?</h4>
                  <p style="font-size: 0.92rem; color: var(--color-neutral-600); margin: 0; line-height: 1.5;">Connect directly with our lead Annapurna mountain guide on WhatsApp for real-time trail updates, lake conditions, and customized departure dates.</p>
                </div>
              </div>
              <div style="display: flex; gap: 10px; align-items: center;">
                <a href="https://wa.me/9779800000000" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 8px; background: #25D366; color: white; padding: 10px 18px; border-radius: 6px; font-weight: 600; font-size: 0.95rem; text-decoration: none; box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3); transition: all 0.2s;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.333 4.988l-1.417 5.176 5.297-1.389c1.458.796 3.103 1.215 4.773 1.216h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.669-1.039-5.176-2.926-7.063a9.923 9.923 0 0 0-7.063-2.927zm0 1.666c4.587 0 8.324 3.737 8.324 8.324 0 2.224-.866 4.314-2.441 5.889a8.272 8.272 0 0 1-5.888 2.438h-.003c-1.493 0-2.955-.399-4.232-1.156l-.304-.18-3.14.823.837-3.058-.198-.315a8.283 8.283 0 0 1-1.272-4.444c.001-4.587 3.739-8.324 8.326-8.324zm-3.626 4.321c-.227 0-.594.085-.905.424-.311.339-1.187 1.159-1.187 2.825 0 1.666 1.216 3.277 1.385 3.503.17.226 2.392 3.652 5.795 5.122.81.35 1.442.559 1.936.716.814.258 1.554.222 2.139.135.652-.097 2.007-.82 2.29-1.611.283-.791.283-1.469.198-1.611-.085-.141-.311-.226-.65-.396s-2.007-.99-2.318-1.103c-.311-.113-.538-.17-.764.17s-.877 1.103-1.075 1.329c-.198.226-.396.254-.735.085-.339-.17-1.433-.528-2.73-1.685-1.01-.901-1.691-2.013-1.89-2.352-.198-.339-.021-.522.148-.691.153-.153.339-.396.509-.594.17-.198.226-.339.339-.565.113-.226.057-.424-.028-.594-.085-.17-.764-1.838-1.047-2.516-.275-.661-.555-.572-.764-.582-.198-.01-.424-.012-.651-.012z"/>
                  </svg>
                  Chat with Guide
                </a>
              </div>
            </div>

            <!-- Subsection 1 -->
            <h3 class="trek-overview-subtitle">What is the Khopra Ridge Trek?</h3>
            <p style="color: var(--color-neutral-700); font-size: 1rem; margin-bottom: 20px; line-height: 1.7;">
              Khopra Ridge is a high mountain ridge in the southern Annapurna region, commonly known among trekkers and locals as Khopra Danda. It is valued for its expansive, unobstructed views of the surrounding Himalayan ranges and its remarkably quieter trekking environment compared with Nepal's more heavily visited corridors. The trail traverses a diverse succession of ecological zones, beginning with lush inhabited river valleys and terraced hillsides before climbing into rhododendron woodlands, subalpine pastures, and exposed alpine ridgelines.
            </p>

            <!-- Subsection 2 -->
            <h3 class="trek-overview-subtitle">Explore the Annapurna and Dhaulagiri mountain ranges</h3>
            <p style="color: var(--color-neutral-700); font-size: 1rem; margin-bottom: 20px; line-height: 1.7;">
              The Himalayan scenery is one of the strongest reasons to choose the Khopra Ridge Trek. Situated at <span data-altitude-m="3660">3,660 metres</span>, the ridge acts as a natural grandstand directly overlooking the world's deepest river valley—the Kali Gandaki Gorge. To the west, the immense, ice-fluted bulk of Mount Dhaulagiri (<span data-altitude-m="8167">8,167 m</span>)—the world's seventh-highest peak—dominates the skyline. To the east and north, Annapurna South (<span data-altitude-m="7219">7,219 m</span>), Hiunchuli (<span data-altitude-m="6441">6,441 m</span>), Nilgiri (<span data-altitude-m="7061">7,061 m</span>), and the sacred fluted pinnacle of Machapuchare (Fishtail, <span data-altitude-m="6993">6,993 m</span>) stand in breathtaking proximity.
            </p>

            <!-- Subsection 3 -->
            <h3 class="trek-overview-subtitle">A quieter alternative in the Annapurna region</h3>
            <p style="color: var(--color-neutral-700); font-size: 1rem; margin-bottom: 20px; line-height: 1.7;">
              While well-known destinations such as Ghorepani and Poon Hill attract thousands of trekkers every season, the detour northward through Bayeli Kharka, Upper Chistibung, and Khopra Ridge branches onto a much quieter trail network. Here, you hike along narrow forest tracks with only the sounds of mountain birds and wind through the pines. Stays at community-managed lodges provide an intimate, unhurried atmosphere far removed from the commercial bustle of mainstream trekking hubs.
            </p>

            <!-- Subsection 4 -->
            <h3 class="trek-overview-subtitle">The community lodge experience</h3>
            <p style="color: var(--color-neutral-700); font-size: 1rem; margin-bottom: 20px; line-height: 1.7;">
              Community-based accommodation is a foundational pillar of the Khopra Ridge route. Developed to channel trekking revenue directly into local village education, healthcare, and infrastructure, these lodges are managed by local communities. The facilities are simple, clean, and authentic, offering comfortable twin beds, hearty home-cooked meals in communal dining rooms heated by wood stoves, and genuine mountain hospitality. Staying in community lodges ensures your tourism spending directly sustains local mountain livelihoods.
            </p>

            <!-- Subsection 5 -->
            <h3 class="trek-overview-subtitle">Experience traditional villages and local culture</h3>
            <p style="color: var(--color-neutral-700); font-size: 1rem; margin-bottom: 20px; line-height: 1.7;">
              The trek winds through historic villages where daily life remains deeply tied to agriculture, animal husbandry, and ancestral customs. Ghandruk is renowned as the cultural capital of the Gurung people, featuring traditional slate-roofed stone houses, Buddhist prayer flags, and a rich military heritage connected to the British Gurkha regiments. Farther along the route, Magar communities in Swanta and Ulleri welcome travelers with rich traditions, terraced farmlands, and warm Himalayan smiles.
            </p>

            <!-- Subsection 6 -->
            <h3 class="trek-overview-subtitle">Khayer Lake: a high-altitude trekking excursion</h3>
            <p style="color: var(--color-neutral-700); font-size: 1rem; margin-bottom: 20px; line-height: 1.7;">
              Situated above Khopra Ridge in an austere alpine cirque at approximately <span data-altitude-m="4700">4,700 metres</span>, sacred Khayer Lake is the crowning objective of the trek. Reached via a demanding out-and-back day hike of 7 to 9 hours, the trail ascends steep moraines and exposed rocky slopes directly beneath the glaciated south face of Annapurna South. Dedicated to the Hindu goddess Khayer Barahi, the lake possesses profound spiritual significance, and reaching its icy turquoise waters provides a deep sense of mountaineering accomplishment.
            </p>

            <!-- Subsection 7 -->
            <h3 class="trek-overview-subtitle">Poon Hill and Mohare Hill viewpoints</h3>
            <p style="color: var(--color-neutral-700); font-size: 1rem; margin-bottom: 20px; line-height: 1.7;">
              In addition to Khopra Ridge, our 15-day itinerary incorporates two other legendary Himalayan viewpoints. On Day 11, we undertake the iconic pre-dawn walk to Poon Hill (<span data-altitude-m="3210">3,210 m</span>) to witness golden sunrise light strike the Annapurna and Dhaulagiri ranges. The trek then traverses along a scenic high ridge to Mohare Hill (<span data-altitude-m="3300">3,300 m</span>), famous for its community eco-lodge, sunset vistas, and panoramic perspective over the southern valleys.
            </p>

            <!-- Subsection 8 -->
            <h3 class="trek-overview-subtitle">What to expect during the 15-day journey</h3>
            <p style="color: var(--color-neutral-700); font-size: 1rem; margin-bottom: 20px; line-height: 1.7;">
              The itinerary is structured for complete peace of mind, incorporating road transfers from Kathmandu to Pokhara, 11 dedicated walking stages across varying elevations, and time for recovery. Daily trekking generally averages 4 to 6 hours on well-graded stone paths and forest trails, with Day 8 (Khayer Lake) demanding 7 to 9 hours of strenuous high-altitude walking. A steady pace, reliable gear, and our experienced guides ensure every stage is manageable and rewarding.
            </p>

            <!-- Subsection 9 -->
            <h3 class="trek-overview-subtitle">Who is the Khopra Ridge Trek suitable for?</h3>
            <p style="color: var(--color-neutral-700); font-size: 1rem; margin-bottom: 20px; line-height: 1.7;">
              This trek is ideal for active hikers with good cardiovascular endurance and leg strength who are prepared for consecutive walking days, steep stone staircases, and simple mountain accommodations. While technical climbing experience is not required, the Khayer Lake excursion reaches high altitude (<span data-altitude-m="4700">4,700 m</span>), making prior hiking experience and dedicated pre-trip fitness training strongly recommended.
            </p>

            <!-- Subsection 10 -->
            <h3 class="trek-overview-subtitle">Why choose the 15-day Khopra Ridge Trek package?</h3>
            <p style="color: var(--color-neutral-700); font-size: 1rem; margin-bottom: 28px; line-height: 1.7;">
              Our 15-day package offers the perfect balance: it avoids the rushed pacing of shorter variations, includes necessary buffer time for road travel, and incorporates both Khopra Ridge and the Poon Hill/Mohare Hill circuit. With private vehicle transfers, all ACAP permits arranged in advance, comprehensive emergency protocols, and certified local guides, Namaste Hiking Trek ensures a seamless, deeply authentic Himalayan journey.
            </p>

            <!-- Section 1 Highlights Grid -->
            <h3 class="trek-overview-subtitle" style="margin-top: 35px;">Khopra Ridge Trek Highlights</h3>
            <div class="ebc-highlights-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 20px;">
              
              <!-- Highlight 1: Khopra Ridge Viewpoint -->
              <div class="ebc-highlight-card" style="background: white; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 22px; box-shadow: var(--shadow-sm); transition: transform 0.2s;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                  <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(16, 185, 129, 0.1); color: #10b981; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
                  </div>
                  <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--color-primary-navy); margin: 0;">Khopra Ridge Viewpoint</h4>
                </div>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Stand at <span data-altitude-m="3660">3,660 m</span> on an elevated alpine ridge overlooking the Kali Gandaki Gorge, gazing across an unobstructed panorama of Dhaulagiri (<span data-altitude-m="8167">8,167 m</span>) and Annapurna South (<span data-altitude-m="7219">7,219 m</span>).
                </p>
              </div>

              <!-- Highlight 2: Sacred Khayer Lake -->
              <div class="ebc-highlight-card" style="background: white; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 22px; box-shadow: var(--shadow-sm); transition: transform 0.2s;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                  <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(16, 185, 129, 0.1); color: #10b981; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </div>
                  <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--color-primary-navy); margin: 0;">Sacred Khayer Lake</h4>
                </div>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Conquer a strenuous high-altitude alpine hike to sacred Khayer Lake (~<span data-altitude-m="4700">4,700 m</span>), nestled in a glacial sanctuary venerated by Hindu and Buddhist pilgrims.
                </p>
              </div>

              <!-- Highlight 3: Community Lodge Trekking -->
              <div class="ebc-highlight-card" style="background: white; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 22px; box-shadow: var(--shadow-sm); transition: transform 0.2s;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                  <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(16, 185, 129, 0.1); color: #10b981; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </div>
                  <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--color-primary-navy); margin: 0;">Community Lodge Network</h4>
                </div>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Stay at community-run lodges in Bayeli Kharka, Upper Chistibung, and Khopra Danda, directly funding village schools and local healthcare infrastructure.
                </p>
              </div>

              <!-- Highlight 4: Rhododendron & Mossy Forests -->
              <div class="ebc-highlight-card" style="background: white; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 22px; box-shadow: var(--shadow-sm); transition: transform 0.2s;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                  <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(16, 185, 129, 0.1); color: #10b981; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-7l-2-2"/><path d="M17 8v.01"/><path d="M7 8v.01"/><path d="M12 2a5 5 0 0 0-5 5c0 2 .5 3.5 3 6l2 2 2-2c2.5-2.5 3-4 3-6a5 5 0 0 0-5-5z"/></svg>
                  </div>
                  <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--color-primary-navy); margin: 0;">Rhododendron Forests</h4>
                </div>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Hike through ancient mossy forests and bloom-filled rhododendron woods (vibrant red, pink, and white in spring) along tranquil, uncrowded mountain trails.
                </p>
              </div>

              <!-- Highlight 5: Ghandruk Gurung Heritage -->
              <div class="ebc-highlight-card" style="background: white; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 22px; box-shadow: var(--shadow-sm); transition: transform 0.2s;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                  <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(16, 185, 129, 0.1); color: #10b981; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--color-primary-navy); margin: 0;">Ghandruk Gurung Heritage</h4>
                </div>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Explore Ghandruk (<span data-altitude-m="1940">1,940 m</span>), famous for stone-paved lanes, traditional Gurung architecture, handicraft museums, and views of Machapuchare.
                </p>
              </div>

              <!-- Highlight 6: Tadapani & Bayeli Kharka Ascent -->
              <div class="ebc-highlight-card" style="background: white; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 22px; box-shadow: var(--shadow-sm); transition: transform 0.2s;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                  <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(16, 185, 129, 0.1); color: #10b981; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m13 2-2 2.5-3-2L4 7l4 4-2 3 5 2 2-3 4 1 2-4-3-3z"/></svg>
                  </div>
                  <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--color-primary-navy); margin: 0;">Bayeli Kharka & Chistibung</h4>
                </div>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Climb progressively into subalpine terrain through Tadapani (<span data-altitude-m="2630">2,630 m</span>), Bayeli Kharka (<span data-altitude-m="3460">3,460 m</span>), and Upper Chistibung (<span data-altitude-m="2950">2,950 m</span>).
                </p>
              </div>

              <!-- Highlight 7: Poon Hill Sunrise -->
              <div class="ebc-highlight-card" style="background: white; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 22px; box-shadow: var(--shadow-sm); transition: transform 0.2s;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                  <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(16, 185, 129, 0.1); color: #10b981; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                  </div>
                  <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--color-primary-navy); margin: 0;">Poon Hill Sunrise Panorama</h4>
                </div>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Experience the celebrated dawn panorama from Poon Hill (<span data-altitude-m="3210">3,210 m</span>) as the first golden rays illuminate the snowfields of Dhaulagiri and Annapurna.
                </p>
              </div>

              <!-- Highlight 8: Mohare Hill Eco-Viewpoint -->
              <div class="ebc-highlight-card" style="background: white; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 22px; box-shadow: var(--shadow-sm); transition: transform 0.2s;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                  <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(16, 185, 129, 0.1); color: #10b981; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  </div>
                  <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--color-primary-navy); margin: 0;">Mohare Hill Eco-Ridge</h4>
                </div>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Traverse to Mohare Hill (<span data-altitude-m="3300">3,300 m</span>) for stunning sunset views across the Annapurna foothills from its community-managed solar-powered lodge.
                </p>
              </div>

            </div>

            <!-- 10-Milestone Checklist Glance Box -->
            <div class="ebc-glance-box" style="margin-top: 35px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 24px;">
              <h4 style="color: #166534; font-size: 1.15rem; font-weight: 700; margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                15-Day Khopra Ridge Expedition Milestones at a Glance
              </h4>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px 16px; font-size: 0.92rem; color: #15803d;">
                <div><strong style="color: #14532d;">• Day 1:</strong> Kathmandu arrival (<span data-altitude-m="1355">1,355 m</span>)</div>
                <div><strong style="color: #14532d;">• Day 2:</strong> Drive to Pokhara (<span data-altitude-m="822">822 m</span>)</div>
                <div><strong style="color: #14532d;">• Day 3:</strong> Trek to Ghandruk (<span data-altitude-m="1940">1,940 m</span>)</div>
                <div><strong style="color: #14532d;">• Day 4:</strong> Trek to Tadapani (<span data-altitude-m="2630">2,630 m</span>)</div>
                <div><strong style="color: #14532d;">• Day 5:</strong> Trek to Bayeli Kharka (<span data-altitude-m="3460">3,460 m</span>)</div>
                <div><strong style="color: #14532d;">• Day 6:</strong> Trek to Upper Chistibung (<span data-altitude-m="2950">2,950 m</span>)</div>
                <div><strong style="color: #14532d;">• Day 7:</strong> Reach Khopra Ridge (<span data-altitude-m="3660">3,660 m</span>)</div>
                <div><strong style="color: #14532d;">• Day 8:</strong> Sacred Khayer Lake (<span data-altitude-m="4700">4,700 m</span>)</div>
                <div><strong style="color: #14532d;">• Day 9–10:</strong> Swanta & Ghorepani (<span data-altitude-m="2880">2,880 m</span>)</div>
                <div><strong style="color: #14532d;">• Day 11–15:</strong> Poon Hill, Mohare & Kathmandu</div>
              </div>
            </div>

            <!-- Trust Badges Section -->
            <div class="why-book-with-us-grid" style="margin-top: 40px;">
              <h3 class="why-book-title">Why Book the Khopra Ridge Trek With Us?</h3>
              <p class="why-book-subtitle">Direct local operator in Nepal with experienced high-altitude Sherpa & Annapurna guides, transparent pricing, and 24/7 mountain safety protocols.</p>
              
              <div class="why-book-cards-container">
                <!-- Card 1 -->
                <div class="why-book-card">
                  <div class="why-book-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">100% Guaranteed Departures</h4>
                    <p class="why-book-card-text">Once you book with us, your trek departure is 100% guaranteed. We never cancel due to minimum group size requirements, providing total travel certainty.</p>
                  </div>
                </div>

                <!-- Card 2 -->
                <div class="why-book-card">
                  <div class="why-book-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Licensed Mountain Guides</h4>
                    <p class="why-book-card-text">Our guides are Government-licensed, certified in Wilderness First Aid, and deeply experienced in navigating off-the-beaten-path Annapurna ridgelines and Khayer Lake.</p>
                  </div>
                </div>

                <!-- Card 3 -->
                <div class="why-book-card">
                  <div class="why-book-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Direct Local Operator (No Middleman)</h4>
                    <p class="why-book-card-text">Based directly in Kathmandu, we eliminate overseas travel agency markups, ensuring fair wages for our crew, premium lodge bookings, and the best direct price.</p>
                  </div>
                </div>

                <!-- Card 4 -->
                <div class="why-book-card">
                  <div class="why-book-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Daily Oximeter Safety Checks</h4>
                    <p class="why-book-card-text">Your guide carries medical pulse oximeters to monitor blood oxygen saturation and pulse twice daily, ensuring safe acclimatization before ascending to Khayer Lake.</p>
                  </div>
                </div>

                <!-- Card 5 -->
                <div class="why-book-card">
                  <div class="why-book-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Ethical Porter Welfare</h4>
                    <p class="why-book-card-text">We strictly follow International Porter Protection Group (IPPG) guidelines: maximum 20–22kg load limits shared between two trekkers, comprehensive health insurance, and warm alpine gear.</p>
                  </div>
                </div>

                <!-- Card 6 -->
                <div class="why-book-card">
                  <div class="why-book-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Handpicked Community Lodges</h4>
                    <p class="why-book-card-text">We reserve the best available rooms in local community lodges and teahouses, ensuring comfortable bedding, wholesome meals, and direct community revenue.</p>
                  </div>
                </div>

                <!-- Card 7 -->
                <div class="why-book-card">
                  <div class="why-book-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">Flexible Booking & Free Rescheduling</h4>
                    <p class="why-book-card-text">Travel plans can shift. We offer flexible booking terms and free date changes up to 30 days before departure, protecting your investment against unforeseen events.</p>
                  </div>
                </div>

                <!-- Card 8 -->
                <div class="why-book-card">
                  <div class="why-book-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <div class="why-book-card-content">
                    <h4 class="why-book-card-title">24/7 Kathmandu Operations Desk</h4>
                    <p class="why-book-card-text">Our dedicated operations desk in Kathmandu is available 24/7 via WhatsApp and satellite communication, ready to assist with emergency re-routing or helicopter coordination.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>`;

let html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const s1Start = html.indexOf('<!-- Section 1: Overview -->');
const s2Start = html.indexOf('<!-- Section 2: Itinerary -->');

if (s1Start === -1 || s2Start === -1) {
  console.error('Could not locate Section 1 or Section 2 markers!');
  process.exit(1);
}

html = html.substring(0, s1Start) + section1Html + '\n\n          ' + html.substring(s2Start);

// Validate tag balance
const tags = ['div', 'section', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'span', 'ul', 'li', 'button', 'a', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'main', 'article'];
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
  console.error('Validation failed! Tag balance error.');
  process.exit(1);
}

fs.writeFileSync('trek/khopra-ridge-trek/index.html', html, 'utf8');
console.log('SUCCESS: Phase 2 (Section 1: Overview & Highlights) completed with 100% tag balance!');
