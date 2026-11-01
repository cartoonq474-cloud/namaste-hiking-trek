const fs = require('fs');

const files = [
  'regions.html',
  'reviews.html',
  'tours-nepal/index.html',
  'tours.html',
  'travel-info.html',
  'treks.html'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    console.log(`=== ${f} ===`);
    console.log('Has nav:', content.includes('<nav'));
    console.log('Has everest:', content.includes('everest'));
    if (content.includes('<nav')) {
      const navStart = content.indexOf('<nav');
      const navEnd = content.indexOf('</nav>', navStart);
      console.log('Nav excerpt:', content.substring(navStart, navStart + 300).replace(/\s+/g, ' '));
    }
  }
});
