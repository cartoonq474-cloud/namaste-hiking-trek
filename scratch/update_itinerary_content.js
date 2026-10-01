const fs = require('fs');
const { execSync } = require('child_process');

const filePath = 'trek/everest-base-camp-trek/index.html';
const content = fs.readFileSync(filePath, 'utf8');

// Get clean photo grids directly from HEAD~1
const orig = execSync('git show HEAD~1:trek/everest-base-camp-trek/index.html', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });

const cleanPhotos = {};
for (let d = 1; d <= 14; d++) {
  const dayStr = d < 10 ? '0' + d : '' + d;
  const startComment = `<!-- Day ${dayStr} -->`;
  const nextDayStr = (d + 1) < 10 ? '0' + (d + 1) : '' + (d + 1);
  const endComment = d < 14 ? `<!-- Day ${nextDayStr} -->` : '<!-- Custom Itinerary';
  
  const dStart = orig.indexOf(startComment);
  const dEnd = orig.indexOf(endComment, dStart);
  
  const chunk = orig.substring(dStart, dEnd);
  const pStart = chunk.indexOf('<div class="itinerary-photos-grid">');
  const pEndPattern = '</div>\n                  </div>\n                </div>\n              </div>';
  const pEndPatternCRLF = '</div>\r\n                  </div>\r\n                </div>\r\n              </div>';
  
  let pEnd = chunk.indexOf(pEndPattern);
  if (pEnd === -1) pEnd = chunk.indexOf(pEndPatternCRLF);
  
  if (pStart !== -1 && pEnd !== -1) {
    // Include the closing </div> of itinerary-photos-grid
    cleanPhotos[d] = chunk.substring(pStart, pEnd) + '\n                    </div>';
  } else {
    console.error(`Could not extract clean photos for Day ${d}`);
    process.exit(1);
  }
}

// Verify that each extracted photo grid has matching div count (opens === closes)
for (let d = 1; d <= 14; d++) {
  const grid = cleanPhotos[d];
  const opens = (grid.match(/<div/g) || []).length;
  const closes = (grid.match(/<\/div>/g) || []).length;
  if (opens !== closes) {
    console.error(`Day ${d} photo grid unbalanced: opens=${opens}, closes=${closes}`);
    process.exit(1);
  }
}
console.log('All 14 photo grids perfectly extracted and div-balanced (5 opens, 5 closes each).');

// Helper for SVG icons
const icons = {
  clock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>`,
  plane: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
                        </svg>`,
  bed: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>`,
  mountain: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polygon points="12 2 2 22 22 22"></polygon>
                        </svg>`,
  route: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M18 11.5a6.5 6.5 0 0 1-13 0"></path>
                          <path d="M2 10h20"></path>
                        </svg>`,
  compass: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                        </svg>`,
  spoon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                        </svg>`,
  pin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                          <circle cx="12" cy="9" r="2.5"></circle>
                        </svg>`,
  toggleBtn: `<div class="itinerary-toggle-btn-new">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>`
};

// Data for each day
const daysData = [
  {
    dayNum: 1,
    dayLabel: 'Day 1:',
    title: 'Arrival at Tribhuvan International Airport in Kathmandu and transfer to hotel',
    subtitle: `Kathmandu – approximately <span data-altitude-m="1300">1,300 m / 4,265 ft</span>`,
    metrics: [
      { icon: icons.clock, text: 'Transfer time: 20 to 30 minutes' },
      { icon: icons.bed, text: 'Accommodation: Hotel' },
      { icon: icons.mountain, text: 'Activity: Pre-trek briefing, documents & gear check' }
    ],
    meta: {
      meals: 'Meals: According to package',
      overnight: 'Overnight: Kathmandu'
    },
    paragraphs: [
      `Your Everest Base Camp adventure begins in Kathmandu, Nepal's capital and the main preparation point for the trek. After arriving at Tribhuvan International Airport, you will be transferred to your hotel in the Thamel area. This first day is deliberately easy. After a long international flight, you can rest, adjust to Nepal, walk around Thamel or take care of any final trekking requirements.`,
      `If you need equipment, trekking clothing, a SIM card, toiletries, snacks or other essentials, Kathmandu has a wide range of trekking shops and services. Later, you will attend your pre-trek briefing. This is where you meet your guide and, depending on the departure, your fellow trekkers. Your guide will explain the route day by day and discuss the practical realities of walking at altitude.`,
      `We will also check your essential trekking gear, luggage and documents before you leave for the Everest region. This is the point where the itinerary becomes more than an idea on your screen. Tomorrow, you leave the Kathmandu Valley and enter the Khumbu.`,
      `Overnight in Kathmandu.`
    ]
  },
  {
    dayNum: 2,
    dayLabel: 'Day 2:',
    title: 'Kathmandu to Lukla and Trek to Phakding',
    subtitle: `Lukla – approximately <span data-altitude-m="2860">2,860 m / 9,383 ft</span> | Phakding – approximately <span data-altitude-m="2610">2,600–2,650 m / 8,530–8,700 ft</span>`,
    metrics: [
      { icon: icons.plane, text: 'Flight: approximately 25–40 minutes, depending on operating conditions' },
      { icon: icons.clock, text: 'Trek: approximately 3–4 hours' },
      { icon: icons.bed, text: 'Accommodation: Teahouse' },
      { icon: icons.route, text: 'Trek Distance: approximately 8.2 km / 5.1 miles' }
    ],
    meta: {
      meals: 'Meals: Breakfast, lunch and dinner',
      overnight: 'Overnight: Phakding'
    },
    paragraphs: [
      `Today you travel toward Lukla, the traditional gateway to the Everest region. The mountain flight itself is a memorable part of the journey. As the aircraft leaves the Kathmandu area or the applicable departure airport, the landscape gradually changes from populated valleys and terraced hills to the steep Himalayan terrain surrounding the Khumbu.`,
      `Flight duration and departure arrangements can vary according to the operating airport and conditions. Because mountain aviation is weather-dependent, your actual flight timing may differ from the published schedule. After arriving at Lukla, you meet the rest of the trekking crew and begin walking.`,
      `The first section of the Everest Base Camp trekking route follows the Dudh Koshi valley through pine and other mountain vegetation, passing small Sherpa settlements, mani walls, chortens and prayer flags. The trail is comparatively gentle, making this an appropriate first walking day before the substantial climb toward Namche Bazaar.`,
      `You reach Phakding, a riverside settlement surrounded by green hills and mountain scenery. This first night is intentionally spent at a relatively lower elevation than Lukla's landing point, allowing you to begin the trek gradually.`,
      `Overnight in Phakding.`
    ]
  },
  {
    dayNum: 3,
    dayLabel: 'Day 3:',
    title: 'Phakding to Namche Bazaar',
    subtitle: `Namche Bazaar – approximately <span data-altitude-m="3440">3,440–3,500 m / 11,286–11,483 ft</span>`,
    metrics: [
      { icon: icons.clock, text: 'Trek: approximately 5–7 hours' },
      { icon: icons.route, text: 'Distance: approximately 10–12 km, depending on the exact route' },
      { icon: icons.bed, text: 'Accommodation: Teahouse' }
    ],
    meta: {
      meals: 'Meals: Breakfast, lunch and dinner',
      overnight: 'Overnight: Namche Bazaar'
    },
    paragraphs: [
      `Today the Everest Base Camp trek becomes more demanding. You follow the Dudh Koshi River through the lower Khumbu, crossing suspension bridges decorated with prayer flags before reaching Monjo and continuing toward the entrance to Sagarmatha National Park.`,
      `After the park checkpoint, the trail continues through Jorsale and eventually reaches the major suspension bridge crossing before the long climb toward Namche. Nepal Tourism Board describes this section as a gradual approach along the Dudh Koshi followed by a sustained ascent of around three hours toward Namche Bazaar.`,
      `The climb is steady rather than technical. You gain significant elevation in one day, so your guide will keep the pace controlled and allow regular breaks. As the trail rises through pine and rhododendron forest, the valley gradually opens behind you. On a clear day, you may catch one of your first distant views of the high Himalayan peaks.`,
      `Then Namche Bazaar appears ahead. Built into a curved mountainside, Namche is the principal trekking and trading centre of the Khumbu. You will find teahouses, bakeries, cafés, trekking shops and other services here.`,
      `More importantly, this is where your high-altitude acclimatization strategy begins. You spend the next two nights in Namche rather than continuing immediately toward Tengboche.`,
      `Overnight in Namche Bazaar.`
    ]
  },
  {
    dayNum: 4,
    dayLabel: 'Day 4:',
    title: 'Acclimatization Day in Namche Bazaar',
    subtitle: `Namche Bazaar – approximately <span data-altitude-m="3440">3,440–3,500 m</span>`,
    metrics: [
      { icon: icons.clock, text: 'Day hike: approximately 4–6 hours, depending on route and group condition' },
      { icon: icons.bed, text: 'Accommodation: Teahouse' },
      { icon: icons.compass, text: 'Acclimatization: Syangboche / Everest View Hotel / Khumjung / Khunde' }
    ],
    meta: {
      meals: 'Meals: Breakfast, lunch and dinner',
      overnight: 'Overnight: Namche Bazaar'
    },
    paragraphs: [
      `Today is an acclimatization day, but that does not mean doing nothing. The principle is to gain elevation during the day and return to Namche to sleep. Your guide may take you toward Syangboche, the Everest View Hotel, Khumjung or Khunde, depending on weather, group condition and the day's objectives.`,
      `Nepal Tourism Board specifically identifies the villages and viewpoints around Namche as suitable areas for acclimatization walks. A typical day involves a slow uphill hike, regular hydration and plenty of time to observe how your body responds to the elevation.`,
      `You may also use the day to explore Namche itself, visit local cultural sites or simply rest in preparation for the higher sections. The important thing is not how far you walk. The objective is to give your body additional time to adjust before your sleeping altitude rises again.`,
      `This is also a good opportunity to discuss any headache, unusual fatigue, nausea, dizziness, difficulty sleeping or other symptoms with your guide. Altitude affects individuals differently, and being fit does not make someone immune to altitude-related illness. Return to Namche in the afternoon for a meal and an early night. Tomorrow, the trail continues toward Tengboche.`,
      `Overnight in Namche Bazaar.`
    ]
  },
  {
    dayNum: 5,
    dayLabel: 'Day 5:',
    title: 'Namche Bazaar to Tengboche',
    subtitle: `Tengboche – approximately <span data-altitude-m="3860">3,860 m / 12,664 ft</span>`,
    metrics: [
      { icon: icons.clock, text: 'Trek: approximately 5–6 hours' },
      { icon: icons.bed, text: 'Accommodation: Teahouse' },
      { icon: icons.mountain, text: 'Highlight: Tengboche Monastery beneath Ama Dablam' }
    ],
    meta: {
      meals: 'Meals: Breakfast, lunch and dinner',
      overnight: 'Overnight: Tengboche'
    },
    paragraphs: [
      `The route from Namche to Tengboche is one of the most scenic sections of the Everest Base Camp trek.`,
      `The trail initially follows an open hillside above the Dudh Koshi valley, with views toward Thamserku, Kangtega, Ama Dablam, Lhotse and Everest when the weather is clear. After the relatively gentle traverse, the trail descends toward the Dudh Koshi before beginning the substantial ascent toward Tengboche.`,
      `The climb through forest is steady. As you gain elevation, rhododendron, pine and other Himalayan vegetation surround the trail, while the mountain panorama becomes increasingly dramatic. Eventually, the forest opens and Tengboche Monastery comes into view.`,
      `Tengboche is one of the most significant Buddhist centres in the Khumbu. The monastery is particularly famous for its setting with Ama Dablam rising behind it, and it is associated with the annual Mani Rimdu Buddhist festival.`,
      `When visitor access and religious activities permit, you can visit the monastery respectfully with guidance from your trekking team. The afternoon is also a good time to simply appreciate the setting. Tengboche is one of those places where the landscape and culture are inseparable.`,
      `Overnight in Tengboche.`
    ]
  },
  {
    dayNum: 6,
    dayLabel: 'Day 6:',
    title: 'Tengboche to Dingboche',
    subtitle: `Dingboche – approximately <span data-altitude-m="4410">4,410 m / 14,468 ft</span>`,
    metrics: [
      { icon: icons.clock, text: 'Trek: approximately 5–6 hours' },
      { icon: icons.route, text: 'Distance: approximately 10–12 km, depending on route' },
      { icon: icons.bed, text: 'Accommodation: Teahouse' }
    ],
    meta: {
      meals: 'Meals: Breakfast, lunch and dinner',
      overnight: 'Overnight: Dingboche'
    },
    paragraphs: [
      `Today you move deeper into the high-altitude Everest region. The trail first descends through forest toward Deboche before crossing the Imja Khola and continuing toward Pangboche. The changing environment becomes obvious as you gain altitude. Dense forest gradually gives way to more open slopes, stone walls and alpine vegetation.`,
      `Pangboche is one of the prominent Sherpa settlements on this section of the route. From here, the trail continues through Shomare before entering the wider Imja Valley. As you approach Dingboche, you begin to see the agricultural adaptation of the high Himalaya: stone-walled fields protect crops from the wind and harsh conditions.`,
      `Surrounding peaks such as Ama Dablam, Lhotse, Island Peak and other Himalayan mountains dominate the skyline. The air is now noticeably thinner than it was in Namche. That is why Dingboche is not simply another overnight stop. You will spend two nights here and use the following day for a second dedicated acclimatization hike.`,
      `Overnight in Dingboche.`
    ]
  },
  {
    dayNum: 7,
    dayLabel: 'Day 7:',
    title: 'Acclimatization Day in Dingboche',
    subtitle: `Dingboche – approximately <span data-altitude-m="4410">4,410 m / 14,468 ft</span>`,
    metrics: [
      { icon: icons.clock, text: 'Acclimatization hike: approximately 3–6 hours, depending on route and conditions' },
      { icon: icons.bed, text: 'Accommodation: Teahouse' },
      { icon: icons.mountain, text: 'Excursion: Nangkartshang / Nagarjun Hill viewpoint' }
    ],
    meta: {
      meals: 'Meals: Breakfast, lunch and dinner',
      overnight: 'Overnight: Dingboche'
    },
    paragraphs: [
      `This is the second major acclimatization day of the Everest Base Camp itinerary. The principle remains the same: climb higher during the day and return to Dingboche to sleep. Depending on weather, group condition and guide assessment, the hike may head toward Nangkartshang/Nagarjun Hill or another appropriate viewpoint around Dingboche.`,
      `The purpose is not to complete a particular peak at all costs. The goal is to expose your body to a higher elevation while preserving your ability to continue safely toward Lobuche and Gorak Shep. The views from the surrounding ridges can be exceptional. Looking across the Imja Valley, you may see Ama Dablam, Lhotse, Island Peak and other high Himalayan peaks, while the valley floor and stone-walled fields sit far below.`,
      `At this altitude, slow movement becomes essential. What would be an easy climb at sea level can feel surprisingly strenuous above 4,500 meters.`,
      `If your body is responding well, continue according to the planned acclimatization route. If you feel unwell, tell your guide immediately. The itinerary can be adjusted; reaching an arbitrary viewpoint is never more important than your health. Return to Dingboche for a substantial meal, hydration and rest.`,
      `Tomorrow, you leave the relative shelter of Dingboche and begin the approach toward the upper Khumbu.`,
      `Overnight in Dingboche.`
    ]
  },
  {
    dayNum: 8,
    dayLabel: 'Day 8:',
    title: 'Dingboche to Lobuche',
    subtitle: `Lobuche – approximately <span data-altitude-m="4940">4,940 m / 16,200 ft</span>`,
    metrics: [
      { icon: icons.clock, text: 'Trek: approximately 4–6 hours' },
      { icon: icons.bed, text: 'Accommodation: Teahouse' },
      { icon: icons.mountain, text: 'Pass: Thukla Pass memorials' }
    ],
    meta: {
      meals: 'Meals: Breakfast, lunch and dinner',
      overnight: 'Overnight: Lobuche'
    },
    paragraphs: [
      `The trail changes dramatically today. Leaving Dingboche, you continue through the increasingly exposed upper Khumbu Valley, with the mountains surrounding the route appearing larger and closer.`,
      `The landscape becomes more austere as the tree line disappears. Stone, moraine and high mountain slopes replace the forests of the lower Khumbu. You eventually reach Thukla/Dughla, where the route climbs toward the memorial area at Thukla Pass.`,
      `The memorials commemorate climbers and Sherpas who died in the Himalaya and provide a quiet reminder that the mountains surrounding the trail are not simply scenic landmarks, they are serious high-altitude environments where mountaineering carries real risk.`,
      `From the memorial area, the trail continues along the moraine toward Lobuche. Lobuche is a small, exposed high-altitude settlement near the Khumbu Glacier. Accommodation is simpler here than in Namche or lower villages, and temperatures can fall sharply after sunset.`,
      `At almost 5,000 meters, you may notice a significant difference in appetite, breathing and sleep. Take the afternoon slowly. Eat as well as you can, remain hydrated, stay warm and report any concerning symptoms to your guide.`,
      `Tomorrow you enter the highest part of the trek.`,
      `Overnight in Lobuche.`
    ]
  },
  {
    dayNum: 9,
    dayLabel: 'Day 9:',
    title: 'Lobuche to Gorak Shep and Kala Patthar',
    subtitle: `Gorak Shep – approximately <span data-altitude-m="5164">5,164 m / 16,942 ft</span> | Kala Patthar – approximately <span data-altitude-m="5545">5,545 m / 18,192 ft</span>`,
    metrics: [
      { icon: icons.clock, text: 'Trek: approximately 6–8 hours, depending on conditions and itinerary timing' },
      { icon: icons.bed, text: 'Accommodation: Teahouse' },
      { icon: icons.mountain, text: 'Summit Viewpoint: Kala Patthar (~5,545 m / 18,192 ft)' }
    ],
    meta: {
      meals: 'Meals: Breakfast, lunch and dinner',
      overnight: 'Overnight: Gorak Shep'
    },
    paragraphs: [
      `This is one of the highest and most demanding days of the Everest Base Camp Trek.`,
      `From Lobuche, the trail follows the upper Khumbu toward Gorak Shep, the final settlement before Everest Base Camp. The terrain is now predominantly rocky and glacial, with enormous peaks including Pumori, Lingtren, Khumbutse and Nuptse surrounding the route.`,
      `Gorak Shep sits at approximately 5,164 m, making it the highest sleeping point on the standard itinerary. After arriving and taking an appropriate break, the itinerary continues with the climb toward Kala Patthar when conditions and group health allow.`,
      `<h5 style="color: var(--color-primary-navy); font-size: 1.05rem; font-weight: 700; margin-top: 14px; margin-bottom: 6px;">Kala Patthar – approximately <span data-altitude-m="5545">5,545 m</span></h5>`,
      `The climb to Kala Patthar is physically demanding because of the elevation, not because it requires technical climbing. The trail rises steeply over rocky ground. Your guide will establish a slow pace, with frequent pauses according to the group's condition.`,
      `At approximately 5,545 m, the summit ridge provides the classic high-altitude perspective toward Mount Everest, Nuptse, Lhotse, Pumori, Lingtren and other Himalayan peaks.`,
      `This is one of the most important viewpoints of the entire trek. Everest Base Camp itself does not provide the same direct view of Everest's summit, which is why Kala Patthar is traditionally included in the classic route. Nepal Tourism Board specifically identifies Kala Patthar as the renowned viewpoint associated with the Everest panorama.`,
      `The timing can be adjusted according to weather and visibility. The objective is to reach the viewpoint when conditions provide the best balance between visibility, temperature, safety and daylight. After spending appropriate time at the viewpoint, descend carefully to Gorak Shep.`,
      `At this altitude, you should not linger unnecessarily in exposed conditions. Return to the teahouse, eat a warm meal, hydrate and prepare for the next morning's Base Camp excursion.`,
      `Overnight in Gorak Shep.`
    ]
  },
  {
    dayNum: 10,
    dayLabel: 'Day 10:',
    title: 'Gorak Shep to Everest Base Camp and Pheriche',
    subtitle: `Everest Base Camp – <span data-altitude-m="5364">5,364 m / 17,598 ft</span> | Pheriche – approximately <span data-altitude-m="4371">4,371 m / 14,340 ft</span>`,
    metrics: [
      { icon: icons.clock, text: 'Trek: approximately 7–9 hours combined' },
      { icon: icons.mountain, text: 'Milestone: Everest Base Camp (5,364 m)' },
      { icon: icons.bed, text: 'Accommodation: Teahouse' }
    ],
    meta: {
      meals: 'Meals: Breakfast, lunch and dinner',
      overnight: 'Overnight: Pheriche'
    },
    paragraphs: [
      `Today you reach the destination that gives the journey its name: Everest Base Camp. After breakfast at Gorak Shep, you follow the trail along the rocky landscape of the Khumbu Glacier and its moraine toward Base Camp. The route is not a technical climbing route, but the combination of altitude, uneven terrain and glacial debris makes it a physically demanding walk.`,
      `Eventually, the trail reaches the Everest Base Camp area at approximately 5,364 m.`,
      `During the main climbing season, expedition camps may be visible around Base Camp as climbing teams prepare for the route through the Khumbu Icefall and onward toward higher camps. Outside the climbing season, the area can feel substantially quieter. Spend appropriate time at Base Camp to photograph the experience and appreciate the surrounding mountains before returning toward Gorak Shep.`,
      `After lunch, collect your belongings and begin the descent. The route passes back through Lobuche and the Thukla memorial area before descending toward Pheriche. This is a long day, but the reduction in elevation makes a noticeable physiological difference. As you descend, oxygen availability increases and many trekkers find that appetite, breathing and energy begin to improve.`,
      `Pheriche is an important settlement on the Everest route and is also known for its altitude-related medical services associated with the Himalayan Rescue Association. By evening, you have completed the defining objectives of the trek: Everest Base Camp + Kala Patthar. The long return journey begins from here.`,
      `Overnight in Pheriche.`
    ]
  },
  {
    dayNum: 11,
    dayLabel: 'Day 11:',
    title: 'Pheriche to Namche Bazaar',
    subtitle: `Namche Bazaar – approximately <span data-altitude-m="3440">3,440–3,500 m</span>`,
    metrics: [
      { icon: icons.clock, text: 'Trek: approximately 6–8 hours' },
      { icon: icons.bed, text: 'Accommodation: Teahouse' },
      { icon: icons.route, text: 'Route: via Pangboche & Tengboche' }
    ],
    meta: {
      meals: 'Meals: Breakfast, lunch and dinner',
      overnight: 'Overnight: Namche Bazaar'
    },
    paragraphs: [
      `After spending the previous night considerably lower than Gorak Shep, today's descent feels different. You retrace sections of the route through Pangboche and Tengboche, eventually reaching the forests and river valleys surrounding Namche.`,
      `The landscape you saw while climbing now appears from a completely different perspective. The mountains feel less distant as you descend, the air becomes thicker and breathing generally becomes easier. Depending on timing, you may have another opportunity to appreciate Tengboche Monastery and the Ama Dablam skyline before continuing down through the forest.`,
      `Eventually, the familiar shape of Namche Bazaar appears.`,
      `After several nights in small high-altitude settlements, returning to Namche can feel like arriving back in civilization. The bakeries, cafés, warm dining rooms and wider range of food are especially welcome after the upper Khumbu.`,
      `Overnight in Namche Bazaar.`
    ]
  },
  {
    dayNum: 12,
    dayLabel: 'Day 12:',
    title: 'Namche Bazaar to Lukla',
    subtitle: `Lukla – approximately <span data-altitude-m="2860">2,860 m / 9,383 ft</span>`,
    metrics: [
      { icon: icons.clock, text: 'Trek: approximately 6–8 hours' },
      { icon: icons.bed, text: 'Accommodation: Teahouse' },
      { icon: icons.route, text: 'Route: via Jorsale, Monjo & Phakding' }
    ],
    meta: {
      meals: 'Meals: Breakfast, lunch and dinner',
      overnight: 'Overnight: Lukla'
    },
    paragraphs: [
      `Today is the final walking day of the classic Everest Base Camp trekking route. You descend through Jorsale and Monjo, cross the suspension bridges again and follow the Dudh Koshi through Phakding before beginning the final climb toward Lukla. The route is familiar, but the experience is very different from the first days of the trek. On the way toward Base Camp, every step was about getting closer to Everest.`,
      `Now, the destination has already been achieved.`,
      `The trail becomes an opportunity to reflect on everything you have experienced: the suspension bridges, Namche Bazaar, Tengboche Monastery, the high valleys of Dingboche and Lobuche, Kala Patthar, Everest Base Camp and the people you travelled with. After reaching Lukla, settle into your teahouse and spend your final evening in the Khumbu. Many groups use the evening to celebrate completing the trek and thank the guides and porters who supported the journey.`,
      `Overnight in Lukla.`
    ]
  },
  {
    dayNum: 13,
    dayLabel: 'Day 13:',
    title: 'Lukla to Kathmandu',
    subtitle: `Kathmandu – approximately <span data-altitude-m="1300">1,300 m / 4,265 ft</span>`,
    metrics: [
      { icon: icons.plane, text: 'Flight: approximately 25–40 minutes, depending on operations' },
      { icon: icons.bed, text: 'Accommodation: Hotel' },
      { icon: icons.compass, text: 'Activity: Return flight & leisure in Thamel' }
    ],
    meta: {
      meals: 'Meals: Breakfast',
      overnight: 'Overnight: Kathmandu'
    },
    paragraphs: [
      `Your scheduled mountain flight takes you from Lukla back toward Kathmandu, subject to weather and operational conditions. This is one of the days where flexibility matters. Mountain weather can affect departures, so the actual flight time may change or a departure may be postponed. Your trekking agency should monitor the situation and assist with the applicable flight and ground arrangements.`,
      `If operations require flights through Ramechhap/Manthali, the return journey may include an overland transfer between Ramechhap and Kathmandu rather than a direct flight into Tribhuvan International Airport.`,
      `Once you are back in Kathmandu, the contrast with the upper Khumbu is immediate.`,
      `After nearly two weeks of mountain trails, cold nights, thin air and teahouse dining, you can enjoy a hot shower, comfortable bed and Kathmandu's restaurants and cafés. The remainder of the day can be used for rest, shopping in Thamel or additional sightseeing. For travelers continuing elsewhere in Nepal, this is also a convenient point to begin an extension to destinations such as Pokhara, Chitwan or another trekking region.`,
      `Overnight in Kathmandu.`
    ]
  },
  {
    dayNum: 14,
    dayLabel: 'Day 14:',
    title: 'Final Departure',
    subtitle: `Departure from Kathmandu`,
    metrics: [
      { icon: icons.clock, text: 'Transfer: Airport drop-off aligned with flight' },
      { icon: icons.bed, text: 'Accommodation: Departure Day' },
      { icon: icons.plane, text: 'Activity: International Flight Departure' }
    ],
    meta: {
      meals: 'Meals: Breakfast (according to flight schedule)',
      overnight: 'Overnight: End of trip'
    },
    paragraphs: [
      `Your 14-day Everest Base Camp Trek concludes with your departure from Kathmandu. Depending on your international flight schedule, our team can arrange your airport transfer and help ensure that your final logistics are organized.`,
      `Before leaving Nepal, you will have travelled from the Kathmandu Valley to the Khumbu, walked through Sagarmatha National Park, experienced Sherpa communities and Buddhist heritage, crossed high suspension bridges, reached Everest Base Camp, climbed Kala Patthar, and returned from the high Himalaya on foot.`,
      `The trekking route is finished, but the memories of the mountains, villages and people of the Everest region remain long after you leave.`
    ]
  }
];

// Generate new cards HTML
let newCardsHTML = '';
daysData.forEach(d => {
  const dayStr = d.dayNum < 10 ? '0' + d.dayNum : '' + d.dayNum;
  const activeClass = d.dayNum === 1 ? ' active' : '';
  
  let metricsHTML = '';
  d.metrics.forEach(m => {
    metricsHTML += `                      <div class="itinerary-metric-item">
                        ${m.icon}
                        <span>${m.text}</span>
                      </div>\n`;
  });
  
  let paragraphsHTML = '';
  d.paragraphs.forEach(p => {
    if (p.startsWith('<h5')) {
      paragraphsHTML += `                      ${p}\n`;
    } else {
      paragraphsHTML += `                      <p>${p}</p>\n`;
    }
  });

  const photoGrid = cleanPhotos[d.dayNum];

  newCardsHTML += `              <!-- Day ${dayStr} -->
              <div class="itinerary-card${activeClass}">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">${d.dayLabel}</span> ${d.title}
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      ${d.subtitle}
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    ${icons.toggleBtn}
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-content-inner">
                    <div class="itinerary-metrics-list">
${metricsHTML}                    </div>

                    <div class="itinerary-meta-box">
                      <div class="itinerary-meta-box-item">
                        ${icons.spoon}
                        <span>${d.meta.meals}</span>
                      </div>
                      <div class="itinerary-meta-box-item">
                        ${icons.pin}
                        <span>${d.meta.overnight}</span>
                      </div>
                    </div>

                    <div class="itinerary-description">
${paragraphsHTML}                    </div>

                    ${photoGrid}
                  </div>
                </div>
              </div>\n\n`;
});

// Append the missing closing tags for timeline and section
newCardsHTML += `            </div>\n          </section>\n\n          `;

// Replace from startCardsIdx to where Custom Itinerary CTA begins
const startCardsIdxInCurrent = content.indexOf('<!-- Day 01 -->');
const customCtaIdxInCurrent = content.indexOf('<!-- Custom Itinerary Plan Your Trip CTA Banner Card -->');

const updatedContent = content.substring(0, startCardsIdxInCurrent) + newCardsHTML + content.substring(customCtaIdxInCurrent);

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log('Successfully wrote fixed itinerary content.');
