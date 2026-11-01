const fs = require('fs');

const filePath = 'trek/upper-mustang-trek/index.html';
let content = fs.readFileSync(filePath, 'utf8');

const s1Start = content.indexOf('<section id="section-overview"');
const s1End = content.indexOf('<section id="section-itinerary"');

if (s1Start === -1 || s1End === -1) {
  console.error('Could not locate Section 1 bounds!');
  process.exit(1);
}

const newSection1 = `<section id="section-overview" class="trek-detail-section">
            <h2 class="trek-section-title">Trek Overview</h2>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The 17-day Upper Mustang Trek is a remarkable Himalayan journey into the remote trans-Himalayan landscapes of northern Nepal, where dramatic mountain scenery, ancient settlements, Tibetan-influenced culture, Buddhist heritage and the historic walled city of Lo Manthang come together in one of Nepal’s most distinctive trekking experiences.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              Unlike many popular trekking routes in Nepal that pass through dense forests, lush valleys and glacial landscapes, Upper Mustang has a distinctly dry and rugged character. The trail moves through wide barren valleys, wind-carved cliffs, exposed ridgelines, deep gorges, dry riverbeds and traditional villages built from stone, mud and earth. Small areas of cultivated farmland appear around settlements, creating a sharp contrast with the surrounding arid terrain.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
              Located north of the main Himalayan barriers in the rain shadow of the Annapurna and Dhaulagiri ranges, Upper Mustang enjoys much drier conditions than other parts of Nepal. This makes it particularly suitable for trekking during the summer monsoon months (June, July, and August) when clear skies prevail. With high overnight elevations reaching approximately 3,840 m at Lo Manthang and daylight pass crossings around 4,010 m, this complete 17-day journey provides an unhurried, safe, and deeply immersive mountain experience.
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
                gap: 16px;
                margin-top: 20px;
              }
              @media (max-width: 768px) {
                .rich-highlights-grid {
                  grid-template-columns: 1fr;
                }
              }
              .rich-highlight-card {
                display: flex;
                align-items: flex-start;
                gap: 14px;
                padding: 16px;
                background: #F8FAFC;
                border: 1px solid #E2E8F0;
                border-radius: 12px;
                transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
              }
              .rich-highlight-card:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 128, 96, 0.08);
                border-color: #008060;
                background: #FFFFFF;
              }
              .rich-highlight-icon {
                width: 38px;
                height: 38px;
                border-radius: 10px;
                background: #E6F7F0;
                color: #008060;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
              }
              .rich-highlight-content h4 {
                font-size: 0.98rem;
                font-weight: 700;
                color: #0F172A;
                margin: 0 0 4px 0;
              }
              .rich-highlight-content p {
                font-size: 0.88rem;
                color: #475569;
                line-height: 1.5;
                margin: 0;
              }
              .why-book-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 16px;
                margin-top: 20px;
              }
              @media (max-width: 768px) {
                .why-book-grid {
                  grid-template-columns: 1fr;
                }
              }
              .why-book-card {
                display: flex;
                align-items: flex-start;
                gap: 14px;
                padding: 18px;
                background: #FFFFFF;
                border: 1px solid #E2E8F0;
                border-radius: 12px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.02);
                transition: transform 0.2s, border-color 0.2s;
              }
              .why-book-card:hover {
                transform: translateY(-2px);
                border-color: #008060;
                box-shadow: 0 6px 16px rgba(0, 128, 96, 0.08);
              }
              .why-book-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #E6F7F0;
                color: #008060;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
              }
              .why-book-card h4 {
                font-size: 1rem;
                font-weight: 700;
                color: #0F172A;
                margin: 0 0 4px 0;
              }
              .why-book-card p {
                font-size: 0.88rem;
                color: #475569;
                line-height: 1.5;
                margin: 0;
              }
            </style>

            <!-- 16 Curated Highlights of Upper Mustang Trek -->
            <div class="rich-highlights-container">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                <span style="font-size: 0.8rem; font-weight: 800; color: #008060; text-transform: uppercase; letter-spacing: 0.08em; background: #E6F7F0; padding: 4px 10px; border-radius: 4px;">Trip Features</span>
                <span style="font-size: 0.85rem; color: #64748B; font-weight: 500;">16 Unforgettable Moments</span>
              </div>
              <h3 style="font-size: 1.5rem; color: #0F172A; font-weight: 800; margin: 0 0 6px 0;">16 Highlights of the Upper Mustang Trek</h3>
              <p style="font-size: 0.95rem; color: #64748B; margin: 0 0 16px 0;">Key landmarks, ancient cultural discoveries, and trans-Himalayan landscapes experienced along the 17-day journey.</p>
              
              <div class="rich-highlights-grid">
                
                <!-- Highlight 1: Ancient Walled City of Lo Manthang -->
                <div class="rich-highlight-card">
                  <div class="rich-highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h6M9 14h6M9 18h6"/></svg>
                  </div>
                  <div class="rich-highlight-content">
                    <h4>Ancient Walled City of Lo Manthang</h4>
                    <p>Enter the medieval fortified capital of the Kingdom of Lo, founded in 1380 AD with intact defense walls and whitewashed mud-brick buildings.</p>
                  </div>
                </div>

                <!-- Highlight 2: Centenary Royal Palace -->
                <div class="rich-highlight-card">
                  <div class="rich-highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 7h7l-5.5 4.5 2 7.5L12 17l-6.5 4 2-7.5L2 9h7z"/></svg>
                  </div>
                  <div class="rich-highlight-content">
                    <h4>Centenary Royal Palace of the King</h4>
                    <p>Stand before the historic four-story palace of the Mustangi King (Lo Gyalpo) in the heart of Lo Manthang’s labyrinthine alleys.</p>
                  </div>
                </div>

                <!-- Highlight 3: 8th-Century Ghar Gompa -->
                <div class="rich-highlight-card">
                  <div class="rich-highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </div>
                  <div class="rich-highlight-content">
                    <h4>8th-Century Ghar Gompa (Lo Gekar)</h4>
                    <p>Visit one of the oldest active Tibetan Buddhist monasteries in the Himalayas, famous for intricate painted carved stones linked to Guru Rinpoche.</p>
                  </div>
                </div>

                <!-- Highlight 4: Chhoser 2,500-Year-Old Sky Caves -->
                <div class="rich-highlight-card">
                  <div class="rich-highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
                  </div>
                  <div class="rich-highlight-content">
                    <h4>Chhoser Ancient Sky Caves (Jhong Cave)</h4>
                    <p>Explore multi-story cliffside cave dwellings dating back over 2,500 years, complete with connecting ladders, hearths, and burial chambers.</p>
                  </div>
                </div>

                <!-- Highlight 5: Namgyal Gompa & Tingkhar Exploration -->
                <div class="rich-highlight-card">
                  <div class="rich-highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <div class="rich-highlight-content">
                    <h4>Namgyal Gompa &amp; Tingkhar Excursion</h4>
                    <p>A dedicated cultural walking day north of Lo Manthang visiting the 'Monastery of Victory' and the authentic traditional settlement of Tingkhar.</p>
                  </div>
                </div>

                <!-- Highlight 6: Rain-Shadow Summer Monsoon Trekking -->
                <div class="rich-highlight-card">
                  <div class="rich-highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                  </div>
                  <div class="rich-highlight-content">
                    <h4>Rain-Shadow Summer Monsoon Trekking</h4>
                    <p>Protected behind the Annapurna-Dhaulagiri barrier, Upper Mustang receives under 300mm annual rainfall, providing sunny, clear skies in July and August.</p>
                  </div>
                </div>

                <!-- Highlight 7: Flaming Red Sandstone Cliffs of Drakmar -->
                <div class="rich-highlight-card">
                  <div class="rich-highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
                  </div>
                  <div class="rich-highlight-content">
                    <h4>Flaming Red Sandstone Cliffs of Drakmar</h4>
                    <p>Marvel at the vibrant crimson and ochre canyon bluffs of Drakmar, sculpted by mountain winds and pierced by ancient hermit caves.</p>
                  </div>
                </div>

                <!-- Highlight 8: Great Mani Wall of Ghami -->
                <div class="rich-highlight-card">
                  <div class="rich-highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18"/></svg>
                  </div>
                  <div class="rich-highlight-content">
                    <h4>Great Mani Wall of Ghami</h4>
                    <p>Walk alongside Nepal’s longest continuous stone-carved Buddhist prayer wall, stretching over 300 meters with thousands of carved mantras.</p>
                  </div>
                </div>

                <!-- Highlight 9: World's Deepest Kali Gandaki Gorge -->
                <div class="rich-highlight-card">
                  <div class="rich-highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
                  </div>
                  <div class="rich-highlight-content">
                    <h4>World's Deepest Kali Gandaki River Gorge</h4>
                    <p>Trek through the geological marvel flanked by two 8,000-meter giants—Annapurna I (8,091 m) and Dhaulagiri (8,167 m).</p>
                  </div>
                </div>

                <!-- Highlight 10: 14th-Century Gompas of Lo Manthang -->
                <div class="rich-highlight-card">
                  <div class="rich-highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 0 0 9 9z"/><path d="M12 7v5l3 3"/></svg>
                  </div>
                  <div class="rich-highlight-content">
                    <h4>14th-Century Gompas of Lo Manthang</h4>
                    <p>Admire masterwork murals, gilded statues, and ancient mandalas inside Jampa Lhakhang ("God House"), Thubchen Gompa, and Chode Gompa.</p>
                  </div>
                </div>

                <!-- Highlight 11: Medieval Gateway of Kagbeni -->
                <div class="rich-highlight-card">
                  <div class="rich-highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </div>
                  <div class="rich-highlight-content">
                    <h4>Medieval Gateway Village of Kagbeni</h4>
                    <p>Stroll through the 500-year-old mud-brick alleys, prayer-wheel corridors, and historic checkpoint where the restricted kingdom begins.</p>
                  </div>
                </div>

                <!-- Highlight 12: Sacred Pilgrimage Shrine of Muktinath -->
                <div class="rich-highlight-card">
                  <div class="rich-highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div class="rich-highlight-content">
                    <h4>Sacred Pilgrimage Shrine of Muktinath (3,710 m)</h4>
                    <p>Experience the sacred sanctuary revered by Hindus and Buddhists alike, featuring 108 stone water spouts and an eternal natural gas flame.</p>
                  </div>
                </div>

                <!-- Highlight 13: Pure Tibetan Culture & Lobas Heritage -->
                <div class="rich-highlight-card">
                  <div class="rich-highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div class="rich-highlight-content">
                    <h4>Pure Tibetan Culture &amp; Lobas Heritage</h4>
                    <p>Encounter an undisturbed mountain culture where Tibetan customs, language, traditional dress, and Bon religious roots remain vibrant.</p>
                  </div>
                </div>

                <!-- Highlight 14: Nilgiri, Tilicho & Dhaulagiri Vistas -->
                <div class="rich-highlight-card">
                  <div class="rich-highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  </div>
                  <div class="rich-highlight-content">
                    <h4>Nilgiri, Tilicho Peak &amp; Dhaulagiri Vistas</h4>
                    <p>Witness sweeping mountain views from high arid passes, contrasting stark desert plains against blinding white snow peaks.</p>
                  </div>
                </div>

                <!-- Highlight 15: Scenic Mountain STOL Flights -->
                <div class="rich-highlight-card">
                  <div class="rich-highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
                  </div>
                  <div class="rich-highlight-content">
                    <h4>Scenic Mountain STOL Flights (PKR–JOM)</h4>
                    <p>Experience breathtaking 25-minute flights connecting subtropical Pokhara with the high desert of Jomsom right through the mountain pass.</p>
                  </div>
                </div>

                <!-- Highlight 16: Serene Pokhara Lakeside R&R -->
                <div class="rich-highlight-card">
                  <div class="rich-highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>
                  </div>
                  <div class="rich-highlight-content">
                    <h4>Serene Pokhara Lakeside Rest &amp; Recovery</h4>
                    <p>Relax beside the calm waters of Phewa Lake with Annapurna views before heading into the wild and upon completing your desert trek.</p>
                  </div>
                </div>

              </div>
            </div>

            <!-- Why Book With Us Section -->
            <div style="margin-top: 40px; padding-top: 25px; border-top: 1px solid var(--color-neutral-100);">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                <span style="font-size: 0.8rem; font-weight: 800; color: #008060; text-transform: uppercase; letter-spacing: 0.08em; background: #E6F7F0; padding: 4px 10px; border-radius: 4px;">Why Choose Us</span>
                <span style="font-size: 0.85rem; color: #64748B; font-weight: 500;">Trusted Nepal Specialists</span>
              </div>
              <h3 style="font-size: 1.5rem; color: #0F172A; font-weight: 800; margin: 0 0 6px 0;">Why Book Your Upper Mustang Trek With Namaste Hiking Trek</h3>
              <p style="font-size: 0.95rem; color: #64748B; margin: 0 0 16px 0;">We take care of all restricted permits, mountain flights, logistics, and safety so you can focus entirely on the Himalayan journey.</p>

              <div class="why-book-grid">
                
                <div class="why-book-card">
                  <div class="why-book-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <h4>Official Govt-Registered Nepal Agency</h4>
                    <p>Fully licensed by the Nepal Ministry of Tourism, TAAN, and Nepal Tourism Board with 30+ years of high-altitude Himalayan leadership.</p>
                  </div>
                </div>

                <div class="why-book-card">
                  <div class="why-book-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </div>
                  <div>
                    <h4>Hassle-Free Restricted Permit Logistics</h4>
                    <p>We handle the complete Department of Immigration Restricted Area Permit (RAP) and ACAP formalities seamlessly before departure.</p>
                  </div>
                </div>

                <div class="why-book-card">
                  <div class="why-book-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="7" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>
                  </div>
                  <div>
                    <h4>Licensed Local Mustangi Guides</h4>
                    <p>Led by government-certified guides native to the Mustang and Annapurna regions who speak fluent English and understand local Tibetan customs.</p>
                  </div>
                </div>

                <div class="why-book-card">
                  <div class="why-book-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <h4>Guaranteed Departures &amp; Custom Dates</h4>
                    <p>We guarantee fixed-date group departures and provide custom private departures tailored to your pace, travel dates, and group size.</p>
                  </div>
                </div>

                <div class="why-book-card">
                  <div class="why-book-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </div>
                  <div>
                    <h4>Daily Health &amp; Oximeter Monitoring</h4>
                    <p>Your guide carries pulse oximeters to track blood oxygen saturation and heart rate twice daily for optimal acclimatization and safety.</p>
                  </div>
                </div>

                <div class="why-book-card">
                  <div class="why-book-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
                  </div>
                  <div>
                    <h4>First-Aid &amp; Emergency Helicopter Support</h4>
                    <p>Comprehensive mountain first aid kits and direct 24/7 coordination with Pokhara and Kathmandu helicopter rescue services.</p>
                  </div>
                </div>

                <div class="why-book-card">
                  <div class="why-book-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                  </div>
                  <div>
                    <h4>Handpicked Teahouses &amp; 3-Star Hotels</h4>
                    <p>Comfortable 3-star hotels in Kathmandu and Pokhara with private bathrooms, and the best available authentic family teahouses on the trail.</p>
                  </div>
                </div>

                <div class="why-book-card">
                  <div class="why-book-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                  </div>
                  <div>
                    <h4>Full-Board Nutritious Meals on Trek</h4>
                    <p>Three hearty meals daily (Breakfast, Lunch, Dinner) from extensive lodge menus, plus hot tea or coffee with every meal.</p>
                  </div>
                </div>

                <div class="why-book-card">
                  <div class="why-book-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                  </div>
                  <div>
                    <h4>100% Secure Payment &amp; No Hidden Fees</h4>
                    <p>Transparent pricing that includes all permits, flights, transfers, accommodation, and guiding fees with zero surprise charges.</p>
                  </div>
                </div>

                <div class="why-book-card">
                  <div class="why-book-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div>
                    <h4>Ethical Porter Welfare &amp; Sustainable Tourism</h4>
                    <p>We adhere to strict porter welfare guidelines (20 kg maximum load, fair living wages, medical insurance, and proper cold-weather gear).</p>
                  </div>
                </div>

              </div>
            </div>
          </section>`;

content = content.substring(0, s1Start) + newSection1 + content.substring(s1End);
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated Section 1 (Overview, 16 Highlights, and Why Book With Us).');
