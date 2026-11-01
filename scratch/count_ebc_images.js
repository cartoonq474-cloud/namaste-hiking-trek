const fs = require('fs');
const files = fs.readdirSync('images/treks/everest-base-camp');
console.log('EBC images count:', files.length);
console.log('Sample EBC images:', files.slice(0, 10));
