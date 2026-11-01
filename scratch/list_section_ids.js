const fs = require('fs');
const refHtml = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

const regex = /<section[^>]*id="([^"]+)"[^>]*>/g;
let m;
while ((m = regex.exec(refHtml)) !== null) {
  console.log(`id="${m[1]}" at index ${m.index}`);
}
