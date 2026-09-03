const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

const tourPackages = [
  {
    slug: 'kathmandu-cultural-heritage-tour',
    title: 'Kathmandu Valley UNESCO World Heritage Cultural Tour',
    days: 4,
    price: 399,
    maxAlt: '1,400m',
    category: 'Cultural & Heritage',
    rating: '5.0',
    reviewsCount: '180+',
    img: 'images/gallery-teahouse.jpg',
    desc: 'Explore the ancient heart of Nepal with a 4-day guided tour of 7 UNESCO World Heritage Sites in Kathmandu, Patan, and Bhaktapur.',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu & Welcome Dinner', desc: 'Transfer from Tribhuvan International Airport to hotel. Evening orientation and authentic Nepali welcome cultural dinner.' },
      { day: 2, title: 'Kathmandu City Tour: Swayambhunath, Kathmandu Durbar Square & Pashupatinath', desc: 'Visit the ancient Monkey Temple (Swayambhunath), medieval royal courtyards, and the sacred Hindu temple of Pashupatinath on the Bagmati River.' },
      { day: 3, title: 'Boudhanath Stupa, Patan Durbar Square & Bhaktapur', desc: 'Circumambulate the giant white dome of Boudhanath Stupa, marvel at Patan fine metal arts, and explore the medieval pottery city of Bhaktapur.' },
      { day: 4, title: 'Final Souvenir Shopping & Airport Departure', desc: 'Morning walk in Thamel market for cashmere and tea shopping. Private transfer to airport for final departure.' }
    ]
  },
  {
    slug: 'pokhara-valley-nature-tour',
    title: 'Pokhara Lakes, Caves & Sarangkot Himalayan Sunrise Tour',
    days: 4,
    price: 449,
    maxAlt: '1,600m',
    category: 'Nature & Scenic',
    rating: '4.9',
    reviewsCount: '210+',
    img: 'images/gallery-lake.jpg',
    desc: 'Immerse yourself in Pokhara\'s breathtaking scenery with Phewa Lake boating, Sarangkot mountain sunrise, and underground limestone caves.',
    itinerary: [
      { day: 1, title: 'Scenic Drive / Flight from Kathmandu to Pokhara', desc: 'Enjoy scenic countryside views along the Trishuli River to Pokhara. Sunset stroll along Lakeside Phewa.' },
      { day: 2, title: 'Sarangkot Sunrise & Pokhara Sightseeing', desc: 'Early morning drive to Sarangkot hill for 180-degree sunrise over Annapurna & Dhaulagiri. Afternoon boat ride to Tal Barahi Temple.' },
      { day: 3, title: 'Peace Pagoda, Davis Fall & Mountain Museum', desc: 'Hike to World Peace Pagoda, explore Gupteshwor Cave and Davis Fall, and visit the International Mountain Museum.' },
      { day: 4, title: 'Return Journey to Kathmandu', desc: 'Morning breakfast overlooking Phewa Lake before scenic return drive or 25-minute flight to Kathmandu.' }
    ]
  },
  {
    slug: 'kathmandu-pokhara-chitwan-tour',
    title: 'Best of Nepal: Kathmandu, Pokhara & Chitwan Wildlife Tour',
    days: 8,
    price: 799,
    maxAlt: '1,600m',
    category: 'Golden Triangle',
    rating: '5.0',
    reviewsCount: '420+',
    img: 'images/hero-himalayas.jpg',
    desc: 'The ultimate 8-day Nepal experience combining Kathmandu valley heritage, Pokhara lake views, and Chitwan subtropical jungle safari.',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu', desc: 'Airport greeting and hotel check-in. Evening briefing with trip leader.' },
      { day: 2, title: 'Kathmandu UNESCO World Heritage Sightseeing', desc: 'Guided tours of Pashupatinath, Boudhanath, and Swayambhunath.' },
      { day: 3, title: 'Drive to Chitwan National Park', desc: 'Descend to subtropical Terai lowlands. Tharu village walk and evening Tharu cultural dance.' },
      { day: 4, title: 'Full Day Chitwan Jungle Safari Activities', desc: 'Jeep safari inside Chitwan National Park to spot one-horned rhinos, rapti river canoeing, and elephant breeding center visit.' },
      { day: 5, title: 'Drive from Chitwan to Pokhara', desc: 'Scenic highway travel following Marsyangdi River to Pokhara. Relax by Lakeside Phewa.' },
      { day: 6, title: 'Sarangkot Sunrise & Pokhara City Tour', desc: 'Panoramic Annapurna sunrise from Sarangkot, boat ride to Tal Barahi, Davis Fall and Peace Pagoda.' },
      { day: 7, title: 'Return to Kathmandu', desc: 'Fly or drive back to Kathmandu. Evening farewell dinner.' },
      { day: 8, title: 'Final Departure', desc: 'Airport transfer for your flight home.' }
    ]
  },
  {
    slug: 'chitwan-national-park-safari',
    title: 'Chitwan National Park Jungle Safari & Tharu Cultural Tour',
    days: 3,
    price: 299,
    maxAlt: '415m',
    category: 'Wildlife & Safari',
    rating: '4.9',
    reviewsCount: '160+',
    img: 'images/gallery-bridge.jpg',
    desc: 'Discover Nepal\'s rich wildlife in Chitwan National Park with deep jungle jeep safaris, river canoeing, and Tharu tribal traditions.',
    itinerary: [
      { day: 1, title: 'Travel to Chitwan & Tharu Village Walk', desc: 'Drive to Sauhara, Chitwan. Sunset view over Rapti River followed by Tharu cultural stick dance performance.' },
      { day: 2, title: 'Jungle Safari, Canoe Ride & Elephant Breeding Center', desc: 'Traditional dugout canoe ride spotting crocodiles, guided jungle walk, and jeep safari inside the national park to spot rhinos and deer.' },
      { day: 3, title: 'Bird Watching & Departure', desc: 'Early morning bird watching tour (over 500 species). Breakfast before departure to Kathmandu or Pokhara.' }
    ]
  },
  {
    slug: 'nagarkot-sunrise-bhaktapur-tour',
    title: 'Nagarkot Himalayan Sunrise & Bhaktapur Ancient City Tour',
    days: 3,
    price: 349,
    maxAlt: '2,175m',
    category: 'Scenic & Cultural',
    rating: '4.9',
    reviewsCount: '140+',
    img: 'images/gallery-peak.jpg',
    desc: 'Witness panoramic Himalayan views stretching from Annapurna to Mt. Everest from Nagarkot ridge, combined with Bhaktapur pottery heritage.',
    itinerary: [
      { day: 1, title: 'Drive to Bhaktapur & Transfer to Nagarkot', desc: 'Explore the 55-Window Palace and Nyatapola Temple in Bhaktapur. Drive up to Nagarkot hill station for sunset.' },
      { day: 2, title: 'Nagarkot Sunrise & Hike to Changu Narayan', desc: 'Spectacular sunrise over the Himalayan range. Gentle 3-hour downhill ridge hike to ancient Changu Narayan Temple.' },
      { day: 3, title: 'Return to Kathmandu & Departure', desc: 'Morning breakfast with mountain views. Private transfer back to Kathmandu.' }
    ]
  },
  {
    slug: 'lumbini-birthplace-of-buddha-tour',
    title: 'Lumbini Sacred Buddhist Pilgrimage & Monastic Zone Tour',
    days: 4,
    price: 499,
    maxAlt: '150m',
    category: 'Pilgrimage & Spiritual',
    rating: '5.0',
    reviewsCount: '130+',
    img: 'images/gallery-pass.jpg',
    desc: 'Visit the sacred birthplace of Lord Buddha in Lumbini, exploring the Maya Devi Temple, Ashoka Pillar, and international monastic zone.',
    itinerary: [
      { day: 1, title: 'Fly / Drive to Lumbini', desc: 'Arrival in Lumbini. Hotel check-in and evening meditation in the Sacred Garden.' },
      { day: 2, title: 'Maya Devi Temple & Sacred Garden', desc: 'Explore the marker stone at Maya Devi Temple, Nativity pond, and Emperor Ashoka’s pillar erected in 249 BC.' },
      { day: 3, title: 'International Monastic Zone & Tilaurakot', desc: 'Visit international monasteries (German, Chinese, Thai, Japanese) and drive to Tilaurakot (ancient Kapilavastu palace).' },
      { day: 4, title: 'Return Flight to Kathmandu', desc: 'Breakfast and morning prayer before flight back to Kathmandu.' }
    ]
  },
  {
    slug: 'nepal-luxury-helicopter-tour',
    title: 'Nepal Everest & Annapurna Luxury Helicopter Sightseeing Tour',
    days: 5,
    price: 2499,
    maxAlt: '5,545m (Flight)',
    category: 'Luxury & Aviation',
    rating: '5.0',
    reviewsCount: '95+',
    img: 'images/hero-himalayas.jpg',
    desc: 'Experience the ultimate VIP Himalayan journey with private helicopter landings at Everest Base Camp and 5-star luxury accommodations.',
    itinerary: [
      { day: 1, title: 'VIP Arrival in Kathmandu', desc: 'Private luxury car transfer to 5-star hotel (Dwarikas or Marriott). Evening fine dining briefing.' },
      { day: 2, title: 'Everest Base Camp & Kala Patthar Helicopter Excursion', desc: 'Fly by private helicopter over Lukla, Syangboche, Kala Patthar, and Everest Base Camp. Champagne breakfast at Hotel Everest View (3,880m).' },
      { day: 3, title: 'Helicopter Transfer to Pokhara & Annapurna Sanctuary Flight', desc: 'Fly past Langtang and Manaslu to Pokhara. Aerial flight over Annapurna Base Camp & Machhapuchhre.' },
      { day: 4, title: 'Pokhara Luxury Leisure Day', desc: 'Private boat ride on Phewa Lake and spa treatment at luxury resort.' },
      { day: 5, title: 'Fly back to Kathmandu & Final Departure', desc: 'Return flight to Kathmandu and VIP airport transfer.' }
    ]
  },
  {
    slug: 'bandipur-gorkha-heritage-tour',
    title: 'Bandipur Newari Hill Station & Historic Gorkha Palace Tour',
    days: 4,
    price: 399,
    maxAlt: '1,030m',
    category: 'Heritage & Hill Station',
    rating: '4.9',
    reviewsCount: '110+',
    img: 'images/gallery-teahouse.jpg',
    desc: 'Step back in time in vehicle-free Bandipur town with preserved 18th-century Newari architecture, combined with historic Gorkha Durbar.',
    itinerary: [
      { day: 1, title: 'Drive to Gorkha & Explore Gorkha Durbar', desc: 'Drive from Kathmandu to historic Gorkha hill. Tour Gorkha Durbar palace and Kalika temple.' },
      { day: 2, title: 'Drive to Bandipur Hill Station', desc: 'Continue drive to hilltop Newari town of Bandipur. Sunset walk along the cobblestone bazaar.' },
      { day: 3, title: 'Bandipur Village Walk & Siddha Cave Excursion', desc: 'Hike to Siddha Cave (largest cave in Nepal) and visit local silkworm farms and Gurung villages.' },
      { day: 4, title: 'Return Drive to Kathmandu', desc: 'Enjoy final mountain views over Marsyangdi valley before drive back to Kathmandu.' }
    ]
  }
];

// 1. Generate Individual Tour Package Pages
tourPackages.forEach(pkg => {
  const dirPath = path.join(projectRoot, 'tour', pkg.slug);
  fs.mkdirSync(dirPath, { recursive: true });

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pkg.title} (${pkg.days} Days) — Namaste Hiking Trek</title>
  <meta name="description" content="${pkg.desc}">
  <link rel="canonical" href="https://namastehikingtrek.com/tour/${pkg.slug}/" />
  <link rel="icon" type="image/png" href="../../images/logo.png">
  <link rel="stylesheet" href="../../index.css?v=8">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "${pkg.title}",
    "description": "${pkg.desc}",
    "touristType": ["Tourists", "Cultural Enthusiasts", "Families"],
    "offers": {
      "@type": "Offer",
      "price": "${pkg.price}",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://namastehikingtrek.com/tour/${pkg.slug}/"
    }
  }
  </script>
</head>
<body>

  <!-- Header Navigation -->
  <header class="main-header">
    <div class="container flex-between">
      <a href="../../index.html" class="logo-brand">
        <img src="../../images/logo.png" alt="Namaste Hiking Trek Logo" style="height: 54px; width: auto; object-fit: contain;">
        <div class="logo-text-group">
          <span class="brand-title">NAMASTE</span>
          <span class="brand-subtitle">HIKING TREK</span>
        </div>
      </a>

      <button class="mobile-nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
      </button>

      <nav>
        <ul class="nav-menu">
          <li class="nav-item-dropdown mega-nav-item">
            <a href="../../treks.html" class="nav-link">All Treks ▾</a>
          </li>
          <li class="nav-item-dropdown">
            <a href="../../tours.html" class="nav-link active">Nepal Tours ▾</a>
            <div class="nav-dropdown-menu">
              <a href="../../tours.html" class="nav-dropdown-link">All Tour Packages</a>
              <a href="../../tour/kathmandu-pokhara-chitwan-tour/" class="nav-dropdown-link">Best of Nepal (8 Days)</a>
              <a href="../../tour/kathmandu-cultural-heritage-tour/" class="nav-dropdown-link">Kathmandu Heritage (4 Days)</a>
              <a href="../../tour/pokhara-valley-nature-tour/" class="nav-dropdown-link">Pokhara Scenic (4 Days)</a>
              <a href="../../tour/chitwan-national-park-safari/" class="nav-dropdown-link">Chitwan Jungle Safari (3 Days)</a>
              <a href="../../tour/nepal-luxury-helicopter-tour/" class="nav-dropdown-link">Luxury Helicopter Tour (5 Days)</a>
            </div>
          </li>
          <li class="nav-item-dropdown">
            <a href="../../trekking-regions-nepal/" class="nav-link">Trekking Regions ▾</a>
          </li>
          <li><a href="../../about.html" class="nav-link">About Us</a></li>
          <li><a href="../../reviews.html" class="nav-link">Reviews</a></li>
          <li><a href="../../contact.html" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div>
        <button class="btn btn-primary open-inquiry-btn">Book This Tour</button>
      </div>
    </div>
  </header>

  <main>
    <!-- Package Hero -->
    <section class="reviews-hero-section" style="background-image: linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('../../${pkg.img}');">
      <div class="container">
        
        <div style="display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.88rem; color: #CBD5E1; margin-bottom: 16px;">
          <a href="../../index.html" style="color: #10B981; text-decoration: none;">Home</a> <span>/</span>
          <a href="../../tours.html" style="color: #10B981; text-decoration: none;">Nepal Tours</a> <span>/</span>
          <span>${pkg.title}</span>
        </div>

        <div style="max-width: 860px; margin: 0 auto; text-align: center;">
          <span class="pill pill-copper" style="background: #10B981; color: #FFFFFF;">${pkg.category} • ${pkg.days} DAYS</span>
          <h1 class="reviews-hero-title">${pkg.title}</h1>
          <p class="reviews-hero-desc">${pkg.desc}</p>
        </div>

        <div class="review-scorecard-grid" style="max-width: 780px; margin-top: 28px;">
          <div class="scorecard-main-stat">
            <div class="big-rating-number">$${pkg.price}</div>
            <div>
              <span style="color: #94A3B8; font-size: 0.88rem; display: block;">Starting Price per Person</span>
              <strong style="color: #10B981; font-size: 1.05rem;">Includes Hotel, Vehicle & Licensed Guide</strong>
            </div>
          </div>
          <div class="scorecard-main-stat">
            <div class="big-rating-number">${pkg.rating}</div>
            <div>
              <div class="rating-stars-gold">★★★★★</div>
              <strong style="color: #FFFFFF; font-size: 0.95rem;">${pkg.reviewsCount} Verified Reviews</strong>
            </div>
          </div>
        </div>

        <div style="display: flex; gap: 16px; justify-content: center; margin-top: 28px; flex-wrap: wrap;">
          <button class="btn btn-primary open-inquiry-btn" style="padding: 14px 32px; font-size: 1.05rem;">Book This Tour Package ↗</button>
          <a href="#itinerary" class="btn" style="background: rgba(255,255,255,0.15); color: white; border: 1px solid rgba(255,255,255,0.3); padding: 14px 28px;">View Day-by-Day Itinerary ↓</a>
        </div>

      </div>
    </section>

    <!-- Overview & Quick Facts -->
    <section class="section-padding" style="background: #FFFFFF;">
      <div class="container">
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 36px;">
          <div>
            <span class="badge badge-alpine" style="margin-bottom: 8px;">Tour Highlights</span>
            <h2 style="font-size: 2rem; color: #0F172A; margin-bottom: 16px;">What Makes This Tour Special</h2>
            <p style="font-size: 1rem; color: #475569; line-height: 1.65; margin-bottom: 24px;">${pkg.desc}</p>
            
            <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px;">
              <h3 style="font-size: 1.2rem; color: #0F172A; margin-bottom: 14px;">Key Tour Package Services Included</h3>
              <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; font-size: 0.94rem; color: #334155;">
                <li>✓ Private AC Vehicle Airport Transfers</li>
                <li>✓ 3-Star / 4-Star Deluxe Hotel Stays</li>
                <li>✓ Government Licensed Tour Guide</li>
                <li>✓ Monument Entrance & Heritage Permits</li>
                <li>✓ Daily Breakfast & Welcome Dinner</li>
                <li>✓ 24/7 Office Concierge Support</li>
              </ul>
            </div>
          </div>

          <div style="background: #F1F5F9; border-radius: 16px; padding: 24px; border: 1px solid #E2E8F0;">
            <h3 style="font-size: 1.25rem; color: #0F172A; margin-bottom: 16px;">Quick Facts</h3>
            <div style="display: flex; flex-direction: column; gap: 12px; font-size: 0.92rem;">
              <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #CBD5E1; padding-bottom: 8px;">
                <span style="color: #64748B;">Duration</span> <strong>${pkg.days} Days / ${pkg.days - 1} Nights</strong>
              </div>
              <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #CBD5E1; padding-bottom: 8px;">
                <span style="color: #64748B;">Max Elevation</span> <strong>${pkg.maxAlt}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #CBD5E1; padding-bottom: 8px;">
                <span style="color: #64748B;">Group Size</span> <strong>1 to 16 People</strong>
              </div>
              <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #CBD5E1; padding-bottom: 8px;">
                <span style="color: #64748B;">Best Season</span> <strong>All Year Round</strong>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: #64748B;">Transportation</span> <strong>Private Tourist Vehicle</strong>
              </div>
            </div>
            <button class="btn btn-primary open-inquiry-btn" style="width: 100%; margin-top: 20px; padding: 12px;">Get Instant Quote</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Itinerary Section -->
    <section id="itinerary" class="section-padding" style="background: #F8FAFC; border-top: 1px solid #E2E8F0; border-bottom: 1px solid #E2E8F0;">
      <div class="container">
        <div class="text-center" style="margin-bottom: 36px;">
          <span class="pill pill-copper">Day by Day Schedule</span>
          <h2 style="font-size: 2.2rem; color: #0F172A; margin-top: 8px;">Detailed Tour Itinerary</h2>
        </div>

        <div style="max-width: 860px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px;">
          ${pkg.itinerary.map(item => `
            <div style="background: #FFFFFF; border-radius: 14px; border: 1px solid #E2E8F0; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                <span style="background: #10B981; color: #FFFFFF; font-weight: 800; padding: 4px 12px; border-radius: 50px; font-size: 0.82rem;">DAY ${item.day}</span>
                <h3 style="font-size: 1.15rem; color: #0F172A; margin: 0;">${item.title}</h3>
              </div>
              <p style="font-size: 0.94rem; color: #475569; line-height: 1.6; margin: 0;">${item.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-luxury-layout">
        <div class="footer-nav-col">
          <h4>Main Pages</h4>
          <ul class="footer-nav-links">
            <li><a href="../../index.html">Home</a></li>
            <li><a href="../../treks.html">All Trek Packages</a></li>
            <li><a href="../../tours.html">All Tour Packages</a></li>
            <li><a href="../../trekking-regions-nepal/">Trekking Regions</a></li>
            <li><a href="../../custom-plan.html">Tailor-Made Trip</a></li>
          </ul>
        </div>
        <div class="footer-nav-col">
          <h4>Essential Info</h4>
          <ul class="footer-nav-links">
            <li><a href="../../travel-info.html">Travel Guide & AMS</a></li>
            <li><a href="../../about.html">About Us</a></li>
            <li><a href="../../team.html">Meet Our Team</a></li>
            <li><a href="../../reviews.html">Reviews & Testimonials</a></li>
            <li><a href="../../contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-cta-center">
          <h2 class="footer-cta-title">Tour Expertise<br>at Your Service</h2>
          <button class="btn-journey-pill open-inquiry-btn">
            <span>Begin Your Journey</span>
            <span class="arrow-circle-green">↗</span>
          </button>
        </div>
        <div class="footer-social-col" style="text-align: right;">
          <h4>Social Media</h4>
          <ul class="footer-nav-links">
            <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
            <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
            <li><a href="https://wa.me/9779800000000" target="_blank">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom-strip">
        <div>&copy; 2026 Namaste Hiking Trek. All Rights Reserved.</div>
        <div class="footer-legal-links">
          <a href="../../privacy-policy.html">Privacy Policy</a>
          <a href="../../terms-and-conditions.html">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>

  <script type="module" src="../../js/inquiry-modal.js"></script>
  <script src="../../js/header-scroll.js"></script>
</body>
</html>
`;

  fs.writeFileSync(path.join(dirPath, 'index.html'), htmlContent, 'utf8');
  console.log(`Generated: tour/${pkg.slug}/index.html`);
});

// 2. Generate Central Tour Directory Hub Page: tours.html
const toursHubHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nepal Tour Packages & Sightseeing — Namaste Hiking Trek</title>
  <meta name="description" content="Explore 8+ official Nepal tour packages with Namaste Hiking Trek. Kathmandu cultural heritage, Pokhara lake views, Chitwan jungle safari, Lumbini & luxury helicopter tours.">
  <link rel="canonical" href="https://namastehikingtrek.com/tours.html" />
  <link rel="icon" type="image/png" href="images/logo.png">
  <link rel="stylesheet" href="index.css?v=8">
</head>
<body>

  <!-- Header Navigation -->
  <header class="main-header">
    <div class="container flex-between">
      <a href="index.html" class="logo-brand">
        <img src="images/logo.png" alt="Namaste Hiking Trek Logo" style="height: 54px; width: auto; object-fit: contain;">
        <div class="logo-text-group">
          <span class="brand-title">NAMASTE</span>
          <span class="brand-subtitle">HIKING TREK</span>
        </div>
      </a>

      <button class="mobile-nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
      </button>

      <nav>
        <ul class="nav-menu">
          <li class="nav-item-dropdown mega-nav-item">
            <a href="treks.html" class="nav-link">All Treks ▾</a>
          </li>
          <li class="nav-item-dropdown">
            <a href="tours.html" class="nav-link active">Nepal Tours ▾</a>
            <div class="nav-dropdown-menu">
              <a href="tours.html" class="nav-dropdown-link">All Tour Packages</a>
              <a href="tour/kathmandu-pokhara-chitwan-tour/" class="nav-dropdown-link">Best of Nepal (8 Days)</a>
              <a href="tour/kathmandu-cultural-heritage-tour/" class="nav-dropdown-link">Kathmandu Heritage (4 Days)</a>
              <a href="tour/pokhara-valley-nature-tour/" class="nav-dropdown-link">Pokhara Scenic (4 Days)</a>
              <a href="tour/chitwan-national-park-safari/" class="nav-dropdown-link">Chitwan Jungle Safari (3 Days)</a>
              <a href="tour/nepal-luxury-helicopter-tour/" class="nav-dropdown-link">Luxury Helicopter Tour (5 Days)</a>
            </div>
          </li>
          <li class="nav-item-dropdown">
            <a href="trekking-regions-nepal/" class="nav-link">Trekking Regions ▾</a>
          </li>
          <li><a href="about.html" class="nav-link">About Us</a></li>
          <li><a href="reviews.html" class="nav-link">Reviews</a></li>
          <li><a href="contact.html" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div>
        <button class="btn btn-primary open-inquiry-btn">Book Custom Tour</button>
      </div>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section class="reviews-hero-section">
      <div class="container">
        <div style="max-width: 820px; margin: 0 auto; text-align: center;">
          <span class="pill pill-copper">Nepal Cultural & Wildlife Journeys</span>
          <h1 class="reviews-hero-title">Nepal Tour Packages & Sightseeing</h1>
          <p class="reviews-hero-desc">
            Discover ancient UNESCO World Heritage temples in Kathmandu, tranquil lakes in Pokhara, subtropical wildlife safaris in Chitwan, and luxury helicopter flights across Everest.
          </p>
        </div>
      </div>
    </section>

    <!-- Tour Packages Grid -->
    <section class="section-padding" style="background: #F8FAFC;">
      <div class="container">
        
        <div class="text-center" style="margin-bottom: 36px;">
          <span class="badge badge-alpine" style="margin-bottom: 8px; display: inline-block;">Official Tour Itineraries</span>
          <h2 style="font-size: 2.2rem; color: #0F172A;">Browse All Nepal Tour Packages</h2>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px;">
          ${tourPackages.map(pkg => `
            <div style="background: #FFFFFF; border-radius: 18px; overflow: hidden; border: 1px solid #E2E8F0; box-shadow: 0 4px 20px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="position: relative; height: 200px; overflow: hidden;">
                  <img src="${pkg.img}" alt="${pkg.title}" style="width: 100%; height: 100%; object-fit: cover;">
                  <span style="position: absolute; top: 12px; left: 12px; background: #10B981; color: #FFFFFF; font-size: 0.78rem; font-weight: 800; padding: 4px 10px; border-radius: 50px;">${pkg.days} DAYS</span>
                  <span style="position: absolute; top: 12px; right: 12px; background: rgba(15,23,42,0.85); color: #FFFFFF; font-size: 0.88rem; font-weight: 800; padding: 4px 10px; border-radius: 50px;">$${pkg.price}</span>
                </div>
                <div style="padding: 20px;">
                  <span style="font-size: 0.8rem; color: #64748B; font-weight: 700; text-transform: uppercase;">${pkg.category}</span>
                  <h3 style="font-size: 1.15rem; color: #0F172A; margin: 6px 0 10px 0; line-height: 1.35;">${pkg.title}</h3>
                  <p style="font-size: 0.88rem; color: #475569; line-height: 1.55; margin-bottom: 14px;">${pkg.desc}</p>
                </div>
              </div>
              <div style="padding: 16px 20px; background: #F8FAFC; border-top: 1px solid #E2E8F0; display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #F59E0B; font-size: 0.9rem; font-weight: 700;">★★★★★ ${pkg.rating}</span>
                <a href="tour/${pkg.slug}/" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.84rem;">View Itinerary →</a>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-luxury-layout">
        <div class="footer-nav-col">
          <h4>Main Pages</h4>
          <ul class="footer-nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="treks.html">All Trek Packages</a></li>
            <li><a href="tours.html">All Tour Packages</a></li>
            <li><a href="trekking-regions-nepal/">Trekking Regions</a></li>
            <li><a href="custom-plan.html">Tailor-Made Trip</a></li>
          </ul>
        </div>
        <div class="footer-nav-col">
          <h4>Essential Info</h4>
          <ul class="footer-nav-links">
            <li><a href="travel-info.html">Travel Guide & AMS</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="team.html">Meet Our Team</a></li>
            <li><a href="reviews.html">Reviews & Testimonials</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-cta-center">
          <h2 class="footer-cta-title">Expedition Expertise<br>at Your Service</h2>
          <button class="btn-journey-pill open-inquiry-btn">
            <span>Begin Your Journey</span>
            <span class="arrow-circle-green">↗</span>
          </button>
        </div>
        <div class="footer-social-col" style="text-align: right;">
          <h4>Social Media</h4>
          <ul class="footer-nav-links">
            <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
            <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
            <li><a href="https://wa.me/9779800000000" target="_blank">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom-strip">
        <div>&copy; 2026 Namaste Hiking Trek. All Rights Reserved.</div>
        <div class="footer-legal-links">
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="terms-and-conditions.html">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>

  <script type="module" src="js/inquiry-modal.js"></script>
  <script src="js/header-scroll.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(projectRoot, 'tours.html'), toursHubHtml, 'utf8');
console.log('Generated: tours.html');

// Create canonical directory tours-nepal/index.html
const toursNepalDir = path.join(projectRoot, 'tours-nepal');
fs.mkdirSync(toursNepalDir, { recursive: true });
fs.writeFileSync(path.join(toursNepalDir, 'index.html'), toursHubHtml.replace('href="index.html"', 'href="../index.html"').replace('href="index.css', 'href="../index.css'), 'utf8');
console.log('Generated: tours-nepal/index.html');
