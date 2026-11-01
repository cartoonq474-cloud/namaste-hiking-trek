const fs = require('fs');

const html = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

console.log('--- Total HTML length:', html.length);

// 1. Check all section IDs
const sections = [...html.matchAll(/<section[^>]*id="([^"]+)"/g)].map(m => m[1]);
console.log('Sections with IDs in ACT:', sections);

// 2. Check sticky sidebar content
const cardMatch = html.match(/<div class="sidebar-booking-card">([\s\S]*?)<\/div>\s*<\/div>/);
if (cardMatch) {
  console.log('Sidebar card inner HTML length:', cardMatch[1].length);
  // Check buttons
  const buttons = [...cardMatch[1].matchAll(/<button[^>]*>([\s\S]*?)<\/button>/g)].map(m => m[1].trim());
  console.log('Buttons inside sidebar:', buttons);
}

// 3. Check if there are any other unclosed tags if we fix the missing </div>
const fixedHtml = html.replace(
  '          </section>\n\n        <!-- Sticky Booking Sidebar Column -->',
  '          </section>\n\n        </div>\n\n        <!-- Sticky Booking Sidebar Column -->'
);

// Count tags in fixedHtml
const voidTags = new Set(['img', 'input', 'br', 'hr', 'meta', 'link', 'source', 'path', 'polygon', 'circle', 'svg', 'rect', 'line', 'polyline', 'ellipse']);
const tagRegex = /<\/?([a-zA-Z0-9\-]+)(?:\s+[^>]*)?>/g;
let stack = [];
let mismatches = [];

let match;
while ((match = tagRegex.exec(fixedHtml)) !== null) {
  const fullTag = match[0];
  const tagName = match[1].toLowerCase();
  
  if (voidTags.has(tagName) || fullTag.endsWith('/>')) continue;
  
  if (fullTag.startsWith('</')) {
    if (stack.length === 0) {
      mismatches.push(`Unexpected closing </${tagName}> at char ${match.index}`);
    } else {
      const last = stack.pop();
      if (last.tagName !== tagName) {
        mismatches.push(`Mismatched </${tagName}> at char ${match.index}, expected </${last.tagName}> opened at char ${last.index}`);
      }
    }
  } else {
    stack.push({ tagName, index: match.index });
  }
}

console.log('Mismatches with the fix:', mismatches.length);
if (mismatches.length > 0) {
  console.log('First 5 mismatches:', mismatches.slice(0, 5));
}
console.log('Unclosed tags remaining in stack:', stack.length);
if (stack.length > 0) {
  console.log('Unclosed tags:', stack);
}
