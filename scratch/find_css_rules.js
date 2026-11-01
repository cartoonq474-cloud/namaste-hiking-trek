const fs = require('fs');

const indexCss = fs.readFileSync('index.css', 'utf8');

function findRules(query) {
  const idx = indexCss.indexOf(query);
  if (idx !== -1) {
    console.log(`=== Found ${query} ===`);
    console.log(indexCss.slice(Math.max(0, idx - 50), idx + 800));
  } else {
    console.log(`NOT found: ${query}`);
  }
}

findRules('.sidebar-booking-card');
findRules('.faq-layout-container');
findRules('.faq-item');
findRules('.faq-category-content');
