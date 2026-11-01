const fs = require('fs');

const content = fs.readFileSync('scratch/user_everest_view_content.txt', 'utf8');
const lines = content.split('\n');

lines.forEach((l, idx) => {
  if (/highlight/i.test(l)) {
    console.log(`L${idx + 1}: ${l}`);
  }
});
