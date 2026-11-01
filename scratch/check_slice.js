const fs = require('fs');
const refHtml = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

const footerIndex = refHtml.indexOf('<!-- Section: Footer -->');
console.log('footerIndex is:', footerIndex);

const actualFooter = refHtml.indexOf('<footer');
console.log('actualFooter is:', actualFooter);

const scriptsIndex = refHtml.indexOf('<!-- Scripts -->');
console.log('scriptsIndex is:', scriptsIndex);
