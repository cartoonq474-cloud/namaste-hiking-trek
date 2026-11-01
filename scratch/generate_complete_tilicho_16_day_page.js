const fs = require('fs');
const path = require('path');

const {
  daysData,
  dayPhotos,
  headerHtml,
  footerHtml,
  bottomScripts
} = require('./build_tilicho_16_day_page.js');

const guidesData = require('./tilicho_guides.js');

console.log('Generating complete 16-day Annapurna Circuit Trek with Tilicho Lake...');

// 1. Schema JSON-LD
const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristTrip",
      "@id": "https://namastehikingtrek.com/trek/annapurna-circuit-trek-with-tilicho-lake/#trip",
      "name": "Annapurna Circuit Trek with Tilicho Lake (16 Days)",
      "description": "The best-known and most rewarding high-altitude trek, the Annapurna Circuit with Tilicho Lake Trek takes one on a 16-day journey from green, misty valleys and terraced fields to the high alpine desert of Manang and Mustang. Includes Tilicho Lake (4,919m), Thorong La Pass (5,416m), sacred Muktinath, and domestic flights from Jomsom to Pokhara and Pokhara to Kathmandu.",
      "touristType": ["Hikers", "Trekking Enthusiasts", "High Altitude Adventurers"],
      "duration": "P16D",
      "subTrip": daysData.map((d, i) => ({
        "@type": "TouristTrip",
        "name": `Day ${d.day}: ${d.title}`,
        "description": d.description_text.slice(0, 160) + "..."
      })),
      "offers": {
        "@type": "Offer",
        "price": "1249",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://namastehikingtrek.com/trek/annapurna-circuit-trek-with-tilicho-lake/"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "348",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://namastehikingtrek.com/trek/annapurna-circuit-trek-with-tilicho-lake/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://namastehikingtrek.com/" },
        { "@type": "ListItem", "position": 2, "name": "All Treks", "item": "https://namastehikingtrek.com/nepal-trekking-packages/" },
        { "@type": "ListItem", "position": 3, "name": "Annapurna Region", "item": "https://namastehikingtrek.com/annapurna-region-treks/" },
        { "@type": "ListItem", "position": 4, "name": "Annapurna Circuit Trek with Tilicho Lake (16 Days)", "item": "https://namastehikingtrek.com/trek/annapurna-circuit-trek-with-tilicho-lake/" }
      ]
    }
  ]
};

// 2. Key Trip Facts for 16 Days
const keyTripFacts = [
  { fact: "Duration", value: "16 calendar days, including Kathmandu arrival & departure" },
  { fact: "Core journey", value: "Kathmandu → Besisahar → Jagat → Dharapani → Chame → Upper Pisang → Manang → Tilicho Base Camp → Tilicho Lake (4,919 m) → Siri Kharka → Yak Kharka → Thorong Phedi → Thorong La Pass (5,416 m) → Muktinath → Jomsom → Flight to Pokhara → Flight to Kathmandu" },
  { fact: "Highest point", value: "Thorong La Pass, approximately 5,416 m (17,769 ft), on Day 12" },
  { fact: "Tilicho Lake", value: "Approximately 4,919 m (16,138 ft); Day 9 high-altitude lake excursion" },
  { fact: "Acclimatization", value: "Day 7 dedicated exploration in Manang (3,500 m); high staging at Tilicho Base Camp (4,150 m)" },
  { fact: "Domestic flights", value: "Jomsom to Pokhara flight (Day 14) + Pokhara to Kathmandu flight (Day 15) included" },
  { fact: "Pre-pass overnight", value: "Day 11 Thorong Phedi (~4,450 m / 14,599 ft)" },
  { fact: "Travel style", value: "High-altitude teahouse walking with scenic private road transitions & 2 domestic mountain flights" },
  { fact: "Price", value: "From $1,249 per person (all permits, flights, hotels, meals & guide included)" }
];

// 3. Highlights at a glance
const highlightsAtAGlance = [
  { highlight: "Tilicho Lake (4,919 m)", significance: "Glacial alpine marvel, one of the highest accessible lakes in the world nestled beneath Tilicho Peak" },
  { highlight: "Thorong La Pass (5,416 m)", significance: "The crowning 5,416 m pass crossing connecting the Marsyangdi Valley to the Mustang kingdom" },
  { highlight: "Two Scenic Domestic Flights", significance: "Spectacular mountain flight from Jomsom to Pokhara, and flight from Pokhara to Kathmandu included" },
  { highlight: "Manang Village (3,500 m)", significance: "Historic Tibetan-Buddhist settlement and crucial high-altitude acclimatization hub with Gangapurna Lake" },
  { highlight: "Khangsar & Siri Kharka", significance: "Ancient traditional stone settlements marking the remote gateway into the wild Tilicho territory" },
  { highlight: "Marsyangdi to Kali Gandaki", significance: "Incredible geographical shift from lush subtropical waterfalls to stark trans-Himalayan rain-shadow deserts" },
  { highlight: "Muktinath Holy Sanctuary", significance: "Sacred pilgrimage complex with 108 eternal water spouts revered by both Hindus and Buddhists" },
  { highlight: "Annapurna & Dhaulagiri Vistas", significance: "Panoramic close-up views of Annapurna I, II, III, IV, Gangapurna, Tilicho Peak, and Dhaulagiri (8,167 m)" }
];

// 4. Comparison Table (Classic 14-Day vs Tilicho 16-Day)
const comparisonData = [
  { feature: "Main route", classic: "Marsyangdi Valley → Thorong La → Muktinath → Jomsom", tilicho: "Marsyangdi Valley → Manang → Tilicho Lake detour → Thorong La → Muktinath → Jomsom" },
  { feature: "Tilicho Lake", classic: "Not included (bypassed at Manang)", tilicho: "Included as a major high-altitude objective (4,919 m / 16,138 ft)" },
  { feature: "Thorong La Pass", classic: "Included (Day 9 or 10)", tilicho: "Included (Day 12, with superior physiological pre-acclimatization)" },
  { feature: "Domestic Flights", classic: "Jomsom to Pokhara (standard)", tilicho: "Both Jomsom to Pokhara (Day 14) & Pokhara to Kathmandu (Day 15) included" },
  { feature: "Total Duration", classic: "12–14 calendar days", tilicho: "16 calendar days (full circle with optimal safety and recovery)" },
  { feature: "Physical Demand", classic: "Moderate to Challenging", tilicho: "Strenuous (two high-altitude objectives above 4,900 m)" },
  { feature: "Acclimatization", classic: "1 day in Manang", tilicho: "Manang rest day + 2 progressive high-altitude nights at 4,150m & 4,060m" }
];

// Generate Itinerary Cards HTML
function generateItineraryCards() {
  return daysData.map((d, index) => {
    const photo = dayPhotos[index] || dayPhotos[0];
    const isFirst = index === 0;
    
    // Parse elevation / metrics
    let elevation = "1,355 m / 4,445 ft";
    let distance = "Transfer";
    if (d.day === 2) { elevation = "1,300 m / 4,265 ft"; distance = "286 km (Drive)"; }
    else if (d.day === 3) { elevation = "1,960 m / 6,430 ft"; distance = "12 km"; }
    else if (d.day === 4) { elevation = "2,630 m / 8,628 ft"; distance = "15 km"; }
    else if (d.day === 5) { elevation = "3,300 m / 10,826 ft"; distance = "13.9 km"; }
    else if (d.day === 6) { elevation = "3,500 m / 11,482 ft"; distance = "16 km"; }
    else if (d.day === 7) { elevation = "3,500 m - 3,800 m"; distance = "4 - 6 km (Hike)"; }
    else if (d.day === 8) { elevation = "4,150 m / 13,615 ft"; distance = "19.1 km"; }
    else if (d.day === 9) { elevation = "4,919 m / 16,138 ft (High Point)"; distance = "15 km"; }
    else if (d.day === 10) { elevation = "4,050 m / 13,287 ft"; distance = "11.1 km"; }
    else if (d.day === 11) { elevation = "4,450 m / 14,599 ft"; distance = "8.5 km"; }
    else if (d.day === 12) { elevation = "5,416 m Pass / 3,710 m Muktinath"; distance = "16.4 km"; }
    else if (d.day === 13) { elevation = "2,720 m / 8,923 ft"; distance = "20.2 km"; }
    else if (d.day === 14) { elevation = "822 m / 2,696 ft"; distance = "Flight (25 min)"; }
    else if (d.day === 15) { elevation = "1,355 m / 4,445 ft"; distance = "Flight (25 min)"; }
    else if (d.day === 16) { elevation = "1,355 m / 4,445 ft"; distance = "Departure Transfer"; }

    return `
      <div class="itinerary-card ${isFirst ? 'active' : ''}" data-day="${d.day}" id="day-${d.day}">
        <div class="itinerary-card-header" onclick="toggleItineraryDay(${d.day})">
          <div class="itinerary-day-badge">Day ${String(d.day).padStart(2, '0')}</div>
          <div class="itinerary-header-info">
            <h3 class="itinerary-day-title">${d.title}</h3>
            <div class="itinerary-meta-pills">
              <span class="meta-pill"><i class="fa-solid fa-clock"></i> ${d.walking_hours}</span>
              <span class="meta-pill"><i class="fa-solid fa-mountain"></i> ${elevation}</span>
              <span class="meta-pill"><i class="fa-solid fa-route"></i> ${distance}</span>
              <span class="meta-pill"><i class="fa-solid fa-bed"></i> ${d.accommodation}</span>
              <span class="meta-pill"><i class="fa-solid fa-utensils"></i> ${d.meals}</span>
            </div>
          </div>
          <div class="itinerary-toggle-icon">
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div class="itinerary-card-body" style="${isFirst ? 'display: block;' : 'display: none;'}">
          <div class="itinerary-body-grid">
            <div class="itinerary-photo-col">
              <img src="../../images/treks/annapurna-circuit/${photo.img}" 
                   alt="${photo.alt}" 
                   class="itinerary-day-img" 
                   loading="lazy">
              <div class="itinerary-photo-caption">${photo.alt}</div>
            </div>
            <div class="itinerary-content-col">
              ${d.description_html}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('\n');
}

// 5. Build Complete Page HTML
function buildPage(isCanonicalSlug) {
  const canonicalUrl = isCanonicalSlug 
    ? "https://namastehikingtrek.com/trek/annapurna-circuit-trek-with-tilicho-lake/"
    : "https://namastehikingtrek.com/trek/tilicho-lake-trek/";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Annapurna Circuit Trek with Tilicho Lake (16 Days) — Namaste Hiking Trek</title>
  <meta name="description" content="Embark on the 16-day Annapurna Circuit Trek with Tilicho Lake. Ascend to turquoise Tilicho Lake (4,919m), conquer Thorong La Pass (5,416m), explore sacred Muktinath, and enjoy domestic flights from Jomsom to Pokhara and Kathmandu.">
  <!-- Canonical URL -->
  <link rel="canonical" href="https://namastehikingtrek.com/trek/annapurna-circuit-trek-with-tilicho-lake/" />

  <!-- Favicon & Touch Icons -->
  <link rel="icon" type="image/png" href="../../images/logo.png">
  <link rel="apple-touch-icon" href="../../images/logo.png">

  <!-- Open Graph / Social Media Metadata -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://namastehikingtrek.com/trek/annapurna-circuit-trek-with-tilicho-lake/">
  <meta property="og:title" content="Annapurna Circuit Trek with Tilicho Lake (16 Days) — Namaste Hiking Trek">
  <meta property="og:description" content="Embark on an epic 16-day Himalayan journey combining the turquoise alpine spectacle of Tilicho Lake (4,919m) and the iconic crossing of Thorong La Pass (5,416m). Features Manang, Khangsar, Muktinath, Kali Gandaki, and flights to Pokhara & Kathmandu.">
  <meta property="og:image" content="https://namastehikingtrek.com/images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-tilicho-lake-14.jpg">

  <!-- Twitter Card Metadata -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Annapurna Circuit Trek with Tilicho Lake (16 Days) — Namaste Hiking Trek">
  <meta name="twitter:description" content="Embark on an epic 16-day Himalayan journey combining the turquoise alpine spectacle of Tilicho Lake (4,919m) and the iconic crossing of Thorong La Pass (5,416m). Features Manang, Khangsar, Muktinath, Kali Gandaki, and flights to Pokhara & Kathmandu.">
  <meta name="twitter:image" content="https://namastehikingtrek.com/images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-tilicho-lake-14.jpg">

  <!-- Static JSON-LD Structured Data -->
  <script type="application/ld+json">
${JSON.stringify(schemaJsonLd, null, 2)}
  </script>

  <link rel="stylesheet" href="../../index.css?v=7">
  <style>
    .trek-sub-nav-btn.active {
      border-bottom-color: var(--color-copper-orange) !important;
    }
    .gear-section-title {
      border-left-color: var(--color-copper-orange) !important;
    }
    .trip-fact-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 14px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
    }
    .trip-fact-icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: #e6f5ef;
      color: #008060;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      flex-shrink: 0;
    }
    .itinerary-card {
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      margin-bottom: 16px;
      background: #ffffff;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
      transition: all 0.25s ease;
    }
    .itinerary-card:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      border-color: #cbd5e1;
    }
    .itinerary-card.active {
      border-color: #008060;
      box-shadow: 0 4px 14px rgba(0,128,96,0.12);
    }
    .itinerary-card-header {
      padding: 16px 20px;
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      user-select: none;
      background: #ffffff;
    }
    .itinerary-day-badge {
      background: #008060;
      color: #ffffff;
      font-size: 0.85rem;
      font-weight: 700;
      padding: 6px 14px;
      border-radius: 20px;
      letter-spacing: 0.5px;
      flex-shrink: 0;
    }
    .itinerary-card.active .itinerary-day-badge {
      background: #e07a5f;
    }
    .itinerary-header-info {
      flex: 1;
    }
    .itinerary-day-title {
      font-size: 1.08rem;
      font-weight: 700;
      color: #1e293b;
      margin: 0 0 6px 0;
    }
    .itinerary-meta-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .meta-pill {
      font-size: 0.78rem;
      color: #64748b;
      background: #f1f5f9;
      padding: 3px 8px;
      border-radius: 4px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .meta-pill i {
      color: #008060;
      font-size: 0.72rem;
    }
    .itinerary-toggle-icon {
      font-size: 1rem;
      color: #94a3b8;
      transition: transform 0.25s ease;
    }
    .itinerary-card.active .itinerary-toggle-icon {
      transform: rotate(180deg);
      color: #008060;
    }
    .itinerary-card-body {
      padding: 20px;
      border-top: 1px solid #f1f5f9;
      background: #fafbfc;
    }
    .itinerary-body-grid {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 24px;
    }
    @media (max-width: 868px) {
      .itinerary-body-grid {
        grid-template-columns: 1fr;
      }
    }
    .itinerary-day-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }
    .itinerary-photo-caption {
      font-size: 0.78rem;
      color: #64748b;
      margin-top: 6px;
      font-style: italic;
      text-align: center;
    }
    .itinerary-content-col {
      font-size: 0.95rem;
      line-height: 1.7;
      color: #334155;
    }
    .itinerary-content-col p {
      margin-bottom: 12px;
    }
    .itinerary-content-col strong {
      color: #1e293b;
    }
  </style>
</head>
<body class="trek-detail-page">

  <!-- Header -->
  ${headerHtml}

  <!-- Breadcrumbs -->
  <nav class="breadcrumb-container" aria-label="Breadcrumb">
    <div class="container">
      <ol class="breadcrumb-list">
        <li><a href="../../">Home</a></li>
        <li><a href="../../nepal-trekking-packages/">All Treks</a></li>
        <li><a href="../../annapurna-region-treks/">Annapurna Region</a></li>
        <li aria-current="page">Annapurna Circuit Trek with Tilicho Lake (16 Days)</li>
      </ol>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="trek-hero-section">
    <div class="container">
      <div class="trek-hero-header">
        <div class="trek-hero-badges">
          <span class="badge badge-featured"><i class="fa-solid fa-star"></i> 16 Days Classic Circuit & High Lake</span>
          <span class="badge badge-difficulty"><i class="fa-solid fa-gauge-high"></i> Strenuous</span>
          <span class="badge badge-altitude"><i class="fa-solid fa-mountain"></i> Max Alt: 5,416m (Thorong La)</span>
          <span class="badge badge-lake"><i class="fa-solid fa-water"></i> Tilicho Lake: 4,919m</span>
          <span class="badge badge-flight"><i class="fa-solid fa-plane"></i> Jomsom & Pokhara Flights Included</span>
        </div>
        <h1 class="trek-hero-title">Annapurna Circuit Trek with Tilicho Lake (16 Days)</h1>
        <p class="trek-hero-subtitle">
          The ultimate Himalayan grand loop uniting the turquoise alpine spectacle of Tilicho Lake (4,919 m), the crowning crossing of Thorong La Pass (5,416 m), sacred Muktinath pilgrimage sanctuary, and mountain flights between Jomsom, Pokhara, and Kathmandu.
        </p>
        <div class="trek-rating-bar">
          <div class="stars">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <span class="rating-text"><strong>4.9</strong> / 5.0 (348 verified trekker reviews)</span>
          <span class="rating-divider">•</span>
          <span class="booking-stat"><i class="fa-solid fa-person-hiking"></i> 100% Guaranteed Departures</span>
        </div>
      </div>

      <!-- Quick Stats Ribbon -->
      <div class="trek-facts-ribbon">
        <div class="ribbon-item">
          <div class="ribbon-icon"><i class="fa-solid fa-calendar-days"></i></div>
          <div class="ribbon-text">
            <span class="ribbon-label">Duration</span>
            <span class="ribbon-val">16 Days / 15 Nights</span>
          </div>
        </div>
        <div class="ribbon-item">
          <div class="ribbon-icon"><i class="fa-solid fa-mountain-sun"></i></div>
          <div class="ribbon-text">
            <span class="ribbon-label">Highest Altitude</span>
            <span class="ribbon-val">5,416 m / 17,769 ft</span>
          </div>
        </div>
        <div class="ribbon-item">
          <div class="ribbon-icon"><i class="fa-solid fa-water"></i></div>
          <div class="ribbon-text">
            <span class="ribbon-label">Lake Elevation</span>
            <span class="ribbon-val">4,919 m (Tilicho Lake)</span>
          </div>
        </div>
        <div class="ribbon-item">
          <div class="ribbon-icon"><i class="fa-solid fa-plane-departure"></i></div>
          <div class="ribbon-text">
            <span class="ribbon-label">Domestic Flights</span>
            <span class="ribbon-val">Jomsom-PKR & PKR-KTM</span>
          </div>
        </div>
        <div class="ribbon-item">
          <div class="ribbon-icon"><i class="fa-solid fa-hotel"></i></div>
          <div class="ribbon-text">
            <span class="ribbon-label">Accommodation</span>
            <span class="ribbon-val">Hotels & Alpine Teahouses</span>
          </div>
        </div>
      </div>

      <!-- Hero Gallery Grid -->
      <div class="trek-hero-gallery">
        <div class="gallery-main-img">
          <img src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-tilicho-lake-14.jpg" 
               alt="Trekkers arriving at the turquoise waters of Tilicho Lake at 4919m" 
               id="heroMainPhoto">
          <div class="gallery-badge"><i class="fa-solid fa-camera"></i> Tilicho Lake (4,919 m) & Thorong La Circuit</div>
        </div>
        <div class="gallery-sub-grid">
          <div class="sub-img-wrap">
            <img src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-ridge-trail-09.jpg" 
                 alt="Thorong La Pass prayer flags at 5,416m"
                 loading="lazy">
          </div>
          <div class="sub-img-wrap">
            <img src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-manang-gate-15.jpg" 
                 alt="Trekkers entering Manang village"
                 loading="lazy">
          </div>
          <div class="sub-img-wrap">
            <img src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-steep-trail-06.jpg" 
                 alt="Trail leading towards Tilicho Base Camp"
                 loading="lazy">
          </div>
          <div class="sub-img-wrap view-all-trigger">
            <img src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-rocky-valley-12.jpg" 
                 alt="Lower Mustang and Kali Gandaki Valley near Jomsom"
                 loading="lazy">
            <div class="view-all-overlay">
              <i class="fa-solid fa-images"></i>
              <span>19 Photos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sticky In-Page Navigation Bar -->
  <nav class="trek-sticky-subnav" id="trekSubNav">
    <div class="container">
      <div class="trek-subnav-items">
        <a href="#overview" class="trek-subnav-link active"><i class="fa-solid fa-compass"></i> Overview</a>
        <a href="#itinerary" class="trek-subnav-link"><i class="fa-solid fa-list-ol"></i> 16-Day Itinerary</a>
        <a href="#inclusions" class="trek-subnav-link"><i class="fa-solid fa-circle-check"></i> Inclusions</a>
        <a href="#altitude-weather" class="trek-subnav-link"><i class="fa-solid fa-chart-line"></i> Altitude & Weather</a>
        <a href="#guides" class="trek-subnav-link"><i class="fa-solid fa-book-open"></i> Trip Guides</a>
        <a href="#faqs" class="trek-subnav-link"><i class="fa-solid fa-circle-question"></i> FAQs</a>
        <a href="#reviews" class="trek-subnav-link"><i class="fa-solid fa-comments"></i> Reviews</a>
        <a href="#booking-section" class="trek-subnav-link btn-subnav-book"><i class="fa-solid fa-bolt"></i> Book Now</a>
      </div>
    </div>
  </nav>

  <!-- Main Detail Layout (Content + Sticky Sidebar) -->
  <main class="container trek-detail-main">
    <div class="trek-detail-layout">

      <!-- LEFT COLUMN: MAIN CONTENT -->
      <div class="trek-detail-content">

        <!-- Section 1: Overview -->
        <section id="overview" class="detail-section">
          <div class="section-title-wrap">
            <span class="section-kicker">Trip Summary & Character</span>
            <h2 class="section-heading">Overview of the 16-Day Annapurna Circuit with Tilicho Lake</h2>
          </div>
          <div class="section-prose">
            <p>
              The best-known and most rewarding high-altitude trek in the Nepal Himalaya, the <strong>Annapurna Circuit Trek with Tilicho Lake (16 Days)</strong> takes adventurous travelers on an unforgettable circular journey from the emerald green subtropical valleys of the lower Marsyangdi River to the stark high-altitude desert plateaus of Manang and Mustang.
            </p>
            <p>
              While classic itineraries rush directly across Thorong La Pass, this comprehensive 16-day program includes the legendary excursion to <strong>Tilicho Lake (4,919 m / 16,138 ft)</strong>—one of the highest accessible alpine lakes in the world, surrounded by towering vertical rock barriers and hanging glaciers. Reaching Tilicho Lake not only presents a dramatic visual centerpiece but also primes your body with exceptional physiological pre-acclimatization before confronting the <strong>Thorong La Pass (5,416 m / 17,769 ft)</strong>.
            </p>
            <p>
              After conquering Thorong La, the trek descends into the spiritual and geographical wonderland of Lower Mustang and the Kali Gandaki Valley. You explore sacred <strong>Muktinath Temple</strong>, wander wind-sculpted stone alleys in <strong>Jomsom</strong>, and board a panoramic domestic flight through the world's deepest river gorge directly to <strong>Pokhara</strong> lakeside, followed by a domestic flight to <strong>Kathmandu</strong>.
            </p>
          </div>

          <!-- Key Trip Facts Table -->
          <div class="key-facts-card" style="margin: 28px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin: 0 0 16px 0; display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-clipboard-list" style="color: #008060;"></i> Key Trip Facts: 16-Day Itinerary
            </h3>
            <div class="table-responsive" style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: left;">
                <tbody>
                  ${keyTripFacts.map(f => `
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 14px; font-weight: 600; color: #1e293b; width: 25%; min-width: 150px; background: #fafbfc;">${f.fact}</td>
                      <td style="padding: 12px 14px; color: #475569;">${f.value}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Route Comparison Table -->
          <div class="comparison-card" style="margin: 28px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin: 0 0 16px 0; display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-code-compare" style="color: #e07a5f;"></i> Route Comparison: Classic Circuit vs. Tilicho Circuit
            </h3>
            <div class="table-responsive" style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.92rem;">
                <thead>
                  <tr style="background: #f1f5f9; border-bottom: 2px solid #e2e8f0;">
                    <th style="padding: 12px 14px; font-weight: 700; color: #1e293b;">Feature</th>
                    <th style="padding: 12px 14px; font-weight: 700; color: #475569;">Classic Annapurna Circuit (14 Days)</th>
                    <th style="padding: 12px 14px; font-weight: 700; color: #008060;">This Itinerary: With Tilicho Lake (16 Days)</th>
                  </tr>
                </thead>
                <tbody>
                  ${comparisonData.map(c => `
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 14px; font-weight: 600; color: #1e293b; background: #fafbfc;">${c.feature}</td>
                      <td style="padding: 12px 14px; color: #64748b;">${c.classic}</td>
                      <td style="padding: 12px 14px; color: #0f172a; font-weight: 500; background: #f0fdf4;">${c.tilicho}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Highlights at a glance -->
          <div class="highlights-card" style="margin: 28px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin: 0 0 16px 0; display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-wand-magic-sparkles" style="color: #008060;"></i> Highlights at a Glance
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;">
              ${highlightsAtAGlance.map(h => `
                <div style="display: flex; gap: 12px; padding: 12px; background: #fafbfc; border: 1px solid #e2e8f0; border-radius: 8px;">
                  <i class="fa-solid fa-circle-check" style="color: #008060; font-size: 1.1rem; margin-top: 2px;"></i>
                  <div>
                    <h4 style="font-size: 0.95rem; font-weight: 700; color: #1e293b; margin: 0 0 4px 0;">${h.highlight}</h4>
                    <p style="font-size: 0.85rem; color: #64748b; margin: 0; line-height: 1.5;">${h.significance}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Section 2: 16-Day Detailed Itinerary -->
        <section id="itinerary" class="detail-section">
          <div class="section-title-wrap" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 16px;">
            <div>
              <span class="section-kicker">Day-by-Day Trail Plan</span>
              <h2 class="section-heading">Complete 16-Day Itinerary</h2>
            </div>
            <div class="itinerary-controls">
              <button type="button" class="btn btn-outline btn-sm" id="toggleAllDaysBtn" onclick="toggleAllDays()">
                <i class="fa-solid fa-arrows-up-down"></i> <span id="toggleAllDaysText">Expand All Days</span>
              </button>
            </div>
          </div>

          <div class="itinerary-list" style="margin-top: 24px;">
            ${generateItineraryCards()}
          </div>
        </section>

        <!-- Section 3: Inclusions & Exclusions -->
        <section id="inclusions" class="detail-section">
          <div class="section-title-wrap">
            <span class="section-kicker">Pricing Transparency</span>
            <h2 class="section-heading">Package Inclusions & Exclusions</h2>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 24px;">
            <!-- Included -->
            <div style="background: #ffffff; border: 1px solid #bbf7d0; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
              <h3 style="font-size: 1.2rem; font-weight: 700; color: #166534; margin: 0 0 16px 0; display: flex; align-items: center; gap: 10px;">
                <i class="fa-solid fa-circle-check" style="color: #16a34a;"></i> What is Included
              </h3>
              <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; font-size: 0.92rem; color: #334155;">
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-check" style="color: #16a34a; margin-top: 4px;"></i> <span><strong>Airport Transfers:</strong> Private arrival and departure transfers at Kathmandu Tribhuvan International Airport.</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-check" style="color: #16a34a; margin-top: 4px;"></i> <span><strong>Kathmandu Accommodation:</strong> 2 Nights in a standard 3-star hotel in Thamel with breakfast.</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-check" style="color: #16a34a; margin-top: 4px;"></i> <span><strong>Pokhara Accommodation:</strong> 1 Night in a quality 3-star lakeside hotel with breakfast.</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-check" style="color: #16a34a; margin-top: 4px;"></i> <span><strong>Teahouse Accommodation:</strong> 12 Nights in handpicked mountain lodges (private bathrooms in Manang and Jomsom where available).</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-check" style="color: #16a34a; margin-top: 4px;"></i> <span><strong>All Meals on Trek:</strong> Full board (13 breakfasts, 12 lunches, 12 dinners) with hot tea or coffee after meals.</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-check" style="color: #16a34a; margin-top: 4px;"></i> <span><strong>Domestic Flight 1:</strong> Scheduled mountain flight from Jomsom to Pokhara (including airport taxes & 15kg luggage).</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-check" style="color: #16a34a; margin-top: 4px;"></i> <span><strong>Domestic Flight 2:</strong> Scheduled flight from Pokhara to Kathmandu (including airport taxes & 15kg luggage).</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-check" style="color: #16a34a; margin-top: 4px;"></i> <span><strong>Overland Transport:</strong> Kathmandu to Jagat via Besisahar by comfortable tourist vehicle / shared private jeep.</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-check" style="color: #16a34a; margin-top: 4px;"></i> <span><strong>Expert Trekking Guide:</strong> Government-certified, English-speaking guide trained in high-altitude medicine.</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-check" style="color: #16a34a; margin-top: 4px;"></i> <span><strong>Mountain Porters:</strong> 1 porter for every 2 trekkers (carries up to 20–25 kg total luggage).</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-check" style="color: #16a34a; margin-top: 4px;"></i> <span><strong>Staff Welfare:</strong> Complete salary, meals, lodging, equipment, and insurance for all guides and porters.</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-check" style="color: #16a34a; margin-top: 4px;"></i> <span><strong>Official Permits:</strong> Annapurna Conservation Area Project (ACAP) permit and TIMS Trekkers' Card.</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-check" style="color: #16a34a; margin-top: 4px;"></i> <span><strong>Medical Safety:</strong> Pulse oximeter monitoring daily and comprehensive mountain first-aid medical kit.</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-check" style="color: #16a34a; margin-top: 4px;"></i> <span><strong>Trekking Gear:</strong> Namaste Hiking Trek water-resistant duffel bag (yours to keep) and route map.</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-check" style="color: #16a34a; margin-top: 4px;"></i> <span><strong>Celebration Dinner:</strong> Authentic farewell dinner in Kathmandu featuring live Nepali traditional cultural dance.</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-check" style="color: #16a34a; margin-top: 4px;"></i> <span><strong>Taxes & Fees:</strong> All government taxes, VAT, and official service charges included.</span></li>
              </ul>
            </div>

            <!-- Excluded -->
            <div style="background: #ffffff; border: 1px solid #fecaca; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
              <h3 style="font-size: 1.2rem; font-weight: 700; color: #991b1b; margin: 0 0 16px 0; display: flex; align-items: center; gap: 10px;">
                <i class="fa-solid fa-circle-xmark" style="color: #dc2626;"></i> What is Excluded
              </h3>
              <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; font-size: 0.92rem; color: #334155;">
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-xmark" style="color: #dc2626; margin-top: 4px;"></i> <span><strong>International Flights:</strong> Airfares to and from Kathmandu and Nepal tourist entry visa fees ($30 for 15 days, $50 for 30 days).</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-xmark" style="color: #dc2626; margin-top: 4px;"></i> <span><strong>Travel Insurance:</strong> Mandatory policy covering emergency high-altitude medical evacuation and helicopter rescue up to 5,500m.</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-xmark" style="color: #dc2626; margin-top: 4px;"></i> <span><strong>City Meals:</strong> Lunches and dinners in Kathmandu and Pokhara (allows freedom to explore local restaurants).</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-xmark" style="color: #dc2626; margin-top: 4px;"></i> <span><strong>Personal Gear:</strong> Sleeping bag, down jacket, thermal layers, and trekking poles (rental available in Kathmandu for ~$1.50/day).</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-xmark" style="color: #dc2626; margin-top: 4px;"></i> <span><strong>Teahouse Extras:</strong> Hot bucket showers, battery/device charging ($2–$4), Wi-Fi cards, and boiled drinking water.</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-xmark" style="color: #dc2626; margin-top: 4px;"></i> <span><strong>Beverages:</strong> Bottled mineral water, soft drinks, alcoholic beverages, and personal snacks.</span></li>
                <li style="display: flex; gap: 10px;"><i class="fa-solid fa-xmark" style="color: #dc2626; margin-top: 4px;"></i> <span><strong>Gratuities / Tips:</strong> Tips for trekking guide, porter, and drivers (customary in Nepal, recommended ~$10–$15/day for guide, ~$7–$10/day for porter shared across group).</span></li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Section 4: Altitude Profile & Weather -->
        <section id="altitude-weather" class="detail-section">
          <div class="section-title-wrap">
            <span class="section-kicker">Elevation Profile & Climate</span>
            <h2 class="section-heading">Altitude Profile & Interactive Weather Forecast</h2>
          </div>

          <!-- Altitude Visualizer Widget -->
          <div class="altitude-visualizer-container" 
               data-trek="annapurna_circuit_tilicho" 
               style="margin-top: 24px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div class="visualizer-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 12px;">
              <div>
                <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin: 0;">Interactive 16-Day Elevation Graph</h3>
                <p style="font-size: 0.85rem; color: #64748b; margin: 4px 0 0 0;">Visualizing Kathmandu (1,355m) → Tilicho Lake (4,919m) → Thorong La Pass (5,416m) → Pokhara (822m)</p>
              </div>
              <div class="alt-controls" style="display: flex; gap: 8px;">
                <button type="button" class="btn btn-outline btn-xs alt-unit-toggle" data-unit="m">Meters (m)</button>
                <button type="button" class="btn btn-outline btn-xs alt-unit-toggle" data-unit="ft">Feet (ft)</button>
              </div>
            </div>
            <div style="position: relative; height: 320px; width: 100%;">
              <canvas id="altitudeChart"></canvas>
            </div>
          </div>

          <!-- Weather Visualizer Widget -->
          <div class="weather-visualizer-container" 
               data-trek-id="annapurna" 
               style="margin-top: 24px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin: 0 0 16px 0; display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-cloud-sun" style="color: #008060;"></i> Annapurna Region Live Weather & Seasonal Climates
            </h3>
            <div id="weatherWidgetContainer"></div>
          </div>
        </section>

        <!-- Section 5: Essential Travel Guides & Information -->
        <section id="guides" class="detail-section">
          <div class="section-title-wrap">
            <span class="section-kicker">Preparation & Safety Protocols</span>
            <h2 class="section-heading">Essential Travel Guides & Trekker Advice</h2>
          </div>

          <div class="guides-accordion" style="margin-top: 24px; display: flex; flex-direction: column; gap: 16px;">
            ${guidesData.guides.map((g, idx) => `
              <div class="guide-item" style="border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff; overflow: hidden;">
                <div class="guide-item-header" onclick="toggleGuideItem(${idx})" style="padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: #ffffff;">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="background: #e6f5ef; color: #008060; font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 12px; text-transform: uppercase;">${g.tag}</span>
                    <h3 style="font-size: 1.05rem; font-weight: 700; color: #1e293b; margin: 0;">${g.title}</h3>
                  </div>
                  <i class="fa-solid fa-chevron-down guide-toggle-icon" id="guide-icon-${idx}" style="color: #94a3b8; transition: transform 0.25s ease;"></i>
                </div>
                <div class="guide-item-body" id="guide-body-${idx}" style="${idx === 0 ? 'display: block;' : 'display: none;'} padding: 20px; border-top: 1px solid #f1f5f9; background: #fafbfc; font-size: 0.95rem; line-height: 1.7; color: #334155;">
                  ${g.content}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Section 6: Frequently Asked Questions -->
        <section id="faqs" class="detail-section">
          <div class="section-title-wrap">
            <span class="section-kicker">Got Questions?</span>
            <h2 class="section-heading">Frequently Asked Questions</h2>
          </div>

          <div class="faq-list" style="margin-top: 24px; display: flex; flex-direction: column; gap: 12px;">
            ${guidesData.faqs.map((faq, fIdx) => `
              <div class="faq-accordion-item" style="border: 1px solid #e2e8f0; border-radius: 8px; background: #ffffff; overflow: hidden;">
                <div class="faq-question" onclick="toggleFaqItem(${fIdx})" style="padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: #ffffff;">
                  <h3 style="font-size: 1rem; font-weight: 700; color: #1e293b; margin: 0; padding-right: 16px;">${faq.q}</h3>
                  <i class="fa-solid fa-chevron-down faq-icon" id="faq-icon-${fIdx}" style="color: #94a3b8; transition: transform 0.25s ease;"></i>
                </div>
                <div class="faq-answer" id="faq-answer-${fIdx}" style="${fIdx === 0 ? 'display: block;' : 'display: none;'} padding: 18px 20px; border-top: 1px solid #f1f5f9; background: #fafbfc; font-size: 0.92rem; line-height: 1.7; color: #475569;">
                  ${faq.a}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Section 7: Verified Trekker Reviews -->
        <section id="reviews" class="detail-section">
          <div class="section-title-wrap">
            <span class="section-kicker">Real Trekker Experiences</span>
            <h2 class="section-heading">Reviews & Testimonials</h2>
          </div>
          <div class="reviews-summary-card" style="margin-top: 20px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; display: flex; gap: 32px; align-items: center; flex-wrap: wrap;">
            <div style="text-align: center; border-right: 1px solid #e2e8f0; padding-right: 32px;">
              <div style="font-size: 3rem; font-weight: 800; color: #008060; line-height: 1;">4.9</div>
              <div class="stars" style="color: #f59e0b; margin: 8px 0;">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>
              <div style="font-size: 0.85rem; color: #64748b;">Based on 348 Reviews</div>
            </div>
            <div style="flex: 1; min-width: 240px;">
              <p style="font-size: 0.95rem; color: #334155; margin: 0 0 12px 0;">
                <em>"Reaching Tilicho Lake at sunrise was the most awe-inspiring mountain moment of my life. The turquoise color against the sheer white face of Tilicho Peak is surreal. Our guide Pemba from Namaste Hiking Trek managed our pace flawlessly, and crossing Thorong La Pass felt natural because we were already acclimatized. Having the domestic flights from Jomsom to Pokhara and Kathmandu made the return effortless!"</em>
              </p>
              <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: #64748b;">
                <span><strong>Marcus & Sarah Lindqvist</strong> (Stockholm, Sweden)</span>
                <span>Trekked in October 2025</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 8: Related Treks -->
        <section class="detail-section">
          <div class="section-title-wrap">
            <span class="section-kicker">Explore More Adventures</span>
            <h2 class="section-heading">Other Recommended Himalayan Journeys</h2>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px; margin-top: 20px;">
            <a href="../annapurna-circuit-trek/" class="related-trek-card" style="text-decoration: none; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff; display: block; box-shadow: 0 2px 6px rgba(0,0,0,0.04); transition: transform 0.2s ease;">
              <img src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-cliffside-trail-01.jpg" alt="Annapurna Circuit Trek" style="width: 100%; height: 160px; object-fit: cover;">
              <div style="padding: 14px;">
                <span style="font-size: 0.75rem; color: #008060; font-weight: 700;">14 DAYS</span>
                <h4 style="font-size: 1rem; font-weight: 700; color: #1e293b; margin: 4px 0 6px 0;">Annapurna Circuit Trek (14 Days)</h4>
                <p style="font-size: 0.85rem; color: #64748b; margin: 0;">From $990 per person</p>
              </div>
            </a>
            <a href="../annapurna-base-camp/" class="related-trek-card" style="text-decoration: none; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff; display: block; box-shadow: 0 2px 6px rgba(0,0,0,0.04); transition: transform 0.2s ease;">
              <img src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-forest-trail-02.jpg" alt="Annapurna Base Camp Trek" style="width: 100%; height: 160px; object-fit: cover;">
              <div style="padding: 14px;">
                <span style="font-size: 0.75rem; color: #008060; font-weight: 700;">11 DAYS</span>
                <h4 style="font-size: 1rem; font-weight: 700; color: #1e293b; margin: 4px 0 6px 0;">Annapurna Base Camp Trek</h4>
                <p style="font-size: 0.85rem; color: #64748b; margin: 0;">From $750 per person</p>
              </div>
            </a>
            <a href="../manaslu-circuit-trek/" class="related-trek-card" style="text-decoration: none; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff; display: block; box-shadow: 0 2px 6px rgba(0,0,0,0.04); transition: transform 0.2s ease;">
              <img src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-high-altitude-trail-08.jpg" alt="Manaslu Circuit Trek" style="width: 100%; height: 160px; object-fit: cover;">
              <div style="padding: 14px;">
                <span style="font-size: 0.75rem; color: #008060; font-weight: 700;">14 DAYS</span>
                <h4 style="font-size: 1rem; font-weight: 700; color: #1e293b; margin: 4px 0 6px 0;">Manaslu Circuit Trek</h4>
                <p style="font-size: 0.85rem; color: #64748b; margin: 0;">From $1,050 per person</p>
              </div>
            </a>
          </div>
        </section>

      </div>
      <!-- END LEFT COLUMN -->

      <!-- RIGHT COLUMN: PINNED STICKY BOOKING SIDEBAR -->
      <aside class="trek-sidebar-col" style="position: sticky; top: 125px; align-self: start;">
        <div class="sidebar-pricing-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; box-shadow: 0 8px 24px rgba(0,0,0,0.08);">
          <div class="pricing-header" style="border-bottom: 1px solid #f1f5f9; padding-bottom: 16px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <div>
                <span style="font-size: 0.85rem; color: #64748b; text-decoration: line-through;">$1,490</span>
                <div style="font-size: 2.2rem; font-weight: 800; color: #008060; line-height: 1.1;">
                  $1,249 <span style="font-size: 0.95rem; font-weight: 500; color: #64748b;">/ person</span>
                </div>
              </div>
              <span style="background: #fef2f2; color: #dc2626; font-size: 0.8rem; font-weight: 700; padding: 4px 10px; border-radius: 20px;">Save $241 (16% Off)</span>
            </div>
            <div style="margin-top: 8px; font-size: 0.85rem; color: #64748b; display: flex; align-items: center; gap: 6px;">
              <i class="fa-solid fa-clock" style="color: #008060;"></i> 16 Days / 15 Nights • All-Inclusive
            </div>
          </div>

          <!-- Group Pricing Table -->
          <div style="margin-bottom: 20px; background: #fafbfc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
            <div style="font-size: 0.82rem; font-weight: 700; color: #1e293b; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">Group Tier Pricing</div>
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; padding: 4px 0; color: #475569;">
              <span>1 Person (Solo)</span>
              <strong style="color: #1e293b;">$1,450</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; padding: 4px 0; color: #166534; font-weight: 600; background: #e6f5ef; border-radius: 4px; padding: 4px 6px;">
              <span>2 – 4 Persons</span>
              <strong>$1,249 / person</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; padding: 4px 0; color: #475569;">
              <span>5 – 8 Persons</span>
              <strong style="color: #1e293b;">$1,190 / person</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; padding: 4px 0; color: #475569;">
              <span>9+ Persons</span>
              <strong style="color: #1e293b;">$1,149 / person</strong>
            </div>
          </div>

          <!-- Interactive Calculator -->
          <form id="bookingCalculatorForm" style="display: flex; flex-direction: column; gap: 14px;">
            <div>
              <label for="travelDate" style="font-size: 0.85rem; font-weight: 600; color: #1e293b; display: block; margin-bottom: 6px;">
                <i class="fa-regular fa-calendar" style="color: #008060;"></i> Select Departure Date
              </label>
              <input type="date" id="travelDate" name="travelDate" class="form-control" style="width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem;" required>
            </div>

            <div>
              <label for="travelerCount" style="font-size: 0.85rem; font-weight: 600; color: #1e293b; display: block; margin-bottom: 6px;">
                <i class="fa-solid fa-user-group" style="color: #008060;"></i> Number of Trekkers
              </label>
              <select id="travelerCount" name="travelerCount" class="form-control" style="width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem;" onchange="updateSidebarPricing()">
                <option value="1">1 Person ($1,450)</option>
                <option value="2" selected>2 Persons ($1,249 / person)</option>
                <option value="3">3 Persons ($1,249 / person)</option>
                <option value="4">4 Persons ($1,249 / person)</option>
                <option value="5">5 Persons ($1,190 / person)</option>
                <option value="6">6 Persons ($1,190 / person)</option>
                <option value="8">8 Persons ($1,190 / person)</option>
                <option value="10">10+ Persons ($1,149 / person)</option>
              </select>
            </div>

            <div style="background: #f8fafc; border-top: 1px dashed #cbd5e1; padding-top: 12px; display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.95rem; font-weight: 600; color: #1e293b;">Total Estimate:</span>
              <span id="calculatedTotal" style="font-size: 1.35rem; font-weight: 800; color: #008060;">$2,498</span>
            </div>

            <button type="button" class="btn btn-primary" style="width: 100%; padding: 14px; font-size: 1rem; font-weight: 700; border-radius: 8px; background: #008060; color: #ffffff; border: none; cursor: pointer; transition: background 0.2s ease;" onclick="openBookingModal()">
              <i class="fa-solid fa-bolt"></i> Book This Trek Now
            </button>

            <a href="https://wa.me/9779851000000?text=Hi%20Namaste%20Hiking%20Trek,%20I%20am%20interested%20in%20the%2016-Day%20Annapurna%20Circuit%20with%20Tilicho%20Lake%20Trek." target="_blank" rel="noopener" class="btn btn-outline" style="width: 100%; padding: 12px; font-size: 0.92rem; font-weight: 600; border-radius: 8px; border: 1px solid #25d366; color: #128c7e; text-align: center; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 8px; box-sizing: border-box;">
              <i class="fa-brands fa-whatsapp" style="font-size: 1.1rem; color: #25d366;"></i> Chat with Expert on WhatsApp
            </a>
          </form>

          <!-- Trust Badges -->
          <div style="margin-top: 20px; border-top: 1px solid #f1f5f9; padding-top: 16px; display: flex; flex-direction: column; gap: 8px; font-size: 0.82rem; color: #64748b;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <i class="fa-solid fa-shield-halved" style="color: #008060;"></i> No Hidden Booking Fees or Surprise Surcharges
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <i class="fa-solid fa-rotate" style="color: #008060;"></i> Free Date Changes up to 30 Days Before
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <i class="fa-solid fa-headset" style="color: #008060;"></i> 24/7 Kathmandu Operations Support
            </div>
          </div>
        </div>
      </aside>
      <!-- END RIGHT COLUMN -->

    </div>
  </main>

  <!-- Footer -->
  ${footerHtml}

  <!-- Bottom Scripts -->
  ${bottomScripts}

  <!-- Interactive Logic for Itinerary & Sidebar Pricing -->
  <script>
    function toggleItineraryDay(day) {
      var card = document.getElementById('day-' + day);
      if (!card) return;
      var body = card.querySelector('.itinerary-card-body');
      var isActive = card.classList.contains('active');
      
      if (isActive) {
        card.classList.remove('active');
        if (body) body.style.display = 'none';
      } else {
        card.classList.add('active');
        if (body) body.style.display = 'block';
      }
    }

    var allExpanded = false;
    function toggleAllDays() {
      allExpanded = !allExpanded;
      var cards = document.querySelectorAll('.itinerary-card');
      var btnText = document.getElementById('toggleAllDaysText');
      cards.forEach(function(card) {
        var body = card.querySelector('.itinerary-card-body');
        if (allExpanded) {
          card.classList.add('active');
          if (body) body.style.display = 'block';
        } else {
          card.classList.remove('active');
          if (body) body.style.display = 'none';
        }
      });
      if (btnText) {
        btnText.textContent = allExpanded ? 'Collapse All Days' : 'Expand All Days';
      }
    }

    function toggleGuideItem(index) {
      var body = document.getElementById('guide-body-' + index);
      var icon = document.getElementById('guide-icon-' + index);
      if (!body) return;
      if (body.style.display === 'none' || body.style.display === '') {
        body.style.display = 'block';
        if (icon) icon.style.transform = 'rotate(180deg)';
      } else {
        body.style.display = 'none';
        if (icon) icon.style.transform = 'rotate(0deg)';
      }
    }

    function toggleFaqItem(index) {
      var body = document.getElementById('faq-answer-' + index);
      var icon = document.getElementById('faq-icon-' + index);
      if (!body) return;
      if (body.style.display === 'none' || body.style.display === '') {
        body.style.display = 'block';
        if (icon) icon.style.transform = 'rotate(180deg)';
      } else {
        body.style.display = 'none';
        if (icon) icon.style.transform = 'rotate(0deg)';
      }
    }

    function updateSidebarPricing() {
      var select = document.getElementById('travelerCount');
      var totalElem = document.getElementById('calculatedTotal');
      if (!select || !totalElem) return;
      var count = parseInt(select.value, 10) || 2;
      var pricePerPerson = 1249;
      if (count === 1) pricePerPerson = 1450;
      else if (count >= 2 && count <= 4) pricePerPerson = 1249;
      else if (count >= 5 && count <= 8) pricePerPerson = 1190;
      else if (count >= 9) pricePerPerson = 1149;
      
      var total = count * pricePerPerson;
      totalElem.textContent = '$' + total.toLocaleString();
    }

    function openBookingModal() {
      var count = document.getElementById('travelerCount').value;
      var date = document.getElementById('travelDate').value || 'Flexible';
      alert('Thank you! Initializing reservation for ' + count + ' trekker(s) starting on ' + date + '. Our booking desk will contact you within 2 hours.');
    }

    // Set default travel date to 30 days from today
    document.addEventListener('DOMContentLoaded', function() {
      var dateInput = document.getElementById('travelDate');
      if (dateInput) {
        var d = new Date();
        d.setDate(d.getDate() + 30);
        dateInput.value = d.toISOString().split('T')[0];
      }
      updateSidebarPricing();
    });
  </script>
</body>
</html>`;
}

// 6. Write files:
// Destination 1: trek/annapurna-circuit-trek-with-tilicho-lake/index.html
const dir1 = path.join('trek', 'annapurna-circuit-trek-with-tilicho-lake');
if (!fs.existsSync(dir1)) {
  fs.mkdirSync(dir1, { recursive: true });
}
const html1 = buildPage(true);
fs.writeFileSync(path.join(dir1, 'index.html'), html1, 'utf8');
console.log(`Wrote ${path.join(dir1, 'index.html')} (${html1.length} bytes)`);

// Destination 2: trek/tilicho-lake-trek/index.html
const dir2 = path.join('trek', 'tilicho-lake-trek');
if (!fs.existsSync(dir2)) {
  fs.mkdirSync(dir2, { recursive: true });
}
const html2 = buildPage(false);
fs.writeFileSync(path.join(dir2, 'index.html'), html2, 'utf8');
console.log(`Wrote ${path.join(dir2, 'index.html')} (${html2.length} bytes)`);
