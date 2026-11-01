const fs = require('fs');
const html = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');
const lines = html.split('\n');

lines.forEach((line, idx) => {
  const match = line.match(/src="([^"]+)"/);
  if (match) {
    const src = match[1];
    if (src.startsWith('http')) return;
    let localPath;
    if (src.startsWith('../../')) {
      localPath = src.replace(/^\.\.\/\.\.\//, '');
    } else if (src.startsWith('../')) {
      localPath = src.replace(/^\.\.\//, '');
    } else {
      localPath = 'trek/gokyo-lakes-trek/' + src;
    }
    if (!fs.existsSync(localPath)) {
      console.log(`Line ${idx + 1}: ${src}`);
    }
  }
});
