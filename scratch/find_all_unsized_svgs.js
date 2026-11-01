const fs = require('fs');
const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

const svgs = [...html.matchAll(/<svg([^>]*)>/g)];
console.log('Total SVGs:', svgs.length);

svgs.forEach((m, idx) => {
  const str = m[1];
  const hasW = /width=["']?\d+/i.test(str);
  const hasH = /height=["']?\d+/i.test(str);
  if (!hasW || !hasH) {
    const snippetStart = Math.max(0, m.index - 50);
    const snippetEnd = Math.min(html.length, m.index + 100);
    console.log(`\nSVG #${idx} without explicit size at index ${m.index}:`);
    console.log(html.substring(snippetStart, snippetEnd).trim());
  }
});
