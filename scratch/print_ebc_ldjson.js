const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const p = ebc.indexOf('<script type="application/ld+json">');
const end = ebc.indexOf('</script>', p);
console.log(ebc.substring(p, p + 2000));
