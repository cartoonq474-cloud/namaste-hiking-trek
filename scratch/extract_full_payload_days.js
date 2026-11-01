const fs = require('fs');

const path = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\steps\\448\\content.md';
const content = fs.readFileSync(path, 'utf8');

const refs = ['33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42'];

const descriptions = {};
refs.forEach(r => {
  // In Next.js RSC payload, lines look like: 34:"..." or "34":"..." or similar
  const pattern1 = new RegExp(`${r}:"([\\s\\S]*?)"`, 'g');
  const pattern2 = new RegExp(`"${r}":"([\\s\\S]*?)"`, 'g');
  
  let match = content.match(new RegExp(`\\n${r}:"([\\s\\S]*?)(?=\\n[0-9a-f]+:|$)`));
  if (!match) {
    match = content.match(new RegExp(`"${r}":"([\\s\\S]*?)(?=",[0-9a-f]+:|$)`));
  }
  
  if (match) {
    descriptions[r] = match[1].replace(/\\"/g, '"').replace(/\\u003c/g, '<').replace(/\\u003e/g, '>').replace(/\\n/g, '\n');
    console.log(`Found ref $${r}: length = ${descriptions[r].length}`);
  } else {
    console.log(`Ref $${r} not matched by newline regex, searching index of ${r}:"`);
    const idx = content.indexOf(`${r}:"`);
    if (idx !== -1) {
      console.log(`Index of ${r}:" is ${idx}`);
      console.log(content.slice(idx, idx + 200));
    }
  }
});

fs.writeFileSync('scratch/competitor_descriptions.json', JSON.stringify(descriptions, null, 2), 'utf8');
