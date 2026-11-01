const fs = require('fs');

const raw = fs.readFileSync('scratch_last_user_prompt.txt', 'utf8');
const lines = raw.split(/\r?\n/);

for (let i = 0; i < lines.length; i++) {
  if (lines[i].toLowerCase().includes('day 1:') || lines[i].toLowerCase().includes('day 1 -') || lines[i].toLowerCase().includes('day 18:')) {
    console.log(i + ': ' + lines[i]);
  }
}
