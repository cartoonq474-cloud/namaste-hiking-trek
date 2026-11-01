const fs = require('fs');

const s5 = fs.readFileSync('scratch/current_khopra_section5.html', 'utf8');

const cards = s5.split('<div class="detail-accordion-card"');
const data = [];

for (let i = 1; i < cards.length; i++) {
  const card = cards[i];
  const idMatch = card.match(/data-detail-id="([^"]+)"/);
  const titleMatch = card.match(/<h3[^>]*>([^<]+)<\/h3>/);
  const id = idMatch ? idMatch[1] : '';
  const title = titleMatch ? titleMatch[1] : '';
  
  // Extract icon
  const iconMatch = card.match(/<div class="detail-icon-container">([\s\S]*?)<div class="detail-check-bubble">/);
  const iconSvg = iconMatch ? iconMatch[1].trim() : '';

  data.push({ id, title, iconSvg });
}

fs.writeFileSync('scratch/khopra_detail_icons.json', JSON.stringify(data, null, 2), 'utf8');
console.log('Saved 21 icons and titles to scratch/khopra_detail_icons.json');
