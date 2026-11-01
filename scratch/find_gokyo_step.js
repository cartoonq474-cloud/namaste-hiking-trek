const fs = require('fs');

const path = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(path, 'utf8').split('\n');

lines.forEach((line, idx) => {
  if (line.includes('upgrade_16_gokyo_guides.js')) {
    console.log(`Mention of upgrade_16_gokyo_guides.js at line ${idx}`);
  }
});
