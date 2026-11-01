const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\steps\\448\\content.md', 'utf8');

// Find all push scripts
const pushRegex = /self\.__next_f\.push\(\[1,"([0-9a-f]+):T([0-9a-f]+),\"\]\)\<\/script\>\<script\>self\.__next_f\.push\(\[1,"([\s\S]*?)(?=\"\]\)\<\/script\>)/g;

const parsedDescriptions = {};
let match;
while ((match = pushRegex.exec(content)) !== null) {
  const ref = match[1];
  const hexLen = match[2];
  let rawText = match[3];
  
  // Unescape unicode and html entities
  let cleanText = rawText
    .replace(/\\u003c/g, '<')
    .replace(/\\u003e/g, '>')
    .replace(/\\"/g, '"')
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, '')
    .replace(/\\t/g, ' ');
    
  parsedDescriptions[ref] = cleanText;
  console.log(`Ref ${ref}: hexLen=${hexLen}, unescapedLength=${cleanText.length}`);
}

fs.writeFileSync('scratch/all_extracted_ref_descriptions.json', JSON.stringify(parsedDescriptions, null, 2), 'utf8');
