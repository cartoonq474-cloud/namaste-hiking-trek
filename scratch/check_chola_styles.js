const fs = require('fs');

const chola = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

const styleMatches = chola.match(/<style[^>]*>[\s\S]*?<\/style>/g);
if (styleMatches) {
  console.log('Found style tags:', styleMatches.length);
  styleMatches.forEach((s, i) => {
    console.log(`\n--- Style tag ${i+1} (${s.length} chars) ---`);
    console.log(s.slice(0, 1000));
  });
} else {
  console.log('No style tags found in Cho La Pass');
}
