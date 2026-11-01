const fs = require('fs');

const lines = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8').split('\n');

for (let i = 280; i < 380; i++) {
  if (lines[i]) {
    console.log(`${i + 1}: ${lines[i]}`);
  }
}
