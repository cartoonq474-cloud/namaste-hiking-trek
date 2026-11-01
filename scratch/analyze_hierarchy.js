const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const headingRegex = /<(h[1-6])\b([^>]*)>([\s\S]*?)<\/\1>/gi;
let m;
const headings = [];
while ((m = headingRegex.exec(html)) !== null) {
  headings.push({
    level: parseInt(m[1].substring(1)),
    tag: m[1].toLowerCase(),
    attrs: m[2],
    text: m[3].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '),
    index: m.index
  });
}

console.log('Total headings:', headings.length);

// Analyze hierarchy jumps
let lastLevel = 0;
const jumps = [];
headings.forEach((h, i) => {
  if (lastLevel > 0 && h.level > lastLevel + 1) {
    jumps.push({
      index: i + 1,
      from: `H${lastLevel}`,
      to: `H${h.level}`,
      text: h.text,
      pos: h.index
    });
  }
  lastLevel = h.level;
});

console.log(`\nFound ${jumps.length} hierarchy jumps (skipping levels):`);
jumps.forEach(j => {
  console.log(`Item #${j.index}: Jumped from ${j.from} to ${j.to} -> "${j.text.substring(0, 50)}"`);
});
