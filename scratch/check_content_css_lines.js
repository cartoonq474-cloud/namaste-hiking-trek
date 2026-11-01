const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

// Find all occurrences of detail-content or detail-accordion-content
const lines = css.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('detail-content') || line.includes('detail-accordion-content')) {
    console.log(`Line ${idx + 1}: ${line}`);
  }
});
