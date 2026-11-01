const fs = require('fs');
const path = require('path');

const srcDir = path.join('trek', 'mera-peak-climbing-trek');
const dstDir = path.join('trek', 'mera-peak-climbing');

if (!fs.existsSync(dstDir)) {
  fs.mkdirSync(dstDir, { recursive: true });
  console.log('Created directory:', dstDir);
}

const srcFile = path.join(srcDir, 'index.html');
const dstFile = path.join(dstDir, 'index.html');

let content = fs.readFileSync(srcFile, 'utf8');

// Update canonical URL and any self-referencing links
content = content.replace(/https:\/\/namastehikingtrek\.com\/trek\/mera-peak-climbing-trek\//g, 'https://namastehikingtrek.com/trek/mera-peak-climbing/');
content = content.replace(/trek\/mera-peak-climbing-trek\//g, 'trek/mera-peak-climbing/');

fs.writeFileSync(dstFile, content, 'utf8');
console.log('Copied and updated index.html to:', dstFile);
console.log('New file size:', fs.statSync(dstFile).size);

