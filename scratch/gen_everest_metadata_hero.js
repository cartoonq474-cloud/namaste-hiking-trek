// scratch/gen_everest_metadata_hero.js
module.exports = function getMetadataAndHero() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Everest View Trek (7 Days) - Panoramic Himalayan Experience | Namaste Hiking Trek</title>
  <meta name="description" content="Experience panoramic views of Mount Everest, Lhotse, Ama Dablam and Thamserku on the 7-day Everest View Trek. Moderate teahouse journey via Lukla, Phakding, Namche Bazaar & Hotel Everest View (3,880 m). Guaranteed departures & local Sherpa guides.">
  <meta name="keywords" content="Everest View Trek, Hotel Everest View Trek, Short Everest Trek 7 Days, Everest View Trek Itinerary, Namche Bazaar Trek, Sagarmatha National Park, Short Himalayan Treks Nepal">
  <link rel="canonical" href="https://namastehikingtrek.com/trek/everest-view-trek/">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://namastehikingtrek.com/trek/everest-view-trek/">
  <meta property="og:title" content="Everest View Trek (7 Days) - Panoramic Himalayan Experience">
  <meta property="og:description" content="7-day scenic Khumbu trekking package to Hotel Everest View (3,880 m), Namche Bazaar, and traditional Sherpa villages. Panoramic mountain views without the Base Camp expedition.">
  <meta property="og:image" content="https://namastehikingtrek.com/images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-view-10.jpg">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Everest View Trek (7 Days) - Namaste Hiking Trek">
  <meta name="twitter:description" content="Scenic 7-day Everest View Trek in Nepal Khumbu region. Maximum altitude 3,880 m, Namche Bazaar 3 nights, Hotel Everest View, Sherpa culture & mountain flights.">
  <meta name="twitter:image" content="https://namastehikingtrek.com/images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-view-10.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="../../images/logo.png">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="../../index.css">

  <style>
    .trip-fact-item {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 10px 14px;
      border-radius: 8px;
      transition: all 0.2s ease;
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid rgba(12, 43, 78, 0.08);
    }
    .trip-fact-item:hover {
      background-color: #ffffff;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.06);
    }
    .trip-fact-icon-wrapper {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: #e6f7f0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .trip-fact-label {
      font-size: 0.72rem;
      text-transform: uppercase;
      font-weight: 700;
      color: #008060;
      letter-spacing: 0.05em;
      margin-bottom: 2px;
    }
    .trip-fact-value {
      font-size: 0.88rem;
      font-weight: 600;
      color: #0C2B4E;
      line-height: 1.3;
    }
    .rich-highlights-container {
      margin-top: 35px;
      padding-top: 25px;
      border-top: 1px solid var(--color-neutral-100);
    }
    .rich-highlights-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 22px;
      margin-top: 24px;
    }
    .highlight-card {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      display: flex;
      flex-direction: column;
    }
    .highlight-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
      border-color: #008060;
    }
    .highlight-card-img-wrapper {
      height: 190px;
      width: 100%;
      overflow: hidden;
      position: relative;
    }
    .highlight-card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    .highlight-card:hover .highlight-card-img {
      transform: scale(1.05);
    }
    .highlight-card-body {
      padding: 18px 20px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .highlight-card-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #008060;
      margin-bottom: 8px;
    }
    .highlight-card-title {
      font-size: 1.05rem;
      font-weight: 700;
      color: #0C2B4E;
      margin-bottom: 8px;
      line-height: 1.35;
    }
    .highlight-card-desc {
      font-size: 0.88rem;
      color: #4b5563;
      line-height: 1.55;
    }
    .inc-exc-container {
      margin-top: 10px;
    }
    .inc-exc-section-title-wrapper {
      border-left: 4px solid #008060;
      padding-left: 14px;
      margin-bottom: 24px;
      margin-top: 30px;
    }
    .inc-exc-section-title {
      font-size: 1.35rem;
      font-weight: 700;
      color: #0C2B4E;
    }
    .inc-exc-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 16px;
    }
    .inc-exc-card {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      padding: 16px 18px;
      display: flex;
      gap: 14px;
      align-items: flex-start;
      transition: all 0.2s ease;
    }
    .inc-exc-card:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      border-color: #008060;
    }
    .inc-exc-icon-box {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .inc-exc-icon-box.inc {
      background: #e6f7f0;
      color: #008060;
    }
    .inc-exc-icon-box.exc {
      background: #fee2e2;
      color: #dc2626;
    }
    .inc-exc-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: #0C2B4E;
      margin-bottom: 4px;
      line-height: 1.3;
    }
    .inc-exc-desc {
      font-size: 0.85rem;
      color: #4b5563;
      line-height: 1.5;
    }
    .table-responsive {
      overflow-x: auto;
      margin: 20px 0;
      border-radius: 8px;
      border: 1px solid #e5e7eb;
    }
    .custom-trek-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;
      text-align: left;
    }
    .custom-trek-table th {
      background: #f8fafc;
      color: #0C2B4E;
      font-weight: 700;
      padding: 12px 16px;
      border-bottom: 2px solid #e2e8f0;
    }
    .custom-trek-table td {
      padding: 12px 16px;
      border-bottom: 1px solid #e2e8f0;
      color: #334155;
    }
    .custom-trek-table tr:hover {
      background: #f1f5f9;
    }
  </style>

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": "https://namastehikingtrek.com/trek/everest-view-trek/#trip",
        "name": "Everest View Trek",
        "description": "7-day scenic Khumbu trekking package to Hotel Everest View (3,880 m), Namche Bazaar, and traditional Sherpa villages. Panoramic mountain views without the Base Camp expedition.",
        "touristType": ["Hikers", "Nature Lovers", "Culture Enthusiasts", "Families", "Photographers"],
        "offers": {
          "@type": "Offer",
          "price": "899",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-01-01",
          "url": "https://namastehikingtrek.com/trek/everest-view-trek/"
        },
        "itinerary": [
          {
            "@type": "City",
            "name": "Lukla to Phakding",
            "description": "Fly from Kathmandu to Lukla (2,860 m), trek along Dudh Koshi Valley to Phakding (2,610 m). 3-4 hours walk."
          },
          {
            "@type": "City",
            "name": "Phakding to Namche Bazaar",
            "description": "Trek through Sagarmatha National Park entrance at Monjo and ascend sustained switchbacks to Namche Bazaar (3,440 m). 5-6 hours walk."
          },
          {
            "@type": "City",
            "name": "Acclimatization in Namche Bazaar",
            "description": "Rest and gentle acclimatization exploration around Namche Bazaar (3,440 m). 2-4 hours optional walking."
          },
          {
            "@type": "City",
            "name": "Hotel Everest View, Khumjung & Khunde Excursion",
            "description": "Hike above Namche to Hotel Everest View (3,880 m) for panoramic vistas of Everest, Lhotse, Ama Dablam; visit Khumjung & Khunde; return to Namche. 5-7 hours."
          },
          {
            "@type": "City",
            "name": "Namche Bazaar to Phakding",
            "description": "Descend through pine forests and suspension bridges back to Phakding (2,610 m). 5-6 hours walk."
          },
          {
            "@type": "City",
            "name": "Phakding to Lukla",
            "description": "Final walking stage along lower Dudh Koshi Valley to Lukla (2,840-2,860 m). 3-4 hours walk."
          },
          {
            "@type": "City",
            "name": "Fly Lukla to Kathmandu",
            "description": "Morning scenic mountain flight from Lukla to Kathmandu (1,400 m). Transfer to hotel."
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://namastehikingtrek.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Nepal Treks",
            "item": "https://namastehikingtrek.com/nepal-treks/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Everest Region",
            "item": "https://namastehikingtrek.com/everest-region-treks/"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Everest View Trek",
            "item": "https://namastehikingtrek.com/trek/everest-view-trek/"
          }
        ]
      }
    ]
  }
  </script>
</head>
<body class="bg-gray-50 text-gray-800 antialiased font-sans">

  <!-- Header -->
  <header class="site-header fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="../../index.html" class="flex items-center gap-3">
          <img src="../../images/logo.png" alt="Namaste Hiking Trek Logo" class="h-12 w-auto">
          <span class="font-heading font-bold text-xl text-primary-navy tracking-tight hidden sm:inline">Namaste Hiking Trek</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8">
          <a href="../../index.html" class="text-sm font-semibold text-gray-700 hover:text-emerald-700 transition-colors">Home</a>
          <div class="relative group">
            <button class="flex items-center gap-1 text-sm font-semibold text-emerald-800 hover:text-emerald-700 transition-colors py-2">
              <span>Nepal Treks</span>
              <svg class="w-4 h-4 text-gray-400 group-hover:text-emerald-700 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <a href="../../everest-region-treks/index.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 font-medium">Everest Region</a>
              <a href="../../annapurna-region-treks/index.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 font-medium">Annapurna Region</a>
              <a href="../../langtang-region-treks/index.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 font-medium">Langtang Region</a>
              <a href="../../manaslu-region-treks/index.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 font-medium">Manaslu Region</a>
              <a href="../../kanchenjunga-region-treks/index.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 font-medium">Kanchenjunga Region</a>
            </div>
          </div>
          <a href="../../about.html" class="text-sm font-semibold text-gray-700 hover:text-emerald-700 transition-colors">About Us</a>
          <a href="../../contact.html" class="text-sm font-semibold text-gray-700 hover:text-emerald-700 transition-colors">Contact</a>
        </nav>

        <!-- Header Actions -->
        <div class="flex items-center gap-4">
          <a href="tel:+9779851037083" class="hidden md:flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-emerald-700 transition-colors">
            <svg class="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <span>+977 9851037083</span>
          </a>
          <a href="#section-booking" class="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow">
            Book Trek
          </a>
          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none" aria-label="Toggle Navigation Menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary-navy overflow-hidden">
    <!-- Hero Background Image -->
    <div class="absolute inset-0 z-0">
      <img src="../../images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-view-10.jpg" alt="Everest View Trek Panorama" class="w-full h-full object-cover opacity-35 transform scale-105 transition-transform duration-1000">
      <div class="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/80 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-xs md:text-sm text-gray-300 mb-6" aria-label="Breadcrumb">
        <a href="../../index.html" class="hover:text-white transition-colors">Home</a>
        <span>/</span>
        <a href="../../everest-region-treks/index.html" class="hover:text-white transition-colors">Everest Region</a>
        <span>/</span>
        <span class="text-emerald-400 font-medium">Everest View Trek</span>
      </nav>

      <!-- Badge & Rating -->
      <div class="flex flex-wrap items-center gap-3 mb-4">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          7 Days Route Itinerary • Moderate Difficulty
        </span>
        <span class="inline-flex items-center gap-1 text-xs text-amber-300">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <span class="font-bold text-white">5.0</span> (98+ Verified Reviews)
        </span>
        <span class="text-xs text-gray-300">• 100% Guaranteed Departures</span>
      </div>

      <!-- Main Title -->
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-4xl mb-6">
        Everest View Trek
      </h1>

      <!-- Subtitle -->
      <p class="text-base sm:text-lg md:text-xl text-gray-200 font-normal leading-relaxed max-w-3xl mb-10">
        7 Days of Spectacular Mountain Trails, Traditional Sherpa Villages, and Panoramic Views of Mount Everest, Lhotse, Ama Dablam and Thamserku without the Base Camp Expedition.
      </p>

      <!-- 14 Quick Facts Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 pt-6 border-t border-white/10">
        
        <!-- Fact 1: Trek Name -->
        <div class="trip-fact-item">
          <div class="trip-fact-icon-wrapper">
            <svg class="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
          </div>
          <div>
            <div class="trip-fact-label">Trek Name</div>
            <div class="trip-fact-value">Everest View Trek</div>
          </div>
        </div>

        <!-- Fact 2: Duration -->
        <div class="trip-fact-item">
          <div class="trip-fact-icon-wrapper">
            <svg class="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <div class="trip-fact-label">Duration</div>
            <div class="trip-fact-value">7 Route Days</div>
          </div>
        </div>

        <!-- Fact 3: Destination -->
        <div class="trip-fact-item">
          <div class="trip-fact-icon-wrapper">
            <svg class="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/></svg>
          </div>
          <div>
            <div class="trip-fact-label">Destination</div>
            <div class="trip-fact-value">Khumbu, Nepal</div>
          </div>
        </div>

        <!-- Fact 4: Starting Point -->
        <div class="trip-fact-item">
          <div class="trip-fact-icon-wrapper">
            <svg class="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
          </div>
          <div>
            <div class="trip-fact-label">Starting Point</div>
            <div class="trip-fact-value">Kathmandu</div>
          </div>
        </div>

        <!-- Fact 5: Trek Starting Point -->
        <div class="trip-fact-item">
          <div class="trip-fact-icon-wrapper">
            <svg class="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
          </div>
          <div>
            <div class="trip-fact-label">Trek Gateway</div>
            <div class="trip-fact-value">Lukla (2,860 m)</div>
          </div>
        </div>

        <!-- Fact 6: Main Destinations -->
        <div class="trip-fact-item">
          <div class="trip-fact-icon-wrapper">
            <svg class="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
          </div>
          <div>
            <div class="trip-fact-label">Destinations</div>
            <div class="trip-fact-value">Namche, Khumjung</div>
          </div>
        </div>

        <!-- Fact 7: Max Altitude -->
        <div class="trip-fact-item">
          <div class="trip-fact-icon-wrapper">
            <svg class="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
          </div>
          <div>
            <div class="trip-fact-label">Max Altitude</div>
            <div class="trip-fact-value">~3,880 m Viewpoint</div>
          </div>
        </div>

        <!-- Fact 8: Highest Overnight -->
        <div class="trip-fact-item">
          <div class="trip-fact-icon-wrapper">
            <svg class="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          </div>
          <div>
            <div class="trip-fact-label">Highest Sleep</div>
            <div class="trip-fact-value">Namche (~3,440 m)</div>
          </div>
        </div>

        <!-- Fact 9: Difficulty -->
        <div class="trip-fact-item">
          <div class="trip-fact-icon-wrapper">
            <svg class="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          </div>
          <div>
            <div class="trip-fact-label">Difficulty</div>
            <div class="trip-fact-value">Moderate</div>
          </div>
        </div>

        <!-- Fact 10: Trekking Style -->
        <div class="trip-fact-item">
          <div class="trip-fact-icon-wrapper">
            <svg class="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
          </div>
          <div>
            <div class="trip-fact-label">Trekking Style</div>
            <div class="trip-fact-value">Guided Teahouse</div>
          </div>
        </div>

        <!-- Fact 11: Daily Walking -->
        <div class="trip-fact-item">
          <div class="trip-fact-icon-wrapper">
            <svg class="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div>
            <div class="trip-fact-label">Daily Walking</div>
            <div class="trip-fact-value">3–7 Hours / Day</div>
          </div>
        </div>

        <!-- Fact 12: Accommodation -->
        <div class="trip-fact-item">
          <div class="trip-fact-icon-wrapper">
            <svg class="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/></svg>
          </div>
          <div>
            <div class="trip-fact-label">Accommodation</div>
            <div class="trip-fact-value">Mountain Lodges</div>
          </div>
        </div>

        <!-- Fact 13: Transportation -->
        <div class="trip-fact-item">
          <div class="trip-fact-icon-wrapper">
            <svg class="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/></svg>
          </div>
          <div>
            <div class="trip-fact-label">Transport</div>
            <div class="trip-fact-value">Lukla Flight & Cars</div>
          </div>
        </div>

        <!-- Fact 14: Best Season -->
        <div class="trip-fact-item">
          <div class="trip-fact-icon-wrapper">
            <svg class="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          </div>
          <div>
            <div class="trip-fact-label">Best Season</div>
            <div class="trip-fact-value">Spring & Autumn</div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- Sticky Sub-Navigation Bar -->
  <nav class="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm hidden md:block">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between overflow-x-auto no-scrollbar py-3 text-sm font-semibold text-gray-600 gap-6">
        <a href="#section-overview" class="hover:text-emerald-700 transition-colors whitespace-nowrap">Overview</a>
        <a href="#section-itinerary" class="hover:text-emerald-700 transition-colors whitespace-nowrap">Itinerary</a>
        <a href="#section-includes" class="hover:text-emerald-700 transition-colors whitespace-nowrap">Includes & Excludes</a>
        <a href="#section-dates" class="hover:text-emerald-700 transition-colors whitespace-nowrap">Dates & Availability</a>
        <a href="#section-packing" class="hover:text-emerald-700 transition-colors whitespace-nowrap">Packing List</a>
        <a href="#section-details" class="hover:text-emerald-700 transition-colors whitespace-nowrap">Practical Guide</a>
        <a href="#section-altitude-profile" class="hover:text-emerald-700 transition-colors whitespace-nowrap">Altitude Profile</a>
        <a href="#section-weather" class="hover:text-emerald-700 transition-colors whitespace-nowrap">Weather</a>
        <a href="#section-map" class="hover:text-emerald-700 transition-colors whitespace-nowrap">Route Map</a>
        <a href="#section-reviews" class="hover:text-emerald-700 transition-colors whitespace-nowrap">Reviews</a>
        <a href="#section-faqs" class="hover:text-emerald-700 transition-colors whitespace-nowrap">FAQs</a>
        <a href="#section-booking" class="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-1.5 rounded-full text-xs font-bold transition-colors whitespace-nowrap">Book Now</a>
      </div>
    </div>
  </nav>

  <!-- Main Grid Layout Container -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      
      <!-- Main Content Column (Left 8 cols) -->
      <div class="lg:col-span-8 space-y-16">
`;
};
