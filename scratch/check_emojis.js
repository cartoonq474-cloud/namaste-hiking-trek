const fs = require('fs');
const html = fs.readFileSync('trek/upper-mustang-trek/index.html', 'utf8');

// Regex to detect emojis
const emojiRegex = /[\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F1E0}-\u{1F1FF}]/gu;

const matches = html.match(emojiRegex);
if (matches && matches.length > 0) {
  console.log(`Found ${matches.length} emojis:`, matches.slice(0, 10));
} else {
  console.log('CONGRATULATIONS: ZERO EMOJIS FOUND! Pure professional typography.');
}
