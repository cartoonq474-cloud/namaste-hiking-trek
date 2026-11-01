const fs = require('fs');

const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
const lines = act.split('\n');

// Let's trace stack of tags between line 718 and 3950
let stack = [];
for (let i = 718; i < lines.length && i <= 3945; i++) {
  const line = lines[i];
  // Match opening tags and closing tags
  const tags = [...line.matchAll(/<\/?([a-zA-Z0-9\-]+)(?:\s+[^>]*)?>/g)];
  for (const match of tags) {
    const rawTag = match[0];
    const tagName = match[1].toLowerCase();
    
    // Ignore self-closing or void tags
    if (['img', 'input', 'br', 'hr', 'meta', 'link', 'source', 'path', 'polygon', 'circle', 'svg'].includes(tagName)) {
      continue;
    }
    if (rawTag.endsWith('/>')) {
      continue;
    }
    
    if (rawTag.startsWith('</')) {
      // Closing tag
      if (stack.length > 0 && stack[stack.length - 1].tag === tagName) {
        stack.pop();
      } else {
        // Mismatch!
        console.log(`Line ${i}: Mismatched closing tag </${tagName}>. Top of stack was:`, stack[stack.length - 1]);
      }
    } else {
      // Opening tag
      const isCard = rawTag.includes('sidebar-booking-card');
      const isGrid = rawTag.includes('grid-template-columns');
      const isMinCol = rawTag.includes('min-width: 0');
      const idMatch = rawTag.match(/id="([^"]+)"/);
      const classMatch = rawTag.match(/class="([^"]+)"/);
      stack.push({
        line: i,
        tag: tagName,
        id: idMatch ? idMatch[1] : null,
        className: classMatch ? classMatch[1] : null,
        isCard,
        isGrid,
        isMinCol
      });
      if (isCard) {
        console.log(`\n=== STACK WHEN sidebar-booking-card IS OPENED (Line ${i}) ===`);
        console.log(JSON.stringify(stack, null, 2));
      }
    }
  }
}

console.log('\nFinal stack at line 3945:');
console.log(JSON.stringify(stack, null, 2));
