const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('index.html', 'utf8');

const s9 = content.substring(content.indexOf('<section id="reviews-section"'), content.indexOf('<!-- Section 3: Himalayan Trekking Experience Gallery -->'));
const s14 = content.substring(content.indexOf('<section id="homepage-reviews"'), content.indexOf('<!-- Section 4.5: Resources Related to Himalayan Trekking'));

function checkImages(html, label) {
  console.log(`\n--- Images in ${label} ---`);
  const imgRegex = /src="([^"]+)"/g;
  let m;
  const imgs = [];
  while ((m = imgRegex.exec(html)) !== null) {
    imgs.push(m[1]);
  }
  const bgRegex = /url\(['"]?([^'")]+)['"]?\)/g;
  while ((m = bgRegex.exec(html)) !== null) {
    imgs.push(m[1]);
  }
  
  const unique = [...new Set(imgs)];
  console.log(`Total unique image references: ${unique.length}`);
  unique.forEach(src => {
    if (src.startsWith('http')) {
      console.log(`  [External HTTP]: ${src.substring(0, 70)}...`);
    } else {
      const localPath = path.join(__dirname, '..', src.replace(/^\//, ''));
      const exists = fs.existsSync(localPath);
      console.log(`  [Local ${exists ? 'EXISTS' : 'MISSING'}]: ${src}`);
    }
  });
}

checkImages(s9, 'Section 9 (#reviews-section)');
checkImages(s14, 'Section 14 (#homepage-reviews)');
