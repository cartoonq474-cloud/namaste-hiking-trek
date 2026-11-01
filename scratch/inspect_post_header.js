const fs = require('fs');
const content = fs.readFileSync('trek/upper-mustang-trek/index.html', 'utf8');

// Inspect from </header> to <main or <section
const headerEnd = content.indexOf('</header>');
console.log(content.slice(headerEnd, headerEnd + 2000));
