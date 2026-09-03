const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

const requiredTourDirs = [
  'tour/kathmandu-cultural-heritage-tour',
  'tour/pokhara-valley-nature-tour',
  'tour/kathmandu-pokhara-chitwan-tour',
  'tour/chitwan-national-park-safari',
  'tour/nagarkot-sunrise-bhaktapur-tour',
  'tour/lumbini-birthplace-of-buddha-tour',
  'tour/nepal-luxury-helicopter-tour',
  'tour/bandipur-gorkha-heritage-tour'
];

let errors = [];

// 1. Verify Tour Package Folders
requiredTourDirs.forEach(dir => {
  const indexPath = path.join(rootDir, dir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    errors.push(`Missing tour package file: ${dir}/index.html`);
  } else {
    const content = fs.readFileSync(indexPath, 'utf8');
    if (!content.includes('schema.org') || !content.includes('TouristTrip')) {
      errors.push(`Missing JSON-LD schema in: ${dir}/index.html`);
    }
    if (!content.includes('open-inquiry-btn')) {
      errors.push(`Missing inquiry modal trigger in: ${dir}/index.html`);
    }
  }
});

// 2. Verify Central Hub Pages
if (!fs.existsSync(path.join(rootDir, 'tours.html'))) {
  errors.push('Missing tours.html hub page');
}
if (!fs.existsSync(path.join(rootDir, 'tours-nepal/index.html'))) {
  errors.push('Missing tours-nepal/index.html hub page');
}

// 3. Count total HTML files
function countHtmlFiles(dirPath, count = 0) {
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (file === 'node_modules' || file === '.git' || file === 'scratch') return;
    if (fs.statSync(fullPath).isDirectory()) {
      count = countHtmlFiles(fullPath, count);
    } else if (file.endsWith('.html')) {
      count++;
    }
  });
  return count;
}

const totalHtmlCount = countHtmlFiles(rootDir);

if (errors.length > 0) {
  console.error('VERIFICATION FAILED:');
  errors.forEach(err => console.error(' - ' + err));
  process.exit(1);
} else {
  console.log(`SUCCESS: All ${requiredTourDirs.length} Tour Packages verified cleanly!`);
  console.log(`Central Tour Hub live at tours.html and tours-nepal/index.html.`);
  console.log(`Total HTML files verified across workspace: ${totalHtmlCount}`);
}
