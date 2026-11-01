const fs = require('fs');
const path = require('path');

const everestHub = path.join(__dirname, '..', 'everest-region-treks', 'index.html');
const content = fs.readFileSync(everestHub, 'utf8');

const cardIdx = content.indexOf('Cho La Pass & EBC Trek');
if (cardIdx !== -1) {
  console.log(content.substring(cardIdx - 400, cardIdx + 1200));
}
