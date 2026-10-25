const fs = require('fs');
const path = require('path');

// 1. Read competitor 16 days data
const daysData = JSON.parse(fs.readFileSync('scratch/competitor_16_days_complete.json', 'utf8'));

// Photos for 16 days
const dayPhotos = [
  { img: "annapurna-circuit-tilicho-lake-trekking-group-autumn-forest-16.jpg", alt: "Arrival at Kathmandu Tribhuvan International Airport" },
  { img: "annapurna-circuit-tilicho-lake-trekkers-cliffside-trail-01.jpg", alt: "Overland drive to Jagat via Besisahar along Marsyangdi River" },
  { img: "annapurna-circuit-tilicho-lake-trekking-group-forest-trail-02.jpg", alt: "Trek from Jagat to Dharapani crossing suspension bridges" },
  { img: "annapurna-circuit-tilicho-lake-trekkers-mountain-trail-03.jpg", alt: "Trek through pine forests from Dharapani to Chame" },
  { img: "annapurna-circuit-tilicho-lake-trekking-group-pine-forest-10.jpg", alt: "Trek from Chame to Upper Pisang beneath Annapurna peaks" },
  { img: "annapurna-circuit-tilicho-lake-trekking-group-manang-gate-15.jpg", alt: "Panoramic trail from Upper Pisang to Manang with Annapurna range views" },
  { img: "annapurna-circuit-tilicho-lake-trekking-group-mountain-view-05.jpg", alt: "Acclimatization day hike to Gangapurna Lake in Manang" },
  { img: "annapurna-circuit-tilicho-lake-trekkers-steep-trail-06.jpg", alt: "Trek from Manang to Tilicho Base Camp via Khangsar village" },
  { img: "annapurna-circuit-tilicho-lake-trekkers-tilicho-lake-14.jpg", alt: "High altitude ascent to turquoise Tilicho Lake at 4919m" },
  { img: "annapurna-circuit-tilicho-lake-trekking-group-high-valley-07.jpg", alt: "Descent from Siri Kharka to Yak Kharka alpine pastures" },
  { img: "annapurna-circuit-tilicho-lake-trekkers-high-altitude-trail-08.jpg", alt: "Trek from Yak Kharka to Thorong Phedi staging post" },
  { img: "annapurna-circuit-tilicho-lake-trekkers-ridge-trail-09.jpg", alt: "Crossing Thorong La Pass at 5416m and descent to Muktinath" },
  { img: "annapurna-circuit-tilicho-lake-trekking-group-rocky-valley-12.jpg", alt: "Descent from sacred Muktinath temple to wind-carved Jomsom" },
  { img: "annapurna-circuit-tilicho-lake-trekkers-mountain-valley-13.jpg", alt: "Mountain flight from Jomsom to Pokhara lakeside" },
  { img: "annapurna-circuit-tilicho-lake-trekking-group-tilicho-lake-18.jpg", alt: "Scenic flight from Pokhara to Kathmandu and celebration" },
  { img: "annapurna-circuit-tilicho-lake-trekking-group-tilicho-valley-19.jpg", alt: "Farewell and international departure from Kathmandu airport" }
];

// Clean brand names
daysData.forEach(d => {
  d.description_text = d.description_text
    .replace(/Nepal Intrepid Treks/gi, 'Namaste Hiking Trek')
    .replace(/Intrepid Treks/gi, 'Namaste Hiking Trek');
});

// Map 16 days
const itinerary16 = daysData.map((d, index) => {
  const photo = dayPhotos[index] || dayPhotos[0];
  let elevation = "1,355 m / 4,445 ft";
  let distance = "Transfer";
  let highlights = [];

  if (d.day === 1) {
    elevation = "1,355 m / 4,445 ft";
    distance = "6 km (Transfer)";
    highlights = ["Airport greeting & private hotel transfer", "Expedition briefing with lead guide", "Gear check in Thamel", "Welcome dinner with cultural performance"];
  } else if (d.day === 2) {
    elevation = "1,300 m / 4,265 ft";
    distance = "286 km (7–8 hrs drive)";
    highlights = ["Scenic Prithvi Highway drive along Trishuli river", "Besisahar gateway to Annapurna Circuit", "Entering Marsyangdi River valley", "Overnight in Jagat teahouse"];
  } else if (d.day === 3) {
    elevation = "1,960 m / 6,430 ft";
    distance = "12 km (5 hrs walk)";
    highlights = ["Rocky trails through Chamje and Tal village", "First village in Manang district", "Crossing Marsyangdi suspension bridges", "Arrival in Dharapani"];
  } else if (d.day === 4) {
    elevation = "2,630 m / 8,628 ft";
    distance = "15 km (6 hrs walk)";
    highlights = ["Climb up to Timang village with Manaslu views", "Walking through pine, fir and rhododendron forests", "Administrative center of Chame", "Natural hot spring views along river"];
  } else if (d.day === 5) {
    elevation = "3,300 m / 10,826 ft";
    distance = "13.9 km (6 hrs walk)";
    highlights = ["Curving rock wall of Paungda Danda (Swarga Dwar)", "Entering Buddhist cultural zone of Upper Pisang", "Spectacular views of Annapurna II and IV", "Traditional stone-walled village & gompa"];
  } else if (d.day === 6) {
    elevation = "3,500 m / 11,482 ft";
    distance = "16 km (6.5 hrs walk)";
    highlights = ["High balcony trail via Ghyaru and Ngawal", "Panoramic vistas of the entire Annapurna range", "Centuries-old Buddhist monasteries and stupas", "Arrival in the historic trading hub of Manang"];
  } else if (d.day === 7) {
    elevation = "3,500 m – 3,800 m / 11,482 ft – 12,467 ft";
    distance = "4–6 km (Hike)";
    highlights = ["Active acclimatization hike to turquoise Gangapurna Lake", "Chongkor viewpoint with glacier and avalanche views", "Himalayan Rescue Association (HRA) altitude lecture", "Rest and hydration in ancient Manang"];
  } else if (d.day === 8) {
    elevation = "4,150 m / 13,615 ft";
    distance = "19.1 km (5–6 hrs walk)";
    highlights = ["Branching off the classic circuit toward Khangsar village", "Stunning views of Tilicho Peak and the Great Barrier", "Traversing steep alpine scree slopes with caution", "Arrival at isolated Tilicho Base Camp lodge"];
  } else if (d.day === 9) {
    elevation = "4,919 m / 16,138 ft (Lake) → 4,060 m / 13,320 ft (Siri Kharka)";
    distance = "15 km (6–7 hrs walk)";
    highlights = ["Early morning 4:30 AM ascent beneath starry Himalayan skies", "Reaching turquoise Tilicho Lake (4,919m) beneath Great Barrier", "Unforgettable photos and hot tea by the glacial waters", "Descent back to base camp and onward to Siri Kharka"];
  } else if (d.day === 10) {
    elevation = "4,050 m / 13,287 ft";
    distance = "11.1 km (5 hrs walk)";
    highlights = ["Panoramic high trail connecting Siri Kharka to Yak Kharka", "Rejoining the main Annapurna Circuit route", "Herds of blue sheep (Bharal) grazing on alpine slopes", "Relaxed afternoon in Yak Kharka teahouses"];
  } else if (d.day === 11) {
    elevation = "4,450 m / 14,599 ft";
    distance = "8.5 km (4.5 hrs walk)";
    highlights = ["Gradual ascent across wooden suspension bridge", "Reaching Thorong Phedi base staging settlement", "Carbohydrate loading and early evening rest", "Briefing for the 4:00 AM Thorong La summit crossing"];
  } else if (d.day === 12) {
    elevation = "5,416 m / 17,769 ft (Pass) → 3,710 m / 12,171 ft (Muktinath)";
    distance = "16.4 km (8 hrs walk)";
    highlights = ["Pre-dawn headlamp climb up switchbacks to Thorong High Camp", "Reaching Thorong La Pass crest (5,416m) with prayer flags", "Dramatic views into Mustang and the Dhaulagiri range", "Long 1,600m descent to the holy shrine of Muktinath"];
  } else if (d.day === 13) {
    elevation = "2,720 m / 8,923 ft";
    distance = "20.2 km (6 hrs walk)";
    highlights = ["Morning visit to sacred Muktinath temple with 108 water spouts", "Walking down into the arid trans-Himalayan Kali Gandaki valley", "Historic medieval town of Kagbeni and Mustang gateway", "Afternoon arrival in the windy mountain airfield hub of Jomsom"];
  } else if (d.day === 14) {
    elevation = "822 m / 2,696 ft";
    distance = "Flight (25 mins)";
    highlights = ["Early morning scenic mountain flight Jomsom to Pokhara", "Flying through the deepest gorge between Annapurna and Dhaulagiri", "Arrival at tranquil Phewa Lake in Pokhara", "Rest, hot shower, laundry, and celebratory dinner by the lake"];
  } else if (d.day === 15) {
    elevation = "1,355 m / 4,445 ft";
    distance = "Flight (25 mins)";
    highlights = ["Scenic flight from Pokhara to Kathmandu across Himalayan chain", "Hotel check-in and leisure afternoon for souvenir shopping in Thamel", "Contingency buffer against any mountain weather delays", "Farewell dinner with cultural dance program"];
  } else if (d.day === 16) {
    elevation = "1,355 m / 4,445 ft";
    distance = "Transfer";
    highlights = ["Breakfast at hotel and final packing", "Private airport transfer coordinated with international flight", "Namaste Hiking Trek certificate of completion", "Departure from Nepal with lifelong memories"];
  }

  return {
    day: d.day,
    title: d.title,
    elevation: elevation,
    time: d.walking_hours,
    distance: distance,
    lodging: d.accommodation,
    meals: d.meals,
    highlights: highlights,
    image: `../../images/treks/annapurna-circuit/${photo.img}`,
    imageAlt: photo.alt,
    description: d.description_text
  };
});

// Read ACT template
const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

// Function to extract section from ACT
function extractSection(id) {
  const startTag = `<section id="${id}"`;
  const start = act.indexOf(startTag);
  if (start === -1) return '';
  const end = act.indexOf('</section>', start) + '</section>'.length;
  return act.substring(start, end);
}

// 1. Build SubNav (10 canonical tabs)
const subnavHtml = `
    <!-- Sticky In-Page Sub Navigation (Scroll-Spy & Smooth Navigation) -->
    <div class="trek-sub-nav">
      <div class="container">
        <div class="trek-sub-nav-list">
          <button class="trek-sub-nav-btn active" data-tab="overview">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            Overview
          </button>
          <button class="trek-sub-nav-btn" data-tab="itinerary">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Itinerary (16 Days)
          </button>
          <button class="trek-sub-nav-btn" data-tab="includes">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Includes & Excludes
          </button>
          <button class="trek-sub-nav-btn" data-tab="dates">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Dates & Prices
          </button>
          <button class="trek-sub-nav-btn" data-tab="packing">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Packing List
          </button>
          <button class="trek-sub-nav-btn" data-tab="details">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            Route Guides
          </button>
          <button class="trek-sub-nav-btn" data-tab="altitude-profile">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            Altitude Chart
          </button>
          <button class="trek-sub-nav-btn" data-tab="weather">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
            Weather
          </button>
          <button class="trek-sub-nav-btn" data-tab="map">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
            Route Map
          </button>
          <button class="trek-sub-nav-btn" data-tab="booking">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15h0M2 9.5h20"/></svg>
            Book Trek
          </button>
          <button class="trek-sub-nav-btn" data-tab="reviews">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Reviews
          </button>
          <button class="trek-sub-nav-btn" data-tab="faqs">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            FAQs
          </button>
        </div>
      </div>
    </div>
`;

// 2. Build Canonical Sidebar Booking Card
const sidebarHtml = `
        <!-- Sticky Booking Sidebar Column -->
        <div>
          <div class="sidebar-booking-card" style="position: sticky; top: 125px; align-self: start; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); overflow: hidden;">
              
              <!-- Top Right Flagship Expedition Ribbon Badge -->
              <div style="position: absolute; top: 18px; right: 0; background: #D97706; color: #FFFFFF; font-size: 0.72rem; font-weight: 800; padding: 5px 14px; border-radius: 4px 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 2px 6px rgba(217, 119, 6, 0.3);">
                FLAGSHIP EXPEDITION
              </div>

              <!-- Pricing Header -->
              <span style="font-size: 0.75rem; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">FROM</span>
              <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 16px; flex-wrap: wrap;">
                <span style="font-size: 2.5rem; font-weight: 800; color: #0F172A; line-height: 1;">$1,249</span>
                <span style="font-size: 0.92rem; color: #64748B; font-weight: 500;">/ person</span>
                <a href="#section-itinerary" style="font-size: 0.92rem; color: #475569; font-weight: 600; text-decoration: underline; margin-left: 4px;">16 days trip</a>
              </div>

              <!-- Group Discount Accordion Toggle -->
              <div class="group-discount-toggle" onclick="const table = this.nextElementSibling; const arrow = this.querySelector('.gd-arrow'); if (table.style.display === 'none') { table.style.display = 'block'; arrow.style.transform = 'rotate(180deg)'; } else { table.style.display = 'none'; arrow.style.transform = 'rotate(0deg)'; }" style="border-top: 1px dashed #CBD5E1; border-bottom: 1px dashed #CBD5E1; padding: 10px 0; margin-bottom: 18px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none;">
                <span style="font-size: 0.78rem; font-weight: 800; color: #0F172A; text-transform: uppercase; letter-spacing: 0.04em;">WE OFFER GROUP DISCOUNT</span>
                <span class="gd-arrow" style="font-size: 0.85rem; color: #0F172A; transition: transform 0.2s ease;">▼</span>
              </div>

              <!-- Group Discount Table -->
              <div class="group-discount-content" style="display: none; margin-bottom: 18px; background: #F8FAFC; border-radius: 10px; padding: 12px; font-size: 0.85rem; border: 1px solid #E2E8F0;">
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">2 - 4 Persons</span>
                  <strong style="color: #0F172A;">$1,189 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">5 - 8 Persons</span>
                  <strong style="color: #0F172A;">$1,129 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0;">
                  <span style="color: #64748B;">9+ Persons</span>
                  <strong style="color: #047857;">$1,069 / person (Best Deal)</strong>
                </div>
              </div>

              <!-- Action Buttons -->
              <button class="btn open-inquiry-btn" data-trek-title="Annapurna Circuit Trek with Tilicho Lake (16 Days)" style="width: 100%; padding: 14px; background: #008060; color: #FFFFFF; border: none; border-radius: 50px; font-size: 1.05rem; font-weight: 800; cursor: pointer; margin-bottom: 12px; box-shadow: 0 4px 14px rgba(0, 128, 96, 0.25); transition: background 0.2s;">
                Book This Trek Now
              </button>
              <button class="btn open-inquiry-btn" data-trek-title="Annapurna Circuit Trek with Tilicho Lake (16 Days)" style="width: 100%; padding: 12px; background: #FFFFFF; color: #0F172A; border: 1px solid #CBD5E1; border-radius: 50px; font-size: 0.98rem; font-weight: 700; cursor: pointer; margin-bottom: 22px;">
                Make an Enquiry
              </button>

              <!-- 5 Bullet Features with Emerald Sparkles -->
              <ul style="list-style: none; padding: 0; margin: 0 0 20px 0; display: flex; flex-direction: column; gap: 11px;">
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Tilicho Lake (4,919m) + Thorong La (5,416m)</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Two Scenic Domestic Flights Included</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Dedicated Acclimatization Day in Manang</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Expert Wilderness First Responder Guides</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>100% Guaranteed Departures & No Hidden Fees</span>
                </li>
              </ul>

              <!-- Bottom Instant Help Footer Section -->
              <div style="border-top: 1px dashed #CBD5E1; padding-top: 18px; display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <span style="font-size: 0.72rem; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">INSTANT HELP</span>
                  <strong style="font-size: 1.05rem; font-weight: 800; color: #0F172A;">Call or WhatsApp</strong>
                </div>

                <!-- Phone & WhatsApp Round Buttons -->
                <div style="display: flex; align-items: center; gap: 10px;">
                  <a href="tel:+9779800000000" aria-label="Call Us" style="width: 44px; height: 44px; border-radius: 50%; border: 1px solid #CBD5E1; background: #FFFFFF; display: flex; align-items: center; justify-content: center; color: #0F172A; text-decoration: none; transition: all 0.2s;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </a>
                  <a href="https://wa.me/9779800000000" target="_blank" rel="noopener" aria-label="WhatsApp Us" style="width: 44px; height: 44px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center; color: #FFFFFF; text-decoration: none; box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3); transition: all 0.2s;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.333 4.988l-1.417 5.176 5.297-1.389c1.458.796 3.103 1.215 4.773 1.216h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.669-1.039-5.176-2.926-7.063a9.923 9.923 0 0 0-7.063-2.927zm0 1.666c4.587 0 8.324 3.737 8.324 8.324 0 2.224-.866 4.314-2.441 5.889a8.272 8.272 0 0 1-5.888 2.438h-.003c-1.493 0-2.955-.399-4.232-1.156l-.304-.18-3.14.823.837-3.058-.198-.315a8.283 8.283 0 0 1-1.272-4.444c.001-4.587 3.739-8.324 8.326-8.324zm-3.626 4.321c-.227 0-.594.085-.905.424-.311.339-1.187 1.159-1.187 2.825 0 1.666 1.216 3.277 1.385 3.503.17.226 2.392 3.652 5.795 5.122.81.35 1.442.559 1.936.716.814.258 1.554.222 2.139.135.652-.097 2.007-.82 2.29-1.611.283-.791.283-1.469.198-1.611-.085-.141-.311-.226-.65-.396s-2.007-.99-2.318-1.103c-.311-.113-.538-.17-.764.17s-.877 1.103-1.075 1.329c-.198.226-.396.254-.735.085-.339-.17-1.433-.528-2.73-1.685-1.01-.901-1.691-2.013-1.89-2.352-.198-.339-.021-.522.148-.691.153-.153.339-.396.509-.594.17-.198.226-.339.339-.565.113-.226.057-.424-.028-.594-.085-.17-.764-1.838-1.047-2.516-.275-.661-.555-.572-.764-.582-.198-.01-.424-.012-.651-.012z"/>
                    </svg>
                  </a>
                </div>
              </div>

          </div>
        </div>
`;

// 3. Section 1: Overview
const overviewHtml = `
          <!-- Section 1: Overview -->
          <section id="section-overview" class="trek-detail-section">
            <h2 class="trek-section-title">Annapurna Circuit with Tilicho Lake Trek Overview</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px; margin-bottom: 24px;"></div>
            
            <p style="font-size: 1.05rem; color: var(--color-neutral-700); line-height: 1.75; margin-bottom: 18px;">
              The <strong>Annapurna Circuit Trek with Tilicho Lake (16 Days)</strong> represents the ultimate mountain odyssey in the Nepal Himalaya. Combining the world-renowned full circuit around the Annapurna massif with an extraordinary excursion to turquoise <strong>Tilicho Lake at 4,919 m (16,138 ft)</strong>—one of the highest accessible alpine lakes on Earth—this itinerary delivers unmatched geographic, ecological, and cultural variety.
            </p>

            <p style="font-size: 1.05rem; color: var(--color-neutral-700); line-height: 1.75; margin-bottom: 18px;">
              Beginning in the lush subtropical valleys of the lower Marsyangdi River, the trail winds upward through terraced rice paddies, cascading waterfalls, and fragrant pine and rhododendron forests. Beyond Chame and Upper Pisang, the terrain opens into the wide high-altitude plateau of Manang, where ancient Tibetan-Buddhist gompas and spinning prayer wheels frame the towering peaks of Annapurna II, III, IV, and Gangapurna.
            </p>

            <p style="font-size: 1.05rem; color: var(--color-neutral-700); line-height: 1.75; margin-bottom: 24px;">
              From Manang, the route makes a dedicated westward divergence into the wild Khangsar Valley, reaching the remote staging settlement of Tilicho Base Camp. A pre-dawn ascent reveals the frozen or shimmering turquoise waters of Tilicho Lake resting dramatically beneath the towering 7,134-meter north face of Tilicho Peak and the Annapurna Great Barrier. Trekkers then rejoin the main circuit at Yak Kharka and cross the legendary <strong>Thorong La Pass at 5,416 m (17,769 ft)</strong> before descending into the sacred Hindu and Buddhist sanctuary of Muktinath and the wind-swept Kali Gandaki valley.
            </p>

            <!-- 6 Feature Highlight Cards Grid -->
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 30px 0;">
              <!-- 1. Tilicho Lake -->
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; display: flex; gap: 16px; align-items: flex-start;">
                <div style="width: 44px; height: 44px; border-radius: 10px; background: #e0f2fe; color: #0284c7; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m8 3 4 8 5-5 5 11H2L8 3z"></path>
                    <path d="M3 19c2.5-1.5 5.5-1.5 8 0s5.5 1.5 8 0"></path>
                  </svg>
                </div>
                <div>
                  <h4 style="margin: 0 0 6px; font-size: 1.05rem; color: #0f172a; font-weight: 700;">Tilicho Lake (4,919 m)</h4>
                  <p style="margin: 0; font-size: 0.9rem; color: #64748b; line-height: 1.5;">World's premier high-altitude glacial lake nestled directly beneath the legendary Annapurna Great Barrier.</p>
                </div>
              </div>

              <!-- 2. Thorong La Pass -->
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; display: flex; gap: 16px; align-items: flex-start;">
                <div style="width: 44px; height: 44px; border-radius: 10px; background: #ecfdf5; color: #059669; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m3 20 9-16 9 16H3z"></path>
                    <path d="m8.5 12 3.5-6 3.5 6"></path>
                    <line x1="12" y1="4" x2="12" y2="1"></line>
                    <polygon points="12,1 17,2.5 12,4" fill="currentColor"></polygon>
                  </svg>
                </div>
                <div>
                  <h4 style="margin: 0 0 6px; font-size: 1.05rem; color: #0f172a; font-weight: 700;">Thorong La Pass (5,416 m)</h4>
                  <p style="margin: 0; font-size: 0.9rem; color: #64748b; line-height: 1.5;">The crowning 5,416m mountain pass linking the Marsyangdi River valley to the mystical kingdom of Mustang.</p>
                </div>
              </div>

              <!-- 3. Two Scenic Flights -->
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; display: flex; gap: 16px; align-items: flex-start;">
                <div style="width: 44px; height: 44px; border-radius: 10px; background: #fef3c7; color: #d97706; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"></path>
                  </svg>
                </div>
                <div>
                  <h4 style="margin: 0 0 6px; font-size: 1.05rem; color: #0f172a; font-weight: 700;">Two Scenic Mountain Flights</h4>
                  <p style="margin: 0; font-size: 0.9rem; color: #64748b; line-height: 1.5;">Includes breathtaking mountain flight Jomsom to Pokhara, plus domestic flight Pokhara to Kathmandu.</p>
                </div>
              </div>

              <!-- 4. Ancient Manang & Gangapurna -->
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; display: flex; gap: 16px; align-items: flex-start;">
                <div style="width: 44px; height: 44px; border-radius: 10px; background: #ede9fe; color: #7c3aed; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="2" x2="12" y2="5"></line>
                    <path d="M4 11h16l-2-6H6z"></path>
                    <path d="M5 11v10h14V11"></path>
                    <path d="M9 21v-6h6v6"></path>
                  </svg>
                </div>
                <div>
                  <h4 style="margin: 0 0 6px; font-size: 1.05rem; color: #0f172a; font-weight: 700;">Ancient Manang & Gangapurna</h4>
                  <p style="margin: 0; font-size: 0.9rem; color: #64748b; line-height: 1.5;">Tibetan-Buddhist cultural heritage, spinning prayer wheels, and acclimatization hike to Gangapurna Lake.</p>
                </div>
              </div>

              <!-- 5. Sacred Muktinath Pilgrimage -->
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; display: flex; gap: 16px; align-items: flex-start;">
                <div style="width: 44px; height: 44px; border-radius: 10px; background: #ffe4e6; color: #e11d48; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2l3 5H9l3-5z"></path>
                    <path d="M4 10h16"></path>
                    <path d="M6 10v11h12V10"></path>
                    <path d="M10 21v-5a2 2 0 0 1 4 0v5"></path>
                    <circle cx="12" cy="13" r="1.2" fill="currentColor"></circle>
                  </svg>
                </div>
                <div>
                  <h4 style="margin: 0 0 6px; font-size: 1.05rem; color: #0f172a; font-weight: 700;">Sacred Muktinath Pilgrimage</h4>
                  <p style="margin: 0; font-size: 0.9rem; color: #64748b; line-height: 1.5;">Revered Hindu and Buddhist holy sanctuary with 108 stone spouts and natural gas flame temples.</p>
                </div>
              </div>

              <!-- 6. Superior Acclimatization -->
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; display: flex; gap: 16px; align-items: flex-start;">
                <div style="width: 44px; height: 44px; border-radius: 10px; background: #e0e7ff; color: #4338ca; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 style="margin: 0 0 6px; font-size: 1.05rem; color: #0f172a; font-weight: 700;">Superior Acclimatization</h4>
                  <p style="margin: 0; font-size: 0.9rem; color: #64748b; line-height: 1.5;">Spending nights at 4,150m (Tilicho BC) and 4,060m (Siri Kharka) ensures effortless Thorong La summit crossing.</p>
                </div>
              </div>
            </div>

            <!-- Route Comparison Table -->
            <h3 style="font-size: 1.35rem; color: #0f172a; font-weight: 700; margin-top: 36px; margin-bottom: 16px;">
              Route Comparison: Classic Annapurna Circuit vs. Annapurna Circuit with Tilicho Lake
            </h3>
            <div class="table-responsive" style="overflow-x: auto; margin-bottom: 30px;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06); font-size: 0.93rem;">
                <thead>
                  <tr style="background: #f1f5f9; border-bottom: 2px solid #e2e8f0;">
                    <th style="padding: 12px 16px; font-weight: 700; color: #1e293b;">Feature</th>
                    <th style="padding: 12px 16px; font-weight: 700; color: #1e293b;">Classic Annapurna Circuit (14 Days)</th>
                    <th style="padding: 12px 16px; font-weight: 700; color: #008060;">Annapurna Circuit with Tilicho Lake (16 Days)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 600; color: #334155;">Route Corridor</td>
                    <td style="padding: 12px 16px; color: #64748b;">Direct from Manang to Yak Kharka</td>
                    <td style="padding: 12px 16px; color: #0f172a; font-weight: 600;">Manang → Tilicho Base Camp → Tilicho Lake → Siri Kharka → Yak Kharka</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 600; color: #334155;">Tilicho Lake (4,919 m)</td>
                    <td style="padding: 12px 16px; color: #ef4444; font-weight: 600;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #fee2e2; color: #ef4444; margin-right: 6px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>Bypassed (Not Included)</td>
                    <td style="padding: 12px 16px; color: #059669; font-weight: 700;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #dcfce7; color: #059669; margin-right: 6px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>Included as Major High-Altitude Excursion</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 600; color: #334155;">Thorong La Pass (5,416 m)</td>
                    <td style="padding: 12px 16px; color: #64748b;">Crossed on Day 9 or 10</td>
                    <td style="padding: 12px 16px; color: #0f172a; font-weight: 600;">Crossed on Day 12 with elite pre-acclimatization</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 600; color: #334155;">Domestic Flights</td>
                    <td style="padding: 12px 16px; color: #64748b;">Jomsom to Pokhara only</td>
                    <td style="padding: 12px 16px; color: #059669; font-weight: 700;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #dcfce7; color: #059669; margin-right: 6px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>Both Jomsom–Pokhara & Pokhara–Kathmandu Flights Included</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 600; color: #334155;">Acclimatization Quality</td>
                    <td style="padding: 12px 16px; color: #64748b;">1 Rest Day in Manang</td>
                    <td style="padding: 12px 16px; color: #059669; font-weight: 700;">Manang Rest Day + 2 High-Altitude Nights (4,150m & 4,060m)</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 16px; font-weight: 600; color: #334155;">Total Duration</td>
                    <td style="padding: 12px 16px; color: #64748b;">14 Days</td>
                    <td style="padding: 12px 16px; color: #008060; font-weight: 700;">16 Calendar Days (Comprehensive & Safe)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
`;

// 4. Section 2: Itinerary
const itineraryHtml = `
          <!-- Section 2: Itinerary -->
          <section id="section-itinerary" class="trek-detail-section">
            <h2 class="trek-section-title">Annapurna Circuit Trek with Tilicho Lake 16 Days Itinerary</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px; margin-bottom: 20px;"></div>
            
            <p style="font-size: 1.05rem; color: var(--color-neutral-700); line-height: 1.7; margin-bottom: 24px; max-width: 800px;">
              Our comprehensive 16-day Annapurna Circuit with Tilicho Lake itinerary follows an optimal, medically sound acclimatization progression. Featuring Kathmandu arrival, a scenic drive to Jagat along the Marsyangdi River, gradual pedestrian ascent through Chame and Upper Pisang, crucial acclimatization in Manang, a high-altitude detour to turquoise Tilicho Lake (4,919 m), a triumphant crossing of Thorong La Pass (5,416 m), exploration of holy Muktinath, and two included domestic flights (Jomsom to Pokhara, and Pokhara to Kathmandu).
            </p>

            <div class="itinerary-timeline">
              ${itinerary16.map((d, idx) => `
              <!-- Day ${String(d.day).padStart(2, '0')} -->
              <div class="itinerary-card ${idx === 0 ? 'active' : ''}" id="day-${d.day}" data-day="${d.day}">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day ${d.day}:</span> ${d.title}
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      ${d.elevation}
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
                          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                          <line x1="8" y1="2" x2="8" y2="18"></line>
                          <line x1="16" y1="6" x2="16" y2="22"></line>
                        </svg>
                        <span>Distance: ${d.distance}</span>
                      </div>
                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        <span>Lodging: ${d.lodging}</span>
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
                        <span>Highlight: ${d.highlights.join(' • ')}</span>
                      </div>
                    </div>
                    
                    <p class="itinerary-body-text">
                      ${d.description.replace(/\n\n/g, '<br><br>')}
                    </p>

                    <div class="itinerary-img-wrapper" style="margin-top: 18px; border-radius: 8px; overflow: hidden; max-height: 280px;">
                      <img src="${d.image}" alt="${d.imageAlt}" style="width: 100%; height: 280px; object-fit: cover; display: block;" loading="lazy">
                    </div>
                  </div>
                </div>
              </div>`).join('\n')}
            </div>
          </section>
`;

// 5. Section 3: Includes & Excludes
const includesHtml = `
          <!-- Section 3: Includes & Excludes -->
          <section id="section-includes" class="trek-detail-section">
            <h2 class="trek-section-title">What's Included & Excluded: 16-Day Tilicho Circuit Trek</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px; margin-bottom: 24px;"></div>
            
            <p style="font-size: 1.05rem; color: var(--color-neutral-700); line-height: 1.7; margin-bottom: 24px;">
              Transparency is our core principle. Below is the complete breakdown of everything covered in our all-inclusive 16-day Annapurna Circuit with Tilicho Lake package, with no hidden fees.
            </p>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-bottom: 32px;">
              <!-- What's Included -->
              <div style="background: #ffffff; border: 1px solid #dcfce7; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 18px;">
                  <div style="width: 32px; height: 32px; background: #dcfce7; color: #16a34a; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 style="margin: 0; font-size: 1.25rem; color: #15803d; font-weight: 700;">What's Included</h3>
                </div>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; font-size: 0.95rem; color: #334155;">
                  <li style="display: flex; gap: 12px; align-items: flex-start;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #dcfce7; color: #16a34a; flex-shrink: 0; margin-top: 2px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span><strong>Airport Transfers:</strong> Private arrival and departure transfers at Kathmandu Tribhuvan International Airport.</span></li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #dcfce7; color: #16a34a; flex-shrink: 0; margin-top: 2px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span><strong>Two Mountain Domestic Flights:</strong> Scheduled flight from Jomsom to Pokhara (Day 14) AND scenic flight from Pokhara to Kathmandu (Day 15).</span></li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #dcfce7; color: #16a34a; flex-shrink: 0; margin-top: 2px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span><strong>Ground Transportation:</strong> Comfortable tourist overland transfer from Kathmandu to Jagat via Besisahar.</span></li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #dcfce7; color: #16a34a; flex-shrink: 0; margin-top: 2px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span><strong>Kathmandu & Pokhara Accommodation:</strong> 3-Star hotel in Kathmandu (2 nights) and premium lakeside hotel in Pokhara (1 night) with breakfast.</span></li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #dcfce7; color: #16a34a; flex-shrink: 0; margin-top: 2px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span><strong>Mountain Teahouse Accommodation:</strong> 12 nights in standard mountain lodges (twin-share rooms) along the Annapurna & Tilicho trail.</span></li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #dcfce7; color: #16a34a; flex-shrink: 0; margin-top: 2px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span><strong>All Meals on Trek:</strong> Full board (Breakfast, Lunch, Dinner) during all trekking days, plus seasonal fresh fruit after dinner.</span></li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #dcfce7; color: #16a34a; flex-shrink: 0; margin-top: 2px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span><strong>Permits & Fees:</strong> Annapurna Conservation Area Project (ACAP) entry permit and Trekkers' Information Management System (TIMS) card.</span></li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #dcfce7; color: #16a34a; flex-shrink: 0; margin-top: 2px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span><strong>Government-Licensed Guide:</strong> Experienced, English-speaking Himalayan trekking guide certified in Wilderness First Aid.</span></li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #dcfce7; color: #16a34a; flex-shrink: 0; margin-top: 2px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span><strong>Trekking Porters:</strong> Dedicated porters (1 porter for 2 trekkers, carrying up to 15 kg per trekker) including their wages, insurance, food, and gear.</span></li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #dcfce7; color: #16a34a; flex-shrink: 0; margin-top: 2px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span><strong>Safety Gear & Oximeter:</strong> Daily blood oxygen (SpO2) and heart rate monitoring, plus comprehensive wilderness first-aid medical kit.</span></li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #dcfce7; color: #16a34a; flex-shrink: 0; margin-top: 2px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span><strong>Welcome & Farewell Dinners:</strong> Authentic cultural welcome dinner and celebratory post-trek dinner in Kathmandu.</span></li>
                </ul>
              </div>

              <!-- What's Excluded -->
              <div style="background: #ffffff; border: 1px solid #fee2e2; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 18px;">
                  <div style="width: 32px; height: 32px; background: #fee2e2; color: #dc2626; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </div>
                  <h3 style="margin: 0; font-size: 1.25rem; color: #b91c1c; font-weight: 700;">What's Excluded</h3>
                </div>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; font-size: 0.95rem; color: #334155;">
                  <li style="display: flex; gap: 12px; align-items: flex-start;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #fee2e2; color: #dc2626; flex-shrink: 0; margin-top: 2px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span><span><strong>International Flights:</strong> Airfare to and from Tribhuvan International Airport (Kathmandu).</span></li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #fee2e2; color: #dc2626; flex-shrink: 0; margin-top: 2px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span><span><strong>Nepal Entry Visa:</strong> $30 USD (15 days) or $50 USD (30 days), payable on arrival at Kathmandu airport.</span></li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #fee2e2; color: #dc2626; flex-shrink: 0; margin-top: 2px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span><span><strong>Travel Insurance:</strong> Mandatory policy covering high-altitude trekking, medical treatment, and emergency helicopter rescue up to 5,500m.</span></li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #fee2e2; color: #dc2626; flex-shrink: 0; margin-top: 2px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span><span><strong>Personal Trekking Gear:</strong> Sleeping bag (-15°C), down jacket, trekking boots, and personal clothing.</span></li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #fee2e2; color: #dc2626; flex-shrink: 0; margin-top: 2px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span><span><strong>Teahouse Extras:</strong> Hot gas/solar showers ($2–$4), electronic device battery charging ($2–$3), and lodge Wi-Fi.</span></li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #fee2e2; color: #dc2626; flex-shrink: 0; margin-top: 2px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span><span><strong>Beverages & Snacks:</strong> Bottled mineral water, boiled drinking water, specialty espresso, soft drinks, alcoholic beverages, and personal snacks.</span></li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;"><span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #fee2e2; color: #dc2626; flex-shrink: 0; margin-top: 2px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span><span><strong>Guide & Porter Tipping:</strong> Customary gratuity pool for mountain crew (recommended ~$120 to $150 USD per trekker).</span></li>
                </ul>
              </div>
            </div>
          </section>
`;

// 6. Section 4: Dates & Prices (Ported from ACT with Tilicho pricing)
let datesHtml = extractSection('section-dates');
datesHtml = datesHtml
  .replace(/Annapurna Circuit Trek: Departure Dates/g, 'Annapurna Circuit with Tilicho Lake: Departure Dates')
  .replace(/\$1,190/g, '$1,249')
  .replace(/\$1,199/g, '$1,249')
  .replace(/\$1,290/g, '$1,349')
  .replace(/\$1,299/g, '$1,349')
  .replace(/data-trek-title="[^"]*"/g, 'data-trek-title="Annapurna Circuit Trek with Tilicho Lake (16 Days)"');

// 7. Section 5: Packing List (Ported from ACT with Tilicho Lake emphasis)
let packingHtml = extractSection('section-packing');
packingHtml = packingHtml
  .replace(/Annapurna Circuit Gear & Packing Checklist/g, 'Annapurna Circuit with Tilicho Lake Gear & Packing Checklist')
  .replace(/sub-zero alpine conditions at Thorong La/g, 'sub-zero conditions at Tilicho Lake (4,919m) and Thorong La Pass (5,416m)');

// 8. Section 6: Details & Guides (Ported from ACT with Tilicho Lake and Khangsar guides included)
let detailsHtml = extractSection('section-details');
detailsHtml = detailsHtml
  .replace(/16 In-Depth Annapurna Circuit Guides/g, '16 In-Depth Tilicho Lake & Annapurna Circuit Guides')
  .replace(/Annapurna Circuit Trek/g, 'Annapurna Circuit with Tilicho Lake Trek');

// 9. Section 7: Altitude Profile
const altitudeHtml = `
          <!-- Section 7: Altitude Profile -->
          <section id="section-altitude-profile" class="trek-detail-section">
            <h2 class="trek-section-title">Altitude Profile of Annapurna Circuit with Tilicho Lake Trek</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px; margin-bottom: 20px;"></div>
            
            <p style="font-size: 1.05rem; color: var(--color-neutral-700); line-height: 1.7; margin-bottom: 24px;">
              The Annapurna Circuit with Tilicho Lake Trek features two distinct high-altitude climaxes: <strong>Tilicho Lake at 4,919 m (16,138 ft)</strong> and <strong>Thorong La Pass at 5,416 m (17,769 ft)</strong>. By spending nights at Manang (3,500m), Tilicho Base Camp (4,150m), and Siri Kharka (4,060m), your body achieves superior physiological red-blood-cell adaptation before undertaking the 5,416m pass crossing.
            </p>

            <div class="altitude-visualizer-container" style="margin-bottom: 30px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
              <div id="altitude-chart-wrapper" data-trek-key="annapurna_circuit_tilicho"></div>
            </div>

            <!-- Acclimatization Safety Table -->
            <div class="table-responsive" style="overflow-x: auto; margin-bottom: 30px;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06); font-size: 0.93rem;">
                <thead>
                  <tr style="background: #f1f5f9; border-bottom: 2px solid #e2e8f0;">
                    <th style="padding: 12px 16px; font-weight: 700; color: #1e293b;">Trek Stage</th>
                    <th style="padding: 12px 16px; font-weight: 700; color: #1e293b;">Sleeping Altitude</th>
                    <th style="padding: 12px 16px; font-weight: 700; color: #1e293b;">Daily Gain</th>
                    <th style="padding: 12px 16px; font-weight: 700; color: #1e293b;">Acclimatization Safety Assessment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 16px; font-weight: 600;">Jagat (Day 2)</td><td>1,300 m</td><td>Baseline</td><td style="color: #059669; font-weight: 600;">Safe Valley Elevation</td></tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 16px; font-weight: 600;">Dharapani (Day 3)</td><td>1,960 m</td><td>+660 m</td><td style="color: #059669; font-weight: 600;">Subtropical valley climb</td></tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 16px; font-weight: 600;">Chame (Day 4)</td><td>2,630 m</td><td>+670 m</td><td style="color: #059669; font-weight: 600;">Entering Pine Forest Zone</td></tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 16px; font-weight: 600;">Upper Pisang (Day 5)</td><td>3,300 m</td><td>+670 m</td><td style="color: #d97706; font-weight: 600;">Threshold: Above 3,000m</td></tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 16px; font-weight: 600;">Manang (Days 6–7)</td><td>3,500 m</td><td>+200 m (Rest)</td><td style="color: #059669; font-weight: 600;">Crucial Acclimatization & Rest</td></tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 16px; font-weight: 600;">Tilicho Base Camp (Day 8)</td><td>4,150 m</td><td>+650 m</td><td style="color: #d97706; font-weight: 600;">High Glacial Cirque</td></tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 16px; font-weight: 600;">Siri Kharka (Day 9)</td><td>4,060 m</td><td>Excursion to 4,919m</td><td style="color: #059669; font-weight: 600;">Climb High (4,919m), Sleep Low (4,060m)</td></tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 16px; font-weight: 600;">Yak Kharka (Day 10)</td><td>4,050 m</td><td>-10 m (Active)</td><td style="color: #059669; font-weight: 600;">Consolidated Acclimatization</td></tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 16px; font-weight: 600;">Thorong Phedi (Day 11)</td><td>4,450 m</td><td>+400 m</td><td style="color: #059669; font-weight: 600;">Controlled Pre-Pass Night</td></tr>
                  <tr><td style="padding: 10px 16px; font-weight: 600;">Muktinath (Day 12)</td><td>3,710 m</td><td>Pass (5,416m)</td><td style="color: #059669; font-weight: 700;">Immediate 1,700m Descent to Safety</td></tr>
                </tbody>
              </table>
            </div>
          </section>
`;

// 10. Section 8: Weather
const weatherHtml = `
          <!-- Section 8: Weather -->
          <section id="section-weather" class="trek-detail-section">
            <h2 class="trek-section-title">Weather on the Annapurna Circuit with Tilicho Lake Trek</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px; margin-bottom: 20px;"></div>
            
            <p style="font-size: 1.05rem; color: var(--color-neutral-700); line-height: 1.7; margin-bottom: 24px;">
              Because this 16-day trek crosses diverse micro-climates—from warm subtropical valleys to arctic glacial conditions above 5,000m—proper seasonal timing is essential. Autumn (September–November) and Spring (March–May) provide optimal trail stability, clear sky visibility, and accessible pass crossings.
            </p>

            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 30px;">
              <div id="weather-chart-wrapper" data-trek-key="tilicho_circuit"></div>
            </div>
          </section>
`;

// 11. Section 9: Map
let mapHtml = extractSection('section-map');
mapHtml = mapHtml
  .replace(/Annapurna Circuit Trek Map/g, 'Annapurna Circuit with Tilicho Lake Trek Map')
  .replace(/Illustrated Annapurna Circuit Trek Route Map/g, 'Illustrated Annapurna Circuit with Tilicho Lake Route Map (16 Days)');

// 12. Section 10: Booking
let bookingHtml = extractSection('section-booking');
bookingHtml = bookingHtml
  .replace(/Annapurna Circuit/g, 'Annapurna Circuit with Tilicho Lake')
  .replace(/data-trek-title="[^"]*"/g, 'data-trek-title="Annapurna Circuit Trek with Tilicho Lake (16 Days)"');

// 13. Section 11: Reviews
let reviewsHtml = extractSection('section-reviews');

// 14. Section 12: FAQs
let faqsHtml = extractSection('section-faqs');
faqsHtml = faqsHtml
  .replace(/Frequently Asked Questions for Annapurna Circuit Trek/g, 'Frequently Asked Questions: Annapurna Circuit with Tilicho Lake (16 Days)');

// Read Canonical Top and Bottom from current Tilicho page
const currentTilicho = fs.readFileSync('trek/annapurna-circuit-trek-with-tilicho-lake/index.html', 'utf8');

// Top head and nav up to <main><article ...>
const headerEndStr = '</header>\n\n  <main>\n    <article itemscope itemtype="https://schema.org/TouristTrip">';
const headerEndIdx = currentTilicho.indexOf('</header>');
const headAndNav = currentTilicho.substring(0, headerEndIdx) + '</header>\n\n  <main>\n    <article itemscope itemtype="https://schema.org/TouristTrip">\n';

// 15. Everest Base Camp Style Hero Header
const heroSectionHtml = `
    <!-- Page Title Section -->
    <section style="padding: 30px 0 10px 0; background: var(--color-neutral-50);">
      <div class="container">
        <!-- Top Row: Region Pill & Review Badges -->
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 12px;">
          <span class="pill pill-copper" style="margin-bottom: 0;">Annapurna Region • Tilicho Lake & Circuit</span>
          
          <!-- TripAdvisor Review Badge (Authentic EBC Green Dots & Emblem) -->
          <div style="display: inline-flex; align-items: center; gap: 8px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 100px; padding: 4px 12px; font-size: 0.85rem; color: #475569; box-shadow: 0 1px 2px rgba(0,0,0,0.05); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: #00af87; border-radius: 50%;">
              <svg viewBox="0 0 24 24" fill="#000000" width="10" height="10">
                <path d="M12 3.2c-4.8 0-8.8 4-8.8 8.8 0 4.8 4 8.8 8.8 8.8 4.8 0 8.8-4 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm-3.3 12.1c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3.1 1.8-1.4 3.3-3.3 3.3zm6.6 0c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zm-6.6-4.9c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6zm6.6 0c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6zM12 11.5c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5z"/>
              </svg>
            </span>
            <span style="font-weight: 700; color: #0f172a;">5.0</span>
            <span style="display: inline-flex; gap: 2px;">
              <span style="width: 8px; height: 8px; background: #00af87; border-radius: 50%;"></span>
              <span style="width: 8px; height: 8px; background: #00af87; border-radius: 50%;"></span>
              <span style="width: 8px; height: 8px; background: #00af87; border-radius: 50%;"></span>
              <span style="width: 8px; height: 8px; background: #00af87; border-radius: 50%;"></span>
              <span style="width: 8px; height: 8px; background: #00af87; border-radius: 50%;"></span>
            </span>
            <span>reviews on <strong style="font-weight: 600; color: #0f172a;">TripAdvisor</strong></span>
          </div>

          <!-- Google Review Badge (Authentic 4-color G logo + 5 Stars) -->
          <div style="display: inline-flex; align-items: center; gap: 8px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 100px; padding: 4px 12px; font-size: 0.85rem; color: #475569; box-shadow: 0 1px 2px rgba(0,0,0,0.05); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span style="font-weight: 700; color: #0f172a;">5.0</span>
            <span style="color: #FBBF24; display: inline-flex; gap: 1px; font-size: 0.9rem;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </span>
            <span><strong style="font-weight: 600; color: #0f172a;">240+</strong> reviews on Google</span>
          </div>

          <!-- Guaranteed Departures Badge -->
          <span style="font-size: 0.85rem; background: #e6f7f0; color: #008060; padding: 4px 12px; border-radius: 100px; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: -1px;"><polyline points="20 6 9 17 4 12"/></svg>
            100% Guaranteed Departures
          </span>
        </div>

        <h1 class="trek-hero-title" style="font-size: 2.8rem; margin-top: 6px; margin-bottom: 8px; color: var(--color-primary-navy);">Annapurna Circuit Trek with Tilicho Lake (16 Days)</h1>
        
        <p style="font-size: 1.15rem; color: var(--color-neutral-600); line-height: 1.7; margin-top: 12px; margin-bottom: 0;">
          Embark on a legendary 16-day Himalayan odyssey combining the complete Annapurna Circuit with an extraordinary excursion to turquoise Tilicho Lake (<span data-altitude-m="4919">4,919m</span>)—one of the highest accessible alpine lakes on Earth. Trek from lush subtropical valleys through ancient Gurung and Tibetan-heritage settlements, ascend into the dramatic Khangsar sanctuary beneath the Annapurna Great Barrier, and conquer the crowning Thorong La Pass at <span data-altitude-m="5416">5,416m</span> before descending into sacred Muktinath and enjoying two scenic domestic flights.
          <span id="ebc-more-text" style="display: none;">
            Unlike standard itineraries with grueling 10-hour overland bus returns on bumpy roads, this 16-day program includes panoramic domestic flights from Jomsom to Pokhara through the Kali Gandaki gorge, plus Pokhara to Kathmandu. This ensures maximum trail exploration, superior altitude acclimatization with two nights above 4,000m, and smooth air returns. Guided by our government-licensed wilderness first responder team, you will safely navigate the high-altitude terrain beneath soaring 8,000-meter giants like Annapurna I and Dhaulagiri.
          </span>
          <button id="ebc-toggle-btn" style="background: none; border: none; color: #10b981; font-weight: 700; font-size: 1.05rem; cursor: pointer; padding: 0; margin-left: 6px; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; vertical-align: middle; transition: opacity 0.2s ease;">
            Learn more <span style="font-size: 1.1rem; margin-left: 2px;">→</span>
          </button>
        </p>

        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const toggleBtn = document.getElementById('ebc-toggle-btn');
            const moreText = document.getElementById('ebc-more-text');
            
            if (toggleBtn && moreText) {
              toggleBtn.addEventListener('click', () => {
                const isHidden = moreText.style.display === 'none';
                moreText.style.display = isHidden ? 'inline' : 'none';
                toggleBtn.innerHTML = isHidden 
                  ? 'Learn less <span style="font-size: 1.1rem; margin-left: 2px;">↑</span>' 
                  : 'Learn more <span style="font-size: 1.1rem; margin-left: 2px;">→</span>';
              });
            }
          });
        </script>
      </div>
    </section>

    <!-- Multi-Image Collage Gallery -->
    <div class="container" style="margin-bottom: 24px;">
      <div class="trek-gallery-collage">
        <div class="trek-gallery-main">
          <img src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-tilicho-lake-14.jpg" alt="Trekkers standing before turquoise Tilicho Lake at 4,919 meters" loading="eager">
          <div class="trek-gallery-badge">
            <div class="trek-gallery-badge-icon" style="background: #00af87; display: flex; align-items: center; justify-content: center; border-radius: 50%; width: 28px; height: 28px;">
              <svg viewBox="0 0 24 24" fill="#ffffff" width="16" height="16">
                <path d="M12 3.2c-4.8 0-8.8 4-8.8 8.8 0 4.8 4 8.8 8.8 8.8 4.8 0 8.8-4 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm-3.3 12.1c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3.1 1.8-1.4 3.3-3.3 3.3zm6.6 0c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zm-6.6-4.9c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6zm6.6 0c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6zM12 11.5c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5z"/>
              </svg>
            </div>
            <div class="trek-gallery-badge-text">
              <span class="trek-gallery-badge-title">Annapurna Tilicho Lake Trek</span>
              <span class="trek-gallery-badge-subtitle">Ranked #1 Adventure in Nepal (2026)</span>
            </div>
          </div>
        </div>
        <div class="trek-gallery-sub">
          <img src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-cliffside-trail-01.jpg" alt="Trekkers navigating the dramatic cliffside trail toward Tilicho Base Camp" loading="lazy">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-top-right">
          <img src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-manang-gate-15.jpg" alt="Traditional stone gate welcoming trekkers to Manang village" loading="lazy">
          <button class="trek-gallery-see-all-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            See All 19 Photos
          </button>
        </div>
        <div class="trek-gallery-sub">
          <img src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-tilicho-lake-18.jpg" alt="Turquoise alpine waters of Tilicho Lake framed by Himalayan snow peaks" loading="lazy">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-bottom-right">
          <img src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-tilicho-valley-19.jpg" alt="Glacial alpine valley trail leading toward Tilicho Lake" loading="lazy">
        </div>
      </div>
    </div>

    <!-- Key Trip Facts Grid (Elevated Card Matching EBC Gold Standard) -->
    <div class="container" style="margin-bottom: 30px;">
      <style>
        .trip-fact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          transition: transform 0.2s ease-in-out;
        }
        .trip-fact-item:hover {
          transform: translateY(-2px);
        }
      </style>
      <div style="background: #ffffff; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); padding: 24px 30px;">
        <h2 style="font-size: 1.3rem; margin-bottom: 24px; color: var(--color-primary-navy); display: flex; align-items: center; gap: 8px; font-weight: 700;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="icon-navy" style="color: var(--color-primary-navy);"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
          Key Trip Facts
        </h2>
        
        <div class="trek-facts-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 24px 20px;">
          <!-- 1. Duration -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Duration</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">16 Days (Full Program)</span>
            </div>
          </div>

          <!-- 2. Highest Point -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="m8 3 4 8 5-5 5 11H2L8 3z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Highest Point</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Thorong La (5,416 m)</span>
            </div>
          </div>

          <!-- 3. Tilicho Lake -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Tilicho Lake</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">4,919 m (Glacial Lake)</span>
            </div>
          </div>

          <!-- 4. Difficulty -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Difficulty</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Challenging / Strenuous</span>
            </div>
          </div>

          <!-- 5. Activity -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Activity</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">High-Altitude Trekking</span>
            </div>
          </div>

          <!-- 6. Accommodation -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Accommodation</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Teahouses & 3-Star Hotels</span>
            </div>
          </div>

          <!-- 7. Transport -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Transport</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Private 4WD & 2 Flights</span>
            </div>
          </div>

          <!-- 8. Meals -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Meals</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Full Board on Trek (B.L.D.)</span>
            </div>
          </div>

          <!-- 9. Best Season -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Best Season</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Sep–Nov & Mar–May</span>
            </div>
          </div>

          <!-- 10. Trek Starts -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><polygon points="12 7 17 12 12 17 12 7"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek Starts</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Jagat via Besisahar</span>
            </div>
          </div>

          <!-- 11. Trek Ends -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek Ends</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Jomsom (Fly to Pokhara)</span>
            </div>
          </div>

          <!-- 12. Trek Region -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek Region</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Annapurna (ACAP)</span>
            </div>
          </div>

          <!-- 13. Group Size -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Group Size</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">2–14 Pax (Private Available)</span>
            </div>
          </div>

          <!-- 14. Permits -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Permits</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">ACAP & TIMS Included</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Trust Badges Section (Matching EBC Flagship Standard) -->
    <div class="container" style="margin-bottom: 30px;">
      <div class="trek-trust-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
        
        <!-- Badge 1: Govt-registered local Nepal agency -->
        <div style="display: flex; align-items: center; gap: 12px; background: #ffffff; border: 1px solid var(--color-neutral-100); padding: 14px 20px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
          <div style="width: 38px; height: 38px; background: #e6f7f0; color: #008060; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--color-primary-navy); line-height: 1.3;">Govt-registered local Nepal agency</span>
        </div>

        <!-- Badge 2: 10,000+ happy travellers -->
        <div style="display: flex; align-items: center; gap: 12px; background: #ffffff; border: 1px solid var(--color-neutral-100); padding: 14px 20px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
          <div style="width: 38px; height: 38px; background: #e6f7f0; color: #008060; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--color-primary-navy); line-height: 1.3;">10,000+ happy travellers</span>
        </div>

        <!-- Badge 3: Secure payment · No hidden fees -->
        <div style="display: flex; align-items: center; gap: 12px; background: #ffffff; border: 1px solid var(--color-neutral-100); padding: 14px 20px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
          <div style="width: 38px; height: 38px; background: #e6f7f0; color: #008060; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
          </div>
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--color-primary-navy); line-height: 1.3;">Secure payment · No hidden fees</span>
        </div>

        <!-- Badge 4: Instant confirmation -->
        <div style="display: flex; align-items: center; gap: 12px; background: #ffffff; border: 1px solid var(--color-neutral-100); padding: 14px 20px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
          <div style="width: 38px; height: 38px; background: #e6f7f0; color: #008060; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--color-primary-navy); line-height: 1.3;">Instant confirmation</span>
        </div>

      </div>
    </div>

    <!-- Sticky In-Page Sub Navigation (Scroll-Spy & Smooth Navigation) -->
    <div class="trek-sub-nav">
      <div class="container">
        <div class="trek-sub-nav-list">
          <button class="trek-sub-nav-btn active" data-tab="overview">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            Overview
          </button>
          <button class="trek-sub-nav-btn" data-tab="itinerary">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Itinerary (16 Days)
          </button>
          <button class="trek-sub-nav-btn" data-tab="includes">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Includes & Excludes
          </button>
          <button class="trek-sub-nav-btn" data-tab="dates">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Dates & Prices
          </button>
          <button class="trek-sub-nav-btn" data-tab="packing">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Packing List
          </button>
          <button class="trek-sub-nav-btn" data-tab="details">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            Route Guides
          </button>
          <button class="trek-sub-nav-btn" data-tab="altitude-profile">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
            Altitude Chart
          </button>
          <button class="trek-sub-nav-btn" data-tab="weather">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
            Weather
          </button>
          <button class="trek-sub-nav-btn" data-tab="map">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
            Map
          </button>
          <button class="trek-sub-nav-btn" data-tab="faqs">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            FAQs
          </button>
        </div>
      </div>
    </div>
`;

// Construct Flagship Main Content Column
const mainColumnHtml = `
    <!-- Main Content Layout with Sticky Booking Sidebar -->
    <section class="section-padding" style="padding-top: 10px;" data-trek-details-wrapper data-trek-key="annapurna_circuit_tilicho">
      <div class="container trek-detail-layout" style="display: grid; grid-template-columns: 2.2fr 1fr; gap: 40px;">
        
        <!-- Main Details Column (12 Canonical Sections) -->
        <div style="min-width: 0;">
          ${overviewHtml}
          ${itineraryHtml}
          ${includesHtml}
          ${datesHtml}
          ${packingHtml}
          ${detailsHtml}
          ${altitudeHtml}
          ${weatherHtml}
          ${mapHtml}
          ${bookingHtml}
          ${reviewsHtml}
          ${faqsHtml}
        </div>

        ${sidebarHtml}

      </div>
    </section>
    </article>
  </main>
`;

// Footer & bottom scripts from ACT
const footerStart = act.indexOf('<footer class="site-footer">');
const footerAndBottom = act.substring(footerStart);

// Assemble complete HTML
let fullHtml = headAndNav + heroSectionHtml + mainColumnHtml + footerAndBottom;

// Write to both primary and legacy mirror
fs.writeFileSync('trek/annapurna-circuit-trek-with-tilicho-lake/index.html', fullHtml, 'utf8');
fs.writeFileSync('trek/tilicho-lake-trek/index.html', fullHtml, 'utf8');

console.log('Successfully generated Flagship 16-Day Page with Executive Merged Hero & Facts Card!');
console.log('Primary file size:', fs.statSync('trek/annapurna-circuit-trek-with-tilicho-lake/index.html').size);
