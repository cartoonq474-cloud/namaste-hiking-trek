const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];

imgMatches.slice(0, 47).forEach((m, idx) => {
  const alt = m[0].match(/alt=["']([^"']*)["']/i);
  const src = m[1];
  const pos = m.index;
  const before = html.substring(Math.max(0, pos - 200), pos);
  const titleMatch = before.match(/<h[1-6][^>]*>([^<]+)<\/h[1-6]>/i) ||
                     before.match(/class=["']([^"']+)["']/i);
  const context = titleMatch ? titleMatch[1].trim() : '';
  console.log(`${idx + 1}. [${src.includes('unsplash') ? 'UNSPLASH' : 'LOCAL'}] alt="${alt ? alt[1] : ''}" | context="${context}"`);
});
