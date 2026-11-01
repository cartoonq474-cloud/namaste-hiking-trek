const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const styleTags = [...ebc.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)];
console.log(`Found ${styleTags.length} <style> tags in EBC.`);

styleTags.forEach((s, i) => {
  console.log(`\n--- Style Tag ${i + 1} (${s[1].length} chars) ---`);
  // Print first 200 chars and any class names found
  const classes = [...s[1].matchAll(/\.([a-zA-Z0-9_-]+)/g)].map(m => m[1]);
  const unique = [...new Set(classes)].slice(0, 15);
  console.log('Classes defined:', unique.join(', '));
});
