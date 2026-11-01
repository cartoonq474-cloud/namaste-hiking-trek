// scratch/mardi_sections.js
// Micro-level authentic section renderer matching EBC flagship template & index.css

const data = require('./mardi_data');
const guides = require('./mardi_guides');

function renderHeroHeader() {
  return `
    <!-- Hero / Header Section -->
    <section class="trek-hero-header" style="padding-top: 24px; padding-bottom: 20px;">
      <div class="container">
        
        <!-- Breadcrumb -->
        <nav class="breadcrumb-nav" style="margin-bottom: 12px; font-size: 0.85rem; color: var(--color-neutral-500); display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
          <a href="../../index.html" style="color: var(--color-neutral-600); text-decoration: none;">Home</a>
          <span style="color: var(--color-neutral-400);">/</span>
          <a href="../../nepal-trekking-packages/" style="color: var(--color-neutral-600); text-decoration: none;">Trekking Packages</a>
          <span style="color: var(--color-neutral-400);">/</span>
          <a href="../../trekking-regions-nepal/" style="color: var(--color-neutral-600); text-decoration: none;">Annapurna Region</a>
          <span style="color: var(--color-neutral-400);">/</span>
          <span style="color: var(--color-primary-navy); font-weight: 600;">Mardi Himal Trek</span>
        </nav>

        <!-- Badges & Ratings Row -->
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 8px;">
          <span style="background: #e6f7f0; color: #008060; padding: 4px 12px; border-radius: 100px; font-size: 0.85rem; font-weight: 700;">Annapurna Region • Sacred Fishtail &amp; High Alpine Ridge</span>
          
          <!-- TripAdvisor Badge -->
          <div style="display: inline-flex; align-items: center; gap: 8px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 100px; padding: 4px 12px; font-size: 0.85rem; color: #475569; box-shadow: 0 1px 2px rgba(0,0,0,0.05); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: #00af87; border-radius: 50%;">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
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
            <span style="display: inline-flex; gap: 2px;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </span>
            <span><strong style="font-weight: 600; color: #0f172a;">169</strong> reviews on Google</span>
          </div>
        </div>

        <h1 style="font-size: 2.8rem; margin-top: 6px; margin-bottom: 8px; color: var(--color-primary-navy); font-weight: 800; line-height: 1.15;">Mardi Himal Trek</h1>
        
        <p style="font-size: 1.12rem; color: var(--color-neutral-600); line-height: 1.7; margin-top: 10px; margin-bottom: 0;">
          The Mardi Himal Trek is an 8-day Himalayan journey in Nepal's Annapurna Conservation Area, beginning with travel from Kathmandu to Pokhara and continuing into the tranquil foothills and high ridges beneath Mardi Himal. The route combines terraced hillsides, traditional mountain settlements, dense rhododendron and oak forests, open ridgelines, and dramatic close-up views of Mardi Himal, Machhapuchhre (Fishtail), Annapurna South, and Hiunchuli.
          <span id="mardi-more-text" style="display: none;">
            The 8-day format provides ample time to experience the complete progression from lower foothills around Pokhara to Kande, Australian Camp, Forest Camp, Low Camp, and Badal Danda toward High Camp (3,580 m). From High Camp, an early morning excursion reaches the Upper Viewpoint (4,200 m) and conditional Base Camp area (4,500 m) before descending through pristine forest via Siding and Lumre back to Pokhara and Kathmandu with full safety, certified mountain guides, and comprehensive acclimatization.
          </span>
          <button id="mardi-toggle-btn" style="background: none; border: none; color: #10B981; font-weight: 700; font-size: 1.05rem; cursor: pointer; padding: 0; margin-left: 6px; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; vertical-align: middle; transition: opacity 0.2s ease;">
            Learn more <span style="font-size: 1.1rem; margin-left: 2px;">&rarr;</span>
          </button>
        </p>

        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const toggleBtn = document.getElementById('mardi-toggle-btn');
            const moreText = document.getElementById('mardi-more-text');
            
            if (toggleBtn && moreText) {
              toggleBtn.addEventListener('click', () => {
                const isHidden = moreText.style.display === 'none';
                moreText.style.display = isHidden ? 'inline' : 'none';
                toggleBtn.innerHTML = isHidden 
                  ? 'Learn less <span style="font-size: 1.1rem; margin-left: 2px;">&uarr;</span>' 
                  : 'Learn more <span style="font-size: 1.1rem; margin-left: 2px;">&rarr;</span>';
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
          <img src="../../images/treks/mardi-himal/mardi-himal-machhapuchhre-snowy-panorama-15.jpg" alt="Machhapuchhre Fishtail and Annapurna Range from Mardi Himal High Camp">
          <!-- TripAdvisor Travelers' Choice Badge -->
          <div class="trek-gallery-badge">
            <div class="trek-gallery-badge-icon" style="background: #00af87; display: flex; align-items: center; justify-content: center;">
              <svg class="icon-svg icon-sm icon-svg-fill" style="stroke: none; fill: white;" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </div>
            <div class="trek-gallery-badge-text">
              <span>Travelers' Choice</span>
              <span>Best of the Best 2026</span>
            </div>
          </div>
        </div>
        
        <!-- Grid Items (Right 2x2 Columns) -->
        <div class="trek-gallery-sub">
          <img src="../../images/treks/mardi-himal/mardi-himal-high-camp-sunrise-06.jpg" alt="Golden Himalayan Sunrise from Mardi Himal High Camp">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-top-right">
          <img src="../../images/treks/mardi-himal/mardi-himal-trekkers-machhapuchhre-sunrise-11.jpg" alt="Trekkers Watching Sunrise over Machhapuchhre Fishtail Peak">
          <button class="trek-gallery-see-all-btn">
            <span><svg class="icon-svg icon-xs icon-margin-right" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>See all photos</span>
          </button>
        </div>
        <div class="trek-gallery-sub">
          <img src="../../images/treks/mardi-himal/mardi-himal-trekking-group-snowfield-celebration-18.jpg" alt="Namaste Hiking Trek Team Celebration at Mardi Himal High Viewpoint">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-bottom-right">
          <img src="../../images/treks/mardi-himal/mardi-himal-annapurna-range-morning-light-24.jpg" alt="Annapurna Mountain Range in Morning Light">
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
          Key Trip Facts (8-Day Mardi Himal Trek)
        </h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px 24px;">
          
          <!-- Fact 1: Duration -->
          <div class="trip-fact-item">
            <div style="width: 44px; height: 44px; background: #e6f7f0; color: #008060; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Duration</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">8 Route Days (KTM to KTM)</span>
            </div>
          </div>

          <!-- Fact 2: Max Elevation -->
          <div class="trip-fact-item">
            <div style="width: 44px; height: 44px; background: #e6f7f0; color: #008060; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 22 22 22"/><polyline points="12 2 12 14"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Max Elevation</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">4,500 m / 14,763 ft</span>
            </div>
          </div>

          <!-- Fact 3: Viewpoint -->
          <div class="trip-fact-item">
            <div style="width: 44px; height: 44px; background: #e6f7f0; color: #008060; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Upper Viewpoint</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Approx. 4,200 m (Sunrise Point)</span>
            </div>
          </div>

          <!-- Fact 4: Highest Scheduled Overnight -->
          <div class="trip-fact-item">
            <div style="width: 44px; height: 44px; background: #e6f7f0; color: #008060; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Highest Overnight</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">High Camp (3,580 m, Days 4 &amp; 5)</span>
            </div>
          </div>

          <!-- Fact 5: Difficulty -->
          <div class="trip-fact-item">
            <div style="width: 44px; height: 44px; background: #e6f7f0; color: #008060; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek Grade</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Moderate to Challenging</span>
            </div>
          </div>

          <!-- Fact 6: Region -->
          <div class="trip-fact-item">
            <div style="width: 44px; height: 44px; background: #e6f7f0; color: #008060; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Region</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Annapurna Conservation Area</span>
            </div>
          </div>

          <!-- Fact 7: Best Seasons -->
          <div class="trip-fact-item">
            <div style="width: 44px; height: 44px; background: #e6f7f0; color: #008060; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Best Season</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Spring (Mar–May) &amp; Autumn (Sep–Nov)</span>
            </div>
          </div>

          <!-- Fact 8: Trailhead & Exit -->
          <div class="trip-fact-item">
            <div style="width: 44px; height: 44px; background: #e6f7f0; color: #008060; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Start &amp; Finish</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Kande (Start) &rarr; Siding/Lumre (Exit)</span>
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--color-primary-navy); line-height: 1.3;">Instant confirmation</span>
        </div>

      </div>
    </div>

    <!-- Sticky Scroll-Spy Sub-Navigation Bar -->
    <div class="trek-sub-nav">
      <div class="container">
        <div class="trek-sub-nav-list">
          <button class="trek-sub-nav-btn active" data-tab="overview">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>Overview
          </button>
          <button class="trek-sub-nav-btn" data-tab="itinerary">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Itinerary
          </button>
          <button class="trek-sub-nav-btn" data-tab="includes">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Includes &amp; Excludes
          </button>
          <button class="trek-sub-nav-btn" data-tab="dates">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>Dates &amp; Availability
          </button>
          <button class="trek-sub-nav-btn" data-tab="packing">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>Packing List
          </button>
          <button class="trek-sub-nav-btn" data-tab="details">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>Trip Details
          </button>
          <button class="trek-sub-nav-btn" data-tab="altitude-profile">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><polygon points="12 2 2 22 22 22"/></svg>Altitude
          </button>
          <button class="trek-sub-nav-btn" data-tab="weather">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/></svg>Weather
          </button>
          <button class="trek-sub-nav-btn" data-tab="map">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/></svg>Map
          </button>
          <button class="trek-sub-nav-btn" data-tab="reviews">
            <svg class="icon-svg icon-sm icon-margin-right icon-svg-fill" style="fill: currentColor; stroke: none;" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>Reviews
          </button>
          <button class="trek-sub-nav-btn" data-tab="faqs">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="12" r="10"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>FAQs
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderSectionOverview() {
  return `
          <!-- Section 1: Overview -->
          <section id="section-overview" class="trek-detail-section">
            <h2 class="trek-section-title">Trek Overview</h2>
            
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The <strong>Mardi Himal Trek</strong> is an 8-day Himalayan trekking journey in Nepal's Annapurna region, beginning with travel from Kathmandu to Pokhara and continuing into the foothills and high ridges beneath Mardi Himal. The route combines terraced hillsides, traditional mountain settlements, dense rhododendron and oak forests, open ridgelines, alpine landscapes, and close views of Mardi Himal, Machhapuchhre, Annapurna South, Hiunchuli, and surrounding Himalayan peaks. The trek reaches the high-altitude area above High Camp before descending through the forest and villages toward Siding and returning to Pokhara.
            </p>
            
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The 8-day format provides enough time to experience the complete trekking route without reducing the journey to a rapid ascent and descent. The itinerary allows the trek to develop gradually, from the lower hills around Pokhara to the forested sections above Kande, then through Low Camp and Badal Danda toward High Camp. The highest section is reached after an overnight stay at High Camp, when trekkers make an early morning excursion toward the Upper Viewpoint (approx. 4,200 m) and, depending on the itinerary, continue farther toward the Mardi Himal Base Camp area (approx. 4,500 m) before descending.
            </p>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
              Mardi Himal is located in the Annapurna region of north-central Nepal. The trekking route lies within the <strong>Annapurna Conservation Area</strong>, Nepal's largest protected area. The route's proximity to Pokhara makes it particularly practical for travelers who want a Himalayan trekking experience without committing to the longer duration required by routes such as the Annapurna Circuit or Everest Base Camp Trek.
            </p>

            <!-- 4 Geographical Zones Grid -->
            <div style="background: var(--color-neutral-50); border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; margin-bottom: 30px;">
              <h3 style="font-size: 1.2rem; color: var(--color-primary-navy); margin-bottom: 16px; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-navy"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
                The 4 Distinct Ecological &amp; Landscape Zones
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
                <div style="background: #ffffff; padding: 16px; border-radius: var(--radius-sm); border: 1px solid var(--color-neutral-100);">
                  <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px; font-size: 0.95rem;">1. Lower Foothill Zone</strong>
                  <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.5; margin: 0;">Pokhara (800m), Kande (1,770m), Australian Camp (2,060m), and Pothana. Cultivated agricultural terraces, Gurung settlements, and stone steps.</p>
                </div>
                <div style="background: #ffffff; padding: 16px; border-radius: var(--radius-sm); border: 1px solid var(--color-neutral-100);">
                  <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px; font-size: 0.95rem;">2. Cloud Forest Zone</strong>
                  <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.5; margin: 0;">Deurali to Forest Camp (2,550m) and Low Camp (3,000m). Dense moss-draped rhododendron, oak, and birch with refreshing shade.</p>
                </div>
                <div style="background: #ffffff; padding: 16px; border-radius: var(--radius-sm); border: 1px solid var(--color-neutral-100);">
                  <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px; font-size: 0.95rem;">3. Subalpine Ridge Zone</strong>
                  <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.5; margin: 0;">Low Camp to Badal Danda (3,200m) and High Camp (3,580m). Dramatic treeless ridgeline with Machhapuchhre rising directly ahead.</p>
                </div>
                <div style="background: #ffffff; padding: 16px; border-radius: var(--radius-sm); border: 1px solid var(--color-neutral-100);">
                  <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px; font-size: 0.95rem;">4. High Alpine Outing Zone</strong>
                  <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.5; margin: 0;">High Camp to Upper Viewpoint (4,200m) and Base Camp area (4,500m). Exposed rock, thin air, crisp freezing dawn, and 360-degree panoramas.</p>
                </div>
              </div>
            </div>

            <!-- Key Visual Highlights -->
            <h3 style="font-size: 1.35rem; color: var(--color-primary-navy); margin-bottom: 18px; font-weight: 700;">
              Mardi Himal Trek Highlights
            </h3>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 32px;">
              
              <!-- Highlight 1 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
                  <div style="width: 40px; height: 40px; background: #e6f7f0; color: #008060; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 22 22 22"/><polyline points="12 2 12 14"/></svg>
                  </div>
                  <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin: 0; font-weight: 700;">Machhapuchhre (Fishtail) Face-to-Face</h4>
                </div>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Machhapuchhre (6,993 m) is one of the most recognizable mountains in Nepal. Its sacred, unclimbed fluted pyramid dominates the skyline along the upper ridge from Badal Danda to High Camp.
                </p>
              </div>

              <!-- Highlight 2 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
                  <div style="width: 40px; height: 40px; background: #e6f7f0; color: #008060; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2 6.3-6.4 2 2-6.3z"/></svg>
                  </div>
                  <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin: 0; font-weight: 700;">Upper Viewpoint (4,200 m) &amp; Base Camp (4,500 m)</h4>
                </div>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Stand directly beneath the soaring south face of Mardi Himal. Day 5's sunrise climb offers a staggering 360-degree panorama of Annapurna South, Hiunchuli, Gangapurna, and Annapurna I.
                </p>
              </div>

              <!-- Highlight 3 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
                  <div style="width: 40px; height: 40px; background: #e6f7f0; color: #008060; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  </div>
                  <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin: 0; font-weight: 700;">Panoramic Alpine Ridge Walking</h4>
                </div>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Unlike valley treks that spend days looking up from below, Mardi Himal ascends onto a sharp alpine crest where you walk along the spine of the mountain with dramatic drop-offs on both flanks.
                </p>
              </div>

              <!-- Highlight 4 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
                  <div style="width: 40px; height: 40px; background: #e6f7f0; color: #008060; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
                  </div>
                  <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin: 0; font-weight: 700;">Blooming Rhododendron Forests</h4>
                </div>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  In spring, the temperate forests between Pothana, Deurali, Forest Camp, and Low Camp bloom in brilliant red, pink, and white rhododendrons, creating an unforgettable botanical corridor.
                </p>
              </div>

              <!-- Highlight 5 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
                  <div style="width: 40px; height: 40px; background: #e6f7f0; color: #008060; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </div>
                  <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin: 0; font-weight: 700;">Authentic Teahouse Atmosphere</h4>
                </div>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Enjoy cozy evenings in mountain lodges around crackling central stoves, refueling with freshly cooked traditional Dal Bhat and sharing stories with our local Sherpa and Gurung guides.
                </p>
              </div>

              <!-- Highlight 6 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
                  <div style="width: 40px; height: 40px; background: #e6f7f0; color: #008060; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin: 0; font-weight: 700;">Gentle Circular Descent via Siding</h4>
                </div>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Rather than backtracking along the ascent trail, our itinerary exits down through Siding village and Lumre, providing an authentic glimpse of peaceful rural hill life before returning to Pokhara.
                </p>
              </div>

            </div>

            <!-- Route Comparison Table -->
            <div style="margin-top: 30px; margin-bottom: 24px;">
              <h3 style="font-size: 1.25rem; color: var(--color-primary-navy); margin-bottom: 16px; font-weight: 700;">
                Route Comparison: 8-Day Complete Format vs. Rushed 5-Day Express Trek
              </h3>
              <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; text-align: left;">
                  <thead>
                    <tr style="background: var(--color-primary-navy); color: #ffffff;">
                      <th style="padding: 12px 16px; border: 1px solid #cbd5e1; font-weight: 700;">Trip Feature</th>
                      <th style="padding: 12px 16px; border: 1px solid #cbd5e1; font-weight: 700; background: #10B981;">Namaste 8-Day Flagship Package</th>
                      <th style="padding: 12px 16px; border: 1px solid #cbd5e1; font-weight: 700;">Standard Rushed 5-Day Express Trek</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="background: #ffffff;">
                      <td style="padding: 12px 16px; border: 1px solid #e2e8f0; font-weight: 600;">Kathmandu &amp; Pokhara Staging</td>
                      <td style="padding: 12px 16px; border: 1px solid #e2e8f0; color: #008060; font-weight: 700;">Included (Separate rest days before &amp; after trail)</td>
                      <td style="padding: 12px 16px; border: 1px solid #e2e8f0; color: #64748b;">Not included (Trekkers must rush from highway to trail)</td>
                    </tr>
                    <tr style="background: #f8fafc;">
                      <td style="padding: 12px 16px; border: 1px solid #e2e8f0; font-weight: 600;">Acclimatization Profile</td>
                      <td style="padding: 12px 16px; border: 1px solid #e2e8f0; color: #008060; font-weight: 700;">Gradual progression (Forest Camp &rarr; Low Camp &rarr; High Camp x2)</td>
                      <td style="padding: 12px 16px; border: 1px solid #e2e8f0; color: #dc2626;">Compressed ascent (High Camp reached too quickly)</td>
                    </tr>
                    <tr style="background: #ffffff;">
                      <td style="padding: 12px 16px; border: 1px solid #e2e8f0; font-weight: 600;">High Camp Overnights</td>
                      <td style="padding: 12px 16px; border: 1px solid #e2e8f0; color: #008060; font-weight: 700;">2 Nights (Safe turnaround and daytime rest at 3,580 m)</td>
                      <td style="padding: 12px 16px; border: 1px solid #e2e8f0; color: #64748b;">1 Night (Forced to summit &amp; descend 2,000m on same day)</td>
                    </tr>
                    <tr style="background: #f8fafc;">
                      <td style="padding: 12px 16px; border: 1px solid #e2e8f0; font-weight: 600;">Return Route Experience</td>
                      <td style="padding: 12px 16px; border: 1px solid #e2e8f0; color: #008060; font-weight: 700;">Scenic circular exit via Siding village &amp; Lumre</td>
                      <td style="padding: 12px 16px; border: 1px solid #e2e8f0; color: #64748b;">Rushed direct descent, often backtracking same trail</td>
                    </tr>
                    <tr style="background: #ffffff;">
                      <td style="padding: 12px 16px; border: 1px solid #e2e8f0; font-weight: 600;">Success Rate &amp; Safety</td>
                      <td style="padding: 12px 16px; border: 1px solid #e2e8f0; color: #16a34a; font-weight: 700;">99.2% Viewpoint reach rate with daily SpO2 checks</td>
                      <td style="padding: 12px 16px; border: 1px solid #e2e8f0; color: #dc2626;">Higher altitude fatigue and dropped summit attempts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </section>
  `;
}

function renderSectionItinerary() {
  const cardsHtml = data.itineraryDays.map((d, index) => {
    const isActive = index === 0;
    const photosHtml = d.photos.map(p => `
      <div class="itinerary-photo-wrapper">
        <img loading="lazy" src="../../images/treks/mardi-himal/${p.file}" alt="${p.alt}">
      </div>
    `).join('');

    return `
      <!-- Day ${d.day < 10 ? '0' + d.day : d.day} -->
      <div class="itinerary-card ${isActive ? 'active' : ''}">
        <div class="itinerary-header">
          <div class="itinerary-header-left">
            <h4 class="itinerary-day-title-new">
              <span class="day-label">Day ${d.day}:</span> ${d.title}
            </h4>
            <p class="itinerary-day-subtitle-new">
              ${d.subtitle}
            </p>
          </div>
          <div class="itinerary-header-right">
            <div class="itinerary-toggle-btn-new">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
        <div class="itinerary-content" ${isActive ? 'style="max-height: 2500px;"' : ''}>
          <div class="itinerary-content-inner">
            <div class="itinerary-metrics-list">
              <div class="itinerary-metric-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                </svg>
                <span>Route: ${d.route}</span>
              </div>
              <div class="itinerary-metric-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Trek: approximately ${d.time}</span>
              </div>
              <div class="itinerary-metric-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 11.5a6.5 6.5 0 0 1-13 0"></path>
                  <path d="M2 10h20"></path>
                </svg>
                <span>Trek Distance: approximately ${d.distance}</span>
              </div>
              <div class="itinerary-metric-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 2 22 22 22"></polygon>
                </svg>
                <span>Max Elevation: ${d.elevation}</span>
              </div>
              <div class="itinerary-metric-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>Accommodation: ${d.accommodation}</span>
              </div>
            </div>

            <div class="itinerary-meta-box">
              <div class="itinerary-meta-box-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                </svg>
                <span>Meals: ${d.meals}</span>
              </div>
              <div class="itinerary-meta-box-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                  <circle cx="12" cy="9" r="2.5"></circle>
                </svg>
                <span>Overnight: ${d.overnight}</span>
              </div>
            </div>

            <div class="itinerary-description">
              ${d.description.map(p => `<p>${p}</p>`).join('')}
            </div>

            <div class="itinerary-photos-grid">
              ${photosHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
          <!-- Section 2: Itinerary -->
          <section id="section-itinerary" class="trek-detail-section">
            <h2 class="trek-section-title">Mardi Himal Trek Itinerary: Day by Day Details</h2>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-top: 16px; margin-bottom: 16px; line-height: 1.7;">
              Our 8-day Mardi Himal Trek itinerary is built around a progressive ascent into the Annapurna Conservation Area, starting from Kathmandu and Pokhara, walking through Kande, Australian Camp, Forest Camp, Low Camp, and Badal Danda before reaching High Camp at <span data-altitude-m="3580">3,580 m (11,745 ft)</span>. From High Camp, trekkers embark on an early morning excursion toward the Upper Viewpoint at <span data-altitude-m="4200">4,200 m (13,779 ft)</span> and the conditional Base Camp area at <span data-altitude-m="4500">4,500 m (14,763 ft)</span> before descending via Siding.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The itinerary includes five scheduled trekking days plus intercity travel between Kathmandu and Pokhara. Walking times each day are approximate and may vary depending on trail conditions, weather, group fitness, and altitude adaptation.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
              The circular descent via Siding provides an alternative exit corridor through pristine oak and bamboo woodlands, preventing the need to retrace steps along the Kande trail and ensuring a dynamic, varied mountain journey.
            </p>

            <h3 style="font-size: 1.35rem; color: var(--color-primary-navy); font-weight: 700; margin-top: 32px; margin-bottom: 14px; line-height: 1.35;">
              Before Your Mardi Himal Trek Starts
            </h3>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              Your scheduled start date is your departure date from Kathmandu to Pokhara. During your pre-trek briefing in Pokhara, your licensed guide will go through the route details, daypack packing, weather expectations, permit verifications, and high-altitude emergency procedures.
            </p>

            <!-- Itinerary Cards Timeline -->
            <div class="itinerary-timeline" style="margin-top: 24px;">
              ${cardsHtml}
            </div>
          </section>
  `;
}

function renderSectionIncludes() {
  const incCards = data.inclusions.map(i => `
    <div class="inc-exc-card">
      <div style="width: 38px; height: 38px; background: #e6f7f0; color: #008060; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div>
        <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 0 0 4px 0; font-weight: 700;">${i.title}</h4>
        <p style="font-size: 0.92rem; color: var(--color-neutral-600); margin: 0; line-height: 1.55;">${i.desc}</p>
      </div>
    </div>
  `).join('');

  const excCards = data.exclusions.map(e => `
    <div class="inc-exc-card exclude-card">
      <div style="width: 38px; height: 38px; background: #fee2e2; color: #dc2626; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
      <div>
        <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 0 0 4px 0; font-weight: 700;">${e.title}</h4>
        <p style="font-size: 0.92rem; color: var(--color-neutral-600); margin: 0; line-height: 1.55;">${e.desc}</p>
      </div>
    </div>
  `).join('');

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
              .inc-exc-card {
                background: var(--color-white);
                border: 1px solid #e2e8f0;
                border-radius: 16px;
                padding: 20px;
                display: flex;
                gap: 14px;
                transition: all var(--transition-fast);
              }
              .inc-exc-card:hover {
                border-color: var(--color-copper-orange);
                box-shadow: 0 8px 20px rgba(16, 185, 129, 0.08);
                transform: translateY(-1px);
              }
              .inc-exc-card.exclude-card:hover {
                border-color: #ef4444;
                box-shadow: 0 8px 20px rgba(239, 68, 68, 0.08);
              }
              @media (max-width: 768px) {
                .inc-exc-grid {
                  grid-template-columns: 1fr;
                }
              }
            </style>

            <div class="inc-exc-container">
              <!-- Includes Title -->
              <div class="inc-exc-section-title-wrapper">
                <h3 class="inc-exc-section-title">What's Included</h3>
              </div>

              <!-- Includes Grid -->
              <div class="inc-exc-grid">
                ${incCards}
              </div>

              <!-- Excludes Title -->
              <div class="inc-exc-section-title-wrapper">
                <h3 class="inc-exc-section-title">What's Excluded</h3>
              </div>

              <!-- Excludes Grid -->
              <div class="inc-exc-grid">
                ${excCards}
              </div>
            </div>
          </section>
  `;
}

function renderSectionDates() {
  const departures = [
    { start: "Mar 05, 2026", end: "Mar 12, 2026", season: "Spring 2026", status: "Guaranteed", price: "$749" },
    { start: "Mar 18, 2026", end: "Mar 25, 2026", season: "Spring 2026", status: "Filling Fast", price: "$749" },
    { start: "Apr 02, 2026", end: "Apr 09, 2026", season: "Spring Peak", status: "Guaranteed", price: "$749" },
    { start: "Apr 15, 2026", end: "Apr 22, 2026", season: "Spring Peak", status: "Available", price: "$749" },
    { start: "May 04, 2026", end: "May 11, 2026", season: "Late Spring", status: "Available", price: "$749" },
    { start: "Sep 15, 2026", end: "Sep 22, 2026", season: "Autumn 2026", status: "Guaranteed", price: "$749" },
    { start: "Oct 01, 2026", end: "Oct 08, 2026", season: "Autumn Peak", status: "Guaranteed", price: "$749" },
    { start: "Oct 16, 2026", end: "Oct 23, 2026", season: "Autumn Peak", status: "Filling Fast", price: "$749" },
    { start: "Nov 02, 2026", end: "Nov 09, 2026", season: "Late Autumn", status: "Guaranteed", price: "$749" },
    { start: "Nov 18, 2026", end: "Nov 25, 2026", season: "Late Autumn", status: "Available", price: "$749" },
    { start: "Dec 05, 2026", end: "Dec 12, 2026", season: "Winter Clear", status: "Available", price: "$749" },
    { start: "Mar 08, 2027", end: "Mar 15, 2027", season: "Spring 2027", status: "Early Bird", price: "$749" }
  ];

  const rows = departures.map(d => `
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 14px 16px; font-weight: 600; color: var(--color-primary-navy);">${d.start} &rarr; ${d.end}</td>
      <td style="padding: 14px 16px; color: var(--color-neutral-600);">${d.season}</td>
      <td style="padding: 14px 16px;">
        <span style="background: ${d.status === 'Guaranteed' ? '#e6f7f0' : d.status === 'Filling Fast' ? '#fef3c7' : '#f1f5f9'}; color: ${d.status === 'Guaranteed' ? '#008060' : d.status === 'Filling Fast' ? '#b45309' : '#334155'}; font-size: 0.78rem; font-weight: 700; padding: 4px 10px; border-radius: 100px; text-transform: uppercase; letter-spacing: 0.05em;">${d.status}</span>
      </td>
      <td style="padding: 14px 16px; font-weight: 800; color: #0f172a;">${d.price}</td>
      <td style="padding: 14px 16px; text-align: right;">
        <button class="open-inquiry-btn" data-date="${d.start}" style="background: var(--color-copper-orange); color: #ffffff; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 700; font-size: 0.85rem; cursor: pointer; transition: opacity 0.2s ease;">Book Now</button>
      </td>
    </tr>
  `).join('');

  return `
          <!-- Section 4: Dates & Availability -->
          <section id="section-dates" class="trek-detail-section">
            <div class="dates-section-header">
              <h2 class="trek-section-title" style="margin-bottom: 0;">Booking Dates &amp; Availability for Mardi Himal Trek</h2>
              <div class="dates-mode-toggle">
                <button type="button" class="dates-mode-btn active" data-mode="group">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  Group Joining ($749)
                </button>
                <button type="button" class="dates-mode-btn" data-mode="private">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Private Departure
                </button>
              </div>
            </div>

            <p style="font-size: 1.05rem; color: var(--color-neutral-600); line-height: 1.6; margin-top: 14px; margin-bottom: 24px;">
              Choose from our scheduled small group departures or request a tailor-made private departure on your preferred dates. All scheduled dates operate with a 100% guarantee once booked.
            </p>

            <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
              <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; text-align: left;">
                  <thead>
                    <tr style="background: #f8fafc; border-bottom: 2px solid #e2e8f0; color: var(--color-primary-navy);">
                      <th style="padding: 14px 16px; font-weight: 700;">Departure Dates</th>
                      <th style="padding: 14px 16px; font-weight: 700;">Season</th>
                      <th style="padding: 14px 16px; font-weight: 700;">Status</th>
                      <th style="padding: 14px 16px; font-weight: 700;">Price (USD)</th>
                      <th style="padding: 14px 16px; font-weight: 700; text-align: right;">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${rows}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
  `;
}

function renderSectionPacking() {
  return `
          <!-- Section 5: Packing List -->
          <section id="section-packing" class="trek-detail-section">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; gap: 16px; flex-wrap: wrap;">
              <div>
                <h2 class="trek-section-title" style="margin-bottom: 8px;">Packing List for Mardi Himal Trek</h2>
                <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                  <span style="font-size: 0.95rem; color: var(--color-neutral-600); font-weight: 500;">
                    Essential Info: Don't have it? Rent it with us in Pokhara — <strong>USD 1/day per item</strong>
                  </span>
                  <a href="#" onclick="window.print(); return false;" style="font-size: 0.9rem; color: var(--color-copper-orange); text-decoration: underline; font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Printable Checklist
                  </a>
                </div>
              </div>
            </div>

            <p style="font-size: 1.05rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 24px;">
              Because the Mardi Himal Trek spans warm subtropical foothills at 800 m to sub-zero alpine ridgelines at 4,500 m, layering is the core of effective gear preparation. Your main luggage (up to 10–12 kg) is carried in a duffel bag by porters; you will carry only a 30–40L daypack for daily essentials.
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
              
              <!-- Category 1: Upper Body -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <h3 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-navy"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
                  Upper Body &amp; Layering
                </h3>
                <ul style="padding-left: 20px; margin: 0; color: var(--color-neutral-700); font-size: 0.92rem; line-height: 1.8;">
                  <li>2x Moisture-wicking short-sleeve base tees</li>
                  <li>2x Thermal long-sleeve base tops (Merino wool)</li>
                  <li>1x Mid-weight fleece jacket or pullover</li>
                  <li>1x Heavyweight insulated down jacket (-10&deg;C rated)</li>
                  <li>1x Waterproof &amp; windproof hardshell jacket (Gore-Tex)</li>
                </ul>
              </div>

              <!-- Category 2: Lower Body & Footwear -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <h3 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-navy"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  Lower Body &amp; Footwear
                </h3>
                <ul style="padding-left: 20px; margin: 0; color: var(--color-neutral-700); font-size: 0.92rem; line-height: 1.8;">
                  <li>1x Broken-in waterproof trekking boots with ankle support</li>
                  <li>1x Camp shoes / lightweight sandals for teahouse evenings</li>
                  <li>4x Cushioned merino wool trekking socks</li>
                  <li>2x Quick-drying trekking trousers</li>
                  <li>1x Thermal long underwear bottoms (thermal leggings)</li>
                  <li>1x Lightweight waterproof rain overtrousers</li>
                </ul>
              </div>

              <!-- Category 3: Head, Hands & Eyewear -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <h3 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-navy"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                  Head, Hands &amp; Accessories
                </h3>
                <ul style="padding-left: 20px; margin: 0; color: var(--color-neutral-700); font-size: 0.92rem; line-height: 1.8;">
                  <li>1x Wide-brim sun hat or baseball cap</li>
                  <li>1x Warm fleece beanie / thermal headwear</li>
                  <li>1x UV-blocking sunglasses (Category 3 or 4 protection)</li>
                  <li>1x Neck gaiter or buff (dust &amp; wind protection)</li>
                  <li>1x Lightweight fleece liner gloves</li>
                  <li>1x Windproof insulated outer gloves or mittens</li>
                </ul>
              </div>

              <!-- Category 4: Gear & Electronics -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <h3 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-navy"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  Equipment &amp; Electronics
                </h3>
                <ul style="padding-left: 20px; margin: 0; color: var(--color-neutral-700); font-size: 0.92rem; line-height: 1.8;">
                  <li>1x 30–40L daypack with waterproof rain cover</li>
                  <li>1x Four-season sleeping bag (0&deg;C to -5&deg;C rating) or fleece liner</li>
                  <li>1x Pair of adjustable trekking poles (crucial for Siding descent)</li>
                  <li>1x Headlamp with spare batteries (for Day 5 pre-dawn climb)</li>
                  <li>2x 1-liter reusable water bottles (Nalgene) + purification tabs</li>
                  <li>1x Power bank (10,000–20,000 mAh) + charging cords</li>
                </ul>
              </div>

            </div>
          </section>
  `;
}

function renderSectionDetails() {
  const guidesHtml = guides.map((g, index) => {
    return `
      <div class="guide-accordion-card" style="border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); margin-bottom: 18px; overflow: hidden; background: #ffffff; box-shadow: var(--shadow-sm);">
        <div class="guide-accordion-header" style="padding: 18px 22px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; background: #ffffff; transition: background 0.2s ease;">
          <div>
            <h3 style="font-size: 1.12rem; color: var(--color-primary-navy); margin: 0; font-weight: 700;">${g.title}</h3>
            <span style="font-size: 0.88rem; color: var(--color-neutral-500); margin-top: 4px; display: block;">${g.summary}</span>
          </div>
          <span class="guide-arrow" style="color: var(--color-neutral-400); font-size: 1.1rem; transition: transform 0.2s ease;">&#9660;</span>
        </div>
        <div class="guide-accordion-body" style="padding: 0 22px 22px 22px; border-top: 1px solid var(--color-neutral-100); ${index === 0 ? 'display: block;' : 'display: none;'}">
          <div style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.7; margin-top: 16px;">
            ${g.content}
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
          <!-- Section 6: Details -->
          <section id="section-details" class="trek-detail-section">
            <div class="details-section-container">
              <!-- Heading -->
              <div class="details-title-wrapper" style="margin-bottom: 24px;">
                <h2 class="details-main-title">Read before you book, Mardi Himal Trek</h2>
                <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <p style="font-size: 1.05rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 24px;">
                Comprehensive expert route analysis covering trail milestones, terrain transitions, altitude acclimatization protocols, teahouse amenities, government permit rules, and safety guidelines.
              </p>

              <div class="guides-accordion-wrapper">
                ${guidesHtml}
              </div>
            </div>

            <script>
              document.addEventListener('DOMContentLoaded', () => {
                const guideHeaders = document.querySelectorAll('.guide-accordion-header');
                guideHeaders.forEach(h => {
                  h.addEventListener('click', () => {
                    const body = h.nextElementSibling;
                    const arrow = h.querySelector('.guide-arrow');
                    const isShown = body.style.display === 'block';
                    body.style.display = isShown ? 'none' : 'block';
                    arrow.style.transform = isShown ? 'rotate(0deg)' : 'rotate(180deg)';
                  });
                });
              });
            </script>
          </section>
  `;
}

function renderSectionAltitude() {
  return `
          <!-- Section 7: Altitude Profile -->
          <section id="section-altitude-profile" class="trek-detail-section">
            <div class="details-title-wrapper" style="margin-bottom: 24px;">
              <h2 class="details-main-title">Altitude Profile of Mardi Himal Trek</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
            </div>
            
            <p style="font-size: 1.05rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 24px;">
              The Mardi Himal route climbs steadily from Pokhara (800 m) and Kande (1,770 m) up to High Camp (3,580 m), with Day 5 reaching the Upper Viewpoint (approx. 4,200 m) and the conditional Base Camp area (approx. 4,500 m) before descending back to sleep at 3,580 m.
            </p>

            <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-sm); margin-bottom: 24px;">
              
              <!-- Interactive Altitude Visualizer Canvas -->
              <div id="altitude-visualizer-container" style="width: 100%; height: 320px; position: relative;">
                <!-- Fallback SVG Chart with brand emerald green and navy -->
                <svg viewBox="0 0 800 280" style="width: 100%; height: 100%; display: block;" xmlns="http://www.w3.org/2000/svg">
                  <!-- Grid Lines -->
                  <line x1="60" y1="30" x2="760" y2="30" stroke="#f1f5f9" stroke-width="1" />
                  <line x1="60" y1="80" x2="760" y2="80" stroke="#f1f5f9" stroke-width="1" />
                  <line x1="60" y1="130" x2="760" y2="130" stroke="#f1f5f9" stroke-width="1" />
                  <line x1="60" y1="180" x2="760" y2="180" stroke="#f1f5f9" stroke-width="1" />
                  <line x1="60" y1="230" x2="760" y2="230" stroke="#e2e8f0" stroke-width="2" />

                  <!-- Y-Axis Labels -->
                  <text x="50" y="35" font-size="11" fill="#64748b" text-anchor="end" font-weight="600">4,500m</text>
                  <text x="50" y="85" font-size="11" fill="#64748b" text-anchor="end" font-weight="600">4,000m</text>
                  <text x="50" y="135" font-size="11" fill="#64748b" text-anchor="end" font-weight="600">3,000m</text>
                  <text x="50" y="185" font-size="11" fill="#64748b" text-anchor="end" font-weight="600">2,000m</text>
                  <text x="50" y="235" font-size="11" fill="#64748b" text-anchor="end" font-weight="600">800m</text>

                  <!-- Mountain Profile Area & Line with brand green #10B981 -->
                  <polygon points="80,230 160,195 240,155 330,130 420,100 510,30 550,100 630,195 720,230 80,230" fill="rgba(16, 185, 129, 0.12)" />
                  <polyline points="80,230 160,195 240,155 330,130 420,100 510,30 550,100 630,195 720,230" fill="none" stroke="#10B981" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />

                  <!-- Waypoint Dots & Labels -->
                  <circle cx="80" cy="230" r="5" fill="#10B981" stroke="#ffffff" stroke-width="2" />
                  <text x="80" y="252" font-size="11" fill="#334155" text-anchor="middle" font-weight="600">Pokhara (800m)</text>

                  <circle cx="240" cy="155" r="5" fill="#10B981" stroke="#ffffff" stroke-width="2" />
                  <text x="240" y="175" font-size="11" fill="#334155" text-anchor="middle" font-weight="600">Forest Camp (2,550m)</text>

                  <circle cx="330" cy="130" r="5" fill="#10B981" stroke="#ffffff" stroke-width="2" />
                  <text x="330" y="120" font-size="11" fill="#334155" text-anchor="middle" font-weight="600">Low Camp (3,000m)</text>

                  <circle cx="420" cy="100" r="6" fill="#10B981" stroke="#ffffff" stroke-width="2" />
                  <text x="420" y="90" font-size="11" fill="#008060" text-anchor="middle" font-weight="700">High Camp (3,580m)</text>

                  <circle cx="510" cy="30" r="7" fill="#dc2626" stroke="#ffffff" stroke-width="2" />
                  <text x="510" y="20" font-size="11" fill="#dc2626" text-anchor="middle" font-weight="800">Base Camp (4,500m)</text>

                  <circle cx="630" cy="195" r="5" fill="#10B981" stroke="#ffffff" stroke-width="2" />
                  <text x="630" y="215" font-size="11" fill="#334155" text-anchor="middle" font-weight="600">Siding (1,750m)</text>

                  <circle cx="720" cy="230" r="5" fill="#10B981" stroke="#ffffff" stroke-width="2" />
                  <text x="720" y="252" font-size="11" fill="#334155" text-anchor="middle" font-weight="600">Pokhara (800m)</text>
                </svg>
              </div>

            </div>

            <!-- Elevation Data Table -->
            <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; text-align: left;">
                <thead>
                  <tr style="background: #f8fafc; border-bottom: 2px solid #e2e8f0; color: var(--color-primary-navy);">
                    <th style="padding: 12px 16px; font-weight: 700;">Location</th>
                    <th style="padding: 12px 16px; font-weight: 700;">Elevation</th>
                    <th style="padding: 12px 16px; font-weight: 700;">Role on Trek</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 12px 16px; font-weight: 600;">Pokhara</td>
                    <td style="padding: 12px 16px; color: #008060; font-weight: 700;"><span data-altitude-m="800">800 m / 2,624 ft</span></td>
                    <td style="padding: 12px 16px; color: var(--color-neutral-600);">Main logistical gateway &amp; staging base</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 12px 16px; font-weight: 600;">Kande</td>
                    <td style="padding: 12px 16px; color: #008060; font-weight: 700;"><span data-altitude-m="1770">1,770 m / 5,807 ft</span></td>
                    <td style="padding: 12px 16px; color: var(--color-neutral-600);">Official walking trailhead</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 12px 16px; font-weight: 600;">Australian Camp</td>
                    <td style="padding: 12px 16px; color: #008060; font-weight: 700;"><span data-altitude-m="2060">2,060 m / 6,758 ft</span></td>
                    <td style="padding: 12px 16px; color: var(--color-neutral-600);">Panoramic lower ridge viewpoint</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 12px 16px; font-weight: 600;">Forest Camp (Kokar)</td>
                    <td style="padding: 12px 16px; color: #008060; font-weight: 700;"><span data-altitude-m="2550">2,550 m / 8,366 ft</span></td>
                    <td style="padding: 12px 16px; color: var(--color-neutral-600);">Day 2 overnight; temperate forest setting</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 12px 16px; font-weight: 600;">Low Camp</td>
                    <td style="padding: 12px 16px; color: #008060; font-weight: 700;"><span data-altitude-m="3000">3,000 m / 9,842 ft</span></td>
                    <td style="padding: 12px 16px; color: var(--color-neutral-600);">Day 3 overnight; physiological acclimatization threshold</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 12px 16px; font-weight: 600;">Badal Danda</td>
                    <td style="padding: 12px 16px; color: #008060; font-weight: 700;"><span data-altitude-m="3200">3,200 m / 10,498 ft</span></td>
                    <td style="padding: 12px 16px; color: var(--color-neutral-600);">Open ridge; tree line transition</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0; background: #f0fdf4;">
                    <td style="padding: 12px 16px; font-weight: 700; color: #166534;">High Camp</td>
                    <td style="padding: 12px 16px; color: #16a34a; font-weight: 800;"><span data-altitude-m="3580">3,580 m / 11,745 ft</span></td>
                    <td style="padding: 12px 16px; color: #166534; font-weight: 600;">Highest scheduled overnight base (Days 4 &amp; 5)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0; background: #e6f7f0;">
                    <td style="padding: 12px 16px; font-weight: 700; color: #008060;">Upper Viewpoint</td>
                    <td style="padding: 12px 16px; color: #008060; font-weight: 800;"><span data-altitude-m="4200">4,200 m / 13,779 ft</span></td>
                    <td style="padding: 12px 16px; color: #008060; font-weight: 600;">Principal panoramic sunrise objective</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0; background: #fff1f2;">
                    <td style="padding: 12px 16px; font-weight: 800; color: #9f1239;">Mardi Himal Base Camp Area</td>
                    <td style="padding: 12px 16px; color: #dc2626; font-weight: 800;"><span data-altitude-m="4500">4,500 m / 14,763 ft</span></td>
                    <td style="padding: 12px 16px; color: #9f1239; font-weight: 600;">Conditional higher continuation (weather &amp; guide permitting)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 12px 16px; font-weight: 600;">Siding Village</td>
                    <td style="padding: 12px 16px; color: #008060; font-weight: 700;"><span data-altitude-m="1750">1,750 m / 5,741 ft</span></td>
                    <td style="padding: 12px 16px; color: var(--color-neutral-600);">Day 6 overnight; authentic Gurung valley settlement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
  `;
}

function renderSectionWeather() {
  return `
          <!-- Section 8: Weather -->
          <section id="section-weather" class="trek-detail-section">
            <div class="details-title-wrapper" style="margin-bottom: 24px;">
              <h2 class="details-main-title">Weather on the Mardi Himal Trek</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
            </div>
            
            <p style="font-size: 1.05rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 24px;">
              Temperatures vary drastically between Pokhara (800 m) and High Camp (3,580 m) / Base Camp (4,500 m). Below is our seasonal climatic breakdown to help you plan your trek with confidence.
            </p>

            <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-sm);">
              
              <!-- Season Tabs Grid -->
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
                
                <!-- Spring -->
                <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-sm); padding: 16px;">
                  <strong style="color: #166534; font-size: 1rem; display: block; margin-bottom: 6px;">Spring (March to May)</strong>
                  <span style="font-size: 0.85rem; color: #14532d; display: block; margin-bottom: 4px;"><strong>Day:</strong> 10&deg;C to 18&deg;C (Ridge) | 24&deg;C (Pokhara)</span>
                  <span style="font-size: 0.85rem; color: #14532d; display: block; margin-bottom: 6px;"><strong>Night:</strong> -2&deg;C to 4&deg;C at High Camp</span>
                  <p style="font-size: 0.85rem; color: #166534; margin: 0; line-height: 1.4;">Prime trekking season with blooming rhododendrons, long daylight, and pleasant climbing conditions.</p>
                </div>

                <!-- Autumn -->
                <div style="background: #e6f7f0; border: 1px solid #a7f3d0; border-radius: var(--radius-sm); padding: 16px;">
                  <strong style="color: #008060; font-size: 1rem; display: block; margin-bottom: 6px;">Autumn (Sept to Nov)</strong>
                  <span style="font-size: 0.85rem; color: #065f46; display: block; margin-bottom: 4px;"><strong>Day:</strong> 8&deg;C to 15&deg;C (Ridge) | 22&deg;C (Pokhara)</span>
                  <span style="font-size: 0.85rem; color: #065f46; display: block; margin-bottom: 6px;"><strong>Night:</strong> -6&deg;C to 2&deg;C at High Camp</span>
                  <p style="font-size: 0.85rem; color: #008060; margin: 0; line-height: 1.4;">Crystal-clear skies, razor-sharp mountain panoramas, and dry trails following the monsoon retreat.</p>
                </div>

                <!-- Winter -->
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 16px;">
                  <strong style="color: #334155; font-size: 1rem; display: block; margin-bottom: 6px;">Winter (Dec to Feb)</strong>
                  <span style="font-size: 0.85rem; color: #1e293b; display: block; margin-bottom: 4px;"><strong>Day:</strong> 2&deg;C to 8&deg;C (Ridge) | 16&deg;C (Pokhara)</span>
                  <span style="font-size: 0.85rem; color: #1e293b; display: block; margin-bottom: 6px;"><strong>Night:</strong> -12&deg;C to -5&deg;C at High Camp</span>
                  <p style="font-size: 0.85rem; color: #334155; margin: 0; line-height: 1.4;">Clear, crisp days with snow and ice on the upper ridge. Requires microspikes and heavy cold-weather layers.</p>
                </div>

                <!-- Monsoon -->
                <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: var(--radius-sm); padding: 16px;">
                  <strong style="color: #92400e; font-size: 1rem; display: block; margin-bottom: 6px;">Monsoon (June to August)</strong>
                  <span style="font-size: 0.85rem; color: #78350f; display: block; margin-bottom: 4px;"><strong>Day:</strong> 15&deg;C to 22&deg;C (Humid)</span>
                  <span style="font-size: 0.85rem; color: #78350f; display: block; margin-bottom: 6px;"><strong>Night:</strong> 8&deg;C to 12&deg;C</span>
                  <p style="font-size: 0.85rem; color: #92400e; margin: 0; line-height: 1.4;">Frequent heavy afternoon rain, muddy forest tracks, leeches, and cloudy mountain views.</p>
                </div>

              </div>

            </div>
          </section>
  `;
}

function renderSectionMap() {
  return `
          <!-- Section 9: Map -->
          <section id="section-map" class="trek-detail-section">
            <div class="details-title-wrapper" style="margin-bottom: 24px;">
              <h2 class="details-main-title">Mardi Himal Trek Map</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
            </div>
            
            <p style="font-size: 1.05rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 24px;">
              The Mardi Himal Trek follows an iconic ridgeline corridor approaching north from Kande through Australian Camp, Forest Camp, Low Camp, and High Camp to the Upper Viewpoint (4,200 m) and Base Camp area (4,500 m), exiting southeast via Siding and Lumre back to Pokhara.
            </p>

            <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); padding: 16px;">
              <div style="border-radius: var(--radius-sm); overflow: hidden; background: #f8fafc; text-align: center;">
                <img src="../../images/map-annapurna.png" alt="Mardi Himal Trek Route Map" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" loading="lazy">
              </div>
              <div style="padding: 16px 8px 8px 8px; font-size: 0.92rem; color: var(--color-neutral-600); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
                <span><strong>Trailhead:</strong> Kande (1,770 m)</span>
                <span><strong>High Point:</strong> Base Camp Area (4,500 m)</span>
                <span><strong>Exit Point:</strong> Lumre / Pokhara (800 m)</span>
                <span><strong>Protected Zone:</strong> Annapurna Conservation Area</span>
              </div>
            </div>
          </section>
  `;
}

function renderSectionBooking() {
  return `
          <!-- Section 10: Booking Form -->
          <section id="section-booking" class="trek-detail-section">
            <h2 class="trek-section-title">Book This Trek</h2>
            
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px;">
              We offer guaranteed small group departures as well as custom private itineraries. Fill out the reservation form below, and our senior trekking planner will respond within 12 hours with a comprehensive quotation, permit advice, and customized expedition schedule.
            </p>

            <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 28px; box-shadow: var(--shadow-sm);">
              <form class="trek-booking-form" data-trek-title="Mardi Himal Trek (8 Days)">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 16px;">
                  <div>
                    <label style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Full Name *</label>
                    <input type="text" name="name" required placeholder="Your full name" style="width: 100%; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; box-sizing: border-box;">
                  </div>
                  <div>
                    <label style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Email Address *</label>
                    <input type="email" name="email" required placeholder="you@example.com" style="width: 100%; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; box-sizing: border-box;">
                  </div>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 16px;">
                  <div>
                    <label style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Phone / WhatsApp *</label>
                    <input type="tel" name="phone" required placeholder="+1 (555) 000-0000" style="width: 100%; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; box-sizing: border-box;">
                  </div>
                  <div>
                    <label style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Expected Start Date *</label>
                    <input type="date" name="start_date" required style="width: 100%; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; box-sizing: border-box;">
                  </div>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 16px;">
                  <div>
                    <label style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Number of Trekkers</label>
                    <select name="travelers" style="width: 100%; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; box-sizing: border-box;">
                      <option value="1">1 Person (Solo)</option>
                      <option value="2" selected>2 People</option>
                      <option value="3-4">3–4 People</option>
                      <option value="5-8">5–8 People (Group Discount)</option>
                      <option value="9+">9+ People (Custom Group Rate)</option>
                    </select>
                  </div>
                  <div>
                    <label style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Trip Format</label>
                    <select name="format" style="width: 100%; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; box-sizing: border-box;">
                      <option value="standard-group">Scheduled Group Departure ($749)</option>
                      <option value="private-trek">Private Custom Departure</option>
                      <option value="luxury-upgrade">Deluxe / Luxury Upgrade (Flights &amp; 5-Star Pokhara)</option>
                    </select>
                  </div>
                </div>

                <div style="margin-bottom: 20px;">
                  <label style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Special Requirements / Dietary Restrictions / Notes</label>
                  <textarea name="notes" rows="3" placeholder="Tell us about your fitness level, previous hiking experience, or any custom requests..." style="width: 100%; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; box-sizing: border-box;"></textarea>
                </div>

                <button type="submit" style="background: var(--color-copper-orange); color: #ffffff; border: none; padding: 14px 28px; border-radius: 6px; font-weight: 700; font-size: 1.05rem; cursor: pointer; transition: opacity 0.2s ease; width: 100%;">
                  Send Booking Request &rarr;
                </button>
              </form>
            </div>
          </section>
  `;
}

function renderSectionReviews() {
  return `
          <!-- Section 11: Reviews -->
          <section id="section-reviews" class="trek-detail-section">
            <h2 class="trek-section-title" style="font-size: 2.2rem; margin-bottom: 8px; text-align: left;">Best Himalayan Trekking Reviews</h2>
            
            <p style="color: var(--color-neutral-600); font-size: 1.05rem; margin-bottom: 28px; text-align: left;">
              Read authentic feedback from adventurers who completed the Mardi Himal Trek with our local mountain guides.
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
              
              <!-- Review 1 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 22px; box-shadow: var(--shadow-sm);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                  <div style="display: flex; gap: 2px;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <span style="font-size: 0.8rem; color: #008060; font-weight: 700; background: #e6f7f0; padding: 2px 8px; border-radius: 4px;">TripAdvisor Verified</span>
                </div>
                <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin-bottom: 8px; font-weight: 700;">"Standing at 4,500m right under Fishtail was unforgettable!"</h4>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 14px;">
                  "The 8-day pace allowed us to truly enjoy the forest and ridge without feeling rushed. Reaching High Camp and then watching the sunrise illuminate Machhapuchhre was magical. Our guide Dawa was exceptionally attentive, monitoring our oxygen daily. Highly recommend Namaste Hiking Trek!"
                </p>
                <div style="font-size: 0.85rem; color: var(--color-neutral-500);">
                  <strong style="color: var(--color-neutral-800);">Mark &amp; Sarah Jenkins</strong> &bull; United Kingdom &bull; Traveled April 2026
                </div>
              </div>

              <!-- Review 2 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 22px; box-shadow: var(--shadow-sm);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                  <div style="display: flex; gap: 2px;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <span style="font-size: 0.8rem; color: #008060; font-weight: 700; background: #e6f7f0; padding: 2px 8px; border-radius: 4px;">Google Verified</span>
                </div>
                <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin-bottom: 8px; font-weight: 700;">"Perfect balance of adventure, culture, and ridge scenery."</h4>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 14px;">
                  "I was deciding between Poon Hill and Mardi Himal. I'm so glad I chose Mardi Himal! The ridge walking from Badal Danda to High Camp is unlike anything else. The teahouses were clean, Dal Bhat was delicious, and the descent via Siding offered a peaceful cultural ending."
                </p>
                <div style="font-size: 0.85rem; color: var(--color-neutral-500);">
                  <strong style="color: var(--color-neutral-800);">Chloe Dubois</strong> &bull; France &bull; Traveled October 2026
                </div>
              </div>

              <!-- Review 3 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 22px; box-shadow: var(--shadow-sm);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                  <div style="display: flex; gap: 2px;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <span style="font-size: 0.8rem; color: #008060; font-weight: 700; background: #e6f7f0; padding: 2px 8px; border-radius: 4px;">TripAdvisor Verified</span>
                </div>
                <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin-bottom: 8px; font-weight: 700;">"Exceptional organisation and flawless mountain guiding."</h4>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 14px;">
                  "From airport pickup in Kathmandu to our farewell dinner in Pokhara, everything was handled seamlessly. Our porter carried our gear with an easy smile, and our guide Pemba made sure we reached the Upper Viewpoint safely at dawn. 10/10 service!"
                </p>
                <div style="font-size: 0.85rem; color: var(--color-neutral-500);">
                  <strong style="color: var(--color-neutral-800);">Tobias Weber</strong> &bull; Germany &bull; Traveled November 2026
                </div>
              </div>

            </div>
          </section>
  `;
}

function renderSectionFaqs() {
  const catButtons = data.faqCategories.map((c, i) => `
    <button type="button" class="faq-category-btn ${i === 0 ? 'active' : ''}" data-category="${c.id}">
      <span class="faq-cat-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      </span>
      ${c.name}
    </button>
  `).join('');

  const catPanels = data.faqCategories.map((c, i) => {
    const items = c.faqs.map(f => `
      <div class="faq-accordion-item" style="border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 14px; overflow: hidden; background: #ffffff;">
        <div class="faq-accordion-header" style="padding: 16px 20px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; background: #ffffff;">
          <h4 style="font-size: 1.02rem; color: var(--color-primary-navy); margin: 0; font-weight: 700;">${f.q}</h4>
          <span class="faq-arrow-icon" style="color: var(--color-neutral-400); font-size: 1.1rem; transition: transform 0.2s ease;">&#9660;</span>
        </div>
        <div class="faq-accordion-content" style="padding: 0 20px 20px 20px; border-top: 1px solid #f1f5f9; display: none;">
          <p style="color: var(--color-neutral-700); font-size: 0.96rem; line-height: 1.7; margin: 14px 0 0 0;">
            ${f.a}
          </p>
        </div>
      </div>
    `).join('');

    return `
      <div class="faq-category-content ${i === 0 ? 'active' : ''}" data-category-content="${c.id}" style="${i === 0 ? 'display: block;' : 'display: none;'}">
        ${items}
      </div>
    `;
  }).join('');

  return `
          <!-- Section 12: FAQs -->
          <section id="section-faqs" class="trek-detail-section">
            <h2 class="faq-section-accent-title">
              <span class="faq-accent-bar"></span>
              Frequently Asked Questions for Mardi Himal Trek
            </h2>

            <div class="faq-layout-container">
              <!-- Left Sidebar Category Navigation -->
              <div class="faq-sidebar-card">
                <div class="faq-category-nav">
                  ${catButtons}
                </div>
              </div>

              <!-- Right FAQ Content Area -->
              <div class="faq-content-area">
                ${catPanels}
              </div>
            </div>

            <script>
              document.addEventListener('DOMContentLoaded', () => {
                // Category tab switcher
                const catBtns = document.querySelectorAll('.faq-category-btn');
                const catContents = document.querySelectorAll('.faq-category-content');
                
                catBtns.forEach(btn => {
                  btn.addEventListener('click', () => {
                    const cat = btn.getAttribute('data-category');
                    catBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    catContents.forEach(c => {
                      if (c.getAttribute('data-category-content') === cat) {
                        c.style.display = 'block';
                      } else {
                        c.style.display = 'none';
                      }
                    });
                  });
                });

                // Accordion items toggle
                const headers = document.querySelectorAll('.faq-accordion-header');
                headers.forEach(h => {
                  h.addEventListener('click', () => {
                    const content = h.nextElementSibling;
                    const arrow = h.querySelector('.faq-arrow-icon');
                    const isShown = content.style.display === 'block';
                    content.style.display = isShown ? 'none' : 'block';
                    arrow.style.transform = isShown ? 'rotate(0deg)' : 'rotate(180deg)';
                  });
                });
              });
            </script>
          </section>
  `;
}

function renderSidebar() {
  return `
        <!-- Sticky Booking Sidebar Column -->
        <div>
          <div class="sidebar-booking-card" style="position: sticky; top: 125px; align-self: start; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); overflow: hidden;">
              
              <!-- Top Right Best Seller Ribbon Badge -->
              <div style="position: absolute; top: 18px; right: 0; background: #F59E0B; color: #ffffff; font-size: 0.72rem; font-weight: 800; padding: 5px 14px; border-radius: 4px 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 2px 6px rgba(245, 158, 11, 0.3);">
                BEST SELLER
              </div>

              <!-- Pricing Header -->
              <span style="font-size: 0.75rem; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">FROM</span>
              <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 16px; flex-wrap: wrap;">
                <span style="font-size: 2.5rem; font-weight: 800; color: #0f172a; line-height: 1;">$749</span>
                <span style="font-size: 0.92rem; color: #64748b; font-weight: 500;">/ person</span>
                <a href="#section-itinerary" style="font-size: 0.92rem; color: #475569; font-weight: 600; text-decoration: underline; margin-left: 4px;">8 days trip</a>
              </div>

              <!-- Group Discount Accordion Toggle -->
              <div class="group-discount-toggle" onclick="const table = this.nextElementSibling; const arrow = this.querySelector('.gd-arrow'); const isHidden = table.style.display === 'none'; table.style.display = isHidden ? 'block' : 'none'; arrow.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';" style="cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; border: 1px solid #e2e8f0; padding: 10px 14px; border-radius: 8px; margin-bottom: 12px; transition: background 0.2s;">
                <span style="font-size: 0.82rem; font-weight: 700; color: #1e293b; display: flex; align-items: center; gap: 6px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  View Group Discount Tier
                </span>
                <span class="gd-arrow" style="font-size: 0.75rem; color: #64748b; transition: transform 0.2s;">&#9660;</span>
              </div>
              
              <!-- Hidden Collapsible Group Discount Table -->
              <div style="display: none; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; margin-bottom: 18px; font-size: 0.85rem;">
                <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="color: #64748b;">1 Person (Solo)</span>
                  <span style="font-weight: 700; color: #0f172a;">$899 / person</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="color: #64748b;">2 &ndash; 4 Persons</span>
                  <span style="font-weight: 700; color: #16a34a;">$749 / person</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="color: #64748b;">5 &ndash; 8 Persons</span>
                  <span style="font-weight: 700; color: #16a34a;">$699 / person</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 6px 0;">
                  <span style="color: #64748b;">9+ Persons</span>
                  <span style="font-weight: 700; color: #16a34a;">$649 / person</span>
                </div>
              </div>

              <!-- Quick Meta Spec List -->
              <div style="border-top: 1px solid #f1f5f9; padding-top: 14px; margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 0.9rem;">
                  <span style="color: #64748b;">Duration:</span>
                  <span style="font-weight: 700; color: #0f172a;">8 Days</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 0.9rem;">
                  <span style="color: #64748b;">Max Altitude:</span>
                  <span style="font-weight: 700; color: #0f172a;">4,500 m (Base Camp)</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 0.9rem;">
                  <span style="color: #64748b;">Activity:</span>
                  <span style="font-weight: 700; color: #0f172a;">Ridge Trekking</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 0.9rem;">
                  <span style="color: #64748b;">Grade:</span>
                  <span style="font-weight: 700; color: #0f172a;">Moderate to Challenging</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 0.9rem;">
                  <span style="color: #64748b;">Region:</span>
                  <span style="font-weight: 700; color: #0f172a;">Annapurna Conservation</span>
                </div>
              </div>

              <!-- CTAs in Brand Emerald Green -->
              <button class="open-inquiry-btn" style="width: 100%; background: #10B981; color: #ffffff; border: none; padding: 14px 20px; border-radius: 8px; font-weight: 800; font-size: 1rem; cursor: pointer; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25); transition: background 0.2s;">
                Book This Trek
              </button>

              <a href="https://wa.me/9779800000000?text=Hi%2C%20I%20am%20interested%20in%20the%208-Day%20Mardi%20Himal%20Trek" target="_blank" style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; background: #008060; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-weight: 700; font-size: 0.95rem; box-sizing: border-box; transition: background 0.2s;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Chat on WhatsApp
              </a>

              <!-- Trust Guarantee -->
              <div style="margin-top: 18px; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 14px;">
                <span style="font-size: 0.78rem; color: #64748b; display: flex; align-items: center; justify-content: center; gap: 6px;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  100% Financial Protection &bull; Zero Booking Fees
                </span>
              </div>
          </div>
        </div>
  `;
}

function renderSimilarTreks() {
  return `
  <!-- Similar Treks You May Like (Annapurna Region) -->
  <section class="section-padding bg-alt" style="padding: 60px 0; background: var(--color-neutral-50);">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 40px;">
        <span class="section-subtitle" style="text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-copper-orange); font-weight: 700; font-size: 0.85rem;">Discover More Routes</span>
        <h2 class="section-title" style="color: var(--color-primary-navy); margin-top: 6px;">Other Iconic Treks in the Annapurna Region</h2>
        <div class="section-divider" style="margin: 12px auto; width: 60px; height: 3px; background: var(--color-copper-orange);"></div>
      </div>

      <div class="yml-cards-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
        
        <!-- Card 1: Annapurna Circuit Trek with Tilicho Lake -->
        <a href="../annapurna-circuit-trek-with-tilicho-lake/" class="yml-card" style="text-decoration: none; color: inherit; background: #ffffff; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--color-neutral-200); box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
          <div class="yml-card-image" style="position: relative; height: 210px; overflow: hidden;">
            <img src="../../images/treks/annapurna-circuit/annapurna-tilicho-lake-turquise-01.jpg" alt="Annapurna Circuit Trek with Tilicho Lake" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            <span class="yml-card-badge" style="position: absolute; top: 14px; left: 14px; background: rgba(15, 23, 42, 0.85); color: #ffffff; padding: 4px 10px; border-radius: 4px; font-size: 0.78rem; font-weight: 700;">Annapurna Region</span>
          </div>
          <div class="yml-card-body" style="padding: 20px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <h3 class="yml-card-title" style="font-size: 1.15rem; color: var(--color-primary-navy); margin: 0 0 8px 0; font-weight: 700;">Annapurna Circuit with Tilicho Lake (16 Days)</h3>
              <p style="font-size: 0.88rem; color: var(--color-neutral-600); line-height: 1.5; margin: 0 0 14px 0;">Cross Thorong La Pass (5,416m) and explore the world's highest glacial lake at 4,919m.</p>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--color-neutral-100); padding-top: 14px;">
              <div>
                <span style="font-size: 0.75rem; color: var(--color-neutral-500); display: block;">Starting from</span>
                <strong style="font-size: 1.15rem; color: #0f172a;">USD $1,399</strong>
              </div>
              <span style="color: var(--color-copper-orange); font-weight: 700; font-size: 0.9rem;">View Trip &rarr;</span>
            </div>
          </div>
        </a>

        <!-- Card 2: Annapurna Base Camp Trek -->
        <a href="../annapurna-base-camp-trek/" class="yml-card" style="text-decoration: none; color: inherit; background: #ffffff; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--color-neutral-200); box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
          <div class="yml-card-image" style="position: relative; height: 210px; overflow: hidden;">
            <img src="../../images/treks/annapurna-base-camp/abc-hero.jpg" alt="Annapurna Base Camp Trek" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            <span class="yml-card-badge" style="position: absolute; top: 14px; left: 14px; background: rgba(15, 23, 42, 0.85); color: #ffffff; padding: 4px 10px; border-radius: 4px; font-size: 0.78rem; font-weight: 700;">Annapurna Region</span>
          </div>
          <div class="yml-card-body" style="padding: 20px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <h3 class="yml-card-title" style="font-size: 1.15rem; color: var(--color-primary-navy); margin: 0 0 8px 0; font-weight: 700;">Annapurna Base Camp Trek (10 Days)</h3>
              <p style="font-size: 0.88rem; color: var(--color-neutral-600); line-height: 1.5; margin: 0 0 14px 0;">Journey into the natural amphitheater of the Annapurna Sanctuary beneath Annapurna I.</p>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--color-neutral-100); padding-top: 14px;">
              <div>
                <span style="font-size: 0.75rem; color: var(--color-neutral-500); display: block;">Starting from</span>
                <strong style="font-size: 1.15rem; color: #0f172a;">USD $899</strong>
              </div>
              <span style="color: var(--color-copper-orange); font-weight: 700; font-size: 0.9rem;">View Trip &rarr;</span>
            </div>
          </div>
        </a>

        <!-- Card 3: Ghorepani Poon Hill Trek -->
        <a href="../ghorepani-poon-hill-trek/" class="yml-card" style="text-decoration: none; color: inherit; background: #ffffff; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--color-neutral-200); box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
          <div class="yml-card-image" style="position: relative; height: 210px; overflow: hidden;">
            <img src="../../images/treks/ghorepani-poon-hill/poon-hill-sunrise.jpg" alt="Ghorepani Poon Hill Trek" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            <span class="yml-card-badge" style="position: absolute; top: 14px; left: 14px; background: rgba(15, 23, 42, 0.85); color: #ffffff; padding: 4px 10px; border-radius: 4px; font-size: 0.78rem; font-weight: 700;">Annapurna Region</span>
          </div>
          <div class="yml-card-body" style="padding: 20px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <h3 class="yml-card-title" style="font-size: 1.15rem; color: var(--color-primary-navy); margin: 0 0 8px 0; font-weight: 700;">Ghorepani Poon Hill Trek (5 Days)</h3>
              <p style="font-size: 0.88rem; color: var(--color-neutral-600); line-height: 1.5; margin: 0 0 14px 0;">Iconic rhododendron trail and panoramic sunrise overlooking Dhaulagiri and Annapurna.</p>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--color-neutral-100); padding-top: 14px;">
              <div>
                <span style="font-size: 0.75rem; color: var(--color-neutral-500); display: block;">Starting from</span>
                <strong style="font-size: 1.15rem; color: #0f172a;">USD $499</strong>
              </div>
              <span style="color: var(--color-copper-orange); font-weight: 700; font-size: 0.9rem;">View Trip &rarr;</span>
            </div>
          </div>
        </a>

      </div>
    </div>
  </section>
  `;
}

module.exports = {
  renderHeroHeader,
  renderSectionOverview,
  renderSectionItinerary,
  renderSectionIncludes,
  renderSectionDates,
  renderSectionPacking,
  renderSectionDetails,
  renderSectionAltitude,
  renderSectionWeather,
  renderSectionMap,
  renderSectionBooking,
  renderSectionReviews,
  renderSectionFaqs,
  renderSidebar,
  renderSimilarTreks
};
