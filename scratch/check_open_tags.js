const fs = require('fs');

const orig = fs.readFileSync('scratch/original_git_everest_view.html', 'utf8');
const sec1Index = orig.indexOf('<section id="section-overview"');
const topSection = orig.slice(0, sec1Index);

// Check open tags in topSection
const voidTags = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 
  'link', 'meta', 'param', 'source', 'track', 'wbr', '!doctype'
]);

const cleaned = topSection
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '');

const tagRegex = /<\/?([a-zA-Z0-9\-]+)(\s+[^>]*)?\/?>/g;
let match;
const stack = [];

while ((match = tagRegex.exec(cleaned)) !== null) {
  const rawTag = match[0];
  const tagName = match[1].toLowerCase();

  if (voidTags.has(tagName) || rawTag.endsWith('/>')) continue;

  if (rawTag.startsWith('</')) {
    stack.pop();
  } else {
    stack.push(tagName);
  }
}

console.log('Open tags at end of topSection:', stack);
