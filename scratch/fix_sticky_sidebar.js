const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace position: sticky; top: 100px or top: 155px with top: 150px; z-index: 80;
  let updated = false;

  // Pattern 1: style with top: 100px
  if (content.includes('position: sticky; top: 100px;')) {
    content = content.replaceAll('position: sticky; top: 100px;', 'position: sticky; top: 150px; z-index: 80;');
    updated = true;
  }

  // Pattern 2: style with top: 155px
  if (content.includes('position: sticky; top: 155px;')) {
    content = content.replaceAll('position: sticky; top: 155px;', 'position: sticky; top: 150px; z-index: 80;');
    updated = true;
  }

  // Pattern 3: remove overflow: hidden from sidebar-booking-card container if present with sticky
  if (content.includes('position: relative; overflow: hidden;')) {
    content = content.replaceAll('position: relative; overflow: hidden;', 'position: relative;');
    updated = true;
  }

  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

let count = 0;

// Process tour pages
const tourDir = path.join(projectRoot, 'tour');
if (fs.existsSync(tourDir)) {
  fs.readdirSync(tourDir).forEach(folder => {
    const p = path.join(tourDir, folder, 'index.html');
    if (fs.existsSync(p)) {
      if (updateFile(p)) {
        console.log(`Updated sticky offset in: tour/${folder}/index.html`);
        count++;
      }
    }
  });
}

// Process trek pages
const trekDir = path.join(projectRoot, 'trek');
if (fs.existsSync(trekDir)) {
  fs.readdirSync(trekDir).forEach(folder => {
    const p = path.join(trekDir, folder, 'index.html');
    if (fs.existsSync(p)) {
      if (updateFile(p)) {
        console.log(`Updated sticky offset in: trek/${folder}/index.html`);
        count++;
      }
    }
  });
}

console.log(`Total files updated with position: sticky; top: 150px; z-index: 80;: ${count}`);
