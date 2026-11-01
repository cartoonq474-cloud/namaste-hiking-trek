const fs = require('fs');

const s14 = fs.readFileSync('scratch/s14_dump.html', 'utf8');

// Check the reviews in s14 for google, tripadvisor, trustpilot, facebook
['google', 'tripadvisor', 'trustpilot', 'facebook'].forEach(plat => {
  const match = s14.match(new RegExp(`<div class="platform-reviews-content[^"]*" data-platform="${plat}">[\\s\\S]*?(?=<div class="platform-reviews-content|<\\/div>\\s*<\\/div>\\s*<!-- 02)`));
  if (match) {
    const cards = match[0].match(/<h3 class="platform-card-headline">([^<]+)<\/h3>/g) || [];
    console.log(`\nPlatform [${plat}] has ${cards.length} cards:`);
    cards.forEach(c => console.log('  ', c.replace(/<[^>]+>/g, '').trim()));
  }
});
