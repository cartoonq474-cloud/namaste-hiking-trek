const fs = require('fs');

const content = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const lines = content.split('\n');

const voidTags = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 
  'link', 'meta', 'param', 'source', 'track', 'wbr', '!doctype'
]);

const stack = [];

for (let lineNum = 2424; lineNum <= 3287; lineNum++) {
  const line = lines[lineNum - 1];
  const cleanLine = line.replace(/<!--[\s\S]*?-->/g, '');
  const tagRegex = /<\/?([a-zA-Z0-9\-]+)(\s+[^>]*)?\/?>/g;
  let match;
  while ((match = tagRegex.exec(cleanLine)) !== null) {
    const rawTag = match[0];
    const tagName = match[1].toLowerCase();
    if (voidTags.has(tagName) || rawTag.endsWith('/>')) continue;

    if (rawTag.startsWith('</')) {
      const top = stack.pop();
      if (!top || top.tagName !== tagName) {
        console.log(`Line ${lineNum}: Mismatch closing </${tagName}>. Top was:`, top);
      }
    } else {
      stack.push({ tagName, lineNum, rawTag: rawTag.substring(0, 30) });
    }
  }
}

console.log('Unclosed tags between 2424 and 3287:', stack);
