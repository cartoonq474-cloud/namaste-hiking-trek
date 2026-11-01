// scratch/validate_tags.js
const fs = require('fs');

function validateTags(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`Validating ${filePath} (${content.length} bytes)...`);

  // Void tags that don't need closing
  const voidTags = new Set([
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 
    'link', 'meta', 'param', 'source', 'track', 'wbr', '!doctype'
  ]);

  // Emoji check
  const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
  const hasEmoji = emojiRegex.test(content);
  console.log('Contains emojis?', hasEmoji ? 'YES (NEEDS FIX)' : 'NO (PASSED)');

  // Tag stack check
  const tagRegex = /<\/?([a-zA-Z0-9\-]+)(\s+[^>]*)?\/?>/g;
  let match;
  const stack = [];
  let tagCount = 0;
  let imbalances = 0;

  // Stripped comments and script/style contents for tag checking
  const cleanedContent = content
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '');

  while ((match = tagRegex.exec(cleanedContent)) !== null) {
    const rawTag = match[0];
    const tagName = match[1].toLowerCase();

    if (voidTags.has(tagName) || rawTag.endsWith('/>')) {
      continue;
    }

    tagCount++;

    if (rawTag.startsWith('</')) {
      // Closing tag
      if (stack.length === 0) {
        console.error(`Unexpected closing tag: </${tagName}>`);
        imbalances++;
      } else {
        const top = stack.pop();
        if (top !== tagName) {
          console.error(`Tag mismatch: expected </${top}>, found </${tagName}>`);
          imbalances++;
        }
      }
    } else {
      // Opening tag
      stack.push(tagName);
    }
  }

  if (stack.length > 0) {
    console.error('Unclosed tags remaining on stack:', stack);
    imbalances += stack.length;
  }

  console.log(`Total non-void tags processed: ${tagCount}`);
  if (imbalances === 0) {
    console.log('100% TAG BALANCE VERIFIED! PERFECT HTML STRUCTURE!');
    return true;
  } else {
    console.error(`FAILED with ${imbalances} tag imbalances!`);
    return false;
  }
}

const targetPath = process.argv[2] || 'trek/everest-view-trek/index.html';
validateTags(targetPath);
