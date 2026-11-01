const fs = require('fs');

const svgIcons = {
  plane: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg>`,
  clock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  road: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11.5a6.5 6.5 0 0 1-13 0"></path><path d="M2 10h20"></path></svg>`,
  house: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
  mountain: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 22 22 22"></polygon></svg>`,
  compass: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
  meal: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path></svg>`,
  pin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>`,
  chevron: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`
};

const daysData = [
  {
    dayNum: 1,
    title: "Flight from Kathmandu to Lukla and Trek to Phakding",
    subtitle: `Lukla – approximately <span data-altitude-m="2860">2,860 m / 9,383 ft</span> | Phakding – approximately <span data-altitude-m="2610">2,610 m / 8,563 ft</span>`,
    metrics: [
      { icon: svgIcons.plane, text: "Flight: approximately 25–35 minutes (or via Ramechhap depending on operating season)" },
      { icon: svgIcons.clock, text: "Trek: approximately 3–4 hours" },
      { icon: svgIcons.road, text: "Trek Distance: approximately 7.8 km / 4.8 miles" },
      { icon: svgIcons.house, text: "Accommodation: Mountain Teahouse Lodge" }
    ],
    meta: {
      meals: "Meals: Lunch and dinner included",
      overnight: "Overnight: Phakding (2,610 m)"
    },
    paragraphs: [
      "Your Everest View Trek begins with a scenic mountain flight from Kathmandu to Lukla, the main gateway to the Khumbu trekking region. Depending on seasonal flight operations, the departure may be arranged from Kathmandu or through Ramechhap following a comfortable private road transfer. Flight arrangements will be confirmed according to prevailing civil aviation schedules.",
      "The flight offers an exciting introduction to Nepal's mountain landscape. As the aircraft approaches Lukla, the terrain changes from rolling hills and deep valleys to steep mountain slopes and settlements scattered across the hillsides. Weather conditions determine visibility, offering dramatic glimpses of snow-capped Himalayan ridges.",
      "After arriving in Lukla, you meet your trekking guide and porter team, organize your gear, and begin the walk toward Phakding. The trail initially follows a gradual descent through the village and continues along scenic sections of the Dudh Koshi River Valley. Small villages, cultivated land, stone paths, traditional homes, and forested hills introduce you to the everyday environment of the lower Khumbu.",
      "Although this is generally one of the shorter walking days, it provides important time to become familiar with the trail, footwear, daypack, and walking rhythm. You will encounter other trekkers, local residents, Sherpa porters, and pack animals using the same ancient network of mountain paths.",
      "After reaching Phakding, check into your teahouse and enjoy time to rest. Phakding is situated at a lower elevation than Lukla, so this first stage provides a gradual, gentle introduction to the route before the more substantial ascent ahead. Overnight accommodation is in a local mountain lodge, where you can enjoy dinner and prepare for the next trekking day."
    ],
    photos: [
      { src: "../../images/treks/everest-base-camp/everest-base-camp-mountain-valley-landscape-06.jpg", alt: "Lower Dudh Koshi River Valley trail to Phakding" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-trekking-group-village-14.jpg", alt: "Sherpa village along Dudh Koshi trail" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-trekkers-team-circle-02.jpg", alt: "Trekkers team preparing in Lukla" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-trekking-group-suspension-bridge-03.jpg", alt: "Early trail suspension bridge near Phakding" }
    ]
  },
  {
    dayNum: 2,
    title: "Trek from Phakding to Namche Bazaar",
    subtitle: `Namche Bazaar – approximately <span data-altitude-m="3440">3,440 m / 11,286 ft</span>`,
    metrics: [
      { icon: svgIcons.clock, text: "Trek: approximately 5–6 hours" },
      { icon: svgIcons.road, text: "Trek Distance: approximately 10.5 km / 6.5 miles" },
      { icon: svgIcons.house, text: "Accommodation: Mountain Teahouse Lodge" },
      { icon: svgIcons.mountain, text: "Activity: Sagarmatha National Park entry at Monjo & Hillary Bridge crossing" }
    ],
    meta: {
      meals: "Meals: Breakfast, lunch and dinner",
      overnight: "Overnight: Namche Bazaar (3,440 m)"
    },
    paragraphs: [
      "The second day involves a steady climb into the upper valley, crossing several suspension bridges along the Dudh Koshi River. The trail passes through small settlements, pine and rhododendron forests, and terraced slopes while offering views of surrounding peaks as the valley opens up.",
      "After passing Monjo, you reach the official entrance checkpoint for Sagarmatha National Park, where permits are registered. From here, the route continues across the river and approaches the confluence below the famous Hillary Suspension Bridge, one of the most recognizable structures along the Everest trekking route.",
      "Crossing the high bridge marks the start of the sustained uphill walk to Namche Bazaar. The path climbs steadily through pine forest, requiring a comfortable and even pace. On clear days, a gap in the trees along the trail offers the first distant glimpse of Mount Everest, providing an encouraging milestone during the climb.",
      "Continuing the ascent, the trail brings you into Namche Bazaar, the primary hub and trading center of the Khumbu region. Built into a curved natural amphitheater on the mountain slope, Namche offers lodges, bakeries, cafes, equipment shops, and vibrant Sherpa culture. You will check into your teahouse, rest, and spend the evening enjoying dinner in the comfortable dining hall."
    ],
    photos: [
      { src: "../../images/treks/everest-base-camp/everest-base-camp-trekking-group-suspension-bridge-03.jpg", alt: "Hillary Suspension Bridge over Dudh Koshi gorge" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-trekking-group-trail-monument-04.jpg", alt: "Monjo Sagarmatha National Park entry checkpoint" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-trekking-group-stupa-village-05.jpg", alt: "Arrival at Namche Bazaar entrance stupa" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-view-10.jpg", alt: "First view of Everest from the uphill climb" }
    ]
  },
  {
    dayNum: 3,
    title: "Acclimatization and Exploration around Namche Bazaar",
    subtitle: `Namche Bazaar – approximately <span data-altitude-m="3440">3,440 m / 11,286 ft</span> (Excursions up to <span data-altitude-m="3550">3,550 m / 11,647 ft</span>)`,
    metrics: [
      { icon: svgIcons.clock, text: "Day hike: approximately 2–4 hours scenic exploration" },
      { icon: svgIcons.house, text: "Accommodation: Mountain Teahouse Lodge" },
      { icon: svgIcons.compass, text: "Activity: Sagarmatha National Park Visitor Centre, Sherpa Museum & Namche Market" }
    ],
    meta: {
      meals: "Meals: Breakfast, lunch and dinner",
      overnight: "Overnight: Namche Bazaar (3,440 m)"
    },
    paragraphs: [
      "Acclimatization is essential for safe and comfortable high-altitude travel. Because Namche Bazaar sits at approximately 3,440 meters, this dedicated day allows your body to adjust to lower oxygen levels before undertaking higher excursions.",
      "The day is designed as an active rest day: rather than resting entirely, you undertake short walks to higher points above the town before returning to Namche to sleep. This follows the proven high-altitude rule of 'climb high, sleep low'.",
      "Options for the day include a morning walk up to the Sagarmatha National Park Visitor Centre, situated on a ridge above Namche. The viewpoint offers panoramic views of Ama Dablam, Thamserku, Kongde Ri, and Everest on clear mornings. The visitor centre also houses informative displays regarding Himalayan geography, flora, fauna, and Sherpa history.",
      "You may also explore the streets, artisan shops, and bakeries of Namche Bazaar, or visit local cultural landmarks. In the afternoon, return to your lodge to rest, rehydrate, and discuss the plan for the upcoming excursion toward the Everest View Hotel."
    ],
    callout: `
                    <div style="background: #f0fdf4; border-left: 4px solid #10B981; padding: 16px 20px; border-radius: 6px; margin: 20px 0;">
                      <div style="font-weight: 700; color: var(--color-primary-navy); font-size: 0.95rem; margin-bottom: 4px; display: flex; align-items: center; gap: 8px;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        <span>Safety &amp; Adaptation: Acclimatization in Namche Bazaar</span>
                      </div>
                      <p style="margin: 0; color: #334155; font-size: 0.9rem; line-height: 1.6;">A dedicated rest and adjustment day allows your body to adapt naturally to 3,440 m, supported by gentle scenic walks, hydration, and guidance from our certified Sherpa staff following the proven 'climb high, sleep low' rule.</p>
                    </div>`,
    photos: [
      { src: "../../images/treks/everest-base-camp/everest-base-camp-trekking-group-stupa-village-05.jpg", alt: "Namche Bazaar horseshoe amphitheater" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-panorama-11.jpg", alt: "Panoramic view of Ama Dablam & Thamserku" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-yak-mountain-view-15.jpg", alt: "Khumbu yaks grazing above Namche" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-trekking-group-village-lodge-08.jpg", alt: "Traditional lodges and bakeries in Namche" }
    ]
  },
  {
    dayNum: 4,
    title: "Excursion to Hotel Everest View, Khumjung and Khunde (Return to Namche)",
    subtitle: `Hotel Everest View – approximately <span data-altitude-m="3880">3,880 m / 12,729 ft</span> | Khumjung – <span data-altitude-m="3790">3,790 m / 12,434 ft</span>`,
    metrics: [
      { icon: svgIcons.clock, text: "Day hike: approximately 5–7 hours return loop" },
      { icon: svgIcons.road, text: "Trek Distance: approximately 9.2 km / 5.7 miles circuit" },
      { icon: svgIcons.house, text: "Accommodation: Mountain Teahouse Lodge" },
      { icon: svgIcons.mountain, text: "Highlights: Panoramic terrace vistas of Everest, Lhotse, Ama Dablam; Hillary School & Khumjung Gompa" }
    ],
    meta: {
      meals: "Meals: Breakfast, lunch and dinner",
      overnight: "Overnight: Namche Bazaar (3,440 m)"
    },
    paragraphs: [
      "Today is the highlight of the trip, taking you to some of the finest panoramic viewpoints in the Everest region. The morning walk climbs past Syangboche airstrip to the world-renowned Hotel Everest View (3,880 m), one of the highest-placed luxury hotels in the world.",
      "From the hotel's terrace, on a clear morning, you can enjoy unobstructed views of Mount Everest, Lhotse, Nuptse, Ama Dablam, and Thamserku while enjoying tea or coffee. The perspective on Ama Dablam from this ridge is widely considered one of the finest mountain panoramas in the Himalayas.",
      "From the hotel, the excursion continues toward Khumjung (3,790 m), the largest traditional Sherpa settlement in the Khumbu. The village is known for its green-roofed houses, dry-stone agricultural walls, and the historic Khumjung Monastery, which preserves a revered relic associated with the legendary yeti. You will also see the Khumjung Hillary School, established by Sir Edmund Hillary in 1961.",
      "A short walk leads to neighboring Khunde, home to the local hospital founded by the Himalayan Trust. After exploring these traditional villages and experiencing daily Sherpa life, the trail loops back down toward Namche Bazaar. Returning to Namche in the late afternoon, you spend your third and final evening in town."
    ],
    photos: [
      { src: "../../images/treks/everest-base-camp/everest-base-camp-high-mountain-sunrise-13.jpg", alt: "Panoramic view of Everest and Ama Dablam from Syangboche" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-trekking-group-monastery-09.jpg", alt: "Khumjung Monastery and historic village chorten" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-mountain-trail-view-12.jpg", alt: "Trail passing stone-walled fields of Khumjung & Khunde" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-mountain-cairn-view-18.jpg", alt: "High ridge memorial cairn overlooking Everest panorama" }
    ]
  },
  {
    dayNum: 5,
    title: "Trek from Namche Bazaar to Phakding",
    subtitle: `Descend from <span data-altitude-m="3440">3,440 m / 11,286 ft</span> to <span data-altitude-m="2610">2,610 m / 8,563 ft</span>`,
    metrics: [
      { icon: svgIcons.clock, text: "Trek: approximately 4–5 hours" },
      { icon: svgIcons.road, text: "Trek Distance: approximately 10.5 km / 6.5 miles" },
      { icon: svgIcons.house, text: "Accommodation: Mountain Teahouse Lodge" },
      { icon: svgIcons.road, text: "Terrain: Sustained descent through pine forest, re-crossing Dudh Koshi suspension bridges" }
    ],
    meta: {
      meals: "Meals: Breakfast, lunch and dinner",
      overnight: "Overnight: Phakding (2,610 m)"
    },
    paragraphs: [
      "After breakfast in Namche Bazaar, you begin your return trek. The route retraces your steps down the steep trail toward the Dudh Koshi River, offering a different perspective on the landscape you climbed several days earlier.",
      "Descending requires careful footing on the rocky, stepped terrain, but lower elevations bring noticeably richer oxygen levels and easier breathing. You will cross back over the Hillary Suspension Bridge and pass through the national park exit post at Monjo.",
      "The trail follows the gentle contours of the Dudh Koshi valley back to Phakding. Along the way, you pass through pine forests, cross familiar suspension bridges, and encounter mani walls and prayer flags decorating the path.",
      "Arriving in Phakding in the afternoon, you check into your teahouse for your penultimate night on the trail. The lower altitude makes for a comfortable and restful evening as the physical demands of the trek begin to ease."
    ],
    photos: [
      { src: "../../images/treks/everest-base-camp/everest-base-camp-trekking-group-trail-monument-07.jpg", alt: "Trail monument on the descent towards Monjo" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-panorama-11.jpg", alt: "Farewell mountain view over the Khumbu valley" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-trekking-group-suspension-bridge-03.jpg", alt: "Crossing the Dudh Koshi gorge" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-trekking-group-village-14.jpg", alt: "Peaceful riverside lodge at Phakding" }
    ]
  },
  {
    dayNum: 6,
    title: "Trek from Phakding to Lukla",
    subtitle: `Lukla – approximately <span data-altitude-m="2860">2,860 m / 9,383 ft</span>`,
    metrics: [
      { icon: svgIcons.clock, text: "Trek: approximately 3–4 hours" },
      { icon: svgIcons.road, text: "Trek Distance: approximately 7.8 km / 4.8 miles" },
      { icon: svgIcons.house, text: "Accommodation: Mountain Lodge in Lukla" },
      { icon: svgIcons.mountain, text: "Celebration: Farewell celebration dinner with Sherpa guide and porter team" }
    ],
    meta: {
      meals: "Meals: Breakfast, lunch and dinner",
      overnight: "Overnight: Lukla (2,860 m)"
    },
    paragraphs: [
      "The final walking day of the trek leads from Phakding back up to Lukla. The trail winds along the river valley through small settlements including Ghat and Cheplung before the gradual final climb into Lukla.",
      "Although the distance is modest, the gradual uphill climb toward Lukla provides a satisfying conclusion to the walking portion of the journey. You will pass chortens, mani stones, and small farms as you approach the settlement.",
      "Reaching Lukla by early afternoon, you check into your mountain lodge and confirm arrangements for the following morning's flight. The afternoon is free to relax, explore Lukla's cafes, and reflect on the week's trekking experiences.",
      "In the evening, enjoy a celebratory farewell dinner with your guide and porter team, celebrating the successful completion of your journey through the Everest region."
    ],
    photos: [
      { src: "../../images/treks/everest-base-camp/everest-base-camp-trekking-group-trail-monument-04.jpg", alt: "Lukla stone gateway and prayer flags" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-trekkers-team-circle-02.jpg", alt: "Trekking crew farewell gathering" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-trekking-group-village-lodge-08.jpg", alt: "Comfortable mountain lodge in Lukla" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-mountain-valley-landscape-06.jpg", alt: "Lush lower Khumbu valley landscape" }
    ]
  },
  {
    dayNum: 7,
    title: "Scenic Flight from Lukla to Kathmandu (or Ramechhap)",
    subtitle: `Kathmandu – approximately <span data-altitude-m="1300">1,300 m / 4,265 ft</span>`,
    metrics: [
      { icon: svgIcons.plane, text: "Flight: approximately 25–35 minutes (+ road transfer if operating via Ramechhap)" },
      { icon: svgIcons.road, text: "Transfer: Private airport pickup and transfer to your Kathmandu hotel" },
      { icon: svgIcons.house, text: "Accommodation: Hotel in Kathmandu (Arranged per package)" },
      { icon: svgIcons.compass, text: "Activity: Leisure afternoon in Thamel, souvenir shopping & trip debrief" }
    ],
    meta: {
      meals: "Meals: Breakfast included at Lukla lodge",
      overnight: "Overnight: Kathmandu"
    },
    paragraphs: [
      "Your trek concludes with an early morning flight from Lukla back to Kathmandu (or to Ramechhap with road transfer, depending on seasonal flight operations). Take off from the famous sloping runway of Tenzing-Hillary Airport for one final aerial perspective on the Himalayan range.",
      "Lukla flights operate in the early morning when mountain weather is calmest. The short flight offers panoramic views of the high peaks before descending into the Kathmandu Valley or Manthali.",
      "Upon arrival in Kathmandu, our representative transfers you to your hotel. The remainder of the day is at your leisure for resting, shopping in Thamel, or sightseeing at Kathmandu's UNESCO World Heritage sites.",
      "Please note: Mountain flights in Nepal are subject to weather conditions. We strongly recommend scheduling at least one or two buffer days in Kathmandu before your international departure to accommodate any potential flight adjustments."
    ],
    photos: [
      { src: "../../images/treks/everest-base-camp/everest-base-camp-snow-peak-clouds-16.jpg", alt: "Morning clouds over Himalayan peaks from the flight" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-snow-peak-evening-17.jpg", alt: "Sunrise glow on high summits" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-snowy-mountain-valley-01.jpg", alt: "Aerial perspective of Himalayan valleys" },
      { src: "../../images/treks/everest-base-camp/everest-base-camp-mountain-cairn-view-18.jpg", alt: "Iconic Himalayan vista as your trek concludes" }
    ]
  }
];

let html = `        <!-- SECTION 2: ITINERARY -->
        <section id="section-itinerary" class="trek-detail-section">
          <h2 class="trek-section-title">Everest View Trek Itinerary: Day by Day Details</h2>

          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-top: 16px; margin-bottom: 16px; line-height: 1.7;">
            Our 7-day Everest View Trek itinerary is specifically crafted for travelers seeking iconic Himalayan panoramas, Sherpa cultural immersion, and peaceful mountain walking without the extended physical demands of the full Everest Base Camp expedition. Starting with a scenic flight into Lukla, the trail winds through the forested Dudh Koshi Valley, crosses high suspension bridges into Sagarmatha National Park, and ascends to the vibrant trading amphitheater of Namche Bazaar at <span data-altitude-m="3440">3,440 m (11,286 ft)</span>.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
            The centerpiece of the journey is an unforgettable day excursion to the legendary Hotel Everest View at <span data-altitude-m="3880">3,880 m (12,729 ft)</span>—one of the highest-placed luxury vantage points on Earth—offering sweeping, unobstructed views of Mount Everest (<span data-altitude-m="8848">8,848.86 m</span>), Lhotse, Nuptse, Thamserku, and the majestic pyramid of Ama Dablam.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
            By basing three consecutive nights in Namche Bazaar (Days 2, 3, and 4), our itinerary strictly adheres to the proven high-altitude rule of "climb high, sleep low." You enjoy scenic day hikes to Khumjung and Khunde while sleeping at a stable altitude, maximizing comfort, safety, and acclimatization before a relaxed two-day descent back to Lukla.
          </p>

          <h3 style="font-size: 1.35rem; color: var(--color-primary-navy); font-weight: 700; margin-top: 32px; margin-bottom: 14px; line-height: 1.35;">
            Before Your Everest View Trek Starts
          </h3>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
            The start date you select is your scheduled departure toward Lukla. We strongly advise arriving in Kathmandu at least one full day before Day 1 to complete your pre-trek briefing, verify equipment, and allow an acclimatization buffer before flying into the mountains.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
            During your pre-trek briefing in Kathmandu, your licensed Sherpa guide will review the daily trail profile, hydration and nutrition strategies, gear check, Sagarmatha National Park entry protocols, and Lukla flight procedures. This briefing ensures you are fully prepared and gives you time to rent or purchase any missing items in Thamel.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
            We strongly recommend booking international return flights with at least 1 to 2 contingency days after Day 7. Mountain flights between Lukla and Kathmandu operate visually (VFR) and can be subject to delays or weather rescheduling; an adequate schedule buffer ensures a seamless, stress-free return journey.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 30px; line-height: 1.7;">
            During peak trekking seasons (spring and autumn), the Civil Aviation Authority of Nepal (CAAN) may divert Lukla flights through Ramechhap Airport (Manthali) to relieve Kathmandu airspace congestion. When this applies, private vehicle transfer between Kathmandu and Ramechhap (approx. 4–5 hours) is coordinated by Namaste Hiking Trek as part of your comprehensive logistics.
          </p>

          <!-- Interactive Action Bar: Route Summary & Expand/Collapse All -->
          <div style="display: flex; justify-content: space-between; align-items: center; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 12px 18px; margin-bottom: 24px; flex-wrap: wrap; gap: 10px;">
            <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: var(--color-primary-navy); font-size: 0.95rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" style="vertical-align: middle;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>7 Route Days • Complete Day-by-Day Route Guidance</span>
            </div>
            <button type="button" id="toggle-all-itinerary" style="background: #ffffff; color: #10B981; border: 1.5px solid #10B981; padding: 6px 16px; border-radius: 6px; font-weight: 700; font-size: 0.85rem; cursor: pointer; display: flex; align-items: center; gap: 6px; transition: all 0.2s;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>
              <span>Collapse All</span>
            </button>
          </div>

          <!-- DETAILED DAY-BY-DAY CARDS (Collapsible Accordion) -->
          <div class="itinerary-timeline">
`;

daysData.forEach((d, idx) => {
  const activeClass = idx === 0 ? " active" : "";
  html += `            <!-- Day 0${d.dayNum} -->
            <div class="itinerary-card${activeClass}">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day ${d.dayNum}:</span> ${d.title}
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    ${d.subtitle}
                  </p>
                </div>
                <div class="itinerary-header-right">
                  <div class="itinerary-toggle-btn-new">
                    ${svgIcons.chevron}
                  </div>
                </div>
              </div>
              <div class="itinerary-content">
                <div class="itinerary-content-inner">
                  <div class="itinerary-metrics-list">
`;

  d.metrics.forEach(m => {
    html += `                    <div class="itinerary-metric-item">
                      ${m.icon}
                      <span>${m.text}</span>
                    </div>\n`;
  });

  html += `                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      ${svgIcons.meal}
                      <span>${d.meta.meals}</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      ${svgIcons.pin}
                      <span>${d.meta.overnight}</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
`;

  d.paragraphs.forEach(p => {
    html += `                    <p>${p}</p>\n`;
  });

  if (d.callout) {
    html += `${d.callout}\n`;
  }

  html += `                  </div>

                  <div class="itinerary-photos-grid">
`;

  d.photos.forEach(photo => {
    html += `                    <div class="itinerary-photo-wrapper">
                      <img loading="lazy" src="${photo.src}" alt="${photo.alt}">
                    </div>\n`;
  });

  html += `                  </div>
                </div>
              </div>
            </div>\n\n`;
});

html += `          </div>
        </section>

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
        </div>\n`;

fs.writeFileSync('scratch/evt_sec2_generated.html', html, 'utf8');
console.log('Successfully generated scratch/evt_sec2_generated.html! Length:', html.length);
