// Module 2: Hero Section, Image Gallery Collage, Key Trip Facts, Trust Grid, Sticky Sub-Nav, and Layout Wrappers
function getHeroAndSubnav() {
  return `
  <main>
    <article itemscope itemtype="https://schema.org/TouristTrip">

    <!-- Page Title Section -->
    <section style="padding: 30px 0 10px 0; background: var(--color-neutral-50);">
      <div class="container">
        <!-- Top Row: Region Pill & Review Badges -->
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 12px;">
          <span class="pill pill-copper" style="margin-bottom: 0;">Lower Everest • Solukhumbu Sherpa Heritage • Hillary's Favorite Viewpoint</span>
          
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
            <span style="color: #FBBF24; display: inline-flex; gap: 1px; font-size: 0.9rem;"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
            <span><strong style="font-weight: 600; color: #0f172a;">169</strong> reviews on Google</span>
          </div>
        </div>
        <h1 class="trek-hero-title" style="font-size: 2.8rem; margin-top: 6px; margin-bottom: 8px; color: var(--color-primary-navy);">Pikey Peak Trek</h1>
        <p style="font-size: 1.15rem; color: var(--color-neutral-600); line-height: 1.7; margin-top: 12px; margin-bottom: 0;">
          The Pikey Peak Trek is a scenic Himalayan trekking adventure in the lower Everest region of Nepal, offering panoramic mountain views, traditional Sherpa villages, Buddhist heritage, and peaceful walking trails away from the busier routes in the Khumbu. Reaching an elevation of approximately <span data-altitude-m="4065">4,065 meters</span> at Pikey Peak, this trek provides an opportunity to enjoy views of Mount Everest and the surrounding Himalayan range without undertaking the longer Everest Base Camp journey or dealing with domestic Lukla flight delays.
          <span id="pikey-more-text" style="display: none;">
            Combining an overland road approach from Kathmandu to Dhap Bazaar with five walking days through Jhapre, Pikey Base Camp, Jasmane Bhanjyang, Junbesi, and Phaplu, this 9-day journey showcases centuries-old monasteries like Thupten Chholing, rhododendron forests, authentic Sherpa homestays, and what Sir Edmund Hillary famously declared to be his favorite panoramic view of Mount Everest in all of Nepal.
          </span>
          <button id="pikey-toggle-btn" style="background: none; border: none; color: #10b981; font-weight: 700; font-size: 1.05rem; cursor: pointer; padding: 0; margin-left: 6px; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; vertical-align: middle; transition: opacity 0.2s ease;">
            Learn more <span style="font-size: 1.1rem; margin-left: 2px;">→</span>
          </button>
        </p>
        
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const toggleBtn = document.getElementById('pikey-toggle-btn');
            const moreText = document.getElementById('pikey-more-text');
            
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
          <img src="../../images/treks/pikey-peak/pikey-peak-himalayan-sunrise-01.jpg" alt="Pikey Peak Himalayan Sunrise View of Mount Everest and Mountain Horizon">
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
          <img src="../../images/treks/pikey-peak/pikey-peak-thupten-chholing-monastery-02.jpg" alt="Historic Thupten Chholing Monastery in Junbesi Solu Valley">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-top-right">
          <img src="../../images/treks/pikey-peak/pikey-peak-jhapre-stupa-village-03.jpg" alt="Jhapre Sherpa Village Buddhist Stupa and Apple Orchards">
          <!-- See all photos button -->
          <button class="trek-gallery-see-all-btn">
            <span><svg class="icon-svg icon-xs icon-margin-right" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>See all photos</span>
          </button>
        </div>
        <div class="trek-gallery-sub">
          <img src="../../images/treks/pikey-peak/pikey-peak-solu-valley-landscape-04.jpg" alt="Solu Valley Mountain Landscape and Rural Terraced Trails">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-bottom-right">
          <img src="../../images/treks/pikey-peak/pikey-peak-ridge-trail-view-05.jpg" alt="Trekking Group on Alpine Ridge Path Approaching Pikey Peak">
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
        <h2 style="font-size: 1.3rem; margin-bottom: 24px; color: var(--color-primary-navy); display: flex; align-items: center; gap: 8px; font-weight: 700;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="icon-navy" style="color: var(--color-primary-navy);"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg> Key Trip Facts</h2>
        
        <div class="trek-facts-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 24px 20px;">
          <!-- 1. Duration -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Duration</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">9 days</span>
            </div>
          </div>

          <!-- 2. Difficulty -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Difficulty</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Moderate</span>
            </div>
          </div>

          <!-- 3. Max Altitude -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22L12 2l8 20H4z"/><path d="M9 22l3-7 3 7H9z" fill="#008060"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Max Altitude</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;" data-altitude-m="4065">4,065 m (13,336 ft)</span>
            </div>
          </div>

          <!-- 4. Destination -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Destination</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Nepal (Lower Everest)</span>
            </div>
          </div>

          <!-- 5. Activity -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><path d="M12 8v8l-3-2"/><path d="M9 22l3-6 4 2 2-5"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Activity</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Trekking &amp; Cultural Walk</span>
            </div>
          </div>

          <!-- 6. Group Size -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Group Size</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">1–14 Trekkers</span>
            </div>
          </div>

          <!-- 7. Best Season -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Best Season</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Mar–May &bull; Sep–Dec</span>
            </div>
          </div>

          <!-- 8. Accommodation -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Accommodation</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Teahouses &amp; Lodges</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Trust Pillars Grid -->
    <div class="container" style="margin-bottom: 30px;">
      <div class="trek-trust-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
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
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>Dates
          </button>
          <button class="trek-sub-nav-btn" data-tab="packing">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>Packing
          </button>
          <button class="trek-sub-nav-btn" data-tab="details">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>Logistics
          </button>
          <button class="trek-sub-nav-btn" data-tab="altitude-profile">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22L12 2l8 20H4z"/><path d="M9 22l3-7 3 7H9z" fill="currentColor"/></svg>Altitude
          </button>
          <button class="trek-sub-nav-btn" data-tab="weather">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>Weather
          </button>
          <button class="trek-sub-nav-btn" data-tab="map">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>Map
          </button>
          <button class="trek-sub-nav-btn" data-tab="reviews">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>Reviews
          </button>
          <button class="trek-sub-nav-btn" data-tab="faqs">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>FAQs
          </button>
        </div>
      </div>
    </div>

    <!-- Two-Column Layout Section Wrapper -->
    <section class="section-padding" style="padding-top: 10px;" data-trek-details-wrapper data-trek-key="pikey_peak">
      <div class="container trek-detail-layout" style="display: grid; grid-template-columns: 2.2fr 1fr; gap: 40px;">
        
        <!-- Main Details Column (Sequential Sections) -->
        <div style="min-width: 0;">
`;
}

module.exports = { getHeroAndSubnav };
