const fs = require('fs');
const content = fs.readFileSync('scratch/three_passes_content.txt', 'utf8');

const sIdx = content.indexOf('Everest Three High Passes Trek FAQs');
const eIdx = content.indexOf('</USER_REQUEST>', sIdx);
const faqText = content.slice(sIdx + 'Everest Three High Passes Trek FAQs'.length, eIdx).trim();

const lines = faqText.split(/\r?\n/);
const faqs = [];
let currentQ = null;
let currentA = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;
  
  if (line.endsWith('?')) {
    if (currentQ) {
      faqs.push({ q: currentQ, a: currentA.join(' ').trim() });
    }
    currentQ = line;
    currentA = [];
  } else {
    currentA.push(line);
  }
}
if (currentQ) {
  faqs.push({ q: currentQ, a: currentA.join(' ').trim() });
}

console.log('Total FAQs parsed:', faqs.length);
faqs.forEach((f, idx) => {
  console.log(`${idx + 1}. ${f.q}`);
  console.log(`   Answer snippet: ${f.a.slice(0, 100)}...`);
});

fs.writeFileSync('scratch/parsed_faqs.json', JSON.stringify(faqs, null, 2), 'utf8');

