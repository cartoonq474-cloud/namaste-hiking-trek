const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

// Match all tags
const tagRegex = /<\/?([a-zA-Z0-9_-]+)[^>]*>/g;
let m;
let divStack = [];
let lineNum = 1;
let lastIndex = 0;

const lines = html.split('\n');
function getLine(charIndex) {
  let count = 0;
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count > charIndex) return i + 1;
  }
  return lines.length;
}

let depth = 0;
while ((m = tagRegex.exec(html)) !== null) {
  const fullTag = m[0];
  const tagName = m[1].toLowerCase();
  
  if (tagName === 'div') {
    if (fullTag.startsWith('</')) {
      depth--;
      if (depth < 0) {
        console.log(`EXTRA </div> encountered at line ${getLine(m.index)}:`);
        console.log(html.substring(Math.max(0, m.index - 80), Math.min(html.length, m.index + 80)).replace(/\n/g, ' '));
        depth = 0; // reset
      }
    } else if (!fullTag.endsWith('/>')) {
      depth++;
    }
  }
}

console.log('Final div depth at end of file:', depth);
