const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

// We can scan through all open/close tags of div and track depth
const tokens = [];
const regex = /<(\/)?div(\s+[^>]*)?>/gi;
let match;
while ((match = regex.exec(html)) !== null) {
  tokens.push({
    isClose: !!match[1],
    index: match.index,
    fullMatch: match[0]
  });
}

let depth = 0;
for (let i = 0; i < tokens.length; i++) {
  const t = tokens[i];
  if (t.isClose) {
    depth--;
    if (depth < 0) {
      console.log(`Extra close div at index ${t.index}! Surrounding snippet:`);
      console.log(html.slice(Math.max(0, t.index - 150), Math.min(html.length, t.index + 150)));
      depth = 0; // reset
    }
  } else {
    depth++;
  }
}
console.log('Final depth at EOF:', depth);

