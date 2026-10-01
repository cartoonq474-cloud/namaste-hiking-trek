const fs = require('fs');
const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

let pos = 0;
while ((pos = content.indexOf('<script', pos)) !== -1) {
  const end = content.indexOf('</script>', pos);
  const snippet = content.substring(pos, end !== -1 ? end + 9 : pos + 200);
  console.log('--- SCRIPT AT POS', pos, '---');
  console.log(snippet.substring(0, 150));
  pos = end !== -1 ? end + 9 : pos + 7;
}
