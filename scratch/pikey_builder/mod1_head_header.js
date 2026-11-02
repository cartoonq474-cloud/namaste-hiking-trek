// Module 1: Head, Metadata, SEO JSON-LD Schemas, and Header Navigation
function getHeadAndHeader() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pikey Peak Trek (9 Days) — Lower Everest Panoramic Sunrise & Sherpa Heritage | Namaste Hiking Trek</title>
  <meta name="description" content="Embark on the 9-day Pikey Peak Trek in lower Everest, Nepal. Witness legendary sunrise panoramas of Mt. Everest, Kanchenjunga, and Makalu from 4,065m without Lukla flight delays. Teahouses, Sherpa culture, and certified guides from $890.">
  <!-- Canonical URL -->
  <link rel="canonical" href="https://namastehikingtrek.com/trek/pikey-peak-trek/" />

  <!-- Favicon & Touch Icons -->
  <link rel="icon" type="image/png" href="../../images/logo.png">
  <link rel="apple-touch-icon" href="../../images/logo.png">

  <!-- Open Graph / Social Media Metadata -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://namastehikingtrek.com/trek/pikey-peak-trek/">
  <meta property="og:title" content="Pikey Peak Trek (9 Days) — Lower Everest Panoramic Sunrise & Sherpa Heritage">
  <meta property="og:description" content="Embark on the 9-day Pikey Peak Trek in lower Everest, Nepal. Witness legendary sunrise panoramas of Mt. Everest, Kanchenjunga, and Makalu from 4,065m without Lukla flight delays. Teahouses, Sherpa culture, and certified guides from $890.">
  <meta property="og:image" content="https://namastehikingtrek.com/images/treks/pikey-peak/pikey-peak-himalayan-sunrise-01.jpg">

  <!-- Twitter Card Metadata -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Pikey Peak Trek (9 Days) — Lower Everest Panoramic Sunrise & Sherpa Heritage">
  <meta name="twitter:description" content="Embark on the 9-day Pikey Peak Trek in lower Everest, Nepal. Witness legendary sunrise panoramas of Mt. Everest, Kanchenjunga, and Makalu from 4,065m without Lukla flight delays. Teahouses, Sherpa culture, and certified guides from $890.">
  <meta name="twitter:image" content="https://namastehikingtrek.com/images/treks/pikey-peak/pikey-peak-himalayan-sunrise-01.jpg">

  <!-- Static JSON-LD Structured Data (TouristTrip, BreadcrumbList, FAQPage) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": "https://namastehikingtrek.com/trek/pikey-peak-trek/#trip",
        "name": "Pikey Peak Trek (9 Days)",
        "description": "A 9-day scenic Himalayan trekking expedition in the lower Everest/Solukhumbu region of Nepal to Pikey Peak summit (4,065 m) featuring legendary sunrise views of Mt. Everest, Kanchenjunga, Makalu, and traditional Sherpa villages of Jhapre and Junbesi.",
        "touristType": ["Hikers", "Trekking Enthusiasts", "Alpine Walkers", "Photographers", "Culture Enthusiasts"],
        "subTrip": [
          { "@type": "TouristTrip", "name": "Day 1: Arrival in Kathmandu (1,400 m) & Trek Preparation" },
          { "@type": "TouristTrip", "name": "Day 2: Scenic Drive from Kathmandu to Dhap Bazaar (2,850 m)" },
          { "@type": "TouristTrip", "name": "Day 3: Trek from Dhap Bazaar to Jhapre (2,920 m)" },
          { "@type": "TouristTrip", "name": "Day 4: Trek from Jhapre to Pikey Peak Base Camp (3,640 m)" },
          { "@type": "TouristTrip", "name": "Day 5: Pre-Dawn Summit Climb of Pikey Peak (4,065 m) for Sunrise, Descend to Jasmane Bhanjyang (3,550 m)" },
          { "@type": "TouristTrip", "name": "Day 6: Trek from Jasmane Bhanjyang to Junbesi (2,700 m) & Optional Thupten Chholing Monastery" },
          { "@type": "TouristTrip", "name": "Day 7: Trek from Junbesi to Phaplu (2,469 m)" },
          { "@type": "TouristTrip", "name": "Day 8: Scenic Overland Drive from Phaplu to Kathmandu (1,400 m)" },
          { "@type": "TouristTrip", "name": "Day 9: Final International Departure from Kathmandu" }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "750",
          "highPrice": "1150",
          "priceCurrency": "USD",
          "offerCount": "18",
          "url": "https://namastehikingtrek.com/trek/pikey-peak-trek/"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://namastehikingtrek.com/trek/pikey-peak-trek/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://namastehikingtrek.com/" },
          { "@type": "ListItem", "position": 2, "name": "Everest Treks", "item": "https://namastehikingtrek.com/nepal-trekking-packages/everest/" },
          { "@type": "ListItem", "position": 3, "name": "Pikey Peak Trek", "item": "https://namastehikingtrek.com/trek/pikey-peak-trek/" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://namastehikingtrek.com/trek/pikey-peak-trek/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long is the Pikey Peak Trek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The standard comprehensive itinerary is 9 calendar days. It includes 1 day of Kathmandu preparation, 2 overland scenic drive days (Kathmandu to Dhap Bazaar and Phaplu back to Kathmandu), 5 walking stages through Jhapre, Pikey Base Camp, Jasmane Bhanjyang, Junbesi, and Phaplu, and 1 final departure day."
            }
          },
          {
            "@type": "Question",
            "name": "Why do we drive instead of fly to Lukla for Pikey Peak?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pikey Peak is situated in the lower Solukhumbu region and is accessible by road via the BP Highway to Dhap Bazaar and returning from Phaplu. Driving avoids the notorious flight delays and weather cancellations common at Lukla airport, provides a scenic introduction to mid-hill Nepal, and keeps package costs significantly lower."
            }
          },
          {
            "@type": "Question",
            "name": "What is the maximum elevation and how difficult is the trek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The highest point is Pikey Peak summit at 4,065 meters (13,337 feet), reached on an early morning excursion for sunrise. The highest sleeping altitude is Pikey Peak Base Camp at 3,640 meters. The trek is graded Moderate (Grade 3/5) and is suitable for reasonably fit beginners, active families, and seniors with basic hill-walking preparation."
            }
          },
          {
            "@type": "Question",
            "name": "Is Sir Edmund Hillary really connected to Pikey Peak?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Sir Edmund Hillary famously stated that Pikey Peak offers his favorite panoramic view of Mount Everest in all of Nepal. From the summit, you enjoy a panoramic 360-degree sweep extending from Kanchenjunga in the far east across Makalu, Lhotse, Everest, Nuptse, Thamserku, Gaurishankar, and all the way to the Langtang range."
            }
          }
        ]
      }
    ]
  }
  </script>

    <!-- Core Design Tokens & Component Styles -->
  <link rel="stylesheet" href="../../index.css?v=7">
  <style>
    .trek-sub-nav-btn.active {
      border-bottom-color: var(--color-copper-orange) !important;
    }
    .gear-section-title {
      border-left-color: var(--color-copper-orange) !important;
    }
    .packing-item-label {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 12px;
      border-radius: 8px;
      transition: background-color 0.2s ease;
      cursor: pointer;
      user-select: none;
    }
    .packing-item-label:hover {
      background-color: #f1f5f9;
    }
    .packing-checkbox {
      width: 18px;
      height: 18px;
      cursor: pointer;
      accent-color: #008060;
    }
    .packing-item-label.checked {
      text-decoration: line-through;
      color: #94a3b8;
    }
  </style>
</head>
<body>

  <!-- Noscript Fallback Notice -->
  <noscript>
    <div style="background:#FEF3C7;color:#92400E;padding:12px 20px;text-align:center;font-size:0.9rem;">
      Interactive features (elevation chart, interactive packing checklist, weather visualizer) require JavaScript. All trek details, itinerary, packing lists, and pricing are fully accessible without it.
    </div>
  </noscript>

  <!-- Header Navigation -->
  <header class="main-header">
    <div class="container flex-between">
      <a href="../../index.html" class="logo-brand" aria-label="Namaste Hiking Trek">
        <img src="../../images/logo.png" alt="Namaste Hiking Trek Logo">
      </a>

      <!-- Hamburger Menu Button -->
      <button class="mobile-nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
      </button>

      <!-- Navigation Links -->
      <nav>
        <ul class="nav-menu">
          <!-- Mega Menu Dropdown for All Treks -->
          <li class="nav-item-dropdown mega-nav-item">
            <a href="../../nepal-trekking-packages/" class="nav-link active">All Treks ▾</a>
            <div class="mega-menu-dropdown">
              <div class="mega-menu-container">
                
                <!-- Left Sidebar Navigation -->
                <div class="mega-menu-sidebar">
                  <div class="mega-sidebar-item active" data-target="tab-popular">Popular Treks in Nepal</div>
                  <div class="mega-sidebar-item" data-target="tab-everest">Everest</div>
                  <div class="mega-sidebar-item" data-target="tab-annapurna">Annapurna</div>
                  <div class="mega-sidebar-item" data-target="tab-manaslu">Manaslu</div>
                  <div class="mega-sidebar-item" data-target="tab-langtang">Langtang</div>
                  <div class="mega-sidebar-item" data-target="tab-kanchenjunga">Kanchenjunga</div>
                  <div class="mega-sidebar-item" data-target="tab-dolpo">Dolpo</div>
                  <div class="mega-sidebar-item" data-target="tab-makalu">Makalu</div>
                  <div class="mega-sidebar-item" data-target="tab-rolwaling">Rolwaling</div>
                  <div class="mega-sidebar-item" data-target="tab-farwest">Far West</div>
                  <div class="mega-sidebar-item" data-target="tab-ganesh">Ganesh Himal</div>
                </div>

                <!-- Right Content Area -->
                <div class="mega-menu-content-wrap">
                  <div class="mega-top-bar">
                    <button class="mega-talk-pill open-inquiry-btn">Confused? Let's Talk ↗</button>
                  </div>

                  <!-- Tab 1: Popular Treks in Nepal (Default 4-Column Grid) -->
                  <div class="mega-tab-content active" id="tab-popular">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Two weeks Trek</div>
                        <a href="../../trek/everest-base-camp-trek/" class="mega-trek-link"><span>Everest Base Camp Trek</span> <span class="days-badge">14 DAYS</span></a>
                        <a href="../../trek/manaslu-circuit-trek/" class="mega-trek-link"><span>Manaslu Circuit Trek</span> <span class="days-badge">13 DAYS</span></a>
                        <a href="../../trek/annapurna-circuit-trek/" class="mega-trek-link"><span>Annapurna Circuit Trek</span> <span class="days-badge">13 DAYS</span></a>
                        <a href="../../trek/annapurna-base-camp-trek/" class="mega-trek-link"><span>Annapurna Base Camp Trek</span> <span class="days-badge">12 DAYS</span></a>
                      </div>

                      <div class="mega-col">
                        <div class="mega-col-title">One week Treks</div>
                        <a href="../../trek/pikey-peak-trek/" class="mega-trek-link"><span>Pikey Peak Trek</span> <span class="days-badge">9 DAYS</span></a>
                        <a href="../../trek/langtang-valley-trek/" class="mega-trek-link"><span>Langtang Valley Trek</span> <span class="days-badge">8 DAYS</span></a>
                        <a href="../../trek/ghorepani-poon-hill-trek/" class="mega-trek-link"><span>Ghorepani Poon Hill Trek</span> <span class="days-badge">4 DAYS</span></a>
                        <a href="../../trek/mardi-himal-trek/" class="mega-trek-link"><span>Mardi Base Camp Trek</span> <span class="days-badge">6 DAYS</span></a>
                      </div>

                      <div class="mega-col">
                        <div class="mega-col-title">Remote and Unexplored</div>
                        <a href="../../trek/kanchenjunga-base-camp-trek/" class="mega-trek-link"><span>Kanchenjunga Circuit</span> <span class="days-badge">21 DAYS</span></a>
                        <a href="../../trek/upper-dolpo-trek/" class="mega-trek-link"><span>Upper Dolpo Circuit</span> <span class="days-badge">24 DAYS</span></a>
                        <a href="../../trek/makalu-base-camp-trek/" class="mega-trek-link"><span>Makalu Base Camp Trek</span> <span class="days-badge">19 DAYS</span></a>
                        <a href="../../trek/dhaulagiri-circuit-trek/" class="mega-trek-link"><span>Dhaulagiri Circuit Trek</span> <span class="days-badge">18 DAYS</span></a>
                      </div>

                      <div class="mega-col">
                        <div class="mega-col-title">Peak Climbing</div>
                        <a href="../../trek/island-peak-climbing/" class="mega-trek-link"><span>Island Peak with EBC</span> <span class="days-badge">17 DAYS</span></a>
                        <a href="../../trek/mera-peak-climbing/" class="mega-trek-link"><span>Mera Peak Climbing</span> <span class="days-badge">18 DAYS</span></a>
                        <a href="../../trek/lobuche-peak-climbing/" class="mega-trek-link"><span>Lobuche East Climbing</span> <span class="days-badge">18 DAYS</span></a>
                        <a href="../../trek/tent-peak-climbing/" class="mega-trek-link"><span>Tent Peak (Tharpu Chuli)</span> <span class="days-badge">16 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 2: Everest -->
                  <div class="mega-tab-content" id="tab-everest">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Classic Treks</div>
                        <a href="../../trek/everest-base-camp-trek/" class="mega-trek-link"><span>Everest Base Camp Trek</span> <span class="days-badge">14 DAYS</span></a>
                        <a href="../../trek/gokyo-lakes-trek/" class="mega-trek-link"><span>Gokyo Lakes Trek</span> <span class="days-badge">12 DAYS</span></a>
                        <a href="../../trek/everest-view-trek/" class="mega-trek-link"><span>Everest View Trek</span> <span class="days-badge">7 DAYS</span></a>
                        <a href="../../trek/pikey-peak-trek/" class="mega-trek-link"><span>Pikey Peak Trek</span> <span class="days-badge">9 DAYS</span></a>
                      </div>
                      <div class="mega-col">
                        <div class="mega-col-title">High Passes & Circuit</div>
                        <a href="../../trek/everest-three-passes-trek/" class="mega-trek-link"><span>Everest Three High Passes</span> <span class="days-badge">19 DAYS</span></a>
                        <a href="../../trek/everest-cho-la-pass-trek/" class="mega-trek-link"><span>Gokyo Cho La Pass EBC</span> <span class="days-badge">16 DAYS</span></a>
                        <a href="../../trek/renjo-la-pass-trek/" class="mega-trek-link"><span>Renjo La Pass Trek</span> <span class="days-badge">12 DAYS</span></a>
                      </div>
                      <div class="mega-col">
                        <div class="mega-col-title">Luxury & Short</div>
                        <a href="../../trek/everest-luxury-lodge-trek/" class="mega-trek-link"><span>Everest Luxury Lodge Trek</span> <span class="days-badge">10 DAYS</span></a>
                        <a href="../../trek/ebc-heli-trek/" class="mega-trek-link"><span>EBC Trek with Heli Return</span> <span class="days-badge">9 DAYS</span></a>
                        <a href="../../trek/gokyo-renjo-la-luxury-trek/" class="mega-trek-link"><span>Gokyo Luxury Experience</span> <span class="days-badge">11 DAYS</span></a>
                      </div>
                      <div class="mega-col">
                        <div class="mega-col-title">Climbing Expeditions</div>
                        <a href="../../trek/island-peak-climbing/" class="mega-trek-link"><span>Island Peak Expedition</span> <span class="days-badge">17 DAYS</span></a>
                        <a href="../../trek/mera-peak-climbing/" class="mega-trek-link"><span>Mera Peak Climbing</span> <span class="days-badge">18 DAYS</span></a>
                        <a href="../../trek/lobuche-peak-climbing/" class="mega-trek-link"><span>Lobuche East Peak</span> <span class="days-badge">18 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 3: Annapurna -->
                  <div class="mega-tab-content" id="tab-annapurna">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Base Camp & Sanctuary</div>
                        <a href="../../trek/annapurna-base-camp-trek/" class="mega-trek-link"><span>Annapurna Base Camp Trek</span> <span class="days-badge">12 DAYS</span></a>
                        <a href="../../trek/abc-short-trek/" class="mega-trek-link"><span>Short ABC Trek</span> <span class="days-badge">7 DAYS</span></a>
                        <a href="../../trek/mardi-himal-trek/" class="mega-trek-link"><span>Mardi Himal Trek</span> <span class="days-badge">6 DAYS</span></a>
                      </div>
                      <div class="mega-col">
                        <div class="mega-col-title">Circuit & Lakes</div>
                        <a href="../../trek/annapurna-circuit-trek/" class="mega-trek-link"><span>Annapurna Circuit Trek</span> <span class="days-badge">13 DAYS</span></a>
                        <a href="../../trek/tilicho-lake-circuit-trek/" class="mega-trek-link"><span>Tilicho Lake & Annapurna</span> <span class="days-badge">16 DAYS</span></a>
                        <a href="../../trek/nar-phu-annapurna-circuit/" class="mega-trek-link"><span>Nar Phu Valley & Circuit</span> <span class="days-badge">18 DAYS</span></a>
                      </div>
                      <div class="mega-col">
                        <div class="mega-col-title">Short & Family</div>
                        <a href="../../trek/ghorepani-poon-hill-trek/" class="mega-trek-link"><span>Ghorepani Poon Hill</span> <span class="days-badge">4 DAYS</span></a>
                        <a href="../../trek/khopra-ridge-trek/" class="mega-trek-link"><span>Khopra Danda Ridge Trek</span> <span class="days-badge">9 DAYS</span></a>
                        <a href="../../trek/mohare-danda-trek/" class="mega-trek-link"><span>Mohare Danda Eco Trek</span> <span class="days-badge">5 DAYS</span></a>
                      </div>
                      <div class="mega-col">
                        <div class="mega-col-title">Off the Beaten Path</div>
                        <a href="../../trek/sikles-kapuche-lake-trek/" class="mega-trek-link"><span>Sikles & Kapuche Lake</span> <span class="days-badge">6 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 4: Manaslu -->
                  <div class="mega-tab-content" id="tab-manaslu">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Classic & Circuits</div>
                        <a href="../../trek/manaslu-circuit-trek/" class="mega-trek-link"><span>Manaslu Circuit Trek</span> <span class="days-badge">13 DAYS</span></a>
                        <a href="../../trek/manaslu-tsum-valley-trek/" class="mega-trek-link"><span>Manaslu with Tsum Valley</span> <span class="days-badge">18 DAYS</span></a>
                      </div>
                      <div class="mega-col">
                        <div class="mega-col-title">Spiritual & Cultural</div>
                        <a href="../../trek/tsum-valley-trek/" class="mega-trek-link"><span>Sacred Tsum Valley Trek</span> <span class="days-badge">12 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 5: Langtang -->
                  <div class="mega-tab-content" id="tab-langtang">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Valley & Lakes</div>
                        <a href="../../trek/langtang-valley-trek/" class="mega-trek-link"><span>Langtang Valley Trek</span> <span class="days-badge">8 DAYS</span></a>
                        <a href="../../trek/gosaikunda-lake-trek/" class="mega-trek-link"><span>Gosaikunda Holy Lakes</span> <span class="days-badge">6 DAYS</span></a>
                        <a href="../../trek/langtang-gosaikunda-trek/" class="mega-trek-link"><span>Langtang Gosaikunda Trek</span> <span class="days-badge">15 DAYS</span></a>
                      </div>
                      <div class="mega-col">
                        <div class="mega-col-title">Heritage & Circuit</div>
                        <a href="../../trek/tamang-heritage-trail/" class="mega-trek-link"><span>Tamang Heritage Trail</span> <span class="days-badge">7 DAYS</span></a>
                        <a href="../../trek/helambu-cultural-trek/" class="mega-trek-link"><span>Helambu Circuit Trek</span> <span class="days-badge">7 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 6: Kanchenjunga -->
                  <div class="mega-tab-content" id="tab-kanchenjunga">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Eastern Wilderness</div>
                        <a href="../../trek/kanchenjunga-base-camp-trek/" class="mega-trek-link"><span>Kanchenjunga Circuit</span> <span class="days-badge">21 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 7: Dolpo -->
                  <div class="mega-tab-content" id="tab-dolpo">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Mystical Trans-Himalaya</div>
                        <a href="../../trek/upper-dolpo-trek/" class="mega-trek-link"><span>Upper Dolpo Circuit</span> <span class="days-badge">24 DAYS</span></a>
                        <a href="../../trek/lower-dolpo-trek/" class="mega-trek-link"><span>Lower Dolpo Trek</span> <span class="days-badge">14 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 8: Makalu -->
                  <div class="mega-tab-content" id="tab-makalu">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Rugged Giants</div>
                        <a href="../../trek/makalu-base-camp-trek/" class="mega-trek-link"><span>Makalu Base Camp Trek</span> <span class="days-badge">19 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 9: Rolwaling -->
                  <div class="mega-tab-content" id="tab-rolwaling">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Alpine Adventure</div>
                        <a href="../../trek/rolwaling-valley-trek/" class="mega-trek-link"><span>Rolwaling Valley Trek</span> <span class="days-badge">12 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 10: Far West -->
                  <div class="mega-tab-content" id="tab-farwest">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Wild Frontiers</div>
                        <a href="../../trek/rara-lake-trek/" class="mega-trek-link"><span>Rara Lake Wilderness</span> <span class="days-badge">10 DAYS</span></a>
                        <a href="../../trek/khaptad-national-park-trek/" class="mega-trek-link"><span>Khaptad Plateau Trek</span> <span class="days-badge">9 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 11: Ganesh Himal -->
                  <div class="mega-tab-content" id="tab-ganesh">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Ruby Valley & Foothills</div>
                        <a href="../../trek/ruby-valley-trek/" class="mega-trek-link"><span>Ganesh Himal Ruby Valley Trek</span> <span class="days-badge">11 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </li>

          <!-- Standard Tour Packages Dropdown -->
          <li class="nav-item-dropdown">
            <a href="../../nepal-tour-packages/" class="nav-link">Nepal Tours ▾</a>
            <div class="nav-dropdown-menu">
              <a href="../../tour/kathmandu-pokhara-chitwan-tour/" class="nav-dropdown-link">Best of Nepal (8 Days)</a>
              <a href="../../tour/kathmandu-cultural-heritage-tour/" class="nav-dropdown-link">Kathmandu Heritage (4 Days)</a>
              <a href="../../tour/pokhara-valley-nature-tour/" class="nav-dropdown-link">Pokhara Scenic (4 Days)</a>
              <a href="../../tour/chitwan-national-park-safari/" class="nav-dropdown-link">Chitwan Jungle Safari (3 Days)</a>
              <a href="../../tour/nagarkot-sunrise-bhaktapur-tour/" class="nav-dropdown-link">Nagarkot Sunrise (3 Days)</a>
              <a href="../../tour/lumbini-birthplace-of-buddha-tour/" class="nav-dropdown-link">Lumbini Buddhist Tour (4 Days)</a>
              <a href="../../tour/nepal-luxury-helicopter-tour/" class="nav-dropdown-link">Luxury Helicopter Tour (5 Days)</a>
            </div>
          </li>

          <!-- Standard Trekking Regions Dropdown -->
          <li class="nav-item-dropdown">
            <a href="../../trekking-regions-nepal/" class="nav-link">Trekking Regions ▾</a>
            <div class="nav-dropdown-menu">
              <a href="../../everest-region-treks/" class="nav-dropdown-link">Everest Region Treks</a>
              <a href="../../annapurna-region-treks/" class="nav-dropdown-link">Annapurna Region Treks</a>
              <a href="../../langtang-region-treks/" class="nav-dropdown-link">Langtang Region Treks</a>
              <a href="../../manaslu-region-treks/" class="nav-dropdown-link">Manaslu Region Treks</a>
              <a href="../../mustang-region-treks/" class="nav-dropdown-link">Mustang Region Treks</a>
              <a href="../../dolpo-region-treks/" class="nav-dropdown-link">Dolpo Region Treks</a>
              <a href="../../kanchenjunga-region-treks/" class="nav-dropdown-link">Kanchenjunga Region Treks</a>
              <a href="../../ganesh-himal-region-treks/" class="nav-dropdown-link">Ganesh Himal Region Treks</a>
              <a href="../../makalu-region-treks/" class="nav-dropdown-link">Makalu Region Treks</a>
              <a href="../../rolwaling-region-treks/" class="nav-dropdown-link">Rolwaling Region Treks</a>
              <a href="../../restricted-area-treks-nepal/" class="nav-dropdown-link">Restricted Area Treks</a>
              <a href="../../peak-climbing-nepal/" class="nav-dropdown-link">Peak Climbing in Nepal</a>
            </div>
          </li>

          <!-- Travel Guide Dropdown -->
          <li class="nav-item-dropdown">
            <a href="../../nepal-travel-guide/" class="nav-link">Travel Guide ▾</a>
            <div class="nav-dropdown-menu">
              <a href="../../nepal-visa/" class="nav-dropdown-link">Nepal Visa</a>
              <a href="../../equipment-checklist/" class="nav-dropdown-link">Equipment Checklist</a>
              <a href="../../travel-insurance/" class="nav-dropdown-link">Travel Insurance</a>
              <a href="../../recommended-medical-kit/" class="nav-dropdown-link">Recommended Medical Kit</a>
            </div>
          </li>
          <!-- Company Info Dropdown -->
          <li class="nav-item-dropdown">
            <span class="nav-link">Company Info ▾</span>
            <div class="nav-dropdown-menu">
              <a href="../../about.html" class="nav-dropdown-link">About Us</a>
              <a href="../../team.html" class="nav-dropdown-link">Meet Our Team</a>
              <a href="../../careers.html" class="nav-dropdown-link">Careers & Jobs</a>
              <a href="../../reviews.html" class="nav-dropdown-link">Reviews & Testimonials</a>
            </div>
          </li>

          <li><a href="../../blogs.html" class="nav-link">Blog</a></li>
          <li><a href="../../contact.html" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div>
        <button class="btn btn-primary open-inquiry-btn">Book Your Trek</button>
      </div>
    </div>
  </header>`;
}

module.exports = { getHeadAndHeader };

