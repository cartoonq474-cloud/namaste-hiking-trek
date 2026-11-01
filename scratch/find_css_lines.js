const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');
const lines = css.split('\n');

lines.forEach((l, idx) => {
  if (l.includes('Interactive 3-Tab Review Section') || l.includes('homepage-reviews-section') || l.includes('platform-subtabs-bar')) {
    console.log(`Line ${idx + 1}: ${l}`);
  }
});
