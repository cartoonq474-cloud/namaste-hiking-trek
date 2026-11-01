const fs = require('fs');
const path = require('path');

const { generateKeyFactsHtml } = require('./content_luxury_facts_canonical.js');
const { generateOverviewCanonicalHtml } = require('./content_luxury_overview_canonical.js');
const { generateItineraryCanonicalHtml, luxuryItineraryDays } = require('./content_luxury_itinerary_canonical.js');
const { generateIncludesCanonicalHtml } = require('./content_luxury_includes_canonical.js');
const { generatePackingCanonicalHtml } = require('./content_luxury_packing_canonical.js');
const { generateDetailsCanonicalHtml, generateFaqsCanonicalHtml, categorizedFaqs } = require('./content_luxury_details_faqs_canonical.js');

// 1. Read master template
const template = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// 2. Identify exact landmark indices in the pristine template
const heroStart = template.indexOf('<section style="padding: 30px 0 10px 0;');
const galleryStart = template.indexOf('<div class="container" style="margin-bottom: 24px;">');
const factsStart = template.indexOf('<!-- Key Trip Facts Grid -->');
const trustBadgesStart = template.indexOf('<!-- Trust Badges Section -->');
const overviewStart = template.indexOf('<section id="section-overview"');
const itineraryStart = template.indexOf('<section id="section-itinerary"');
const includesStart = template.indexOf('<section id="section-includes"');
const datesStart = template.indexOf('<section id="section-dates"');
const packingStart = template.indexOf('<section id="section-packing"');
const detailsStart = template.indexOf('<section id="section-details"');
const altitudeStart = template.indexOf('<section id="section-altitude-profile"');
const weatherStart = template.indexOf('<section id="section-weather"');
const faqsStart = template.indexOf('<section id="section-faqs"');
const faqsEnd = template.indexOf('</section>', faqsStart) + 10;

console.log('Landmark checks:');
console.log('heroStart:', heroStart);
console.log('galleryStart:', galleryStart);
console.log('factsStart:', factsStart);
console.log('trustBadgesStart:', trustBadgesStart);
console.log('overviewStart:', overviewStart);
console.log('itineraryStart:', itineraryStart);
console.log('includesStart:', includesStart);
console.log('datesStart:', datesStart);
console.log('packingStart:', packingStart);
console.log('detailsStart:', detailsStart);
console.log('altitudeStart:', altitudeStart);
console.log('weatherStart:', weatherStart);
console.log('faqsStart:', faqsStart);
console.log('faqsEnd:', faqsEnd);

// Validate all landmarks found
const landmarks = [
  heroStart, galleryStart, factsStart, trustBadgesStart, overviewStart,
  itineraryStart, includesStart, datesStart, packingStart, detailsStart,
  altitudeStart, weatherStart, faqsStart, faqsEnd
];
if (landmarks.some(idx => idx === -1)) {
  throw new Error('One or more landmarks not found in template!');
}

// 3. Build Chunks

// Chunk 1: Head & Nav (with updated SEO and JSON-LD schema)
let chunk1 = template.substring(0, heroStart);

// Update title, meta, canonical
chunk1 = chunk1.replace(
  /<title>[\s\S]*?<\/title>/i,
  '<title>Everest Base Camp Luxury Trek (12 Days) — Namaste Hiking Trek</title>'
);
chunk1 = chunk1.replace(
  /<meta\s+name="description"[\s\S]*?>/i,
  '<meta name="description" content="Experience the iconic 12-day Everest Base Camp Luxury Trek (5,364m) with Namaste Hiking Trek. Features scheduled helicopter transfers to Lukla and return from Pheriche, premium luxury lodges, certified Sherpa guides, and Kala Patthar sunrise.">'
);
chunk1 = chunk1.replace(
  /<link\s+rel="canonical"[\s\S]*?>/i,
  '<link rel="canonical" href="https://namastehikingtrek.com/trek/everest-base-camp-luxury-trek/" />'
);
chunk1 = chunk1.replace(
  /<meta\s+property="og:url"[\s\S]*?>/i,
  '<meta property="og:url" content="https://namastehikingtrek.com/trek/everest-base-camp-luxury-trek/">'
);
chunk1 = chunk1.replace(
  /<meta\s+property="og:title"[\s\S]*?>/i,
  '<meta property="og:title" content="Everest Base Camp Luxury Trek (12 Days) — Namaste Hiking Trek">'
);
chunk1 = chunk1.replace(
  /<meta\s+property="og:description"[\s\S]*?>/i,
  '<meta property="og:description" content="12-Day Everest Base Camp Luxury Trek with helicopter flights, luxury lodge upgrades, and certified Sherpa guide support.">'
);

// Schema.org Graph
const subTrips = luxuryItineraryDays.map(d => ({
  "@type": "TouristTrip",
  "name": `Day ${d.dayNum}: ${d.title}`
}));
const allFaqs = Object.values(categorizedFaqs).flat();
const fullGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristTrip",
      "@id": "https://namastehikingtrek.com/trek/everest-base-camp-luxury-trek/#trip",
      "name": "Everest Base Camp Luxury Trek",
      "description": "12-day luxury lodge and helicopter-assisted journey through Sagarmatha National Park to Everest Base Camp (5,364m) and Kala Patthar (5,545m).",
      "touristType": ["Hikers", "Trekking Enthusiasts", "Luxury Travelers"],
      "subTrip": subTrips,
      "offers": {
        "@type": "Offer",
        "price": "2490",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://namastehikingtrek.com/trek/everest-base-camp-luxury-trek/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://namastehikingtrek.com/trek/everest-base-camp-luxury-trek/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://namastehikingtrek.com/" },
        { "@type": "ListItem", "position": 2, "name": "Trekking Regions", "item": "https://namastehikingtrek.com/trekking-regions-nepal/" },
        { "@type": "ListItem", "position": 3, "name": "Everest Region", "item": "https://namastehikingtrek.com/everest-region-treks/" },
        { "@type": "ListItem", "position": 4, "name": "Everest Base Camp Luxury Trek", "item": "https://namastehikingtrek.com/trek/everest-base-camp-luxury-trek/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://namastehikingtrek.com/trek/everest-base-camp-luxury-trek/#faq",
      "mainEntity": allFaqs.map(f => ({
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
const graphSchemaStr = `<script type="application/ld+json">\n${JSON.stringify(fullGraphSchema, null, 2)}\n  </script>`;
chunk1 = chunk1.replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i, graphSchemaStr);

// Chunk 2: Luxury Hero
const chunk2 = `<section style="padding: 30px 0 10px 0; background: var(--color-neutral-50);">
      <div class="container">
        <!-- Top Row: Region Pill & Review Badges -->
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 12px;">
          <span class="pill pill-copper" style="margin-bottom: 0;">Everest Region • Luxury Lodge & Helicopter Trek</span>
          
          <!-- TripAdvisor Review Badge -->
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

          <!-- Google Review Badge -->
          <div style="display: inline-flex; align-items: center; gap: 8px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 100px; padding: 4px 12px; font-size: 0.85rem; color: #475569; box-shadow: 0 1px 2px rgba(0,0,0,0.05); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span style="font-weight: 700; color: #0f172a;">5.0</span>
            <span style="color: #FBBF24; display: inline-flex; gap: 1px; font-size: 0.9rem;"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
            <span><strong style="font-weight: 600; color: #0f172a;">169</strong> reviews on Google</span>
          </div>
        </div>
        <h1 class="trek-hero-title" style="font-size: 2.8rem; margin-top: 6px; margin-bottom: 8px; color: var(--color-primary-navy);">Everest Base Camp Luxury Trek</h1>
        <p style="font-size: 1.15rem; color: var(--color-neutral-600); line-height: 1.7; margin-top: 12px; margin-bottom: 0;">
          Follow the Khumbu trail to Everest Base Camp (<span data-altitude-m="5364">5,364m</span>) and Kala Patthar (<span data-altitude-m="5545">5,545m</span>) with upgraded accommodation where available, coordinated trekking support and planned helicopter transfers. This 12-day journey flies to Lukla, walks to Base Camp, descends to Pheriche after Kala Patthar, and returns to Kathmandu via scheduled helicopter.
          <span id="ebc-more-text" style="display: none;">
            Combining premier boutique lodge stays (such as Yeti Mountain Home where available) with the efficiency of private mountain aviation, this itinerary removes 3 to 4 days of grueling downhill trail descent. Enjoy hot showers, heated beds at lower elevations, and wholesome meals while experiencing the spiritual majesty of Tengboche Monastery, Namche Bazaar, and the mighty Khumbu Icefall.
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
    </section>\n\n    `;

// Chunk 3: 5-Photo Collage Gallery
const chunk3 = `<div class="container" style="margin-bottom: 24px;">
      <div class="trek-gallery-collage">
        <!-- Main Large Photo (Left) with Travelers' Choice badge -->
        <div class="trek-gallery-main">
          <img src="../../images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-panorama-11.jpg" alt="Everest Base Camp Luxury Trek Panoramic Mountain View">
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
          <img src="../../images/treks/everest-base-camp/everest-base-camp-trekking-group-village-lodge-08.jpg" alt="Premium Mountain Lodge in the Everest Region">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-top-right">
          <img src="../../images/treks/everest-base-camp/everest-base-camp-trekkers-team-circle-02.jpg" alt="Celebration at Everest Base Camp">
          <!-- See all photos button -->
          <button class="trek-gallery-see-all-btn">
            <span><svg class="icon-svg icon-xs icon-margin-right" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>See all photos</span>
          </button>
        </div>
        <div class="trek-gallery-sub">
          <img src="../../images/treks/everest-base-camp/everest-base-camp-trekking-group-monastery-09.jpg" alt="Tengboche Monastery beneath Ama Dablam">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-bottom-right">
          <img src="../../images/treks/everest-base-camp/everest-base-camp-high-mountain-sunrise-13.jpg" alt="Golden Sunrise on Mount Everest from Kala Patthar">
        </div>
      </div>
    </div>\n\n    `;

// Chunk 4: Key Trip Facts
const chunk4 = generateKeyFactsHtml() + '\n\n    ';

// Chunk 5: Trust badges & Sticky SubNav up to Overview
let chunk5 = template.substring(trustBadgesStart, overviewStart);
chunk5 = chunk5.replace('data-trek-key="ebc"', 'data-trek-key="ebc_luxury"');

// Chunk 6: Section Overview
const chunk6 = `<section id="section-overview" class="trek-detail-section">\n${generateOverviewCanonicalHtml()}\n          </section>\n\n          `;

// Chunk 7: Section Itinerary
const luxuryItinIntro = `
            <h2 class="trek-section-title">Everest Base Camp Luxury Trek Itinerary: Day by Day Details</h2>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-top: 16px; margin-bottom: 16px; line-height: 1.7;">
              Our 12-day Everest Base Camp Luxury Trek itinerary is designed for travelers who want to experience the legendary route to Everest Base Camp (<span data-altitude-m="5364">5,364 m</span>) and Kala Patthar (<span data-altitude-m="5545">5,545 m</span>) with upgraded lodge comfort, coordinated Sherpa guidance, and scheduled helicopter flights.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The itinerary includes 9 scheduled trekking days, two built-in active acclimatization days (Namche Bazaar and Dingboche), and planned helicopter transfers between Kathmandu and Lukla on Day 2 and Pheriche to Kathmandu on Day 11. Bypassing repetitive downhill walking ensures maximum energy and focus for the high-altitude objectives.
            </p>

            <h3 style="font-size: 1.35rem; color: var(--color-primary-navy); font-weight: 700; margin-top: 32px; margin-bottom: 14px; line-height: 1.35;">
              Before Your Luxury Trek Starts
            </h3>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              Your start date is your arrival date in Kathmandu. The first day is dedicated to private airport transfer, deluxe hotel check-in, orientation, gear checking, and a comprehensive pre-trek briefing with your lead Sherpa guide.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 30px; line-height: 1.7;">
              We recommend keeping 1–2 contingency days at the end of your holiday in Kathmandu. Mountain helicopter operations are subject to favorable weather and visibility under Visual Flight Rules (VFR). A sensible buffer ensures a relaxed and completely stress-free international return.
            </p>
`;
const chunk7 = `<section id="section-itinerary" class="trek-detail-section">\n${luxuryItinIntro}\n${generateItineraryCanonicalHtml()}\n          </section>\n\n          `;

// Chunk 8: Section Includes
const chunk8 = `<section id="section-includes" class="trek-detail-section">\n${generateIncludesCanonicalHtml()}\n          </section>\n\n          `;

// Chunk 9: Section Dates (from template with title update)
let chunk9 = template.substring(datesStart, packingStart);
chunk9 = chunk9.replace(
  'Booking Dates & Availability for EBC trek',
  'Booking Dates & Availability for Everest Base Camp Luxury Trek'
);

// Chunk 10: Section Packing
const chunk10 = `<section id="section-packing" class="trek-detail-section">\n${generatePackingCanonicalHtml()}\n          </section>\n\n          `;

// Chunk 11: Section Details (16 Guides)
const chunk11 = `<section id="section-details" class="trek-detail-section">\n${generateDetailsCanonicalHtml()}\n          </section>\n\n          `;

// Chunk 12: Section Altitude Profile (with ebc_luxury key)
let chunk12 = template.substring(altitudeStart, weatherStart);
chunk12 = chunk12.replace('Altitude Profile of Everest Base Camp Trek', 'Altitude Profile of Everest Base Camp Luxury Trek');
chunk12 = chunk12.replace('data-trek-key="ebc"', 'data-trek-key="ebc_luxury"');

// Chunk 13: Weather, Map, Booking, Reviews up to FAQs
let chunk13 = template.substring(weatherStart, faqsStart);
chunk13 = chunk13.replace('Weather on the Everest Base Camp Trek', 'Weather on the Everest Base Camp Luxury Trek');

// Chunk 14: Section FAQs (30 FAQs)
const chunk14 = `<section id="section-faqs" class="trek-detail-section">\n${generateFaqsCanonicalHtml()}\n          </section>\n\n          `;

// Chunk 15: Sidebar, Footer, Scripts (from faqsEnd to end of template)
let chunk15 = template.substring(faqsEnd);

// Sidebar updates: Pricing, Ribbon, Trip Days, Discount Table
chunk15 = chunk15.replace(
  /<div style="position: absolute; top: 18px; right: 0; background: #F59E0B;[\s\S]*?BEST SELLER[\s\S]*?<\/div>/i,
  `<div style="position: absolute; top: 18px; right: 0; background: #008060; color: #FFFFFF; font-size: 0.72rem; font-weight: 800; padding: 5px 14px; border-radius: 4px 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 2px 6px rgba(0, 128, 96, 0.3);">
                LUXURY EXPEDITION
              </div>`
);
chunk15 = chunk15.replace(/\$1,299/g, '$2,490');
chunk15 = chunk15.replace('>14 days trip</a>', '>12 days trip</a>');
chunk15 = chunk15.replace(/<tbody id="group-discount-tbody">[\s\S]*?<\/tbody>/i, `
                <tbody id="group-discount-tbody">
                  <tr style="border-bottom: 1px solid #E2E8F0;">
                    <td style="padding: 10px 14px; font-weight: 600; color: #334155;">1 Person</td>
                    <td style="padding: 10px 14px; text-align: right; font-weight: 700; color: #0F172A;">$2,490 / person</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #E2E8F0;">
                    <td style="padding: 10px 14px; font-weight: 600; color: #334155;">2 - 4 People</td>
                    <td style="padding: 10px 14px; text-align: right; font-weight: 700; color: #008060;">$2,390 / person</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #E2E8F0;">
                    <td style="padding: 10px 14px; font-weight: 600; color: #334155;">5 - 8 People</td>
                    <td style="padding: 10px 14px; text-align: right; font-weight: 700; color: #008060;">$2,290 / person</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 14px; font-weight: 600; color: #334155;">9+ People</td>
                    <td style="padding: 10px 14px; text-align: right; font-weight: 700; color: #008060;">$2,190 / person</td>
                  </tr>
                </tbody>
`);

// 4. Assemble the pristine document!
const finalHtml = [
  chunk1,
  chunk2,
  chunk3,
  chunk4,
  chunk5,
  chunk6,
  chunk7,
  chunk8,
  chunk9,
  chunk10,
  chunk11,
  chunk12,
  chunk13,
  chunk14,
  chunk15
].join('');

fs.writeFileSync('trek/everest-base-camp-luxury-trek/index.html', finalHtml, 'utf8');
console.log('Successfully assembled trek/everest-base-camp-luxury-trek/index.html!');
console.log('Final file length:', finalHtml.length);
