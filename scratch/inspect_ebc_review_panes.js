const fs = require('fs');

const reviews = fs.readFileSync('scratch/ebc_reviews.html', 'utf8');

// Find panes
const panes = [...reviews.matchAll(/<div[^>]*class=["'][^"']*review-pane-content[^"']*["'][^>]*id=["']([^"']+)["'][^>]*>/g)];
console.log('Panes in reviews:', panes.map(m => m[1]));

panes.forEach(m => {
  const paneId = m[1];
  const idx = reviews.indexOf(`id="${paneId}"`);
  console.log(`\n--- PANE: ${paneId} (First 500 chars) ---`);
  console.log(reviews.slice(idx, idx + 500));
});
