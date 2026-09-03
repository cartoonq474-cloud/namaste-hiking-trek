const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

// Directories to delete
const dirsToDelete = [
  path.join(projectRoot, 'tour', 'lumbini-birthplace-of-buddha-tour'),
  path.join(projectRoot, 'tour', 'bandipur-gorkha-heritage-tour')
];

dirsToDelete.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`Deleted folder: ${path.relative(projectRoot, dir)}`);
  }
});
