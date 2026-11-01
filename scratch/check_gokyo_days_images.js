const fs = require('fs');
const html = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

for (let d = 1; d <= 15; d++) {
  const marker = '<span class="day-label">Day ' + d + ':</span>';
  const idx = html.indexOf(marker);
  if (idx !== -1) {
    const chunk = html.substring(idx, idx + 2500);
    const m = chunk.match(/<img[^>]+src=['"]([^'"]+)['"]/);
    console.log(`Day ${d}:`, m ? m[1] : 'NO IMAGE');
  } else {
    console.log(`Day ${d}: NOT FOUND`);
  }
}
