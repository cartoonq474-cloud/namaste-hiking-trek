const fs = require('fs');
const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

const svgs = [...html.matchAll(/<svg([^>]*)>/g)];
const list = svgs.map((m, idx) => {
  const attrs = m[1];
  const w = attrs.match(/width="([^"]*)"/)?.[1] || 'none';
  const h = attrs.match(/height="([^"]*)"/)?.[1] || 'none';
  const cls = attrs.match(/class="([^"]*)"/)?.[1] || 'none';
  return { idx, w, h, cls, tag: m[0] };
});

const grouped = {};
list.forEach(item => {
  const key = `${item.cls} (w:${item.w}, h:${item.h})`;
  grouped[key] = (grouped[key] || 0) + 1;
});

console.log('Grouped SVGs by class and size:');
console.log(grouped);
