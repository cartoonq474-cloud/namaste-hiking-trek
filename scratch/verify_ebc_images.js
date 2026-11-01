const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Find all images matching trek/everest-base-camp
const localImgMatches = [...html.matchAll(/src=["'](\.\.\/\.\.\/images\/treks\/[^"']+)["']/gi)];
console.log(`Found ${localImgMatches.length} local trek images in EBC page:`);

let allExist = true;
localImgMatches.forEach((m, i) => {
  const relPath = m[1]; // e.g. ../../images/treks/everest-base-camp/foo.jpg
  // Resolve from trek/everest-base-camp-trek/
  const resolved = path.resolve('trek/everest-base-camp-trek', relPath);
  const exists = fs.existsSync(resolved);
  console.log(` ${i + 1}. ${path.basename(resolved)}: ${exists ? 'EXISTS' : 'MISSING'}`);
  if (!exists) allExist = false;
});

if (allExist) {
  console.log('\nAll local image paths verified to exist on disk!');
} else {
  console.error('\nSome image files were missing!');
  process.exit(1);
}
