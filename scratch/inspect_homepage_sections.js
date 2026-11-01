const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

function showMatches(regex, label) {
  console.log(`\n=== ${label} ===`);
  const matches = [...html.matchAll(regex)];
  matches.forEach((m, i) => {
    console.log(`[${i + 1}] ${m[0].slice(0, 150)}...`);
  });
}

// 1. Destination Ticker Cards
showMatches(/<div class="dest-package-card">[\s\S]*?<\/div>\s*<\/div>/gi, 'Destination Ticker Cards');

// 2. Activity Packages
showMatches(/<div class="act-package-card">[\s\S]*?<\/div>\s*<\/div>/gi, 'Activity Packages');

// 3. Featured Trek Packages
showMatches(/<div class="exotic-trek-card"[\s\S]*?<\/div>\s*<\/div>/gi, 'Featured Trek Packages');
