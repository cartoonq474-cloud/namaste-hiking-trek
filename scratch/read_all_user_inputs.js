const fs = require('fs');

const path = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\logs\\transcript.jsonl';
if (!fs.existsSync(path)) {
  console.log('Transcript not found at', path);
  process.exit(1);
}

const lines = fs.readFileSync(path, 'utf8').split('\n');
console.log('Total transcript lines:', lines.length);

lines.forEach((line, idx) => {
  if (!line.trim()) return;
  try {
    const obj = JSON.parse(line);
    if (obj.type === 'USER_INPUT') {
      console.log(`\n--- USER INPUT [step ${obj.step_index || idx}] ---`);
      console.log(typeof obj.content === 'string' ? obj.content.substring(0, 300) : JSON.stringify(obj.content).substring(0, 300));
    }
  } catch (e) {}
});
