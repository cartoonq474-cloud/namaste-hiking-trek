const fs = require('fs');

const s5 = fs.readFileSync('scratch/current_khopra_section5.html', 'utf8');

const cards = s5.split('<div class="detail-accordion-card"');
for (let i = 1; i < cards.length; i++) {
  const card = cards[i];
  const idMatch = card.match(/data-detail-id="([^"]+)"/);
  const titleMatch = card.match(/<h3[^>]*>([^<]+)<\/h3>/);
  const id = idMatch ? idMatch[1] : '';
  const title = titleMatch ? titleMatch[1] : '';
  const innerPos = card.indexOf('class="detail-content-inner"');
  const innerEnd = card.indexOf('</div>\n                  </div>\n                </div>', innerPos);
  const content = innerPos !== -1 ? card.substring(innerPos + 29, innerEnd !== -1 ? innerEnd : innerPos + 600).trim() : '';
  
  console.log(`\n================ CARD ${i}: [${id}] ${title} ================\n`);
  console.log(content.substring(0, 500) + '...');
}
