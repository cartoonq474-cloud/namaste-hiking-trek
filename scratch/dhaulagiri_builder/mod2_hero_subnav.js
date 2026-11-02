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
          <span class="pill pill-copper" style="margin-bottom: 0; font-size: 0.8rem; font-weight: 700; text-transform: uppercase;">Dhaulagiri Region • Western Nepal</span>
          <div style="display: inline-flex; align-items: center; gap: 8px; background: #fff; padding: 4px 12px; border-radius: var(--radius-full); border: 1px solid var(--color-neutral-200); box-shadow: var(--shadow-sm);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#00AA6C"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-neutral-800);">5.0</span>
            <span style="font-size: 0.8rem; color: var(--color-neutral-500);">TripAdvisor Travelers' Choice 2026</span>
          </div>
          <div style="display: inline-flex; align-items: center; gap: 8px; background: #fff; padding: 4px 12px; border-radius: var(--radius-full); border: 1px solid var(--color-neutral-200); box-shadow: var(--shadow-sm);">
            <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-neutral-800);">4.9/5</span>
            <span style="font-size: 0.8rem; color: var(--color-neutral-500);">(10,000+ Verified Climbers)</span>
          </div>
        </div>

        <!-- H1 Header -->
        <h1 class="trek-hero-title" style="font-size: 2.8rem; margin-top: 6px; margin-bottom: 8px; color: var(--color-primary-navy);">Dhaulagiri Circuit Trek</h1>

        <!-- Collapsible Subtitle / Intro Summary -->
        <div class="trek-intro-text" style="color: var(--color-neutral-600); font-size: 1.05rem; line-height: 1.65; max-width: 950px; margin-bottom: 20px;">
          <p style="margin-bottom: 8px;">
            The <strong>Dhaulagiri Circuit Trek</strong> is an authentic 20-calendar-day high-altitude camping expedition in western Nepal beneath the monumental Dhaulagiri massif. Combining the rural Myagdi Valley, traditional Magar villages, expedition-supported camping, Dhaulagiri Base Camp (4,750 m), the crossing of French Pass (5,360 m), the isolated high-altitude wilderness of Hidden Valley, and the descent over Dhampus Pass (5,250 m) to the Kali Gandaki Valley, this journey is engineered for experienced mountaineers seeking true Himalayan wilderness.
          </p>
          <div id="dhaulagiri-more-text" style="display: none; margin-top: 10px;">
            <p style="margin-bottom: 8px;">
              This 20-calendar-day Kathmandu-to-Kathmandu expedition travels by road through Beni to Babiyachaur on Days 3–4. The main walking stages run from Day 5 through Day 17, with scheduled acclimatization rest days at Italian Base Camp on Day 11 and Dhaulagiri Base Camp on Day 14. The upper route crosses French Pass into Hidden Valley, then Dhampus Pass toward Yak Kharka and Jomsom. The planned return is a Day 18 Jomsom–Pokhara flight and Day 19 road journey to Kathmandu before Day 20 final international departure.
            </p>
            <p style="margin-bottom: 8px;">
              Unlike commercial teahouse trails, much of the upper circuit relies entirely on an organized expedition support team: licensed high-altitude Sherpa guides, cook and kitchen crew, porters, heavy-duty alpine tents, and emergency medical kits. The day plan uses Hidden Valley around 5,200 m as its highest scheduled overnight and French Pass at approximately 5,360 m as its highest daytime crossing.
            </p>
          </div>
          <button id="dhaulagiri-toggle-btn" style="background: none; border: none; color: var(--color-copper-orange); font-weight: 700; cursor: pointer; padding: 0; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 4px; margin-top: 4px;">
            <span id="dhaulagiri-toggle-label">Learn More</span>
            <svg id="dhaulagiri-toggle-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transition: transform 0.2s ease;"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Photo Gallery Collage Section -->
    <div class="container" style="margin-bottom: 24px;">
      <div class="trek-gallery-collage">
        <!-- Main Hero Image (Large Left) -->
        <div class="trek-gallery-main open-gallery-trigger" style="cursor: pointer;" data-gallery-index="0">
          <img src="../../images/hero-himalayas.jpg" alt="Dhaulagiri I Massif Panorama and Glacial Amphitheater">
          <span class="trek-gallery-badge">20 Days Challenging Circuit</span>
        </div>

        <!-- Secondary Grid Images (Right) -->
        <div class="trek-gallery-sub open-gallery-trigger" style="cursor: pointer;" data-gallery-index="1">
          <img src="../../images/gallery-peak.jpg" alt="Dhaulagiri Base Camp Glacial Moraine and Ice Towers">
        </div>
        <div class="trek-gallery-sub open-gallery-trigger" style="cursor: pointer;" data-gallery-index="2">
          <img src="../../images/gallery-pass.jpg" alt="Crossing French Pass (5,360 m) into Hidden Valley">
        </div>
        <div class="trek-gallery-sub open-gallery-trigger" style="cursor: pointer;" data-gallery-index="3">
          <img src="../../images/gallery-lake.jpg" alt="Hidden Valley Remote High Altitude Campsite">
        </div>
        <div class="trek-gallery-sub trek-gallery-sub-bottom-right open-gallery-trigger" style="position: relative; cursor: pointer;" data-gallery-index="0">
          <img src="../../images/hero-home.jpg" alt="Trekking Group Approaching Dhampus Pass">
          <button class="trek-gallery-see-all-btn open-gallery-trigger" data-gallery-index="0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>See all photos</span>
          </button>
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
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">20 days</span>
            </div>
          </div>

          <!-- 2. Difficulty -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Difficulty</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Strenuous (Grade 5)</span>
            </div>
          </div>

          <!-- 3. Max Altitude -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22L12 2l8 20H4z"/><path d="M9 22l3-7 3 7H9z" fill="#008060"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Max Altitude</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;" data-altitude-m="5360">5,360 m (17,585 ft)</span>
            </div>
          </div>

          <!-- 4. Destination -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Destination</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Nepal (Dhaulagiri &amp; Kali Gandaki)</span>
            </div>
          </div>

          <!-- 5. Activity -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><path d="M12 8v8l-3-2"/><path d="M9 22l3-6 4 2 2-5"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Activity</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Expedition Trekking &amp; Camping</span>
            </div>
          </div>

          <!-- 6. Group Size -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Group Size</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">2–12 Trekkers</span>
            </div>
          </div>

          <!-- 7. Best Season -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Best Season</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Oct–Nov &bull; Apr–May</span>
            </div>
          </div>

          <!-- 8. Accommodation -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Accommodation</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Alpine Tents &amp; Teahouses</span>
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

        <!-- Badge 2: 10,000+ happy mountain travellers -->
        <div style="display: flex; align-items: center; gap: 12px; background: #ffffff; border: 1px solid var(--color-neutral-100); padding: 14px 20px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
          <div style="width: 38px; height: 38px; background: #e6f7f0; color: #008060; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--color-primary-navy); line-height: 1.3;">10,000+ happy mountain travellers</span>
        </div>

        <!-- Badge 3: Local Sherpa guides & wilderness cooks -->
        <div style="display: flex; align-items: center; gap: 12px; background: #ffffff; border: 1px solid var(--color-neutral-100); padding: 14px 20px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
          <div style="width: 38px; height: 38px; background: #e6f7f0; color: #008060; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
          </div>
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--color-primary-navy); line-height: 1.3;">Local Sherpa guides &amp; wilderness cooks</span>
        </div>

        <!-- Badge 4: No hidden fees & guaranteed departures -->
        <div style="display: flex; align-items: center; gap: 12px; background: #ffffff; border: 1px solid var(--color-neutral-100); padding: 14px 20px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
          <div style="width: 38px; height: 38px; background: #e6f7f0; color: #008060; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
          </div>
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--color-primary-navy); line-height: 1.3;">No hidden fees &amp; guaranteed departures</span>
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

    <!-- Main Two-Column Layout Wrapper -->
    <section class="section-padding" style="padding-top: 10px; padding-bottom: 60px;" data-trek-details-wrapper data-trek-key="dhaulagiri_circuit">
      <div class="container trek-detail-layout" style="display: grid; grid-template-columns: 2.2fr 1fr; gap: 40px; align-items: start;">
        <div style="min-width: 0;">
  `;
}

module.exports = { getHeroAndSubnav };
