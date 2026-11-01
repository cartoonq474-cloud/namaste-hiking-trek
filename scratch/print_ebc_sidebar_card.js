const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const cardMatch = ebc.match(/<div class="sidebar-booking-card"[\s\S]*?<\/aside>/i) ||
                  ebc.match(/<div class="sidebar-booking-card"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/i);

if (cardMatch) {
  console.log(cardMatch[0]);
} else {
  const start = ebc.indexOf('sidebar-booking-card');
  console.log(ebc.substring(start - 20, start + 4000));
}
