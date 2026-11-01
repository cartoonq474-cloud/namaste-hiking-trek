const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const ebcSbIdx = ebcHtml.indexOf('class="sidebar-booking-card"');
if (ebcSbIdx !== -1) {
  // Find the closing of sidebar-booking-card or end of column
  console.log('--- EBC Sidebar Card (first 3000 chars) ---');
  console.log(ebcHtml.slice(ebcSbIdx - 150, ebcSbIdx + 2850));
}
