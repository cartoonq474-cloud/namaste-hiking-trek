const fs = require('fs');
const lines = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8').split('\n');
lines.forEach((l, i) => {
  if (l.includes('class="trek-sidebar') || l.includes('class="trek-details-sidebar') || l.includes('class="sidebar-booking') || l.includes('booking-card')) {
    console.log('Line ' + (i+1) + ': ' + l.trim());
  }
});
