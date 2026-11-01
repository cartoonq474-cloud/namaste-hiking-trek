const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'trek', 'everest-base-camp-with-cho-la-pass-trek', 'index.html');
let content = fs.readFileSync(targetFile, 'utf8');

// 1. Photos list for rotation
const cholaPhotos = [
  { file: 'everest-cho-la-pass-ama-dablam-mountain-view-08.jpg', alt: 'Dramatic Vista of Ama Dablam from the Cho La Route' },
  { file: 'everest-cho-la-pass-hikers-mountain-trail-stupa-15.jpg', alt: 'Hikers along the Sacred Stupa Trail in Khumbu' },
  { file: 'everest-cho-la-pass-snowy-mountain-village-04.jpg', alt: 'Snowy Mountain Village nestled below Himalayan Peaks' },
  { file: 'everest-cho-la-pass-snowy-trail-stupa-03.jpg', alt: 'Snowy Himalayan Trail and Buddhist Stupa' },
  { file: 'everest-cho-la-pass-trekkers-icy-trail-07.jpg', alt: 'Trekkers Navigating the Icy Cho La Pass Route' },
  { file: 'everest-cho-la-pass-trekking-group-alpine-lake-13.jpg', alt: 'Trekking Group beside Turquoise Alpine Gokyo Lake' },
  { file: 'everest-cho-la-pass-trekking-group-glacier-18.jpg', alt: 'Trekking Team on the Ngozumpa Glacier Moraine' },
  { file: 'everest-cho-la-pass-trekking-group-high-pass-14.jpg', alt: 'Trekking Group Crossing High Himalayan Pass' },
  { file: 'everest-cho-la-pass-trekking-group-mountain-lodge-16.jpg', alt: 'Authentic Himalayan Mountain Teahouse Lodge' },
  { file: 'everest-cho-la-pass-trekking-group-mountain-valley-17.jpg', alt: 'Spectacular Glacial Valley Panorama' },
  { file: 'everest-cho-la-pass-trekking-group-mountain-village-01.jpg', alt: 'Traditional Sherpa Village in the Everest Region' },
  { file: 'everest-cho-la-pass-trekking-group-pass-celebration-10.jpg', alt: 'Celebration at the Summit of Cho La Pass (5,420m)' },
  { file: 'everest-cho-la-pass-trekking-group-pass-snowfield-11.jpg', alt: 'Navigating the Glacial Snowfield on Cho La Pass' },
  { file: 'everest-cho-la-pass-trekking-group-snowfield-12.jpg', alt: 'Traversing the Alpine Snowfield below Glacial Peaks' },
  { file: 'everest-cho-la-pass-trekking-group-snowy-mountains-09.jpg', alt: 'Himalayan Giants Panorama on the EBC Cho La Route' },
  { file: 'everest-cho-la-pass-trekking-group-trail-monument-06.jpg', alt: 'Historic Trail Memorial Plateau near Lobuche' },
  { file: 'everest-cho-la-pass-trekking-group-village-trail-02.jpg', alt: 'Scenic Sherpa Village Trail in Sagarmatha National Park' },
  { file: 'everest-cho-la-pass-turquoise-alpine-lake-05.jpg', alt: 'Pristine Turquoise Waters of the Sacred Gokyo Lakes' }
];

function getPhotoGrid(dayNum) {
  const startIdx = ((dayNum - 1) * 3) % cholaPhotos.length;
  const p1 = cholaPhotos[startIdx];
  const p2 = cholaPhotos[(startIdx + 1) % cholaPhotos.length];
  const p3 = cholaPhotos[(startIdx + 2) % cholaPhotos.length];
  const p4 = cholaPhotos[(startIdx + 3) % cholaPhotos.length];

  return `                    <div class="itinerary-photos-grid">
                      <div class="itinerary-photo-wrapper">
                        <img loading="lazy" src="../../images/treks/everest-cho-la-pass/${p1.file}" alt="${p1.alt}">
                      </div>
                      <div class="itinerary-photo-wrapper">
                        <img loading="lazy" src="../../images/treks/everest-cho-la-pass/${p2.file}" alt="${p2.alt}">
                      </div>
                      <div class="itinerary-photo-wrapper">
                        <img loading="lazy" src="../../images/treks/everest-cho-la-pass/${p3.file}" alt="${p3.alt}">
                      </div>
                      <div class="itinerary-photo-wrapper">
                        <img loading="lazy" src="../../images/treks/everest-cho-la-pass/${p4.file}" alt="${p4.alt}">
                      </div>
                    </div>`;
}

// 2. Build 18 Days Itinerary Data
const daysData = [
  {
    num: 1,
    title: "Arrival at Tribhuvan International Airport in Kathmandu and transfer to hotel",
    subtitle: "Kathmandu – approximately 1,300 m / 4,265 ft",
    transfer: "20 to 30 minutes",
    acc: "3-Star Hotel in Thamel",
    act: "Pre-trek briefing, documents & gear check",
    meals: "Welcome Dinner",
    overnight: "Kathmandu",
    desc: [
      "Your Everest Base Camp with Cho La Pass adventure begins in Kathmandu, Nepal's historic capital and mountaineering hub. After arriving at Tribhuvan International Airport, you will meet our representative outside the terminal and be escorted by private vehicle to your hotel in Thamel.",
      "The remainder of the day is deliberately relaxed. You can rest from international travel, stroll the vibrant alleys of Thamel, pick up any needed trekking gear (such as microspikes or gaiters), and attend a comprehensive evening briefing with your lead Sherpa guide followed by a warm welcome dinner."
    ]
  },
  {
    num: 2,
    title: "Morning flight to Lukla and trek to Phakding",
    subtitle: "Lukla (2,840 m) to Phakding (2,610 m)",
    transfer: "Flight 35 mins; Trek 3 to 4 hours (8 km)",
    acc: "Teahouse Lodge",
    act: "Scenic Himalayan flight & descent along the Dudh Koshi",
    meals: "Breakfast, Lunch, Dinner",
    overnight: "Phakding",
    desc: [
      "Board an exhilarating early morning flight to Tenzing-Hillary Airport in Lukla (2,840 m), renowned for its dramatic runway perched against high Himalayan slopes. Meet your support team and porters at the lodge in Lukla before beginning the trek.",
      "The trail sets off northward, descending through pine forests and past hand-carved Buddhist mani stones to Ghat and onward to Phakding (2,610 m). Resting beside the roaring, milky-glacial waters of the Dudh Koshi river, you enjoy an easy first day to adjust to mountain rhythms."
    ]
  },
  {
    num: 3,
    title: "Trek from Phakding to Namche Bazaar via the Hillary Suspension Bridge",
    subtitle: "Phakding (2,610 m) to Namche Bazaar (3,440 m)",
    transfer: "5 to 6 hours walking (11 km)",
    acc: "Mountain Lodge",
    act: "Cross suspension bridges & enter Sagarmatha National Park",
    meals: "Breakfast, Lunch, Dinner",
    overnight: "Namche Bazaar",
    desc: [
      "Following the Dudh Koshi river upstream, the route crisscrosses steel suspension bridges festooned with colorful prayer flags. Pass through the welcoming village of Monjo to complete permit checks at the Sagarmatha National Park entrance.",
      "Beyond Jorsale, cross the breathtaking Hillary Suspension Bridge suspended high over the Bhote Koshi and Dudh Koshi confluence. From here, conquer the famous winding pine-forest climb up to Namche Bazaar (3,440 m), the bustling amphitheater town of the Khumbu."
    ]
  },
  {
    num: 4,
    title: "Acclimatization and exploration day in Namche Bazaar",
    subtitle: "Namche Bazaar – hike to Hotel Everest View (3,880 m) & Khumjung",
    transfer: "3 to 4 hours walking (5 km roundtrip)",
    acc: "Mountain Lodge",
    act: "Panoramic acclimatization hike with views of Everest and Ama Dablam",
    meals: "Breakfast, Lunch, Dinner",
    overnight: "Namche Bazaar",
    desc: [
      "Acclimatization is vital for a safe trek above 5,000 meters. Today, embark on a morning hike up the ridge above Namche to the prestigious Hotel Everest View (3,880 m), where you are rewarded with your first panoramic sight of Mount Everest, Lhotse, Nuptse, and Ama Dablam.",
      "Continue across the high plateau to Khumjung village to visit the historic monastery that preserves the revered 'Yeti Scalp' and the school founded by Sir Edmund Hillary. Descend back to Namche Bazaar for coffee, bakeries, and gear inspections."
    ]
  },
  {
    num: 5,
    title: "Trek from Namche Bazaar to Tengboche Monastery",
    subtitle: "Namche Bazaar (3,440 m) to Tengboche (3,860 m)",
    transfer: "5 hours walking (10 km)",
    acc: "Teahouse Lodge",
    act: "Visit historic Tengboche Monastery beneath the spire of Ama Dablam",
    meals: "Breakfast, Lunch, Dinner",
    overnight: "Tengboche",
    desc: [
      "A scenic high-contour trail hugs the valley wall offering spellbinding vistas of Everest, Thamserku, and Ama Dablam before dropping down to the riverside hamlet of Phunki Thenga for lunch.",
      "After lunch, ascend steadily through fragrant rhododendron and birch forests to Tengboche (3,860 m). Here stands Tengboche Monastery, the spiritual heart of the Sherpa homeland. Trekkers can witness the evocative afternoon chanting ceremonies of the monks with Ama Dablam standing sentinel."
    ]
  },
  {
    num: 6,
    title: "Trek from Tengboche to Dingboche",
    subtitle: "Tengboche (3,860 m) to Dingboche (4,410 m)",
    transfer: "5 to 6 hours walking (11 km)",
    acc: "Teahouse Lodge",
    act: "Ascend past Pangboche into the vast Imja Valley tundra",
    meals: "Breakfast, Lunch, Dinner",
    overnight: "Dingboche",
    desc: [
      "Descend gently through conifer forests to Deboche, crossing a suspension bridge over the churning Imja Khola. The route passes Pangboche (3,930 m), home to the Khumbu's oldest Gompa, providing intimate, sheer views of Ama Dablam's soaring western face.",
      "Leaving the tree line behind, the path leads into the wide alpine meadows of the Imja Valley. Arrive in Dingboche (4,410 m), an ancient settlement surrounded by stone walls built to protect buckwheat and barley crops from freezing winds."
    ]
  },
  {
    num: 7,
    title: "Second acclimatization day in Dingboche (Nagarjun Hill hike)",
    subtitle: "Dingboche – climb Nagarjun Hill / Nangkartshang Peak (5,100 m)",
    transfer: "4 hours walking (4.5 km roundtrip)",
    acc: "Teahouse Lodge",
    act: "High-altitude acclimatization vantage point over Makalu and Lhotse",
    meals: "Breakfast, Lunch, Dinner",
    overnight: "Dingboche",
    desc: [
      "To ensure excellent adaptation for Kala Patthar (5,545 m) and the upcoming Cho La pass crossing (5,420 m), take a dedicated acclimatization climb up Nagarjun Hill (5,100 m) directly above Dingboche.",
      "The ridge provides breathtaking vertical views of Makalu (8,485 m)—the world's fifth-highest peak—along with Lhotse, Island Peak, Taboche, and the icy spire of Cholatse. Returning to Dingboche for an afternoon of rest gives your red blood cells time to multiply."
    ]
  },
  {
    num: 8,
    title: "Trek from Dingboche to Lobuche via Thokla Pass Memorials",
    subtitle: "Dingboche (4,410 m) to Lobuche (4,940 m)",
    transfer: "5 hours walking (8 km)",
    acc: "Teahouse Lodge",
    act: "Climber memorial plateau Chukpo Lari and lateral moraine trail",
    meals: "Breakfast, Lunch, Dinner",
    overnight: "Lobuche",
    desc: [
      "Trek northwest along the wide alpine valley to Dughla, where the trail starts a steep, rocky ascent to the crest of Thokla Pass. Here at Chukpo Lari sits a poignant plateau of stone memorials dedicated to brave Sherpas and mountaineers who perished on Everest.",
      "From the pass, the terrain turns into a true glacial landscape. Follow the lateral moraine of the immense Khumbu Glacier to the cluster of lodges at Lobuche (4,940 m), where towering peaks of Nuptse and Pumori dominate the skyline."
    ]
  },
  {
    num: 9,
    title: "Trek to Gorak Shep and hike to Everest Base Camp",
    subtitle: "Lobuche (4,940 m) to Gorak Shep (5,164 m) and EBC (5,364 m)",
    transfer: "7 to 8 hours walking (13 km roundtrip from Gorak Shep)",
    acc: "Teahouse Lodge in Gorak Shep",
    act: "Reaching the foot of the Khumbu Icefall at Everest Base Camp",
    meals: "Breakfast, Lunch, Dinner",
    overnight: "Gorak Shep",
    desc: [
      "An exhilarating day begins along the rocky crests of the Khumbu Glacier moraine to reach Gorak Shep (5,164 m), the highest permanent lodge stop in the world. After a hot soup and leaving heavy packs at the lodge, trek northeast toward Everest Base Camp.",
      "Traverse glacial scree and undulating ice ridges until reaching Everest Base Camp (5,364 m). Stand proudly by the celebration stone, marvel at the labyrinth of blue ice towers in the Khumbu Icefall, take photos with your team, and return to Gorak Shep before dusk."
    ]
  },
  {
    num: 10,
    title: "Sunrise ascent of Kala Patthar and trek to Dzongla",
    subtitle: "Gorak Shep (5,164 m) to Kala Patthar (5,545 m) and Dzongla (4,830 m)",
    transfer: "6 to 7 hours walking (12 km)",
    acc: "Teahouse Lodge",
    act: "Summit Kala Patthar for the iconic Everest sunrise, then route toward Cho La",
    meals: "Breakfast, Lunch, Dinner",
    overnight: "Dzongla",
    desc: [
      "Before dawn, begin the steep, steady hike up Kala Patthar (5,545 m / 18,192 ft). From this world-renowned summit, watch the morning sun turn the black pyramid of Mount Everest, South Col, Lhotse, and Nuptse into blazing gold—an emotional, unforgettable highlight.",
      "Descend to Gorak Shep for a hot breakfast, then hike back down past Lobuche, branching westward across the pristine alpine meadows beneath the sheer face of Cholatse. Arrive at Dzongla (4,830 m), the tranquil base hamlet for tomorrow's crossing of Cho La Pass."
    ]
  },
  {
    num: 11,
    title: "Cross the glaciated Cho La Pass to Thangnak",
    subtitle: "Dzongla (4,830 m) over Cho La Pass (5,420 m) to Thangnak (4,700 m)",
    transfer: "7 to 8 hours walking (9 km)",
    acc: "Teahouse Lodge",
    act: "Traversing the Cho La glacier snowfield and dramatic pass summit",
    meals: "Breakfast, Lunch, Dinner",
    overnight: "Thangnak",
    desc: [
      "The pinnacle mountain challenge of the trek! Rise at 4:30 AM to begin the ascent across frozen talus and rock slabs to the snout of the Cho La Glacier. Strap on microspikes to safely navigate the undulating, frozen snowfield under your Sherpa guide's watchful direction.",
      "Reach the prayer-flag adorned summit of Cho La Pass (5,420 m). Enjoy jaw-dropping views extending across Baruntse, Ama Dablam, and the peaks flanking the Gokyo Valley. After celebratory summit photos, descend a steep scree slope and boulder field to reach Thangnak (4,700 m) for hot tea and recovery."
    ]
  },
  {
    num: 12,
    title: "Trek from Thangnak across Ngozumpa Glacier to Gokyo Lakes",
    subtitle: "Thangnak (4,700 m) to Gokyo Lakes (4,790 m)",
    transfer: "4 hours walking (4.5 km)",
    acc: "Lakeside Mountain Lodge",
    act: "Traverse Ngozumpa Glacier moraine to the turquoise waters of Gokyo",
    meals: "Breakfast, Lunch, Dinner",
    overnight: "Gokyo",
    desc: [
      "A relatively short but fascinating day traversing the vast Ngozumpa Glacier—the longest glacier in the Himalayas. The path meanders through glacial debris, past ice cliffs and shimmering turquoise meltwater lakes.",
      "Climbing over the glacier's western lateral moraine, you are greeted by the spellbinding sight of the Second Lake (Taboche Tsho) and proceed along the lakeshore to the Third Lake (Dudh Pokhari). Here lies the picturesque settlement of Gokyo (4,790 m), nestled beside turquoise alpine waters."
    ]
  },
  {
    num: 13,
    title: "Sunrise climb of Gokyo Ri and exploration of the Upper Gokyo Lakes",
    subtitle: "Gokyo (4,790 m) – climb Gokyo Ri (5,357 m) & 4th/5th Lakes",
    transfer: "5 to 6 hours walking (7 km roundtrip)",
    acc: "Lakeside Mountain Lodge",
    act: "Viewpoint of four 8,000-meter peaks: Everest, Lhotse, Makalu, and Cho Oyu",
    meals: "Breakfast, Lunch, Dinner",
    overnight: "Gokyo",
    desc: [
      "An early morning ascent of Gokyo Ri (5,357 m) delivers what many seasoned alpinists consider the single greatest panoramic viewpoint on the planet. From the top, four 8,000m giants are visible simultaneously: Everest, Lhotse, Makalu, and Cho Oyu towering over the massive Ngozumpa Glacier.",
      "Descend to the lodge for brunch. In the afternoon, take a peaceful stroll along the glacier edge toward the Fourth Lake (Thonak Tsho) and Fifth Lake (Ngozumpa Tsho), where pristine glacial reflections and solitude reign."
    ]
  },
  {
    num: 14,
    title: "Trek from Gokyo down the Dudh Koshi Valley to Dole",
    subtitle: "Gokyo (4,790 m) to Dole (4,200 m)",
    transfer: "5 to 6 hours walking (12 km)",
    acc: "Teahouse Lodge",
    act: "Descend the eastern valley of the Dudh Koshi past waterfalls and pastures",
    meals: "Breakfast, Lunch, Dinner",
    overnight: "Dole",
    desc: [
      "Leaving the turquoise lakes behind, begin descending down the tranquil Gokyo Valley along the high eastern bank of the Dudh Koshi. Pass through the First Lake (Longponga) and trek through the pastoral yak pastures of Machhermo (4,470 m).",
      "As altitude decreases, rich alpine flora reappears. Enjoy easier breathing and warmer temperatures as the trail winds past cascading waterfalls and birch woods to the settlement of Dole (4,200 m)."
    ]
  },
  {
    num: 15,
    title: "Trek from Dole to Namche Bazaar via Mong La",
    subtitle: "Dole (4,200 m) to Namche Bazaar (3,440 m)",
    transfer: "5 hours walking (11 km)",
    acc: "Mountain Lodge",
    act: "Crossing Mong La pass with panoramas of Ama Dablam & Thamserku",
    meals: "Breakfast, Lunch, Dinner",
    overnight: "Namche Bazaar",
    desc: [
      "Drop steeply down through rhododendron and bamboo forest to Phortse Thenga (3,680 m) before ascending to the scenic ridge crest of Mong La (3,975 m), marked by an ancient chorten and sweeping views of Ama Dablam and Kantega.",
      "From Mong La, traverse a gentle contour trail around the mountainside, rejoining the main Everest highway above Sanasa and winding back into Namche Bazaar (3,440 m). Enjoy hot showers, bakeries, and celebrating your circuit success with your crew."
    ]
  },
  {
    num: 16,
    title: "Trek from Namche Bazaar back to Lukla",
    subtitle: "Namche Bazaar (3,440 m) to Lukla (2,840 m)",
    transfer: "6 to 7 hours walking (18 km)",
    acc: "Teahouse Lodge",
    act: "Final descent along the Dudh Koshi and farewell celebration in Lukla",
    meals: "Breakfast, Lunch, Dinner",
    overnight: "Lukla",
    desc: [
      "Begin your final full day on foot, descending the steep path through the pine forest and crossing the high Hillary Suspension Bridge. Check out of Sagarmatha National Park at Monjo and follow the gentle river valley through Phakding.",
      "A gentle final climb brings you back up to Lukla (2,840 m). In the evening, gather for a festive farewell dinner with your trekking guide and porter team, thanking them for their dedicated support throughout this epic 18-day expedition."
    ]
  },
  {
    num: 17,
    title: "Morning flight from Lukla to Kathmandu / Ramechhap and hotel transfer",
    subtitle: "Lukla (2,840 m) to Kathmandu (1,300 m)",
    transfer: "Flight 35 mins; Transfer 30 mins",
    acc: "3-Star Hotel in Thamel",
    act: "Scenic flight over the Himalayas back to Kathmandu valley",
    meals: "Breakfast",
    overnight: "Kathmandu",
    desc: [
      "Board an early morning return flight from Lukla, watching the snowy Himalayan ridgelines fade into the green hills of Kathmandu. Upon landing, transfer back to your comfortable hotel in Thamel.",
      "The rest of the day is yours to enjoy a relaxing massage, shop for pashminas and handicrafts, or celebrate with a celebratory dinner at one of Thamel's renowned international restaurants."
    ]
  },
  {
    num: 18,
    title: "Final departure from Kathmandu",
    subtitle: "Kathmandu (1,300 m) – Tribhuvan International Airport",
    transfer: "Transfer 30 mins",
    acc: "Departure Day",
    act: "Airport transfer for international departure",
    meals: "Breakfast",
    overnight: "N/A",
    desc: [
      "Enjoy a leisurely breakfast at your hotel. If you have afternoon or evening flights, spend your remaining hours exploring the historic courtyards of Kathmandu or picking up last-minute souvenirs.",
      "Our representative will transfer you by private vehicle to Tribhuvan International Airport approximately 3 hours prior to your scheduled flight, concluding an extraordinary adventure through Everest Base Camp and Cho La Pass."
    ]
  }
];

function buildItineraryHtml() {
  return daysData.map((d, index) => {
    const activeClass = index === 0 ? ' active' : '';
    return `              <!-- Day ${String(d.num).padStart(2, '0')} -->
              <div class="itinerary-card${activeClass}">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day ${d.num}:</span> ${d.title}
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      ${d.subtitle}
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
                        <span>${d.transfer}</span>
                      </div>
                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        <span>Accommodation: ${d.acc}</span>
                      </div>
                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polygon points="12 2 2 22 22 22"></polygon>
                        </svg>
                        <span>Activity: ${d.act}</span>
                      </div>
                    </div>

                    <div class="itinerary-meta-box">
                      <div class="itinerary-meta-box-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                        </svg>
                        <span>Meals: ${d.meals}</span>
                      </div>
                      <div class="itinerary-meta-box-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                          <circle cx="12" cy="9" r="2.5"></circle>
                        </svg>
                        <span>Overnight: ${d.overnight}</span>
                      </div>
                    </div>

                    <div class="itinerary-description">
                      <p>${d.desc[0]}</p>
                      <p>${d.desc[1]}</p>
                    </div>

${getPhotoGrid(d.num)}
                  </div>
                </div>
              </div>`;
  }).join('\n\n');
}

// 3. Replace Itinerary in content
const newItineraryHtml = `<section id="section-itinerary" class="trek-detail-section">
            <div class="itinerary-title-wrap">
              <h2 class="trek-section-title">Everest Base Camp with Cho La Pass Trek Itinerary: Day by Day Details</h2>
              <div class="itinerary-controls">
                <button type="button" class="itinerary-expand-all-btn" id="itin-expand-all-btn">
                  <span>Expand All</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            <div class="itinerary-accordion-container">
${buildItineraryHtml()}
            </div>

            <!-- Customization / Inquiry CTA Strip -->
            <div class="itinerary-custom-cta">
              <div class="itinerary-custom-cta-text">
                <h3>Want to customize this 18-Day Cho La Pass itinerary?</h3>
                <p>We can adjust the duration, add helicopter returns from Gokyo, or organize private guides for your team.</p>
              </div>
              <button class="btn btn-primary open-inquiry-btn" data-trek-title="Everest Base Camp with Cho La Pass Trek">
                Customize My Trek
              </button>
            </div>
          </section>`;

content = content.replace(/<section id="section-itinerary"[\s\S]*?<\/section>/i, newItineraryHtml);

// 4. Update Facts Grid
content = content.replace(/<span style="font-size: 1.05rem; color: var\(--color-neutral-800\); font-weight: 600;">14 days<\/span>/i, '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">18 days</span>');
content = content.replace(/<span style="font-size: 1.05rem; color: var\(--color-neutral-800\); font-weight: 600;">Moderate<\/span>/i, '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Strenuous / Alpine Grade 4</span>');

// 5. Update Overview Title & Text
content = content.replace(
  /<p style="color: var\(--color-neutral-700\); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">\s*The Everest Base Camp Trek is a high-altitude journey[\s\S]*?<\/p>/i,
  `<p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The <strong>Everest Base Camp with Cho La Pass Trek</strong> is widely acclaimed as the ultimate Himalayan loop. In 18 extraordinary days, this circuit bridges the iconic trails of Everest Base Camp with the tranquil, sacred turquoise waters of Gokyo Lakes via the thrilling crossing of <strong>Cho La Pass (5,420 m / 17,782 ft)</strong>. This route delivers the complete Everest experience: legendary Sherpa heritage, high mountain monasteries, two 5,000m summits (Kala Patthar at 5,545m and Gokyo Ri at 5,357m), standing at Everest Base Camp (5,364m), and crossing the Himalayas' longest glacier (Ngozumpa).
            </p>`
);

// 6. Update Dates section
content = content.replace(/Booking Dates & Availability for EBC trek/g, 'Booking Dates & Availability for Everest Base Camp with Cho La Pass Trek');

// 7. Update Includes & Excludes
content = content.replace(/What includes in this Everest Base Camp trek\?/g, 'What includes in this Everest Base Camp with Cho La Pass Trek?');
content = content.replace(/What Excludes in this Everest Base Camp trek\?/g, 'What Excludes in this Everest Base Camp with Cho La Pass Trek?');

// 8. Update Packing List
content = content.replace(
  /Packing List for Everest Base Camp Trek/g,
  'Packing List for Everest Base Camp with Cho La Pass Trek'
);
if (!content.includes('Microspikes or lightweight crampons')) {
  content = content.replace(
    '<li>Trekking poles</li>',
    '<li>Trekking poles</li>\n                  <li>Microspikes or lightweight crampons (essential for Cho La glacier crossing)</li>\n                  <li>Gaiters (recommended for snow & loose scree on Cho La Pass)</li>'
  );
}

// 9. Update Alt Profile, Weather & Map titles
content = content.replace(/Altitude Profile of Everest Base Camp Trek/g, 'Altitude Profile of Everest Base Camp with Cho La Pass Trek');
content = content.replace(/Weather on the Everest Base Camp Trek/g, 'Weather on the Everest Base Camp with Cho La Pass Trek');
content = content.replace(/Everest Base Camp Trek Map/g, 'Everest Base Camp with Cho La Pass Trek Map');

// 10. Update "Read before you book" details title
content = content.replace(/Read before you book, Everest Base Camp Trek/g, 'Read before you book: Everest Base Camp with Cho La Pass Trek (18 Days)');

// 11. Write back file
fs.writeFileSync(targetFile, content, 'utf8');
console.log('Complete page built successfully! File size:', content.length);
