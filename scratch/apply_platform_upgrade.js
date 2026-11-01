const fs = require('fs');

const indexPath = 'index.html';
const content = fs.readFileSync(indexPath, 'utf8');

const targetStart = '<div id="platform-reviews" class="review-tab-panel">';
const targetEnd = '<!-- Section 3: Himalayan Trekking Experience Gallery -->';

const idxStart = content.indexOf(targetStart);
if (idxStart === -1) {
  console.error('Could not find platform reviews start');
  process.exit(1);
}

// Find closing </section> of reviews section before Section 3
const sectionCloseIdx = content.indexOf('</section>', idxStart);
const upgradedPlatform = fs.readFileSync('scratch/upgraded_platform_reviews.html', 'utf8');

// Replace from targetStart up to sectionCloseIdx
// Notice upgradedPlatform includes the <div id="platform-reviews" ...> up to its closing </div>
const updatedIndex = content.substring(0, idxStart) + upgradedPlatform + '\n\n      </div>\n    ' + content.substring(sectionCloseIdx);

fs.writeFileSync('index.html', updatedIndex, 'utf8');
console.log('Successfully updated index.html with upgraded platform reviews!');
