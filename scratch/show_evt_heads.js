const fs = require('fs');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

function showSectionHead(id) {
  const needle = `id="${id}"`;
  const idx = evt.indexOf(needle);
  if (idx === -1) {
    console.log(`Section ${id} NOT found`);
    return;
  }
  const end = evt.indexOf('>', idx) + 1;
  const chunk = evt.slice(idx - 20, idx + 600);
  console.log(`=== ${id} ===`);
  console.log(chunk);
}

['section-overview', 'section-itinerary', 'section-includes', 'section-dates', 'section-packing', 'section-details', 'section-altitude'].forEach(showSectionHead);
