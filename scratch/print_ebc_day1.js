const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const m = content.match(/<div class="itinerary-content"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/i);
if (m) {
  console.log(m[0]);
}
