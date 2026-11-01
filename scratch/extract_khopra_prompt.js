const fs = require('fs');

const logPath = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\logs\\transcript_full.jsonl';

const lines = fs.readFileSync(logPath, 'utf8').trim().split('\n');

for (let i = lines.length - 1; i >= 0; i--) {
  try {
    const step = JSON.parse(lines[i]);
    if (step.type === 'USER_INPUT' && typeof step.content === 'string' && step.content.includes('Khopra Ridge Trek')) {
      console.log('Found Khopra USER_INPUT at index', i);
      console.log('Length:', step.content.length);
      fs.writeFileSync('scratch/khopra_prompt.txt', step.content, 'utf8');
      console.log('Saved user prompt to scratch/khopra_prompt.txt');
      break;
    }
  } catch (e) {
    // skip parse errors
  }
}
