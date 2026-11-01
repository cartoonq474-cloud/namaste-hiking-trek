const fs = require('fs');
const content = fs.readFileSync('trek/upper-mustang-trek/index.html', 'utf8');

const scriptEnd = content.indexOf('</script>\n\n  <!-- Google Fonts');
const overviewStart = content.indexOf('<section id="section-overview"');

console.log('From styles/header to overview:');
console.log(content.slice(scriptEnd, scriptEnd + 3000));
