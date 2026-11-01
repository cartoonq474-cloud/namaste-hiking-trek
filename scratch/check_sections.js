const fs = require('fs');
const refHtml = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');
const pSlice = refHtml.slice(258819, 582610);
const regex = /<section[^>]*id=["']([^"']+)["']/g;
let m;
const list = [];
while ((m = regex.exec(pSlice)) !== null) {
  list.push(m[1]);
}
console.log('Sections between packing and faqs:', list);
