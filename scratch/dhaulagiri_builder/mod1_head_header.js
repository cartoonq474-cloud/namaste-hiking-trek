// Module 1: Head, Metadata, SEO JSON-LD Schemas, and Header Navigation for Dhaulagiri Circuit Trek
function getHeadAndHeader() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dhaulagiri Circuit Trek - 20 Days Expedition & High Passes | Namaste Hiking Trek</title>
  <meta name="description" content="Embark on the ultimate 20-day Dhaulagiri Circuit Trek. Cross French Pass (5,360 m) and Dhampus Pass (5,250 m), camp at Dhaulagiri Base Camp and Hidden Valley, and explore remote western Nepal with licensed Sherpa guides.">
  <link rel="canonical" href="https://namastehikingtrek.com/trek/dhaulagiri-circuit-trek/" />
  
  <meta property="og:title" content="Dhaulagiri Circuit Trek - 20 Days Expedition & High Passes | Namaste Hiking Trek" />
  <meta property="og:description" content="Explore remote western Nepal on a 20-day wilderness expedition around Mount Dhaulagiri (8,167 m). Fully supported camping, Dhaulagiri Base Camp, and two passes above 5,200 m." />
  <meta property="og:image" content="https://namastehikingtrek.com/images/hero-himalayas.jpg" />
  <meta property="og:url" content="https://namastehikingtrek.com/trek/dhaulagiri-circuit-trek/" />
  <meta property="og:type" content="website" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Dhaulagiri Circuit Trek - 20 Days Expedition & High Passes" />
  <meta name="twitter:description" content="Cross French Pass (5,360 m) and Dhampus Pass (5,250 m) with supported camping in Hidden Valley and Dhaulagiri Base Camp." />
  <meta name="twitter:image" content="https://namastehikingtrek.com/images/hero-himalayas.jpg" />

  <link rel="icon" type="image/png" href="../../images/logo.png">
  <link rel="apple-touch-icon" href="../../images/logo.png">
  <link rel="stylesheet" href="../../index.css?v=7">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": "https://namastehikingtrek.com/trek/dhaulagiri-circuit-trek/#trip",
        "name": "Dhaulagiri Circuit Trek (20 Days)",
        "description": "Challenging 20-day high-altitude camping expedition in western Nepal around Mount Dhaulagiri (8,167 m), crossing French Pass (5,360 m) and Dhampus Pass (5,250 m) with supported camping at Italian Base Camp, Dhaulagiri Base Camp, and Hidden Valley.",
        "touristType": ["Experienced Trekkers", "High-Altitude Wilderness Hikers", "Mountaineers"],
        "offers": {
          "@type": "Offer",
          "price": "1999",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-01-01",
          "url": "https://namastehikingtrek.com/trek/dhaulagiri-circuit-trek/"
        },
        "provider": {
          "@type": "TravelAgency",
          "name": "Namaste Hiking Trek",
          "url": "https://namastehikingtrek.com/",
          "logo": "https://namastehikingtrek.com/images/logo.png",
          "telephone": "+977-9800000000",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Thamel",
            "addressLocality": "Kathmandu",
            "addressRegion": "Bagmati",
            "postalCode": "44600",
            "addressCountry": "NP"
          }
        },
        "itinerary": [
          { "@type": "Day", "name": "Day 1: Arrival in Kathmandu (1,355 m)" },
          { "@type": "Day", "name": "Day 2: Kathmandu Valley Sightseeing & Expedition Preparation (1,355 m)" },
          { "@type": "Day", "name": "Day 3: Drive from Kathmandu to Beni (~836 m)" },
          { "@type": "Day", "name": "Day 4: Drive from Beni to Babiyachaur (~970 m)" },
          { "@type": "Day", "name": "Day 5: Trek from Babiyachaur to Dharapani (~1,560 m)" },
          { "@type": "Day", "name": "Day 6: Trek from Dharapani to Muri (~1,850 m)" },
          { "@type": "Day", "name": "Day 7: Trek from Muri to Boghara (~2,080 m)" },
          { "@type": "Day", "name": "Day 8: Trek from Boghara to Dobang (~2,520 m)" },
          { "@type": "Day", "name": "Day 9: Trek from Dobang to Choriban Khola (~3,110 m)" },
          { "@type": "Day", "name": "Day 10: Trek from Choriban Khola to Italian Base Camp (~3,660 m)" },
          { "@type": "Day", "name": "Day 11: Acclimatization and Rest Day at Italian Base Camp (~3,660 m)" },
          { "@type": "Day", "name": "Day 12: Trek from Italian Base Camp to Glacier Camp (~4,200 m)" },
          { "@type": "Day", "name": "Day 13: Trek from Glacier Camp to Dhaulagiri Base Camp (~4,750 m)" },
          { "@type": "Day", "name": "Day 14: Acclimatization and Rest Day at Dhaulagiri Base Camp (~4,750 m)" },
          { "@type": "Day", "name": "Day 15: Cross French Pass (5,360 m) & Trek to Hidden Valley (~5,200 m)" },
          { "@type": "Day", "name": "Day 16: Cross Dhampus Pass (5,250 m) & Trek to Yak Kharka (~3,680 m)" },
          { "@type": "Day", "name": "Day 17: Trek from Yak Kharka to Jomsom (~2,720 m)" },
          { "@type": "Day", "name": "Day 18: Fly from Jomsom to Pokhara (~822 m)" },
          { "@type": "Day", "name": "Day 19: Drive from Pokhara to Kathmandu (~1,355 m)" },
          { "@type": "Day", "name": "Day 20: Final Departure from Kathmandu" }
        ]
      }
    ]
  }
  </script>
</head>
<body class="trek-page">
  <!-- Primary Site Header -->
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

