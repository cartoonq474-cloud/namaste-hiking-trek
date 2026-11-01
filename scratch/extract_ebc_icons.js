const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const regex = /<div class="detail-accordion-card" data-detail-id="([^"]+)">[\s\S]*?<div class="detail-icon-container">([\s\S]*?)<\/div>/g;

let m;
const icons = {};
while ((m = regex.exec(ebc)) !== null) {
  const id = m[1];
  const iconHtml = m[2].trim();
  icons[id] = iconHtml;
}

console.log('Extracted icons for IDs:', Object.keys(icons));
fs.writeFileSync('scratch/ebc_icons.json', JSON.stringify(icons, null, 2), 'utf8');
