const fs = require('fs');
const path = require('path');
['images/treks/everest-base-camp', 'images/treks/everest-cho-la-pass'].forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`=== ${dir} ===`);
    fs.readdirSync(dir).forEach(f => console.log('  ' + f));
  }
});
