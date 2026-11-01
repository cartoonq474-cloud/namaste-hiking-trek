const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\steps\\448\\content.md', 'utf8');

['41', '42', '43', '44'].forEach(ref => {
  let idx = content.indexOf(`"${ref}:`);
  if (idx === -1) idx = content.indexOf(`${ref}:T`);
  if (idx === -1) idx = content.indexOf(`"${ref}"`);
  console.log(`Ref ${ref} index:`, idx);
  if (idx !== -1) {
    console.log(content.slice(idx - 30, idx + 150));
  }
});
