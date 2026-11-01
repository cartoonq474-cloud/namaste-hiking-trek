const fs = require('fs');
const path = require('path');

const ebcPath = path.join(__dirname, '..', 'trek', 'everest-base-camp-trek', 'index.html');
const outDir = path.join(__dirname, '..', 'trek', 'everest-base-camp-with-cho-la-pass-trek');
const outPath = path.join(outDir, 'index.html');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

let content = fs.readFileSync(ebcPath, 'utf8');

console.log('Original EBC length:', content.length);

// 1. Title and Metas
content = content.replace(
  /<title>.*?<\/title>/i,
  '<title>Everest Base Camp with Cho La Pass Trek (18 Days) — Namaste Hiking Trek</title>'
);

content = content.replace(
  /<meta name="description" content=".*?"\s*\/?>/i,
  '<meta name="description" content="Conquer the ultimate Khumbu loop: Everest Base Camp (5,364m), sunrise from Kala Patthar (5,545m), crossing the icy Cho La Pass (5,420m), and pristine turquoise Gokyo Lakes with certified Sherpa guides.">'
);

content = content.replace(
  /<link rel="canonical" href=".*?"\s*\/?>/i,
  '<link rel="canonical" href="https://namastehikingtrek.com/trek/everest-base-camp-with-cho-la-pass-trek/" />'
);

// Open Graph
content = content.replace(
  /<meta property="og:url" content=".*?"\s*\/?>/i,
  '<meta property="og:url" content="https://namastehikingtrek.com/trek/everest-base-camp-with-cho-la-pass-trek/">'
);

content = content.replace(
  /<meta property="og:title" content=".*?"\s*\/?>/i,
  '<meta property="og:title" content="Everest Base Camp with Cho La Pass Trek (18 Days) — Namaste Hiking Trek">'
);

content = content.replace(
  /<meta property="og:description" content=".*?"\s*\/?>/i,
  '<meta property="og:description" content="Conquer the ultimate Khumbu loop: Everest Base Camp (5,364m), sunrise from Kala Patthar (5,545m), crossing the icy Cho La Pass (5,420m), and pristine turquoise Gokyo Lakes with certified Sherpa guides.">'
);

content = content.replace(
  /<meta property="og:image" content=".*?"\s*\/?>/i,
  '<meta property="og:image" content="https://namastehikingtrek.com/images/treks/everest-cho-la-pass/everest-cho-la-pass-ama-dablam-mountain-view-08.jpg">'
);

// Twitter
content = content.replace(
  /<meta name="twitter:title" content=".*?"\s*\/?>/i,
  '<meta name="twitter:title" content="Everest Base Camp with Cho La Pass Trek (18 Days) — Namaste Hiking Trek">'
);

content = content.replace(
  /<meta name="twitter:description" content=".*?"\s*\/?>/i,
  '<meta name="twitter:description" content="Conquer the ultimate Khumbu loop: Everest Base Camp (5,364m), sunrise from Kala Patthar (5,545m), crossing the icy Cho La Pass (5,420m), and pristine turquoise Gokyo Lakes with certified Sherpa guides.">'
);

content = content.replace(
  /<meta name="twitter:image" content=".*?"\s*\/?>/i,
  '<meta name="twitter:image" content="https://namastehikingtrek.com/images/treks/everest-cho-la-pass/everest-cho-la-pass-ama-dablam-mountain-view-08.jpg">'
);

console.log('Metas updated.');
fs.writeFileSync(outPath, content, 'utf8');
console.log('Wrote initial draft to:', outPath);
