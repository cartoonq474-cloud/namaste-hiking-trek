const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(indexFile, 'utf8');

const cholaIdx = content.indexOf('Gokyo Lakes & Cho La Pass');
if (cholaIdx !== -1) {
  console.log(content.substring(cholaIdx - 300, cholaIdx + 800));
}
