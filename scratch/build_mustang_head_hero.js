const fs = require('fs');

const filePath = 'trek/upper-mustang-trek/index.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. HEAD & METADATA & SCHEMA.ORG
const headTargetRegex = /<head>[\s\S]*?<\/head>/;

const newHead = `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Upper Mustang Trek (17 Days) — The Last Forbidden Kingdom | Namaste Hiking Trek</title>
  <meta name="description" content="Explore the ancient walled city of Lo Manthang on the classic 17-day Upper Mustang Trek. Trans-Himalayan rain-shadow scenery, ancient sky caves, Tibetan monasteries, and dramatic red cliffs.">
  <meta name="keywords" content="Upper Mustang Trek, 17 days Upper Mustang trek, Lo Manthang, Mustang trekking Nepal, rain shadow trekking Nepal, ancient sky caves Mustang, Charang, Kagbeni">
  
  <!-- Open Graph / Social Meta Tags -->
  <meta property="og:title" content="Upper Mustang Trek (17 Days) — The Last Forbidden Kingdom">
  <meta property="og:description" content="Experience the remote trans-Himalayan kingdom of Lo Manthang, 2,500-year-old sky caves, Tibetan Buddhist gompas, and dramatic red canyon cliffs.">
  <meta property="og:image" content="https://namastehikingtrek.com/images/treks/upper-mustang/upper-mustang-lo-manthang-walled-city-01.jpg">
  <meta property="og:url" content="https://namastehikingtrek.com/trek/upper-mustang-trek/">
  <meta property="og:type" content="website">
  <link rel="canonical" href="https://namastehikingtrek.com/trek/upper-mustang-trek/">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Upper Mustang Trek (17 Days) — The Last Forbidden Kingdom">
  <meta name="twitter:description" content="Explore the ancient walled city of Lo Manthang, sky caves, and trans-Himalayan rain shadow trails with Namaste Hiking Trek.">
  <meta name="twitter:image" content="https://namastehikingtrek.com/images/treks/upper-mustang/upper-mustang-lo-manthang-walled-city-01.jpg">

  <!-- Static JSON-LD Structured Data (Centerpiece Annotation — No JS Required) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": "https://namastehikingtrek.com/trek/upper-mustang-trek/#trip",
        "name": "Upper Mustang Trek (17 Days)",
        "description": "Explore the remote trans-Himalayan landscapes of northern Nepal, visiting the ancient walled city of Lo Manthang, centuries-old Buddhist monasteries, and multi-storied sky caves.",
        "touristType": ["Cultural Hikers", "Trekking Enthusiasts", "Photographers", "Adventure Travelers"],
        "subTrip": [
          { "@type": "TouristTrip", "name": "Day 1: Arrival in Kathmandu (1,355m) & Hotel Transfer" },
          { "@type": "TouristTrip", "name": "Day 2: Kathmandu Sightseeing & Trek Preparation (1,355m)" },
          { "@type": "TouristTrip", "name": "Day 3: Scenic Drive Kathmandu to Pokhara (822m)" },
          { "@type": "TouristTrip", "name": "Day 4: Mountain Flight to Jomsom & Trek to Kagbeni (2,743m)" },
          { "@type": "TouristTrip", "name": "Day 5: Trek Kagbeni to Chele (3,050m) — Enter Restricted Area" },
          { "@type": "TouristTrip", "name": "Day 6: Trek Chele to Gheling (3,570m) via Mountain Passes" },
          { "@type": "TouristTrip", "name": "Day 7: Trek Gheling to Charang (3,630m) via Great Mani Wall" },
          { "@type": "TouristTrip", "name": "Day 8: Trek Charang to Lo Manthang (3,840m) — Walled Capital" },
          { "@type": "TouristTrip", "name": "Day 9: Exploration of Namgyal Gompa & Tingkhar (3,840m+)" },
          { "@type": "TouristTrip", "name": "Day 10: Trek Lo Manthang to Drakmar (3,810m) via Red Sandstone Cliffs" },
          { "@type": "TouristTrip", "name": "Day 11: Trek Drakmar to Sangboche (3,800m)" },
          { "@type": "TouristTrip", "name": "Day 12: Trek Sangboche to Chhusang (2,980m) — Lower Valleys" },
          { "@type": "TouristTrip", "name": "Day 13: Trek Chhusang to Muktinath (3,710m) — Pilgrimage Shrine" },
          { "@type": "TouristTrip", "name": "Day 14: Trek Muktinath to Jomsom (2,720m) — Close Trekking Circuit" },
          { "@type": "TouristTrip", "name": "Day 15: Scenic Flight Jomsom to Pokhara (822m) & Lakeside Rest" },
          { "@type": "TouristTrip", "name": "Day 16: Scenic Road Journey Pokhara to Kathmandu (1,355m)" },
          { "@type": "TouristTrip", "name": "Day 17: Farewell Celebration & Final Departure from Kathmandu" }
        ],
        "offers": {
          "@type": "Offer",
          "price": "1850",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://namastehikingtrek.com/trek/upper-mustang-trek/"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://namastehikingtrek.com/trek/upper-mustang-trek/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://namastehikingtrek.com/" },
          { "@type": "ListItem", "position": 2, "name": "All Treks", "item": "https://namastehikingtrek.com/nepal-trekking-packages/" },
          { "@type": "ListItem", "position": 3, "name": "Upper Mustang Trek", "item": "https://namastehikingtrek.com/trek/upper-mustang-trek/" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://namastehikingtrek.com/trek/upper-mustang-trek/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is the Upper Mustang permit USD $500, and is a guide mandatory?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Upper Mustang is an environmentally and culturally sensitive restricted area. The Department of Immigration mandates a Restricted Area Permit (RAP) costing USD $50 per person per day (or USD $500 for the first 10 days), along with an ACAP permit. Independent solo trekking is strictly prohibited; all trekkers must travel in a minimum group of two accompanied by a certified, licensed Nepalese guide."
            }
          },
          {
            "@type": "Question",
            "name": "Can you trek in Upper Mustang during the summer monsoon (June to August)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Because Upper Mustang lies in the rain shadow of the Annapurna and Dhaulagiri massifs, it receives less than 300 mm of annual rainfall. While the rest of Nepal experiences heavy monsoon rains, Upper Mustang enjoys dry, sunny, and clear skies, making it Nepal's premier summer trekking destination."
            }
          }
        ]
      }
    ]
  }
  </script>

  <!-- Google Fonts & Main Stylesheets -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../index.css">
</head>`;

content = content.replace(headTargetRegex, newHead);

// 2. HERO SECTION & KEY TRIP FACTS (Lines 396 to 765)
// Locate from <main> to <section id="section-overview"
const heroTargetRegex = /<main>[\s\S]*?(?=<section id="section-overview")/;

const newHeroAndFacts = `<main>
  <!-- Hero Section -->
  <article>
    <div class="container" style="padding-top: 30px;">
      <!-- Breadcrumb -->
      <nav class="breadcrumb" aria-label="Breadcrumb" style="margin-bottom: 20px;">
        <a href="../../">Home</a>
        <span class="breadcrumb-separator">/</span>
        <a href="../../nepal-trekking-packages/">All Treks</a>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-current">Upper Mustang Trek</span>
      </nav>

      <!-- Trek Hero Header -->
      <header class="trek-hero-header" style="margin-bottom: 25px;">
        <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin-bottom: 12px;">
          <span class="badge badge-alpine" style="font-size: 0.85rem; padding: 6px 14px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; background: #e6f7f0; color: #008060; border-radius: 50px;">
            Mustang Region • The Ancient Walled Kingdom of Lo
          </span>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.85rem; background: #f8fafc; padding: 4px 10px; border-radius: 6px; border: 1px solid #e2e8f0;">
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span style="font-weight: 700; color: #0f172a;">5.0</span>
            <span style="color: #FBBF24; display: inline-flex; gap: 1px; font-size: 0.9rem;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </span>
            <span><strong style="font-weight: 600; color: #0f172a;">184</strong> reviews on Google</span>
          </div>
        </div>
        <h1 style="font-size: 2.8rem; margin-top: 6px; margin-bottom: 8px; color: var(--color-primary-navy);">Upper Mustang Trek (17 Days)</h1>
        <p style="font-size: 1.15rem; color: var(--color-neutral-600); line-height: 1.7; margin-top: 12px; margin-bottom: 0;">
          The Upper Mustang Trek is a remarkable Himalayan journey into the remote trans-Himalayan landscapes of northern Nepal, where dramatic mountain scenery, ancient settlements, Tibetan-influenced culture, Buddhist heritage and the historic walled city of Lo Manthang come together in one of Nepal’s most distinctive trekking experiences.
          <span id="ebc-more-text" style="display: none;">
            Unlike many popular routes that pass through dense forests and glacial valleys, Upper Mustang has a dry, rugged character with wide barren valleys, wind-carved cliffs, exposed ridgelines, and traditional villages built of stone and mud. Located in the rain shadow of the Annapurna and Dhaulagiri massifs, this 17-day journey offers exceptional trekking throughout spring, autumn, and summer monsoon months.
          </span>
          <button id="ebc-read-more-btn" style="background: none; border: none; color: var(--color-primary-navy); font-weight: 700; cursor: pointer; padding: 0 0 0 6px; font-size: 1.05rem; text-decoration: underline;" onclick="const t = document.getElementById('ebc-more-text'); if(t.style.display==='none'){t.style.display='inline'; this.textContent='Read less';} else {t.style.display='none'; this.textContent='Read more';}">Read more</button>
        </p>
      </header>

      <!-- Trek Hero Image Gallery Grid -->
      <div class="gallery-grid" style="display: grid; grid-template-columns: 2fr 1fr 1fr; grid-template-rows: repeat(2, 220px); gap: 12px; margin-bottom: 35px; border-radius: var(--radius-lg); overflow: hidden;">
        <div style="grid-column: 1 / 2; grid-row: 1 / 3; position: relative;">
          <img src="../../images/treks/upper-mustang/upper-mustang-lo-manthang-walled-city-01.jpg" alt="Ancient Walled City of Lo Manthang" style="width: 100%; height: 100%; object-fit: cover;">
          <span style="position: absolute; bottom: 12px; left: 12px; background: rgba(12, 43, 78, 0.75); backdrop-filter: blur(4px); color: #ffffff; padding: 6px 14px; border-radius: 6px; font-size: 0.85rem; font-weight: 600;">Lo Manthang Walled City</span>
        </div>
        <div style="position: relative;">
          <img src="../../images/treks/upper-mustang/upper-mustang-drakmar-red-cliffs-02.jpg" alt="Red Sandstone Cliffs of Drakmar" style="width: 100%; height: 100%; object-fit: cover;">
          <span style="position: absolute; bottom: 8px; left: 8px; background: rgba(12, 43, 78, 0.75); color: #ffffff; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Drakmar Red Cliffs</span>
        </div>
        <div style="position: relative;">
          <img src="../../images/treks/upper-mustang/upper-mustang-chhoser-sky-caves-03.jpg" alt="Chhoser Ancient Sky Caves" style="width: 100%; height: 100%; object-fit: cover;">
          <span style="position: absolute; bottom: 8px; left: 8px; background: rgba(12, 43, 78, 0.75); color: #ffffff; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Chhoser Sky Caves</span>
        </div>
        <div style="position: relative;">
          <img src="../../images/treks/upper-mustang/upper-mustang-kagbeni-gateway-04.jpg" alt="Kagbeni Gateway Village" style="width: 100%; height: 100%; object-fit: cover;">
          <span style="position: absolute; bottom: 8px; left: 8px; background: rgba(12, 43, 78, 0.75); color: #ffffff; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Kagbeni Gateway</span>
        </div>
        <div style="position: relative;">
          <img src="../../images/hero-himalayas.jpg" alt="Trans-Himalayan Mountains" style="width: 100%; height: 100%; object-fit: cover;">
          <span style="position: absolute; bottom: 8px; left: 8px; background: rgba(12, 43, 78, 0.75); color: #ffffff; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Nilgiri & Dhaulagiri</span>
        </div>
      </div>
    </div>

    <!-- Key Trip Facts Section -->
    <div class="container" style="margin-bottom: 35px;">
      <div style="background: #ffffff; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-lg); padding: 28px; box-shadow: var(--shadow-sm);">
        <h2 style="font-size: 1.35rem; color: var(--color-primary-navy); margin-bottom: 22px; font-weight: 700; border-bottom: 1px solid var(--color-neutral-100); padding-bottom: 12px;">
          Key Trip Facts
        </h2>
        
        <style>
          .trip-fact-item {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 8px 12px;
            border-radius: 8px;
            transition: all 0.2s ease;
          }
          .trip-fact-item:hover {
            background-color: #f8fafc;
            transform: translateY(-2px);
          }
        </style>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 16px 24px;">
          
          <!-- 1. Duration -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Duration</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">17 Days</span>
            </div>
          </div>

          <!-- 2. Difficulty -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Difficulty</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Moderate</span>
            </div>
          </div>

          <!-- 3. Max Altitude -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Max Altitude</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;" data-altitude-m="3840">3,840 m (Passes ~4,010 m)</span>
            </div>
          </div>

          <!-- 4. Destination -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Destination</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Upper Mustang, Nepal</span>
            </div>
          </div>

          <!-- 5. Activity -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="m9 20 3-6 3 6"/><path d="m6 8 6 2 6-2"/><path d="M12 10v4"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Activity</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Restricted Trekking</span>
            </div>
          </div>

          <!-- 6. Accommodation -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Accommodation</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Hotels & Mountain Lodges</span>
            </div>
          </div>

          <!-- 7. Transport -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Transport</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Flights (PKR–JOM) & Private Road</span>
            </div>
          </div>

          <!-- 8. Meals -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Meals</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Full Board on Trek (B.L.D.)</span>
            </div>
          </div>

          <!-- 9. Season -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Season</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Mar–Nov (Inc. Monsoon!)</span>
            </div>
          </div>

          <!-- 10. Trek Starts -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><polygon points="12 7 17 12 12 17 12 7"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek Starts</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Jomsom / Kagbeni</span>
            </div>
          </div>

          <!-- 11. Trek End At -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek End At</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Jomsom (2,720 m)</span>
            </div>
          </div>

          <!-- 12. Trek Region -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek Region</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Upper Mustang (Restricted)</span>
            </div>
          </div>

          <!-- 13. Package Start Point -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Package Start Point</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Kathmandu (1,355 m)</span>
            </div>
          </div>

          <!-- 14. Package End Point -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Package End Point</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Kathmandu (1,355 m)</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Trust Badges Section -->
    <div class="container" style="margin-bottom: 30px;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
        
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--color-primary-navy); line-height: 1.3;">Instant booking & permit support</span>
        </div>
      </div>
    </div>

    <!-- Sticky Sub-Navigation Bar -->
    <div class="trek-sub-nav-wrapper" style="position: sticky; top: 0; z-index: 100; background: #ffffff; border-bottom: 1px solid var(--color-neutral-100); box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
      <div class="container">
        <div class="trek-sub-nav-scroll" style="display: flex; gap: 4px; overflow-x: auto; padding: 10px 0; scrollbar-width: none;">
          <button class="trek-sub-nav-btn active" data-tab="overview">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>Overview
          </button>
          <button class="trek-sub-nav-btn" data-tab="itinerary">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Itinerary
          </button>
          <button class="trek-sub-nav-btn" data-tab="includes">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Includes &amp; Excludes
          </button>
          <button class="trek-sub-nav-btn" data-tab="dates">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>Dates &amp; Prices
          </button>
          <button class="trek-sub-nav-btn" data-tab="packing">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>Packing List
          </button>
          <button class="trek-sub-nav-btn" data-tab="details">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>Trip Details
          </button>
          <button class="trek-sub-nav-btn" data-tab="altitude">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>Altitude
          </button>
          <button class="trek-sub-nav-btn" data-tab="weather">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>Weather
          </button>
          <button class="trek-sub-nav-btn" data-tab="map">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>Route Map
          </button>
          <button class="trek-sub-nav-btn" data-tab="reviews">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>Reviews
          </button>
          <button class="trek-sub-nav-btn" data-tab="faqs">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="12" r="10"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>FAQs
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content Layout with Sticky Booking Sidebar -->
    <section class="section-padding" style="padding-top: 10px;" data-trek-details-wrapper data-trek-key="mustang">
      <div class="container" style="display: grid; grid-template-columns: 2.2fr 1fr; gap: 40px;">
        
        <!-- Main Details Column (Sequential Sections) -->
        <div style="min-width: 0;">
          
          `;

content = content.replace(heroTargetRegex, newHeroAndFacts);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated Head, Meta, Schema, Hero, and Key Facts for Upper Mustang.');
