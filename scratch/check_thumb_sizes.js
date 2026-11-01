const fs = require('fs');

['video-thumb-angelina.png', 'video-thumb-david.png', 'video-thumb-emma.png', 'video-thumb-chad.png'].forEach(f => {
  const p = `images/${f}`;
  if (fs.existsSync(p)) {
    const stat = fs.statSync(p);
    console.log(`${f}: size = ${stat.size} bytes`);
  } else {
    console.log(`${f}: NOT FOUND`);
  }
});
