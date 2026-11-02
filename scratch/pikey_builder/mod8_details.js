// Module 8: Section 6 - Read before you book, Pikey Peak Trek (21 Canonical Guides)
function getDetailsSection() {
  return `
        <!-- Section 6: Trip Details & Essential Logistics -->
        <section id="section-details" class="trek-detail-section">
          <style>
            #section-details .detail-accordion-card {
              background: #ffffff;
              border: 1px solid #e2e8f0;
              border-radius: 16px;
              overflow: hidden;
              transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
              margin-bottom: 14px;
            }
            #section-details .detail-accordion-card:hover {
              border-color: #cbd5e1;
              box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
              transform: translateY(-2px);
            }
            #section-details .detail-accordion-card.active {
              border-color: var(--color-copper-orange);
              box-shadow: 0 8px 24px rgba(194, 65, 12, 0.08);
            }
            #section-details .detail-accordion-header {
              padding: 20px 24px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              cursor: pointer;
              background: #ffffff;
              user-select: none;
            }
            #section-details .detail-accordion-card.active .detail-accordion-header {
              background: #fffaf5;
              border-bottom: 1px solid #fed7aa;
            }
            #section-details .detail-accordion-header-left {
              display: flex;
              align-items: center;
              gap: 16px;
              flex: 1;
            }
            #section-details .detail-icon-container {
              position: relative;
              width: 44px;
              height: 44px;
              background: #fff7ed;
              color: var(--color-copper-orange);
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
            }
            #section-details .detail-check-bubble {
              position: absolute;
              top: -4px;
              right: -4px;
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background: #10b981;
              color: #ffffff;
              display: none;
              align-items: center;
              justify-content: center;
            }
            #section-details .detail-accordion-card.read .detail-check-bubble {
              display: flex;
            }
            #section-details .detail-header-info {
              display: flex;
              flex-direction: column;
              gap: 4px;
            }
            #section-details .detail-meta-row {
              display: flex;
              align-items: center;
              gap: 8px;
            }
            #section-details .detail-badge-pill {
              font-size: 0.72rem;
              font-weight: 800;
              letter-spacing: 0.05em;
              text-transform: uppercase;
              background: #f1f5f9;
              color: #475569;
              padding: 2px 8px;
              border-radius: 6px;
            }
            #section-details .detail-read-time {
              font-size: 0.78rem;
              color: #64748b;
              font-weight: 500;
            }
            #section-details .detail-accordion-title {
              margin: 0;
              font-size: 1.12rem;
              font-weight: 700;
              color: var(--color-primary-navy);
              line-height: 1.4;
            }
            #section-details .detail-accordion-chevron {
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: #f8fafc;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #64748b;
              transition: transform 0.25s ease;
              flex-shrink: 0;
            }
            #section-details .detail-accordion-card.active .detail-accordion-chevron {
              transform: rotate(180deg);
              color: var(--color-copper-orange);
              background: #fff7ed;
            }
            #section-details .detail-accordion-content-inner {
              padding: 24px;
              font-size: 0.98rem;
              line-height: 1.7;
              color: #334155;
            }
            .guide-search-input {
              width: 100%;
              padding: 12px 18px 12px 42px;
              border: 1px solid #cbd5e1;
              border-radius: 10px;
              font-size: 0.95rem;
              outline: none;
              transition: border-color 0.2s;
            }
            .guide-search-input:focus {
              border-color: var(--color-copper-orange);
            }
            .guide-filter-pill {
              padding: 8px 16px;
              border-radius: 20px;
              font-size: 0.86rem;
              font-weight: 600;
              border: 1px solid #cbd5e1;
              background: #ffffff;
              color: #475569;
              cursor: pointer;
              transition: all 0.2s;
            }
            .guide-filter-pill:hover {
              border-color: #94a3b8;
              color: #0f172a;
            }
            .guide-filter-pill.active {
              background: var(--color-copper-orange);
              border-color: var(--color-copper-orange);
              color: #ffffff;
            }
          </style>

          <div class="details-section-container">
            <!-- Header with Title and Copper Line -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 20px;">
              <div>
                <h2 class="trek-section-title" style="margin-bottom: 6px; text-align: left;">Read before you book, Pikey Peak Trek</h2>
                <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px;"></div>
              </div>

              <!-- Interactive Progress Tracker Badge -->
              <div class="details-progress-wrapper" style="display: flex; align-items: center; gap: 14px; background: #ffffff; border: 1px solid #e2e8f0; padding: 10px 18px; border-radius: 30px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
                <div class="details-progress-ring-box" style="position: relative; width: 44px; height: 44px;">
                  <svg width="44" height="44" style="transform: rotate(-90deg);">
                    <circle class="details-progress-ring-bg" r="18" cx="22" cy="22" stroke="#e2e8f0" stroke-width="3.5" fill="none"></circle>
                    <circle class="details-progress-ring-bar" r="18" cx="22" cy="22" stroke="var(--color-copper-orange)" stroke-width="3.5" fill="none" stroke-dasharray="113.1" stroke-dashoffset="113.1" style="transition: stroke-dashoffset 0.4s ease;"></circle>
                  </svg>
                </div>
                <div class="details-progress-text-box" style="display: flex; flex-direction: column;">
                  <strong style="font-size: 0.95rem; color: var(--color-primary-navy);"><span class="details-progress-count">0/21 read</span></strong>
                  <span class="details-progress-status" style="font-size: 0.78rem; color: #64748b; font-weight: 500;">Nice start — keep going</span>
                </div>
              </div>
            </div>

            <p style="color: var(--color-neutral-600); font-size: 1.05rem; margin-bottom: 22px;">
              Essential operational, medical, and cultural insights curated by our mountain expedition leaders to prepare you for the Pikey Peak trail.
            </p>

            <!-- Search Bar & Filters -->
            <div style="margin-bottom: 24px;">
              <div style="position: relative; margin-bottom: 14px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2.5" style="position: absolute; left: 14px; top: 14px;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="text" id="guide-search-input" class="guide-search-input" placeholder="Search guides (e.g., Dhap, sunrise, permits, Diamox, food, cash, fitness)..." oninput="const q = this.value.toLowerCase().trim(); const cards = document.querySelectorAll('.detail-accordion-card'); cards.forEach(c => { const text = c.textContent.toLowerCase(); c.style.display = text.includes(q) ? 'block' : 'none'; });">
              </div>

              <!-- Filter Pills & Expand All Button -->
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                <div style="display: flex; gap: 8px; flex-wrap: wrap;" id="guide-filter-pills">
                  <button type="button" class="guide-filter-pill active" onclick="document.querySelectorAll('.guide-filter-pill').forEach(b => b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.detail-accordion-card').forEach(c => c.style.display = 'block');">All Guides (21)</button>
                  <button type="button" class="guide-filter-pill" onclick="document.querySelectorAll('.guide-filter-pill').forEach(b => b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.detail-accordion-card').forEach(c => c.style.display = c.getAttribute('data-guide-category') === 'route' ? 'block' : 'none');">Route &amp; Mountain (6)</button>
                  <button type="button" class="guide-filter-pill" onclick="document.querySelectorAll('.guide-filter-pill').forEach(b => b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.detail-accordion-card').forEach(c => c.style.display = c.getAttribute('data-guide-category') === 'lodging' ? 'block' : 'none');">Lodging &amp; Food (5)</button>
                  <button type="button" class="guide-filter-pill" onclick="document.querySelectorAll('.guide-filter-pill').forEach(b => b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.detail-accordion-card').forEach(c => c.style.display = c.getAttribute('data-guide-category') === 'health' ? 'block' : 'none');">Health &amp; Altitude (5)</button>
                  <button type="button" class="guide-filter-pill" onclick="document.querySelectorAll('.guide-filter-pill').forEach(b => b.classList.remove('active')); this.classList.add('active'); document.querySelectorAll('.detail-accordion-card').forEach(c => c.style.display = c.getAttribute('data-guide-category') === 'logistics' ? 'block' : 'none');">Logistics, Culture &amp; Costs (5)</button>
                </div>

                <button type="button" class="btn btn-outline" id="toggle-all-guides-btn" onclick="const cards = document.querySelectorAll('#section-details .detail-accordion-card'); const isExpanded = this.getAttribute('data-expanded') === 'true'; cards.forEach(card => { const content = card.querySelector('.detail-accordion-content'); if (isExpanded) { card.classList.remove('active'); if (content) { content.style.display = 'none'; content.style.maxHeight = ''; } } else { card.classList.add('active'); card.classList.add('read'); if (content) { content.style.display = 'block'; content.style.maxHeight = content.scrollHeight + 'px'; } } }); this.setAttribute('data-expanded', isExpanded ? 'false' : 'true'); this.textContent = isExpanded ? 'Expand All Guides' : 'Collapse All Guides';" data-expanded="false" style="padding: 6px 14px; font-size: 0.84rem; font-weight: 700; border-radius: 8px;">
                  Expand All Guides
                </button>
              </div>
            </div>

            <!-- Guides Accordion Container (21 Cards) -->
            <div class="guides-accordion-container detail-accordion-list">

            <!-- Guide: pikey-guide-1 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-1" data-detail-id="pikey-guide-1" data-guide-category="route">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">ROUTE LOGISTICS</span>
                      <span class="detail-read-time">4 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">1. Overland Journey Logistics: Kathmandu to Dhap Bazaar via BP Highway</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>The standard Pikey Peak Trek begins with a scenic overland journey rather than a domestic mountain flight. Departing early in the morning from Kathmandu, we travel southeast along the smooth, Japanese-engineered <strong>BP Highway</strong> (Banepa–Bardibas Highway), winding through the mid-hills parallel to the Sun Koshi River.</p>
      <p>After crossing the river at Ghurmi, the route climbs north through Okhaldhunga into the Solukhumbu district, reaching the high ridge settlement of <strong>Dhap Bazaar (2,850 m)</strong>. The journey covers approximately 240 km and takes 7 to 9 hours depending on mountain traffic and seasonal road conditions.</p>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Key Overland Advantages:</strong>
        <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.6;">
          <li><strong>Zero Flight Delay Risk:</strong> Completely unaffected by Lukla cloud cover, wind shears, or runway closures.</li>
          <li><strong>Comfortable 4WD Transportation:</strong> Private Mahindra Scorpio 4WD jeeps with seasoned mountain chauffeurs.</li>
          <li><strong>Natural Acclimatization:</strong> A gradual transition from Kathmandu's 1,400 m to Dhap's 2,850 m over the course of a full travel day.</li>
        </ul>
      </div>
      <p style="margin-bottom: 0;">Rest stops are scheduled at riverfront roadside restaurants for clean lunch breaks (fresh dal bhat, seasonal curry, and tea). Salleri pickup or drop-off is a separately agreed variation, while Phaplu serves as the default return hub.</p>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-2 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-2" data-detail-id="pikey-guide-2" data-guide-category="route">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">ELEVATION GAIN</span>
                      <span class="detail-read-time">4 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">2. Dhap to Jhapre & Base Camp Ridge Progression (Elevation & Trail Profile)</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>Once on foot from Dhap Bazaar, the trail follows rolling mountain ridgelines that separate the Dudh Koshi and Likhu Khola valleys. The walking progression is deliberate and steady:</p>
      <ul style="margin: 10px 0 16px 20px; line-height: 1.7; color: #334155;">
        <li><strong>Day 2 (Dhap to Jhapre - 2,820 m):</strong> Approx. 13 km, 4–5 hours. Gentle ascents and descents along dirt roads and quiet pine forest paths, with early views of Numbur Himal.</li>
        <li><strong>Day 3 (Jhapre to Pikey Peak Base Camp - 3,640 m):</strong> Approx. 12 km, 5–6 hours. An elevation gain of 820 m through ancient rhododendron and fir groves, past high yak pastures (kharkas) to the open saddle below Pikey Peak.</li>
      </ul>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Pacing Strategy:</strong>
        <p style="margin: 0; color: #334155; line-height: 1.6;">The climb between Jhapre and Base Camp represents the largest single jump in sleeping altitude (+820 m). Maintain a conservative, conversational walking rhythm (<em>"bistari, bistari"</em>) to ensure your red blood cell count adapts comfortably without altitude stress.</p>
      </div>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-3 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-3" data-detail-id="pikey-guide-3" data-guide-category="route">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">SUMMIT HIGHLIGHT</span>
                      <span class="detail-read-time">5 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">3. Pikey Peak Summit Ascent Strategy: Pre-Dawn Sunrise at 4,065 m</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>The pre-dawn summit push to Pikey Peak (4,065 m / 13,336 ft) is the undisputed climax of this expedition. We wake between <strong>4:15 AM and 4:45 AM</strong> depending on the month, drink hot black tea or ginger tea in the dining hall, and commence walking under headlamp illumination.</p>
      <p>The trail ascends grassy open slopes and a rocky ridgeline for approximately <strong>425 vertical meters</strong> over 1.5 to 2 hours. The trail is non-technical with no exposed drop-offs or scrambles, but early morning temperatures often dip between <strong>-5°C and -10°C</strong> in autumn and spring with brisk wind chill.</p>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Summit Morning Checklist:</strong>
        <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.6;">
          <li><strong>Layering:</strong> Thermal base layer + fleece + windproof down jacket (800-fill).</li>
          <li><strong>Extremities:</strong> Thermal beanie covering ears, windproof ski gloves or mittens, neck buff.</li>
          <li><strong>Gear:</strong> Headlamp with fresh lithium batteries (keep phone/camera batteries inside an inner pocket close to body heat).</li>
          <li><strong>Hydration:</strong> Thermal flask with 0.75–1.0 L of hot water; water bladder hoses will freeze in sub-zero predawn winds.</li>
        </ul>
      </div>
      <p style="margin-bottom: 0;">Reaching the prayer-flag-draped summit cairn before the sun breaks over the eastern horizon rewards you with one of the greatest natural panoramas on Earth.</p>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-4 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-4" data-detail-id="pikey-guide-4" data-guide-category="route">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">MOUNTAIN VIEWS</span>
                      <span class="detail-read-time">3 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">4. 360-Degree Himalayan Panorama: Hillary's Favorite Viewpoint</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>Sir Edmund Hillary famously stated that Pikey Peak was his favorite viewpoint in all of Nepal—even surpassing the celebrated Kala Patthar. Because Pikey Peak sits slightly south of the main Himalayan wall, you enjoy an unobstructed, panoramic perspective of the entire central and eastern Himalaya across more than 300 kilometers.</p>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Major Peaks Visible from Pikey Peak (4,065 m):</strong>
        <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.6;">
          <li><strong>Six 8,000-Meter Giants:</strong> Mount Everest (8,848 m), Kanchenjunga (8,586 m), Lhotse (8,516 m), Makalu (8,485 m), Cho Oyu (8,188 m), and Manaslu (8,163 m) on ultra-clear mornings.</li>
          <li><strong>Prominent Sacred Peaks:</strong> Numbur Himal (6,958 m, the guardian deity of Solu), Thamserku, Ama Dablam, Dorje Lakpa, and Langtang Lirung.</li>
          <li><strong>Southern Foothills:</strong> Rolling green mid-hills cascading down toward the Gangetic plains.</li>
        </ul>
      </div>
      <p style="margin-bottom: 0;">The morning golden hour lasts approximately 45–60 minutes, providing photographers with magnificent light across dramatic ridgelines and sea-of-clouds inversions in the valleys below.</p>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-5 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-5" data-detail-id="pikey-guide-5" data-guide-category="route">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">TRAIL DESCENT</span>
                      <span class="detail-read-time">4 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">5. Descent Logistics: Jasmane Bhanjyang, Junbesi Village & Phaplu Overland Exit</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>Following the summit sunrise and breakfast, the itinerary descends via two potential trail forks toward <strong>Jasmane Bhanjyang (3,550 m)</strong> or direct forest descents toward <strong>Loding</strong>. From here, the route transitions from high alpine scrub into sheltered rhododendron and oak forests draped in hanging Spanish moss.</p>
      <p>The path leads down to <strong>Junbesi (2,700 m)</strong>, the historic cultural capital of the Solu Sherpa community, nestled in a fertile valley surrounded by terraced apple orchards and historic mani walls. On Day 7, the trek continues along the Junbesi Khola to <strong>Phaplu (2,470 m)</strong>, an easy 4-hour scenic walk with minimal climbing.</p>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Phaplu vs. Salleri Exit Details:</strong>
        <p style="margin: 0; color: #334155; line-height: 1.6;">Phaplu has comfortable modern lodges, a domestic airstrip, and direct road links. Salleri is the Solukhumbu district headquarters located 4 km downhill. The standard package coordinates the overland 4WD return from Phaplu directly back to Kathmandu on Day 8.</p>
      </div>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-6 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-6" data-detail-id="pikey-guide-6" data-guide-category="route">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">ROUTE EXTENSIONS</span>
                      <span class="detail-read-time">3 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">6. Route Variations & Extensions: Dudhkunda Lake & Classic Jiri Trail Detours</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>The standard 9-day Pikey Peak Trek represents an efficient, self-contained circuit. However, for trekkers with additional vacation days, the Solu region offers outstanding extension opportunities:</p>
      <ul style="margin: 10px 0 16px 20px; line-height: 1.7; color: #334155;">
        <li><strong>Dudhkunda Sacred Lake Extension (+3 Days):</strong> A pilgrimage route north from Ringmo into high glacial cirques at the base of Mount Numbur (4,560 m), revered by both Buddhists and Hindus.</li>
        <li><strong>Classic Everest Base Camp Continuation (+10 Days):</strong> Instead of driving back from Phaplu, walk north through Ringmo and Taksindu Pass, crossing the Dudh Koshi at Surke to join the main EBC trail at Phakding or Namche Bazaar without taking any domestic flights.</li>
        <li><strong>Historic Jiri Trekker Approach (+4 Days):</strong> Reverse the route taken by 1950s mountaineering expeditions by hiking westward through Shivalaya to Jiri.</li>
      </ul>
      <p style="margin-bottom: 0;">If you wish to customize your itinerary with these extensions, notify Namaste Hiking Trek at the time of inquiry so permits and logistics can be scheduled accordingly.</p>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-7 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-7" data-detail-id="pikey-guide-7" data-guide-category="lodging">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">ACCOMMODATION</span>
                      <span class="detail-read-time">4 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">7. Teahouse Accommodation Standards along the Lower Solukhumbu Ridge</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>Accommodations along the Pikey Peak trail consist of family-run mountain teahouses and community lodges. Because this region sees significantly fewer crowds than the main Khumbu or Annapurna commercial arteries, lodges retain a warm, unhurried, authentic atmosphere.</p>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Room Standards & Furnishings:</strong>
        <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.6;">
          <li><strong>Twin Sharing:</strong> Rooms feature two single wooden bed frames with 3–4 inch foam mattresses, clean sheets, and pillows.</li>
          <li><strong>Insulation Realities:</strong> Teahouse walls are typically uninsulated plywood or stone. Rooms are cold at night. A four-season sleeping bag (rated to -10°C) is mandatory for comfort at Base Camp.</li>
          <li><strong>Heated Dining Hall:</strong> The dining hall is the social heartbeat of the lodge, heated every evening by a central cast-iron stove fueled by dried wood or yak dung.</li>
          <li><strong>Private Room Policy:</strong> Solo travelers receive private rooms when occupancy permits, though during peak October and April weeks, twin sharing may be necessary at Pikey Base Camp.</li>
        </ul>
      </div>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-8 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-8" data-detail-id="pikey-guide-8" data-guide-category="lodging">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">MEALS & DINING</span>
                      <span class="detail-read-time">4 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">8. Dining & Food Selection: Dal Bhat Power, Sherpa Stew & Mountain Nutrition</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>All meals are prepared fresh in lodge kitchens using organic ingredients grown in local terraced plots. The staple of Himalayan trekking is <strong>Nepali Dal Bhat</strong>—steamed rice, spiced lentil soup, seasonal vegetable curry (tarkari), spinach, and pungent pickles. Lodge hosts gladly serve unlimited free refills of rice and lentils.</p>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Unique Solukhumbu Specialties:</strong>
        <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.6;">
          <li><strong>Riki Kur (Sherpa Potato Pancakes):</strong> Finely grated mountain potatoes cooked on a flat griddle, served with spicy dzo (yak-cow hybrid) cheese and garlic pickle.</li>
          <li><strong>Shakpa (Sherpa Stew):</strong> Hand-pulled wheat dough squares simmered in a piping hot broth of potatoes, dried mountain mushrooms, greens, and fragrant herbs.</li>
          <li><strong>Tsampa Porridge:</strong> Roasted barley flour mixed with warm milk or butter tea—an energizing high-altitude breakfast.</li>
          <li><strong>Fresh Junbesi Apples:</strong> Sweet locally grown apples, freshly baked apple tarts, and dried apple chips in Junbesi village.</li>
        </ul>
      </div>
      <p style="margin-bottom: 0;">Western comfort food options including fried noodles (chowmein), potato-cheese momos, egg fried rice, tomato pasta, and porridge are widely available across all stops.</p>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-9 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-9" data-detail-id="pikey-guide-9" data-guide-category="lodging">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">WATER SAFETY</span>
                      <span class="detail-read-time">3 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">9. Safe Drinking Water Protocols & Plastic-Free Responsible Hydration</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>Staying adequately hydrated (drinking 3 to 4 liters of fluid daily) is the single most effective physiological defense against altitude sickness. However, untreated tap water or stream water in Nepal carries high risks of giardia, amoebic dysentery, and bacterial infection.</p>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Safe Hydration System:</strong>
        <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.6;">
          <li><strong>Boiled Water from Teahouses:</strong> Purchase boiled water every evening at your lodge (NPR 150–250 per liter). Fill your Nalgene bottles before bed and tuck them into your sleeping bag as a hot-water bottle.</li>
          <li><strong>Chemical Purification Tablets:</strong> Chlorine dioxide tablets (Aquatabs or Katadyn Micropur) or iodine drops effectively neutralize all cysts and bacteria with a 30-minute contact time.</li>
          <li><strong>UV Light / Micro-Filters:</strong> Portable SteriPENs or Sawyer Squeeze filters provide fast purification for cold tap water.</li>
          <li><strong>Plastic-Free Initiative:</strong> Single-use plastic bottled water is discouraged to protect fragile mountain ecosystems with no municipal waste processing.</li>
        </ul>
      </div>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-10 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-10" data-detail-id="pikey-guide-10" data-guide-category="lodging">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">HYGIENE & TOILETS</span>
                      <span class="detail-read-time">3 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">10. Bathroom Facilities, Toilet Hygiene & Mountain Sanitation Realities</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>Toilet facilities along the Pikey Peak trail reflect traditional rural Himalayan conditions. Understanding what to expect ensures proper preparation and realistic expectations:</p>
      <ul style="margin: 10px 0 16px 20px; line-height: 1.7; color: #334155;">
        <li><strong>Shared Facilities:</strong> At Dhap, Jhapre, Pikey Base Camp, and Jasmane Bhanjyang, bathrooms are shared among lodge guests located at the end of the hall or in an external outhouse building.</li>
        <li><strong>Squat vs. Western Style:</strong> Higher elevations predominantly feature ceramic Asian-style squat toilets flushed manually using a water bucket and scoop. Junbesi and Phaplu lodges feature Western sit-down toilets.</li>
        <li><strong>Sub-Zero Night Freezes:</strong> In late autumn and winter, flush water tanks and bucket water freeze solid overnight. Guides coordinate warm bucket water in the morning.</li>
      </ul>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Personal Hygiene Packing Essentials:</strong>
        <p style="margin: 0; color: #334155; line-height: 1.6;">Mountain teahouses do not supply toilet paper. Pack 2 full rolls of toilet paper, 2 packs of biodegradable wet wipes, a personal hand sanitizer bottle (minimum 70% alcohol), and small ziplock disposal bags to carry out paper where septic disposal is limited.</p>
      </div>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-11 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-11" data-detail-id="pikey-guide-11" data-guide-category="lodging">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="18" height="12" rx="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">CONNECTIVITY & POWER</span>
                      <span class="detail-read-time">4 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">11. Hot Showers, Electricity, Device Charging & Wi-Fi Connectivity</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>While the lower Solu region enjoys greater infrastructure development than upper alpine passes, power and communications remain subject to mountain weather:</p>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Power & Communications Breakdown:</strong>
        <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.6;">
          <li><strong>Hot Showers:</strong> Gas-heated showers are available in Dhap, Junbesi, and Phaplu for NPR 300–500 ($3–$4 USD). At Pikey Base Camp, bathing is limited to a bucket of hot water or wet wipes due to high altitude and water freezing.</li>
          <li><strong>Device Charging:</strong> Teahouse rooms do not have personal electrical wall outlets. Charging phones, camera batteries, and power banks is managed at the communal dining counter for NPR 200–400 per device. Carrying a 20,000 mAh portable power bank is strongly advised.</li>
          <li><strong>Cellular Coverage:</strong> Nepal Telecom (NTC) and Ncell provide intermittent 3G/4G connectivity along exposed ridges from Dhap to Jhapre, and reliable signal in Junbesi and Phaplu. Base Camp has weak to zero mobile signal.</li>
          <li><strong>Teahouse Wi-Fi:</strong> Available in Junbesi and Phaplu lodges (sometimes for a nominal NPR 200 fee or included with room). Expect basic messaging speeds rather than streaming bandwidth.</li>
        </ul>
      </div>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-12 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-12" data-detail-id="pikey-guide-12" data-guide-category="health">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-6"></path></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">FITNESS RATING</span>
                      <span class="detail-read-time">4 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">12. Trek Difficulty Breakdown & Realistic Physical Fitness Baseline</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>The Pikey Peak Trek is officially graded as <strong>Moderate</strong>. It is markedly less demanding than extreme high-pass treks such as the Everest Three Passes (5,535 m) or Annapurna Circuit (5,416 m), making it one of the premier introductory trekking experiences in the Himalayas.</p>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Key Difficulty Indicators:</strong>
        <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.6;">
          <li><strong>Daily Walking Hours:</strong> 4 to 6 hours per day at an easy, steady pace (summit day is 6–7 hours including descent).</li>
          <li><strong>Daily Distance:</strong> 9 to 15 kilometers (5.5 to 9.5 miles) per day on well-defined village and ridge paths.</li>
          <li><strong>Terrain Type:</strong> Packed dirt paths, forest soil with tree roots, stone-paved stairs, and open grassy ridge slopes. No technical climbing, glacier travel, or ropes required.</li>
          <li><strong>Summit Altitude:</strong> 4,065 meters (13,336 feet). While challenging due to reduced atmospheric oxygen (approx. 62% of sea level), you spend only 1–2 hours at the summit before descending to comfortable sleeping altitudes.</li>
        </ul>
      </div>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-13 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-13" data-detail-id="pikey-guide-13" data-guide-category="health">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">TRAINING PLAN</span>
                      <span class="detail-read-time">5 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">13. Cardiovascular Conditioning, Stair Training & 8-Week Physical Prep</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>While marathon-runner fitness is unnecessary, building cardiovascular stamina and leg endurance will significantly heighten your enjoyment of the mountain vistas. We recommend initiating a focused <strong>6 to 8-week physical conditioning program</strong> prior to departure.</p>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Recommended 8-Week Training Regimen:</strong>
        <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.6;">
          <li><strong>Aerobic Base (3x Weekly):</strong> 40–50 minutes of brisk hiking, cycling, rowing, or swimming at a conversational heart rate (Zone 2).</li>
          <li><strong>Stair & Incline Work (2x Weekly):</strong> Climb stairwells or use a stairmaster machine for 30–45 minutes wearing a 5–7 kg weighted daypack. This mimics the stone stairs prevalent in Nepalese hill trails.</li>
          <li><strong>Leg Strength & Core (2x Weekly):</strong> Bodyweight squats, walking lunges, calf raises, step-ups, and planks to protect knee joints during sustained descents.</li>
          <li><strong>Weekend Practice Hikes:</strong> 3–5 hour outdoor trail walks in your broken-in trekking boots with your actual daypack to prevent trail blisters.</li>
        </ul>
      </div>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-14 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-14" data-detail-id="pikey-guide-14" data-guide-category="health">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">ALTITUDE SAFETY</span>
                      <span class="detail-read-time">5 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">14. Altitude Acclimatization Curve & Acute Mountain Sickness (AMS) Prevention</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>Acute Mountain Sickness (AMS) can affect anyone above 2,500 meters regardless of physical fitness, age, or past athletic background. Understanding how your body acclimatizes ensures early recognition and prompt remediation:</p>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Altitude Milestones & Risk Analysis:</strong>
        <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.6;">
          <li><strong>Dhap (2,850 m):</strong> Moderate altitude; mild headache or shortness of breath on stairs is normal on Day 1.</li>
          <li><strong>Jhapre (2,820 m):</strong> A stable contour night allowing the respiratory system to normalize.</li>
          <li><strong>Pikey Base Camp (3,640 m):</strong> High altitude sleep; pulse oximeter readings typically drop to 82%–88% SpO2. Guides check vitals twice daily.</li>
          <li><strong>Pikey Peak Summit (4,065 m):</strong> Daytime summit outing. You immediately descend to Jasmane Bhanjyang (3,550 m) and Junbesi (2,700 m), adhering strictly to the golden rule: <em>"Climb high, sleep low."</em></li>
        </ul>
      </div>
      <p style="margin-bottom: 0;">Report any persistent throbbing headache, loss of appetite, dizziness, or nausea to your guide immediately. Rest, hydration, and immediate descent to lower elevations are the definitive cure for high altitude symptoms.</p>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-15 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-15" data-detail-id="pikey-guide-15" data-guide-category="health">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">MEDICAL KIT</span>
                      <span class="detail-read-time">4 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">15. Diamox (Acetazolamide) Protocols & Personal Medical Kit Checklist</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p><strong>Diamox (Acetazolamide)</strong> is a carbonic anhydrase inhibitor that acidifies the blood, stimulating your brain's respiratory center to inhale deeper and faster during sleep, thereby accelerating natural altitude acclimatization.</p>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Diamox Protocol Guidelines:</strong>
        <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.6;">
          <li><strong>Dosage:</strong> Standard prophylactic dose is 125 mg taken twice daily, starting 24 hours prior to ascending above 2,800 m (at Dhap Bazaar) and continuing through the summit day.</li>
          <li><strong>Common Side Effects:</strong> Harmless tingling sensations (paresthesia) in fingers, toes, and face; increased urination; altered taste of carbonated beverages.</li>
          <li><strong>Contraindication:</strong> Do not take Diamox if you have a known allergy to sulfa-based medications. Always consult your personal physician before departure.</li>
        </ul>
      </div>
      <p style="margin-bottom: 0;"><strong>Personal Medical Kit:</strong> Pack ibuprofen/paracetamol, throat lozenges (for dry mountain cough), blister treatment (moleskin/Leukotape), rehydration electrolyte salts, Imodium, Pepto-Bismol, and broad-spectrum antibiotics (Azithromycin or Ciprofloxacin) prescribed by your travel doctor.</p>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-16 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-16" data-detail-id="pikey-guide-16" data-guide-category="health">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">EMERGENCY PROTOCOLS</span>
                      <span class="detail-read-time">4 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">16. Emergency Protocols, Wilderness First Aid & Helicopter Evacuation Logistics</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>Namaste Hiking Trek operates with stringent safety and risk mitigation protocols. Every group is led by a government-licensed, wilderness first-aid-certified mountain guide equipped with a comprehensive medical trauma kit and pulse oximeter.</p>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Emergency Evacuation Architecture:</strong>
        <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.6;">
          <li><strong>Rapid Ground Descent:</strong> For non-life-threatening altitude or gastrointestinal distress, our guides accompany you immediately downhill toward Jhapre or Junbesi, where air pressure increases rapidly.</li>
          <li><strong>Road Ambulance Access:</strong> Unlike the upper Khumbu, the Solu region has road access up to Dhap, Salleri, and Phaplu, allowing 4WD evacuation without mandatory helicopter flight costs in manageable situations.</li>
          <li><strong>Helicopter Rescue Evacuation:</strong> In the rare event of acute severe medical emergencies (HAPE, HACE, or major trauma), our Kathmandu operations desk coordinates immediate charter helicopter dispatch from Kathmandu to Phaplu or open ridge helipads.</li>
          <li><strong>Insurance Requirement:</strong> All clients must hold travel insurance policy coverage explicitly valid up to 4,500 m elevation with direct-billing emergency helicopter extraction.</li>
        </ul>
      </div>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-17 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-17" data-detail-id="pikey-guide-17" data-guide-category="logistics">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">OFFICIAL PERMITS</span>
                      <span class="detail-read-time">3 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">17. Permits & Government Checkpoints: Solukhumbu Local Area & TIMS Card</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>Entering the lower Solukhumbu region requires official government trekking authorization. All necessary permits are fully organized, processed, and funded by Namaste Hiking Trek as part of your comprehensive package:</p>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Required Permits & Documentation:</strong>
        <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.6;">
          <li><strong>Solukhumbu Rural Municipality Local Area Permit:</strong> NPR 3,000 (~$25 USD) per foreign trekker, registered at the local district border entry post.</li>
          <li><strong>Trekkers' Information Management System (TIMS) Card:</strong> NPR 2,000 (~$17 USD) issued by TAAN/Nepal Tourism Board for traveler safety tracking.</li>
          <li><strong>Gaurishankar Conservation Area Permit (GCAP):</strong> Required only if entering via the western Shivalaya/Kinja road border (NPR 3,000).</li>
          <li><strong>Required Documents from You:</strong> Clear digital copy of your valid passport (minimum 6 months validity) and 2 passport-size photographs submitted upon trip confirmation.</li>
        </ul>
      </div>
      <p style="margin-bottom: 0;">Our guides carry all official paperwork and handle routine police and checkpoint inspections at Dhap, Junbesi, and Phaplu seamlessly.</p>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-18 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-18" data-detail-id="pikey-guide-18" data-guide-category="logistics">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">BEST SEASONS</span>
                      <span class="detail-read-time">4 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">18. Seasonal Weather Breakdown: Spring Rhododendrons vs Autumn Crystal Skies</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>Pikey Peak is a four-season trekking destination with two distinct prime window seasons that offer contrasting Himalayan beauty:</p>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Seasonal Comparison:</strong>
        <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.6;">
          <li><strong>Autumn (Late September to Late November) — Peak Visibility:</strong> Post-monsoon atmospheric washing creates crisp, sapphire-blue skies with mountain visibility exceeding 150 km. Daytime temperatures average 12°C to 18°C; summit night dips to -2°C to -8°C. This is the premier window for photography.</li>
          <li><strong>Spring (March to May) — Floral Spectacle:</strong> Slopes between 2,800 m and 3,600 m burst into vibrant bloom with scarlet, pink, and white rhododendrons, magnolias, and wild orchids. Warmer daytime temperatures (15°C to 20°C); hazy afternoon cloud buildup.</li>
          <li><strong>Winter (December to February) — Solitude & Snow:</strong> Crisp, clear mountain views with zero crowds, but extreme cold at Base Camp (-10°C to -15°C). Snow gaiters and microspikes may be required on the summit ridge.</li>
          <li><strong>Monsoon (June to August):</strong> Heavy cloud cover, rain, leeches in lower forests, and muddy roads. Not recommended for panoramic mountain viewing.</li>
        </ul>
      </div>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-19 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-19" data-detail-id="pikey-guide-19" data-guide-category="logistics">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">SHERPA CULTURE</span>
                      <span class="detail-read-time">4 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">19. Junbesi Village Heritage & Sacred Thupten Chholing Monastery Excursion</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>Beyond its alpine summit, the cultural soul of the Pikey Peak Trek lies in the Solu valleys. Unlike the tourism-commercialized towns of Namche and Lukla, villages like <strong>Jhapre, Junbesi, and Phaplu</strong> remain living centers of Sherpa, Tamang, and Rai agricultural and religious tradition.</p>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Cultural Highlights & Etiquette:</strong>
        <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.6;">
          <li><strong>Thupten Chholing Monastery:</strong> Established in the 1960s by the revered Tibetan lama Trulshik Rinpoche, this secluded mountain gompa houses over 300 monks and nuns practicing Tibetan Nyingma Buddhism. A 2.5-hour side trip from Junbesi allows travelers to observe late-morning puja chanting and butter-lamp rituals.</li>
          <li><strong>Mani Walls & Chortens:</strong> Always walk to the left (clockwise direction) of Buddhist stupas, chortens, and carved mani stone walls as a sign of spiritual respect.</li>
          <li><strong>Photography Protocols:</strong> Always request permission before photographing monks, elderly villagers, or monastery interiors. Flash photography is prohibited inside prayer halls.</li>
        </ul>
      </div>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-20 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-20" data-detail-id="pikey-guide-20" data-guide-category="logistics">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">CURRENCY & CASH</span>
                      <span class="detail-read-time">3 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">20. Trail Budgeting, Cash Management & Complete ATM Unavailability</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>Managing your cash before departing Kathmandu is critical because <strong>there are no operational ATM machines along the trekking trail</strong> between Dhap Bazaar, Jhapre, Base Camp, and Junbesi. While Phaplu and Salleri have bank branches, mountain ATMs are notoriously unreliable due to satellite network dropouts.</p>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Trail Cash Budget Estimates:</strong>
        <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.6;">
          <li><strong>Daily Personal Budget:</strong> We recommend carrying <strong>NPR 2,500 to NPR 3,500 per day</strong> (~$20 to $28 USD per person) in cash for incidentals.</li>
          <li><strong>Out-of-Pocket Expenses:</strong> Hot showers (NPR 300–500), battery charging (NPR 200–400), boiled water refills (NPR 150–250/L), snacks/chocolate/bakery treats, and post-trek celebration beer.</li>
          <li><strong>Currency Exchange:</strong> Exchange foreign currency (USD, EUR, GBP, AUD) into small-denomination Nepalese Rupees (NPR 100, 500, and 1,000 notes) at reputable forex counters in Thamel prior to departure. Teahouse hosts cannot break large foreign bills.</li>
        </ul>
      </div>
    
                </div>
              </div>
            </div>
  

            <!-- Guide: pikey-guide-21 -->
            <div class="detail-accordion-card" id="detail-card-pikey-guide-21" data-detail-id="pikey-guide-21" data-guide-category="logistics">
              <div class="detail-accordion-header">
                <div class="detail-accordion-header-left">
                  <div class="detail-icon-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7.5" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                    <div class="detail-check-bubble">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-header-info">
                    <div class="detail-meta-row">
                      <span class="detail-badge-pill">ETHICAL TREKKING</span>
                      <span class="detail-read-time">4 min read</span>
                    </div>
                    <h3 class="detail-accordion-title">21. Tipping Standards, Ethical Porter Welfare & Luggage Weight Limits</h3>
                  </div>
                </div>
                <div class="detail-accordion-chevron">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="detail-accordion-content" style="display: none;">
                <div class="detail-accordion-content-inner">
                  
      <p>Namaste Hiking Trek is an ethical local Nepali operator committed to fair wages, adequate protective gear, emergency medical insurance, and strict load limits for our field crews in accordance with the International Porter Protection Group (IPPG) guidelines.</p>
      <div class="detail-takeaway-box" style="background: #f8fafc; border-left: 4px solid var(--color-copper-orange); padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 16px 0;">
        <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">Porter Loads & Tipping Culture:</strong>
        <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.6;">
          <li><strong>Porter Duffel Bag Limit:</strong> Maximum <strong>10 to 12 kg (22 to 26 lbs)</strong> per trekker. One porter carries bags for two clients (maximum combined load 22–24 kg). Excess city clothes and luggage are stored securely free of charge at our Kathmandu hotel.</li>
          <li><strong>What You Carry:</strong> A 25–35 liter daypack (5–7 kg) containing your rain shell, warm layer, water bottles, camera, passport, cash, and personal medications.</li>
          <li><strong>Tipping Etiquette:</strong> Tipping is a traditional gesture of appreciation for the tireless work of mountain crews. Recommended group tip pooled among trekkers:
            <ul style="margin: 4px 0 0 16px;">
              <li><strong>Lead Guide:</strong> $12 to $15 USD per day total from the group.</li>
              <li><strong>Porter / Assistant:</strong> $8 to $10 USD per day total from the group.</li>
              <li><strong>Private Driver:</strong> $10 to $15 USD total for the long driving days.</li>
            </ul>
          </li>
        </ul>
      </div>
      <p style="margin-bottom: 0;">Tips are traditionally presented in cash envelopes on the final evening in Phaplu as a celebration of a safe and successful journey.</p>
    
                </div>
              </div>
            </div>
  
            </div>

          </div>
        </section>
`;
}

module.exports = { getDetailsSection };
