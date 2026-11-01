const fs = require('fs');

const content = fs.readFileSync('scratch/evt_sec2_generated.html', 'utf8');

// Check emojis
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
const hasEmoji = emojiRegex.test(content);
console.log('Contains emojis:', hasEmoji);

// Check image paths
const imgRegex = /src="([^"]+)"/g;
let m;
let missingImgs = [];
while ((m = imgRegex.exec(content)) !== null) {
  const src = m[1];
  // relative to trek/everest-view-trek/index.html
  const localPath = src.replace('../../', '');
  if (!fs.existsSync(localPath)) {
    missingImgs.push(src);
  }
}
console.log('Missing images:', missingImgs);

// Check div tag balance
const openDivs = (content.match(/<div(\s|>)/g) || []).length;
const closeDivs = (content.match(/<\/div>/g) || []).length;
console.log(`Div balance: open=${openDivs}, close=${closeDivs}, diff=${openDivs - closeDivs}`);

// Check section tag balance
const openSections = (content.match(/<section(\s|>)/g) || []).length;
const closeSections = (content.match(/<\/section>/g) || []).length;
console.log(`Section balance: open=${openSections}, close=${closeSections}`);

// Check p tag balance
const openP = (content.match(/<p(\s|>)/g) || []).length;
const closeP = (content.match(/<\/p>/g) || []).length;
console.log(`P balance: open=${openP}, close=${closeP}`);
