const fs = require('fs');

const getSection1Overview = require('./gen_everest_section1_overview');
const getSection2Itinerary = require('./gen_everest_section2_itinerary');
const getSection3to5 = require('./gen_everest_section3_5');
const getSection6Accordions = require('./gen_everest_section6_accordions');
const getSection7to12 = require('./gen_everest_section7_12');

const sec7_12_full = getSection7to12();
const faqsSectionEnd = sec7_12_full.lastIndexOf('</section>');
const leftColContent = sec7_12_full.slice(0, faqsSectionEnd + 10);

const middle = 
  getSection1Overview() +
  getSection2Itinerary() +
  getSection3to5() +
  getSection6Accordions() +
  leftColContent;

// Void tags
const voidTags = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 
  'link', 'meta', 'param', 'source', 'track', 'wbr', '!doctype'
]);

const cleaned = middle
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
    if (stack.length === 0) {
      console.log('Extra closing tag in middle:', rawTag);
    } else {
      const top = stack.pop();
      if (top !== tagName) {
        console.log(`Mismatch in middle: expected </${top}>, found </${tagName}>`);
      }
    }
  } else {
    stack.push(tagName);
  }
}

console.log('Unclosed tags remaining in middle:', stack);
