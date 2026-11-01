const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Subnav
const subnavMatch = ebc.match(/<nav class="trek-sub-nav"[\s\S]*?<\/nav>/i);
if (subnavMatch) {
  console.log('=== EBC SUB-NAV ===');
  console.log(subnavMatch[0]);
}

// Sidebar
const sidebarMatch = ebc.match(/<aside class="trek-sidebar"[\s\S]*?<\/aside>/i);
if (sidebarMatch) {
  console.log('=== EBC SIDEBAR LENGTH ===', sidebarMatch[0].length);
  // Show first 500 chars of sidebar
  console.log(sidebarMatch[0].slice(0, 500));
}

// Related treks section
const relatedMatch = ebc.match(/<section[^>]*class=["'][^"']*related-treks[\s\S]*?<\/section>/i);
console.log('=== HAS RELATED TREKS SECTION ===', !!relatedMatch);
