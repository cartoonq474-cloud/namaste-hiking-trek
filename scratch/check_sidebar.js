const fs = require('fs');
const html = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const lines = html.split('\n');
let gridLine = -1;
lines.forEach((l, i) => {
  if (l.includes('grid-template-columns: 2.2fr 1fr')) gridLine = i + 1;
});
console.log('Grid starts at line:', gridLine);

let stack = [];
for (let i = gridLine - 1; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('sidebar-booking-card')) {
    console.log('--- REACHED SIDEBAR BOOKING CARD at line', i + 1, '---');
    console.log('Stack depth:', stack.length);
    stack.forEach(s => console.log('Unclosed at line ' + s.line + ': ' + s.tag + ' -> ' + s.snippet));
    break;
  }

  // Find tags
  const regex = /<\/?([a-zA-Z0-9\-]+)([^>]*)>/g;
  let match;
  while ((match = regex.exec(line)) !== null) {
    const isClose = match[0].startsWith('</');
    const tagName = match[1].toLowerCase();
    const isSelfClosing = match[0].endsWith('/>') || ['img', 'br', 'hr', 'input', 'meta', 'link', 'source'].includes(tagName);
    if (isSelfClosing) continue;

    if (isClose) {
      if (stack.length > 0 && stack[stack.length - 1].tag === tagName) {
        stack.pop();
      } else {
        console.log('Unexpected close tag </' + tagName + '> at line ' + (i + 1) + '. Current top was <' + (stack[stack.length - 1]?.tag) + '> from line ' + (stack[stack.length - 1]?.line));
      }
    } else {
      stack.push({
        tag: tagName,
        line: i + 1,
        snippet: match[0].substring(0, 80).replace(/\s+/g, ' ')
      });
    }
  }
}
