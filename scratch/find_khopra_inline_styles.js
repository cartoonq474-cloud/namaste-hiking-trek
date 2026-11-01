const fs = require('fs');

const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const styleMatches = html.match(/<style[\s\S]*?<\/style>/gi) || [];
console.log('Total style tags in Khopra:', styleMatches.length);
styleMatches.forEach((style, idx) => {
  if (style.includes('detail-accordion') || style.includes('detail-content')) {
    console.log(`\n--- Style tag ${idx + 1} contains detail accordion rules: ---`);
    console.log(style);
  }
});
