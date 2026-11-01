const fs = require('fs');

const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

console.log('=== HERO & QUICK FACTS ===');
const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
console.log('H1:', h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'none');

// Check gallery
const galleryMatch = html.match(/<div class="gallery-collage"[\s\S]*?<\/div>\s*<\/div>/i);
console.log('Has gallery-collage:', !!galleryMatch);

// Check Itinerary days
const dayMatches = [...html.matchAll(/class="itinerary-card[^"]*"[^>]*data-day="([^"]+)"/g)].map(m => m[1]);
console.log('Itinerary days:', dayMatches);

// Check details / guide cards
const guideCards = [...html.matchAll(/class="detail-accordion-card"[^>]*data-detail-id="([^"]+)"/g)].map(m => m[1]);
console.log('Guide cards count:', guideCards.length, guideCards.slice(0, 10));

// Check FAQ categories
const faqCats = [...html.matchAll(/class="faq-category-btn[^"]*"[^>]*data-category="([^"]+)"/g)].map(m => m[1]);
console.log('FAQ categories:', faqCats);

// Check available images in images/treks/manaslu-circuit
const imgDir = 'images/treks/manaslu-circuit';
if (fs.existsSync(imgDir)) {
  const imgs = fs.readdirSync(imgDir);
  console.log(`Found ${imgs.length} images in ${imgDir}:`, imgs.slice(0, 8));
} else {
  console.log('Image dir not found:', imgDir);
}
