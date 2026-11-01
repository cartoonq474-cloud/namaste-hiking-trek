const fs = require('fs');

const html = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const matches = [...html.matchAll(/<div class="itinerary-photo-wrapper">([\s\S]*?)<\/div>/gi)];
console.log(`Annapurna Circuit has ${matches.length} itinerary photo wrappers:`);

matches.forEach((m, idx) => {
  const img = m[1].match(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/i) ||
              m[1].match(/<img[^>]+alt=["']([^"']*)["'][^>]*src=["']([^"']+)["'][^>]*>/i);
  if (img) {
    const src = img[1].startsWith('http') ? img[1] : (img[2].startsWith('http') ? img[2] : img[1]);
    const alt = img[1].startsWith('http') ? img[2] : img[1];
    console.log(`${idx + 1}. src="${src.slice(0, 70)}..." | alt="${alt}"`);
  } else {
    console.log(`${idx + 1}. [No img match]: ${m[1]}`);
  }
});
