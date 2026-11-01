const fs = require('fs');

const indexCss = fs.readFileSync('index.css', 'utf8');

const itemIdx = indexCss.indexOf('.faq-item-answer');
if (itemIdx !== -1) {
  console.log('=== .faq-item-answer and .faq-item.active in index.css ===');
  console.log(indexCss.slice(Math.max(0, itemIdx - 200), itemIdx + 600));
} else {
  console.log('NOT FOUND: .faq-item-answer');
}
