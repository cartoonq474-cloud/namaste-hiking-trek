const fs = require('fs');

const content = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const voidTags = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 
  'link', 'meta', 'param', 'source', 'track', 'wbr', '!doctype'
]);

// Track line numbers
const lines = content.split('\n');
const stack = [];

for (let lineNum = 1; lineNum <= lines.length; lineNum++) {
  const line = lines[lineNum - 1];
  // naive tag extraction for non-comment lines
  const cleanLine = line.replace(/<!--[\s\S]*?-->/g, '');
  const tagRegex = /<\/?([a-zA-Z0-9\-]+)(\s+[^>]*)?\/?>/g;
  let match;
  while ((match = tagRegex.exec(cleanLine)) !== null) {
    const rawTag = match[0];
    const tagName = match[1].toLowerCase();
    if (voidTags.has(tagName) || rawTag.endsWith('/>')) continue;

    if (rawTag.startsWith('</')) {
      if (stack.length === 0) {
        console.log(`Line ${lineNum}: Unexpected </${tagName}>`);
      } else {
        const top = stack.pop();
        if (top.tagName !== tagName) {
          console.log(`Line ${lineNum}: Mismatch! Opened <${top.tagName}> at line ${top.lineNum}, but found </${tagName}>`);
        }
      }
    } else {
      stack.push({ tagName, lineNum });
    }
  }
}

if (stack.length > 0) {
  console.log('Remaining unclosed tags:');
  stack.forEach(s => console.log(`  <${s.tagName}> at line ${s.lineNum}`));
}
