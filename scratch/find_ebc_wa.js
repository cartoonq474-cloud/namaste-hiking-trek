const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const bannerIdx = ebc.indexOf('wa.me/9779800000000');
if (bannerIdx !== -1) {
  // Let's find earlier occurrences of wa.me
  let idx = 0;
  while ((idx = ebc.indexOf('wa.me/9779800000000', idx)) !== -1) {
    console.log(`wa.me at ${idx}:`);
    console.log(ebc.slice(idx - 250, idx + 250));
    console.log('-----------------------------------------');
    idx += 20;
  }
}
