const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'trek', 'langtang-valley-trek', 'index.html');
let html = fs.readFileSync(targetPath, 'utf8');

console.log('Original Langtang page length:', html.length);

// -----------------------------------------------------------------------------
// 1. UPDATE HEAD METADATA & SCHEMA.ORG JSON-LD
// -----------------------------------------------------------------------------
const newTitle = '<title>Langtang Valley Trek (14 Days) — Namaste Hiking Trek</title>';
const newDesc = '<meta name="description" content="Experience the classic 14-day Langtang Valley Trek from Syabrubesi to Kyanjin Gompa (3,800m), beneath towering Langtang Lirung, rich Tamang culture, and rhododendron forests.">';

html = html.replace(/<title>.*?<\/title>/i, newTitle);
html = html.replace(/<meta name="description" content="[^"]*">/i, newDesc);
html = html.replace(/<meta property="og:title" content="[^"]*">/i, '<meta property="og:title" content="Langtang Valley Trek (14 Days) — Namaste Hiking Trek">');
html = html.replace(/<meta property="og:description" content="[^"]*">/i, '<meta property="og:description" content="Experience the classic 14-day Langtang Valley Trek from Syabrubesi to Kyanjin Gompa (3,800m), beneath towering Langtang Lirung, rich Tamang culture, and rhododendron forests.">');
html = html.replace(/<meta name="twitter:title" content="[^"]*">/i, '<meta name="twitter:title" content="Langtang Valley Trek (14 Days) — Namaste Hiking Trek">');
html = html.replace(/<meta name="twitter:description" content="[^"]*">/i, '<meta name="twitter:description" content="Experience the classic 14-day Langtang Valley Trek from Syabrubesi to Kyanjin Gompa (3,800m), beneath towering Langtang Lirung, rich Tamang culture, and rhododendron forests.">');

// Update Schema.org
const newSchema = `  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": "https://namastehikingtrek.com/trek/langtang-valley-trek/#trip",
        "name": "Langtang Valley Trek (14 Days)",
        "description": "Experience the classic 14-day Langtang Valley Trek from Syabrubesi to Kyanjin Gompa (3,800m), beneath towering Langtang Lirung, rich Tamang culture, and rhododendron forests.",
        "touristType": ["Hikers", "Trekking Enthusiasts", "Nature Lovers"],
        "subTrip": [
          { "@type": "TouristTrip", "name": "Arrival in Kathmandu (1,400m)" },
          { "@type": "TouristTrip", "name": "Kathmandu Sightseeing & Final Trek Preparation (1,400m)" },
          { "@type": "TouristTrip", "name": "Drive from Kathmandu to Syabrubesi (1,450m)" },
          { "@type": "TouristTrip", "name": "Trek from Syabrubesi to Lama Hotel (2,480m)" },
          { "@type": "TouristTrip", "name": "Trek from Lama Hotel to Langtang Village / Mundu (3,430m)" },
          { "@type": "TouristTrip", "name": "Trek from Langtang Village to Kyanjin Gompa (3,870m)" },
          { "@type": "TouristTrip", "name": "Acclimatization & Upper Valley Exploration at Kyanjin Gompa (3,870m)" },
          { "@type": "TouristTrip", "name": "Optional Day Hike to Kyanjin Ri (4,773m) or Tserko Ri (4,984m)" },
          { "@type": "TouristTrip", "name": "Trek from Kyanjin Gompa to Lama Hotel (2,480m)" },
          { "@type": "TouristTrip", "name": "Trek from Lama Hotel to Syabrubesi (1,450m)" },
          { "@type": "TouristTrip", "name": "Drive from Syabrubesi back to Kathmandu (1,400m)" },
          { "@type": "TouristTrip", "name": "Kathmandu Rest, Recovery & Contingency Buffer (1,400m)" },
          { "@type": "TouristTrip", "name": "Kathmandu Cultural Day & Souvenir Shopping (1,400m)" },
          { "@type": "TouristTrip", "name": "Final International Departure" }
        ],
        "offers": {
          "@type": "Offer",
          "price": "1299",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://namastehikingtrek.com/trek/langtang-valley-trek/"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://namastehikingtrek.com/trek/langtang-valley-trek/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://namastehikingtrek.com/" },
          { "@type": "ListItem", "position": 2, "name": "All Treks", "item": "https://namastehikingtrek.com/nepal-trekking-packages/" },
          { "@type": "ListItem", "position": 3, "name": "Langtang Valley Trek", "item": "https://namastehikingtrek.com/trek/langtang-valley-trek/" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://namastehikingtrek.com/trek/langtang-valley-trek/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How difficult is the Langtang Valley Trek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The classic Langtang Valley Trek is rated as moderate. It requires no technical climbing or glacier travel, but involves several consecutive days of 5-7 hours walking on mountain paths, ascending from 1,420m at Syabrubesi to 3,870m at Kyanjin Gompa, with optional viewpoint climbs to Kyanjin Ri (4,773m) and Tserko Ri (4,984m)."
            }
          },
          {
            "@type": "Question",
            "name": "What permits are required for the Langtang Valley Trek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You require the Langtang National Park Entry Permit and the TIMS (Trekkers' Information Management System) Card. Both permits are arranged and fully included in our Namaste Hiking Trek package."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a domestic flight for the Langtang Valley Trek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. One of Langtang's major advantages is overland road access. The trailhead at Syabrubesi is reached by a 6 to 8-hour scenic drive from Kathmandu, eliminating domestic flight delays."
            }
          }
        ]
      }
    ]
  }
  </script>`;

html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, newSchema);

// -----------------------------------------------------------------------------
// 2. HERO REGION PILL, TITLE & OVERVIEW INTRO
// -----------------------------------------------------------------------------
html = html.replace(
  /<span class="pill pill-copper" style="margin-bottom: 0;">Everest Region • Classic Himalayan Expedition<\/span>/,
  '<span class="pill pill-copper" style="margin-bottom: 0;">Langtang Region • Alpine Valley & Glaciers Expedition</span>'
);

const heroIntroSearch = /<p style="font-size: 1\.15rem; color: var\(--color-neutral-600\); line-height: 1\.7; margin-top: 12px; margin-bottom: 0;">[\s\S]*?<\/p>/;
const heroIntroReplace = `<p style="font-size: 1.15rem; color: var(--color-neutral-600); line-height: 1.7; margin-top: 12px; margin-bottom: 0;">
          The Langtang Valley Trek is a fourteen-calendar-day Himalayan journey through northern Nepal that combines high mountain scenery, Tamang culture, Buddhist heritage, forested trails, alpine landscapes, glaciers, and traditional mountain settlements beneath towering Langtang Lirung.
          <span id="ebc-more-text" style="display: none;">
            Following the road-accessible gateway of Syabrubesi, the route climbs gently along the Langtang Khola valley into the open alpine amphitheater of Kyanjin Gompa (3,800–3,870 m). Guided by our certified local expert team, you will experience gradual acclimatization, warm teahouse hospitality, and optional ascents of Kyanjin Ri and Tserko Ri.
          </span>
          <button id="ebc-toggle-btn" style="background: none; border: none; color: #10b981; font-weight: 700; font-size: 1.05rem; cursor: pointer; padding: 0; margin-left: 6px; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; vertical-align: middle; transition: opacity 0.2s ease;">
            Learn more <span style="font-size: 1.1rem; margin-left: 2px;">→</span>
          </button>
        </p>`;
html = html.replace(heroIntroSearch, heroIntroReplace);

// -----------------------------------------------------------------------------
// 3. KEY TRIP FACTS GRID
// -----------------------------------------------------------------------------
// Max altitude: change from 5,545 m to 4,984 m / 3,870 m
html = html.replace(/<span style="font-size: 1\.05rem; color: var\(--color-neutral-800\); font-weight: 600;" data-altitude-m="5545">5,545 m<\/span>/, '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;" data-altitude-m="4984">4,984 m (Tserko Ri) / 3,870 m (Kyanjin)</span>');

// Accommodation: change to Mountain Teahouses & Lodges
html = html.replace(/<span style="font-size: 1\.05rem; color: var\(--color-neutral-800\); font-weight: 600;">Hostels & Guesthouses<\/span>/, '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Mountain Teahouses & Lodges</span>');

// Transport: change Both way Flight to Scenic Overland Drive
html = html.replace(/<span style="font-size: 1\.05rem; color: var\(--color-neutral-800\); font-weight: 600;">Both way Flight<\/span>/, '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Overland Drive (Kathmandu – Syabrubesi)</span>');

// Trek Starts: change Lukla to Syabrubesi
html = html.replace(/(<span[^>]*>Trek Starts<\/span>\s*<span[^>]*>)Lukla(<\/span>)/, '$1Syabrubesi (1,420 m)$2');

// Trek End At: change Lukla to Syabrubesi
html = html.replace(/(<span[^>]*>Trek End At<\/span>\s*<span[^>]*>)Lukla(<\/span>)/, '$1Syabrubesi (1,420 m)$2');

// Trek Region: change Everest to Langtang
html = html.replace(/(<span[^>]*>Trek Region<\/span>\s*<span[^>]*>)Everest(<\/span>)/, '$1Langtang National Park$2');

// Main Content wrapper: change data-trek-key to langtang
html = html.replace(/<section class="section-padding" style="padding-top: 10px;" data-trek-details-wrapper data-trek-key="[^"]*">/, '<section class="section-padding" style="padding-top: 10px;" data-trek-details-wrapper data-trek-key="langtang">');

console.log('Key trip facts and header updated successfully.');

fs.writeFileSync(targetPath, html, 'utf8');
