const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-luxury-trek/index.html', 'utf8');

const regex = /data-trek-key="([^"]+)"/g;
let m;
while ((m = regex.exec(content)) !== null) {
  console.log(`Found data-trek-key="${m[1]}" at index ${m.index}`);
  console.log(content.substring(m.index - 50, m.index + 50));
}
