const fs = require('fs');
const {
  headerHtml,
  footerHtml,
  bottomScripts,
  schemaJsonLd,
  data,
  itinerary,
  guidesData
} = require('./generate_tilicho_page.js');

console.log('Regenerating trek/tilicho-lake-trek/index.html with perfected sidebar & sticky layout...');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Annapurna Circuit with Tilicho Lake Trek (20 Days) — Namaste Hiking Trek</title>
  <meta name="description" content="Embark on the ultimate 20-day Annapurna Circuit with Tilicho Lake Trek. Ascend to turquoise Tilicho Lake (4,919m) and cross Thorong La Pass (5,416m). Complete 20-day itinerary, acclimatization, maps & expert guides.">
  <!-- Canonical URL -->
  <link rel="canonical" href="https://namastehikingtrek.com/trek/tilicho-lake-trek/" />

  <!-- Favicon & Touch Icons -->
  <link rel="icon" type="image/png" href="../../images/logo.png">
  <link rel="apple-touch-icon" href="../../images/logo.png">

  <!-- Open Graph / Social Media Metadata -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://namastehikingtrek.com/trek/tilicho-lake-trek/">
  <meta property="og:title" content="Annapurna Circuit with Tilicho Lake Trek (20 Days) — Namaste Hiking Trek">
  <meta property="og:description" content="Embark on an epic 20-day Himalayan expedition combining the turquoise alpine spectacle of Tilicho Lake (4,919m) and the iconic crossing of Thorong La Pass (5,416m). Features Manang, Khangsar, Muktinath, Kali Gandaki Gorge, and Poon Hill sunrise.">
  <meta property="og:image" content="https://namastehikingtrek.com/images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-tilicho-lake-14.jpg">

  <!-- Twitter Card Metadata -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Annapurna Circuit with Tilicho Lake Trek (20 Days) — Namaste Hiking Trek">
  <meta name="twitter:description" content="Embark on an epic 20-day Himalayan expedition combining the turquoise alpine spectacle of Tilicho Lake (4,919m) and the iconic crossing of Thorong La Pass (5,416m). Features Manang, Khangsar, Muktinath, Kali Gandaki Gorge, and Poon Hill sunrise.">
  <meta name="twitter:image" content="https://namastehikingtrek.com/images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-tilicho-lake-14.jpg">

  <!-- Static JSON-LD Structured Data (Centerpiece Annotation — No JS Required) -->
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
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .itinerary-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      margin-bottom: 20px;
      overflow: hidden;
      transition: all 0.25s ease;
      box-shadow: 0 2px 4px rgba(0,0,0,0.03);
    }
    .itinerary-card:hover {
      box-shadow: 0 6px 16px rgba(0,0,0,0.06);
      border-color: #cbd5e1;
    }
    .itinerary-header {
      padding: 18px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      user-select: none;
      background: #ffffff;
      gap: 16px;
    }
    .itinerary-header:hover {
      background: #f8fafc;
    }
    .itinerary-body {
      padding: 0 24px 24px 24px;
      border-top: 1px solid #f1f5f9;
      display: none;
    }
    .itinerary-card.open .itinerary-body {
      display: block;
      padding-top: 20px;
    }
    .itinerary-card.open .itinerary-chevron {
      transform: rotate(180deg);
    }
    .itinerary-stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 10px;
      margin-bottom: 18px;
    }
    .itinerary-stat-pill {
      background: #f1f5f9;
      padding: 8px 12px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
    }
    .itinerary-stat-pill span:first-child {
      font-size: 0.72rem;
      text-transform: uppercase;
      font-weight: 700;
      color: #64748b;
      letter-spacing: 0.04em;
    }
    .itinerary-stat-pill span:last-child {
      font-size: 0.92rem;
      font-weight: 600;
      color: #1e293b;
    }
    .detail-accordion-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      margin-bottom: 16px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .detail-accordion-header {
      padding: 16px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      background: #ffffff;
      gap: 12px;
    }
    .detail-accordion-header:hover {
      background: #f8fafc;
    }
    .detail-accordion-body {
      padding: 0 20px 20px 20px;
      border-top: 1px solid #f1f5f9;
      display: none;
      color: #475569;
      line-height: 1.7;
    }
    .detail-accordion-card.open .detail-accordion-body {
      display: block;
      padding-top: 18px;
    }
    .detail-accordion-card.open .accordion-chevron {
      transform: rotate(180deg);
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
                <path d="M12 3.2c-4.8 0-8.8 4-8.8 8.8 0 4.8 4 8.8 8.8 8.8 4.8 0 8.8-4 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm-3.3 12.1c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3.1 1.8-1.4 3.3-3.3 3.3zm6.6 0c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zm-6.6-4.9c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6zm6.6 0c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6z"/>
              </svg>
            </span>
            <span><strong>5.0</strong> / 5.0 (290+ Reviews)</span>
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
          Annapurna Circuit with Tilicho Lake Trek (20 Days)
        </h1>

        <!-- Subtitle -->
        <p style="font-size: 1.15rem; color: #475569; max-width: 900px; margin-bottom: 16px; line-height: 1.5; font-weight: 500;">
          A legendary 20-day high-altitude journey combining the classic Annapurna Circuit with an unforgettable excursion to turquoise Tilicho Lake (4,919m) and crossing Thorong La Pass (5,416m).
        </p>

        <!-- Brief intro excerpt with Read More toggle -->
        <p style="color: var(--color-neutral-600); max-width: 850px; margin-bottom: 24px; line-height: 1.6;">
          The Annapurna Circuit with Tilicho Lake Trek weaves two of Nepal's most revered mountain adventures into one continuous Himalayan voyage. Trek from the lush subtropical valleys of the lower Marsyangdi through traditional Gurung and Tibetan-influenced Manangi settlements, make a dedicated multi-day ascent to the turquoise waters of Tilicho Lake (4,919m) under the Annapurna Great Barrier, and conquer the iconic Thorong La Pass at 5,416 meters before descending into the trans-Himalayan desert of Mustang and holy Muktinath.
          <span id="ebc-more-text" style="display: none;">
            Unlike standard 14-day Annapurna Circuit treks that rush past Manang, this 20-day itinerary prioritizes physiological acclimatization, active recovery, and authentic cultural exploration. From the roaring waterfalls of the Marsyangdi gorge to the deepest canyon on Earth in the Kali Gandaki, you will experience five ecological zones, stay in traditional mountain teahouses, and witness panoramic sunrise vistas from Poon Hill (3,210m) over Annapurna I (8,091m) and Dhaulagiri (8,167m).
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
                  <path d="M12 3.2c-4.8 0-8.8 4-8.8 8.8 0 4.8 4 8.8 8.8 8.8 4.8 0 8.8-4 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm-3.3 12.1c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3.1 1.8-1.4 3.3-3.3 3.3zm6.6 0c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zm-6.6-4.9c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6zm6.6 0c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6z"/>
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
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">20 Days (Full Circuit)</span>
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
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">4,919 m (Day 10)</span>
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
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Teahouses & City Hotels</span>
            </div>
          </div>

          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Transport</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Private 4WD & Tourist Coach</span>
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
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Besisahar (~760 m)</span>
            </div>
          </div>

          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek Ends</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Nayapul / Pokhara (~800 m)</span>
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

          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Package Start</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Kathmandu (1,300 m)</span>
            </div>
          </div>

          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Package End</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Kathmandu (1,300 m)</span>
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
            Itinerary (20 Days)
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
          <button class="trek-sub-nav-btn" data-tab="map">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
            Route Map
          </button>
          <button class="trek-sub-nav-btn" data-tab="faqs">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            FAQs
          </button>
        </div>
      </div>
    </div>

    <!-- MAIN TWO-COLUMN CONTENT GRID SECTION -->
    <section class="section-padding" style="padding-top: 10px;" data-trek-details-wrapper data-trek-key="tilicho_circuit">
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
                The Annapurna Circuit with Tilicho Lake Trek combines two of the most remarkable high-altitude experiences in the Annapurna region into one continuous Himalayan journey. The route follows the classic Annapurna Circuit through the Marsyangdi Valley, reaches the high mountain settlements around Manang, makes a dedicated excursion toward Tilicho Lake at 4,919 meters, and then continues toward Thorong La at 5,416 meters before descending through Muktinath and the Kali Gandaki Valley.
              </p>

              <p style="font-size: 1.05rem; line-height: 1.7; color: #475569; margin-bottom: 16px;">
                Unlike a standard Annapurna Circuit itinerary that may pass through Manang and continue directly toward Yak Kharka and Thorong Phedi, this itinerary adds several days around the Tilicho area. The additional excursion takes trekkers from Manang toward Khangsar and Tilicho Base Camp before making the ascent to Tilicho Lake and returning to the main circuit route.
              </p>

              <p style="font-size: 1.05rem; line-height: 1.7; color: #475569; margin-bottom: 20px;">
                The result is a longer and more varied trekking experience that combines green lower valleys, subtropical forests, traditional mountain villages, high alpine terrain, glacial landscapes, turquoise lakes, dry trans-Himalayan valleys, sacred pilgrimage sites and dramatic Himalayan mountain views.
              </p>

              <!-- Highlights At A Glance Grid -->
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin-top: 28px; margin-bottom: 16px;">
                Trip Highlights at a Glance
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; margin-bottom: 28px;">
                ${data.highlightsAtAGlance.slice(0, 10).map(h => `
                <div style="display: flex; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
                  <span style="color: #008060; font-weight: 800; font-size: 1.2rem; line-height: 1;">✦</span>
                  <div>
                    <strong style="color: #1e293b; font-size: 0.95rem; display: block;">${h.highlight}</strong>
                    <span style="color: #64748b; font-size: 0.85rem; line-height: 1.4; display: block;">${h.significance}</span>
                  </div>
                </div>`).join('')}
              </div>

              <!-- Key Trip Facts Table -->
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin-top: 28px; margin-bottom: 16px;">
                Key Trip Facts & Logistical Framework
              </h3>
              <div class="table-responsive" style="overflow-x: auto; margin-bottom: 28px;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
                  <thead>
                    <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                      <th style="padding: 12px 16px; font-weight: 700; color: #1e293b; width: 28%;">Trip Fact</th>
                      <th style="padding: 12px 16px; font-weight: 700; color: #1e293b;">This 20-Day Itinerary</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${data.keyTripFacts.map(f => `
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 16px; font-weight: 600; color: #334155; vertical-align: top;">${f.fact}</td>
                      <td style="padding: 12px 16px; color: #475569; line-height: 1.5;">${f.value}</td>
                    </tr>`).join('')}
                  </tbody>
                </table>
              </div>

              <!-- Feature Comparison Table: Standard vs Tilicho -->
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin-top: 28px; margin-bottom: 16px;">
                What Makes This Trek Different from the Standard Annapurna Circuit?
              </h3>
              <p style="color: #475569; line-height: 1.7; margin-bottom: 16px;">
                The primary difference is the addition of Tilicho Lake as a central part of the itinerary. While the classic Annapurna Circuit already provides a diverse trekking experience, the Tilicho version adds another high-altitude objective before the Thorong La crossing:
              </p>
              <div class="table-responsive" style="overflow-x: auto; margin-bottom: 28px;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
                  <thead>
                    <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                      <th style="padding: 12px 16px; font-weight: 700; color: #1e293b;">Feature</th>
                      <th style="padding: 12px 16px; font-weight: 700; color: #1e293b;">Standard Annapurna Circuit</th>
                      <th style="padding: 12px 16px; font-weight: 700; color: #008060;">Annapurna Circuit with Tilicho Lake</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${data.featureComparison.map(c => `
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 16px; font-weight: 600; color: #334155;">${c.feature}</td>
                      <td style="padding: 12px 16px; color: #64748b;">${c.classic}</td>
                      <td style="padding: 12px 16px; color: #1e293b; font-weight: 500;">${c.tilicho}</td>
                    </tr>`).join('')}
                  </tbody>
                </table>
              </div>

              <!-- Narrative Sections from User Guide -->
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin-top: 28px; margin-bottom: 12px;">
                From Besisahar to Manang and Tilicho Lake
              </h3>
              <p style="color: #475569; line-height: 1.7; margin-bottom: 16px;">
                The early part of the journey follows the Marsyangdi Valley, where the landscape is generally greener and more densely settled than the high country farther north. The lower sections include forested hills, cultivated land, waterfalls, rivers, suspension bridges and villages associated with the Gurung communities of the Annapurna region. As the trail gains elevation, the environment gradually becomes cooler and drier. Dharapani and Chame mark important stages of the route, with Chame serving as the administrative center of Manang District.
              </p>
              <p style="color: #475569; line-height: 1.7; margin-bottom: 16px;">
                Around Pisang and Manang, trekkers begin to experience the dry, rocky terrain associated with the rain-shadow environment of the northern Annapurna region. Manang (3,500m) is not simply another overnight stop; it is an essential acclimatization haven where trekkers experience the distinctive stone architecture, agriculture, Buddhist cultural traditions, and high-altitude mountain lifestyle.
              </p>

              <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin-top: 28px; margin-bottom: 12px;">
                The Tilicho Lake Experience (4,919 Meters)
              </h3>
              <p style="color: #475569; line-height: 1.7; margin-bottom: 16px;">
                Tilicho Lake is the signature highlight of this trek. Reaching the lake is a genuine high-altitude trekking excursion requiring careful pacing and fortitude. The route from Manang passes through Khangsar and traverses the dramatic Tilicho landslide zone before reaching Tilicho Base Camp at approximately 4,150 meters. At the lake, trekkers encounter a landscape radically different from the lower valley: vegetation is sparse, surrounding slopes are dominated by sheer rock and eternal snow, and the enormous glacial barrier creates one of the most sublime mountain panoramas in the Himalaya.
              </p>

              <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin-top: 28px; margin-bottom: 12px;">
                From Tilicho Lake across Thorong La Pass to Muktinath
              </h3>
              <p style="color: #475569; line-height: 1.7; margin-bottom: 16px;">
                After completing the Tilicho excursion, the route returns toward the circuit and climbs through Yak Kharka (4,018m) to Thorong Phedi (4,450m). Reaching Thorong La Pass at 5,416 meters represents the highest milestone of the classic circuit. From the prayer-flag-draped pass, the trail descends 1,600 meters to Muktinath (3,800m), an internationally revered sacred sanctuary for both Hindu and Buddhist pilgrims, before tracking through the wind-carved Kali Gandaki Valley toward Kagbeni, Jomsom, Tatopani hot springs, and Poon Hill.
              </p>
            </div>
          </section>

          <!-- SECTION 2: ITINERARY -->
          <section id="section-itinerary" class="trek-detail-section" style="margin-bottom: 40px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 24px;">
              
              <!-- Route Stats Ribbon -->
              <div style="background: #e6f7f0; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px 20px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 24px;">
                <div>
                  <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: #008060; font-weight: 700; display: block;">Itinerary Duration</span>
                  <strong style="font-size: 1.2rem; color: #065f46;">20 Calendar Days</strong>
                </div>
                <div>
                  <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: #008060; font-weight: 700; display: block;">Highest Pass</span>
                  <strong style="font-size: 1.2rem; color: #065f46;">Thorong La (5,416 m)</strong>
                </div>
                <div>
                  <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: #008060; font-weight: 700; display: block;">Glacial Lake</span>
                  <strong style="font-size: 1.2rem; color: #065f46;">Tilicho Lake (4,919 m)</strong>
                </div>
                <div>
                  <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: #008060; font-weight: 700; display: block;">Physical Grading</span>
                  <strong style="font-size: 1.2rem; color: #065f46;">Strenuous / High Altitude</strong>
                </div>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
                <h2 style="font-size: 1.6rem; color: #1e293b; margin: 0; font-weight: 800;">
                  Detailed 20-Day Daily Expedition Itinerary
                </h2>
                <div style="display: flex; gap: 8px;">
                  <button id="itinerary-expand-all" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px 12px; font-size: 0.85rem; font-weight: 600; color: #334155; cursor: pointer;">Expand All</button>
                  <button id="itinerary-collapse-all" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px 12px; font-size: 0.85rem; font-weight: 600; color: #334155; cursor: pointer;">Collapse All</button>
                </div>
              </div>

              <!-- At-A-Glance Itinerary Table -->
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 10px; margin-bottom: 14px;">
                Annapurna Circuit with Tilicho Lake Trek Itinerary at a Glance
              </h3>
              <div class="table-responsive" style="overflow-x: auto; margin-bottom: 28px;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; font-size: 0.92rem;">
                  <thead>
                    <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                      <th style="padding: 10px 14px; font-weight: 700; color: #1e293b; width: 10%;">Day</th>
                      <th style="padding: 10px 14px; font-weight: 700; color: #1e293b; width: 35%;">Route & Destinations</th>
                      <th style="padding: 10px 14px; font-weight: 700; color: #1e293b; width: 20%;">Approx. Elevation</th>
                      <th style="padding: 10px 14px; font-weight: 700; color: #1e293b;">Main Daily Experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${itinerary.map(d => `
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 10px 14px; font-weight: 700; color: #008060;">Day ${d.day}</td>
                      <td style="padding: 10px 14px; font-weight: 600; color: #1e293b;">${d.title}</td>
                      <td style="padding: 10px 14px; color: #475569;">${d.elevation.split('(')[0]}</td>
                      <td style="padding: 10px 14px; color: #64748b;">${d.highlights[0] || 'Trekking & exploration'}</td>
                    </tr>`).join('')}
                  </tbody>
                </table>
              </div>

              <!-- 20 Interactive Itinerary Cards -->
              <div class="itinerary-cards-container">
                ${itinerary.map((d, idx) => `
                <div class="itinerary-card ${idx === 0 ? 'open' : ''}" id="day-${d.day}-card">
                  <div class="itinerary-header" onclick="this.parentElement.classList.toggle('open')">
                    <div style="display: flex; align-items: center; gap: 14px;">
                      <span style="background: #008060; color: #ffffff; font-weight: 800; font-size: 0.9rem; padding: 6px 12px; border-radius: 6px; white-space: nowrap;">
                        Day ${d.day}
                      </span>
                      <div>
                        <h4 style="margin: 0; font-size: 1.1rem; color: #1e293b; font-weight: 700;">${d.title}</h4>
                        <span style="font-size: 0.85rem; color: #64748b; font-weight: 500;">
                          ${d.elevation} • ${d.time}
                        </span>
                      </div>
                    </div>
                    <svg class="itinerary-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" style="transition: transform 0.2s ease; flex-shrink: 0;"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                  <div class="itinerary-body">
                    
                    <!-- Stats Pills -->
                    <div class="itinerary-stats-grid">
                      <div class="itinerary-stat-pill">
                        <span>Max Elevation</span>
                        <span>${d.elevation}</span>
                      </div>
                      <div class="itinerary-stat-pill">
                        <span>Walking / Transit</span>
                        <span>${d.time}</span>
                      </div>
                      <div class="itinerary-stat-pill">
                        <span>Distance</span>
                        <span>${d.distance}</span>
                      </div>
                      <div class="itinerary-stat-pill">
                        <span>Accommodation</span>
                        <span>${d.lodging}</span>
                      </div>
                      <div class="itinerary-stat-pill">
                        <span>Meals Included</span>
                        <span>${d.meals}</span>
                      </div>
                    </div>

                    <!-- Highlight Tags -->
                    <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px;">
                      ${d.highlights.map(h => `<span style="font-size: 0.78rem; background: #e6f7f0; color: #008060; padding: 4px 10px; border-radius: 100px; font-weight: 600;">✓ ${h}</span>`).join('')}
                    </div>

                    <!-- Descriptive Narrative -->
                    <div style="color: #475569; line-height: 1.7; font-size: 0.98rem; margin-bottom: 16px;">
                      ${d.description.split('\n\n').map(p => `<p style="margin-bottom: 12px;">${p}</p>`).join('')}
                    </div>

                    <!-- Authentic Daily Photo -->
                    ${d.image ? `
                    <div style="margin-top: 14px; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
                      <img src="${d.image}" alt="${d.imageAlt || d.title}" style="width: 100%; height: auto; max-height: 380px; object-fit: cover; display: block;" loading="lazy">
                      <div style="background: #f8fafc; padding: 8px 12px; font-size: 0.8rem; color: #64748b; font-style: italic; border-top: 1px solid #f1f5f9;">
                        Photo: ${d.imageAlt || d.title}
                      </div>
                    </div>` : ''}

                  </div>
                </div>`).join('')}
              </div>

              <!-- Stages Progression Overview -->
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin-top: 32px; margin-bottom: 14px;">
                The 8 Expedition Stages Explained
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
                  <strong style="color: #008060; display: block; margin-bottom: 4px;">Stage 1: Kathmandu & Foothills (Days 1–2)</strong>
                  <span style="font-size: 0.9rem; color: #475569;">Kathmandu arrival, expedition briefing, gear inspection, and drive along the Prithvi Highway to Besisahar.</span>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
                  <strong style="color: #008060; display: block; margin-bottom: 4px;">Stage 2: Marsyangdi Valley (Days 3–5)</strong>
                  <span style="font-size: 0.9rem; color: #475569;">Ascending the river canyon through Tal, Dharapani, Chame, and Paungda Danda rock face to Upper Pisang.</span>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
                  <strong style="color: #008060; display: block; margin-bottom: 4px;">Stage 3: Manang Acclimatization (Days 6–7)</strong>
                  <span style="font-size: 0.9rem; color: #475569;">High-route traverse via Ghyaru and Ngawal to Manang (3,500m), followed by active acclimatization day to Gangapurna Lake.</span>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
                  <strong style="color: #008060; display: block; margin-bottom: 4px;">Stage 4: Tilicho Lake Excursion (Days 8–11)</strong>
                  <span style="font-size: 0.9rem; color: #475569;">Trek to Khangsar and Tilicho Base Camp, Day 10 pre-dawn push to Tilicho Lake (4,919m), and recovery return to Manang.</span>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
                  <strong style="color: #008060; display: block; margin-bottom: 4px;">Stage 5: High Pass Crossing (Days 12–14)</strong>
                  <span style="font-size: 0.9rem; color: #475569;">Ascent via Yak Kharka to Thorong Phedi (4,450m), pre-dawn crossing of Thorong La Pass (5,416m) and descent to Muktinath.</span>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
                  <strong style="color: #008060; display: block; margin-bottom: 4px;">Stage 6: Kali Gandaki & Mustang (Day 15)</strong>
                  <span style="font-size: 0.9rem; color: #475569;">Exploring holy Muktinath temple, medieval Kagbeni fortress town, and the windy riverbed to Jomsom.</span>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
                  <strong style="color: #008060; display: block; margin-bottom: 4px;">Stage 7: Tatopani & Poon Hill (Days 16–18)</strong>
                  <span style="font-size: 0.9rem; color: #475569;">Relaxing hot springs in Tatopani, forest climb to Ghorepani, 360-degree sunrise from Poon Hill (3,210m), and drive to Pokhara.</span>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
                  <strong style="color: #008060; display: block; margin-bottom: 4px;">Stage 8: Return to Kathmandu (Days 19–20)</strong>
                  <span style="font-size: 0.9rem; color: #475569;">Scenic drive or flight to Kathmandu, farewell celebratory dinner, and international airport transfer.</span>
                </div>
              </div>

            </div>
          </section>

          <!-- SECTION 3: INCLUDES & EXCLUDES -->
          <section id="section-includes" class="trek-detail-section" style="margin-bottom: 40px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 24px;">
              <h2 style="font-size: 1.6rem; color: #1e293b; margin-top: 0; margin-bottom: 20px; font-weight: 800; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px;">
                Package Inclusions & Exclusions
              </h2>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                <!-- Included -->
                <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px;">
                  <h3 style="color: #166534; font-size: 1.15rem; margin-top: 0; margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#166534" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    What is Included
                  </h3>
                  <ul style="padding-left: 20px; color: #374151; font-size: 0.95rem; line-height: 1.7; margin: 0;">
                    <li><strong>Airport Transfers:</strong> Private round-trip airport transfers in Kathmandu by private car/van.</li>
                    <li><strong>Kathmandu & Pokhara Accommodation:</strong> 3-Star Deluxe Hotel in Kathmandu (2 nights) & Lakeside Pokhara (1 night) with breakfast.</li>
                    <li><strong>Mountain Teahouse Accommodation:</strong> Best available twin-share teahouse lodges during 17 days of trekking.</li>
                    <li><strong>All Meals on Trek:</strong> Full board (Breakfast, Lunch, Dinner) freshly prepared along the trail with hot tea or coffee.</li>
                    <li><strong>Certified Guide:</strong> Government-licensed, English-speaking mountain guide trained in Wilderness First Aid & altitude medicine.</li>
                    <li><strong>Porter Service:</strong> Strong local porters to carry heavy duffels (1 porter for 2 trekkers, max 20–22 kg).</li>
                    <li><strong>All Mandatory Permits:</strong> Annapurna Conservation Area Project (ACAP) Permit & TIMS Card fully arranged.</li>
                    <li><strong>Ground Transportation:</strong> Scenic private/tourist transport Kathmandu to Besisahar, Jomsom-Tatopani transfer, Nayapul-Pokhara, & Pokhara-Kathmandu.</li>
                    <li><strong>Safety Gear:</strong> Pulse oximeters for daily SpO2 checks, comprehensive medical first-aid kit, and company duffel bag.</li>
                    <li><strong>Celebratory Farewell Dinner:</strong> Traditional Nepali cultural dinner with company founders in Kathmandu.</li>
                  </ul>
                </div>

                <!-- Not Included -->
                <div style="background: #fff1f2; border: 1px solid #fecdd3; border-radius: 8px; padding: 20px;">
                  <h3 style="color: #9f1239; font-size: 1.15rem; margin-top: 0; margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9f1239" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    What is Not Included
                  </h3>
                  <ul style="padding-left: 20px; color: #374151; font-size: 0.95rem; line-height: 1.7; margin: 0;">
                    <li><strong>International Flights:</strong> Airfare to and from Tribhuvan International Airport (Kathmandu).</li>
                    <li><strong>Nepal Entry Visa:</strong> Visa on arrival ($30 for 15 days, $50 for 30 days, payable at Kathmandu airport).</li>
                    <li><strong>Travel & Evacuation Insurance:</strong> Mandatory policy covering emergency high-altitude medical rescue and helicopter evacuation up to 5,500m.</li>
                    <li><strong>Lunches & Dinners in Cities:</strong> Meals in Kathmandu and Pokhara (except welcome and farewell dinners).</li>
                    <li><strong>Personal Beverages:</strong> Mineral water, boiled water, soft drinks, beer, wine, and specialty barista coffees.</li>
                    <li><strong>Teahouse Extras:</strong> Hot bucket/gas showers, battery/device charging fees, and satellite Wi-Fi where billed separately.</li>
                    <li><strong>Personal Trekking Gear:</strong> Down jacket, sleeping bag, trekking boots, and personal medications (rental available in Kathmandu).</li>
                    <li><strong>Gratuities:</strong> Tips for guides, porters, and drivers (customary appreciation for exceptional service).</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          <!-- SECTION 4: DATES & AVAILABILITY -->
          <section id="section-dates" class="trek-detail-section" style="margin-bottom: 40px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 24px;">
              <h2 style="font-size: 1.6rem; color: #1e293b; margin-top: 0; margin-bottom: 16px; font-weight: 800; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px;">
                Departure Dates & Seasonal Booking
              </h2>
              <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
                We operate both guaranteed small group departures (2–10 trekkers) and fully customized private departures on any date of your choosing during the prime trekking windows.
              </p>

              <!-- Group Dates Table -->
              <div class="table-responsive" style="overflow-x: auto; margin-bottom: 20px;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
                  <thead>
                    <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                      <th style="padding: 12px 16px; font-weight: 700; color: #1e293b;">Season</th>
                      <th style="padding: 12px 16px; font-weight: 700; color: #1e293b;">Departure Date</th>
                      <th style="padding: 12px 16px; font-weight: 700; color: #1e293b;">Return Date</th>
                      <th style="padding: 12px 16px; font-weight: 700; color: #1e293b;">Status</th>
                      <th style="padding: 12px 16px; font-weight: 700; color: #1e293b; text-align: right;">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 16px; font-weight: 600; color: #008060;">Spring 2026</td>
                      <td style="padding: 12px 16px; color: #1e293b;">March 15, 2026</td>
                      <td style="padding: 12px 16px; color: #64748b;">April 03, 2026</td>
                      <td style="padding: 12px 16px;"><span style="background: #dcfce7; color: #15803d; font-size: 0.8rem; padding: 4px 8px; border-radius: 4px; font-weight: 600;">Guaranteed (4 Seats Left)</span></td>
                      <td style="padding: 12px 16px; text-align: right;"><button class="btn btn-primary open-inquiry-btn" style="padding: 6px 14px; font-size: 0.85rem;">Book Now</button></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 16px; font-weight: 600; color: #008060;">Spring 2026</td>
                      <td style="padding: 12px 16px; color: #1e293b;">April 05, 2026</td>
                      <td style="padding: 12px 16px; color: #64748b;">April 24, 2026</td>
                      <td style="padding: 12px 16px;"><span style="background: #dcfce7; color: #15803d; font-size: 0.8rem; padding: 4px 8px; border-radius: 4px; font-weight: 600;">Guaranteed (6 Seats Left)</span></td>
                      <td style="padding: 12px 16px; text-align: right;"><button class="btn btn-primary open-inquiry-btn" style="padding: 6px 14px; font-size: 0.85rem;">Book Now</button></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 16px; font-weight: 600; color: #008060;">Autumn 2026</td>
                      <td style="padding: 12px 16px; color: #1e293b;">September 20, 2026</td>
                      <td style="padding: 12px 16px; color: #64748b;">October 09, 2026</td>
                      <td style="padding: 12px 16px;"><span style="background: #e0f2fe; color: #0369a1; font-size: 0.8rem; padding: 4px 8px; border-radius: 4px; font-weight: 600;">Available (Open)</span></td>
                      <td style="padding: 12px 16px; text-align: right;"><button class="btn btn-primary open-inquiry-btn" style="padding: 6px 14px; font-size: 0.85rem;">Book Now</button></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 16px; font-weight: 600; color: #008060;">Autumn 2026</td>
                      <td style="padding: 12px 16px; color: #1e293b;">October 10, 2026</td>
                      <td style="padding: 12px 16px; color: #64748b;">October 29, 2026</td>
                      <td style="padding: 12px 16px;"><span style="background: #dcfce7; color: #15803d; font-size: 0.8rem; padding: 4px 8px; border-radius: 4px; font-weight: 600;">Guaranteed (Peak Season)</span></td>
                      <td style="padding: 12px 16px; text-align: right;"><button class="btn btn-primary open-inquiry-btn" style="padding: 6px 14px; font-size: 0.85rem;">Book Now</button></td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 16px; font-weight: 600; color: #008060;">Autumn 2026</td>
                      <td style="padding: 12px 16px; color: #1e293b;">November 01, 2026</td>
                      <td style="padding: 12px 16px; color: #64748b;">November 20, 2026</td>
                      <td style="padding: 12px 16px;"><span style="background: #e0f2fe; color: #0369a1; font-size: 0.8rem; padding: 4px 8px; border-radius: 4px; font-weight: 600;">Available (Clear Skies)</span></td>
                      <td style="padding: 12px 16px; text-align: right;"><button class="btn btn-primary open-inquiry-btn" style="padding: 6px 14px; font-size: 0.85rem;">Book Now</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Private Departures Notice -->
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
                <div>
                  <strong style="color: #1e293b; font-size: 1rem; display: block;">Prefer Custom Private Dates?</strong>
                  <span style="color: #64748b; font-size: 0.9rem;">We operate custom solo, couple, family, and private party departures 365 days a year.</span>
                </div>
                <button class="btn btn-secondary open-inquiry-btn" style="border-color: #008060; color: #008060; font-weight: 700;">Request Private Dates</button>
              </div>

            </div>
          </section>

          <!-- SECTION 5: PACKING LIST -->
          <section id="section-packing" class="trek-detail-section" style="margin-bottom: 40px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 24px;">
              <h2 style="font-size: 1.6rem; color: #1e293b; margin-top: 0; margin-bottom: 16px; font-weight: 800; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px;">
                Comprehensive High-Altitude Packing Checklist
              </h2>
              <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
                Because you will experience temperatures ranging from +25°C in the subtropical Marsyangdi foothills down to -15°C at Tilicho Base Camp and Thorong La Pass, a modular, layer-based packing system is mandatory:
              </p>

              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                  <h4 class="gear-section-title" style="margin-top: 0; color: #1e293b; border-left: 3px solid #008060; padding-left: 8px;">1. Upper Body Layers</h4>
                  <ul style="padding-left: 18px; color: #475569; font-size: 0.9rem; line-height: 1.6; margin: 0;">
                    <li>2x Moisture-wicking synthetic/merino base shirts</li>
                    <li>2x Mid-weight fleece jackets or wool pullovers</li>
                    <li>1x Heavyweight 800-fill down jacket with hood (-15°C rated)</li>
                    <li>1x Waterproof & windproof breathable Gore-Tex shell</li>
                  </ul>
                </div>

                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                  <h4 class="gear-section-title" style="margin-top: 0; color: #1e293b; border-left: 3px solid #008060; padding-left: 8px;">2. Lower Body & Legs</h4>
                  <ul style="padding-left: 18px; color: #475569; font-size: 0.9rem; line-height: 1.6; margin: 0;">
                    <li>2x Quick-dry trekking trousers (convertible zip-offs)</li>
                    <li>1x Thermal merino wool long underwear bottoms</li>
                    <li>1x Waterproof breathable shell pants (Gore-Tex)</li>
                    <li>4x Moisture-wicking athletic underwear briefs</li>
                  </ul>
                </div>

                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                  <h4 class="gear-section-title" style="margin-top: 0; color: #1e293b; border-left: 3px solid #008060; padding-left: 8px;">3. Footwear & Socks</h4>
                  <ul style="padding-left: 18px; color: #475569; font-size: 0.9rem; line-height: 1.6; margin: 0;">
                    <li>1x Sturdy ankle-support waterproof hiking boots (broken-in!)</li>
                    <li>4x Heavy merino wool mountaineering trekking socks</li>
                    <li>3x Lightweight liner socks (blister prevention)</li>
                    <li>1x Camp sandals/down booties for teahouse dining rooms</li>
                    <li>1x Lightweight slip-on microspikes / shoe chains</li>
                  </ul>
                </div>

                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                  <h4 class="gear-section-title" style="margin-top: 0; color: #1e293b; border-left: 3px solid #008060; padding-left: 8px;">4. Head, Hands & Sleeping</h4>
                  <ul style="padding-left: 18px; color: #475569; font-size: 0.9rem; line-height: 1.6; margin: 0;">
                    <li>1x Warm merino fleece beanie & 1x wide-brim sunhat</li>
                    <li>1x Polarized Category 3 or 4 glacier sunglasses (UV 400)</li>
                    <li>1x Lightweight liner gloves & 1x heavy waterproof alpine mitts</li>
                    <li>1x Four-season sleeping bag (comfort rated to -15°C / 5°F)</li>
                  </ul>
                </div>

                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                  <h4 class="gear-section-title" style="margin-top: 0; color: #1e293b; border-left: 3px solid #008060; padding-left: 8px;">5. Packs & Trekking Hardware</h4>
                  <ul style="padding-left: 18px; color: #475569; font-size: 0.9rem; line-height: 1.6; margin: 0;">
                    <li>1x 30L–35L Daypack with rain cover & padded hip belt</li>
                    <li>1x Pair adjustable trekking poles with flick-locks</li>
                    <li>1x Powerful LED headlamp (300+ lumens) with spare batteries</li>
                    <li>2x 1-Liter Nalgene wide-mouth insulated water bottles</li>
                  </ul>
                </div>

                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                  <h4 class="gear-section-title" style="margin-top: 0; color: #1e293b; border-left: 3px solid #008060; padding-left: 8px;">6. Medical & Hygiene</h4>
                  <ul style="padding-left: 18px; color: #475569; font-size: 0.9rem; line-height: 1.6; margin: 0;">
                    <li>Water purification tablets (Aquatabs) or SteriPEN</li>
                    <li>Personal med kit (Diamox, Ibuprofen, blister moleskin, rehydration salts)</li>
                    <li>High SPF 50+ broad-spectrum sunscreen & zinc lip balm</li>
                    <li>Biodegradable wet wipes, hand sanitizer & quick-dry towel</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 6: IN-DEPTH ROUTE GUIDES & MANUALS -->
          <section id="section-details" class="trek-detail-section" style="margin-bottom: 40px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 24px;">
              <h2 style="font-size: 1.6rem; color: #1e293b; margin-top: 0; margin-bottom: 8px; font-weight: 800;">
                In-Depth Expedition Guides & Route Intelligence
              </h2>
              <p style="color: #64748b; line-height: 1.6; margin-bottom: 20px;">
                Authored by our senior Himalayan expedition leaders, these comprehensive manuals explain the tactical realities, physiological strategies, and cultural nuances of the 20-day journey.
              </p>

              <div class="detail-accordions-wrapper">
                ${guidesData.guides.map((g, idx) => `
                <div class="detail-accordion-card ${idx === 0 ? 'open' : ''}" data-detail-id="${g.id}">
                  <div class="detail-accordion-header" onclick="this.parentElement.classList.toggle('open')">
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span style="background: #e6f7f0; color: #008060; font-size: 0.75rem; font-weight: 700; padding: 3px 8px; border-radius: 4px; text-transform: uppercase;">${g.tag}</span>
                      <h4 style="margin: 0; font-size: 1.05rem; color: #1e293b; font-weight: 700;">${g.title}</h4>
                    </div>
                    <svg class="accordion-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" style="transition: transform 0.2s ease; flex-shrink: 0;"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                  <div class="detail-accordion-body">
                    ${g.content}
                  </div>
                </div>`).join('')}
              </div>

            </div>
          </section>

          <!-- SECTION 7: ALTITUDE PROFILE VISUALIZER -->
          <section id="section-altitude-profile" class="trek-detail-section" style="margin-bottom: 40px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 24px;">
              <h2 style="font-size: 1.6rem; color: #1e293b; margin-top: 0; margin-bottom: 12px; font-weight: 800;">
                Interactive Altitude Progression Visualizer
              </h2>
              <p style="color: #64748b; line-height: 1.6; margin-bottom: 20px;">
                Track your exact physiological altitude curve across all 20 days. Notice how the initial acclimatization spike to Tilicho Lake (4,919m) followed by descent to Manang (3,500m) primes your body for the crowning ascent of Thorong La Pass (5,416m).
              </p>

              <!-- Altitude Visualizer Container Component -->
              <div id="altitude-visualizer-container" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px; min-height: 380px;">
                <!-- Rendered dynamically by altitude-visualizer.js using data-trek-key="tilicho_circuit" -->
              </div>
            </div>
          </section>

          <!-- SECTION 8: WEATHER VISUALIZER -->
          <section id="section-weather" class="trek-detail-section" style="margin-bottom: 40px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 24px;">
              <h2 style="font-size: 1.6rem; color: #1e293b; margin-top: 0; margin-bottom: 12px; font-weight: 800;">
                Seasonal Climate & Weather Forecast Simulator
              </h2>
              <p style="color: #64748b; line-height: 1.6; margin-bottom: 20px;">
                Explore monthly temperatures, snowfall risk, and daylight hours for the Annapurna Circuit and high-altitude Tilicho Lake basin:
              </p>
              
              <!-- Weather Visualizer Container -->
              <div id="weather-visualizer-container" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px; min-height: 340px;">
                <!-- Rendered dynamically by weather-visualizer.js -->
              </div>
            </div>
          </section>

          <!-- SECTION 9: ROUTE MAP -->
          <section id="section-map" class="trek-detail-section" style="margin-bottom: 40px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 24px;">
              <h2 style="font-size: 1.6rem; color: #1e293b; margin-top: 0; margin-bottom: 12px; font-weight: 800;">
                Annapurna Circuit with Tilicho Lake Topographic Route Map
              </h2>
              <p style="color: #64748b; line-height: 1.6; margin-bottom: 20px;">
                Topographic representation of the 20-day loop. The route tracks clockwise up the Marsyangdi River gorge to Manang, branches west into the Tilicho glacial cirque, returns to rejoin the main circuit path across Thorong La Pass (5,416m), and descends the Kali Gandaki Valley toward Poon Hill and Pokhara.
              </p>

              <div style="border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
                <img src="../../images/annapurna-circuit-trek-map.jpg" alt="Topographic Route Map of Annapurna Circuit with Tilicho Lake Trek" style="width: 100%; height: auto; display: block;" loading="lazy">
              </div>

              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-top: 16px; font-size: 0.9rem; color: #475569;">
                <strong>Key Waypoints:</strong> Kathmandu (1,300m) → Besisahar (760m) → Dharapani (1,860m) → Chame (2,670m) → Upper Pisang (3,200m) → Manang (3,500m) → Khangsar (3,700m) → Tilicho Base Camp (4,150m) → <strong>Tilicho Lake (4,919m)</strong> → Yak Kharka (4,018m) → Thorong Phedi (4,450m) → <strong>Thorong La Pass (5,416m)</strong> → Muktinath (3,800m) → Kagbeni (2,800m) → Jomsom (2,720m) → Tatopani (1,190m) → Ghorepani (2,860m) → <strong>Poon Hill (3,210m)</strong> → Pokhara (800m).
              </div>
            </div>
          </section>

          <!-- SECTION 10: BOOKING & POLICIES -->
          <section id="section-booking" class="trek-detail-section" style="margin-bottom: 40px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 24px;">
              <h2 style="font-size: 1.6rem; color: #1e293b; margin-top: 0; margin-bottom: 12px; font-weight: 800;">
                Hassle-Free Booking Process & Policies
              </h2>
              <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
                We make booking your 20-day Himalayan dream trip straightforward, transparent, and completely risk-free:
              </p>

              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin-bottom: 24px;">
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                  <span style="font-size: 1.5rem; font-weight: 800; color: #008060; display: block; margin-bottom: 4px;">01</span>
                  <strong style="color: #1e293b; display: block; margin-bottom: 6px;">Reserve with 20% Deposit</strong>
                  <span style="font-size: 0.88rem; color: #64748b;">Lock in your dates with a modest 20% refundable deposit via wire or credit card.</span>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                  <span style="font-size: 1.5rem; font-weight: 800; color: #008060; display: block; margin-bottom: 4px;">02</span>
                  <strong style="color: #1e293b; display: block; margin-bottom: 6px;">Free Date Changes</strong>
                  <span style="font-size: 0.88rem; color: #64748b;">Need to shift travel plans? Reschedule anytime up to 30 days prior with zero penalty fees.</span>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                  <span style="font-size: 1.5rem; font-weight: 800; color: #008060; display: block; margin-bottom: 4px;">03</span>
                  <strong style="color: #1e293b; display: block; margin-bottom: 6px;">Pay Balance on Arrival</strong>
                  <span style="font-size: 0.88rem; color: #64748b;">Settle your final remaining balance in cash (USD, EUR, GBP) or card upon arrival in Kathmandu.</span>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                  <span style="font-size: 1.5rem; font-weight: 800; color: #008060; display: block; margin-bottom: 4px;">04</span>
                  <strong style="color: #1e293b; display: block; margin-bottom: 6px;">Guaranteed Departure</strong>
                  <span style="font-size: 0.88rem; color: #64748b;">Once booked, your trek departure is 100% guaranteed to run—even if nobody else joins!</span>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 11: REVIEWS & TESTIMONIALS -->
          <section id="section-reviews" class="trek-detail-section" style="margin-bottom: 40px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 24px;">
              <h2 style="font-size: 1.6rem; color: #1e293b; margin-top: 0; margin-bottom: 16px; font-weight: 800; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px;">
                Verified Client Reviews & Testimonials
              </h2>

              <div style="display: grid; grid-template-columns: 1fr; gap: 16px;">
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <div>
                      <strong style="color: #1e293b; font-size: 1rem;">Mark & Sarah Jenkins</strong>
                      <span style="color: #64748b; font-size: 0.85rem; display: block;">United Kingdom • Trek completed October 2025</span>
                    </div>
                    <div style="color: #eab308; font-size: 1rem;">★★★★★</div>
                  </div>
                  <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin: 0;">
                    "Adding Tilicho Lake to the Annapurna Circuit was the best decision of our lives. Standing on the shores of that turquoise glacial lake at 4,919m was even more magical than crossing Thorong La Pass! Because of the acclimatization from Tilicho, the 5,416m pass crossing felt surprisingly smooth. Our guide Dawa and the entire Namaste Hiking Trek crew were absolute legends—diligent with safety, warm, and hilarious. 10/10 recommendation!"
                  </p>
                </div>

                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <div>
                      <strong style="color: #1e293b; font-size: 1rem;">Lars Lindqvist</strong>
                      <span style="color: #64748b; font-size: 0.85rem; display: block;">Sweden • Trek completed April 2025</span>
                    </div>
                    <div style="color: #eab308; font-size: 1rem;">★★★★★</div>
                  </div>
                  <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin: 0;">
                    "The 20-day pace is perfect. The acclimatization days in Manang gave my body the foundation it needed. The landslide section to Tilicho Base Camp looks intimidating in photos, but our guide was so composed and attentive that I felt completely safe. Bathing in the natural hot springs at Tatopani and watching the sunrise over Dhaulagiri from Poon Hill were unforgettable rewards. Flawless logistics from start to finish."
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- SECTION 12: FAQS -->
          <section id="section-faqs" class="trek-detail-section" style="margin-bottom: 40px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 24px;">
              <h2 style="font-size: 1.6rem; color: #1e293b; margin-top: 0; margin-bottom: 12px; font-weight: 800;">
                Frequently Asked Questions (Tilicho Circuit Trek)
              </h2>
              <p style="color: #64748b; line-height: 1.6; margin-bottom: 20px;">
                Clear, expert answers to everything you need to know about high altitude, trail conditions, safety, and gear for the 20-day journey:
              </p>

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
          <div class="sidebar-booking-card" style="position: static !important;">
              
              <!-- Top Right Best Seller Ribbon Badge -->
              <div style="position: absolute; top: 18px; right: 0; background: #F59E0B; color: #FFFFFF; font-size: 0.72rem; font-weight: 800; padding: 5px 14px; border-radius: 4px 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 2px 6px rgba(245, 158, 11, 0.3);">
                FLAGSHIP EXPEDITION
              </div>

              <!-- Pricing Header -->
              <span style="font-size: 0.75rem; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">FROM</span>
              <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 16px; flex-wrap: wrap;">
                <span style="font-size: 2.5rem; font-weight: 800; color: #0F172A; line-height: 1;">$1,349</span>
                <span style="font-size: 0.92rem; color: #64748B; font-weight: 500;">/ person</span>
                <a href="#section-itinerary" style="font-size: 0.92rem; color: #475569; font-weight: 600; text-decoration: underline; margin-left: 4px;">20 days trip</a>
              </div>

              <!-- Group Discount Accordion Toggle -->
              <div class="group-discount-toggle" onclick="const table = this.nextElementSibling; const arrow = this.querySelector('.gd-arrow'); if (table.style.display === 'none') { table.style.display = 'block'; arrow.style.transform = 'rotate(180deg)'; } else { table.style.display = 'none'; arrow.style.transform = 'rotate(0deg)'; }" style="border-top: 1px dashed #CBD5E1; border-bottom: 1px dashed #CBD5E1; padding: 10px 0; margin-bottom: 18px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none;">
                <span style="font-size: 0.78rem; font-weight: 800; color: #0F172A; text-transform: uppercase; letter-spacing: 0.04em;">WE OFFER GROUP DISCOUNT</span>
                <span class="gd-arrow" style="font-size: 0.85rem; color: #0F172A; transition: transform 0.2s ease;">▼</span>
              </div>

              <!-- Group Discount Table -->
              <div class="group-discount-content" style="display: none; margin-bottom: 18px; background: #F8FAFC; border-radius: 10px; padding: 12px; font-size: 0.85rem; border: 1px solid #E2E8F0;">
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">2 - 4 Persons</span>
                  <strong style="color: #0F172A;">$1,299 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">5 - 8 Persons</span>
                  <strong style="color: #0F172A;">$1,249 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0;">
                  <span style="color: #64748B;">9+ Persons</span>
                  <strong style="color: #047857;">$1,199 / person (Best Deal)</strong>
                </div>
              </div>

              <!-- Action Buttons -->
              <button class="btn open-inquiry-btn" data-trek-title="Annapurna Circuit with Tilicho Lake Trek (20 Days)" style="width: 100%; padding: 14px; background: #008060; color: #FFFFFF; border: none; border-radius: 50px; font-size: 1.05rem; font-weight: 800; cursor: pointer; margin-bottom: 12px; box-shadow: 0 4px 14px rgba(0, 128, 96, 0.25); transition: background 0.2s;">
                Book Now
              </button>
              <button class="btn open-inquiry-btn" data-trek-title="Annapurna Circuit with Tilicho Lake Trek (20 Days)" style="width: 100%; padding: 12px; background: #FFFFFF; color: #0F172A; border: 1px solid #CBD5E1; border-radius: 50px; font-size: 0.98rem; font-weight: 700; cursor: pointer; margin-bottom: 22px;">
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
                  <span>Trek Leading by Wilderness First Responders</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Double Manang Acclimatization Staging</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Natural Hot Springs in Tatopani & Poon Hill</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>No Hidden Fees & 100% Guaranteed Departures</span>
                </li>
              </ul>

              <!-- Bottom Instant Help Footer Section -->
              <div style="border-top: 1px dashed #CBD5E1; padding-top: 18px; display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <span style="font-size: 0.72rem; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">INSTANT HELP</span>
                  <strong style="font-size: 1.05rem; font-weight: 800; color: #0F172A;">Call or WhatsApp</strong>
                </div>

                <!-- Phone & WhatsApp Round Buttons -->
                <div style="display: flex; align-items: center; gap: 10px;">
                  <a href="tel:+9779800000000" style="display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; background: #008060; color: #FFFFFF; text-decoration: none; box-shadow: 0 4px 10px rgba(0, 128, 96, 0.3); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'" title="Call Us Directly">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </a>

                  <a href="https://wa.me/9779800000000?text=Hi%2C%20I%20am%20interested%20in%20the%2020-Day%20Annapurna%20Circuit%20with%20Tilicho%20Lake%20Trek." target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; background: #25D366; color: #FFFFFF; text-decoration: none; box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'" title="Chat on WhatsApp">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.25-1.48-1.4-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.42 1.44.54.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z"/>
                    </svg>
                  </a>
                </div>
              </div>

          </div>
        </div>
        <!-- END Right Column -->

      </div>
    </section>

    <!-- SECTION: YOU MIGHT ALSO LIKE (RELATED TREKS) -->
    <section class="you-might-like-section" style="padding: 60px 0; background: #f8fafc; border-top: 1px solid #e2e8f0;">
      <div class="container">
        <h2 style="font-size: 1.6rem; color: #1e293b; font-weight: 800; margin-bottom: 8px;">Explore Alternative Himalayan Journeys</h2>
        <p style="color: #64748b; margin-bottom: 24px;">Discover other flagship trekking itineraries in the Annapurna and Everest sanctuaries:</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
          <!-- Card 1: Annapurna Circuit 16 Days -->
          <a href="../annapurna-circuit-trek/" style="text-decoration: none; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 1px 3px rgba(0,0,0,0.05); transition: transform 0.2s ease;">
            <img src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-high-valley-07.jpg" alt="Annapurna Circuit Trek" style="width: 100%; height: 180px; object-fit: cover;">
            <div style="padding: 16px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span style="font-size: 0.75rem; color: #008060; font-weight: 700; text-transform: uppercase;">Annapurna • 16 Days</span>
                <h4 style="margin: 4px 0 8px; color: #1e293b; font-size: 1.05rem;">Annapurna Circuit Trek (16 Days)</h4>
                <p style="font-size: 0.85rem; color: #64748b; margin: 0; line-height: 1.4;">The classic loop crossing Thorong La Pass (5,416m) with mountain flight from Jomsom.</p>
              </div>
              <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; padding-top: 8px;">
                <strong style="color: #008060; font-size: 1.05rem;">From $1,199</strong>
                <span style="font-size: 0.85rem; color: #008060; font-weight: 600;">View Trip →</span>
              </div>
            </div>
          </a>

          <!-- Card 2: Annapurna Base Camp Trek -->
          <a href="../annapurna-base-camp-trek/" style="text-decoration: none; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 1px 3px rgba(0,0,0,0.05); transition: transform 0.2s ease;">
            <img src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-mountain-trail-03.jpg" alt="Annapurna Base Camp Trek" style="width: 100%; height: 180px; object-fit: cover;">
            <div style="padding: 16px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span style="font-size: 0.75rem; color: #008060; font-weight: 700; text-transform: uppercase;">Annapurna • 14 Days</span>
                <h4 style="margin: 4px 0 8px; color: #1e293b; font-size: 1.05rem;">Annapurna Base Camp Trek</h4>
                <p style="font-size: 0.85rem; color: #64748b; margin: 0; line-height: 1.4;">Hike deep into the natural mountain amphitheater of Annapurna Sanctuary (4,130m).</p>
              </div>
              <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; padding-top: 8px;">
                <strong style="color: #008060; font-size: 1.05rem;">From $990</strong>
                <span style="font-size: 0.85rem; color: #008060; font-weight: 600;">View Trip →</span>
              </div>
            </div>
          </a>

          <!-- Card 3: Manaslu Circuit Trek -->
          <a href="../manaslu-circuit-trek/" style="text-decoration: none; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 1px 3px rgba(0,0,0,0.05); transition: transform 0.2s ease;">
            <img src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekkers-high-altitude-trail-08.jpg" alt="Manaslu Circuit Trek" style="width: 100%; height: 180px; object-fit: cover;">
            <div style="padding: 16px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span style="font-size: 0.75rem; color: #008060; font-weight: 700; text-transform: uppercase;">Manaslu • 14 Days</span>
                <h4 style="margin: 4px 0 8px; color: #1e293b; font-size: 1.05rem;">Manaslu Circuit Trek</h4>
                <p style="font-size: 0.85rem; color: #64748b; margin: 0; line-height: 1.4;">Unspoiled wilderness trekking circling Mount Manaslu (8,163m) across Larkya La Pass (5,106m).</p>
              </div>
              <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; padding-top: 8px;">
                <strong style="color: #008060; font-size: 1.05rem;">From $1,250</strong>
                <span style="font-size: 0.85rem; color: #008060; font-weight: 600;">View Trip →</span>
              </div>
            </div>
          </a>

          <!-- Card 4: Everest Base Camp Trek -->
          <a href="../everest-base-camp-trek/" style="text-decoration: none; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 1px 3px rgba(0,0,0,0.05); transition: transform 0.2s ease;">
            <img src="../../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-autumn-forest-16.jpg" alt="Everest Base Camp Trek" style="width: 100%; height: 180px; object-fit: cover;">
            <div style="padding: 16px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span style="font-size: 0.75rem; color: #008060; font-weight: 700; text-transform: uppercase;">Everest • 14 Days</span>
                <h4 style="margin: 4px 0 8px; color: #1e293b; font-size: 1.05rem;">Everest Base Camp Trek</h4>
                <p style="font-size: 0.85rem; color: #64748b; margin: 0; line-height: 1.4;">The iconic pilgrimage to the foot of Mount Everest (5,364m) and Kala Patthar (5,545m).</p>
              </div>
              <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; padding-top: 8px;">
                <strong style="color: #008060; font-size: 1.05rem;">From $1,399</strong>
                <span style="font-size: 0.85rem; color: #008060; font-weight: 600;">View Trip →</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    </article>
  </main>

  <!-- Luxury Cinematic Footer -->
  ${footerHtml}

  <!-- Scripts -->
  ${bottomScripts}
`;

fs.writeFileSync('trek/tilicho-lake-trek/index.html', html, 'utf8');
console.log('Successfully written updated trek/tilicho-lake-trek/index.html!');
const stats = fs.statSync('trek/tilicho-lake-trek/index.html');
console.log('Final file size:', stats.size, 'bytes');
