const fs = require('fs');

const html = fs.readFileSync('peak-climbing-nepal/index.html', 'utf8');

// Find Mera Peak card and any other relevant cards
const meraMatches = [...html.matchAll(/([\s\S]{0,200}Mera Peak[\s\S]{0,300})/gi)];
meraMatches.forEach((m, i) => {
  console.log(`--- Match ${i + 1} ---`);
  console.log(m[0]);
});

// Also check og:image and twitter:image
const og = html.match(/<meta[^>]+property=["']og:image["'][^>]*>/i);
const tw = html.match(/<meta[^>]+name=["']twitter:image["'][^>]*>/i);
console.log('og:image:', og ? og[0] : 'None');
console.log('twitter:image:', tw ? tw[0] : 'None');
