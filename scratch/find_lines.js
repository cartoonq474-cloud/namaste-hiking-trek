const fs = require('fs');
const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('id="section-includes"') || line.includes('<!-- Includes Heading -->') || line.includes('<!-- Excludes Heading -->')) {
    console.log(`Line ${i + 1}: ${line.trim()}`);
  }
});
