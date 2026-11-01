const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');

const regex = /<\/?div(?:>|\s+[^>]*>)/gi;
let match;
let depth = 0;
const stack = [];

while ((match = regex.exec(html)) !== null) {
  const isClose = match[0].startsWith('</');
  if (!isClose) {
    stack.push(match.index);
    depth++;
  } else {
    depth--;
    if (depth < 0) {
      console.log('UNMATCHED CLOSING </div> at pos:', match.index);
      console.log('Context:', html.slice(Math.max(0, match.index - 100), Math.min(html.length, match.index + 100)));
      depth = 0; // reset
    } else {
      stack.pop();
    }
  }
}

console.log('Final unclosed opening divs count:', stack.length);
if (stack.length > 0) {
  stack.forEach(pos => console.log('Unclosed div at pos:', pos, html.slice(pos, pos + 80)));
}

