const fs = require('fs');

function generateItineraryHtml() {
  const days = [
    {
      num: 1,
      title: "Welcome to Kathmandu & Trek Preparation",
      sub: "Kathmandu – 1,300 m / 4,265 ft",
      alt: "1300",
      time: "20 to 30 mins airport transfer",
      accom: "Hotel in Kathmandu (Thamel)",
      meals: "Welcome Dinner",
      activity: "Airport pickup, equipment check & comprehensive trek briefing",
      desc: `Your Annapurna Circuit journey begins in Kathmandu, the cultural and logistical center of Nepal. After arriving at Tribhuvan International Airport, you are transferred to your hotel. The first day is intentionally lighter than the days that follow, allowing you to recover from international travel and prepare for the mountains.
      <br><br>
      The Thamel area provides convenient access to trekking gear shops, currency exchange, pharmacies, and restaurants. Your trekking guide will meet you for a comprehensive pre-trek briefing covering the route, transport, walking times, weather, food, and safety procedures. We inspect your gear—boots, layers, sleeping bag, and gloves—ensuring everything is ready before departing for the Marsyangdi Valley.`,
      img: "../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-pine-forest-10.jpg",
      imgAlt: "Kathmandu briefing and preparation for the Annapurna Circuit"
    },
    {
      num: 2,
      title: "Scenic Overland Drive from Kathmandu to Chame",
      sub: "Chame – 2,710 m / 8,891 ft",
      alt: "2710",
      time: "7 to 9 hours scenic drive",
      accom: "Mountain Teahouse Lodge in Chame",
      meals: "Breakfast, Lunch & Dinner",
      activity: "Overland 4WD journey along the Marsyangdi River valley",
      desc: `Today is the primary transportation day. Leaving Kathmandu early, we travel westward along the Prithvi Highway before turning north into the Marsyangdi River valley toward Besisahar, Khudi, Dharapani, and Chame.
      <br><br>
      The journey follows the river through increasingly dramatic mountainous terrain, passing terraced hillsides, cascading waterfalls, and suspension bridges. Roads now reach much farther into the valley than in previous decades, preserving valuable time and physical energy for the higher alpine trekking sections. Arriving in Chame, the administrative center of Manang district, the mountain air is noticeably cooler and crisp. Take a gentle evening stroll to acclimatize.`,
      img: "../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-cliffside-trail-01.jpg",
      imgAlt: "Scenic river road and cliffside trail on the approach to Chame"
    },
    {
      num: 3,
      title: "Trek from Chame to Lower Pisang",
      sub: "Lower Pisang – 3,185 m / 10,450 ft",
      alt: "3185",
      time: "4 to 5 hours hiking (14–16 km)",
      accom: "Teahouse Lodge in Lower Pisang",
      meals: "Breakfast, Lunch & Dinner",
      activity: "Alpine forest trail, Bhratang apple orchards & Paungda Danda rock wall",
      desc: `Today marks the beginning of the main walking experience. Leaving Chame, the trail follows the Marsyangdi Valley through dense pine and fir forests, with massive granite walls rising steeply on both sides.
      <br><br>
      Along the way, we pass the expansive apple orchards of Bhratang and gaze up at the dramatic curved rock face of Paungda Danda (the 'Swarga Dwar' or Gateway to Heaven), rising over 1,500 meters above the river. The valley opens up into broad alpine terrain as we cross into the Buddhist-influenced cultural sphere of Manang, arriving at Lower Pisang beneath the majestic ramparts of Annapurna II.`,
      img: "../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-forest-trail-02.jpg",
      imgAlt: "Trekkers walking through pine forests towards Lower Pisang"
    },
    {
      num: 4,
      title: "Lower Pisang to Manang via High Route (Ghyaru & Ngawal)",
      sub: "Manang – 3,500 m / 11,482 ft",
      alt: "3500",
      time: "5 to 7 hours hiking (18–22 km)",
      accom: "Teahouse Lodge in Manang",
      meals: "Breakfast, Lunch & Dinner",
      activity: "High ridge climbing via Upper Pisang, Ghyaru & Ngawal villages",
      desc: `Today is widely regarded as one of the most scenic trekking days on the entire circuit. Instead of remaining on the lower valley trail, our itinerary climbs the high ridge through Upper Pisang to Ghyaru (~3,670 m) and Ngawal.
      <br><br>
      While the zigzag climb to Ghyaru demands sustained effort, the reward is an unparalleled panoramic view across the entire Annapurna range, including Annapurna II, Annapurna IV, Annapurna III, and Gangapurna. Ghyaru and Ngawal showcase traditional Tibetan-style stone houses, ancient gompas, and mani walls. The trail then descends gradually toward the valley floor, passing Mungji and Braga before reaching the bustling high-altitude hub of Manang.`,
      img: "../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-high-altitude-trail-08.jpg",
      imgAlt: "Spectacular high-altitude panoramic trail between Ghyaru and Ngawal"
    },
    {
      num: 5,
      title: "Acclimatization Day in Manang (Side Hikes & Cultural Exploration)",
      sub: "Manang – 3,500 m / 11,482 ft",
      alt: "3500",
      time: "3 to 5 hours active day hike",
      accom: "Teahouse Lodge in Manang",
      meals: "Breakfast, Lunch & Dinner",
      activity: "Hike to Gangapurna Lake, Chongkor Viewpoint or Praken Gompa",
      desc: `The Manang acclimatization day is a vital component of a safe Annapurna Circuit itinerary. Spending an extra night at 3,500 m allows your body to adapt to the thinner air before pushing above 4,000 meters.
      <br><br>
      Following the golden principle of 'climb high, sleep low', your guide will lead an active day hike. Options include the turquoise glacial waters of Gangapurna Lake, Chongkor viewpoint, or the cliffside hermitage of Praken Gompa (~3,945 m), where an elderly lama offers blessings for a safe pass crossing. In the afternoon, explore Manang's bakeries, stone alleys, and attend the daily altitude safety lecture hosted by the Himalayan Rescue Association (HRA).`,
      img: "../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-manang-gate-15.jpg",
      imgAlt: "Trekking team exploring the high-altitude village of Manang"
    },
    {
      num: 6,
      title: "Trek from Manang to Yak Kharka",
      sub: "Yak Kharka – 4,018 m / 13,182 ft",
      alt: "4018",
      time: "3 to 4 hours controlled hiking",
      accom: "Teahouse Lodge in Yak Kharka",
      meals: "Breakfast, Lunch & Dinner",
      activity: "Gradual alpine ascent through high pastures and juniper shrubland",
      desc: `Leaving Manang, the trail climbs gently out of the Marsyangdi Valley into the Jarsang Khola tributary. The walking day is deliberately kept short to maintain controlled elevation gain as we break through the 4,000-meter threshold.
      <br><br>
      Trees and vegetation give way to sparse alpine scrub, juniper bushes, and dry grassy pastures grazed by yaks and blue sheep (bharal). You will cross a wooden bridge over the river and climb past the small settlement of Gunsang before arriving at Yak Kharka. Because movement at this altitude requires extra oxygen, pacing is deliberately slow and steady. Spend the afternoon resting, hydrating, and staying warm.`,
      img: "../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-mountain-trail-03.jpg",
      imgAlt: "Trekkers ascending alpine trails toward Yak Kharka"
    },
    {
      num: 7,
      title: "Trek from Yak Kharka to Thorong Phedi or High Camp",
      sub: "Thorong Phedi – 4,450 m / 14,600 ft (High Camp ~4,925 m)",
      alt: "4450",
      time: "2 to 3 hrs to Phedi (4 to 5 hrs to High Camp)",
      accom: "Teahouse Lodge in Thorong Phedi / High Camp",
      meals: "Breakfast, Lunch & Dinner",
      activity: "Approach to the foot of Thorong La; equipment check & early rest",
      desc: `Today is a short, focused staging day leading to the base of Thorong La Pass. The trail traverses across open scree slopes and crosses the Jarsang Khola on a suspension bridge before climbing to Thorong Phedi ('foot of the hill') at approximately 4,450 m.
      <br><br>
      Depending on weather, trail conditions, and the guide's assessment of group acclimatization, we either overnight at Thorong Phedi or make the steep 1-hour climb to High Camp (4,925 m). Phedi offers lower sleeping altitude and better sleep quality, while High Camp shortens the morning climb. The afternoon is dedicated to hydration, checking headlamps, laying out warm summit layers, and an early dinner before an alpine start.`,
      img: "../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-steep-trail-06.jpg",
      imgAlt: "Trekkers on the steep approach to Thorong Phedi beneath high peaks"
    },
    {
      num: 8,
      title: "Cross Thorong La Pass (5,416 m) & Descend to Sacred Muktinath",
      sub: "Thorong La (5,416 m) to Muktinath (~3,800 m / 12,467 ft)",
      alt: "5416",
      time: "7 to 9 hours high alpine crossing",
      accom: "Teahouse Lodge in Muktinath",
      meals: "Breakfast, Lunch & Dinner",
      activity: "Pre-dawn pass crossing, 5,416m summit celebration & 1,600m descent",
      desc: `The defining day of the Annapurna Circuit begins well before dawn around 4:00 AM. Equipped with headlamps, down jackets, and trekking poles, we ascend slowly into the crisp, thin mountain air.
      <br><br>
      As first light breaks across the jagged horizon, the sheer scale of the Himalaya reveals itself. Reaching Thorong La Pass at 5,416 m (17,769 ft), marked by thousands of fluttering prayer flags and a celebratory chorten, is an emotional and physical triumph. Take in the panoramic vistas of Annapurna, Dhaulagiri, and the Mustang mountains.
      <br><br>
      From the pass, an extensive 1,600-meter descent brings us into the arid, trans-Himalayan rain shadow of Mustang and down to Muktinath (3,800 m). The immediate drop in altitude brings richer oxygen, warmer temperatures, and profound relief.`,
      img: "../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-ridge-trail-09.jpg",
      imgAlt: "Summit prayer flags and ridge trail at Thorong La Pass"
    },
    {
      num: 9,
      title: "Explore Muktinath Temple & Trek to Jomsom via Kagbeni",
      sub: "Jomsom – 2,720 m / 8,924 ft",
      alt: "2720",
      time: "4 to 5 hours trekking & cultural tour",
      accom: "Teahouse Lodge in Jomsom",
      meals: "Breakfast, Lunch & Dinner",
      activity: "Sacred 108 water spouts tour, medieval Kagbeni alleys & Kali Gandaki descent",
      desc: `In the morning, visit the revered Muktinath temple complex, sacred to both Hindus and Buddhists. Witness devotees bathing in the 108 stone water spouts, visit the Jwala Mai shrine with its eternal natural flame, and take in the spiritual harmony of the pilgrimage center.
      <br><br>
      We then trek down through the striking lunar landscape of Mustang to Kagbeni (~2,800 m), an ancient fortified village featuring medieval mud-brick alleys, a red-walled gompa, and the historic checkpoint gateway to Upper Mustang. Following the wide, windy pebble riverbed of the Kali Gandaki, we continue south to Jomsom, the administrative and transport hub of Mustang.`,
      img: "../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-rocky-valley-12.jpg",
      imgAlt: "Trekkers traversing the dry, dramatic Kali Gandaki valley floor"
    },
    {
      num: 10,
      title: "Scenic Transfer from Jomsom to Tatopani Hot Springs via Marpha",
      sub: "Tatopani – 1,190 m / 3,904 ft",
      alt: "1190",
      time: "2 to 3 hours scenic transfer (or optional hiking)",
      accom: "Teahouse Lodge in Tatopani",
      meals: "Breakfast, Lunch & Dinner",
      activity: "Marpha apple village exploration & natural hot springs soak",
      desc: `Leaving Jomsom, we visit the enchanting village of Marpha, famed for its cobblestone streets, whitewashed Thakali houses, and flourishing apple orchards. Sample freshly pressed apple cider, dried apples, or local apple pie.
      <br><br>
      We then drive south through the narrowing Kali Gandaki gorge past Tukuche and Ghasa, experiencing a dramatic 1,500-meter drop in elevation. As the arid canyon transforms into lush subtropical forest, we arrive in Tatopani ('hot water' in Nepali) at 1,190 m. Spend the afternoon soaking in the natural thermal mineral pools along the riverbanks—a deeply restorative experience for tired muscles.`,
      img: "../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-autumn-forest-16.jpg",
      imgAlt: "Lush vegetation and rivers around Tatopani hot springs"
    },
    {
      num: 11,
      title: "Trek from Tatopani to Ghorepani through Rhododendron Forests",
      sub: "Ghorepani – 2,860 m / 9,383 ft",
      alt: "2860",
      time: "5 to 7 hours uphill hike",
      accom: "Teahouse Lodge in Ghorepani",
      meals: "Breakfast, Lunch & Dinner",
      activity: "Ascent through Ghara, Sikha & vibrant rhododendron forests",
      desc: `Today is a challenging but invigorating uphill climb that showcases the second ecological rise of the circuit. Leaving the warm subtropical floor of Tatopani, the trail ascends through terraced farmland, traditional Magar villages (Ghara and Sikha), and oak groves.
      <br><br>
      As we climb toward Ghorepani (2,860 m), the trail enters dense, ancient rhododendron and moss-draped cloud forests. In spring (March–April), the hillsides explode in vibrant shades of red, pink, and white. Ghorepani is a bustling mountain village situated on a high pass, offering stunning views of Dhaulagiri and Annapurna South.`,
      img: "../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-pine-forest-10.jpg",
      imgAlt: "Trekkers ascending forested trails toward Ghorepani"
    },
    {
      num: 12,
      title: "Sunrise at Poon Hill (3,210 m), Trek to Nayapul & Drive to Pokhara",
      sub: "Poon Hill (3,210 m) to Pokhara (~900 m / 2,953 ft)",
      alt: "3210",
      time: "Poon Hill 1.5 hrs, Trek to Nayapul 5 hrs, Drive 1.5 hrs",
      accom: "Hotel in Pokhara (Lakeside)",
      meals: "Breakfast & Lunch",
      activity: "Iconic Poon Hill sunrise, Ulleri stone steps & lakeside celebration",
      desc: `An early 4:30 AM wake-up call takes us up the trail to the summit of Poon Hill (3,210 m / 10,531 ft). Here, one of the world's most celebrated Himalayan sunrises unfolds as the first golden rays illuminate Dhaulagiri (8,167 m), Annapurna I (8,091 m), Annapurna South, Hiunchuli, and the sacred Machhapuchhre (Fishtail).
      <br><br>
      After soaking in the 360-degree panorama, return to Ghorepani for breakfast. We then descend through lush bamboo and rhododendron groves, down the famous Ulleri stone steps to Tikhedhunga and Birethanti, reaching Nayapul. A private vehicle transfers us to Pokhara (900 m). Check into your lakeside hotel and enjoy a hot shower, massage, and celebratory dinner by Phewa Lake.`,
      img: "../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-mountain-view-05.jpg",
      imgAlt: "Golden Himalayan sunrise panorama over Annapurna and Dhaulagiri from Poon Hill"
    },
    {
      num: 13,
      title: "Scenic Flight or Drive from Pokhara to Kathmandu",
      sub: "Kathmandu – 1,300 m / 4,265 ft",
      alt: "1300",
      time: "25 min flight or 6 to 7 hrs scenic tourist drive",
      accom: "Hotel in Kathmandu (Thamel)",
      meals: "Breakfast & Farewell Dinner",
      activity: "Return to Kathmandu, free afternoon for shopping & farewell gathering",
      desc: `After breakfast overlooking Phewa Lake, we return to Kathmandu via a quick 25-minute scenic mountain flight (or deluxe tourist coach transfer, as per your booking package).
      <br><br>
      Enjoy an aerial view of the Annapurna, Manaslu, and Ganesh Himal ranges during your flight. Upon arrival in Kathmandu, transfer to your hotel in Thamel. The remainder of the day is free for souvenir shopping, exploring Durbar Square, or relaxing at a garden café. In the evening, join our team for a celebratory farewell dinner with authentic Nepali cuisine and cultural music.`,
      img: "../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-high-mountain-valley-trail-17.jpg",
      imgAlt: "Relaxed return to Kathmandu after completing the Annapurna Circuit"
    },
    {
      num: 14,
      title: "Final Departure from Kathmandu",
      sub: "Kathmandu – 1,300 m",
      alt: "1300",
      time: "Airport transfer according to flight schedule",
      accom: "Departure Day",
      meals: "Breakfast",
      activity: "Hotel checkout & private transfer to Tribhuvan International Airport",
      desc: `Your extraordinary 14-day Annapurna Circuit adventure concludes today. Depending on your flight schedule, enjoy free time in Kathmandu before our private airport representative picks you up from your hotel and transfers you to Tribhuvan International Airport (TIA) for your onward international flight.
      <br><br>
      You depart with unforgettable memories of traversing two great Himalayan river valleys, crossing Thorong La Pass at 5,416 m, visiting sacred Muktinath, and experiencing the warm hospitality of Nepal's mountain communities. Tashi Delek and Namaste!`,
      img: "../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-tilicho-lake-11.jpg",
      imgAlt: "Celebration of successful completion of the Annapurna Circuit Trek"
    }
  ];

  let cardsHtml = '';
  days.forEach((d, idx) => {
    const isActive = idx === 0 ? ' active' : '';
    cardsHtml += `
              <!-- Day ${d.num < 10 ? '0' + d.num : d.num} -->
              <div class="itinerary-card${isActive}">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day ${d.num}:</span> ${d.title}
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      ${d.sub}
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <div class="itinerary-toggle-btn-new">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-content-inner">
                    <div class="itinerary-metrics-list">
                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>Hiking / Travel: ${d.time}</span>
                      </div>
                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        <span>Lodging: ${d.accom}</span>
                      </div>
                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                          <line x1="6" y1="1" x2="6" y2="4"></line>
                          <line x1="10" y1="1" x2="10" y2="4"></line>
                          <line x1="14" y1="1" x2="14" y2="4"></line>
                        </svg>
                        <span>Meals: ${d.meals}</span>
                      </div>
                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polygon points="12 2 2 22 22 22"></polygon>
                        </svg>
                        <span>Highlight: ${d.activity}</span>
                      </div>
                    </div>
                    
                    <p class="itinerary-body-text">
                      ${d.desc}
                    </p>

                    <div class="itinerary-img-wrapper" style="margin-top: 18px; border-radius: 8px; overflow: hidden; max-height: 280px;">
                      <img src="${d.img}" alt="${d.imgAlt}" style="width: 100%; height: 280px; object-fit: cover; display: block;" loading="lazy">
                    </div>
                  </div>
                </div>
              </div>
`;
  });

  return `
          <!-- Section 2: Itinerary -->
          <section id="section-itinerary" class="trek-detail-section">
            <h2 class="trek-section-title">Annapurna Circuit Trek 14 Days Itinerary</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px; margin-bottom: 20px;"></div>
            
            <p style="font-size: 1.05rem; color: var(--color-neutral-700); line-height: 1.7; margin-bottom: 24px; max-width: 800px;">
              Our comprehensive 14-day Annapurna Circuit itinerary follows a carefully engineered counterclockwise elevation curve. By driving past the lower road sections directly to Chame, reserving Day 5 for vital acclimatization in Manang, staging the Thorong La crossing (5,416 m) on Day 8, and descending through Muktinath, Tatopani hot springs, and Poon Hill, this itinerary balances altitude safety with complete geographic diversity.
            </p>
            
            <div class="itinerary-timeline">
${cardsHtml}
            </div>

            <!-- Strategic Itinerary Architecture Callout -->
            <div style="margin-top: 36px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
              <h3 style="font-size: 1.25rem; color: var(--color-primary-navy); margin-bottom: 14px; font-weight: 700;">Why This 14-Day Circuit Sequence Works Best</h3>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; font-size: 0.95rem; color: var(--color-neutral-700); line-height: 1.6;">
                <div>
                  <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 4px;">1. Progressive Elevation Profile</strong>
                  Sleeping altitude gains from Chame (+475m to Pisang, +315m to Manang, +518m to Yak Kharka, +432m to Phedi) adhere strictly to medical acclimatization guidelines.
                </div>
                <div>
                  <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 4px;">2. Mandatory Manang Rest Day</strong>
                  Day 5 pauses sleeping gain while allowing active day-hikes up to ~3,900m, preparing your respiratory system before pushing past 4,000 meters.
                </div>
                <div>
                  <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 4px;">3. Counterclockwise Safety</strong>
                  Approaching Thorong La from Manang provides a progressive, multi-day ascent, whereas attempting the crossing from the Muktinath side involves an excessively rapid 1,600m altitude leap.
                </div>
                <div>
                  <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 4px;">4. Complete Southern Finale</strong>
                  Rather than cutting the trek short at Jomsom, our itinerary includes the restorative hot springs at Tatopani and the world-famous Poon Hill sunrise over Dhaulagiri.
                </div>
              </div>
            </div>

          </section>
`;
}

module.exports = { generateItineraryHtml };
console.log('build_act_itinerary.js created successfully');
