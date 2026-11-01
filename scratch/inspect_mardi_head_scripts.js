const fs = require('fs');
const content = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const head = content.match(/<head[\s\S]*?<\/head>/i)[0];
const scripts = [...head.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)];
scripts.forEach((s, i) => {
  console.log(`Script ${i}:`, s[0].slice(0, 150));
});
