const fs = require('fs');
const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

const svgs = [...html.matchAll(/<svg([^>]*)>/g)];
console.log('Total SVG elements:', svgs.length);

const svgsWithoutExplicitSize = [];
const largeSvgs = [];

svgs.forEach((m, i) => {
  const attrs = m[1];
  const widthMatch = attrs.match(/width="([^"]*)"/);
  const heightMatch = attrs.match(/height="([^"]*)"/);
  const classMatch = attrs.match(/class="([^"]*)"/);
  const styleMatch = attrs.match(/style="([^"]*)"/);

  const w = widthMatch ? parseInt(widthMatch[1]) : null;
  const h = heightMatch ? parseInt(heightMatch[1]) : null;

  if (!w && !h) {
    svgsWithoutExplicitSize.push({ index: i, tag: m[0], class: classMatch ? classMatch[1] : 'none', style: styleMatch ? styleMatch[1] : 'none' });
  } else if ((w && w > 48) || (h && h > 48)) {
    largeSvgs.push({ index: i, tag: m[0], width: w, height: h, class: classMatch ? classMatch[1] : 'none' });
  }
});

console.log('SVGs without explicit width/height:', svgsWithoutExplicitSize.length);
if (svgsWithoutExplicitSize.length > 0) {
  console.log('Sample without explicit size:', svgsWithoutExplicitSize.slice(0, 10));
}

console.log('SVGs with width/height > 48px:', largeSvgs.length);
if (largeSvgs.length > 0) {
  console.log('Large SVGs:', largeSvgs);
}
