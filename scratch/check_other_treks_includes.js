const fs = require('fs');
const glob = require('path');

// Check annapurna-circuit-trek, etc.
const sampleFiles = [
  'trek/annapurna-circuit-trek/index.html',
  'trek/annapurna-base-camp/index.html',
  'trek/langtang-valley-trek/index.html',
  'trek/manaslu-circuit-trek/index.html'
];

sampleFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const idx = content.indexOf('id="section-includes"');
    if (idx !== -1) {
      console.log('=== FILE:', file, '===');
      console.log(content.substring(idx, idx + 800));
    }
  }
});
