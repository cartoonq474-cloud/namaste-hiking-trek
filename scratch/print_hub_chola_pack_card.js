const fs = require('fs');
const path = require('path');

const packagesHub = path.join(__dirname, '..', 'nepal-trekking-packages', 'index.html');
const content = fs.readFileSync(packagesHub, 'utf8');

const cholaCardIdx = content.indexOf('Gokyo Lakes & Cho La Pass');
if (cholaCardIdx !== -1) {
  console.log(content.substring(cholaCardIdx - 200, cholaCardIdx + 800));
}
