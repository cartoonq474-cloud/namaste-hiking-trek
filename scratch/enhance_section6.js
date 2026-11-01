const fs = require('fs');

let code = fs.readFileSync('scratch/gen_everest_section6_accordions.js', 'utf8');

const searchBar = `          <!-- Guidance Search and Category Filter -->
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 24px;">
            <div style="position: relative; margin-bottom: 12px;">
              <input type="text" id="guidance-search-input" placeholder="Type to search all 21 guide topics (e.g. luggage, altitude, wifi, shower, charging, permits, tips)..." style="width: 100%; padding: 11px 16px 11px 40px; border: 1.5px solid #CBD5E1; border-radius: 8px; font-size: 0.92rem; outline: none; transition: border-color 0.2s; background: #ffffff;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2" style="position: absolute; left: 13px; top: 50%; transform: translateY(-50%);"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                <button type="button" class="guide-filter-btn active" data-guide-filter="all" style="padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 700; background: #008060; color: #ffffff; border: none; cursor: pointer;">All Guides (21)</button>
                <button type="button" class="guide-filter-btn" data-guide-filter="logistics" style="padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; background: #ffffff; color: #475569; border: 1px solid #CBD5E1; cursor: pointer;">Logistics &amp; Flights</button>
                <button type="button" class="guide-filter-btn" data-guide-filter="health" style="padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; background: #ffffff; color: #475569; border: 1px solid #CBD5E1; cursor: pointer;">Health &amp; Altitude</button>
                <button type="button" class="guide-filter-btn" data-guide-filter="teahouse" style="padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; background: #ffffff; color: #475569; border: 1px solid #CBD5E1; cursor: pointer;">Teahouse Living</button>
                <button type="button" class="guide-filter-btn" data-guide-filter="permits" style="padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; background: #ffffff; color: #475569; border: 1px solid #CBD5E1; cursor: pointer;">Permits &amp; Money</button>
              </div>
              <button type="button" id="toggle-all-guidance" style="background: none; border: 1px solid #CBD5E1; color: #0C2B4E; padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 700; cursor: pointer;">Expand All</button>
            </div>
          </div>\n`;

if (!code.includes('guidance-search-input')) {
  code = code.replace('<div class="space-y-4" id="details-accordion-group">', searchBar + '          <div class="space-y-4" id="details-accordion-group">');
  fs.writeFileSync('scratch/gen_everest_section6_accordions.js', code, 'utf8');
  console.log('Successfully inserted search bar into gen_everest_section6_accordions.js');
} else {
  console.log('Search bar already exists');
}
