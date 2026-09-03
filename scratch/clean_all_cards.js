const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const trekDir = path.join(projectRoot, 'trek');

let updatedCount = 0;

if (fs.existsSync(trekDir)) {
  fs.readdirSync(trekDir).forEach(folder => {
    const p = path.join(trekDir, folder, 'index.html');
    if (fs.existsSync(p)) {
      let content = fs.readFileSync(p, 'utf8');
      if (content.includes('<div class="sidebar-booking-card" style=')) {
        content = content.replace(/<div class="sidebar-booking-card" style="[^"]*">/, '<div class="sidebar-booking-card">');
        fs.writeFileSync(p, content, 'utf8');
        updatedCount++;
      }
    }
  });
}

console.log(`Cleaned .sidebar-booking-card in ${updatedCount} trek pages!`);
