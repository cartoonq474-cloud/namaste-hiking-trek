const fs = require('fs');

const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const headingRegex = /<(h[1-6])\b([^>]*)>([\s\S]*?)<\/\1>/gi;
let m;
const headings = [];
while ((m = headingRegex.exec(html)) !== null) {
  headings.push({
    tag: m[1].toLowerCase(),
    attrs: m[2],
    text: m[3].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '),
    index: m.index
  });
}

console.log(`Total headings found: ${headings.length}`);
headings.forEach((h, i) => {
  console.log(`${i + 1}. [${h.tag.toUpperCase()}] ${h.text.substring(0, 80)}`);
});
