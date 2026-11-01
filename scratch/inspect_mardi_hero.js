const fs = require('fs');
const content = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const heroMatch = content.match(/<section class="trek-hero"[\s\S]*?<\/section>/i);
if (heroMatch) {
  console.log('--- TREK HERO ---');
  console.log(heroMatch[0].slice(0, 1500));
}

const keyFactsMatch = content.match(/<section[^>]*key-facts[\s\S]*?<\/section>/i) || content.match(/<div[^>]*key-facts[\s\S]*?<\/div>/i);
if (keyFactsMatch) {
  console.log('--- KEY FACTS ---');
  console.log(keyFactsMatch[0].slice(0, 1500));
} else {
  // search for "Key Trip Facts" or similar
  const idx = content.indexOf('Key Trip Facts');
  if (idx !== -1) {
    console.log('--- AROUND KEY TRIP FACTS ---');
    console.log(content.slice(idx - 200, idx + 1000));
  } else {
    console.log('No "Key Trip Facts" found');
  }
}
