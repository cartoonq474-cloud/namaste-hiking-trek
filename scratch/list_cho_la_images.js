const fs = require('fs');
const files = fs.readdirSync('images/treks/everest-cho-la-pass');
console.log('Available images in everest-cho-la-pass:');
files.forEach((f, idx) => console.log(`${idx + 1}. ${f}`));

