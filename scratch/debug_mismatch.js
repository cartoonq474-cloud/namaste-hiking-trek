const fs = require('fs');

const content = fs.readFileSync('scratch/test_assembled_page.html', 'utf8');

const voidTags = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 
  'link', 'meta', 'param', 'source', 'track', 'wbr', '!doctype'
]);

const cleanedContent = content
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '');

const tagRegex = /<\/?([a-zA-Z0-9\-]+)(\s+[^>]*)?\/?>/g;
let match;
const stack = [];

while ((match = tagRegex.exec(cleanedContent)) !== null) {
  const rawTag = match[0];
  const tagName = match[1].toLowerCase();

  if (voidTags.has(tagName) || rawTag.endsWith('/>')) {
    continue;
  }

  if (rawTag.startsWith('</')) {
    const top = stack.pop();
    if (top !== tagName) {
      const line = cleanedContent.slice(0, match.index).split('\n').length;
      console.log(`Line ${line}: expected </${top}>, found </${tagName}>`);
      console.log('Surrounding code:');
      console.log(cleanedContent.slice(match.index - 100, match.index + 150));
      break;
    }
  } else {
    stack.push(tagName);
  }
}
