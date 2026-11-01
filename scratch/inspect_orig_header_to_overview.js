const fs = require('fs');
const orig = fs.readFileSync('scratch/original_git_everest_view.html', 'utf8');

const sec1 = orig.indexOf('<section id="section-overview"');
console.log('Original from </header> to section-overview:');
const headerEnd = orig.indexOf('</header>');
console.log(orig.slice(headerEnd, sec1));
