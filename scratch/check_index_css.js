const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');
const lines = css.split('\n');

lines.forEach((l, idx) => {
  if (l.includes('trek-detail-layout') || l.includes('sidebar-booking-card')) {
    console.log(`L${idx + 1}: ${l.trim()}`);
  }
});
