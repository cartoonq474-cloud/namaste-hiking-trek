const fs = require('fs');
const readline = require('readline');
const file = 'C:/Users/ASUS/.gemini/antigravity-ide/brain/d4913d2a-6e4e-415a-ad99-baf20a459e6e/.system_generated/logs/transcript.jsonl';
const rl = readline.createInterface({ input: fs.createReadStream(file) });
const userInputs = [];
rl.on('line', (line) => {
  try {
    const data = JSON.parse(line);
    if (data.type === 'USER_INPUT') {
      userInputs.push(data.content);
    }
  } catch(e) {}
});
rl.on('close', () => {
  console.log('Total user inputs:', userInputs.length);
  userInputs.slice(-10).forEach((msg, i) => {
    console.log('=== USER MSG ' + i + ' ===');
    console.log(typeof msg === 'string' ? msg.slice(0, 300) : JSON.stringify(msg).slice(0, 300));
  });
});
