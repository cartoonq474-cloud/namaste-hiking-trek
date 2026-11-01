const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

const lines = css.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('trekking-gallery') || l.includes('gallery-card') || l.includes('card-tall') || l.includes('gallery-stacked-col')) {
    console.log(`L${idx + 1}: ${l}`);
  }
});
