const fs = require('fs');

const path = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\steps\\448\\content.md';
const content = fs.readFileSync(path, 'utf8');

const itinStart = content.indexOf('id="itinerary"');
const itinHtml = content.slice(itinStart);

const parts = itinHtml.split(/<span class="text-headings\/70[^>]*>Day\s*<!-- -->(\d+)<!-- -->:<\/span>/i);
console.log('Day 2 chunk (first 1500 chars):');
console.log(parts[4].slice(0, 1500));
