const fs = require('fs');

function checkFileTags(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`Checking tags for ${filePath}...`);

  const voidTags = new Set([
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 
    'link', 'meta', 'param', 'source', 'track', 'wbr', '!doctype'
  ]);

  const cleaned = content
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '');

  const tagRegex = /<\/?([a-zA-Z0-9\-]+)(\s+[^>]*)?\/?>/g;
  let match;
  const stack = [];
  let line = 1;

  while ((match = tagRegex.exec(cleaned)) !== null) {
    const rawTag = match[0];
    const tagName = match[1].toLowerCase();

    if (voidTags.has(tagName) || rawTag.endsWith('/>')) continue;

    if (rawTag.startsWith('</')) {
      if (stack.length === 0) {
        console.log(`Unexpected closing </${tagName}> at char ${match.index}`);
      } else {
        const top = stack.pop();
        if (top !== tagName) {
          console.log(`Mismatch at char ${match.index}: expected </${top}>, found </${tagName}>`);
          console.log('Surrounding text:', cleaned.slice(Math.max(0, match.index - 100), match.index + 100));
          return;
        }
      }
    } else {
      stack.push(tagName);
    }
  }

  console.log('Unclosed tags remaining:', stack);
}

checkFileTags('scratch/original_git_everest_view.html');
