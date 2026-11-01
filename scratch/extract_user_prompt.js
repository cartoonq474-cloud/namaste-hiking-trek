const fs = require('fs');

const logPath = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\logs\\transcript_full.jsonl';

const lines = fs.readFileSync(logPath, 'utf8').trim().split('\n');

for (let i = lines.length - 1; i >= 0; i--) {
  const step = JSON.parse(lines[i]);
  if (step.type === 'USER_INPUT') {
    console.log('Found USER_INPUT at index', i);
    console.log('Length:', step.content.length);
    // Let's write the entire prompt content to scratch/kanchenjunga_prompt.txt for easy reference
    fs.writeFileSync('scratch/kanchenjunga_prompt.txt', step.content, 'utf8');
    console.log('Saved user prompt to scratch/kanchenjunga_prompt.txt');
    break;
  }
}
