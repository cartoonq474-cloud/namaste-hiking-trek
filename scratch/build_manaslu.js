const fs = require('fs');
const data = require('./manaslu_data.js');
const getReviewsHtml = require('./generate_manaslu_reviews.js');

console.log('Building Manaslu Circuit Trek HTML...');

const originalHtml = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

// SVG Icon helpers
const svgs = {
  clock: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  activity: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  mountain: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22L12 2l8 20H4z"/><path d="M9 22l3-7 3 7H9z" fill="#008060"/></svg>`,
  mapPin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  compass: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  home: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  truck: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  coffee: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>`,
  calendar: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  play: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  flag: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`,
  fileText: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  star: `<svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  check: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  cross: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  chevronDown: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`
};

function getFactIcon(name) {
  switch(name) {
    case 'clock': return svgs.clock;
    case 'activity': return svgs.activity;
    case 'mountain': return svgs.mountain;
    case 'map-pin': return svgs.mapPin;
    case 'compass': return svgs.compass;
    case 'home': return svgs.home;
    case 'truck': return svgs.truck;
    case 'coffee': return svgs.coffee;
    case 'calendar': return svgs.calendar;
    case 'play': return svgs.play;
    case 'flag': return svgs.flag;
    case 'file-text': return svgs.fileText;
    default: return svgs.clock;
  }
}

// 1. Head
const headEnd = originalHtml.indexOf('</head>');
let headHtml = originalHtml.substring(0, headEnd);

headHtml = headHtml.replace(/<title>[\s\S]*?<\/title>/, `<title>${data.meta.title}</title>`);
headHtml = headHtml.replace(/<meta\s+name="description"\s+content="[^"]*"/, `<meta name="description" content="${data.meta.description}"`);
headHtml = headHtml.replace(/<link\s+rel="canonical"\s+href="[^"]*"/, `<link rel="canonical" href="${data.meta.canonical}"`);
headHtml = headHtml.replace(/<meta\s+property="og:title"\s+content="[^"]*"/, `<meta property="og:title" content="${data.meta.title}"`);
headHtml = headHtml.replace(/<meta\s+property="og:description"\s+content="[^"]*"/, `<meta property="og:description" content="${data.meta.description}"`);
headHtml = headHtml.replace(/<meta\s+property="og:url"\s+content="[^"]*"/, `<meta property="og:url" content="${data.meta.canonical}"`);

if (!headHtml.includes('.itinerary-metric-item svg')) {
  headHtml = headHtml.replace('</style>', `    .itinerary-metric-item svg,
    .itinerary-metric-icon {
      width: 16px !important;
      height: 16px !important;
      min-width: 16px !important;
      min-height: 16px !important;
      max-width: 16px !important;
      max-height: 16px !important;
      flex-shrink: 0 !important;
    }
    .itinerary-meta-box-item svg {
      width: 18px !important;
      height: 18px !important;
      min-width: 18px !important;
      min-height: 18px !important;
      max-width: 18px !important;
      max-height: 18px !important;
      flex-shrink: 0 !important;
    }
  </style>`);
}

// 2. Site Header & Mega Menu
const headerStart = originalHtml.indexOf('<header class="');
const mainStart = originalHtml.indexOf('<main');
const headerHtml = originalHtml.substring(headerStart, mainStart);

// 3. Footer
const footerStart = originalHtml.indexOf('<footer class="site-footer"');
const footerHtml = originalHtml.substring(footerStart);

// 4. Hero Section
function renderHero() {
  const factsHtml = data.hero.facts.map(f => `
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              ${getFactIcon(f.icon)}
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">${f.label}</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;" ${f.altM ? `data-altitude-m="${f.altM}"` : ''}>${f.value}</span>
            </div>
          </div>`).join('\n');

  return `
  <main>
    <article itemscope itemtype="https://schema.org/TouristTrip">
    <!-- Page Title Section -->
    <section style="padding: 30px 0 10px 0; background: var(--color-neutral-50);">
      <div class="container">
        <!-- Top Row: Region Pill & Review Badges -->
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 12px;">
          <span class="pill pill-copper" style="margin-bottom: 0;">${data.hero.regionPill}</span>
          
          <!-- TripAdvisor Review Badge -->
          <div style="display: inline-flex; align-items: center; gap: 8px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 100px; padding: 4px 12px; font-size: 0.85rem; color: #475569; box-shadow: 0 1px 2px rgba(0,0,0,0.05); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: #00af87; border-radius: 50%;">
              <svg viewBox="0 0 24 24" fill="#000000" width="10" height="10">
                <path d="M12 3.2c-4.8 0-8.8 4-8.8 8.8 0 4.8 4 8.8 8.8 8.8 4.8 0 8.8-4 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm-3.3 12.1c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3.1 1.8-1.4 3.3-3.3 3.3zm6.6 0c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zm-6.6-4.9c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6zm6.6 0c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6zM12 11.5c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5z"/>
              </svg>
            </span>
            <span style="font-weight: 700; color: #0f172a;">5.0</span>
            <span style="display: inline-flex; gap: 2px;">
              <span style="width: 8px; height: 8px; background: #00af87; border-radius: 50%;"></span>
              <span style="width: 8px; height: 8px; background: #00af87; border-radius: 50%;"></span>
              <span style="width: 8px; height: 8px; background: #00af87; border-radius: 50%;"></span>
              <span style="width: 8px; height: 8px; background: #00af87; border-radius: 50%;"></span>
              <span style="width: 8px; height: 8px; background: #00af87; border-radius: 50%;"></span>
            </span>
            <span>reviews on <strong style="font-weight: 600; color: #0f172a;">TripAdvisor</strong></span>
          </div>

          <!-- Google Review Badge -->
          <div style="display: inline-flex; align-items: center; gap: 8px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 100px; padding: 4px 12px; font-size: 0.85rem; color: #475569; box-shadow: 0 1px 2px rgba(0,0,0,0.05); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span style="font-weight: 700; color: #0f172a;">5.0</span>
            <span style="color: #FBBF24; display: inline-flex; gap: 1px; font-size: 0.9rem;">${svgs.star}${svgs.star}${svgs.star}${svgs.star}${svgs.star}</span>
            <span><strong style="font-weight: 600; color: #0f172a;">169</strong> reviews on Google</span>
          </div>
        </div>
        <h1 style="font-size: 2.8rem; margin-top: 6px; margin-bottom: 8px; color: var(--color-primary-navy);">${data.hero.h1}</h1>
        <p style="font-size: 1.15rem; color: var(--color-neutral-600); line-height: 1.7; margin-top: 12px; margin-bottom: 0;">
          ${data.hero.leadText}
          <span id="manaslu-more-text" style="display: none;">
            ${data.hero.expandText}
          </span>
          <button id="manaslu-toggle-btn" style="background: none; border: none; color: #10b981; font-weight: 700; font-size: 1.05rem; cursor: pointer; padding: 0; margin-left: 6px; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; vertical-align: middle; transition: opacity 0.2s ease;">
            Learn more <span style="font-size: 1.1rem; margin-left: 2px;">→</span>
          </button>
        </p>
        
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const toggleBtn = document.getElementById('manaslu-toggle-btn');
            const moreText = document.getElementById('manaslu-more-text');
            
            if (toggleBtn && moreText) {
              toggleBtn.addEventListener('click', () => {
                const isHidden = moreText.style.display === 'none';
                moreText.style.display = isHidden ? 'inline' : 'none';
                toggleBtn.innerHTML = isHidden 
                  ? 'Learn less <span style="font-size: 1.1rem; margin-left: 2px;">↑</span>' 
                  : 'Learn more <span style="font-size: 1.1rem; margin-left: 2px;">→</span>';
              });
            }
          });
        </script>
      </div>
    </section>

    <!-- Multi-Image Collage Gallery -->
    <div class="container" style="margin-bottom: 24px;">
      <div class="trek-gallery-collage">
        <!-- Main Large Photo (Left) with Travelers' Choice badge -->
        <div class="trek-gallery-main">
          <img src="../../images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-04.jpg" alt="Golden Himalayan Sunrise lighting up Mount Manaslu 8,163m">
          <!-- TripAdvisor Travelers' Choice Badge -->
          <div class="trek-gallery-badge">
            <div class="trek-gallery-badge-icon" style="background: #00af87; display: flex; align-items: center; justify-content: center;">
              <svg width="16" height="16" class="icon-svg icon-sm icon-svg-fill" style="stroke: none; fill: white;" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </div>
            <div class="trek-gallery-badge-text">
              <span>Travelers' Choice</span>
              <span>Best of the Best 2026</span>
            </div>
          </div>
        </div>
        
        <!-- Grid Items (Right 2x2 Columns) -->
        <div class="trek-gallery-sub">
          <img src="../../images/treks/manaslu-circuit/manaslu-circuit-suspension-bridge-mountain-view-03.jpg" alt="Deep River Gorge Suspension Bridge on the Manaslu Circuit">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-top-right">
          <img src="../../images/treks/manaslu-circuit/manaslu-circuit-trekker-mountain-village-01.jpg" alt="Trekker Walking through Traditional Himalayan Mountain Village">
          <!-- See all photos button -->
          <button class="trek-gallery-see-all-btn">
            <span><svg width="14" height="14" class="icon-svg icon-xs icon-margin-right" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>See all photos</span>
          </button>
        </div>
        <div class="trek-gallery-sub">
          <img src="../../images/treks/manaslu-circuit/manaslu-circuit-yak-pasture-mountain-07.jpg" alt="Highland Yak Pasture under Towering Snow-Capped Peaks">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-bottom-right">
          <img src="../../images/treks/manaslu-circuit/manaslu-circuit-village-prayer-flags-13.jpg" alt="Tibetan Buddhist Prayer Flags fluttering over Ancient Manaslu Village">
        </div>
      </div>
    </div>

    <!-- Key Trip Facts Grid -->
    <div class="container" style="margin-bottom: 30px;">
      <style>
        .trip-fact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          transition: transform 0.2s ease-in-out;
        }
        .trip-fact-item:hover {
          transform: translateY(-2px);
        }
      </style>
      <div style="background: #ffffff; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); padding: 24px 30px;">
        <h3 style="font-size: 1.3rem; margin-bottom: 24px; color: var(--color-primary-navy); display: flex; align-items: center; gap: 8px; font-weight: 700;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="icon-navy" style="color: var(--color-primary-navy);"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
          Key Trip Facts
        </h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 24px 20px;">
${factsHtml}
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--color-primary-navy); line-height: 1.3;">Instant confirmation</span>
        </div>

      </div>
    </div>`;
}

// 5. Sticky Sub-Nav
function renderSubNav() {
  return `
    <!-- Sticky Scroll-Spy Sub-Navigation Bar -->
    <div class="trek-sub-nav">
      <div class="container">
        <div class="trek-sub-nav-list">
          <button class="trek-sub-nav-btn active" data-tab="overview">
            <svg width="16" height="16" class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>Overview
          </button>
          <button class="trek-sub-nav-btn" data-tab="itinerary">
            <svg width="16" height="16" class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Itinerary
          </button>
          <button class="trek-sub-nav-btn" data-tab="includes">
            <svg width="16" height="16" class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Includes & Excludes
          </button>
          <button class="trek-sub-nav-btn" data-tab="dates">
            <svg width="16" height="16" class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>Dates & Availability
          </button>
          <button class="trek-sub-nav-btn" data-tab="packing">
            <svg width="16" height="16" class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>Packing List
          </button>
          <button class="trek-sub-nav-btn" data-tab="details">
            <svg width="16" height="16" class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>Trip Details
          </button>
          <button class="trek-sub-nav-btn" data-tab="map">
            <svg width="16" height="16" class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/></svg>Map
          </button>
          <button class="trek-sub-nav-btn" data-tab="booking">
            <svg width="16" height="16" class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>Booking
          </button>
          <button class="trek-sub-nav-btn" data-tab="reviews">
            <svg width="16" height="16" class="icon-svg icon-sm icon-margin-right icon-svg-fill" style="fill: currentColor; stroke: none;" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>Reviews
          </button>
          <button class="trek-sub-nav-btn" data-tab="faqs">
            <svg width="16" height="16" class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="12" r="10"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>FAQs
          </button>
        </div>
      </div>
    </div>`;
}

// 6. Section 1: Overview
function renderSectionOverview() {
  const tableRows = data.overviewTable.map(r => `
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 600; color: var(--color-primary-navy); width: 35%;">${r.feature}</td>
                    <td style="padding: 12px 16px; color: var(--color-neutral-700);">${r.details}</td>
                  </tr>`).join('\n');

  const highlightCards = data.highlights.map(h => `
                <div class="rich-highlight-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 22px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; gap: 8px;">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 32px; height: 32px; border-radius: 50%; background: #e6f7f0; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                      ${svgs.check}
                    </div>
                    <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin: 0; font-weight: 700;">${h.title}</h4>
                  </div>
                  <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 4px 0 0 0;">${h.desc}</p>
                </div>`).join('\n');

  return `
          <!-- Section 1: Overview -->
          <section id="section-overview" class="trek-detail-section">
            <h2 class="trek-section-title">Manaslu Circuit Trek Overview</h2>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The <strong>Manaslu Circuit Trek</strong> is a premier high-altitude Himalayan trekking journey centered on Mount Manaslu, the world's eighth-highest mountain at 8,163 m. The journey follows the remote, culturally pristine mountain landscapes of northern Gorkha, connecting the deep river canyons of the Budhi Gandaki Valley with the alpine Marsyangdi Valley over the formidable 5,106 m Larkya La Pass. This creates a true wilderness circumnavigation rather than an out-and-back trek.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
              Our 14-day itinerary has fourteen route days from the Kathmandu road departure to the Kathmandu return. Samagaon (3,530 m) and Samdo (3,860 m) feature dedicated acclimatization stays, while Dharamsala at approximately 4,460 m is the highest scheduled overnight before crossing Larkya La during daytime. The route combines staggering mountain scenery, traditional Tibetan Buddhist Nubri heritage, active wildlife sanctuaries, and five distinct ecological transitions.
            </p>

            <!-- Manaslu Circuit Trek at a Glance Table -->
            <div style="margin: 30px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.03);">
              <div style="background: var(--color-primary-navy); padding: 16px 20px;">
                <h3 style="color: #ffffff; margin: 0; font-size: 1.2rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                  ${svgs.compass}
                  Manaslu Circuit Trek at a Glance
                </h3>
              </div>
              <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
                <tbody>
${tableRows}
                </tbody>
              </table>
            </div>

            <!-- Deep Narrative Blocks -->
            <div style="margin-top: 30px;">
              <h3 style="font-size: 1.4rem; color: var(--color-primary-navy); margin-bottom: 12px; font-weight: 700;">What the Manaslu Circuit Experience is Like</h3>
              <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 16px;">
                The Manaslu Circuit is ideally suited to travelers seeking a multi-day Himalayan expedition with substantial changes in landscape, climate, and altitude. Instead of concentrating on one singular viewpoint, the trek moves through continuously evolving environments: lower river valleys with sub-tropical farmland and roaring waterfalls give way to ancient fir and oak woodlands, opening further into Tibetan-style stone villages and glaciated alpine cirques.
              </p>

              <h3 style="font-size: 1.4rem; color: var(--color-primary-navy); margin-bottom: 12px; font-weight: 700;">Mount Manaslu as the Centerpiece</h3>
              <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 16px;">
                Rising to 8,163 m (26,781 ft), Mount Manaslu—meaning 'Mountain of the Spirit' in Sanskrit—is the defining geographic presence of the region. The trekking trail circumnavigates the massif through surrounding valleys and settlements rather than climbing the mountain itself, offering changing perspectives of its twin summits from Lho, Samagaon, and high mountain ridges.
              </p>

              <h3 style="font-size: 1.4rem; color: var(--color-primary-navy); margin-bottom: 12px; font-weight: 700;">Cultural Heritage of Upper Nubri</h3>
              <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 24px;">
                As elevation rises above 2,500 m, you enter the Nubri cultural region, populated by Tibetan-descent mountain communities who have preserved their Buddhist heritage for centuries. Intricately carved mani stone walls, chortens, spinning prayer wheels, and active monasteries like Ribung Gompa in Lho and Pungyen Gompa above Samagaon are integral parts of the trail, encountered as living cultural communities rather than museum sights.
              </p>
            </div>
            
            <!-- 6 Signature Highlight Cards Grid -->
            <div style="margin-top: 35px; padding-top: 25px; border-top: 1px solid var(--color-neutral-100);">
              <h3 style="font-size: 1.4rem; margin-bottom: 20px; color: var(--color-primary-navy); font-weight: 700;">Signature Trip Highlights</h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
${highlightCards}
              </div>
            </div>
          </section>`;
}

// 7. Section 2: Itinerary
function renderSectionItinerary() {
  const daysHtml = data.itinerary.map((d, index) => {
    const isActive = index === 0 ? 'active' : '';
    return `
              <!-- Day ${d.day < 10 ? '0' + d.day : d.day} -->
              <div class="itinerary-card ${isActive}">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day ${d.day}:</span> ${d.title}
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      ${d.subtitle} – <span data-altitude-m="${d.maxElevation.match(/\d+[\d,]*/)?.[0]?.replace(',', '') || 1400}">${d.maxElevation}</span>
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <div class="itinerary-toggle-btn-new">
                      ${svgs.chevronDown}
                    </div>
                  </div>
                </div>

                <div class="itinerary-content" ${isActive ? 'style="max-height: 2500px;"' : ''}>
                  <div class="itinerary-content-inner">
                    <!-- 5 Metric Grid -->
                    <div class="itinerary-metrics-list">
                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px; flex-shrink: 0;"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/></svg>
                        <span><strong>Route:</strong> ${d.route}</span>
                      </div>

                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px; flex-shrink: 0;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        <span><strong>Walking Time:</strong> ${d.hours}</span>
                      </div>

                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px; flex-shrink: 0;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        <span><strong>Distance:</strong> ${d.distance}</span>
                      </div>

                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px; flex-shrink: 0;"><polygon points="12 2 2 22 22 22"/></svg>
                        <span><strong>Max Elevation:</strong> <span data-altitude-m="${d.maxElevation.match(/\d+[\d,]*/)?.[0]?.replace(',', '') || 1400}">${d.maxElevation}</span></span>
                      </div>

                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px; flex-shrink: 0;"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        <span><strong>Accommodation:</strong> ${d.accommodation}</span>
                      </div>
                    </div>

                    <!-- Meta Box -->
                    <div class="itinerary-meta-box">
                      <div class="itinerary-meta-box-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px; flex-shrink: 0;">
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                        </svg>
                        <span><strong>Meals Included:</strong> ${d.meals}</span>
                      </div>
                      <div class="itinerary-meta-box-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px; flex-shrink: 0;">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                          <circle cx="12" cy="9" r="2.5"></circle>
                        </svg>
                        <span><strong>Overnight Stay:</strong> ${d.overnight}</span>
                      </div>
                    </div>

                    <!-- Narrative Paragraph -->
                    <div class="itinerary-description">
                      <p>${d.desc}</p>
                    </div>

                    <!-- Real Photo Container -->
                    <div class="itinerary-photo-wrapper" style="margin-bottom: 20px; max-width: 650px;">
                      <img loading="lazy" src="${d.image}" alt="${d.imageAlt}" style="width: 100%; border-radius: 12px; display: block;">
                      <span style="display: block; font-size: 0.82rem; color: var(--color-neutral-500); margin-top: 6px; font-style: italic;">${d.imageAlt}</span>
                    </div>
                  </div>
                </div>
              </div>`;
  }).join('\n');

  return `
          <!-- Section 2: Itinerary -->
          <section id="section-itinerary" class="trek-detail-section">
            <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 12px; margin-bottom: 8px;">
              <h2 class="trek-section-title" style="margin-bottom: 0;">Manaslu Circuit Trek Itinerary: Day by Day Details</h2>
              <button type="button" id="itin-expand-all-btn" style="background: #ffffff; border: 1px solid #cbd5e1; padding: 6px 16px; border-radius: 8px; font-weight: 600; font-size: 0.85rem; color: var(--color-primary-navy); cursor: pointer; transition: all 0.2s;">Expand All Days</button>
            </div>
            <p style="font-size: 1.05rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 24px; max-width: 850px;">
              Our 14-day Manaslu Circuit Trek itinerary is expertly balanced around gradual elevation gain, dual acclimatization hubs at Samagaon and Samdo, and a daytime crossing of Larkya La Pass (5,106 m). Review the stage details, walking hours, distances, and overnight teahouse locations below.
            </p>
            
            <div class="itinerary-timeline">
${daysHtml}
            </div>
          </section>`;
}

// 8. Section 3: Includes & Excludes
function renderSectionIncludes() {
  const incCards = data.includes.map(inc => `
                <div class="inc-exc-card" style="background: var(--color-white); border: 1px solid #e2e8f0; border-radius: 16px; padding: 22px; display: flex; gap: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
                  <div class="inc-exc-icon-box" style="width: 32px; height: 32px; border-radius: 50%; background: #e6f7f0; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    ${svgs.check}
                  </div>
                  <div>
                    <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 0 0 6px 0; font-weight: 700;">${inc.title}</h4>
                    <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.5; margin: 0;">${inc.desc}</p>
                  </div>
                </div>`).join('\n');

  const excCards = data.excludes.map(exc => `
                <div class="inc-exc-card" style="background: var(--color-white); border: 1px solid #e2e8f0; border-radius: 16px; padding: 22px; display: flex; gap: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
                  <div class="inc-exc-icon-box" style="width: 32px; height: 32px; border-radius: 50%; background: #fee2e2; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    ${svgs.cross}
                  </div>
                  <div>
                    <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 0 0 6px 0; font-weight: 700;">${exc.title}</h4>
                    <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.5; margin: 0;">${exc.desc}</p>
                  </div>
                </div>`).join('\n');

  return `
          <!-- Section 3: Includes & Excludes -->
          <section id="section-includes" class="trek-detail-section">
            <style>
              .inc-exc-container {
                margin-top: 10px;
              }
              .inc-exc-section-title-wrapper {
                border-left: 4px solid var(--color-copper-orange);
                padding-left: 14px;
                margin-bottom: 24px;
                margin-top: 30px;
              }
              .inc-exc-section-title {
                font-size: 1.8rem;
                margin: 0;
                color: var(--color-primary-navy);
                font-weight: 700;
              }
              .inc-exc-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
                margin-bottom: 40px;
              }
              @media (max-width: 768px) {
                .inc-exc-grid {
                  grid-template-columns: 1fr;
                }
              }
            </style>
            
            <div class="inc-exc-container">
              <!-- Included Section Header -->
              <div class="inc-exc-section-title-wrapper" style="margin-top: 0;">
                <h2 class="inc-exc-section-title">What is Included in Manaslu Circuit Trek</h2>
              </div>
              <p style="color: var(--color-neutral-600); font-size: 1rem; margin-bottom: 24px; line-height: 1.6;">
                Our 14-day package brings together every official permit, transportation leg, teahouse stay, and mountain safety service required for a seamless and safe circumnavigation of Mount Manaslu.
              </p>

              <!-- Inclusions Grid -->
              <div class="inc-exc-grid">
${incCards}
              </div>

              <!-- Excluded Section Header -->
              <div class="inc-exc-section-title-wrapper">
                <h2 class="inc-exc-section-title">What is Excluded in Manaslu Circuit Trek</h2>
              </div>
              <p style="color: var(--color-neutral-600); font-size: 1rem; margin-bottom: 24px; line-height: 1.6;">
                Transparent pricing is a foundational principle at Namaste Hiking Trek. Below are personal expenses, optional services, and individual travel preparations not covered in the package rate.
              </p>

              <!-- Exclusions Grid -->
              <div class="inc-exc-grid">
${excCards}
              </div>
            </div>
          </section>`;
}

// 9. Section 4: Dates & Availability
function renderSectionDates() {
  return `
          <!-- Section 4: Dates & Availability -->
          <section id="section-dates" class="trek-detail-section">
            <div class="dates-section-header">
              <h2 class="trek-section-title" style="margin-bottom: 0;">Booking Dates & Availability for Manaslu Circuit Trek</h2>
              <div class="dates-mode-toggle">
                <button type="button" class="dates-mode-btn active" data-mode="group">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  Group Joining
                </button>
                <button type="button" class="dates-mode-btn" data-mode="private">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Private Trek
                </button>
              </div>
            </div>

            <!-- Group View Panel -->
            <div id="dates-group-view" class="dates-panel active">
              <div class="dates-filter-bar">
                <div class="dates-filter-group">
                  <label for="dates-year-select">Year</label>
                  <select id="dates-year-select" class="dates-select">
                    <option value="2026" selected>2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>
                <div class="dates-filter-group">
                  <label for="dates-month-select">Month</label>
                  <select id="dates-month-select" class="dates-select">
                    <option value="all">All Months</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                  </select>
                </div>
              </div>

              <!-- Dates Table -->
              <div class="dates-table-container">
                <table class="dates-table">
                  <thead>
                    <tr>
                      <th>Dates</th>
                      <th>Days</th>
                      <th>Status</th>
                      <th>Price / person</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr data-year="2026" data-month="9">
                      <td>
                        <div class="dates-cell-primary">Sep 12 - Sep 25, 2026</div>
                        <div class="dates-cell-secondary">Autumn Prime Season</div>
                      </td>
                      <td>14 Days</td>
                      <td><span class="dates-status-badge guaranteed">Guaranteed</span></td>
                      <td><span class="dates-price-val" data-price-usd="1299">$1,299</span></td>
                      <td><button type="button" class="dates-book-btn open-inquiry-btn" data-trek-title="Manaslu Circuit Trek (Sep 12 - Sep 25, 2026)">Book Now</button></td>
                    </tr>
                    <tr data-year="2026" data-month="9">
                      <td>
                        <div class="dates-cell-primary">Sep 26 - Oct 09, 2026</div>
                        <div class="dates-cell-secondary">Peak Autumn Clarity</div>
                      </td>
                      <td>14 Days</td>
                      <td><span class="dates-status-badge fast">Filling Fast</span></td>
                      <td><span class="dates-price-val" data-price-usd="1299">$1,299</span></td>
                      <td><button type="button" class="dates-book-btn open-inquiry-btn" data-trek-title="Manaslu Circuit Trek (Sep 26 - Oct 09, 2026)">Book Now</button></td>
                    </tr>
                    <tr data-year="2026" data-month="10">
                      <td>
                        <div class="dates-cell-primary">Oct 05 - Oct 18, 2026</div>
                        <div class="dates-cell-secondary">Optimal Mountain Views</div>
                      </td>
                      <td>14 Days</td>
                      <td><span class="dates-status-badge limited">Only 3 Seats</span></td>
                      <td><span class="dates-price-val" data-price-usd="1299">$1,299</span></td>
                      <td><button type="button" class="dates-book-btn open-inquiry-btn" data-trek-title="Manaslu Circuit Trek (Oct 05 - Oct 18, 2026)">Book Now</button></td>
                    </tr>
                    <tr data-year="2026" data-month="10">
                      <td>
                        <div class="dates-cell-primary">Oct 19 - Nov 01, 2026</div>
                        <div class="dates-cell-secondary">Clear Blue Skies</div>
                      </td>
                      <td>14 Days</td>
                      <td><span class="dates-status-badge guaranteed">Guaranteed</span></td>
                      <td><span class="dates-price-val" data-price-usd="1299">$1,299</span></td>
                      <td><button type="button" class="dates-book-btn open-inquiry-btn" data-trek-title="Manaslu Circuit Trek (Oct 19 - Nov 01, 2026)">Book Now</button></td>
                    </tr>
                    <tr data-year="2026" data-month="11">
                      <td>
                        <div class="dates-cell-primary">Nov 03 - Nov 16, 2026</div>
                        <div class="dates-cell-secondary">Late Autumn Crisp Trails</div>
                      </td>
                      <td>14 Days</td>
                      <td><span class="dates-status-badge guaranteed">Guaranteed</span></td>
                      <td><span class="dates-price-val" data-price-usd="1249">$1,249</span></td>
                      <td><button type="button" class="dates-book-btn open-inquiry-btn" data-trek-title="Manaslu Circuit Trek (Nov 03 - Nov 16, 2026)">Book Now</button></td>
                    </tr>
                    <tr data-year="2027" data-month="3">
                      <td>
                        <div class="dates-cell-primary">Mar 15 - Mar 28, 2027</div>
                        <div class="dates-cell-secondary">Spring Awakening</div>
                      </td>
                      <td>14 Days</td>
                      <td><span class="dates-status-badge guaranteed">Open</span></td>
                      <td><span class="dates-price-val" data-price-usd="1249">$1,249</span></td>
                      <td><button type="button" class="dates-book-btn open-inquiry-btn" data-trek-title="Manaslu Circuit Trek (Mar 15 - Mar 28, 2027)">Book Now</button></td>
                    </tr>
                    <tr data-year="2027" data-month="4">
                      <td>
                        <div class="dates-cell-primary">Apr 06 - Apr 19, 2027</div>
                        <div class="dates-cell-secondary">Rhododendron Bloom</div>
                      </td>
                      <td>14 Days</td>
                      <td><span class="dates-status-badge guaranteed">Guaranteed</span></td>
                      <td><span class="dates-price-val" data-price-usd="1299">$1,299</span></td>
                      <td><button type="button" class="dates-book-btn open-inquiry-btn" data-trek-title="Manaslu Circuit Trek (Apr 06 - Apr 19, 2027)">Book Now</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Private Trek View Panel -->
            <div id="dates-private-view" class="dates-panel" style="display: none;">
              <div class="dates-private-card">
                <div class="dates-private-content">
                  <h3 class="dates-private-title">Customize Your Private Manaslu Circuit Trek</h3>
                  <p class="dates-private-desc">
                    Choose your own departure dates, customize walking pacing, include side extensions like Tsum Valley, and enjoy a dedicated guide and porter crew exclusively for your private party.
                  </p>
                  <ul class="dates-private-perks">
                    <li>✓ 100% Flexible Departure Dates Year-Round</li>
                    <li>✓ Personalized Daily Walking Pace & Acclimatization</li>
                    <li>✓ Private 4WD Jeep Overland Transportation</li>
                    <li>✓ Solo, Couple, Family, and Group Discounts</li>
                  </ul>
                  <button type="button" class="btn btn-primary open-inquiry-btn" data-trek-title="Manaslu Circuit Trek (Private Departure Request)">
                    Request a Custom Private Quote
                  </button>
                </div>
              </div>
            </div>
          </section>`;
}

// 10. Section 5: Packing List
function renderSectionPacking() {
  const gearItems = [
    { cat: "clothing", name: "Moisture-wicking thermal base layers (top & bottom, merino wool)" },
    { cat: "clothing", name: "Breathable trekking shirts (short & long sleeve, quick-dry)" },
    { cat: "clothing", name: "Convertible trekking trousers & hiking shorts" },
    { cat: "clothing", name: "Insulating fleece jacket or lightweight polartec pullover" },
    { cat: "clothing", name: "Heavy down jacket (-15°C to -20°C rated, with hood)" },
    { cat: "clothing", name: "Waterproof Gore-Tex hard-shell jacket & overtrousers" },
    { cat: "clothing", name: "Warm fleece beanie & wide-brim sun protection hat" },
    { cat: "clothing", name: "Thermal glove liners & heavy windproof/waterproof mittens" },
    { cat: "footwear", name: "Sturdy, waterproof, broken-in ankle-support trekking boots" },
    { cat: "footwear", name: "Merino wool trekking socks (4–5 pairs) & thin anti-blister liner socks" },
    { cat: "footwear", name: "Lightweight camp shoes or sandals for evening teahouse relaxation" },
    { cat: "footwear", name: "Breathable gaiters (for mud in lower valley and snow near Larkya La)" },
    { cat: "alpine", name: "Slip-on microspikes / mini-crampons (essential for icy Larkya La moraines)" },
    { cat: "alpine", name: "Adjustable telescopic trekking poles with snow baskets" },
    { cat: "alpine", name: "UV Category 3 or 4 glacier sunglasses with side shields" },
    { cat: "alpine", name: "UV neck gaiter / buff (dust and wind protection)" },
    { cat: "bags", name: "Four-season sleeping bag (comfort rated to -15°C / 5°F)" },
    { cat: "bags", name: "Silk or thermal sleeping bag liner (adds 3–5°C warmth)" },
    { cat: "bags", name: "30–40L ergonomic daypack with integrated waterproof rain cover" },
    { cat: "bags", name: "80–100L durable waterproof duffel bag (carried by your porter)" },
    { cat: "hydration", name: "Two 1-liter wide-mouth insulated bottles (Nalgene or stainless steel)" },
    { cat: "hydration", name: "Water purification tablets (Aquatabs / Katadyn) or portable squeeze filter" },
    { cat: "hydration", name: "High-capacity power bank (20,000+ mAh, kept inside sleeping bag)" },
    { cat: "hydration", name: "Reliable LED headlamp (300+ lumens) with spare batteries" },
    { cat: "medical", name: "Personal prescription meds & Diamox (acetazolamide) for altitude" },
    { cat: "medical", name: "Blister prevention kit (Compeed, medical tape, moleskin)" },
    { cat: "medical", name: "Broad-spectrum SPF 50+ sunscreen and zinc lip balm" },
    { cat: "medical", name: "Biodegradable wet wipes, pocket tissue, and hand sanitizer" }
  ];

  const checklistRows = gearItems.map((g, idx) => `
                <div class="gear-checklist-item" data-gear-cat="${g.cat}" style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 8px;">
                  <input type="checkbox" id="gear-manaslu-${idx}" class="gear-item-checkbox" style="width: 18px; height: 18px; accent-color: var(--color-emerald-green); cursor: pointer;">
                  <label for="gear-manaslu-${idx}" style="font-size: 0.95rem; color: var(--color-neutral-800); font-weight: 500; cursor: pointer; flex-grow: 1;">${g.name}</label>
                </div>`).join('\n');

  return `
          <!-- Section 5: Packing List -->
          <section id="section-packing" class="trek-detail-section">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; gap: 16px; flex-wrap: wrap;">
              <div>
                <h2 class="trek-section-title" style="margin-bottom: 8px;">Packing List for Manaslu Circuit Trek</h2>
                <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                  <span style="font-size: 0.95rem; color: var(--color-neutral-600); font-weight: 500;">
                    Essential Info: Missing gear can easily be rented or bought in Thamel, Kathmandu before departure.
                  </span>
                </div>
              </div>

              <!-- Interactive Packed Badge Counter -->
              <div style="display: inline-flex; align-items: center; gap: 8px; background: #e6f7f0; border: 1px solid #bbf7d0; border-radius: 100px; padding: 6px 16px; font-size: 0.9rem; font-weight: 700; color: #008060;">
                ${svgs.check}
                <span><span class="gear-checked-count">0</span> / <span class="gear-total-count">${gearItems.length}</span> Packed</span>
              </div>
            </div>

            <!-- Gear Tabs Filter -->
            <div style="display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap;">
              <button type="button" class="guide-pill-btn active gear-filter-btn" data-gear-filter="all" onclick="document.querySelectorAll('.gear-checklist-item').forEach(el => el.style.display='flex'); document.querySelectorAll('.gear-filter-btn').forEach(b => b.classList.remove('active')); this.classList.add('active');" style="padding: 6px 14px; border-radius: 20px; border: 1px solid #cbd5e1; background: #ffffff; font-weight: 600; font-size: 0.85rem; cursor: pointer;">All Items</button>
              <button type="button" class="guide-pill-btn gear-filter-btn" data-gear-filter="clothing" onclick="document.querySelectorAll('.gear-checklist-item').forEach(el => el.style.display= el.getAttribute('data-gear-cat')==='clothing' ? 'flex':'none'); document.querySelectorAll('.gear-filter-btn').forEach(b => b.classList.remove('active')); this.classList.add('active');" style="padding: 6px 14px; border-radius: 20px; border: 1px solid #cbd5e1; background: #ffffff; font-weight: 600; font-size: 0.85rem; cursor: pointer;">Clothing Layers</button>
              <button type="button" class="guide-pill-btn gear-filter-btn" data-gear-filter="footwear" onclick="document.querySelectorAll('.gear-checklist-item').forEach(el => el.style.display= el.getAttribute('data-gear-cat')==='footwear' ? 'flex':'none'); document.querySelectorAll('.gear-filter-btn').forEach(b => b.classList.remove('active')); this.classList.add('active');" style="padding: 6px 14px; border-radius: 20px; border: 1px solid #cbd5e1; background: #ffffff; font-weight: 600; font-size: 0.85rem; cursor: pointer;">Footwear</button>
              <button type="button" class="guide-pill-btn gear-filter-btn" data-gear-filter="alpine" onclick="document.querySelectorAll('.gear-checklist-item').forEach(el => el.style.display= el.getAttribute('data-gear-cat')==='alpine' ? 'flex':'none'); document.querySelectorAll('.gear-filter-btn').forEach(b => b.classList.remove('active')); this.classList.add('active');" style="padding: 6px 14px; border-radius: 20px; border: 1px solid #cbd5e1; background: #ffffff; font-weight: 600; font-size: 0.85rem; cursor: pointer;">Alpine & Pass Gear</button>
              <button type="button" class="guide-pill-btn gear-filter-btn" data-gear-filter="bags" onclick="document.querySelectorAll('.gear-checklist-item').forEach(el => el.style.display= el.getAttribute('data-gear-cat')==='bags' ? 'flex':'none'); document.querySelectorAll('.gear-filter-btn').forEach(b => b.classList.remove('active')); this.classList.add('active');" style="padding: 6px 14px; border-radius: 20px; border: 1px solid #cbd5e1; background: #ffffff; font-weight: 600; font-size: 0.85rem; cursor: pointer;">Bags & Sleeping</button>
              <button type="button" class="guide-pill-btn gear-filter-btn" data-gear-filter="medical" onclick="document.querySelectorAll('.gear-checklist-item').forEach(el => el.style.display= el.getAttribute('data-gear-cat')==='medical' ? 'flex':'none'); document.querySelectorAll('.gear-filter-btn').forEach(b => b.classList.remove('active')); this.classList.add('active');" style="padding: 6px 14px; border-radius: 20px; border: 1px solid #cbd5e1; background: #ffffff; font-weight: 600; font-size: 0.85rem; cursor: pointer;">Medical & Hydration</button>
            </div>

            <!-- Interactive Checklist Grid -->
            <div id="gear-checklist-container">
${checklistRows}
            </div>
          </section>`;
}

// 11. Section 6: Read Before You Book / Guides
function renderSectionDetails() {
  const guideCards = data.guides.map(g => `
              <div class="detail-accordion-card" data-detail-id="${g.id}" data-guide-category="${g.category}">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                      </svg>
                      <div class="detail-check-bubble">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <h4 class="detail-accordion-title">${g.title}</h4>
                  </div>
                  <div class="detail-accordion-chevron">
                    ${svgs.chevronDown}
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-body" style="font-size: 1rem; color: var(--color-neutral-700); line-height: 1.7; padding: 20px 24px;">
                    ${g.content}
                  </div>
                </div>
              </div>`).join('\n');

  return `
          <!-- Section 6: Read Before You Book (Guides) -->
          <section id="section-details" class="trek-detail-section">
            <div class="details-section-container">
              <!-- Heading -->
              <div class="details-title-wrapper" style="margin-bottom: 24px;">
                <h2 class="details-main-title">Read before you book, Manaslu Circuit Trek</h2>
                <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <!-- Subtitle Paragraphs -->
              <p class="details-subtitle-text">To ensure you are thoroughly prepared for the 14-day Manaslu Circuit, our mountain experts have compiled detailed operational guidance on route stages, altitude adaptation, pass day execution, government permits, and teahouse living.</p>
              <p class="details-subtitle-text" style="margin-bottom: 24px;">If you have any questions or wish to customize this route, feel free to email or <a href="https://wa.me/9779800000000" target="_blank" style="color: var(--color-copper-orange); font-weight: 600;">WhatsApp us</a>. Our team is available 24/7 to support your trip planning.</p>

              <!-- Interactive Progress Tracker Badge -->
              <div class="details-progress-wrapper" style="margin-bottom: 28px;">
                <div class="details-progress-badge" style="display: flex; align-items: center; gap: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px 20px;">
                  <div class="details-progress-ring-box" style="position: relative; width: 44px; height: 44px; flex-shrink: 0;">
                    <svg width="44" height="44" style="transform: rotate(-90deg);">
                      <circle class="details-progress-ring-bg" r="18" cx="22" cy="22" stroke="#e2e8f0" stroke-width="4" fill="none"></circle>
                      <circle class="details-progress-ring-bar" r="18" cx="22" cy="22" stroke="#10B981" stroke-width="4" fill="none" stroke-dasharray="113.09" stroke-dashoffset="113.09" style="transition: stroke-dashoffset 0.4s ease;"></circle>
                    </svg>
                  </div>
                  <div class="details-progress-info">
                    <div class="details-progress-count" style="font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">0/12 read</div>
                    <div class="details-progress-status" style="font-size: 0.85rem; color: var(--color-neutral-500);">Nice start — keep going</div>
                  </div>
                </div>
              </div>

              <!-- Category Filter Pills & Search Bar -->
              <div class="guides-controls-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 14px;">
                <div class="guides-pills-row" style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <button type="button" class="guide-pill-btn active" data-filter="all">All Guides</button>
                  <button type="button" class="guide-pill-btn" data-filter="route">Route & Trail</button>
                  <button type="button" class="guide-pill-btn" data-filter="safety">Safety & Pass</button>
                  <button type="button" class="guide-pill-btn" data-filter="weather">Weather & Seasons</button>
                  <button type="button" class="guide-pill-btn" data-filter="permits">Permits & Cost</button>
                  <button type="button" class="guide-pill-btn" data-filter="lodging">Lodging & Food</button>
                </div>
                
                <div class="guides-search-row" style="display: flex; gap: 12px; align-items: center; justify-content: space-between; flex-wrap: wrap;">
                  <div style="position: relative; flex-grow: 1; max-width: 450px;">
                    <input type="text" id="guideSearchInput" placeholder="Search guides (e.g. Larkya La, permits, food)..." style="width: 100%; padding: 10px 16px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.95rem; outline: none;">
                    <button type="button" id="guideSearchClearBtn" style="display: none; position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; font-size: 1rem; color: #94a3b8; cursor: pointer;">✕</button>
                  </div>
                  <button type="button" id="guidesToggleAllBtn" style="background: #ffffff; border: 1px solid #cbd5e1; padding: 10px 18px; border-radius: 8px; font-weight: 600; font-size: 0.85rem; color: var(--color-primary-navy); cursor: pointer;">
                    <span>Expand All</span>
                  </button>
                </div>
              </div>

              <!-- Accordion Cards List -->
              <div id="detailsAccordionWrapper" class="details-accordion-wrapper">
${guideCards}
              </div>
            </div>
          </section>`;
}

// 12. Section 7: Altitude Profile
function renderSectionAltitude() {
  const milestoneRows = data.altitudeMilestones.map(m => `
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 14px; font-weight: 600; color: var(--color-primary-navy);">${m.location}</td>
                  <td style="padding: 10px 14px; color: var(--color-neutral-700);" data-altitude-m="${m.elevationM}">${m.elevationM} m (${m.elevationFt} ft)</td>
                  <td style="padding: 10px 14px; color: var(--color-neutral-600);">${m.role}</td>
                </tr>`).join('\n');

  return `
          <!-- Section 7: Altitude Profile -->
          <section id="section-altitude-profile" class="trek-detail-section">
            <div class="details-title-wrapper" style="margin-bottom: 24px;">
              <h2 class="details-main-title">Altitude Profile of Manaslu Circuit Trek</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
            </div>
            
            <div style="background: white; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--color-neutral-100); box-shadow: var(--shadow-sm); margin-bottom: 30px;">
              <p style="font-size: 0.95rem; color: var(--color-neutral-600); margin-bottom: 20px; line-height: 1.6;">
                Interactive elevation chart illustrating the progressive daily gain from Machha Khola (900 m) to the summit of Larkya La Pass (5,106 m) and the subsequent descent to Dharapani.
              </p>
              <div id="altitude-chart-wrapper" data-trek-key="manaslu"></div>
            </div>

            <!-- Altitude Milestones Table -->
            <div style="background: white; border-radius: var(--radius-md); border: 1px solid var(--color-neutral-100); box-shadow: var(--shadow-sm); overflow: hidden; margin-bottom: 30px;">
              <div style="background: #f8fafc; padding: 14px 20px; border-bottom: 1px solid #e2e8f0;">
                <h3 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700;">Key Elevation Milestones on the Circuit</h3>
              </div>
              <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
                <thead>
                  <tr style="background: #f1f5f9; text-align: left; font-size: 0.85rem; color: var(--color-neutral-600); text-transform: uppercase;">
                    <th style="padding: 10px 14px;">Location</th>
                    <th style="padding: 10px 14px;">Elevation</th>
                    <th style="padding: 10px 14px;">Role in Itinerary</th>
                  </tr>
                </thead>
                <tbody>
${milestoneRows}
                </tbody>
              </table>
            </div>

            <!-- Acclimatization Best Practices -->
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 20px 24px;">
              <h4 style="margin: 0 0 10px 0; color: #166534; font-size: 1.1rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                ${svgs.check}
                Himalayan High-Altitude Safety Guidelines
              </h4>
              <p style="margin: 0 0 10px 0; font-size: 0.95rem; color: #15803d; line-height: 1.6;">
                1. <strong>Climb High, Sleep Low:</strong> Participate in active afternoon hikes during your rest days in Samagaon (3,530 m) and Samdo (3,860 m).<br>
                2. <strong>Hydration Target:</strong> Consume a minimum of 3.5 to 4 liters of purified water daily to facilitate oxygen delivery to your tissues.<br>
                3. <strong>Pacing & Rest:</strong> Walk at a rhythm where you can comfortably maintain a conversation without gasping for breath.<br>
                4. <strong>Never Conceal Symptoms:</strong> Report any headache, nausea, or dizziness to your guide immediately.
              </p>
            </div>
          </section>`;
}

// 13. Section 8: Weather
function renderSectionWeather() {
  return `
          <!-- Section 8: Weather & Seasons -->
          <section id="section-weather" class="trek-detail-section">
            <div class="details-title-wrapper" style="margin-bottom: 24px;">
              <h2 class="details-main-title">Weather & Best Seasons on Manaslu Circuit</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
            </div>
            <p style="font-size: 0.95rem; color: var(--color-neutral-700); line-height: 1.6; margin-bottom: 24px;">
              Because the circuit crosses five climatic zones—from subtropical river gorges at 900 m to arctic conditions at 5,106 m—temperatures and trail conditions vary drastically. Explore seasonal climate patterns below.
            </p>

            <div style="background: white; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--color-neutral-100); box-shadow: var(--shadow-sm); margin-bottom: 30px;">
              <div id="weather-chart-wrapper" data-trek-key="manaslu"></div>
            </div>

            <!-- 4 Season Cards Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
              <!-- Autumn -->
              <div style="background: #ffffff; border: 1.5px solid #10b981; border-radius: 14px; padding: 20px; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.08);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                  <h4 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700;">Autumn (Sep – Nov)</h4>
                  <span style="background: #e6f7f0; color: #008060; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 100px;">PEAK SEASON</span>
                </div>
                <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 12px;">
                  Optimal post-monsoon visibility, crisp blue skies, and dry, stable trails. October delivers the clearest Himalayan panoramas.
                </p>
                <div style="font-size: 0.85rem; color: var(--color-neutral-700); line-height: 1.5;">
                  <strong>Day Temp:</strong> 10°C to 18°C (Valleys)<br>
                  <strong>Night Temp:</strong> -4°C to -10°C (High Camp)<br>
                  <strong>Rainfall:</strong> Very Low
                </div>
              </div>

              <!-- Spring -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                  <h4 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700;">Spring (Mar – May)</h4>
                  <span style="background: #fef3c7; color: #b45309; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 100px;">FLOWER BLOOM</span>
                </div>
                <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 12px;">
                  Vibrant red and pink rhododendrons line the middle forests. Days become progressively warmer with longer daylight hours.
                </p>
                <div style="font-size: 0.85rem; color: var(--color-neutral-700); line-height: 1.5;">
                  <strong>Day Temp:</strong> 12°C to 20°C (Valleys)<br>
                  <strong>Night Temp:</strong> -6°C to -12°C (High Camp)<br>
                  <strong>Rainfall:</strong> Low to Moderate
                </div>
              </div>

              <!-- Monsoon -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                  <h4 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700;">Summer / Monsoon (Jun – Aug)</h4>
                  <span style="background: #f1f5f9; color: #64748B; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 100px;">WET / QUIET</span>
                </div>
                <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 12px;">
                  Heavy rains in lower river gorges, high risk of landslides, muddy paths, and leeches. Mountain summits frequently obscured by clouds.
                </p>
                <div style="font-size: 0.85rem; color: var(--color-neutral-700); line-height: 1.5;">
                  <strong>Day Temp:</strong> 18°C to 24°C (Valleys)<br>
                  <strong>Night Temp:</strong> 2°C to 8°C (High Camp)<br>
                  <strong>Rainfall:</strong> High
                </div>
              </div>

              <!-- Winter -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                  <h4 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700;">Winter (Dec – Feb)</h4>
                  <span style="background: #f1f5f9; color: #64748B; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 100px;">SUB-ZERO COLD</span>
                </div>
                <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 12px;">
                  Deep snow blankets Larkya La Pass, which can become impassable. Teahouses in Samdo and Dharamsala frequently shut for the season.
                </p>
                <div style="font-size: 0.85rem; color: var(--color-neutral-700); line-height: 1.5;">
                  <strong>Day Temp:</strong> 4°C to 12°C (Valleys)<br>
                  <strong>Night Temp:</strong> -15°C to -22°C (High Camp)<br>
                  <strong>Rainfall:</strong> Low (Frequent Snow)
                </div>
              </div>
            </div>
          </section>`;
}

// 14. Section 9: Route Map
function renderSectionMap() {
  return `
          <!-- Section 9: Map -->
          <section id="section-map" class="trek-detail-section">
            <div class="details-title-wrapper" style="margin-bottom: 24px;">
              <h2 class="details-main-title">Manaslu Circuit Trek Map & Route Profile</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
            </div>
            <div style="position: relative; background: white; border-radius: var(--radius-md); border: 1px solid var(--color-neutral-100); box-shadow: var(--shadow-sm); overflow: hidden; margin-bottom: 35px;">
              <img src="../../images/treks/manaslu-circuit/manaslu-circuit-suspension-bridge-mountain-view-03.jpg" alt="Manaslu Circuit Trek Topographical Route Map" style="width: 100%; height: auto; max-height: 480px; object-fit: cover; display: block;">
              <div style="padding: 20px 24px; background: #ffffff; border-top: 1px solid #e2e8f0;">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
                  <div>
                    <h4 style="margin: 0 0 4px 0; color: var(--color-primary-navy); font-size: 1.1rem; font-weight: 700;">Complete 177 km Circumnavigation Corridor</h4>
                    <p style="margin: 0; font-size: 0.9rem; color: var(--color-neutral-600);">Budhi Gandaki River Valley → Larkya La Pass (5,106 m) → Marsyangdi River Valley</p>
                  </div>
                  <a href="../../contact.html" class="btn btn-outline" style="padding: 8px 18px; font-size: 0.85rem; font-weight: 600;">Download High-Res Map (PDF)</a>
                </div>
              </div>
            </div>
          </section>`;
}

// 15. Section 10: Booking Form
function renderSectionBooking() {
  return `
          <!-- Section 10: Booking Form -->
          <section id="section-booking" class="trek-detail-section">
            <h2 class="trek-section-title">Book Your Manaslu Circuit Trek</h2>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 24px;">
              We offer guaranteed fixed group departures throughout spring and autumn, as well as customized private itineraries. Submit your details below and our mountain travel specialists will prepare your itemized quotation and permit schedule within 24 hours.
            </p>

            <div style="background: white; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 30px; box-shadow: var(--shadow-sm);">
              <form id="inline-booking-form" class="inquiry-form-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
                <div style="grid-column: span 2;">
                  <label style="display: block; font-size: 0.85rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px;">Selected Expedition</label>
                  <input type="text" value="Manaslu Circuit Trek (14 Days)" readonly style="width: 100%; padding: 12px 16px; border: 1px solid #cbd5e1; border-radius: 8px; background: #f8fafc; font-weight: 600; color: var(--color-primary-navy);">
                </div>

                <div>
                  <label for="book-name" style="display: block; font-size: 0.85rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px;">Full Name *</label>
                  <input type="text" id="book-name" required placeholder="John Doe" style="width: 100%; padding: 12px 16px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.95rem;">
                </div>

                <div>
                  <label for="book-email" style="display: block; font-size: 0.85rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px;">Email Address *</label>
                  <input type="email" id="book-email" required placeholder="john@example.com" style="width: 100%; padding: 12px 16px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.95rem;">
                </div>

                <div>
                  <label for="book-phone" style="display: block; font-size: 0.85rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px;">Phone / WhatsApp *</label>
                  <input type="tel" id="book-phone" required placeholder="+1 234 567 8900" style="width: 100%; padding: 12px 16px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.95rem;">
                </div>

                <div>
                  <label for="book-pax" style="display: block; font-size: 0.85rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px;">Group Size</label>
                  <select id="book-pax" style="width: 100%; padding: 12px 16px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.95rem; background: #ffffff;">
                    <option value="1">1 Person (Solo)</option>
                    <option value="2" selected>2 Persons</option>
                    <option value="3-5">3 - 5 Persons</option>
                    <option value="6-10">6 - 10 Persons</option>
                    <option value="10+">10+ Persons (Large Group)</option>
                  </select>
                </div>

                <div style="grid-column: span 2;">
                  <label for="book-date" style="display: block; font-size: 0.85rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px;">Preferred Start Date</label>
                  <input type="date" id="book-date" style="width: 100%; padding: 12px 16px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.95rem;">
                </div>

                <div style="grid-column: span 2;">
                  <label for="book-message" style="display: block; font-size: 0.85rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px;">Special Requirements or Questions</label>
                  <textarea id="book-message" rows="4" placeholder="Tell us about your previous trekking experience, custom dates, or if you wish to add Tsum Valley..." style="width: 100%; padding: 12px 16px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.95rem;"></textarea>
                </div>

                <div style="grid-column: span 2;">
                  <button type="submit" class="btn btn-primary" style="width: 100%; padding: 14px; font-size: 1.05rem; font-weight: 700; border-radius: 8px;">
                    Send Reservation Inquiry →
                  </button>
                </div>
              </form>
            </div>
          </section>`;
}

// 16. Section 11: Reviews
function renderSectionReviews() {
  return getReviewsHtml();
}

// 17. Section 12: FAQs
function renderSectionFaqs() {
  const categories = [
    { key: "general", label: "General Information", icon: `<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>` },
    { key: "route", label: "Route & Logistics", icon: `<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>` },
    { key: "lodging", label: "Lodging & Food", icon: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>` },
    { key: "safety", label: "Safety & Altitude", icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>` },
    { key: "permits", label: "Permits & Costs", icon: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline>` }
  ];

  const catBtns = categories.map((c, i) => `
                  <button type="button" class="faq-category-btn ${i === 0 ? 'active' : ''}" data-category="${c.key}">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        ${c.icon}
                      </svg>
                    </span>
                    ${c.label}
                  </button>`).join('\n');

  const faqPanels = categories.map((c, i) => {
    const questions = data.faqs.filter(f => f.category === c.key);
    const itemsHtml = questions.map(q => `
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>${q.question}</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      ${q.answer}
                    </div>
                  </div>`).join('\n');

    return `
                <!-- Category Panel: ${c.label} -->
                <div class="faq-panel ${i === 0 ? 'active' : ''}" data-category="${c.key}" ${i === 0 ? '' : 'style="display: none;"'}>
${itemsHtml}
                </div>`;
  }).join('\n');

  return `
          <!-- Section 12: FAQs -->
          <section id="section-faqs" class="trek-detail-section">
            <h2 class="faq-section-accent-title">
              <span class="faq-accent-bar"></span>
              Frequently Asked Questions for Manaslu Circuit Trek
            </h2>

            <div class="faq-layout-container">
              <!-- Left Sidebar Category Navigation -->
              <div class="faq-sidebar-card">
                <div class="faq-category-nav">
${catBtns}
                </div>
              </div>

              <!-- Right FAQ Content Accordions -->
              <div class="faq-content-card">
${faqPanels}
              </div>
            </div>
          </section>`;
}

// 18. Sidebar Booking Card
function renderSidebar() {
  return `
        <!-- Sticky Sidebar Column -->
        <div class="trek-sidebar-col" style="min-width: 0;">
          <div class="trek-sidebar-sticky" style="position: sticky; top: 120px;">
            <div class="sidebar-booking-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); position: relative;">
              
              <!-- Top Right Best Seller Ribbon Badge -->
              <div style="position: absolute; top: 18px; right: 0; background: #F59E0B; color: #FFFFFF; font-size: 0.72rem; font-weight: 800; padding: 5px 14px; border-radius: 4px 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 2px 6px rgba(245, 158, 11, 0.3);">
                BEST SELLER
              </div>

              <!-- Pricing Header -->
              <span style="font-size: 0.75rem; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">FROM</span>
              <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 16px; flex-wrap: wrap;">
                <span style="font-size: 2.5rem; font-weight: 800; color: #0F172A; line-height: 1;">$1,299</span>
                <span style="font-size: 0.92rem; color: #64748B; font-weight: 500;">/ person</span>
                <a href="#section-itinerary" style="font-size: 0.92rem; color: #475569; font-weight: 600; text-decoration: underline; margin-left: 4px;">14 days trip</a>
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
                  <strong style="color: #0F172A;">$1,234 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">5 - 8 Persons</span>
                  <strong style="color: #0F172A;">$1,169 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0;">
                  <span style="color: #64748B;">9+ Persons</span>
                  <strong style="color: #047857;">$1,104 / person (Best Deal)</strong>
                </div>
              </div>

              <!-- Action Buttons -->
              <button class="btn open-inquiry-btn" data-trek-title="Manaslu Circuit Trek (14 Days Booking)" style="width: 100%; padding: 14px; background: #008060; color: #FFFFFF; border: none; border-radius: 50px; font-size: 1.05rem; font-weight: 800; cursor: pointer; margin-bottom: 12px; box-shadow: 0 4px 14px rgba(0, 128, 96, 0.25); transition: background 0.2s;">
                Book Now
              </button>
              <button class="btn open-inquiry-btn" data-trek-title="Manaslu Circuit Trek (General Inquiry)" style="width: 100%; padding: 12px; background: #FFFFFF; color: #0F172A; border: 1px solid #CBD5E1; border-radius: 50px; font-size: 0.98rem; font-weight: 700; cursor: pointer; margin-bottom: 22px;">
                Make an Enquiry
              </button>

              <!-- 5 Bullet Features with Emerald Sparkles -->
              <ul style="list-style: none; padding: 0; margin: 0 0 20px 0; display: flex; flex-direction: column; gap: 11px;">
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Government Licensed Himalayan Guide</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>All Restricted & Conservation Permits</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Two Scheduled Acclimatization Stays</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>100% Guaranteed Departures</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Overland 4WD Mountain Transport</span>
                </li>
              </ul>

              <!-- Assistance Box -->
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 16px; font-size: 0.88rem; color: #334155;">
                <span style="font-weight: 700; color: var(--color-primary-navy); display: block; margin-bottom: 4px;">Need customized dates or assistance?</span>
                <span style="display: block; font-size: 0.82rem; color: #64748B; margin-bottom: 8px;">Our trekking specialists are available 24/7 on WhatsApp.</span>
                <a href="https://wa.me/9779800000000" target="_blank" style="color: #008060; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
                  Chat with an Expert ↗
                </a>
              </div>
            </div>
          </div>
        </div>`;
}

// 19. Related Treks
function renderRelatedTreks() {
  return `
    <!-- Related Treks (You Might Also Like) -->
    <section class="section-padding" style="background: var(--color-neutral-50); border-top: 1px solid var(--color-neutral-100); padding: 60px 0;">
      <div class="container">
        <h2 class="trek-section-title" style="margin-bottom: 8px;">You Might Also Like</h2>
        <p style="color: var(--color-neutral-600); font-size: 1.05rem; margin-bottom: 35px;">Explore other classic Himalayan circuits and remote wilderness journeys in Nepal.</p>
        
        <div class="yml-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">
          <!-- Card 1: Tsum Valley Trek -->
          <a href="../manaslu-circuit-trek/" class="yml-card" style="text-decoration: none; color: inherit; background: white; border-radius: 14px; overflow: hidden; border: 1px solid #e2e8f0; display: block;">
            <div class="yml-card-img" style="position: relative; height: 180px;">
              <img src="../../images/treks/manaslu-circuit/manaslu-circuit-village-prayer-flags-13.jpg" alt="Tsum Valley Sacred Valley of Non-Violence" style="width: 100%; height: 100%; object-fit: cover;">
              <span class="yml-badge" style="position: absolute; top: 12px; left: 12px; background: rgba(12, 43, 78, 0.85); color: white; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">Tsum Valley Extension</span>
            </div>
            <div style="padding: 18px;">
              <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--color-primary-navy); margin: 0 0 6px 0;">Manaslu & Tsum Valley Trek</h3>
              <p style="font-size: 0.85rem; color: #64748B; margin: 0 0 12px 0;">19 Days • Sacred Buddhist valley of non-violence and ancient nunneries.</p>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; padding-top: 10px;">
                <span style="font-weight: 800; color: #008060; font-size: 1rem;">From $1,590</span>
                <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary-navy);">View Trip →</span>
              </div>
            </div>
          </a>

          <!-- Card 2: Annapurna Circuit Trek -->
          <a href="../annapurna-circuit-trek/" class="yml-card" style="text-decoration: none; color: inherit; background: white; border-radius: 14px; overflow: hidden; border: 1px solid #e2e8f0; display: block;">
            <div class="yml-card-img" style="position: relative; height: 180px;">
              <img src="../../images/treks/annapurna-circuit/annapurna-circuit-mountain-panaroma-03.jpg" alt="Thorong La Pass on the Annapurna Circuit Trek" style="width: 100%; height: 100%; object-fit: cover;">
              <span class="yml-badge" style="position: absolute; top: 12px; left: 12px; background: rgba(12, 43, 78, 0.85); color: white; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">Classic Circuit</span>
            </div>
            <div style="padding: 18px;">
              <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--color-primary-navy); margin: 0 0 6px 0;">Annapurna Circuit Trek</h3>
              <p style="font-size: 0.85rem; color: #64748B; margin: 0 0 12px 0;">14 Days • Cross the famed Thorong La Pass (5,416 m) into Mustang.</p>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; padding-top: 10px;">
                <span style="font-weight: 800; color: #008060; font-size: 1rem;">From $1,099</span>
                <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary-navy);">View Trip →</span>
              </div>
            </div>
          </a>

          <!-- Card 3: Mardi Himal Trek -->
          <a href="../mardi-himal-trek/" class="yml-card" style="text-decoration: none; color: inherit; background: white; border-radius: 14px; overflow: hidden; border: 1px solid #e2e8f0; display: block;">
            <div class="yml-card-img" style="position: relative; height: 180px;">
              <img src="../../images/treks/mardi-himal/mardi-himal-machhapuchhre-snowy-panorama-15.jpg" alt="Fishtail Ridge on Mardi Himal Trek" style="width: 100%; height: 100%; object-fit: cover;">
              <span class="yml-badge" style="position: absolute; top: 12px; left: 12px; background: rgba(12, 43, 78, 0.85); color: white; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">Ridge Trek</span>
            </div>
            <div style="padding: 18px;">
              <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--color-primary-navy); margin: 0 0 6px 0;">Mardi Himal Trek</h3>
              <p style="font-size: 0.85rem; color: #64748B; margin: 0 0 12px 0;">8 Days • Intimate alpine ridge walk facing sacred Mount Machhapuchhre.</p>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; padding-top: 10px;">
                <span style="font-weight: 800; color: #008060; font-size: 1rem;">From $650</span>
                <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary-navy);">View Trip →</span>
              </div>
            </div>
          </a>

          <!-- Card 4: Langtang Valley Trek -->
          <a href="../langtang-valley-trek/" class="yml-card" style="text-decoration: none; color: inherit; background: white; border-radius: 14px; overflow: hidden; border: 1px solid #e2e8f0; display: block;">
            <div class="yml-card-img" style="position: relative; height: 180px;">
              <img src="../../images/treks/manaslu-circuit/manaslu-circuit-yak-pasture-mountain-07.jpg" alt="Kyanjin Gompa Valley Langtang Trek" style="width: 100%; height: 100%; object-fit: cover;">
              <span class="yml-badge" style="position: absolute; top: 12px; left: 12px; background: rgba(12, 43, 78, 0.85); color: white; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">Cultural Valley</span>
            </div>
            <div style="padding: 18px;">
              <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--color-primary-navy); margin: 0 0 6px 0;">Langtang Valley Trek</h3>
              <p style="font-size: 0.85rem; color: #64748B; margin: 0 0 12px 0;">8 Days • The valley of glaciers, Tibetan Tamang culture, and Kyanjin Gompa.</p>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; padding-top: 10px;">
                <span style="font-weight: 800; color: #008060; font-size: 1rem;">From $690</span>
                <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary-navy);">View Trip →</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>`;
}

// Assemble Main Content Layout
const mainContentHtml = `
    <!-- Main Content Layout with Sticky Booking Sidebar -->
    <section class="section-padding" style="padding-top: 10px;" data-trek-details-wrapper data-trek-key="manaslu-circuit">
      <div class="container" style="display: grid; grid-template-columns: 2.2fr 1fr; gap: 40px;">
        
        <!-- Main Details Column (Sequential Sections) -->
        <div style="min-width: 0;">
${renderSectionOverview()}
${renderSectionItinerary()}
${renderSectionIncludes()}
${renderSectionDates()}
${renderSectionPacking()}
${renderSectionDetails()}
${renderSectionAltitude()}
${renderSectionWeather()}
${renderSectionMap()}
${renderSectionBooking()}
${renderSectionReviews()}
${renderSectionFaqs()}
        </div>

${renderSidebar()}
      </div>
    </section>

${renderRelatedTreks()}
    </article>
  </main>`;

// Full Page Assembly
const finalHtml = `${headHtml}
</head>
<body class="trek-template-page">
${headerHtml}
${renderHero()}
${renderSubNav()}
${mainContentHtml}
${footerHtml}
`;

fs.writeFileSync('trek/manaslu-circuit-trek/index.html', finalHtml, 'utf8');
console.log('Successfully generated trek/manaslu-circuit-trek/index.html!');
console.log('Final file length:', finalHtml.length);
