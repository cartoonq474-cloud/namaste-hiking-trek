const fs = require('fs');

const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');
const svgRegex = /<svg([^>]*)>/g;
let match;
let missingDim = [];
let total = 0;
while ((match = svgRegex.exec(html)) !== null) {
  total++;
  const attrs = match[1];
  const hasW = /width\s*=\s*["'][^"']+["']/i.test(attrs);
  const hasH = /height\s*=\s*["'][^"']+["']/i.test(attrs);
  const classMatch = attrs.match(/class\s*=\s*["']([^"']+)["']/i);
  if (!hasW || !hasH) {
    missingDim.push({ class: classMatch ? classMatch[1] : 'NONE', tag: match[0] });
  }
}
console.log('Total SVGs in Manaslu page:', total);
console.log('SVGs missing width or height:', missingDim.length);
const classCounts = {};
missingDim.forEach(item => {
  classCounts[item.class] = (classCounts[item.class] || 0) + 1;
});
console.log('Missing dimensions by class:', classCounts);
