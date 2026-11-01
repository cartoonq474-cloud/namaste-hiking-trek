const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'trek', 'everest-base-camp-with-cho-la-pass-trek', 'index.html');
let content = fs.readFileSync(targetFile, 'utf8');

// Fix H1
content = content.replace(
  /<h1 class="trek-hero-title"[^>]*>[\s\S]*?<\/h1>/i,
  '<h1 class="trek-hero-title" style="font-size: 2.8rem; margin-top: 6px; margin-bottom: 8px; color: var(--color-primary-navy);">Everest Base Camp with Cho La Pass Trek</h1>'
);

// Fix Breadcrumbs if needed
content = content.replace(
  /<span>Everest Base Camp Trek<\/span>/g,
  '<span>Everest Base Camp with Cho La Pass Trek</span>'
);

// Fix Hero Meta
content = content.replace(
  /<span class="meta-val">14 Days<\/span>/g,
  '<span class="meta-val">18 Days</span>'
);

content = content.replace(
  /<span class="meta-val">\$1,350 USD<\/span>/g,
  '<span class="meta-val">$1,650 USD</span>'
);

content = content.replace(
  /<span class="meta-val">5,545 m<\/span>/g,
  '<span class="meta-val">5,545 m (Kala Patthar) / 5,420 m (Cho La)</span>'
);

content = content.replace(
  /<span class="meta-val">Moderate<\/span>/g,
  '<span class="meta-val">Strenuous / Alpine Grade 4</span>'
);

// Fix Highlights title
content = content.replace(
  /Everest Base Camp Trek Highlights/g,
  'Everest Base Camp with Cho La Pass Trek Highlights'
);

// Fix Why book title
content = content.replace(
  /Why Book the Everest Base Camp Trek with Namaste Hiking Trek\?/g,
  'Why Book the Everest Base Camp with Cho La Pass Trek with Namaste Hiking Trek?'
);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Fixed H1 and hero stats. New H1:', content.match(/<h1[^>]*>(.*?)<\/h1>/i)?.[1]);
