const fs = require('fs');
const content = fs.readFileSync('scratch/gen_everest_section7_12.js', 'utf8');

const secNames = ['section-altitude-profile', 'section-weather', 'section-map', 'section-booking', 'section-reviews', 'section-faqs'];

secNames.forEach(name => {
  const idPos = content.indexOf(`id="${name}"`);
  const start = content.lastIndexOf('<section', idPos);
  const end = content.indexOf('</section>', start);
  const secHtml = content.slice(start, end + 10);
  
  const voidTags = new Set([
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 
    'link', 'meta', 'param', 'source', 'track', 'wbr', '!doctype'
  ]);

  const cleaned = secHtml
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '');

  const tagRegex = /<\/?([a-zA-Z0-9\-]+)(\s+[^>]*)?\/?>/g;
  let match;
  const stack = [];
  let extra = 0;

  while ((match = tagRegex.exec(cleaned)) !== null) {
    const rawTag = match[0];
    const tagName = match[1].toLowerCase();

    if (voidTags.has(tagName) || rawTag.endsWith('/>')) continue;

    if (rawTag.startsWith('</')) {
      if (stack.length === 0) {
        extra++;
      } else {
        stack.pop();
      }
    } else {
      stack.push(tagName);
    }
  }

  console.log(`${name}: ${extra} extra, ${stack.length} unclosed: [${stack.join(', ')}]`);
});
