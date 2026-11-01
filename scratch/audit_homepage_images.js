const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Find all <img> tags
const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
console.log(`Total <img> tags in index.html: ${imgMatches.length}\n`);

imgMatches.forEach((m, idx) => {
  const alt = m[0].match(/alt=["']([^"']*)["']/i);
  const src = m[1];
  console.log(`${idx + 1}. src="${src}" | alt="${alt ? alt[1] : ''}"`);
});

// Also find inline style background-image
const bgMatches = [...html.matchAll(/background(?:-image)?:\s*url\(['"]?([^'")]+)['"]?\)/gi)];
console.log(`\nTotal background-image URLs in index.html: ${bgMatches.length}`);
bgMatches.forEach((m, idx) => {
  console.log(`${idx + 1}. bg: ${m[1]}`);
});
