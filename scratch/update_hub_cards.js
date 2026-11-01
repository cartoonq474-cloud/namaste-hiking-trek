const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// 1. Update everest-region-treks/index.html
const everestHubPath = path.join(rootDir, 'everest-region-treks', 'index.html');
let evContent = fs.readFileSync(everestHubPath, 'utf8');

// Update Card link & duration & price
evContent = evContent.replace(
  /<a href="\.\.\/trek\/gokyo-lakes-and-cho-la-pass\/" style="color: #10B981; font-weight: 700; font-size: 0.9rem; text-decoration: none; display: flex; align-items: center; gap: 4px;">Explore →<\/a>/g,
  '<a href="../trek/everest-base-camp-with-cho-la-pass-trek/" style="color: #10B981; font-weight: 700; font-size: 0.9rem; text-decoration: none; display: flex; align-items: center; gap: 4px;">Explore →</a>'
);

evContent = evContent.replace(
  /"name": "Gokyo Lakes & Cho La Pass Trek", "url": "https:\/\/namastehikingtrek\.com\/trek\/gokyo-lakes-and-cho-la-pass\/"/g,
  '"name": "Everest Base Camp with Cho La Pass Trek", "url": "https://namastehikingtrek.com/trek/everest-base-camp-with-cho-la-pass-trek/"'
);

evContent = evContent.replace(
  /<h3 style="font-size: 1.25rem; color: var\(--color-primary-navy\); margin-bottom: 6px; font-weight: 700;">Cho La Pass & EBC Trek<\/h3>/g,
  '<h3 style="font-size: 1.25rem; color: var(--color-primary-navy); margin-bottom: 6px; font-weight: 700;">Everest Base Camp with Cho La Pass Trek</h3>'
);

// 2. Update nepal-trekking-packages/index.html
const packagesHubPath = path.join(rootDir, 'nepal-trekking-packages', 'index.html');
let packContent = fs.readFileSync(packagesHubPath, 'utf8');

packContent = packContent.replace(
  /<h3 style="font-size: 1.3rem; margin-bottom: 8px;">Gokyo Lakes & Cho La Pass<\/h3>/g,
  '<h3 style="font-size: 1.3rem; margin-bottom: 8px;">Everest Base Camp with Cho La Pass Trek</h3>'
);

packContent = packContent.replace(
  /<a href="\.\.\/trek\/gokyo-lakes-and-cho-la-pass\/" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.9rem;">View Itinerary<\/a>/g,
  '<a href="../trek/everest-base-camp-with-cho-la-pass-trek/" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.9rem;">View Itinerary</a>'
);

packContent = packContent.replace(
  /<span>⏱️ 15 Days<\/span>(\s*<span>.*?<\/span>\s*<span>.*?<\/span>\s*<\/div>\s*<div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var\(--color-neutral-100\); padding-top: 16px;">\s*<div>\s*<span style="font-size: 0.75rem; color: var\(--color-neutral-500\); display: block;">Starting from<\/span>\s*<span style="font-size: 1.25rem; font-weight: 700; color: var\(--color-primary-navy\);>)\$1,450/s,
  '<span>⏱️ 18 Days</span>$1$1,650'
);

// 3. Update index.html
const indexHubPath = path.join(rootDir, 'index.html');
let idxContent = fs.readFileSync(indexHubPath, 'utf8');

idxContent = idxContent.replace(
  /<h3 class="exotic-card-title">Gokyo Lakes & Cho La Pass<\/h3>/g,
  '<h3 class="exotic-card-title">Everest Base Camp with Cho La Pass</h3>'
);

idxContent = idxContent.replace(
  /data-trek-title="Gokyo Lakes & Cho La Pass"/g,
  'data-trek-title="Everest Base Camp with Cho La Pass Trek"'
);

fs.writeFileSync(everestHubPath, evContent, 'utf8');
fs.writeFileSync(packagesHubPath, packContent, 'utf8');
fs.writeFileSync(indexHubPath, idxContent, 'utf8');

console.log('Hub pages and index.html successfully updated!');
