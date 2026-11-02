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
  <header class="site-header">
    <div class="site-header-container">
      <a href="../../" class="site-logo-link">
        <img src="../../images/logo.png" alt="Namaste Hiking Trek Logo" class="site-logo-img">
      </a>

      <nav class="site-primary-nav" aria-label="Main Navigation">
        <ul class="nav-menu">
          <li class="nav-item has-dropdown">
            <a href="../../regions.html" class="nav-link">Regions <svg class="dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <div class="nav-dropdown">
              <a href="../../trek/everest-base-camp-trek/" class="nav-dropdown-link">Everest Region</a>
              <a href="../../trek/annapurna-circuit-trek/" class="nav-dropdown-link">Annapurna Region</a>
              <a href="../../trek/langtang-valley-trek/" class="nav-dropdown-link">Langtang Region</a>
              <a href="../../trek/manaslu-circuit-trek/" class="nav-dropdown-link">Manaslu Region</a>
              <a href="../../trek/dhaulagiri-circuit-trek/" class="nav-dropdown-link">Dhaulagiri Region</a>
              <a href="../../trek/pikey-peak-trek/" class="nav-dropdown-link">Pikey Peak Trek</a>
            </div>
          </li>

          <li class="nav-item has-dropdown">
            <a href="#" class="nav-link">Trekking Styles <svg class="dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <div class="nav-dropdown">
              <a href="../../trek/everest-base-camp-luxury-trek/" class="nav-dropdown-link">Luxury Lodges</a>
              <a href="../../trek/everest-three-passes-trek/" class="nav-dropdown-link">High Pass Circuits</a>
              <a href="../../trek/mera-peak-climbing/" class="nav-dropdown-link">Peak Climbing</a>
              <a href="../../trek/dhaulagiri-circuit-trek/" class="nav-dropdown-link">Expedition Camping</a>
            </div>
          </li>

          <li class="nav-item has-dropdown">
            <a href="../../about.html" class="nav-link">About Us <svg class="dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <div class="nav-dropdown">
              <a href="../../about.html" class="nav-dropdown-link">Our Company Story</a>
              <a href="../../csr.html" class="nav-dropdown-link">CSR & Community</a>
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

