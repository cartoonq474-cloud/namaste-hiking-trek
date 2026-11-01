const fs = require('fs');

let html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

// 1. Title and SEO meta
html = html.replace(
  /<title>.*?<\/title>/,
  '<title>Mera Peak Climbing Trek (18 Days, 6,476m) — Namaste Hiking Trek</title>'
);

html = html.replace(
  /<meta name="description" content=".*?">/,
  '<meta name="description" content="Climb Nepal\'s highest trekking peak, Mera Peak (6,476m / 21,247ft), through the wild Hinku Valley. Enjoy panoramic views of 5 eight-thousanders (Everest, Lhotse, Makalu, Cho Oyu, Kanchenjunga) with certified climbing Sherpas.">'
);

html = html.replace(
  /<link rel="canonical" href=".*?" \/>/,
  '<link rel="canonical" href="https://namastehikingtrek.com/trek/mera-peak-climbing-trek/" />'
);

html = html.replace(
  /<meta property="og:title" content=".*?">/,
  '<meta property="og:title" content="Mera Peak Climbing Trek (18 Days, 6,476m) — Namaste Hiking Trek">'
);

html = html.replace(
  /<meta property="og:description" content=".*?">/,
  '<meta property="og:description" content="Climb Nepal\'s highest trekking peak, Mera Peak (6,476m / 21,247ft), through the wild Hinku Valley. Enjoy panoramic views of 5 eight-thousanders with certified climbing Sherpas.">'
);

html = html.replace(
  /<meta property="og:url" content=".*?">/,
  '<meta property="og:url" content="https://namastehikingtrek.com/trek/mera-peak-climbing-trek/">'
);

html = html.replace(
  /<meta property="og:image" content=".*?">/,
  '<meta property="og:image" content="https://namastehikingtrek.com/images/treks/mera-peak/mera-peak-himalayan-summit-panorama-12.jpg">'
);

html = html.replace(
  /<meta name="twitter:title" content=".*?">/,
  '<meta name="twitter:title" content="Mera Peak Climbing Trek (18 Days, 6,476m) — Namaste Hiking Trek">'
);

html = html.replace(
  /<meta name="twitter:description" content=".*?">/,
  '<meta name="twitter:description" content="Climb Nepal\'s highest trekking peak, Mera Peak (6,476m / 21,247ft), through the wild Hinku Valley with certified climbing Sherpas.">'
);

html = html.replace(
  /<meta name="twitter:image" content=".*?">/,
  '<meta name="twitter:image" content="https://namastehikingtrek.com/images/treks/mera-peak/mera-peak-himalayan-summit-panorama-12.jpg">'
);

// 2. Schema.org Graph
const subTrips = [
  { name: "Day 1: Arrival in Kathmandu (1,355m) & Hotel Transfer" },
  { name: "Day 2: Kathmandu Cultural Tour, Gear Check & Climbing Briefing (1,355m)" },
  { name: "Day 3: Scenic Flight to Lukla (2,850m) & Trek to Paiya / Chutanga (2,730m)" },
  { name: "Day 4: Trek from Paiya to Pangkongma (2,846m)" },
  { name: "Day 5: Cross Pangkongma La Pass (3,174m) & Trek to Nashing Dingma (2,360m)" },
  { name: "Day 6: Trek from Nashing Dingma to Chalem Kharka (3,600m)" },
  { name: "Day 7: Trek from Chalem Kharka to Chunbu Kharka (4,200m)" },
  { name: "Day 8: Trek to Kothe (3,600m) into the Hinku Valley" },
  { name: "Day 9: Trek from Kothe to Thangnak (4,356m)" },
  { name: "Day 10: Acclimatization & Exploration Day in Thangnak (Charpate Viewpoint 5,000m)" },
  { name: "Day 11: Trek from Thangnak to Khare / Mera Base Camp (5,045m)" },
  { name: "Day 12: Pre-Climbing Training & Rest Day in Khare (5,045m)" },
  { name: "Day 13: Trek from Khare to Mera Peak High Camp (5,780m)" },
  { name: "Day 14: Summit Push: Mera Peak Central (6,476m) & Descent to Khare (5,045m)" },
  { name: "Day 15: Contingency / Weather Reserve Day in Khare" },
  { name: "Day 16: Trek from Khare down to Kothe (3,600m)" },
  { name: "Day 17: Trek from Kothe to Thuli Kharka (4,300m) & Zatrwa La Pass (4,610m) to Lukla (2,850m)" },
  { name: "Day 18: Fly from Lukla to Kathmandu (1,355m) & Hotel Transfer" }
].map(s => ({ "@type": "TouristTrip", "name": s.name }));

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristTrip",
      "@id": "https://namastehikingtrek.com/trek/mera-peak-climbing-trek/#trip",
      "name": "Mera Peak Climbing Trek (18 Days, 6,476m)",
      "description": "Climb Nepal's highest trekking peak, Mera Peak (6,476m / 21,247ft), through the wild Hinku Valley. Enjoy panoramic views of 5 eight-thousanders (Everest, Lhotse, Makalu, Cho Oyu, Kanchenjunga) with certified climbing Sherpas.",
      "touristType": ["Mountaineers", "High Altitude Trekkers", "Peak Climbers"],
      "subTrip": subTrips,
      "offers": {
        "@type": "Offer",
        "price": "1850",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://namastehikingtrek.com/trek/mera-peak-climbing-trek/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://namastehikingtrek.com/trek/mera-peak-climbing-trek/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://namastehikingtrek.com/" },
        { "@type": "ListItem", "position": 2, "name": "Peak Climbing Nepal", "item": "https://namastehikingtrek.com/peak-climbing-nepal/" },
        { "@type": "ListItem", "position": 3, "name": "Mera Peak Climbing Trek", "item": "https://namastehikingtrek.com/trek/mera-peak-climbing-trek/" }
      ]
    }
  ]
};

const newSchemaTag = `<script type="application/ld+json">\n${JSON.stringify(schemaGraph, null, 2)}\n  </script>`;
html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, newSchemaTag);

// 3. Breadcrumbs in body
html = html.replace(
  /<a href="\.\.\/\.\.\/nepal-trekking-packages\/">.*?<\/a>\s*<span>›<\/span>\s*<span>Everest Base Camp Trek<\/span>/,
  '<a href="../../peak-climbing-nepal/">Peak Climbing Nepal</a> <span>›</span> <span>Mera Peak Climbing Trek</span>'
);

// 4. Hero Heading and Subtitle
html = html.replace(
  /<h1[^>]*>.*?<\/h1>/,
  '<h1 style="font-size: 2.8rem; margin-top: 6px; margin-bottom: 8px; color: var(--color-primary-navy);">Mera Peak Climbing Trek</h1>'
);

const heroLeadRegex = /<p style="font-size: 1\.15rem; color: var\(--color-neutral-600\); line-height: 1\.7; margin-top: 12px; margin-bottom: 0;">[\s\S]*?<\/button>\s*<\/p>/;
const newHeroLead = `<p style="font-size: 1.15rem; color: var(--color-neutral-600); line-height: 1.7; margin-top: 12px; margin-bottom: 0;">
          Ascend Mera Peak Central (<span data-altitude-m="6476">6,476 m / 21,247 ft</span>), the highest officially designated trekking peak in Nepal. Journey through the untamed rhododendron forests and granite gorges of the Hinku Valley, master glacier rope travel at Khare Base Camp, and push for a dawn summit rewarding you with an unmatched 360-degree panorama of five 8,000-meter giants: Everest, Lhotse, Makalu, Cho Oyu, and Kanchenjunga.
          <span id="ebc-more-text" style="display: none;">
            Guided by certified UIAGM/NMA Climbing Sherpas with a 1:2 guide-to-climber summit ratio, you benefit from thorough pre-climbing glacier instruction, premium 4-season high-camp tents, and daily pulse oximetry monitoring for maximum safety.
          </span>
          <button id="ebc-toggle-btn" style="background: none; border: none; color: #10b981; font-weight: 700; font-size: 1.05rem; cursor: pointer; padding: 0; margin-left: 6px; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; vertical-align: middle; transition: opacity 0.2s ease;">
            Learn more <span style="font-size: 1.1rem; margin-left: 2px;">→</span>
          </button>
        </p>`;
html = html.replace(heroLeadRegex, newHeroLead);

// 5. Hero Collage Gallery
const galleryRegex = /<div class="trek-gallery-collage">[\s\S]*?<!-- Key Trip Facts Grid -->/;
const newGallery = `<div class="trek-gallery-collage">
        <!-- Main Large Photo (Left) with Travelers' Choice badge -->
        <div class="trek-gallery-main">
          <img src="../../images/treks/mera-peak/mera-peak-climbers-summit-banner-05.jpg" alt="Mera Peak Summit Team with Himalayan Peaks in Background">
          <!-- TripAdvisor Travelers' Choice Badge -->
          <div class="trek-gallery-badge">
            <div class="trek-gallery-badge-icon" style="background: #00af87; display: flex; align-items: center; justify-content: center;">
              <svg class="icon-svg icon-sm icon-svg-fill" style="stroke: none; fill: white;" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </div>
            <div class="trek-gallery-badge-text">
              <span>Travelers' Choice</span>
              <span>Best of the Best 2026</span>
            </div>
          </div>
        </div>
        
        <!-- Grid Items (Right 2x2 Columns) -->
        <div class="trek-gallery-sub">
          <img src="../../images/treks/mera-peak/mera-peak-climbers-sunrise-snowfield-10.jpg" alt="First-Time Mountaineers Climbing on Mera Peak Snowfield at Sunrise">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-top-right">
          <img src="../../images/treks/mera-peak/mera-peak-himalayan-summit-panorama-12.jpg" alt="8000m Himalayan Mountain Panorama from Mera Peak Summit">
          <!-- See all photos button -->
          <button class="trek-gallery-see-all-btn">
            <span><svg class="icon-svg icon-xs icon-margin-right" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>See all photos</span>
          </button>
        </div>
        <div class="trek-gallery-sub">
          <img src="../../images/treks/mera-peak/mera-peak-hiker-glacial-lake-03.jpg" alt="Glacial Lake in Hinku Valley along Mera Peak Trail">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-bottom-right">
          <img src="../../images/treks/mera-peak/mera-peak-summit-route-snow-07.jpg" alt="Climbers Approaching Mera Peak Summit Ridge">
        </div>
      </div>
    </div>\n\n    <!-- Key Trip Facts Grid -->`;
html = html.replace(galleryRegex, newGallery);

// 6. Key Trip Facts Grid
const factsRegex = /<!-- Key Trip Facts Grid -->[\s\S]*?<!-- Trust Badges Section -->/;
const newFacts = `<!-- Key Trip Facts Grid -->
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
        <h3 style="font-size: 1.3rem; margin-bottom: 24px; color: var(--color-primary-navy); display: flex; align-items: center; gap: 8px; font-weight: 700;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="icon-navy" style="color: var(--color-primary-navy);"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
          Key Trip Facts
        </h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 24px 20px;">
          <!-- 1. Duration -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Duration</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">18 calendar days</span>
            </div>
          </div>

          <!-- 2. Peak Altitude -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22L12 2l8 20H4z"/><path d="M9 22l3-7 3 7H9z" fill="#008060"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Summit Altitude</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;"><span data-altitude-m="6476">6,476 m / 21,247 ft</span></span>
            </div>
          </div>

          <!-- 3. Climbing Grade -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Climbing Grade</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Alpine PD (Non-Technical Glaciated)</span>
            </div>
          </div>

          <!-- 4. Region -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Region</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Hinku Valley, Makalu-Barun</span>
            </div>
          </div>

          <!-- 5. Highest Sleeping Elevation -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Highest Sleeping Elevation</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">High Camp (<span data-altitude-m="5780">5,780 m</span>)</span>
            </div>
          </div>

          <!-- 6. Base Camp -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Base Camp</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Khare (<span data-altitude-m="5045">5,045 m</span>)</span>
            </div>
          </div>

          <!-- 7. Start & Finish -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Start & Finish Point</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Lukla (Round-Trip)</span>
            </div>
          </div>

          <!-- 8. Guiding Ratio -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Summit Guide Ratio</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">1:1 or 1:2 Certified Climbing Sherpa</span>
            </div>
          </div>

          <!-- 9. Accommodation -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Accommodation</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Hotels, Teahouses & High-Camp Tents</span>
            </div>
          </div>

          <!-- 10. Best Seasons -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Best Seasons</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Spring (Mar–May) & Autumn (Sep–Nov)</span>
            </div>
          </div>

          <!-- 11. 8000m Panoramas -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12s1.5 2 4 2 4-2 4-2"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">8,000m Mountain Views</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">5 Giants: Everest, Lhotse, Makalu, Cho Oyu, Kanchenjunga</span>
            </div>
          </div>

          <!-- 12. Permits Required -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Climbing Permits</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">NMA Permit, National Parks & Khumbu Card</span>
            </div>
          </div>

          <!-- 13. Training & Skills -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Alpine Skills Clinic</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Full Glacier Training at Khare Base Camp</span>
            </div>
          </div>

          <!-- 14. Weather Reserve -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Summit Reserve</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Dedicated Day 15 Weather Reserve Day</span>
            </div>
          </div>
        </div>
      </div>
    </div>\n\n    <!-- Trust Badges Section -->`;
html = html.replace(factsRegex, newFacts);

// 7. Update data-trek-key to "mera-peak"
html = html.replace('data-trek-details-wrapper data-trek-key="ebc"', 'data-trek-details-wrapper data-trek-key="mera-peak"');

fs.writeFileSync('trek/mera-peak-climbing-trek/index.html', html, 'utf8');
console.log('Successfully applied Step 1: Head, Hero & Trip Facts for Mera Peak!');

