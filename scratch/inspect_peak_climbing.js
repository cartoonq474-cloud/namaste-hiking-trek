const fs = require('fs');

const html = fs.readFileSync('peak-climbing-nepal/index.html', 'utf8');

const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
console.log(`peak-climbing-nepal has ${imgMatches.length} images:`);
imgMatches.forEach((m, i) => {
  const alt = m[0].match(/alt=["']([^"']*)["']/i);
  console.log(`${i + 1}. src="${m[1]}" | alt="${alt ? alt[1] : ''}"`);
});
