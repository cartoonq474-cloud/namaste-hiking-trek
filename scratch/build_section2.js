const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'trek', 'langtang-valley-trek', 'index.html');
let html = fs.readFileSync(targetPath, 'utf8');

const s2Start = html.indexOf('<!-- Section 2: Itinerary -->');
const s3Start = html.indexOf('<!-- Section 3: Includes and Excludes -->');

if (s2Start === -1 || s3Start === -1) {
  console.error('Could not find Section 2/3 boundaries!');
  process.exit(1);
}

// Available images in images/treks/langtang-valley/
const imgSet = [
  '../../images/treks/langtang-valley/langtang-trek-snowy-mountain-landscape-05.jpg',
  '../../images/treks/langtang-valley/langtang-trek-trekkers-mountain-view-01.jpg',
  '../../images/treks/langtang-valley/langtang-trek-trekkers-prayer-flags-02.jpg',
  '../../images/treks/langtang-valley/langtang-trek-hiker-mountain-view-03.jpg',
  '../../images/treks/langtang-valley/langtang-trek-trekkers-selfie-04.jpg',
  '../../images/treks/langtang-valley/langtang-trek-hiker-rocky-viewpoint-06.jpg',
  '../../images/treks/langtang-valley/langtang-trek-trekking-community-group-photo-07.jpg'
];

function getPhotoGrid(dIndex) {
  const p1 = imgSet[(dIndex * 2) % imgSet.length];
  const p2 = imgSet[(dIndex * 2 + 1) % imgSet.length];
  const p3 = imgSet[(dIndex * 2 + 2) % imgSet.length];
  const p4 = imgSet[(dIndex * 2 + 3) % imgSet.length];
  return `                    <div class="itinerary-photos-grid">
                      <div class="itinerary-photo-wrapper">
                        <img loading="lazy" src="${p1}" alt="Langtang Valley Trek Day View">
                      </div>
                      <div class="itinerary-photo-wrapper">
                        <img loading="lazy" src="${p2}" alt="Langtang Trek Mountain Scenery">
                      </div>
                      <div class="itinerary-photo-wrapper">
                        <img loading="lazy" src="${p3}" alt="Langtang Teahouse and Alpine Landscapes">
                      </div>
                      <div class="itinerary-photo-wrapper">
                        <img loading="lazy" src="${p4}" alt="Langtang Himalayan Ridge and Peaks">
                      </div>
                    </div>`;
}

const daysData = [
  {
    num: 1,
    title: "Arrival in Kathmandu & Transfer to Hotel",
    sub: "Kathmandu – 1,400 m / 4,593 ft",
    alt: 1400,
    metrics: [
      { icon: "clock", text: "Transfer time: 20 to 30 minutes" },
      { icon: "home", text: "Accommodation: 3★ Hotel in Kathmandu (Thamel)" },
      { icon: "activity", text: "Activity: Airport greeting, transfer & trek preparation" }
    ],
    meals: "Welcome Dinner (D) / As arranged",
    overnight: "Kathmandu",
    paragraphs: [
      "Your Langtang Valley Trek begins with your arrival in Kathmandu, the capital of Nepal and the starting point for the journey into the Langtang mountains.",
      "After arriving at the airport, you are transferred to your hotel and given time to settle in. Depending on your arrival time, the remainder of the day can be used for rest or a short walk around the nearby area.",
      "The first priority is preparation for the trek. Your trekking equipment can be checked, luggage can be organized, and essential items such as your passport, personal medication, trekking documents, money, electronics and other valuables can be kept ready for the journey ahead. Because the Langtang Valley Trek is reached by road, the classic itinerary does not require a domestic flight, avoiding airport transit uncertainty.",
      "The evening is kept relaxed so you can recover from international travel and prepare for the road journey and trekking days ahead."
    ]
  },
  {
    num: 2,
    title: "Kathmandu Sightseeing and Final Trek Preparation",
    sub: "Kathmandu – 1,400 m / 4,593 ft",
    alt: 1400,
    metrics: [
      { icon: "clock", text: "Time: Flexible sightseeing & prep day" },
      { icon: "home", text: "Accommodation: 3★ Hotel in Kathmandu" },
      { icon: "activity", text: "Activity: UNESCO heritage sightseeing, gear check & briefing" }
    ],
    meals: "Breakfast (B)",
    overnight: "Kathmandu",
    paragraphs: [
      "The second day provides additional time in Kathmandu before heading toward the Langtang region. This day can be used for sightseeing, personal activities or final trekking preparation, depending on your arrival schedule and travel preferences.",
      "Travelers who want to experience Kathmandu can use the day to explore its cultural and historic UNESCO World Heritage areas. Those who have already visited the city can keep the day relaxed and focus on preparing for the trek.",
      "Your trekking clothing, footwear, backpack, sleeping equipment, personal medication and other essential items should be checked before departure. It is also useful to charge phones, cameras and power banks because connectivity and charging opportunities become less convenient as the trek moves deeper into the mountains.",
      "The main purpose of this day is to begin the trekking portion properly prepared rather than rushing directly from international travel into a long road journey."
    ]
  },
  {
    num: 3,
    title: "Drive from Kathmandu to Syabrubesi",
    sub: "Syabrubesi – 1,450 m / 4,757 ft – 6 to 8 hours drive",
    alt: 1450,
    metrics: [
      { icon: "car", text: "Drive time: Approximately 6 to 8 hours" },
      { icon: "home", text: "Accommodation: Mountain Teahouse or Lodge in Syabrubesi" },
      { icon: "activity", text: "Transportation: Scenic overland drive via Trishuli & Dhunche" }
    ],
    meals: "Breakfast, Lunch and Dinner (B, L, D)",
    overnight: "Syabrubesi (1,450 m)",
    paragraphs: [
      "After breakfast, the journey begins with a scenic drive from Kathmandu toward Syabrubesi, the principal road gateway for the classic Langtang Valley Trek.",
      "The road gradually leaves the Kathmandu Valley and enters Nepal's rugged hill country along the Pasang Lhamu Highway. The scenery changes from urban development to agricultural terraced fields, rivers, villages, forested slopes and increasingly mountainous terrain.",
      "The final part of the journey follows mountain roads through Dhunche toward Syabrubesi. Travel time can vary because of traffic, weather, road conditions and local checkpoints, so the published driving time should be treated as an approximate range.",
      "After arriving in Syabrubesi, you check into the local teahouse and prepare for the first full trekking day. You can organize your daypack, separate any items that will be needed during the walk, and rest after the long road journey. Syabrubesi marks the point where the road-based part of the itinerary gives way to the walking section of the Langtang Valley Trek."
    ]
  },
  {
    num: 4,
    title: "Syabrubesi to Lama Hotel",
    sub: "Lama Hotel – 2,400 to 2,500 m / 8,202 ft – 5 to 6 hours",
    alt: 2480,
    metrics: [
      { icon: "clock", text: "Trek time: Approximately 5 to 6 hours" },
      { icon: "map", text: "Trek Distance: Approx. 11 km / 6.8 miles" },
      { icon: "home", text: "Accommodation: Mountain Teahouse in Lama Hotel" },
      { icon: "activity", text: "Trail: Riverbank ascent, suspension bridges, Bamboo (1,975m)" }
    ],
    meals: "Breakfast, Lunch and Dinner (B, L, D)",
    overnight: "Lama Hotel (2,480 m)",
    paragraphs: [
      "The first full trekking day begins after breakfast in Syabrubesi. The trail enters the forested lower Langtang Valley and follows the Langtang Khola river through a combination of uphill paths, stone sections, suspension bridges and woodland.",
      "The route gradually gains elevation as it moves through the lower valley and reaches Bamboo (approx. 1,975 m) before continuing toward Lama Hotel. This is a full trekking day, so the main objective is to establish a comfortable, sustainable rhythm.",
      "The landscape is very different from the open alpine terrain that appears later in the trek. Dense forest surrounds much of the lower trail, and the roar of the river remains a constant companion. In spring, the forest blooms with fresh green shoots and rhododendrons; autumn brings crisp, stable walking conditions.",
      "After several hours of climbing through the gorge, you reach Lama Hotel and settle into the teahouse for a warm meal, hydration, rest, and briefing for tomorrow's ascent."
    ]
  },
  {
    num: 5,
    title: "Lama Hotel to Langtang Village / Mundu",
    sub: "Langtang Village – 3,300 to 3,550 m / 11,250 ft – 5 to 6 hours",
    alt: 3430,
    metrics: [
      { icon: "clock", text: "Trek time: Approximately 5 to 6 hours" },
      { icon: "map", text: "Trek Distance: Approx. 10.5 km / 6.5 miles" },
      { icon: "home", text: "Accommodation: Teahouse in Langtang Village or Mundu" },
      { icon: "activity", text: "Milestones: Ghora Tabela (3,000m), entering upper valley" }
    ],
    meals: "Breakfast, Lunch and Dinner (B, L, D)",
    overnight: "Langtang Village or Mundu (3,430 m)",
    paragraphs: [
      "After breakfast, the trail continues upward from Lama Hotel toward the higher Langtang Valley. The morning section remains within the woodland for part of the route, but the landscape gradually becomes more open as elevation increases.",
      "Ghora Tabela (approx. 3,000 m) provides an important milestone where the valley suddenly widens, the dense forest thins into subalpine meadows, and the surrounding peaks become prominent. The effects of altitude become more noticeable as you climb above 3,000 metres.",
      "Langtang Village is one of the most culturally significant settlements on the classic route. Rebuilt after the 2015 earthquake, it provides a moving testament to Tamang resilience, traditional stone architecture, and Buddhist culture with prayer wheels, chortens, and mani walls.",
      "Depending on the accommodation arrangement, the overnight stop is in Langtang Village or nearby Mundu. The evening is kept relaxed to prepare for the ascent to Kyanjin Gompa."
    ],
    alert: "The actual Day 5 overnight affects the sleeping-altitude gain to Kyanjin. Confirm the lodge elevation and adapt the schedule to personal symptoms and acclimatization; the later Kyanjin rest/exploration day does not cancel risk from an earlier rapid ascent."
  },
  {
    num: 6,
    title: "Langtang Village to Kyanjin Gompa",
    sub: "Kyanjin Gompa – 3,800 to 3,870 m / 12,696 ft – 3 to 4 hours",
    alt: 3870,
    metrics: [
      { icon: "clock", text: "Trek time: Approximately 3 to 4 hours" },
      { icon: "map", text: "Trek Distance: Approx. 6.5 km / 4.0 miles" },
      { icon: "home", text: "Accommodation: Mountain Teahouse in Kyanjin Gompa" },
      { icon: "activity", text: "Highlights: Broad glacial valley, Kyanjin Gompa monastery" }
    ],
    meals: "Breakfast, Lunch and Dinner (B, L, D)",
    overnight: "Kyanjin Gompa (3,870 m)",
    paragraphs: [
      "The sixth day takes you into the upper Langtang Valley and to Kyanjin Gompa, the main destination of the classic trek. Compared with some of the previous trekking stages, the walking time is relatively short, but the increase in elevation makes the day particularly important.",
      "The landscape transforms rapidly: the forest completely gives way to high alpine grasslands, lateral moraines, and snow-dusted ridgelines. En route, you cross wide yak pastures, passing extensive mani walls built with carved slate prayer stones.",
      "The trail gradually enters Kyanjin Gompa (approx. 3,800–3,870 m), nestled directly below the dramatic south face of Langtang Lirung (7,245 m).",
      "After arriving and checking into your lodge, the afternoon is spent resting and taking gentle strolls around the village and monastery rather than rushing uphill. This gives the body essential time to adjust to sleeping at nearly 3,900 meters."
    ]
  },
  {
    num: 7,
    title: "Kyanjin Gompa Acclimatization and Upper Valley Exploration",
    sub: "Kyanjin Gompa – 3,800 m / 12,467 ft – 3 to 6 hours",
    alt: 3800,
    metrics: [
      { icon: "clock", text: "Activity time: 3 to 6 hours depending on choices" },
      { icon: "home", text: "Accommodation: Mountain Teahouse in Kyanjin Gompa" },
      { icon: "activity", text: "Activities: Cheese factory, Langshisa valley walk, glacier view" }
    ],
    meals: "Breakfast, Lunch and Dinner (B, L, D)",
    overnight: "Kyanjin Gompa (3,870 m)",
    paragraphs: [
      "Day seven is dedicated to acclimatization and exploration around Kyanjin Gompa. Rather than reaching the highest standard sleeping point and immediately descending, spending multiple nights at altitude creates a sustainable rhythm and provides time to genuinely absorb the upper valley.",
      "The day's activity is tailored to your physical condition and the weather: you can take a gentle walk through the settlement, visit the historic Kyanjin Gompa monastery, sample fresh artisanal yak cheese at the famous local dairy, or hike along the glacial moraine toward Langshisa Kharka.",
      "Because your main luggage remains securely at the teahouse, you carry only a light daypack with warm layers and water, making movement far more comfortable.",
      "This extra day also provides a valuable weather window for the following day's viewpoint climb, ensuring you do not have to force a high summit attempt in poor visibility."
    ],
    alert: "Kyanjin Ri and Tserko Ri are distinct objectives. Specify the actual viewpoint or summit and its elevation in the confirmed itinerary; do not promise that every group reaches a single generic 5,000-m endpoint. Weather, snow, health, available daylight and guide assessment determine the turnaround."
  },
  {
    num: 8,
    title: "Kyanjin Ri or Tserko Ri High Viewpoint Day Hike",
    sub: "Viewpoint Summit – 4,700 to 5,000 m / 16,350 ft – 5 to 8 hours",
    alt: 4984,
    metrics: [
      { icon: "clock", text: "Hike time: 5 to 8 hours depending on objective" },
      { icon: "altitude", text: "Max Altitude: 4,773 m (Kyanjin Ri) or 4,984 m (Tserko Ri)" },
      { icon: "home", text: "Accommodation: Mountain Teahouse in Kyanjin Gompa" },
      { icon: "activity", text: "Summit: 360° Panorama of Langtang Lirung, Dorje Lakpa & Tibet" }
    ],
    meals: "Breakfast, Lunch and Dinner (B, L, D)",
    overnight: "Kyanjin Gompa (3,870 m)",
    paragraphs: [
      "The eighth day is the main high-altitude exploration highlight of the entire trek. After an early morning breakfast, you begin the steep ascent toward one of the dramatic viewpoints towering above Kyanjin.",
      "Kyanjin Ri (4,773 m) is the favored choice for most trekkers, requiring roughly 4 to 5 hours round trip for breathtaking panoramic views of Langtang Lirung, Kinshung, Yansa Tsenji, and the glacial valley floor. Tserko Ri (4,984 m) is a more strenuous 7 to 8-hour endeavor suited for experienced, well-conditioned hikers seeking a high Himalayan summit experience.",
      "The ascent is taken slowly with rhythmic breathing ('Bistari, Bistari'). As you gain elevation, the surrounding mountains transform into an interconnected amphitheater of snow ridges and hanging seracs.",
      "The high-altitude climb remains completely optional. If weather turns, or if anyone displays symptoms of altitude sickness, the turnaround is immediate. In the afternoon, you return to Kyanjin Gompa to celebrate and rest for your final night in the high valley."
    ]
  },
  {
    num: 9,
    title: "Kyanjin Gompa to Lama Hotel",
    sub: "Lama Hotel – 2,400 to 2,500 m / 8,202 ft – 6 to 7 hours",
    alt: 2480,
    metrics: [
      { icon: "clock", text: "Trek time: Approximately 6 to 7 hours" },
      { icon: "map", text: "Trek Distance: Approx. 17 km / 10.5 miles" },
      { icon: "home", text: "Accommodation: Mountain Teahouse in Lama Hotel" },
      { icon: "activity", text: "Descent: Retracing upper valley, Ghora Tabela, into forest" }
    ],
    meals: "Breakfast, Lunch and Dinner (B, L, D)",
    overnight: "Lama Hotel (2,480 m)",
    paragraphs: [
      "The ninth day begins the descent from Kyanjin Gompa. After breakfast, you retrace your steps down the valley through Langtang Village, Ghora Tabela, and back to Lama Hotel.",
      "Descending through the valley provides a completely fresh visual perspective. As you lose altitude, the air becomes noticeably richer in oxygen and breathing feels effortless compared to previous days. The expansive alpine scenery gradually gives way to rhododendron and pine canopies.",
      "While descending requires less cardiovascular exertion, long downhill walking places sustained impact on the quadriceps, knees, and ankles. A disciplined, controlled pace and the use of trekking poles are highly recommended on the rocky trails and stone staircases.",
      "After reaching Lama Hotel in the late afternoon, you settle into the lodge for hot tea, hearty food, and deep recovery."
    ]
  },
  {
    num: 10,
    title: "Lama Hotel to Syabrubesi",
    sub: "Syabrubesi – 1,450 to 1,550 m / 4,757 ft – 5 to 6 hours",
    alt: 1450,
    metrics: [
      { icon: "clock", text: "Trek time: Approximately 5 to 6 hours" },
      { icon: "map", text: "Trek Distance: Approx. 11 km / 6.8 miles" },
      { icon: "home", text: "Accommodation: Mountain Teahouse or Lodge in Syabrubesi" },
      { icon: "activity", text: "Final Trail Day: Bamboo, suspension bridges, valley trailhead" }
    ],
    meals: "Breakfast, Lunch and Dinner (B, L, D)",
    overnight: "Syabrubesi (1,450 m)",
    paragraphs: [
      "The tenth day completes the walking portion of the Langtang Valley journey. Leaving Lama Hotel, the trail winds downhill through the deep river gorge, crossing Bamboo and traversing stone pathways alongside the Langtang Khola.",
      "The environment becomes warmer and greener with each passing hour. You cross the final suspension bridges and walk the gentle approach back into Syabrubesi, officially completing the classic mountain trail.",
      "In the evening, you gather with your guide and porter team for a celebratory dinner, expressing appreciation for their dedication and companionship throughout the trek.",
      "Overnight in Syabrubesi before the overland return drive tomorrow."
    ]
  },
  {
    num: 11,
    title: "Syabrubesi to Kathmandu",
    sub: "Kathmandu – 1,400 m / 4,593 ft – 6 to 8+ hours drive",
    alt: 1400,
    metrics: [
      { icon: "car", text: "Drive time: Approximately 6 to 8+ hours" },
      { icon: "home", text: "Accommodation: 3★ Hotel in Kathmandu (Thamel)" },
      { icon: "activity", text: "Overland Transfer: Returning from mountains to Kathmandu" }
    ],
    meals: "Breakfast and Lunch (B, L)",
    overnight: "Kathmandu",
    paragraphs: [
      "After breakfast in Syabrubesi, you board your private vehicle or shared jeep to begin the return overland journey to Kathmandu.",
      "The drive retraces the winding hill roads through Dhunche and Trishuli Bazaar, gradually leaving the mountain scenery behind as you re-enter the bustling Kathmandu Valley rim.",
      "Upon arrival in Kathmandu, you are transferred directly to your hotel in Thamel. After several days of rustic mountain teahouses, enjoy a long hot shower, comfortable bedding, and a relaxed evening exploring local cafes and restaurants.",
      "Overnight in Kathmandu."
    ]
  },
  {
    num: 12,
    title: "Kathmandu Rest and Recovery Day",
    sub: "Kathmandu – 1,400 m / 4,593 ft",
    alt: 1400,
    metrics: [
      { icon: "clock", text: "Time: Dedicated rest & buffer day" },
      { icon: "home", text: "Accommodation: 3★ Hotel in Kathmandu" },
      { icon: "activity", text: "Activity: Muscle recovery, massage, photo sorting & buffer" }
    ],
    meals: "Breakfast (B)",
    overnight: "Kathmandu",
    paragraphs: [
      "Day twelve is intentionally designed as a full rest and contingency day. After completing multi-day mountain trekking and road travel, having an unhurried day gives your body the time it needs to recover.",
      "You can spend the day resting at your hotel, booking an Ayurvedic herbal massage, organizing photos, and enjoying Kathmandu's vibrant food scene at your own pace.",
      "Crucially, this day serves as a built-in buffer in case road conditions, weather, or altitude adjustments caused slight delays on the trail. Having this cushion ensures you never experience stress regarding your international travel schedule."
    ]
  },
  {
    num: 13,
    title: "Kathmandu Cultural and Flexible Day",
    sub: "Kathmandu – 1,400 m / 4,593 ft",
    alt: 1400,
    metrics: [
      { icon: "clock", text: "Time: Full flexible cultural day" },
      { icon: "home", text: "Accommodation: 3★ Hotel in Kathmandu" },
      { icon: "activity", text: "Activity: Thamel souvenir shopping, optional heritage exploration" }
    ],
    meals: "Breakfast and Farewell Dinner (B, D)",
    overnight: "Kathmandu",
    paragraphs: [
      "The thirteenth day provides another relaxed, flexible day in Kathmandu. Travelers seeking additional cultural enrichment can visit iconic heritage landmarks such as Swayambhunath (Monkey Temple), Boudhanath Stupa, or the medieval courtyards of Patan Durbar Square.",
      "This is also an ideal day for souvenir shopping in Thamel—browsing authentic pashminas, hand-painted thangkas, singing bowls, and Himalayan teas.",
      "In the evening, we gather for a special farewell dinner hosted by Namaste Hiking Trek, celebrating your successful journey through the Langtang Valley and handing over your trek completion certificates.",
      "Overnight in Kathmandu."
    ]
  },
  {
    num: 14,
    title: "Final Departure from Nepal",
    sub: "Kathmandu – 1,400 m / 4,593 ft",
    alt: 1400,
    metrics: [
      { icon: "car", text: "Transfer time: 20 to 30 minutes to TIA" },
      { icon: "home", text: "Accommodation: None (End of package service)" },
      { icon: "activity", text: "Activity: Private airport drop-off for international flight" }
    ],
    meals: "Breakfast (B)",
    overnight: "End of service",
    paragraphs: [
      "Your 14-day Langtang Valley Trek concludes today. After breakfast, pack your luggage and prepare for your departure transfer.",
      "Our company representative and private vehicle will meet you at your hotel and transfer you to Tribhuvan International Airport approximately 3 hours before your scheduled flight.",
      "As you board your homeward flight, you carry lifelong memories of the roaring Langtang Khola, the warm Tamang villages, the soaring crown of Langtang Lirung, and the peaceful serenity of Kyanjin Gompa. Namaste and safe travels!"
    ]
  }
];

function buildDayCard(day, index) {
  const isActive = index === 0 ? " active" : "";
  
  let metricsHtml = "";
  day.metrics.forEach(m => {
    let iconSvg = "";
    if (m.icon === "clock") {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>';
    } else if (m.icon === "home") {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>';
    } else if (m.icon === "car") {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>';
    } else if (m.icon === "map") {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11.5a6.5 6.5 0 0 1-13 0"></path><path d="M2 10h20"></path></svg>';
    } else if (m.icon === "altitude") {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22L12 2l8 20H4z"></path></svg>';
    } else {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 22 22 22"></polygon></svg>';
    }
    metricsHtml += `                      <div class="itinerary-metric-item">
                        ${iconSvg}
                        <span>${m.text}</span>
                      </div>\n`;
  });

  let parasHtml = day.paragraphs.map(p => `                      <p>${p}</p>`).join('\n');

  let alertHtml = "";
  if (day.alert) {
    alertHtml = `\n                      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px 16px; border-radius: 4px; margin: 16px 0; font-size: 0.92rem; color: #92400e; line-height: 1.5;">
                        <strong>Important Note:</strong> ${day.alert}
                      </div>\n`;
  }

  const photosHtml = getPhotoGrid(index);

  return `              <!-- Day ${day.num < 10 ? '0' + day.num : day.num} -->
              <div class="itinerary-card${isActive}">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day ${day.num}:</span> ${day.title}
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      ${day.sub.replace(/\b(\d{1,2}(?:,\d{3})?)\s*m\b/g, '<span data-altitude-m="$1">$1 m</span>')}
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
${metricsHtml}                    </div>

                    <div class="itinerary-meta-box">
                      <div class="itinerary-meta-box-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                        </svg>
                        <span>Meals: ${day.meals}</span>
                      </div>
                      <div class="itinerary-meta-box-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                          <circle cx="12" cy="9" r="2.5"></circle>
                        </svg>
                        <span>Overnight: ${day.overnight}</span>
                      </div>
                    </div>

                    <div class="itinerary-description">
${parasHtml}${alertHtml}                    </div>

${photosHtml}
                  </div>
                </div>
              </div>\n`;
}

let allCardsHtml = daysData.map((d, i) => buildDayCard(d, i)).join('\n');

const routeAtGlanceTable = `
            <!-- Route at a Glance Table -->
            <div style="margin-top: 40px; margin-bottom: 30px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
              <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--color-primary-navy); font-weight: 700; display: flex; align-items: center; gap: 8px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="9"></line><line x1="9" y1="13" x2="15" y2="13"></line><line x1="9" y1="17" x2="15" y2="17"></line></svg>
                14-Day Langtang Valley Trek Route at a Glance
              </h3>
              <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; color: var(--color-neutral-700);">
                  <thead>
                    <tr style="background: #f8fafc; border-bottom: 2px solid #e2e8f0; text-align: left;">
                      <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Day</th>
                      <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Route / Activity</th>
                      <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Approx. Time</th>
                      <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Overnight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 14px; font-weight: 600;">Day 1</td><td style="padding: 10px 14px;">Arrival in Kathmandu & Transfer to Hotel</td><td style="padding: 10px 14px;">Flexible</td><td style="padding: 10px 14px;">Kathmandu (1,400 m)</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;"><td style="padding: 10px 14px; font-weight: 600;">Day 2</td><td style="padding: 10px 14px;">Kathmandu Sightseeing and Final Trek Preparation</td><td style="padding: 10px 14px;">Flexible</td><td style="padding: 10px 14px;">Kathmandu (1,400 m)</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 14px; font-weight: 600;">Day 3</td><td style="padding: 10px 14px;">Kathmandu to Syabrubesi by Scenic Overland Drive</td><td style="padding: 10px 14px;">6 to 8 hrs drive</td><td style="padding: 10px 14px;">Syabrubesi (1,450 m)</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;"><td style="padding: 10px 14px; font-weight: 600;">Day 4</td><td style="padding: 10px 14px;">Syabrubesi to Lama Hotel via Bamboo</td><td style="padding: 10px 14px;">5 to 6 hrs</td><td style="padding: 10px 14px;">Lama Hotel (2,480 m)</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 14px; font-weight: 600;">Day 5</td><td style="padding: 10px 14px;">Lama Hotel to Langtang Village / Mundu via Ghora Tabela</td><td style="padding: 10px 14px;">5 to 6 hrs</td><td style="padding: 10px 14px;">Langtang Village / Mundu</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;"><td style="padding: 10px 14px; font-weight: 600;">Day 6</td><td style="padding: 10px 14px;">Langtang Village / Mundu to Kyanjin Gompa</td><td style="padding: 10px 14px;">3 to 4 hrs</td><td style="padding: 10px 14px;">Kyanjin Gompa (3,870 m)</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 14px; font-weight: 600;">Day 7</td><td style="padding: 10px 14px;">Kyanjin Acclimatization & Upper Valley Exploration</td><td style="padding: 10px 14px;">3 to 6 hrs</td><td style="padding: 10px 14px;">Kyanjin Gompa (3,870 m)</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;"><td style="padding: 10px 14px; font-weight: 600;">Day 8</td><td style="padding: 10px 14px;">High Viewpoint Day: Kyanjin Ri (4,773m) or Tserko Ri (4,984m)</td><td style="padding: 10px 14px;">5 to 8 hrs</td><td style="padding: 10px 14px;">Kyanjin Gompa (3,870 m)</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 14px; font-weight: 600;">Day 9</td><td style="padding: 10px 14px;">Kyanjin Gompa to Lama Hotel (Descent)</td><td style="padding: 10px 14px;">6 to 7 hrs</td><td style="padding: 10px 14px;">Lama Hotel (2,480 m)</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;"><td style="padding: 10px 14px; font-weight: 600;">Day 10</td><td style="padding: 10px 14px;">Lama Hotel to Syabrubesi (Final Walking Day)</td><td style="padding: 10px 14px;">5 to 6 hrs</td><td style="padding: 10px 14px;">Syabrubesi (1,450 m)</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 14px; font-weight: 600;">Day 11</td><td style="padding: 10px 14px;">Syabrubesi to Kathmandu by Scenic Overland Drive</td><td style="padding: 10px 14px;">6 to 8+ hrs drive</td><td style="padding: 10px 14px;">Kathmandu (1,400 m)</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;"><td style="padding: 10px 14px; font-weight: 600;">Day 12</td><td style="padding: 10px 14px;">Kathmandu Rest, Recovery & Travel Contingency</td><td style="padding: 10px 14px;">Flexible</td><td style="padding: 10px 14px;">Kathmandu (1,400 m)</td></tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 14px; font-weight: 600;">Day 13</td><td style="padding: 10px 14px;">Kathmandu Cultural Sightseeing & Farewell Dinner</td><td style="padding: 10px 14px;">Flexible</td><td style="padding: 10px 14px;">Kathmandu (1,400 m)</td></tr>
                    <tr style="background: #fafafa;"><td style="padding: 10px 14px; font-weight: 600;">Day 14</td><td style="padding: 10px 14px;">Final International Airport Transfer & Departure</td><td style="padding: 10px 14px;">Flexible</td><td style="padding: 10px 14px;">End of Service</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Route in Perspective Note -->
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; margin-bottom: 24px;">
              <h4 style="font-size: 1.15rem; color: var(--color-primary-navy); margin-bottom: 10px; font-weight: 700;">The Core Langtang Trekking Route in Perspective</h4>
              <p style="font-size: 0.95rem; color: var(--color-neutral-700); line-height: 1.6; margin-bottom: 10px;">
                The central trekking corridor follows: <strong>Syabrubesi → Bamboo → Lama Hotel → Ghora Tabela → Langtang Village / Mundu → Kyanjin Gompa → Langtang Village → Lama Hotel → Syabrubesi</strong>.
              </p>
              <p style="font-size: 0.95rem; color: var(--color-neutral-700); line-height: 1.6; margin: 0;">
                Unlike routes that require crossing a high technical pass, the classic Langtang journey focuses on climbing deeply into an alpine valley beneath Langtang Lirung and returning through the same varied ecological corridor. Our 14-day schedule includes three full nights at Kyanjin Gompa, giving you the physical buffer, acclimatization, and safety to attempt Kyanjin Ri or Tserko Ri without rushing.
              </p>
            </div>
`;

const newSection2 = `<!-- Section 2: Itinerary -->
          <section id="section-itinerary" class="trek-detail-section">
            <h2 class="trek-section-title">Langtang Valley Trek Itinerary: Day by Day Details</h2>
            <p style="font-size: 1.05rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 24px; max-width: 800px;">
              Our comprehensive 14-day itinerary is paced to maximize safety, acclimatization, and cultural discovery. Explore the daily hiking hours, elevation profiles, meals, and overnight stops along the Langtang Khola valley below.
            </p>
            
            <div class="itinerary-timeline">
${allCardsHtml}            </div>
${routeAtGlanceTable}          </section>

          <!-- Custom Itinerary Plan Your Trip CTA Banner Card -->
          <div class="custom-trip-cta-card">
            <div class="custom-trip-cta-left">
              <h3 class="custom-trip-cta-title">Not satisfied with this Itinerary?</h3>
              <p class="custom-trip-cta-subtitle">Are you interested on planning custom trip? It only takes 2 minutes.</p>
            </div>
            <div class="custom-trip-cta-right">
              <div class="cta-dotted-arc"></div>
              <a href="#" class="btn-plan-trip-cyan open-inquiry-modal-btn" data-inquiry-type="Tailor-Made Custom Trip">Plan Your Trip</a>
            </div>
          </div>\n\n          `;

html = html.substring(0, s2Start) + newSection2 + html.substring(s3Start);
fs.writeFileSync(targetPath, html, 'utf8');
console.log('Section 2 updated successfully! New file length:', html.length);
