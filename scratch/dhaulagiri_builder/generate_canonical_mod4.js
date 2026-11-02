const fs = require('fs');

// Read raw user content
const rawContent = fs.readFileSync('scratch/user_dhaulagiri_content.txt', 'utf8');
const lines = rawContent.split('\n');

const daysData = [
  {
    dayNum: 1,
    title: "Arrival at Tribhuvan International Airport in Kathmandu",
    subtitle: 'Kathmandu – approximately <span data-altitude-m="1355">1,355 m / 4,445 ft</span>',
    transferTime: "20 to 40 minutes private airport transfer",
    distance: "Airport to Thamel Hotel (6–8 km)",
    accommodation: "3-Star Boutique Hotel in Thamel",
    activity: "Airport welcome, private transfer, trip orientation & rest",
    meals: "Welcome Dinner included",
    overnight: 'Kathmandu (<span data-altitude-m="1355">1,355 m</span>)'
  },
  {
    dayNum: 2,
    title: "Kathmandu Valley Sightseeing & Expedition Gear Preparation",
    subtitle: 'Kathmandu – approximately <span data-altitude-m="1355">1,355 m / 4,445 ft</span>',
    transferTime: "Full day cultural sightseeing & gear staging",
    distance: "City transit & gear inspection",
    accommodation: "3-Star Boutique Hotel in Thamel",
    activity: "UNESCO Heritage site exploration, gear check & ACAP/TIMS permit verification",
    meals: "Breakfast included",
    overnight: 'Kathmandu (<span data-altitude-m="1355">1,355 m</span>)'
  },
  {
    dayNum: 3,
    title: "Drive from Kathmandu to Beni via Prithvi Highway",
    subtitle: 'Beni – approximately <span data-altitude-m="836">836 m / 2,743 ft</span>',
    transferTime: "Approximately 7 to 9 hours scenic drive",
    distance: "285 km overland journey",
    accommodation: "Hotel or Guesthouse in Beni",
    activity: "Scenic highway drive along Trishuli and Kali Gandaki river valleys",
    meals: "Breakfast, Lunch & Dinner included",
    overnight: 'Beni (<span data-altitude-m="836">836 m</span>)'
  },
  {
    dayNum: 4,
    title: "Drive from Beni to Babiyachaur",
    subtitle: 'Babiyachaur – approximately <span data-altitude-m="970">970 m / 3,182 ft</span>',
    transferTime: "Approximately 2 to 3 hours road transfer",
    distance: "24 km along Myagdi river road",
    accommodation: "Local Lodge / Guesthouse in Babiyachaur",
    activity: "4WD road transfer into Myagdi Valley; final roadhead staging",
    meals: "Breakfast, Lunch & Dinner included",
    overnight: 'Babiyachaur (<span data-altitude-m="970">970 m</span>)'
  },
  {
    dayNum: 5,
    title: "Trek from Babiyachaur to Dharapani (Myagdi)",
    subtitle: 'Dharapani – approximately <span data-altitude-m="1560">1,560 m / 5,118 ft</span>',
    transferTime: "Approximately 5 to 6 hours walking",
    distance: "Approximately 10 km",
    accommodation: "Guesthouse / Local Lodge in Dharapani",
    activity: "Foot trekking commences through terraced hillsides and rural villages",
    meals: "Breakfast, Lunch & Dinner included",
    overnight: 'Dharapani (<span data-altitude-m="1560">1,560 m</span>)'
  },
  {
    dayNum: 6,
    title: "Trek from Dharapani to Muri",
    subtitle: 'Muri – approximately <span data-altitude-m="1850">1,850 m / 6,070 ft</span>',
    transferTime: "Approximately 5 to 6 hours walking",
    distance: "Approximately 12 km",
    accommodation: "Guesthouse / Local Lodge in Muri",
    activity: "Ascent through traditional Magar villages; first panoramic glimpse of Dhaulagiri I",
    meals: "Breakfast, Lunch & Dinner included",
    overnight: 'Muri (<span data-altitude-m="1850">1,850 m</span>)'
  },
  {
    dayNum: 7,
    title: "Trek from Muri to Boghara",
    subtitle: 'Boghara – approximately <span data-altitude-m="2080">2,080 m / 6,824 ft</span>',
    transferTime: "Approximately 6 to 7 hours walking",
    distance: "Approximately 12 km",
    accommodation: "Guesthouse / Local Lodge in Boghara",
    activity: "Stone staircase ascents, forested river gorges and suspension bridge crossings",
    meals: "Breakfast, Lunch & Dinner included",
    overnight: 'Boghara (<span data-altitude-m="2080">2,080 m</span>)'
  },
  {
    dayNum: 8,
    title: "Trek from Boghara to Dobang",
    subtitle: 'Dobang – approximately <span data-altitude-m="2520">2,520 m / 8,268 ft</span>',
    transferTime: "Approximately 6 to 7 hours walking",
    distance: "Approximately 13 km",
    accommodation: "Local Lodge / Supported Wilderness Camp in Dobang",
    activity: "Dense bamboo and rhododendron forest ascent; final village-lodge transition",
    meals: "Breakfast, Lunch & Dinner included",
    overnight: 'Dobang (<span data-altitude-m="2520">2,520 m</span>)'
  },
  {
    dayNum: 9,
    title: "Trek from Dobang to Choriban Khola",
    subtitle: 'Choriban Khola – approximately <span data-altitude-m="3110">3,110 m / 10,203 ft</span>',
    transferTime: "Approximately 5 hours walking",
    distance: "Approximately 10 km",
    accommodation: "Supported Alpine Tented Camp at Choriban Khola",
    activity: "Ascent into upper Myagdi gorge; transition to full expedition-supported camping",
    meals: "Expedition meals (Breakfast, Lunch & Dinner)",
    overnight: 'Choriban Khola (<span data-altitude-m="3110">3,110 m</span>)'
  },
  {
    dayNum: 10,
    title: "Trek from Choriban Khola to Italian Base Camp",
    subtitle: 'Italian Base Camp – approximately <span data-altitude-m="3660">3,660 m / 12,008 ft</span>',
    transferTime: "Approximately 5 to 6 hours walking",
    distance: "Approximately 12 km",
    accommodation: "Supported Alpine Tented Camp at Italian Base Camp",
    activity: "Ascent into high alpine amphitheater directly beneath Dhaulagiri West Face",
    meals: "Expedition meals (Breakfast, Lunch & Dinner)",
    overnight: 'Italian Base Camp (<span data-altitude-m="3660">3,660 m</span>)'
  },
  {
    dayNum: 11,
    title: "Acclimatization and Rest Day at Italian Base Camp",
    subtitle: 'Italian Base Camp – approximately <span data-altitude-m="3660">3,660 m / 12,008 ft</span>',
    transferTime: "2 to 3 hours optional ridge acclimatization hike",
    distance: "Acclimatization excursion & rest",
    accommodation: "Supported Alpine Tented Camp at Italian Base Camp",
    activity: "Mandatory altitude acclimatization, pulse-oximetry checks & glacier reconnaissance",
    meals: "Expedition meals (Breakfast, Lunch & Dinner)",
    overnight: 'Italian Base Camp (<span data-altitude-m="3660">3,660 m</span>)'
  },
  {
    dayNum: 12,
    title: "Trek from Italian Base Camp to Glacier Camp",
    subtitle: 'Glacier Camp – approximately <span data-altitude-m="4200">4,200 m / 13,780 ft</span>',
    transferTime: "Approximately 5 to 6 hours walking",
    distance: "Approximately 10 km",
    accommodation: "Alpine Tented Camp on Chhonbardan Glacier Moraine",
    activity: "Chhonbardan Glacier lateral moraine navigation across rugged scree and ice-margin paths",
    meals: "Expedition meals (Breakfast, Lunch & Dinner)",
    overnight: 'Glacier Camp (<span data-altitude-m="4200">4,200 m</span>)'
  },
  {
    dayNum: 13,
    title: "Trek from Glacier Camp to Dhaulagiri Base Camp",
    subtitle: 'Dhaulagiri Base Camp – approximately <span data-altitude-m="4750">4,750 m / 15,584 ft</span>',
    transferTime: "Approximately 4 to 5 hours walking",
    distance: "Approximately 8 km",
    accommodation: "Alpine Tented Camp at Dhaulagiri Base Camp",
    activity: "Glacier spine ascent to high base camp beneath towering Dhaulagiri I (8,167 m)",
    meals: "Expedition meals (Breakfast, Lunch & Dinner)",
    overnight: 'Dhaulagiri Base Camp (<span data-altitude-m="4750">4,750 m</span>)'
  },
  {
    dayNum: 14,
    title: "Acclimatization and French Pass Preparation at Dhaulagiri Base Camp",
    subtitle: 'Dhaulagiri Base Camp – approximately <span data-altitude-m="4750">4,750 m / 15,584 ft</span>',
    transferTime: "Rest, hydration & high-pass equipment check",
    distance: "Base camp vicinity & route review",
    accommodation: "Alpine Tented Camp at Dhaulagiri Base Camp",
    activity: "Mandatory rest day, French Pass weather review, harness & microspike inspection",
    meals: "Expedition meals (Breakfast, Lunch & Dinner)",
    overnight: 'Dhaulagiri Base Camp (<span data-altitude-m="4750">4,750 m</span>)'
  },
  {
    dayNum: 15,
    title: "Cross French Pass (5,360 m) and Trek to Hidden Valley",
    subtitle: 'French Pass – <span data-altitude-m="5360">5,360 m / 17,585 ft</span> | Hidden Valley – <span data-altitude-m="5200">5,200 m / 17,060 ft</span>',
    transferTime: "Approximately 7 to 8+ hours demanding alpine crossing",
    distance: "Approximately 15 km",
    accommodation: "Wilderness Alpine Tented Camp in Hidden Valley",
    activity: "Summit French Pass (5,360 m) with 360° Himalayan views; descend into remote Hidden Valley",
    meals: "Expedition meals (Breakfast, Lunch & Dinner)",
    overnight: 'Hidden Valley (<span data-altitude-m="5200">5,200 m</span>)'
  },
  {
    dayNum: 16,
    title: "Cross Dhampus Pass (5,250 m) and Trek to Yak Kharka",
    subtitle: 'Dhampus Pass – <span data-altitude-m="5250">5,250 m / 17,224 ft</span> | Yak Kharka – <span data-altitude-m="3680">3,680 m / 12,073 ft</span>',
    transferTime: "Approximately 7 to 8+ hours high pass crossing & descent",
    distance: "Approximately 14 km",
    accommodation: "Alpine Tented Camp at Yak Kharka",
    activity: "Traverse Dhampus Pass (5,250 m) followed by long 1,570 m descent toward Kali Gandaki exit",
    meals: "Expedition meals (Breakfast, Lunch & Dinner)",
    overnight: 'Yak Kharka (<span data-altitude-m="3680">3,680 m</span>)'
  },
  {
    dayNum: 17,
    title: "Trek from Yak Kharka to Jomsom via Marpha",
    subtitle: 'Jomsom – approximately <span data-altitude-m="2720">2,720 m / 8,924 ft</span>',
    transferTime: "Approximately 7 to 8 hours descent",
    distance: "Approximately 18 km",
    accommodation: "Mountain Lodge / Hotel in Jomsom",
    activity: "Descent into Kali Gandaki Valley; visit historic apple orchards of Marpha & arrive in Jomsom",
    meals: "Breakfast, Lunch & Dinner included",
    overnight: 'Jomsom (<span data-altitude-m="2720">2,720 m</span>)'
  },
  {
    dayNum: 18,
    title: "Scenic Mountain Flight from Jomsom to Pokhara",
    subtitle: 'Pokhara – approximately <span data-altitude-m="822">822 m / 2,697 ft</span>',
    transferTime: "Approximately 20 to 25 minutes scenic flight",
    distance: "Mountain flight over Annapurna & Dhaulagiri massifs",
    accommodation: "3-Star Lakeside Hotel in Pokhara",
    activity: "Early morning mountain flight through Kali Gandaki Gorge; lakeside relaxation in Pokhara",
    meals: "Breakfast included",
    overnight: 'Pokhara (<span data-altitude-m="822">822 m</span>)'
  },
  {
    dayNum: 19,
    title: "Drive from Pokhara to Kathmandu",
    subtitle: 'Kathmandu – approximately <span data-altitude-m="1355">1,355 m / 4,445 ft</span>',
    transferTime: "Approximately 6 to 8 hours overland drive",
    distance: "200 km overland drive (or optional 25-minute flight)",
    accommodation: "3-Star Boutique Hotel in Thamel",
    activity: "Scenic highway drive along Trishuli river valley; evening farewell cultural dinner",
    meals: "Breakfast & Farewell Cultural Dinner included",
    overnight: 'Kathmandu (<span data-altitude-m="1355">1,355 m</span>)'
  },
  {
    dayNum: 20,
    title: "Final Departure from Kathmandu",
    subtitle: 'Tribhuvan International Airport – Departure Flight',
    transferTime: "20 to 40 minutes private airport transfer",
    distance: "Hotel to Tribhuvan International Airport (6–8 km)",
    accommodation: "Departure Day (Hotel checkout)",
    activity: "Final souvenir shopping in Thamel and private transfer to airport for international flight",
    meals: "Breakfast included",
    overnight: 'Departure (Homebound Flight)'
  }
];

// Extract day descriptions from user text
function extractDayParagraphs() {
  const result = {};
  let curDay = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const match = line.match(/^Day\s+(\d+):\s*(.*)/i);
    if (match) {
      curDay = parseInt(match[1]);
      result[curDay] = [];
      continue;
    }
    if (curDay) {
      if (line.startsWith('Important notes about') || line.startsWith('Route and altitude profile')) {
        curDay = null;
        break;
      }
      if (
        line.startsWith('Transportation:') ||
        line.startsWith('Accommodation:') ||
        line.startsWith('Meals:') ||
        line.startsWith('Activity:') ||
        line.startsWith('Activities:') ||
        line.startsWith('Estimated walking distance:') ||
        line.startsWith('Estimated walking time:') ||
        line.startsWith('Estimated travel time:')
      ) {
        continue;
      }
      if (line.length > 0) {
        result[curDay].push(line);
      }
    }
  }
  return result;
}

const dayParagraphs = extractDayParagraphs();

// Generate HTML for all 20 cards
let cardsHtml = '';
daysData.forEach((day, idx) => {
  const isFirst = idx === 0;
  const activeClass = isFirst ? ' active' : '';
  const dayParas = dayParagraphs[day.dayNum] || [];

  const parasHtml = dayParas.map(p => `                      <p>${p}</p>`).join('\n');

  cardsHtml += `
            <!-- Day ${String(day.dayNum).padStart(2, '0')} -->
            <div class="itinerary-card${activeClass}" id="day-${day.dayNum}">
              <div class="itinerary-header">
                <div class="itinerary-header-left">
                  <h4 class="itinerary-day-title-new">
                    <span class="day-label">Day ${day.dayNum}:</span> ${day.title}
                  </h4>
                  <p class="itinerary-day-subtitle-new">
                    ${day.subtitle}
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
                        <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>Duration / Timing: ${day.transferTime}</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Distance / Staging: ${day.distance}</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Accommodation: ${day.accommodation}</span>
                    </div>
                    <div class="itinerary-metric-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                      </svg>
                      <span>Daytime Activity: ${day.activity}</span>
                    </div>
                  </div>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                      <span>Meals: ${day.meals}</span>
                    </div>
                    <div class="itinerary-meta-box-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                      </svg>
                      <span>Overnight: ${day.overnight}</span>
                    </div>
                  </div>

                  <div class="itinerary-description">
${parasHtml}
                  </div>
                </div>
              </div>
            </div>`;
});

const sectionPart1 = `// Module 4: Section 2 - 20-Day Itinerary for Dhaulagiri Circuit Trek
// Upgraded to match canonical flagship template (Everest Base Camp & Pikey Peak)
function getItinerarySection() {
  return \`
        <!-- Section 2: Itinerary -->
        <section id="section-itinerary" class="trek-detail-section">
          <!-- Section Heading & Global Action Bar -->
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 20px;">
            <div>
              <h2 class="trek-section-title" style="margin-bottom: 0;">Dhaulagiri Circuit Trek Itinerary: Day by Day Details</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px;"></div>
            </div>
            <button type="button" id="toggle-all-itinerary" class="btn btn-outline" style="padding: 8px 18px; font-size: 0.88rem; font-weight: 700; border-radius: 8px; border: 1px solid #cbd5e1; background: #ffffff; color: var(--color-primary-navy); cursor: pointer; transition: all 0.2s ease;">
              Expand All Days
            </button>
          </div>

          <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-top: 16px; margin-bottom: 16px;">
            Our 20-calendar-day Dhaulagiri Circuit Trek itinerary is built around a gradual, expedition-supported approach to high altitude rather than an accelerated race around the massif. Starting with an overland approach through Beni and Babiyachaur into the lush Myagdi Valley, the route progresses along traditional Magar trails, ascends through remote alpine gorges to Italian Base Camp (<span data-altitude-m="3660">3,660 m / 12,008 ft</span>), negotiates the active Chhonbardan Glacier to Dhaulagiri Base Camp (<span data-altitude-m="4750">4,750 m / 15,584 ft</span>), crosses the panoramic French Pass (<span data-altitude-m="5360">5,360 m / 17,585 ft</span>) into high-altitude Hidden Valley (<span data-altitude-m="5200">5,200 m / 17,060 ft</span>), and traverses Dhampus Pass (<span data-altitude-m="5250">5,250 m / 17,224 ft</span>) before descending into the Kali Gandaki Valley at Jomsom.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 16px;">
            The itinerary features 13 dedicated walking stages (Days 5 to 17) accompanied by full expedition camping support, two mandatory acclimatization rest days at Italian Base Camp and Dhaulagiri Base Camp, road transfers from Kathmandu to the Myagdi trailhead, a scenic mountain flight from Jomsom to Pokhara, and return travel to Kathmandu.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 24px;">
            Unlike standard teahouse routes, upper Dhaulagiri requires a complete, self-sustained expedition infrastructure. Professional high-altitude mountain guides, cooks, kitchen staff, and porters transport all 4-season alpine camping gear, dining tents, kitchen equipment, fresh food supplies, and safety reserves across the high passes.
          </p>

          <!-- Before Your Trek Starts Guidance Box -->
          <h3 style="font-size: 1.35rem; color: var(--color-primary-navy); font-weight: 700; margin-top: 32px; margin-bottom: 14px; line-height: 1.35;">
            Before Your Dhaulagiri Circuit Trek Starts
          </h3>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
            The start date you select is your arrival date in Kathmandu. Your actual expedition preparation and mandatory gear check take place on Day 2 in Kathmandu before departing overland toward Beni and the Myagdi Valley on Day 3.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
            During your pre-trek briefing in Kathmandu, your expedition leader reviews the day-by-day staging, high-pass weather forecasts, acclimatization protocol, and camping routines. Our gear specialists inspect all mandatory alpine equipment—including high-altitude mountaineering boots, crampons or microspikes, -20°C sleeping bag, insulated down parka, glacier glasses (Category 4 UV), and waterproof shell layers. Any missing items must be procured or rented in Kathmandu before departure, as no equipment shops exist after leaving Beni.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
            Because upper Dhaulagiri traverses completely uninhabited glacial moraine and high-altitude alpine zones with zero teahouse infrastructure between Dobang and Marpha, our crew transports complete expedition camping gear, heavy-duty 4-season alpine tents, mess and kitchen tents, kitchen equipment, fresh produce, and high-calorie expedition rations.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 28px; line-height: 1.7;">
            We strongly recommend booking travel insurance that explicitly covers high-altitude search, medical treatment, and emergency helicopter evacuation up to 6,000 meters elevation. Additionally, scheduling 2–3 contingency days in Nepal following the trek is highly recommended to protect against weather delays affecting the Jomsom–Pokhara mountain flight.
          </p>

          <!-- 4 Trip Stat Badges Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 28px;">
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px; display: flex; align-items: center; gap: 12px;">
              <div style="width: 36px; height: 36px; border-radius: 8px; background: #fff7ed; color: var(--color-copper-orange); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div>
                <span style="font-size: 0.72rem; text-transform: uppercase; color: #64748b; font-weight: 700; display: block;">Total Days</span>
                <strong style="color: var(--color-primary-navy); font-size: 0.95rem;">20 Calendar Days</strong>
              </div>
            </div>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px; display: flex; align-items: center; gap: 12px;">
              <div style="width: 36px; height: 36px; border-radius: 8px; background: #e6f7f0; color: #008060; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <div>
                <span style="font-size: 0.72rem; text-transform: uppercase; color: #64748b; font-weight: 700; display: block;">WALKING STAGES</span>
                <strong style="color: var(--color-primary-navy); font-size: 0.95rem;">13 Walking Days (Days 5–17)</strong>
              </div>
            </div>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px; display: flex; align-items: center; gap: 12px;">
              <div style="width: 36px; height: 36px; border-radius: 8px; background: #eff6ff; color: #2563eb; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 22h20L12 2z"></path></svg>
              </div>
              <div>
                <span style="font-size: 0.72rem; text-transform: uppercase; color: #64748b; font-weight: 700; display: block;">MAX ELEVATION</span>
                <strong style="color: var(--color-primary-navy); font-size: 0.95rem;"><span data-altitude-m="5360">5,360 m</span> (French Pass)</strong>
              </div>
            </div>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px; display: flex; align-items: center; gap: 12px;">
              <div style="width: 36px; height: 36px; border-radius: 8px; background: #fdf4ff; color: #a855f7; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div>
                <span style="font-size: 0.72rem; text-transform: uppercase; color: #64748b; font-weight: 700; display: block;">ACCLIMATIZATION</span>
                <strong style="color: var(--color-primary-navy); font-size: 0.95rem;">2 Scheduled Days (3,660m &amp; 4,750m)</strong>
              </div>
            </div>
          </div>

          <!-- Section 2.1: Itinerary at a Glance Table -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <div style="padding: 16px 20px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
              <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--color-primary-navy); margin: 0;">Itinerary at a Glance</h3>
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--color-copper-orange); background: #fff7ed; padding: 3px 10px; border-radius: 12px;">Days 1 to 20</span>
            </div>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem;">
                <thead>
                  <tr style="background: #fafafa; border-bottom: 2px solid #e2e8f0; color: var(--color-primary-navy);">
                    <th style="padding: 12px 16px; font-weight: 700;">Day</th>
                    <th style="padding: 12px 16px; font-weight: 700;">Scheduled Overnight</th>
                    <th style="padding: 12px 16px; font-weight: 700;">Sleeping Elevation</th>
                    <th style="padding: 12px 16px; font-weight: 700;">Daytime Activity / Staging</th>
                  </tr>
                </thead>
                <tbody style="color: #475569;">
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 1–2</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Kathmandu</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #f1f5f9; color: #334155;"><span data-altitude-m="1355">1,355 m (4,445 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Arrival, trek briefing, permit checks, and valley sightseeing</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 3</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Beni</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #f1f5f9; color: #334155;"><span data-altitude-m="836">836 m (2,743 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Scenic overland drive via Prithvi Highway (7–9 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 4</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Babiyachaur</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #f1f5f9; color: #334155;"><span data-altitude-m="970">970 m (3,182 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Road transfer into Myagdi Valley; walking starts Day 5</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 5</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Dharapani (Myagdi)</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #eff6ff; color: #1d4ed8;"><span data-altitude-m="1560">1,560 m (5,118 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Trek starts: village paths and terraced valley hillsides (5–6 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 6</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Muri</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #eff6ff; color: #1d4ed8;"><span data-altitude-m="1850">1,850 m (6,070 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Magar village approach; first views of Dhaulagiri I (5–6 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 7</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Boghara</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #eff6ff; color: #1d4ed8;"><span data-altitude-m="2080">2,080 m (6,824 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Stone staircase climbs and canyon trail undulations (6–7 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 8</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Dobang</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #eff6ff; color: #1d4ed8;"><span data-altitude-m="2520">2,520 m (8,268 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Bamboo and rhododendron gorge; final teahouse transition (6–7 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 9</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Choriban Khola</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #fff7ed; color: #c2410c;"><span data-altitude-m="3110">3,110 m (10,203 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Transition to full expedition-supported tented camping (5 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 10</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Italian Base Camp</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #fff7ed; color: #c2410c;"><span data-altitude-m="3660">3,660 m (12,008 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Ascent into alpine amphitheater beneath Dhaulagiri west face (5–6 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #f0fdf4;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 11</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Italian Base Camp</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #dcfce7; color: #15803d;"><span data-altitude-m="3660">3,660 m (12,008 ft)</span></span></td>
                    <td style="padding: 12px 16px; color: #16a34a; font-weight: 700;">Mandatory Acclimatization &amp; Rest Day (active ridge hike)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 12</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Glacier Camp</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #fff7ed; color: #c2410c;"><span data-altitude-m="4200">4,200 m (13,780 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Chhonbardan Glacier moraine traverse and rock navigation (5–6 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 13</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Dhaulagiri Base Camp</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #fef2f2; color: #b91c1c;"><span data-altitude-m="4750">4,750 m (15,584 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Glacier spine climb into high base camp beneath Dhaulagiri I (4–5 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #f0fdf4;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 14</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Dhaulagiri Base Camp</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #dcfce7; color: #15803d;"><span data-altitude-m="4750">4,750 m (15,584 ft)</span></span></td>
                    <td style="padding: 12px 16px; color: #16a34a; font-weight: 700;">Mandatory Acclimatization &amp; French Pass Preparation Day</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fef2f2;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 15</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Hidden Valley</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #fee2e2; color: #991b1b;"><span data-altitude-m="5200">5,200 m (17,060 ft)</span></span></td>
                    <td style="padding: 12px 16px; color: #dc2626; font-weight: 700;">Cross French Pass (<span data-altitude-m="5360">5,360 m / 17,585 ft</span>) into high basin (7–8+ hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fef2f2;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 16</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Yak Kharka</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #fff7ed; color: #c2410c;"><span data-altitude-m="3680">3,680 m (12,073 ft)</span></span></td>
                    <td style="padding: 12px 16px; color: #dc2626; font-weight: 700;">Cross Dhampus Pass (<span data-altitude-m="5250">5,250 m</span>) and descend 1,570 m (7–8+ hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 17</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Jomsom</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #eff6ff; color: #1d4ed8;"><span data-altitude-m="2720">2,720 m (8,924 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Descent to Kali Gandaki Valley; visit Marpha &amp; hotel celebration (6–7 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 18</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Pokhara</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #f1f5f9; color: #334155;"><span data-altitude-m="822">822 m (2,697 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Scenic mountain flight over Kali Gandaki Gorge; lakeside hotel</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 19</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Kathmandu</td>
                    <td style="padding: 12px 16px;"><span class="badge" style="background: #f1f5f9; color: #334155;"><span data-altitude-m="1355">1,355 m (4,445 ft)</span></span></td>
                    <td style="padding: 12px 16px;">Overland drive back to capital (6–8 hrs); farewell cultural dinner</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-copper-orange);">Day 20</td>
                    <td style="padding: 12px 16px; font-weight: 600;">Departure</td>
                    <td style="padding: 12px 16px;">Homebound</td>
                    <td style="padding: 12px 16px;">Private hotel-to-airport transfer according to international flight</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Section 2.2: Day-by-Day Detailed Itinerary Cards (20 Cards) -->
          <div class="itinerary-timeline">`;

const sectionPart2 = `
          </div>
        </section>
  \`;
}

module.exports = { getItinerarySection };
`;

const fullFile = sectionPart1 + cardsHtml + sectionPart2;
fs.writeFileSync('scratch/dhaulagiri_builder/mod4_itinerary.js', fullFile, 'utf8');
console.log("Successfully generated scratch/dhaulagiri_builder/mod4_itinerary.js. Length:", fullFile.length);
