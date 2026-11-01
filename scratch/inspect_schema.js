const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const schemaStart = html.indexOf('<script type="application/ld+json">');
const schemaEnd = html.indexOf('</script>', schemaStart);

console.log('Schema.org block:');
console.log(html.slice(schemaStart, schemaEnd + 9));

