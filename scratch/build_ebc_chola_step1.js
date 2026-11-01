const fs = require('fs');
const path = require('path');

const ebcPath = path.join(__dirname, '..', 'trek', 'everest-base-camp-trek', 'index.html');
const outDir = path.join(__dirname, '..', 'trek', 'everest-base-camp-with-cho-la-pass-trek');
const outPath = path.join(outDir, 'index.html');

let src = fs.readFileSync(ebcPath, 'utf8');

// ==========================================
// 1. HEAD & METADATA
// ==========================================
src = src.replace(/<title>.*?<\/title>/i, '<title>Everest Base Camp with Cho La Pass Trek (18 Days) — Namaste Hiking Trek</title>');
src = src.replace(/<meta name="description" content=".*?"\s*\/?>/i, '<meta name="description" content="Conquer the ultimate Khumbu loop: Everest Base Camp (5,364m), sunrise from Kala Patthar (5,545m), crossing the icy Cho La Pass (5,420m), and pristine turquoise Gokyo Lakes with certified Sherpa guides.">');
src = src.replace(/<link rel="canonical" href=".*?"\s*\/?>/i, '<link rel="canonical" href="https://namastehikingtrek.com/trek/everest-base-camp-with-cho-la-pass-trek/" />');

// OG & Twitter
src = src.replace(/<meta property="og:url" content=".*?"\s*\/?>/i, '<meta property="og:url" content="https://namastehikingtrek.com/trek/everest-base-camp-with-cho-la-pass-trek/">');
src = src.replace(/<meta property="og:title" content=".*?"\s*\/?>/i, '<meta property="og:title" content="Everest Base Camp with Cho La Pass Trek (18 Days) — Namaste Hiking Trek">');
src = src.replace(/<meta property="og:description" content=".*?"\s*\/?>/i, '<meta property="og:description" content="Conquer the ultimate Khumbu loop: Everest Base Camp (5,364m), sunrise from Kala Patthar (5,545m), crossing the icy Cho La Pass (5,420m), and pristine turquoise Gokyo Lakes with certified Sherpa guides.">');
src = src.replace(/<meta property="og:image" content=".*?"\s*\/?>/i, '<meta property="og:image" content="https://namastehikingtrek.com/images/treks/everest-cho-la-pass/everest-cho-la-pass-ama-dablam-mountain-view-08.jpg">');
src = src.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/i, '<meta name="twitter:title" content="Everest Base Camp with Cho La Pass Trek (18 Days) — Namaste Hiking Trek">');
src = src.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/i, '<meta name="twitter:description" content="Conquer the ultimate Khumbu loop: Everest Base Camp (5,364m), sunrise from Kala Patthar (5,545m), crossing the icy Cho La Pass (5,420m), and pristine turquoise Gokyo Lakes with certified Sherpa guides.">');
src = src.replace(/<meta name="twitter:image" content=".*?"\s*\/?>/i, '<meta name="twitter:image" content="https://namastehikingtrek.com/images/treks/everest-cho-la-pass/everest-cho-la-pass-ama-dablam-mountain-view-08.jpg">');

// ==========================================
// 2. JSON-LD STRUCTURED DATA
// ==========================================
const schemaJsonLd = `  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": "https://namastehikingtrek.com/trek/everest-base-camp-with-cho-la-pass-trek/#trip",
        "name": "Everest Base Camp with Cho La Pass Trek",
        "description": "Conquer the ultimate Khumbu loop: Everest Base Camp (5,364m), sunrise from Kala Patthar (5,545m), crossing the icy Cho La Pass (5,420m), and pristine turquoise Gokyo Lakes with certified Sherpa guides.",
        "touristType": ["Hikers", "Alpine Enthusiasts", "Adventure Travelers"],
        "subTrip": [
          { "@type": "TouristTrip", "name": "Arrival at Tribhuvan International Airport in Kathmandu (1,300m) & Transfer to Hotel" },
          { "@type": "TouristTrip", "name": "Scenic Flight to Lukla (2,840m) & Trek to Phakding (2,610m)" },
          { "@type": "TouristTrip", "name": "Trek from Phakding to Namche Bazaar (3,440m) via Hillary Suspension Bridge" },
          { "@type": "TouristTrip", "name": "Acclimatization & Exploration Day in Namche Bazaar (Hike to Hotel Everest View, 3,880m)" },
          { "@type": "TouristTrip", "name": "Trek from Namche Bazaar to Tengboche Monastery (3,860m)" },
          { "@type": "TouristTrip", "name": "Trek from Tengboche to Dingboche (4,410m) beneath Ama Dablam" },
          { "@type": "TouristTrip", "name": "Acclimatization Hike to Nagarjun Hill (5,100m) or Nangkartshang Peak" },
          { "@type": "TouristTrip", "name": "Trek from Dingboche to Lobuche (4,940m) via Thokla Pass Memorials" },
          { "@type": "TouristTrip", "name": "Trek to Gorak Shep (5,164m) & Hike to Everest Base Camp (5,364m)" },
          { "@type": "TouristTrip", "name": "Sunrise Ascent to Kala Patthar (5,545m) & Trek to Dzongla (4,830m)" },
          { "@type": "TouristTrip", "name": "Cross Glacial Cho La Pass (5,420m) and Descend to Thangnak (4,700m)" },
          { "@type": "TouristTrip", "name": "Trek from Thangnak across Ngozumpa Glacier to Gokyo Lakes (4,790m)" },
          { "@type": "TouristTrip", "name": "Sunrise Ascent to Gokyo Ri (5,357m) & Explore 4th and 5th Gokyo Lakes" },
          { "@type": "TouristTrip", "name": "Trek from Gokyo down the Dudh Koshi Valley to Dole (4,200m)" },
          { "@type": "TouristTrip", "name": "Trek from Dole to Namche Bazaar (3,440m) via Mong La" },
          { "@type": "TouristTrip", "name": "Trek from Namche Bazaar to Lukla (2,840m)" },
          { "@type": "TouristTrip", "name": "Morning Flight from Lukla to Kathmandu / Ramechhap & Transfer to Hotel" },
          { "@type": "TouristTrip", "name": "Final Departure from Kathmandu" }
        ],
        "offers": {
          "@type": "Offer",
          "price": "1650",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://namastehikingtrek.com/trek/everest-base-camp-with-cho-la-pass-trek/"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://namastehikingtrek.com/trek/everest-base-camp-with-cho-la-pass-trek/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://namastehikingtrek.com/" },
          { "@type": "ListItem", "position": 2, "name": "Nepal Trekking Packages", "item": "https://namastehikingtrek.com/nepal-trekking-packages/" },
          { "@type": "ListItem", "position": 3, "name": "Everest Region Treks", "item": "https://namastehikingtrek.com/everest-region-treks/" },
          { "@type": "ListItem", "position": 4, "name": "Everest Base Camp with Cho La Pass Trek", "item": "https://namastehikingtrek.com/trek/everest-base-camp-with-cho-la-pass-trek/" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://namastehikingtrek.com/trek/everest-base-camp-with-cho-la-pass-trek/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How difficult is the Everest Base Camp with Cho La Pass Trek compared to standard EBC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The EBC with Cho La Pass Trek is rated Strenuous (Alpine Grade 4). It is significantly more demanding than the classic 14-day EBC trek because it adds the glaciated 5,420m Cho La Pass crossing, traversing rough moraine, icy slopes, and crossing the massive Ngozumpa Glacier into the Gokyo Valley."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need technical mountaineering skills or crampons for Cho La Pass?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Technical mountaineering experience is not required, but you must be comfortable walking on snow, ice, and steep scree. We strongly recommend lightweight microspikes or trekking crampons and gaiters, especially during early spring and late autumn when the Cho La glacier has firm black ice."
            }
          },
          {
            "@type": "Question",
            "name": "What is the maximum altitude reached on this trek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The highest viewpoint is Kala Patthar at 5,545 meters (18,192 ft). You will also summit Gokyo Ri at 5,357 meters, reach Everest Base Camp at 5,364 meters, and cross Cho La Pass at 5,420 meters."
            }
          },
          {
            "@type": "Question",
            "name": "What permits are required for the Everest Base Camp with Cho La Pass Trek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You need two permits: the Sagarmatha National Park Entry Permit (NPR 3,000) and the Khumbu Pasang Lhamu Rural Municipality Permit (NPR 3,000). Both permits are arranged by Namaste Hiking Trek and are fully included in the package price."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if Cho La Pass is blocked by heavy snow?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Safety is our absolute priority. If Cho La Pass is buried under unseasonal heavy blizzards or deemed unsafe by our head guide, we reroute via the lower Pheriche/Pangboche valley to connect with Gokyo safely, ensuring you still experience both Everest Base Camp and Gokyo."
            }
          }
        ]
      }
    ]
  }
  </script>`;

src = src.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, schemaJsonLd);

// ==========================================
// 3. HERO SECTION & COLLAGE
// ==========================================
// Replace Breadcrumbs
src = src.replace(
  /<div class="trek-breadcrumb">[\s\S]*?<\/div>/i,
  `<div class="trek-breadcrumb">
          <a href="../../index.html">Home</a>
          <span>/</span>
          <a href="../../nepal-trekking-packages/">Nepal Treks</a>
          <span>/</span>
          <a href="../../everest-region-treks/">Everest Region</a>
          <span>/</span>
          <span>Everest Base Camp with Cho La Pass Trek</span>
        </div>`
);

// Replace Badge & H1
src = src.replace(/<div class="trek-badge">.*?<\/div>/i, '<div class="trek-badge">EVEREST REGION • HIGH EXPEDITION</div>');
src = src.replace(/<h1 class="trek-hero-title">.*?<\/h1>/i, '<h1 class="trek-hero-title">Everest Base Camp with Cho La Pass Trek</h1>');

// Replace Meta Pills (Duration, Altitude, Difficulty, Starting Price)
src = src.replace(
  /<div class="trek-hero-meta">[\s\S]*?<\/div>\s*<\/div>/i,
  `<div class="trek-hero-meta">
            <div class="trek-meta-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div>
                <span class="meta-label">Duration</span>
                <span class="meta-val">18 Days</span>
              </div>
            </div>

            <div class="trek-meta-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
              </svg>
              <div>
                <span class="meta-label">Max Altitude</span>
                <span class="meta-val">5,545 m (Kala Patthar) / 5,420 m (Cho La)</span>
              </div>
            </div>

            <div class="trek-meta-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 20V10"></path>
                <path d="M12 20V4"></path>
                <path d="M6 20v-6"></path>
              </svg>
              <div>
                <span class="meta-label">Difficulty</span>
                <span class="meta-val">Strenuous / Alpine Grade 4</span>
              </div>
            </div>

            <div class="trek-meta-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <div>
                <span class="meta-label">Starting From</span>
                <span class="meta-val">$1,650 USD</span>
              </div>
            </div>
          </div>
        </div>`
);

// Hero Photo Collage
const heroCollageHtml = `<div class="trek-photo-collage">
          <div class="collage-main-wrapper">
            <img src="../../images/treks/everest-cho-la-pass/everest-cho-la-pass-ama-dablam-mountain-view-08.jpg" alt="Dramatic Vista of Ama Dablam and Everest Peaks from Cho La Route">
          </div>
          <div class="collage-grid-sub">
            <div class="collage-sub-item">
              <img src="../../images/treks/everest-cho-la-pass/everest-cho-la-pass-trekking-group-pass-celebration-10.jpg" alt="Trekking Group Celebrating on the 5,420m Summit of Cho La Pass">
            </div>
            <div class="collage-sub-item">
              <img src="../../images/treks/everest-cho-la-pass/everest-cho-la-pass-turquoise-alpine-lake-05.jpg" alt="Turquoise High Alpine Lake along the Cho La Pass Crossing">
            </div>
            <div class="collage-sub-item">
              <img src="../../images/treks/everest-cho-la-pass/everest-cho-la-pass-trekkers-icy-trail-07.jpg" alt="Trekkers Navigating the Glacial Snowfield on Cho La Pass">
            </div>
            <div class="collage-sub-item">
              <img src="../../images/treks/everest-cho-la-pass/everest-cho-la-pass-trekking-group-glacier-18.jpg" alt="Trekking Team Trekking across the Massive Ngozumpa Glacier">
            </div>
          </div>
        </div>`;

src = src.replace(/<div class="trek-photo-collage">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/i, heroCollageHtml + '\n      </div>\n    </div>');

// ==========================================
// 4. SIDEBAR BOOKING CARD
// ==========================================
src = src.replace(/\$1,350/g, '$1,650');
src = src.replace(/14 Days/g, '18 Days');
src = src.replace(/data-trek-title="Everest Base Camp Trek"/g, 'data-trek-title="Everest Base Camp with Cho La Pass Trek"');

console.log('Hero & Sidebar updated.');
fs.writeFileSync(outPath, src, 'utf8');
