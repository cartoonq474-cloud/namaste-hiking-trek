const fs = require('fs');

const path = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(path, 'utf8').split('\n');

lines.forEach((line, idx) => {
  if (!line.trim()) return;
  try {
    const obj = JSON.parse(line);
    if (obj.type === 'USER_INPUT') {
      const text = typeof obj.content === 'string' ? obj.content : JSON.stringify(obj.content);
      if (text.toLowerCase().includes('accord') || text.toLowerCase().includes('read before') || text.toLowerCase().includes('gokyo') || text.toLowerCase().includes('khopra')) {
        console.log(`\n--- USER INPUT [step ${obj.step_index || idx}] ---`);
        console.log(text.substring(0, 400));
      }
    }
  } catch (e) {}
});
