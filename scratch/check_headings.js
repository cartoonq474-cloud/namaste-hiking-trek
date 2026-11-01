const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

// Check for any unclosed tags or syntax issues
console.log('Total characters:', content.length);
console.log('Total lines:', content.split('\n').length);

// Check headings hierarchy across the entire homepage
const headings = [];
const hRegex = /<(h[1-6])\b([^>]*)>([\s\S]*?)<\/\1>/gi;
let m;
while ((m = hRegex.exec(content)) !== null) {
  const line = content.substring(0, m.index).split('\n').length;
  const tag = m[1].toLowerCase();
  const text = m[3].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  headings.push({ line, tag, text: text.substring(0, 60) });
}

console.log(`\nFound ${headings.length} headings in index.html.`);
console.log('\nSample headings:');
headings.filter(h => h.tag === 'h1' || h.tag === 'h2').forEach(h => {
  console.log(`Line ${h.line} [${h.tag.toUpperCase()}]: ${h.text}`);
});
