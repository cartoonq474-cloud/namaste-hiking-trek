const fs = require('fs');
const path = require('path');

// List of files to update
const targetFiles = [
  'about.html',
  'contact.html',
  'blogs.html',
  'custom-plan.html',
  'careers.html',
  'privacy-policy.html',
  'nepal-tour-packages.html',
  'nepal-travel-guide.html',
  'nepal-trekking-packages.html',
  'nepal-visa.html',
  'recommended-medical-kit.html',
  'equipment-checklist.html',
  path.join('annapurna-region-treks', 'index.html'),
  path.join('nepal-trekking-packages', 'index.html'),
  path.join('nepal-travel-guide', 'index.html'),
  path.join('nepal-visa', 'index.html'),
  path.join('recommended-medical-kit', 'index.html'),
  path.join('equipment-checklist', 'index.html'),
  path.join('restricted-area-treks-nepal', 'index.html'),
  path.join('peak-climbing-nepal', 'index.html'),
  path.join('everest-region-treks', 'index.html'),
  path.join('langtang-region-treks', 'index.html'),
  path.join('manaslu-region-treks', 'index.html'),
  path.join('mustang-region-treks', 'index.html'),
  path.join('dolpo-region-treks', 'index.html'),
  path.join('kanchenjunga-region-treks', 'index.html'),
  path.join('makalu-region-treks', 'index.html'),
  path.join('ganesh-himal-region-treks', 'index.html'),
  path.join('rolwaling-region-treks', 'index.html'),
  path.join('trek', 'annapurna-circuit-trek', 'index.html'),
  path.join('trek', 'annapurna-base-camp', 'index.html'),
  path.join('trek', 'annapurna-base-camp-luxury-trek', 'index.html')
];

let updatedCount = 0;

targetFiles.forEach(relPath => {
  if (fs.existsSync(relPath)) {
    let content = fs.readFileSync(relPath, 'utf8');
    let original = content;

    // Replace href="trek/tilicho-lake-trek/" with href="trek/annapurna-circuit-trek-with-tilicho-lake/"
    content = content.replace(/href="trek\/tilicho-lake-trek\/"/g, 'href="trek/annapurna-circuit-trek-with-tilicho-lake/"');
    content = content.replace(/href="\.\.\/tilicho-lake-trek\/"/g, 'href="../annapurna-circuit-trek-with-tilicho-lake/"');
    content = content.replace(/href="\.\.\/\.\.\/trek\/tilicho-lake-trek\/"/g, 'href="../../trek/annapurna-circuit-trek-with-tilicho-lake/"');
    content = content.replace(/href="\/trek\/tilicho-lake-trek\/"/g, 'href="/trek/annapurna-circuit-trek-with-tilicho-lake/"');

    // Also update badge if it says 14 DAYS or 20 DAYS for Tilicho Lake & Annapurna Circuit
    content = content.replace(/(<span>Tilicho Lake & Annapurna Circuit<\/span>\s*<span class="days-badge">)(?:14|20)\s*DAYS(<\/span>)/gi, '$116 DAYS$2');
    content = content.replace(/(<span>Annapurna Circuit with Tilicho Lake<\/span>\s*<span class="days-badge">)(?:14|20)\s*DAYS(<\/span>)/gi, '$116 DAYS$2');

    if (content !== original) {
      fs.writeFileSync(relPath, content, 'utf8');
      console.log(`Updated: ${relPath}`);
      updatedCount++;
    }
  }
});

console.log(`Finished updating ${updatedCount} files.`);
