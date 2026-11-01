const fs = require('fs');

const path = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(path, 'utf8').split('\n');

for (let i = 4090; i < 4150; i++) {
  if (i >= lines.length) break;
  try {
    const obj = JSON.parse(lines[i]);
    if (obj.type === 'USER_INPUT' || obj.type === 'PLANNER_RESPONSE') {
      const c = typeof obj.content === 'string' ? obj.content : JSON.stringify(obj.content);
      if (c && c.length > 20) {
        console.log(`[Line ${i} - ${obj.type}] ${c.substring(0, 250)}\n`);
      }
    }
  } catch (e) {}
}
