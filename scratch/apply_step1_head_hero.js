const fs = require('fs');

const faqs = JSON.parse(fs.readFileSync('scratch/parsed_faqs.json', 'utf8'));

let html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

// 1. Update Title and Meta
html = html.replace(
  /<title>.*?<\/title>/,
  '<title>Everest Three High Passes Trek (21 Days) — Namaste Hiking Trek</title>'
);

html = html.replace(
  /<meta name="description" content=".*?">/,
  '<meta name="description" content="Cross Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,360m) in a 21-day circuit visiting Everest Base Camp, Kala Patthar, Gokyo Lakes, and Gokyo Ri with Namaste Hiking Trek.">'
);

html = html.replace(
  /<meta property="og:title" content=".*?">/,
  '<meta property="og:title" content="Everest Three High Passes Trek (21 Days) — Namaste Hiking Trek">'
);

html = html.replace(
  /<meta property="og:description" content=".*?">/,
  '<meta property="og:description" content="Cross Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,360m) in a 21-day circuit visiting Everest Base Camp, Kala Patthar, Gokyo Lakes, and Gokyo Ri with Namaste Hiking Trek.">'
);

html = html.replace(
  /<meta name="twitter:title" content=".*?">/,
  '<meta name="twitter:title" content="Everest Three High Passes Trek (21 Days) — Namaste Hiking Trek">'
);

html = html.replace(
  /<meta name="twitter:description" content=".*?">/,
  '<meta name="twitter:description" content="Cross Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,360m) in a 21-day circuit visiting Everest Base Camp, Kala Patthar, Gokyo Lakes, and Gokyo Ri with Namaste Hiking Trek.">'
);

// 2. Build Schema.org Graph
const subTrips = [
  { name: "Day 1: Arrival in Kathmandu (1,355m) & Hotel Transfer" },
  { name: "Day 2: Kathmandu Sightseeing & Trek Briefing (1,355m)" },
  { name: "Day 3: Scenic Flight to Lukla (2,850m) & Trek to Phakding (2,650m)" },
  { name: "Day 4: Trek from Phakding to Namche Bazaar (3,443m)" },
  { name: "Day 5: Acclimatization Hike to Everest View Hotel (3,880m) & Return to Namche" },
  { name: "Day 6: Trek from Namche Bazaar to Tengboche Monastery (3,860m)" },
  { name: "Day 7: Trek from Tengboche to Dingboche (4,450m)" },
  { name: "Day 8: Acclimatization Hike to Nangkartshang Hill (5,100m) & Return to Dingboche" },
  { name: "Day 9: Short Positioning Trek from Dingboche to Chhukung (4,700m)" },
  { name: "Day 10: Cross Kongma La Pass (5,535m) to Lobuche (4,910m)" },
  { name: "Day 11: Trek to Gorak Shep (5,180m) & Excursion to Everest Base Camp (5,364m)" },
  { name: "Day 12: Sunrise Hike to Kala Patthar (5,545m) & Trek to Dzongla (4,830m)" },
  { name: "Day 13: Cross Cho La Pass (5,420m) to Thangnak / Dragnak (4,700m)" },
  { name: "Day 14: Trek across Ngozumpa Glacier from Thangnak to Gokyo Lakes (4,750m)" },
  { name: "Day 15: Morning Climb of Gokyo Ri (5,357m) & Gokyo Valley Exploration (4,750m)" },
  { name: "Day 16: Cross Renjo La Pass (5,360m) to Lungden (4,368m)" },
  { name: "Day 17: Trek from Lungden down through Thame Valley to Namche Bazaar (3,443m)" },
  { name: "Day 18: Trek from Namche Bazaar down to Lukla (2,850m)" },
  { name: "Day 19: Scenic Flight from Lukla to Kathmandu (1,355m) & Hotel Transfer" },
  { name: "Day 20: Dedicated Weather & Contingency Buffer Day in Kathmandu (1,355m)" },
  { name: "Day 21: Final Departure Transfer to Tribhuvan International Airport (TIA)" }
].map(s => ({ "@type": "TouristTrip", "name": s.name }));

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristTrip",
      "@id": "https://namastehikingtrek.com/trek/everest-three-passes-trek/#trip",
      "name": "Everest Three High Passes Trek (21 Days)",
      "description": "Cross Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,360m) in a 21-day circuit visiting Everest Base Camp, Kala Patthar, Gokyo Lakes, and Gokyo Ri with Namaste Hiking Trek.",
      "touristType": ["Hikers", "Trekking Enthusiasts", "High Altitude Adventurers"],
      "subTrip": subTrips,
      "offers": {
        "@type": "Offer",
        "price": "1850",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://namastehikingtrek.com/trek/everest-three-passes-trek/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://namastehikingtrek.com/trek/everest-three-passes-trek/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://namastehikingtrek.com/" },
        { "@type": "ListItem", "position": 2, "name": "All Treks", "item": "https://namastehikingtrek.com/nepal-trekking-packages/" },
        { "@type": "ListItem", "position": 3, "name": "Everest Three High Passes Trek", "item": "https://namastehikingtrek.com/trek/everest-three-passes-trek/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://namastehikingtrek.com/trek/everest-three-passes-trek/#faq",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    }
  ]
};

const newSchemaTag = `<script type="application/ld+json">\n${JSON.stringify(schemaGraph, null, 2)}\n  </script>`;
html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, newSchemaTag);

// 3. Update Hero heading, subtitle and lead text
const heroHeadingTarget = /<h1[^>]*>.*?<\/h1>/;
html = html.replace(
  heroHeadingTarget,
  '<h1 style="font-size: 2.8rem; margin-top: 6px; margin-bottom: 8px; color: var(--color-primary-navy);">Everest Three High Passes Trek</h1>'
);

// Update lead paragraph
const leadRegex = /<p style="font-size: 1\.15rem; color: var\(--color-neutral-600\); line-height: 1\.7; margin-top: 12px; margin-bottom: 0;">[\s\S]*?<\/button>\s*<\/p>/;
const newLeadHtml = `<p style="font-size: 1.15rem; color: var(--color-neutral-600); line-height: 1.7; margin-top: 12px; margin-bottom: 0;">
          Cross Kongma La, Cho La and Renjo La in a 21-day circuit that also visits Everest Base Camp, Kala Patthar, Gokyo Lakes and Gokyo Ri. This itinerary approaches through Tengboche, Dingboche and Chhukung, crosses Kongma La first, reaches the Everest Base Camp area, continues over Cho La to Gokyo, then crosses Renjo La to Lungden before returning through the Thame side to Namche and Lukla.
          <span id="ebc-more-text" style="display: none;">
            Guided by our certified local Sherpa expert team, you will safely navigate high-altitude Himalayan terrain with tailored acclimatization, comfortable teahouse stays, and rich local cultural traditions.
          </span>
          <button id="ebc-toggle-btn" style="background: none; border: none; color: #10b981; font-weight: 700; font-size: 1.05rem; cursor: pointer; padding: 0; margin-left: 6px; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; vertical-align: middle; transition: opacity 0.2s ease;">
            Learn more <span style="font-size: 1.1rem; margin-left: 2px;">→</span>
          </button>
        </p>`;
html = html.replace(leadRegex, newLeadHtml);

// 4. Update Key Trip Facts Grid
const factsTargetRegex = /<!-- Key Trip Facts Grid -->[\s\S]*?<!-- Trust Badges Section -->/;
const newFactsHtml = `<!-- Key Trip Facts Grid -->
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
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">21 calendar days</span>
            </div>
          </div>

          <!-- 2. Walking Days -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 4v16M17 4v16M7 4v16M3 4h18M3 20h18"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Walking Days</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">16 scheduled days (Days 3–18)</span>
            </div>
          </div>

          <!-- 3. Acclimatization -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Acclimatization</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Namche (Day 5) & Dingboche (Day 8)</span>
            </div>
          </div>

          <!-- 4. Pass Sequence -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Pass Sequence</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Kongma La (D10) → Cho La (D13) → Renjo La (D16)</span>
            </div>
          </div>

          <!-- 5. Pass Elevations -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22L12 2l8 20H4z"/><path d="M9 22l3-7 3 7H9z" fill="#008060"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Pass Elevations</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;"><span data-altitude-m="5535">5,535m</span>, <span data-altitude-m="5420">5,420m</span>, <span data-altitude-m="5360">5,360m</span></span>
            </div>
          </div>

          <!-- 6. Everest Base Camp -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Everest Base Camp</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Day 11, approx <span data-altitude-m="5364">5,364 m</span></span>
            </div>
          </div>

          <!-- 7. Highest Viewpoint -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Highest Viewpoint</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Kala Patthar (Day 12, <span data-altitude-m="5545">5,545 m</span>)</span>
            </div>
          </div>

          <!-- 8. Gokyo Ri & Lakes -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12s1.5 2 4 2 4-2 4-2"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Gokyo Ri & Lakes</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Day 15 (<span data-altitude-m="5357">5,357 m</span>); return to Gokyo</span>
            </div>
          </div>

          <!-- 9. Highest Sleeping Elevation -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Highest Sleeping Elevation</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Gorak Shep (Day 11, <span data-altitude-m="5180">5,180 m</span>)</span>
            </div>
          </div>

          <!-- 10. Start and Finish -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Start & Finish</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Lukla (Round-Trip)</span>
            </div>
          </div>

          <!-- 11. Accommodation -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Accommodation</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">4 Kathmandu Hotel + 16 Mountain Lodges</span>
            </div>
          </div>

          <!-- 12. Difficulty Level -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Difficulty</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Demanding High-Altitude Circuit</span>
            </div>
          </div>

          <!-- 13. Best Seasons -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Best Seasons</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Spring (Mar–May) & Autumn (Sep–Nov)</span>
            </div>
          </div>

          <!-- 14. Return Flight & Buffer -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Return Flight & Buffer</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Lukla (Day 19), Buffer (Day 20), Depart (Day 21)</span>
            </div>
          </div>
        </div>
      </div>
    </div>\n\n    <!-- Trust Badges Section -->`;

html = html.replace(factsTargetRegex, newFactsHtml);

// 5. Update data-trek-key on wrapper
html = html.replace('data-trek-details-wrapper data-trek-key="ebc"', 'data-trek-details-wrapper data-trek-key="three-passes"');

fs.writeFileSync('trek/everest-three-passes-trek/index.html', html, 'utf8');
console.log('Successfully applied Step 1: Head, Hero & Key Trip Facts!');

