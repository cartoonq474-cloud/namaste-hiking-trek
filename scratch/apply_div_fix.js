const fs = require('fs');
let html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const regex = /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/;
html = html.replace(regex, '</div>\n          </div>\n        </div>\n    </section>');

fs.writeFileSync('trek/everest-three-passes-trek/index.html', html, 'utf8');
console.log('Successfully fixed tag balance!');

