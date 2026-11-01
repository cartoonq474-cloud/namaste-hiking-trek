const fs = require('fs');

const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

// What if we insert </div> before <!-- Sticky Booking Sidebar Column -->
const needle = '        <!-- Sticky Booking Sidebar Column -->';
const fixed = act.replace(needle, '        </div>\n\n' + needle);

// Check open/close divs in fixed
const openDivs = (fixed.match(/<div(\s|>)/gi) || []).length;
const closeDivs = (fixed.match(/<\/div>/gi) || []).length;
console.log('Fixed Open divs:', openDivs, 'Close divs:', closeDivs, 'Diff:', openDivs - closeDivs);

// Now trace stack on fixed
const lines = fixed.split('\n');
let stack = [];
let errors = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const tags = [...line.matchAll(/<\/?([a-zA-Z0-9\-]+)(?:\s+[^>]*)?>/g)];
  for (const match of tags) {
    const rawTag = match[0];
    const tagName = match[1].toLowerCase();
    
    if (['img', 'input', 'br', 'hr', 'meta', 'link', 'source', 'path', 'polygon', 'circle', 'svg'].includes(tagName)) {
      continue;
    }
    if (rawTag.endsWith('/>')) {
      continue;
    }
    
    if (rawTag.startsWith('</')) {
      if (stack.length > 0 && stack[stack.length - 1].tag === tagName) {
        stack.pop();
      } else {
        errors.push({
          line: i + 1,
          tag: tagName,
          top: stack.length > 0 ? stack[stack.length - 1].tag : null,
          topLine: stack.length > 0 ? stack[stack.length - 1].line : null
        });
      }
    } else {
      const isCard = rawTag.includes('sidebar-booking-card');
      const isGrid = rawTag.includes('grid-template-columns');
      const isMinCol = rawTag.includes('min-width: 0');
      const idMatch = rawTag.match(/id="([^"]+)"/);
      const classMatch = rawTag.match(/class="([^"]+)"/);
      stack.push({
        line: i + 1,
        tag: tagName,
        id: idMatch ? idMatch[1] : null,
        className: classMatch ? classMatch[1] : null,
        isCard,
        isGrid,
        isMinCol
      });
      if (isCard) {
        console.log(`\n=== FIXED STACK WHEN sidebar-booking-card IS OPENED (Line ${i + 1}) ===`);
        console.log(JSON.stringify(stack, null, 2));
      }
    }
  }
}

console.log('\nMismatched tag errors:', errors);
console.log('Unclosed tags remaining in stack:', stack.length);
if (stack.length > 0) {
  console.log('Unclosed tags:', stack);
}
