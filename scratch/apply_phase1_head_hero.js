const fs = require('fs');

let html = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8');

// Fix stray tags near line 5250 first
html = html.replace(
  /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/main>\s*<!-- Inquiry Modal -->/,
  `</div>\n            </div>\n          </div>\n        </div>\n    </section>\n\n  <!-- Inquiry Modal -->`
);

// Title & Meta tags
html = html.replace(
  /<title>Kanchenjunga Base Camp Trek \(22 Days\) — Namaste Hiking Trek<\/title>\s*<meta name="description" content="[^"]*">/,
  `<title>Kanchenjunga Circuit Trek (26 Days) — Namaste Hiking Trek</title>\n  <meta name="description" content="An epic 26-day guided expedition exploring both North (Pangpema 5,143m) and South (Ramche 4,580m) base camps of Mount Kanchenjunga across the wild Sele Le pass in eastern Nepal.">`
);

// OG & Twitter metadata
html = html.replace(
  /<meta property="og:title" content="[^"]*">/,
  '<meta property="og:title" content="Kanchenjunga Circuit Trek (26 Days) — Namaste Hiking Trek">'
);
html = html.replace(
  /<meta property="og:description" content="[^"]*">/,
  '<meta property="og:description" content="An epic 26-day guided expedition exploring both North (Pangpema 5,143m) and South (Ramche 4,580m) base camps of Mount Kanchenjunga across the wild Sele Le pass in eastern Nepal.">'
);
html = html.replace(
  /<meta name="twitter:title" content="[^"]*">/,
  '<meta name="twitter:title" content="Kanchenjunga Circuit Trek (26 Days) — Namaste Hiking Trek">'
);
html = html.replace(
  /<meta name="twitter:description" content="[^"]*">/,
  '<meta name="twitter:description" content="An epic 26-day guided expedition exploring both North (Pangpema 5,143m) and South (Ramche 4,580m) base camps of Mount Kanchenjunga across the wild Sele Le pass in eastern Nepal.">'
);

// JSON-LD Schema
const oldSchemaStart = '<script type="application/ld+json">';
const oldSchemaEnd = '</script>';
const schemaStartIdx = html.indexOf(oldSchemaStart);
const schemaEndIdx = html.indexOf(oldSchemaEnd, schemaStartIdx);

if (schemaStartIdx === -1 || schemaEndIdx === -1) {
  console.error('ERROR: JSON-LD block not found!');
  process.exit(1);
}

const newJsonLd = `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": "https://namastehikingtrek.com/trek/kanchenjunga-base-camp-trek/#trip",
        "name": "Kanchenjunga Circuit Trek",
        "description": "An epic 26-day guided expedition exploring both North (Pangpema 5,143m) and South (Ramche 4,580m) base camps of Mount Kanchenjunga across the wild Sele Le pass in eastern Nepal.",
        "touristType": ["Hikers", "Trekking Enthusiasts", "Expedition Climbers"],
        "subTrip": [
          { "@type": "TouristTrip", "name": "Day 1: Arrival in Kathmandu (1,355 m)" },
          { "@type": "TouristTrip", "name": "Day 2: Kathmandu Valley Sightseeing & Expedition Preparation (1,355 m)" },
          { "@type": "TouristTrip", "name": "Day 3: Travel to Suketar (2,419 m) & Trek to Mitlung (921 m)" },
          { "@type": "TouristTrip", "name": "Day 4: Trek to Chirwa (1,270 m)" },
          { "@type": "TouristTrip", "name": "Day 5: Trek to Sukathum (1,600 m)" },
          { "@type": "TouristTrip", "name": "Day 6: Trek to Amjilosa (2,510 m)" },
          { "@type": "TouristTrip", "name": "Day 7: Trek to Gyabla (2,730 m)" },
          { "@type": "TouristTrip", "name": "Day 8: Trek to Ghunsa (3,475 m)" },
          { "@type": "TouristTrip", "name": "Day 9: Acclimatization Day in Ghunsa (3,475 m)" },
          { "@type": "TouristTrip", "name": "Day 10: Trek to Khambachen (4,050 m)" },
          { "@type": "TouristTrip", "name": "Day 11: Acclimatization Day in Khambachen (4,050 m)" },
          { "@type": "TouristTrip", "name": "Day 12: Trek to Lhonak (4,770 m)" },
          { "@type": "TouristTrip", "name": "Day 13: Excursion to Pangpema, Kanchenjunga North Base Camp (5,143 m)" },
          { "@type": "TouristTrip", "name": "Day 14: Trek back to Khambachen (4,050 m)" },
          { "@type": "TouristTrip", "name": "Day 15: Trek to Ghunsa (3,475 m)" },
          { "@type": "TouristTrip", "name": "Day 16: High Mountain Ascent to Sele Le (4,290 m)" },
          { "@type": "TouristTrip", "name": "Day 17: Cross Sele Le Pass & Trek to Cheram (3,870 m)" },
          { "@type": "TouristTrip", "name": "Day 18: Excursion to Ramche & Southern Viewpoints (4,580 m)" },
          { "@type": "TouristTrip", "name": "Day 19: Trek from Cheram area toward Tortong (2,995 m)" },
          { "@type": "TouristTrip", "name": "Day 20: Trek to Yamphudin (2,100 m)" },
          { "@type": "TouristTrip", "name": "Day 21: Trek to Mamanke (1,800 m)" },
          { "@type": "TouristTrip", "name": "Day 22: Trek to Lalikharka (2,250 m)" },
          { "@type": "TouristTrip", "name": "Day 23: Trek to Suketar (2,419 m)" },
          { "@type": "TouristTrip", "name": "Day 24: Return Travel from Suketar to Kathmandu (1,355 m)" },
          { "@type": "TouristTrip", "name": "Day 25: Scheduled Leisure & Buffer Day in Kathmandu (1,355 m)" },
          { "@type": "TouristTrip", "name": "Day 26: Final Departure" }
        ],
        "offers": {
          "@type": "Offer",
          "price": "2850",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://namastehikingtrek.com/trek/kanchenjunga-base-camp-trek/"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://namastehikingtrek.com/trek/kanchenjunga-base-camp-trek/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://namastehikingtrek.com/" },
          { "@type": "ListItem", "position": 2, "name": "All Treks", "item": "https://namastehikingtrek.com/nepal-trekking-packages/" },
          { "@type": "ListItem", "position": 3, "name": "Kanchenjunga Circuit Trek", "item": "https://namastehikingtrek.com/trek/kanchenjunga-base-camp-trek/" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://namastehikingtrek.com/trek/kanchenjunga-base-camp-trek/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What permits are required for the Kanchenjunga Circuit Trek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Two primary permits are required: the Kanchenjunga Restricted Area Permit (RAP, $20 per week for the first 4 weeks) and the Kanchenjunga Conservation Area Project (KCAP, NPR 3,000) entry permit. Under Nepal government regulations, restricted area trekking requires a minimum of two registered trekkers accompanied by a licensed government guide. All permits and paperwork are arranged and included in our package."
            }
          },
          {
            "@type": "Question",
            "name": "How difficult is the Kanchenjunga Circuit Trek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The 26-day Kanchenjunga Circuit Trek is rated challenging to strenuous due to its sustained duration, high altitude up to 5,143m at Pangpema, basic teahouse infrastructure, and the demanding high-altitude crossing of the Sele Le pass (4,290m). Technical climbing skills are not required, but solid multi-day trekking endurance, physical fitness, and mental stamina are essential."
            }
          },
          {
            "@type": "Question",
            "name": "What is the maximum elevation reached on the Kanchenjunga Circuit Trek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The highest planned point reached is Pangpema (Kanchenjunga North Base Camp) at approximately 5,143m (16,873 ft). The highest mountain pass crossing is Sele Le at approximately 4,290m (14,074 ft), and the southern high excursion around Ramche reaches approximately 4,580m (15,026 ft)."
            }
          }
        ]
      }
    ]
  }
  </script>`;

html = html.substring(0, schemaStartIdx) + newJsonLd + html.substring(schemaEndIdx + oldSchemaEnd.length);

// Hero Region Pill, Title & Subtitle
html = html.replace(
  /<span class="pill pill-copper" style="margin-bottom: 0;">Everest Region • Classic Himalayan Expedition<\/span>/,
  '<span class="pill pill-copper" style="margin-bottom: 0;">Kanchenjunga Region • Eastern Nepal Wilderness Circuit</span>'
);

html = html.replace(
  /<h1 style="font-size: 2\.8rem; margin-top: 6px; margin-bottom: 8px; color: var\(--color-primary-navy\);">Kanchenjunga Base Camp Trek<\/h1>/,
  '<h1 style="font-size: 2.8rem; margin-top: 6px; margin-bottom: 8px; color: var(--color-primary-navy);">Kanchenjunga Circuit Trek</h1>'
);

html = html.replace(
  /<p style="font-size: 1\.15rem; color: var\(--color-neutral-600\); line-height: 1\.7; margin-top: 12px; margin-bottom: 0;">[\s\S]*?<\/p>\s*<script>/,
  `<p style="font-size: 1.15rem; color: var(--color-neutral-600); line-height: 1.7; margin-top: 12px; margin-bottom: 0;">
          An epic 26-day guided expedition exploring both North (Pangpema 5,143m) and South (Ramche 4,580m) base camps of Mount Kanchenjunga (8,586m) across the wild Sele Le pass in eastern Nepal.
          <span id="ebc-more-text" style="display: none;">
            Traversing traditional Limbu and Sherpa villages, deep river valleys, glacial moraines, and protected biodiversity corridors, this comprehensive circuit allows generous acclimatization in Ghunsa and Khambachen with full expedition-grade local guidance.
          </span>
          <button id="ebc-toggle-btn" style="background: none; border: none; color: #10b981; font-weight: 700; font-size: 1.05rem; cursor: pointer; padding: 0; margin-left: 6px; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; vertical-align: middle; transition: opacity 0.2s ease;">
            Learn more <span style="font-size: 1.1rem; margin-left: 2px;">→</span>
          </button>
        </p>
        <script>`
);

// Key Trip Facts Grid
const factsGridStartMarker = '<!-- Key Trip Facts Grid -->';
const factsGridEndMarker = '<!-- Trust Badges Section -->';

const factsStartIdx = html.indexOf(factsGridStartMarker);
const factsEndIdx = html.indexOf(factsGridEndMarker);

if (factsStartIdx === -1 || factsEndIdx === -1) {
  console.error('ERROR: Key Trip Facts Grid markers not found!');
  process.exit(1);
}

const newKeyTripFactsGrid = `<!-- Key Trip Facts Grid -->
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
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">26 days</span>
            </div>
          </div>

          <!-- 2. Difficulty -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Difficulty</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Challenging to Strenuous</span>
            </div>
          </div>

          <!-- 3. Max Altitude -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22L12 2l8 20H4z"/><path d="M9 22l3-7 3 7H9z" fill="#008060"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Max Altitude</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;" data-altitude-m="5143">5,143 m</span>
            </div>
          </div>

          <!-- 4. Destination -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Destination</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Nepal (Eastern Himalayas)</span>
            </div>
          </div>

          <!-- 5. Activity -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Activity</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Wilderness Circuit Trekking</span>
            </div>
          </div>

          <!-- 6. Accommodation -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Accommodation</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Basic Teahouses & Lodges</span>
            </div>
          </div>

          <!-- 7. Transport -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM3 10h18M7 15h.01M11 15h.01"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Transport</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Flight / Road to Suketar</span>
            </div>
          </div>

          <!-- 8. Meals -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Meals</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">B.D.L. (All Meals on Trek)</span>
            </div>
          </div>

          <!-- 9. Season -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Season</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Spring & Autumn</span>
            </div>
          </div>

          <!-- 10. Trek Starts -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><polygon points="12 7 17 12 12 17 12 7"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek Starts</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Suketar / Mitlung</span>
            </div>
          </div>

          <!-- 11. Trek End At -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek End At</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Suketar</span>
            </div>
          </div>

          <!-- 12. Trek Region -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek Region</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Kanchenjunga</span>
            </div>
          </div>

          <!-- 13. Package Start Point -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Package Start Point</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Kathmandu</span>
            </div>
          </div>

          <!-- 14. Package End Point -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Package End Point</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Kathmandu</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    `;

html = html.substring(0, factsStartIdx) + newKeyTripFactsGrid + html.substring(factsEndIdx);

// Validate tag balance
const tags = ['div', 'section', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'span', 'ul', 'li', 'button', 'a', 'main', 'article'];
let allOk = true;
for (const t of tags) {
  const o = (html.match(new RegExp('<' + t + '[\\s>]', 'gi')) || []).length;
  const c = (html.match(new RegExp('</' + t + '>', 'gi')) || []).length;
  if (o !== c) {
    console.error(t + ' MISMATCH: open=' + o + ', close=' + c + ', diff=' + (o - c));
    allOk = false;
  }
}

if (!allOk) {
  console.error('Tag balance validation failed!');
  process.exit(1);
}

fs.writeFileSync('trek/kanchenjunga-base-camp-trek/index.html', html, 'utf8');
console.log('SUCCESS: Phase 1 applied cleanly with 100% tag balance on ALL tags!');
