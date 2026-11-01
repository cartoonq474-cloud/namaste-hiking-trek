const fs = require('fs');

const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

// Find all script tags
const scripts = [...gokyo.matchAll(/<script[\s\S]*?<\/script>/gi)].map(m => m[0]);
console.log('Total scripts found:', scripts.length);
scripts.forEach((s, i) => {
  if (s.length > 200) {
    console.log(`Script ${i}: (length ${s.length})`, s.slice(0, 150) + ' ... ' + s.slice(-50));
  } else {
    console.log(`Script ${i}:`, s);
  }
});
