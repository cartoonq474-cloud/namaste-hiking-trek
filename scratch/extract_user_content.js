const fs = require('fs');
const readline = require('readline');

const transcriptPath = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\001abaa7-7ed0-4412-a430-1acab0c97bde\\.system_generated\\logs\\transcript_full.jsonl';

if (!fs.existsSync(transcriptPath)) {
  console.log('Transcript file does not exist at:', transcriptPath);
  process.exit(1);
}

const fileStream = fs.createReadStream(transcriptPath);
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

let lastUserContent = '';

rl.on('line', (line) => {
  try {
    const entry = JSON.parse(line);
    if (entry.type === 'USER_INPUT' || entry.source === 'USER_EXPLICIT' || (entry.content && entry.content.includes('I want to update the Content of annapuran circit trek'))) {
      lastUserContent = entry.content;
    }
  } catch (e) {
    // ignore
  }
});

rl.on('close', () => {
  console.log('Finished reading transcript.');
  if (lastUserContent) {
    console.log('Found user content! Length:', lastUserContent.length);
    fs.writeFileSync('scratch/user_annapurna_circuit_content.txt', lastUserContent, 'utf8');
    console.log('Saved to scratch/user_annapurna_circuit_content.txt');
  } else {
    console.log('Could not find matching user message.');
  }
});
