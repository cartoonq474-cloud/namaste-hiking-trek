const fs = require('fs');
const readline = require('readline');

async function findPrompt() {
  const fileStream = fs.createReadStream('C:/Users/ASUS/.gemini/antigravity-ide/brain/001abaa7-7ed0-4412-a430-1acab0c97bde/.system_generated/logs/transcript_full.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let lineCount = 0;
  for await (const line of rl) {
    lineCount++;
    if (line.includes('I want to update the Content of annapuran circit trek')) {
      console.log(`Found in line ${lineCount}, length: ${line.length}`);
      const obj = JSON.parse(line);
      console.log('Keys:', Object.keys(obj));
      console.log('type:', obj.type, 'source:', obj.source);
      let content = obj.content;
      if (typeof content === 'string') {
        console.log('Content length:', content.length);
        console.log('End of content:\n', content.slice(-500));
        fs.writeFileSync('scratch/full_user_content_extracted.txt', content);
        console.log('Saved to scratch/full_user_content_extracted.txt');
      }
    }
  }
}

findPrompt().catch(console.error);
