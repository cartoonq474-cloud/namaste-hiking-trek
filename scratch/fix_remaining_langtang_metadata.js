const fs = require('fs');

const filePath = 'trek/langtang-valley-trek/index.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Schema.org Replacement
const schemaTargetRegex = /<script type="application\/ld\+json">[\s\S]*?<\/script>/;

const newSchema = `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": "https://namastehikingtrek.com/trek/langtang-valley-trek/#trip",
        "name": "Langtang Valley Trek (14 Days)",
        "description": "Explore the valley of glaciers close to Kathmandu, visiting Tamang heritage villages, Kyanjin Gompa cheese factory, and panoramic summits of Kyanjin Ri (4,773m) and Tserko Ri (4,984m).",
        "touristType": ["Hikers", "Trekking Enthusiasts", "Alpine Adventurers"],
        "subTrip": [
          { "@type": "TouristTrip", "name": "Day 1: Arrive Kathmandu (1,400m) & Transfer to Hotel" },
          { "@type": "TouristTrip", "name": "Day 2: Trek Briefing, Permit Formalities & Optional Sightseeing" },
          { "@type": "TouristTrip", "name": "Day 3: Overland Drive Kathmandu to Syabrubesi (1,460m)" },
          { "@type": "TouristTrip", "name": "Day 4: Trek Syabrubesi to Lama Hotel (2,470m)" },
          { "@type": "TouristTrip", "name": "Day 5: Trek Lama Hotel to Langtang Village & Mundu (3,550m)" },
          { "@type": "TouristTrip", "name": "Day 6: Trek Mundu to Kyanjin Gompa (3,800m–3,870m)" },
          { "@type": "TouristTrip", "name": "Day 7: Acclimatization & Local Glacier Walk at Kyanjin Gompa" },
          { "@type": "TouristTrip", "name": "Day 8: Viewpoint Excursion to Kyanjin Ri (4,773m) or Tserko Ri (4,984m)" },
          { "@type": "TouristTrip", "name": "Day 9: Trek Kyanjin Gompa back to Lama Hotel (2,470m)" },
          { "@type": "TouristTrip", "name": "Day 10: Trek Lama Hotel down to Syabrubesi (1,460m)" },
          { "@type": "TouristTrip", "name": "Day 11: Drive Syabrubesi to Kathmandu (1,400m)" },
          { "@type": "TouristTrip", "name": "Day 12: Full Leisure & Sightseeing Day in Kathmandu" },
          { "@type": "TouristTrip", "name": "Day 13: Contingency Day & Farewell Cultural Dinner" },
          { "@type": "TouristTrip", "name": "Day 14: Final Departure from Kathmandu" }
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
              "text": "The 14-day Langtang Valley Trek is rated as moderate. Daily walking averages 5 to 7 hours on mountain trails. The highest overnight is at Kyanjin Gompa (3,800–3,870 m), with optional viewpoint ascents to Kyanjin Ri (4,773 m) or Tserko Ri (4,984 m). Technical mountaineering skills are not required, but good physical endurance is recommended."
            }
          },
          {
            "@type": "Question",
            "name": "What permits are required for the Langtang Valley Trek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Two permits are mandatory: the Langtang National Park Entry Permit and the Trekkers' Information Management System (TIMS) Card. Both permits are fully arranged and covered in your Namaste Hiking Trek package."
            }
          }
        ]
      }
    ]
  }
  </script>`;

if (schemaTargetRegex.test(content)) {
  console.log('Replacing Schema.org JSON-LD...');
  content = content.replace(schemaTargetRegex, newSchema);
} else {
  console.warn('Could not match Schema.org JSON-LD!');
}

// 2. Key Trip Facts updates
content = content.replace(
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;" data-altitude-m="5545">5,545 m</span>',
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;" data-altitude-m="4984">4,984 m</span>'
);

content = content.replace(
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Hostels & Guesthouses</span>',
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Hotels & Mountain Teahouses</span>'
);

content = content.replace(
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Both way Flight</span>',
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Private 4WD / Tourist Bus</span>'
);

content = content.replace(
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Sep-October & Mar-May</span>',
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Autumn (Sep–Nov) & Spring (Mar–May)</span>'
);

// Start Point and End Point
const startPointRegex = /(<span style="font-size: 0\.75rem; text-transform: uppercase; letter-spacing: 0\.05em; color: var\(--color-neutral-500\); font-weight: 700;">Trek Starts<\/span>\s*<span style="font-size: 1\.05rem; color: var\(--color-neutral-800\); font-weight: 600;">)Lukla(<\/span>)/;
content = content.replace(startPointRegex, '$1Syabrubesi (1,460 m)$2');

const endPointRegex = /(<span style="font-size: 0\.75rem; text-transform: uppercase; letter-spacing: 0\.05em; color: var\(--color-neutral-500\); font-weight: 700;">Trek End At<\/span>\s*<span style="font-size: 1\.05rem; color: var\(--color-neutral-800\); font-weight: 600;">)Lukla(<\/span>)/;
content = content.replace(endPointRegex, '$1Syabrubesi (1,460 m)$2');

const regionRegex = /(<span style="font-size: 0\.75rem; text-transform: uppercase; letter-spacing: 0\.05em; color: var\(--color-neutral-500\); font-weight: 700;">Trek Region<\/span>\s*<span style="font-size: 1\.05rem; color: var\(--color-neutral-800\); font-weight: 600;">)Everest(<\/span>)/;
content = content.replace(regionRegex, '$1Langtang National Park$2');

// 3. Private Date Button data-trek-title
content = content.replace(
  'data-trek-title="Everest Base Camp Private Trek"',
  'data-trek-title="Langtang Valley Private Trek"'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated metadata, key trip facts, and private button title.');
