const getSection7to12 = require('./gen_everest_section7_12');
const sec7_12 = getSection7to12();
const faqsSectionEnd = sec7_12.lastIndexOf('</section>');
const content = sec7_12.slice(0, faqsSectionEnd + 10);

const lines = content.split('\n');

const voidTags = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 
  'link', 'meta', 'param', 'source', 'track', 'wbr', '!doctype'
]);

const stack = [];

lines.forEach((line, lineIdx) => {
  const cleaned = line
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '');

  const tagRegex = /<\/?([a-zA-Z0-9\-]+)(\s+[^>]*)?\/?>/g;
  let match;

  while ((match = tagRegex.exec(cleaned)) !== null) {
    const rawTag = match[0];
    const tagName = match[1].toLowerCase();

    if (voidTags.has(tagName) || rawTag.endsWith('/>')) continue;

    if (rawTag.startsWith('</')) {
      if (stack.length === 0) {
        console.log(`Line ${lineIdx + 1}: Unexpected extra closing </${tagName}>: ${line.trim()}`);
      } else {
        const top = stack.pop();
        if (top !== tagName) {
          console.log(`Line ${lineIdx + 1}: Mismatch: expected </${top}>, found </${tagName}>: ${line.trim()}`);
        }
      }
    } else {
      stack.push(tagName);
    }
  }
});
