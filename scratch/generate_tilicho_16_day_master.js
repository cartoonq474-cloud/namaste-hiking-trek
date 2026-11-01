const fs = require('fs');
const path = require('path');

// 1. Read competitor 16 days
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
    
  d.description_html = d.description_html
    .replace(/Nepal Intrepid Treks/gi, 'Namaste Hiking Trek')
    .replace(/Intrepid Treks/gi, 'Namaste Hiking Trek');
});

// Map 16 days itinerary items into the detailed card format
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
    highlights = ["Dramatic Paungda Danda curved rock wall", "Peaceful pine trails to Dhikur Pokhari", "Upper Pisang Tibetan Buddhist architecture", "Expansive Annapurna II vistas"];
  } else if (d.day === 6) {
    elevation = "3,500 m / 11,482 ft";
    distance = "16 km (6.5 hrs walk)";
    highlights = ["Upper high route via Ghyaru and Ngawal", "Spectacular Annapurna III and Gangapurna panoramas", "Historic Braga Gompa exploration", "Arrival in Manang village"];
  } else if (d.day === 7) {
    elevation = "3,500 m – 3,800 m";
    distance = "4–6 km (2–3 hrs hike)";
    highlights = ["Active acclimatization hike to Gangapurna Lake", "Himalayan Rescue Association (HRA) high-altitude lecture", "Historic stone alleys and bakeries in Manang", "Physical readiness evaluation"];
  } else if (d.day === 8) {
    elevation = "4,150 m / 13,615 ft";
    distance = "19.1 km (5–6 hrs walk)";
    highlights = ["Branching off the main circuit at Khangsar", "Ancient stone village architecture", "Rugged trails entering the Tilicho sanctuary", "Staging night at Tilicho Base Camp"];
  } else if (d.day === 9) {
    elevation = "4,919 m / 16,138 ft (High Point)";
    distance = "15 km (6–7 hrs walk)";
    highlights = ["Pre-dawn climb to pristine Tilicho Lake (4,919m)", "Turquoise waters framed by Tilicho Peak & Great Barrier", "Descent back to Tilicho Base Camp", "Afternoon walk down to Siri Kharka"];
  } else if (d.day === 10) {
    elevation = "4,050 m / 13,287 ft";
    distance = "11.1 km (5 hrs walk)";
    highlights = ["Reconnecting from Siri Kharka with the main circuit", "Alpine slopes above the Marsyangdi River", "Grazing yak pastures in Jarsang Khola valley", "Arrival at Yak Kharka"];
  } else if (d.day === 11) {
    elevation = "4,450 m / 14,599 ft";
    distance = "8.5 km (4.5 hrs walk)";
    highlights = ["Gradual high-altitude ascent along rocky canyon", "Suspension bridge crossing to Thorong Phedi", "Pre-pass tactical briefing and early dinner", "Hydration and rest before pass day"];
  } else if (d.day === 12) {
    elevation = "5,416 m Pass / 3,710 m Muktinath";
    distance = "16.4 km (8 hrs walk)";
    highlights = ["Pre-dawn climb to Thorong La Pass (5,416m)", "Pinnacle achievement of the Annapurna Circuit", "Fluttering Buddhist prayer flags on the summit", "Spectacular 1,700m descent to holy Muktinath"];
  } else if (d.day === 13) {
    elevation = "2,720 m / 8,923 ft";
    distance = "20.2 km (6 hrs walk)";
    highlights = ["Morning visit to sacred 108 spouts at Muktinath Temple", "Ancient fortress village of Jharkot", "Walking through the trans-Himalayan Kali Gandaki valley", "Arrival at wind-sculpted Jomsom"];
  } else if (d.day === 14) {
    elevation = "822 m / 2,696 ft";
    distance = "Flight (25 min)";
    highlights = ["Morning mountain flight through Kali Gandaki gorge", "Thrilling aerial views of Annapurna & Dhaulagiri", "Lakeside hotel check-in in Pokhara", "Boating on Fewa Lake and evening relaxation"];
  } else if (d.day === 15) {
    elevation = "1,355 m / 4,445 ft";
    distance = "Flight (25 min)";
    highlights = ["Scenic flight from Pokhara to Kathmandu", "Transfer to Thamel hotel with time for shopping", "Contingency buffer safeguard", "Celebration Nepali farewell dinner with live dance"];
  } else if (d.day === 16) {
    elevation = "1,355 m / 4,445 ft";
    distance = "20–25 min drive";
    highlights = ["Final souvenir shopping in Thamel", "Private airport transfer to Tribhuvan International Airport", "Farewell and onward journey home"];
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

// Load header and footer from canonical template
const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const headerStart = act.indexOf('<header class="main-header">');
const headerEnd = act.indexOf('</header>') + '</header>'.length;
const headerHtml = act.slice(headerStart, headerEnd);

const footerStart = act.indexOf('<footer class="site-footer">');
const footerEnd = act.indexOf('</footer>') + '</footer>'.length;
const footerHtml = act.slice(footerStart, footerEnd);

const bottomScripts = act.slice(footerEnd).trim();

const guidesData = require('./tilicho_guides.js');

// Schema JSON-LD
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
      "subTrip": itinerary16.map(d => ({
        "@type": "TouristTrip",
        "name": `Day ${d.day}: ${d.title} (${d.elevation.split(' ')[0]})`
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

// Highlights at a glance
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

// Comparison Table
const comparisonData = [
  { feature: "Main route", classic: "Marsyangdi Valley → Thorong La → Muktinath → Jomsom", tilicho: "Marsyangdi Valley → Manang → Tilicho Lake detour → Thorong La → Muktinath → Jomsom" },
  { feature: "Tilicho Lake", classic: "Not included (bypassed at Manang)", tilicho: "Included as a major high-altitude objective (4,919 m / 16,138 ft)" },
  { feature: "Thorong La Pass", classic: "Included (Day 9 or 10)", tilicho: "Included (Day 12, with superior physiological pre-acclimatization)" },
  { feature: "Domestic Flights", classic: "Jomsom to Pokhara (standard)", tilicho: "Both Jomsom to Pokhara (Day 14) & Pokhara to Kathmandu (Day 15) included" },
  { feature: "Total Duration", classic: "12–14 calendar days", tilicho: "16 calendar days (full circle with optimal safety and recovery)" },
  { feature: "Physical Demand", classic: "Moderate to Challenging", tilicho: "Strenuous (two high-altitude objectives above 4,900 m)" },
  { feature: "Acclimatization", classic: "1 day in Manang", tilicho: "Manang rest day + 2 progressive high-altitude nights at 4,150m & 4,060m" }
];

function buildMasterHtml(isCanonicalSlug) {
  const canonicalUrl = "https://namastehikingtrek.com/trek/annapurna-circuit-trek-with-tilicho-lake/";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Annapurna Circuit Trek with Tilicho Lake (16 Days) — Namaste Hiking Trek</title>
  <meta name="description" content="Embark on the 16-day Annapurna Circuit Trek with Tilicho Lake. Ascend to turquoise Tilicho Lake (4,919m), conquer Thorong La Pass (5,416m), explore sacred Muktinath, and enjoy domestic flights from Jomsom to Pokhara and Kathmandu.">
  <!-- Canonical URL -->
  <link rel="canonical" href="${canonicalUrl}" />

  <!-- Favicon & Touch Icons -->
  <link rel="icon" type="image/png" href="../../images/logo.png">
  <link rel="apple-touch-icon" href="../../images/logo.png">

  <!-- Open Graph / Social Media Metadata -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonicalUrl}">
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
    .itinerary-day-card {
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      margin-bottom: 16px;
      background: #ffffff;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
      transition: all 0.25s ease;
    }
    .itinerary-day-card:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      border-color: #cbd5e1;
    }
    .itinerary-day-card.active {
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
    .itinerary-day-card.active .itinerary-day-badge {
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
    .meta-pill i, .meta-pill svg {
      color: #008060;
    }
    .itinerary-toggle-icon {
      font-size: 1rem;
      color: #94a3b8;
      transition: transform 0.25s ease;
    }
    .itinerary-day-card.active .itinerary-toggle-icon {
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
<body>

  <!-- Main Navigation Header -->
  ${headerHtml}

  <main>
    <article itemscope itemtype="https://schema.org/TouristTrip">
    <!-- Page Title Section -->
    <section style="padding: 30px 0 10px 0; background: var(--color-neutral-50);">
      <div class="container">
        <!-- Top Row: Region Pill & Review Badges -->
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 12px;">
          <span class="pill pill-copper" style="margin-bottom: 0;">Annapurna Region • Tilicho Lake & Circuit</span>
          
          <!-- TripAdvisor Review Badge -->
          <div style="display: inline-flex; align-items: center; gap: 8px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 100px; padding: 4px 12px; font-size: 0.85rem; color: #475569; box-shadow: 0 1px 2px rgba(0,0,0,0.05); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: #00af87; border-radius: 50%;">
              <svg viewBox="0 0 24 24" fill="#000000" width="10" height="10">
                <path d="M12 3.2c-4.8 0-8.8 4-8.8 8.8 0 4.8 4 8.8 8.8 8.8 0 4.8 4 8.8 8.8 8.8 4.8 0 8.8-4 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm-3.3 12.1c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3.1 1.8-1.4 3.3-3.3 3.3zm6.6 0c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zm-6.6-4.9c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6zm6.6 0c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6zM12 11.5c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5z"/>
              </svg>
            </span>
            <span><strong>5.0</strong> / 5.0 (348 Reviews)</span>
          </div>

          <!-- Google Review Badge -->
          <div style="display: inline-flex; align-items: center; gap: 8px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 100px; padding: 4px 12px; font-size: 0.85rem; color: #475569; box-shadow: 0 1px 2px rgba(0,0,0,0.05); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: #ffffff; border-radius: 50%;">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </span>
            <span><strong>4.9</strong> / 5.0 (Google Verified)</span>
          </div>

          <!-- Gov Licensed Badge -->
          <span style="font-size: 0.8rem; background: #e6f7f0; color: #008060; padding: 4px 10px; border-radius: 100px; font-weight: 600;">✓ 100% Guaranteed Departures</span>
        </div>

        <!-- H1 Page Title -->
        <h1 style="font-size: clamp(2rem, 3.5vw, 2.75rem); line-height: 1.15; margin-bottom: 12px; color: var(--color-neutral-900); font-weight: 800;">
          Annapurna Circuit Trek with Tilicho Lake (16 Days)
        </h1>

        <!-- Subtitle -->
        <p style="font-size: 1.15rem; color: #475569; max-width: 900px; margin-bottom: 16px; line-height: 1.5; font-weight: 500;">
          A legendary 16-day high-altitude journey combining the classic Annapurna Circuit with an unforgettable excursion to turquoise Tilicho Lake (4,919m), crossing Thorong La Pass (5,416m), and scenic flights from Jomsom to Pokhara and Kathmandu.
        </p>

        <!-- Brief intro excerpt with Read More toggle -->
        <p style="color: var(--color-neutral-600); max-width: 850px; margin-bottom: 24px; line-height: 1.6;">
          The Annapurna Circuit with Tilicho Lake Trek weaves two of Nepal's most revered mountain adventures into one continuous 16-day Himalayan voyage. Trek from the lush subtropical valleys of the lower Marsyangdi through traditional Gurung and Tibetan-influenced Manangi settlements, make a dedicated ascent to the turquoise waters of Tilicho Lake (4,919m) under the Annapurna Great Barrier, and conquer the iconic Thorong La Pass at 5,416 meters before descending into the trans-Himalayan desert of Mustang and holy Muktinath.
          <span id="ebc-more-text" style="display: none;">
            Unlike itineraries with long bumpy return drives, this 16-day program includes panoramic domestic flights from Jomsom to Pokhara through the Kali Gandaki gorge, and from Pokhara to Kathmandu. This ensures maximum trail time, superior acclimatization, and smooth air returns.
          </span>
          <button id="ebc-toggle-btn" style="background: none; border: none; color: #008060; font-weight: 700; cursor: pointer; padding: 0 4px; font-size: inherit;">Read More +</button>
        </p>

        <!-- Photo Collage Gallery (5 Authentic Tilicho & Circuit Images) -->
        <div class="trek-gallery-collage">
          <div class="trek-gallery-main">
            <img src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-tilicho-lake-14.jpg" alt="Trekkers standing before turquoise Tilicho Lake at 4,919 meters" loading="eager">
            <div class="trek-gallery-badge">
              <div class="trek-gallery-badge-icon" style="background: #00af87; display: flex; align-items: center; justify-content: center; border-radius: 50%; width: 28px; height: 28px;">
                <svg viewBox="0 0 24 24" fill="#ffffff" width="16" height="16">
                  <path d="M12 3.2c-4.8 0-8.8 4-8.8 8.8 0 4.8 4 8.8 8.8 8.8 0 4.8 4 8.8 8.8 8.8 4.8 0 8.8-4 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm-3.3 12.1c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3.1 1.8-1.4 3.3-3.3 3.3zm6.6 0c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zm-6.6-4.9c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6zm6.6 0c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6z"/>
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

        <!-- 14 Key Trip Facts Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; margin-top: 24px;">
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Duration</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">16 Days (Full Program)</span>
            </div>
          </div>

          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Highest Point</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Thorong La (5,416 m)</span>
            </div>
          </div>

          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Tilicho Lake</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">4,919 m (Day 9)</span>
            </div>
          </div>

          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Difficulty</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Challenging / Strenuous</span>
            </div>
          </div>

          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Activity</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">High-Altitude Trekking</span>
            </div>
          </div>

          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Accommodation</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Teahouses & 3-Star Hotels</span>
            </div>
          </div>

          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Transport</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">4WD Drive & 2 Flights</span>
            </div>
          </div>

          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Meals</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Full Board on Trek (B.L.D.)</span>
            </div>
          </div>

          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Best Season</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Sep–Nov & Mar–May</span>
            </div>
          </div>

          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><polygon points="12 7 17 12 12 17 12 7"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek Starts</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Jagat via Besisahar</span>
            </div>
          </div>

          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek Ends</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Jomsom (Fly to Pokhara)</span>
            </div>
          </div>

          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek Region</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Annapurna (ACAP)</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sticky Scroll-Spy Sub-Navigation Bar -->
    <div class="trek-sub-nav">
      <div class="container">
        <div class="trek-sub-nav-list">
          <button class="trek-sub-nav-btn active" data-tab="overview">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            Overview
          </button>
          <button class="trek-sub-nav-btn" data-tab="itinerary">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            Itinerary (16 Days)
          </button>
          <button class="trek-sub-nav-btn" data-tab="includes">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            Includes & Excludes
          </button>
          <button class="trek-sub-nav-btn" data-tab="dates">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            Dates & Prices
          </button>
          <button class="trek-sub-nav-btn" data-tab="packing">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            Packing List
          </button>
          <button class="trek-sub-nav-btn" data-tab="details">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
            Route Guides
          </button>
          <button class="trek-sub-nav-btn" data-tab="altitude-profile">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            Altitude Chart
          </button>
          <button class="trek-sub-nav-btn" data-tab="weather">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
            Weather
          </button>
          <button class="trek-sub-nav-btn" data-tab="faqs">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            FAQs
          </button>
        </div>
      </div>
    </div>

    <!-- MAIN TWO-COLUMN CONTENT GRID SECTION -->
    <section class="section-padding" style="padding-top: 10px;" data-trek-details-wrapper data-trek-key="annapurna_circuit_tilicho">
      <div class="container trek-detail-layout" style="display: grid; grid-template-columns: 2.2fr 1fr; gap: 40px;">
        
        <!-- Left Column: Content Sections 1-12 -->
        <div style="min-width: 0;">

          <!-- SECTION 1: OVERVIEW -->
          <section id="section-overview" class="trek-detail-section active" style="margin-bottom: 40px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 24px;">
              <h2 style="font-size: 1.6rem; color: #1e293b; margin-top: 0; margin-bottom: 16px; font-weight: 800; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px;">
                Annapurna Circuit with Tilicho Lake Trek Overview
              </h2>
              
              <p style="font-size: 1.05rem; line-height: 1.7; color: #475569; margin-bottom: 16px;">
                The Annapurna Circuit with Tilicho Lake Trek combines two of the most remarkable high-altitude experiences in the Annapurna region into one continuous 16-day Himalayan journey. The route follows the classic Annapurna Circuit through the Marsyangdi Valley, reaches the high mountain settlements around Manang, makes a dedicated excursion toward Tilicho Lake at 4,919 meters, and then continues toward Thorong La at 5,416 meters before descending through Muktinath and the Kali Gandaki Valley.
              </p>

              <p style="font-size: 1.05rem; line-height: 1.7; color: #475569; margin-bottom: 16px;">
                Unlike a standard Annapurna Circuit itinerary that may pass through Manang and continue directly toward Yak Kharka and Thorong Phedi, this itinerary adds the high-altitude Tilicho section. The additional excursion takes trekkers from Manang toward Khangsar and Tilicho Base Camp before making the ascent to Tilicho Lake, descending to Siri Kharka, and reconnecting with the circuit at Yak Kharka.
              </p>

              <p style="font-size: 1.05rem; line-height: 1.7; color: #475569; margin-bottom: 20px;">
                The result is a comprehensive trekking experience that combines green lower valleys, subtropical waterfalls, traditional mountain villages, high alpine scree trails, glacial landscapes, turquoise lakes, dry trans-Himalayan valleys, sacred pilgrimage sites, and scenic mountain flights from Jomsom to Pokhara and Kathmandu.
              </p>

              <!-- Highlights At A Glance Grid -->
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin-top: 28px; margin-bottom: 16px;">
                Trip Highlights at a Glance
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; margin-bottom: 28px;">
                ${highlightsAtAGlance.map(h => `
                <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
                  <span style="color: #008060; font-weight: 800; font-size: 1.2rem; line-height: 1;">✦</span>
                  <div>
                    <strong style="color: #1e293b; font-size: 0.95rem; display: block;">${h.highlight}</strong>
                    <span style="color: #64748b; font-size: 0.85rem; line-height: 1.4; display: block;">${h.significance}</span>
                  </div>
                </div>`).join('')}
              </div>

              <!-- Route Comparison Table -->
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin-top: 28px; margin-bottom: 16px;">
                Route Comparison: Classic Circuit vs. Tilicho Circuit
              </h3>
              <div class="table-responsive" style="overflow-x: auto; margin-bottom: 28px;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; font-size: 0.92rem;">
                  <thead>
                    <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                      <th style="padding: 12px 14px; font-weight: 700; color: #1e293b;">Feature</th>
                      <th style="padding: 12px 14px; font-weight: 700; color: #64748b;">Classic Annapurna Circuit (14 Days)</th>
                      <th style="padding: 12px 14px; font-weight: 700; color: #008060;">This Itinerary: With Tilicho Lake (16 Days)</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${comparisonData.map(c => `
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 14px; font-weight: 600; color: #1e293b; background: #fafbfc;">${c.feature}</td>
                      <td style="padding: 12px 14px; color: #64748b;">${c.classic}</td>
                      <td style="padding: 12px 14px; color: #0f172a; font-weight: 500; background: #f0fdf4;">${c.tilicho}</td>
                    </tr>`).join('')}
                  </tbody>
                </table>
              </div>

            </div>
          </section>

          <!-- SECTION 2: ITINERARY (16 DAYS) -->
          <section id="section-itinerary" class="trek-detail-section active" style="margin-bottom: 40px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
              
              <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 16px; margin-bottom: 24px; border-bottom: 2px solid #f1f5f9; padding-bottom: 16px;">
                <div>
                  <h2 style="font-size: 1.6rem; color: #1e293b; margin: 0 0 6px 0; font-weight: 800;">
                    Complete 16-Day Day-by-Day Itinerary
                  </h2>
                  <p style="margin: 0; color: #64748b; font-size: 0.95rem;">
                    Detailed route breakdown, walking hours, elevations, authentic trail photography and lodging.
                  </p>
                </div>
                <div>
                  <button type="button" class="btn btn-outline" id="toggleAllDaysBtn" onclick="toggleAllDays()" style="padding: 8px 16px; font-size: 0.88rem; font-weight: 600; border-radius: 6px; cursor: pointer; border: 1px solid #cbd5e1; background: #ffffff;">
                    Expand All Days
                  </button>
                </div>
              </div>

              <!-- 16 Itinerary Day Cards -->
              <div class="itinerary-cards-container">
                ${itinerary16.map((d, idx) => `
                <div class="itinerary-day-card ${idx === 0 ? 'active' : ''}" id="day-card-${d.day}" data-day="${d.day}">
                  <div class="itinerary-card-header" onclick="toggleDayCard(${d.day})">
                    <span class="itinerary-day-badge">Day ${String(d.day).padStart(2, '0')}</span>
                    <div class="itinerary-header-info">
                      <h3 class="itinerary-day-title">${d.title}</h3>
                      <div class="itinerary-meta-pills">
                        <span class="meta-pill"><i class="fa-solid fa-clock"></i> ${d.time}</span>
                        <span class="meta-pill"><i class="fa-solid fa-mountain"></i> ${d.elevation}</span>
                        <span class="meta-pill"><i class="fa-solid fa-route"></i> ${d.distance}</span>
                        <span class="meta-pill"><i class="fa-solid fa-bed"></i> ${d.lodging}</span>
                        <span class="meta-pill"><i class="fa-solid fa-utensils"></i> ${d.meals}</span>
                      </div>
                    </div>
                    <div class="itinerary-toggle-icon">
                      ▼
                    </div>
                  </div>
                  <div class="itinerary-card-body" style="${idx === 0 ? 'display: block;' : 'display: none;'}">
                    <div class="itinerary-body-grid">
                      <div class="itinerary-photo-col">
                        <img src="${d.image}" alt="${d.imageAlt}" class="itinerary-day-img" loading="lazy">
                        <div class="itinerary-photo-caption">${d.imageAlt}</div>
                      </div>
                      <div class="itinerary-content-col">
                        ${d.description.split('\n\n').map(p => `<p>${p}</p>`).join('')}
                      </div>
                    </div>
                  </div>
                </div>`).join('')}
              </div>

            </div>
          </section>

          <!-- SECTION 3: INCLUDES & EXCLUDES -->
          <section id="section-includes" class="trek-detail-section active" style="margin-bottom: 40px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
              <h2 style="font-size: 1.6rem; color: #1e293b; margin-top: 0; margin-bottom: 24px; font-weight: 800; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px;">
                Package Inclusions & Exclusions
              </h2>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                <!-- Included -->
                <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 20px;">
                  <h3 style="font-size: 1.15rem; color: #166534; margin: 0 0 16px 0; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                    <span style="color: #16a34a; font-size: 1.3rem;">✓</span> What's Included in the 16-Day Package
                  </h3>
                  <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 0.92rem; color: #1e293b;">
                    <li>✓ <strong>Airport Transfers:</strong> Private arrival and departure transfers at Kathmandu Tribhuvan International Airport.</li>
                    <li>✓ <strong>Kathmandu Hotels:</strong> 2 Nights in 3-star standard hotel in Thamel with breakfast.</li>
                    <li>✓ <strong>Pokhara Hotel:</strong> 1 Night in 3-star lakeside hotel with breakfast.</li>
                    <li>✓ <strong>Mountain Teahouses:</strong> 12 Nights in mountain lodges (private bathrooms in Manang and Jomsom where available).</li>
                    <li>✓ <strong>All Meals on Trek:</strong> Full board (13 breakfasts, 12 lunches, 12 dinners) with hot tea or coffee.</li>
                    <li>✓ <strong>Domestic Flight 1:</strong> Scheduled mountain flight from Jomsom to Pokhara (with 15kg luggage).</li>
                    <li>✓ <strong>Domestic Flight 2:</strong> Scheduled flight from Pokhara to Kathmandu (with 15kg luggage).</li>
                    <li>✓ <strong>Overland Transport:</strong> Kathmandu to Jagat via Besisahar by comfortable tourist vehicle / shared private jeep.</li>
                    <li>✓ <strong>Lead Guide:</strong> Government-certified, English-speaking guide with high-altitude first-aid credentials.</li>
                    <li>✓ <strong>Porters:</strong> 1 porter for every 2 trekkers (carries up to 20–25 kg total luggage).</li>
                    <li>✓ <strong>Staff Coverage:</strong> Complete salary, meals, lodging, equipment, and insurance for all staff.</li>
                    <li>✓ <strong>Official Permits:</strong> Annapurna Conservation Area Project (ACAP) permit and TIMS Card.</li>
                    <li>✓ <strong>Medical Safety:</strong> Pulse oximeter monitoring daily and comprehensive mountain first-aid medical kit.</li>
                    <li>✓ <strong>Duffel Bag:</strong> Namaste Hiking Trek water-resistant duffel bag (yours to keep) and route map.</li>
                    <li>✓ <strong>Farewell Celebration:</strong> Authentic Nepali farewell dinner in Kathmandu with live cultural dance.</li>
                    <li>✓ <strong>Taxes:</strong> All government taxes, VAT, and official service charges.</li>
                  </ul>
                </div>

                <!-- Excluded -->
                <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 10px; padding: 20px;">
                  <h3 style="font-size: 1.15rem; color: #991b1b; margin: 0 0 16px 0; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                    <span style="color: #dc2626; font-size: 1.3rem;">✕</span> What's Excluded
                  </h3>
                  <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 0.92rem; color: #1e293b;">
                    <li>✕ <strong>International Airfares:</strong> Flights to/from Kathmandu and Nepal entry visa fee ($30/15 days, $50/30 days).</li>
                    <li>✕ <strong>Travel Insurance:</strong> Mandatory policy covering high-altitude emergency medical evacuation and helicopter rescue up to 5,500m.</li>
                    <li>✕ <strong>City Lunches & Dinners:</strong> Meals in Kathmandu and Pokhara (gives freedom to explore restaurants).</li>
                    <li>✕ <strong>Personal Gear:</strong> Sleeping bag, down jacket, and trekking poles (rental available in Kathmandu for ~$1.50/day).</li>
                    <li>✕ <strong>Teahouse Extras:</strong> Hot bucket showers, battery charging ($2–$4), Wi-Fi cards, and boiled drinking water.</li>
                    <li>✕ <strong>Beverages:</strong> Bottled mineral water, soft drinks, alcoholic beverages, and snacks.</li>
                    <li>✕ <strong>Gratuities:</strong> Tips for trekking guide, porter, and drivers (customary in Nepal).</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          <!-- SECTION 4: ALTITUDE CHART & WEATHER -->
          <section id="section-altitude-profile" class="trek-detail-section active" style="margin-bottom: 40px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 24px;">
              <h2 style="font-size: 1.6rem; color: #1e293b; margin-top: 0; margin-bottom: 16px; font-weight: 800; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px;">
                Interactive 16-Day Altitude Elevation Profile
              </h2>
              <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 20px;">
                Visualizing Kathmandu (1,355m) → Jagat (1,300m) → Manang (3,500m) → Tilicho Lake (4,919m) → Thorong La Pass (5,416m) → Jomsom (2,720m) → Pokhara (822m).
              </p>
              <div id="altitude-chart-wrapper" data-trek-key="annapurna_circuit_tilicho"></div>
            </div>

            <!-- Weather Widget -->
            <div id="section-weather" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
              <h2 style="font-size: 1.6rem; color: #1e293b; margin-top: 0; margin-bottom: 16px; font-weight: 800; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px;">
                Annapurna Region Seasonal Climates & Weather
              </h2>
              <div id="weather-chart-wrapper" data-trek-key="tilicho_circuit"></div>
            </div>
          </section>

          <!-- SECTION 5: TRIP GUIDES & PREPARATION -->
          <section id="section-details" class="trek-detail-section active" style="margin-bottom: 40px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
              <h2 style="font-size: 1.6rem; color: #1e293b; margin-top: 0; margin-bottom: 24px; font-weight: 800; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px;">
                Essential Route Guides & Safety Protocols
              </h2>

              <div class="guides-accordion-list">
                ${guidesData.guides.map((g, idx) => `
                <div class="detail-accordion-card ${idx === 0 ? 'open' : ''}" style="margin-bottom: 16px;">
                  <div class="detail-accordion-header" onclick="this.parentElement.classList.toggle('open')">
                    <div style="display: flex; align-items: center; gap: 12px;">
                      <span style="background: #e6f7f0; color: #008060; font-size: 0.75rem; font-weight: 700; padding: 3px 8px; border-radius: 4px; text-transform: uppercase;">${g.tag}</span>
                      <strong style="font-size: 1.05rem; color: #1e293b;">${g.title}</strong>
                    </div>
                    <svg class="accordion-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" style="transition: transform 0.2s ease; flex-shrink: 0;"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                  <div class="detail-accordion-body" style="color: #475569; line-height: 1.7; font-size: 0.95rem;">
                    ${g.content}
                  </div>
                </div>`).join('')}
              </div>

            </div>
          </section>

          <!-- SECTION 6: FAQS -->
          <section id="section-faqs" class="trek-detail-section active" style="margin-bottom: 40px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
              <h2 style="font-size: 1.6rem; color: #1e293b; margin-top: 0; margin-bottom: 24px; font-weight: 800; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px;">
                Frequently Asked Questions
              </h2>

              <div class="faq-accordion-list">
                ${guidesData.faqs.map((f, idx) => `
                <div class="detail-accordion-card ${idx === 0 ? 'open' : ''}" style="margin-bottom: 12px;">
                  <div class="detail-accordion-header" onclick="this.parentElement.classList.toggle('open')">
                    <strong style="font-size: 1.02rem; color: #1e293b; line-height: 1.4;">${f.q}</strong>
                    <svg class="accordion-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" style="transition: transform 0.2s ease; flex-shrink: 0;"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                  <div class="detail-accordion-body" style="color: #475569; line-height: 1.7; font-size: 0.95rem;">
                    <p style="margin: 0;">${f.a}</p>
                  </div>
                </div>`).join('')}
              </div>

            </div>
          </section>

        </div>
        <!-- END Left Column -->

        <!-- Right Column: Sticky Booking Sidebar Card -->
        <div style="position: sticky; top: 125px; align-self: start;">
          <div class="sidebar-booking-card" style="position: static !important; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; box-shadow: 0 8px 24px rgba(0,0,0,0.08); position: relative;">
              
              <!-- Top Right Best Seller Ribbon Badge -->
              <div style="position: absolute; top: 18px; right: 0; background: #F59E0B; color: #FFFFFF; font-size: 0.72rem; font-weight: 800; padding: 5px 14px; border-radius: 4px 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 2px 6px rgba(245, 158, 11, 0.3);">
                FLAGSHIP EXPEDITION
              </div>

              <!-- Pricing Header -->
              <span style="font-size: 0.75rem; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">FROM</span>
              <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 16px; flex-wrap: wrap;">
                <span style="font-size: 2.4rem; font-weight: 800; color: #008060; line-height: 1;">$1,249</span>
                <span style="font-size: 0.92rem; color: #64748B; font-weight: 500;">/ person</span>
                <a href="#section-itinerary" style="font-size: 0.88rem; color: #475569; font-weight: 600; text-decoration: underline; margin-left: 4px;">16 days trip</a>
              </div>

              <!-- Group Discount Accordion Toggle -->
              <div class="group-discount-toggle" onclick="const table = this.nextElementSibling; const arrow = this.querySelector('.gd-arrow'); if (table.style.display === 'none') { table.style.display = 'block'; arrow.style.transform = 'rotate(180deg)'; } else { table.style.display = 'none'; arrow.style.transform = 'rotate(0deg)'; }" style="border-top: 1px dashed #CBD5E1; border-bottom: 1px dashed #CBD5E1; padding: 10px 0; margin-bottom: 18px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none;">
                <span style="font-size: 0.78rem; font-weight: 800; color: #0F172A; text-transform: uppercase; letter-spacing: 0.04em;">WE OFFER GROUP DISCOUNT</span>
                <span class="gd-arrow" style="font-size: 0.85rem; color: #0F172A; transition: transform 0.2s ease;">▼</span>
              </div>

              <!-- Group Discount Table -->
              <div class="group-discount-content" style="display: none; margin-bottom: 18px; background: #F8FAFC; border-radius: 10px; padding: 12px; font-size: 0.85rem; border: 1px solid #E2E8F0;">
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">1 Person (Solo)</span>
                  <strong style="color: #0F172A;">$1,450</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0; background: #e6f7f0; border-radius: 4px; padding: 4px 6px;">
                  <span style="color: #166534; font-weight: 600;">2 – 4 Persons</span>
                  <strong style="color: #047857;">$1,249 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">5 – 8 Persons</span>
                  <strong style="color: #0F172A;">$1,190 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0;">
                  <span style="color: #64748B;">9+ Persons</span>
                  <strong style="color: #047857;">$1,149 / person (Best Deal)</strong>
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

                <div style="display: flex; align-items: center; gap: 10px;">
                  <a href="https://wa.me/9779851000000?text=Hi%20Namaste%20Hiking%20Trek,%20I%20am%20interested%20in%20the%2016-Day%20Annapurna%20Circuit%20with%20Tilicho%20Lake%20Trek." target="_blank" rel="noopener" style="display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; background: #25D366; color: #FFFFFF; text-decoration: none; box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'" title="Chat on WhatsApp">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
                    </svg>
                  </a>
                </div>
              </div>
          </div>
        </div>
        <!-- END Right Column -->

      </div>
    </section>

    </article>
  </main>

  <!-- Footer -->
  ${footerHtml}

  <!-- Bottom Scripts -->
  ${bottomScripts}

  <!-- Interactive Logic -->
  <script>
    function toggleDayCard(day) {
      var card = document.getElementById('day-card-' + day);
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
      var cards = document.querySelectorAll('.itinerary-day-card');
      var btn = document.getElementById('toggleAllDaysBtn');
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
      if (btn) {
        btn.textContent = allExpanded ? 'Collapse All Days' : 'Expand All Days';
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
      var moreBtn = document.getElementById('ebc-toggle-btn');
      var moreText = document.getElementById('ebc-more-text');
      if (moreBtn && moreText) {
        moreBtn.addEventListener('click', function() {
          var isHidden = moreText.style.display === 'none';
          moreText.style.display = isHidden ? 'inline' : 'none';
          moreBtn.textContent = isHidden ? 'Read Less -' : 'Read More +';
        });
      }
    });
  </script>
</body>
</html>`;
}

// Write to trek/annapurna-circuit-trek-with-tilicho-lake/index.html
const p1 = path.join('trek', 'annapurna-circuit-trek-with-tilicho-lake', 'index.html');
const masterHtml = buildMasterHtml(true);
fs.writeFileSync(p1, masterHtml, 'utf8');
console.log(`Generated Master 16-Day Page: ${p1} (${masterHtml.length} bytes)`);

// Write to trek/tilicho-lake-trek/index.html
const p2 = path.join('trek', 'tilicho-lake-trek', 'index.html');
fs.writeFileSync(p2, masterHtml, 'utf8');
console.log(`Updated legacy mirror: ${p2} (${masterHtml.length} bytes)`);
