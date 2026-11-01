const fs = require('fs');

const treks = [
  'trek/everest-base-camp-trek/index.html',
  'trek/annapurna-circuit-trek/index.html',
  'trek/langtang-valley-trek/index.html',
  'trek/mardi-himal-trek/index.html'
];

treks.forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const m = content.match(/<div class="itinerary-content"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/i);
    console.log('=== ' + f + ' ===');
    if (m) {
      console.log(m[0].substring(0, 700));
    } else {
      console.log('No itinerary-content found');
    }
  }
});
