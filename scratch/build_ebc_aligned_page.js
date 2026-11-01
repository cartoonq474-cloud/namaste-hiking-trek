const fs = require('fs');
const path = require('path');

// 1. Read existing EVT file
const origHtml = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

// 2. Read generated Section 6
const sec6Html = fs.readFileSync(path.join(__dirname, 'test_sec6_ebc.html'), 'utf8');

let html = origHtml;

// 3. Remove scroll-mt-36 from all trek-detail-section tags
html = html.replace(/class="trek-detail-section scroll-mt-36"/g, 'class="trek-detail-section"');

// 4. Align Section 1 Header
const sec1OldHeaderRegex = /<div class="border-b border-gray-200 pb-4 mb-8">\s*<span class="text-emerald-700 text-xs font-bold uppercase tracking-wider">Himalayan Discovery<\/span>\s*<h2 class="text-2xl sm:text-3xl font-heading font-bold text-primary-navy mt-1">\s*Trek Overview: The Essential Khumbu Experience\s*<\/h2>\s*<div class="w-16 h-1 bg-amber-500 rounded-full mt-3"><\/div>\s*<\/div>/;
const sec1NewHeader = `<h2 class="trek-section-title">Trek Overview</h2>`;
html = html.replace(sec1OldHeaderRegex, sec1NewHeader);

// 5. Align Section 2 Header
const sec2OldHeaderRegex = /<div class="border-b border-gray-200 pb-4 mb-8">\s*<span class="text-emerald-700 text-xs font-bold uppercase tracking-wider">Day-by-Day Route<\/span>\s*<h2 class="text-2xl sm:text-3xl font-heading font-bold text-primary-navy mt-1">\s*Everest View Trek Itinerary: Day by Day Details\s*<\/h2>\s*<div class="w-16 h-1 bg-amber-500 rounded-full mt-3"><\/div>\s*<\/div>/;
const sec2NewHeader = `<h2 class="trek-section-title">Everest View Trek Itinerary: Day by Day Details</h2>`;
html = html.replace(sec2OldHeaderRegex, sec2NewHeader);

// 6. Align Section 3 Header
const sec3OldHeaderRegex = /<div class="border-b border-gray-200 pb-4 mb-8">\s*<span class="text-emerald-700 text-xs font-bold uppercase tracking-wider">Package Specifications<\/span>\s*<h2 class="text-2xl sm:text-3xl font-heading font-bold text-primary-navy mt-1">\s*What is Included & Excluded in the Everest View Trek\s*<\/h2>\s*<div class="w-16 h-1 bg-amber-500 rounded-full mt-3"><\/div>\s*<\/div>/;
const sec3NewHeader = `<h2 class="trek-section-title">What is Included & Excluded in the Everest View Trek</h2>`;
html = html.replace(sec3OldHeaderRegex, sec3NewHeader);

// 7. Align Section 4 Header
const sec4OldHeaderRegex = /<div class="border-b border-gray-200 pb-4 mb-8">\s*<span class="text-emerald-700 text-xs font-bold uppercase tracking-wider">Scheduled Departures<\/span>\s*<h2 class="text-2xl sm:text-3xl font-heading font-bold text-primary-navy mt-1">\s*Booking Dates & Availability for Everest View Trek\s*<\/h2>\s*<div class="w-16 h-1 bg-amber-500 rounded-full mt-3"><\/div>\s*<\/div>/;
const sec4NewHeader = `<h2 class="trek-section-title">Booking Dates & Availability for Everest View Trek</h2>`;
html = html.replace(sec4OldHeaderRegex, sec4NewHeader);

// 8. Align Section 5 Header
const sec5OldHeaderRegex = /<div class="border-b border-gray-200 pb-4 mb-8">\s*<span class="text-emerald-700 text-xs font-bold uppercase tracking-wider">Gear Checklist<\/span>\s*<h2 class="text-2xl sm:text-3xl font-heading font-bold text-primary-navy mt-1">\s*Packing List for Everest View Trek\s*<\/h2>\s*<div class="w-16 h-1 bg-amber-500 rounded-full mt-3"><\/div>\s*<\/div>/;
const sec5NewHeader = `<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; gap: 16px; flex-wrap: wrap;">
            <div>
              <h2 class="trek-section-title" style="margin-bottom: 8px;">Packing List for Everest View Trek</h2>
              <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                <span class="itinerary-meta-pill" style="margin-bottom: 0;">
                  <span class="gear-checked-count">0</span> / <span class="gear-total-count">0</span> Packed
                </span>
                <button type="button" id="btn-reset-packing" style="background: none; border: none; color: var(--color-copper-orange); font-size: 0.85rem; font-weight: 600; cursor: pointer; text-decoration: underline; padding: 0;">Reset Checklist</button>
              </div>
            </div>
          </div>`;
html = html.replace(sec5OldHeaderRegex, sec5NewHeader);

// 9. Replace Section 6 completely
const sec6StartIdx = html.indexOf('<section id="section-details"');
const sec6EndIdx = html.indexOf('</section>', sec6StartIdx) + 10;
if (sec6StartIdx !== -1 && sec6EndIdx !== -1) {
  html = html.slice(0, sec6StartIdx) + sec6Html + html.slice(sec6EndIdx);
  console.log('Replaced Section 6 successfully');
} else {
  console.error('Could not locate Section 6 boundaries');
}

// 10. Align Section 7 Header and ID
const sec7OldRegex = /<section id="section-altitude"[^>]*>[\s\S]*?<span id="section-altitude-profile"[^>]*><\/span>/;
const sec7New = `<section id="section-altitude-profile" class="trek-detail-section">`;
html = html.replace(sec7OldRegex, sec7New);

// 11. Clean up redundant bottom script for section 6
const guidanceScriptStart = html.indexOf('// 4. Practical Guidance Accordions Engine');
if (guidanceScriptStart !== -1) {
  const gearStart = html.indexOf('// 5. Gear & Packing List Persistence', guidanceScriptStart);
  if (gearStart !== -1) {
    html = html.slice(0, guidanceScriptStart) + html.slice(gearStart);
    console.log('Removed redundant guidance script successfully');
  }
}

fs.writeFileSync(path.join(__dirname, 'test_assembled_page.html'), html, 'utf8');
console.log('Saved test_assembled_page.html successfully. Length:', html.length);
