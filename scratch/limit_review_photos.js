const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const trekDir = path.join(projectRoot, 'trek');

const targetPhotosMarkup = `<!-- 3 Photo Thumbnails -->
                  <div class="review-photos-grid">
                    <img src="../../images/gallery-peak.jpg" alt="Trek photo 1" class="review-photo-thumb">
                    <img src="../../images/hero-himalayas.jpg" alt="Trek photo 2" class="review-photo-thumb">
                    <img src="../../images/gallery-pass.jpg" alt="Trek photo 3" class="review-photo-thumb">
                  </div>`;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to match <!-- ... Photo Thumbnails Grid --> followed by <div class="review-photos-grid">...</div>
  const gridRegex = /(?:<!--[^-]*Photo Thumbnails[^>]*-->\s*)?<div class="review-photos-grid">[\s\S]*?<\/div>/g;

  if (gridRegex.test(content)) {
    content = content.replace(gridRegex, targetPhotosMarkup);
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

let count = 0;
if (fs.existsSync(trekDir)) {
  fs.readdirSync(trekDir).forEach(folder => {
    const indexPath = path.join(trekDir, folder, 'index.html');
    if (fs.existsSync(indexPath)) {
      if (processFile(indexPath)) {
        console.log(`Updated review photos in: trek/${folder}/index.html`);
        count++;
      }
    }
  });
}

console.log(`Total trek pages updated to 3 non-scrollable review photos: ${count}`);
