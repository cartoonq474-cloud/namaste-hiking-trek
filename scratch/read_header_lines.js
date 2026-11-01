const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const lines = indexHtml.split('\n');

for (let i = 0; i < 460; i++) {
  if (lines[i].includes('header') || lines[i].includes('nav') || lines[i].includes('Everest')) {
    console.log(`Line ${i + 1}: ${lines[i].trim().substring(0, 100)}`);
  }
}
