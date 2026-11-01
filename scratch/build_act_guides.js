const fs = require('fs');

function generateGuidesHtml() {
  const guides = [
    {
      id: "key-facts",
      title: "Key Trip Facts & Modern Route Architecture",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
      content: `The modern Annapurna Circuit Trek is a 14-calendar-day journey that combines walking with strategic vehicle support. Historically, trekkers walked from Besisahar through the lower valley for several days before reaching higher elevations. With road construction now reaching deep into the Marsyangdi and Kali Gandaki corridors, modern itineraries drive directly from Kathmandu to Chame (2,710 m), preserving energy and time for the spectacular alpine sections between Pisang, Manang, Thorong La (5,416 m), and Muktinath.
      <br><br>
      The standard walking route traverses: Chame → Lower Pisang → Ghyaru/Ngawal → Manang → Yak Kharka → Thorong Phedi / High Camp → Thorong La Pass → Muktinath. The southern conclusion continues via Kagbeni, Jomsom, Tatopani hot springs, and Ghorepani to Poon Hill (3,210 m) before exiting at Nayapul to Pokhara.`
    },
    {
      id: "marsyangdi-kali-gandaki",
      title: "Geographical Structure: Marsyangdi to Kali Gandaki",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>`,
      content: `The geographical genius of the Annapurna Circuit is that it connects two major Himalayan river systems through one continuous high-altitude pass. The Marsyangdi River provides the eastward approach, carving deep through green foothills and dramatic rock walls before broadening into the alpine amphitheater of Manang.
      <br><br>
      After crossing the high divide at Thorong La Pass (5,416 m), the trail plunges into the arid Kali Gandaki river canyon—the deepest gorge on earth, flanked by the 8,000-meter giants of Dhaulagiri (8,167 m) to the west and Annapurna I (8,091 m) to the east. You witness an entire mountain massif from multiple cardinal directions within a single continuous journey.`
    },
    {
      id: "daily-rhythm-terrain",
      title: "What the Trek is Really Like: Daily Rhythm & Terrain",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
      content: `A typical trekking day begins between 6:00 and 7:00 AM. After a hearty breakfast of porridge, eggs, or Tibetan bread with hot tea, you pack your daypack with warm layers, water, and snacks while porters transport the main luggage. You hike for 3 to 4 hours in the crisp morning air, stop at a trailside teahouse for a freshly cooked lunch (often hot dal bhat or noodle soup), and continue 2 to 3 hours to the afternoon destination.
      <br><br>
      Expect 5 to 7 hours of daily walking on established dirt paths, stone steps, rocky moraines, and occasional suspension bridges. Terrain changes daily: subtropical farmland near Chame, pine forests to Pisang, high cliffside paths through Ghyaru, barren scree slopes up to Thorong Phedi, snowy switchbacks across the pass, and wide river cobblestones in the Kali Gandaki.`
    },
    {
      id: "thorong-la-strategy",
      title: "Thorong La Pass Crossing: 5,416 m Strategy & Preparation",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22L12 2l8 20H4z"/><path d="M9 22l3-7 3 7H9z"/></svg>`,
      content: `At 5,416 m (17,769 ft), Thorong La Pass is the highest point of the circuit. The pass day is a true commitment day that begins around 4:00 AM in sub-zero darkness. Headlamps illuminate the steep switchbacks from Thorong Phedi (4,450 m) or High Camp (4,925 m). At this altitude, oxygen pressure is roughly half that at sea level, requiring a slow, rhythmic, synchronized breathing pace.
      <br><br>
      Reaching the pass marker adorned with colorful prayer flags provides an immense sense of accomplishment. However, the day is only half done: you must descend 1,600 vertical meters over loose rock and scree to Muktinath (3,800 m). Trekking poles and sturdy ankle support are essential to protect knees and quadriceps during this prolonged descent.`
    },
    {
      id: "manang-acclimatization",
      title: "Manang Acclimatization Strategy (Day 5 Deep Dive)",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      content: `Manang sits at approximately 3,500 m and represents the critical physiological bridge of the circuit. Skipping this acclimatization day is the single most common cause of altitude failure at Thorong La. The human body requires 24 to 48 hours to increase red blood cell production and adapt to lower barometric pressure.
      <br><br>
      On Day 5, we practice the proven 'climb high, sleep low' rule. You make an active daytime hike to Chongkor viewpoint, Gangapurna glacial lake, or the cliffside Praken Gompa (~3,945 m) to expose your body to higher elevations before returning to sleep at 3,500 m. In the afternoon, visit the Himalayan Rescue Association (HRA) clinic for their daily educational altitude lecture.`
    },
    {
      id: "high-route-ghyaru-ngawal",
      title: "High Ridge Route: Upper Pisang, Ghyaru & Ngawal",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      content: `Between Pisang and Manang, trekkers can choose between a lower valley path or the magnificent high ridge route via Upper Pisang, Ghyaru (3,670 m), and Ngawal (3,650 m). While the high route involves a steep 400-meter zigzag ascent from the river, it is widely considered the finest walking day in Nepal.
      <br><br>
      From the ridge, you gaze straight across at the massive glaciated faces of Annapurna II (7,937 m), Annapurna IV (7,525 m), and Annapurna III (7,555 m). The historic stone villages of Ghyaru and Ngawal showcase medieval Tibetan architecture, ancient chortens, and wind-sculpted prayer flags, providing superior natural acclimatization ahead of Manang.`
    },
    {
      id: "muktinath-pilgrimage",
      title: "Muktinath: Sacred Pilgrimage & Temple Complex",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M10 9h4v4h-4z"/></svg>`,
      content: `Sitting at 3,800 m on the western flank of Thorong La, Muktinath ('Place of Liberation') is one of the Himalaya's most sacred pilgrimage sanctuaries, venerated for millennia by both Hindus and Buddhists. For Hindus, Muktinath is one of the 108 Divya Desams dedicated to Lord Vishnu, featuring 108 sacred brass water spouts shaped like bull heads where pilgrims bathe to cleanse spiritual sins.
      <br><br>
      For Tibetan Buddhists, the site is known as Chumig Gyatsa ('Hundred Springs') and is sanctified by Guru Rinpoche (Padmasambhava). Nearby stands the Jwala Mai temple, where an eternal blue natural gas flame burns continuously over a sacred underground water spring, symbolizing the mystical unity of earth, water, and fire.`
    },
    {
      id: "kagbeni-gateway",
      title: "Kagbeni: Medieval Gateway to Upper Mustang",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
      content: `Perched on the confluence of the Kali Gandaki and Jhong rivers at 2,800 m, Kagbeni is a living medieval fortress town that feels frozen in time. Its tightly packed, whitewashed mud-brick houses, covered tunnels, and intricate alleyways were designed to withstand fierce valley winds and ancient invaders.
      <br><br>
      Kagbeni marks the official southern boundary of the ancient Kingdom of Lo (Upper Mustang). Just past the village police checkpoint, a restricted-area permit is required to continue north to Lo Manthang. Exploring Kagbeni's 500-year-old red Kag Chode Thupten Sampheling Gompa and watching apple trees grow against barren desert cliffs is an unforgettable cultural contrast.`
    },
    {
      id: "thakali-marpha",
      title: "Thakali Culture & Marpha Apple Orchards",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
      content: `South of Jomsom lies Marpha, widely hailed as the most picturesque village in the Kali Gandaki. Marpha is the cultural heartland of the Thakali people, an indigenous community who historically dominated the trans-Himalayan salt and grain trade routes between Tibet and India.
      <br><br>
      Marpha is famed for its spotless flagstone streets, flat earthen roofs stocked with firewood, and bountiful apple orchards introduced by Japanese botanist Ekai Kawaguchi and local horticultural projects. Trekkers can indulge in fresh apple pies, locally distilled apple brandy (Marpha Marpha), apple jams, and authentic Thakali dal bhat—universally considered the most flavorful meal in the Himalaya.`
    },
    {
      id: "tatopani-hot-springs",
      title: "Tatopani Natural Hot Springs & Deep Descent",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
      content: `Descending from Jomsom through Tukuche and Ghasa brings you to Tatopani at 1,190 m—a staggering 4,200 vertical meters below the summit of Thorong La. The sudden return of dense subtropical foliage, banana trees, flowering poinsettias, and humid, oxygen-rich air creates profound physical rejuvenation.
      <br><br>
      Tatopani ('hot water' in Nepali) is famous for its natural geothermal mineral pools situated right beside the rushing Kali Gandaki River. Soaking in these soothing 38°C to 42°C sulfur-rich thermal waters relieves tired leg muscles, eases joint tension, and marks a celebratory milestone after completing the cold high pass.`
    },
    {
      id: "ghorepani-poon-hill",
      title: "Ghorepani Rhododendron Forests & Poon Hill Sunrise",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>`,
      content: `The climb from Tatopani up to Ghorepani (2,860 m) represents the circuit's second major mountain rise, passing through the world's largest natural rhododendron forest. In springtime (March and April), entire hillsides bloom in breathtaking crimson, pink, and white blossoms against snow-capped peaks.
      <br><br>
      From Ghorepani, a pre-dawn climb leads to Poon Hill (3,210 m / 10,531 ft). Standing at the summit tower as the sun rises over Dhaulagiri (8,167 m), Annapurna I (8,091 m), Annapurna South (7,219 m), and the iconic sacred peak of Machhapuchhre (Fishtail) provides the quintessential panoramic climax of your Himalayan journey.`
    },
    {
      id: "cultural-diversity-salt-routes",
      title: "Cultural Diversity: Gurung, Manangi, Thakali & Salt Routes",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      content: `The Annapurna Circuit traverses four distinct ethno-cultural zones within 14 days. In the lower valleys around Chame and Dharapani, you encounter Gurung and Magar communities rooted in agriculture, terraced farming, and deep martial traditions in the famed British and Indian Gurkha regiments.
      <br><br>
      Ascending toward Manang, the culture shifts to Manangi (Nyeshang) communities closely tied to Tibetan Buddhism, trans-Himalayan commerce, and seasonal trade. West of Thorong La, Muktinath unites Hindu pilgrims and Bhotia Buddhists, while the Kali Gandaki Valley is home to the Thakali people, historic masters of mountain hospitality, caravan inns, and regional culinary arts.`
    },
    {
      id: "ecological-traverse",
      title: "Ecological Traverse: Subtropical to Rain Shadow Desert",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
      content: `Few trails on earth showcase such dramatic ecological diversity in two weeks. Starting in the subtropical river gorges (bamboo, pine, terraced rice paddies), you ascend into temperate oak and blue pine forests around Chame, transitioning into subalpine birch, juniper, and larch forests near Pisang.
      <br><br>
      Above 3,500 m, the landscape crosses into the trans-Himalayan rain shadow of Manang and Mustang—an arid alpine desert sheltered from the Indian monsoon by the Annapurna wall. After traversing the alpine tundra of Thorong La (5,416 m), you descend into barren lunar canyons before climbing back into lush cloud forests of rhododendron and bamboo around Ghorepani.`
    },
    {
      id: "fitness-preparation",
      title: "Physical Training & Preparation (Endurance, Legs, Downhill)",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`,
      content: `The Annapurna Circuit requires robust aerobic endurance, muscular stamina, and joint resilience. We recommend a structured 8 to 12-week training regimen prior to departure. Focus on three core pillars:
      <br><br>
      1. <strong>Cardiovascular Endurance:</strong> 45 to 60 minutes of brisk hiking, stair climbing, trail running, or cycling 3 to 4 times per week.
      <br>
      2. <strong>Leg & Core Strength:</strong> Squats, lunges, step-ups with a weighted backpack, and planks to prepare muscles for 6 to 8 hours of continuous load.
      <br>
      3. <strong>Eccentric Downhill Conditioning:</strong> Descending Thorong La drops 1,600 vertical meters in one morning. Practice downhill stair walking and weighted step-downs to build knee stability and quadriceps endurance.`
    },
    {
      id: "altitude-ams-guidelines",
      title: "Altitude Management & AMS Prevention (CDC & NTB Guidelines)",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
      content: `Acute Mountain Sickness (AMS) can affect anyone above 2,500 m regardless of physical fitness or age. Both the CDC and Nepal Tourism Board emphasize gradual sleeping ascent: limiting net sleeping elevation gains to 300–500 m per day above 3,000 m and incorporating a mandatory rest day every 1,000 m.
      <br><br>
      Our guides carry certified pulse oximeters to measure your blood oxygen saturation (SpO2) and heart rate twice daily (morning and evening). Maintain 3 to 4 liters of fluid intake daily, avoid alcohol and sleeping pills, climb at an easy conversational pace ('bistari, bistari'), and report any mild headaches or nausea immediately.`
    },
    {
      id: "teahouse-food-realities",
      title: "Teahouse Accommodation & High Mountain Food Realities",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      content: `Accommodations along the Annapurna Circuit are family-operated mountain teahouses and lodges. Rooms typically feature twin beds with foam mattresses, clean sheets, and blankets (bringing your own -10°C to -15°C sleeping bag is essential for high elevations like Yak Kharka and Thorong Phedi). Lower village lodges in Chame, Manang, and Jomsom often offer private attached bathrooms and Wi-Fi, while high-altitude stops use shared facilities.
      <br><br>
      Meals are freshly prepared using local ingredients. The staple fuel is Nepali <em>Dal Bhat</em> (steamed rice, spiced lentil soup, seasonal vegetable curry, spinach, and pickles), which includes free refills. Menus also feature Tibetan momos, fried noodles, porridge, vegetable soups, garlic soup (renowned for altitude acclimatization), and Western options like pasta, pancakes, and apple pie.`
    }
  ];

  let accordionsHtml = '';
  guides.forEach((g, idx) => {
    accordionsHtml += `
                <!-- Item ${idx + 1}: ${g.title} -->
                <div class="detail-accordion-card" data-detail-id="${g.id}">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        ${g.icon}
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">${g.title}</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-content-inner">
                      <p>${g.content}</p>
                    </div>
                  </div>
                </div>
`;
  });

  return `
          <!-- Section 6: In-Depth Guides -->
          <section id="section-details" class="trek-detail-section">
            <div class="details-section-container">
              <!-- Heading -->
              <div class="details-title-wrapper">
                <h2 class="details-main-title">Read Before You Book: 16 In-Depth Annapurna Circuit Guides</h2>
                <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <!-- Subtitle Paragraphs -->
              <p class="details-subtitle-text">To help you prepare thoroughly for the Annapurna Circuit Trek, we have compiled comprehensive operational guides covering altitude management, route variations, Thorong La crossing strategy, cultural customs, and gear preparation.</p>
              <p class="details-subtitle-text" style="margin-bottom: 24px;">If you have specific route questions or want to customize your trekking schedule, our certified route specialists are available on <a href="https://wa.me/9779800000000" target="_blank" rel="noopener noreferrer">WhatsApp</a> with quick 24-hour response.</p>

              <!-- Interactive Progress Tracker Badge -->
              <div class="details-progress-wrapper">
                <div class="details-progress-badge">
                  <div class="details-progress-ring-box">
                    <svg width="44" height="44">
                      <circle class="details-progress-ring-bg" r="18" cx="22" cy="22"></circle>
                      <circle class="details-progress-ring-bar" r="18" cx="22" cy="22"></circle>
                    </svg>
                  </div>
                  <div class="details-progress-text-box">
                    <span class="details-progress-count">0/16 read</span>
                    <span class="details-progress-status">Nice start — keep exploring</span>
                  </div>
                </div>
              </div>

              <!-- Accordion List (16 Items) -->
              <div class="detail-accordion-list">
${accordionsHtml}
              </div>
            </div>
          </section>
`;
}

module.exports = { generateGuidesHtml };
console.log('build_act_guides.js created successfully');
