const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.js') || f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('trekking-gallery-container')) {
    console.log(`Found in ${f}`);
  }
});
