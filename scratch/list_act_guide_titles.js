const fs = require('fs');

const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const regex = /<h3 class="detail-accordion-title">([\s\S]*?)<\/h3>/gi;
let m;
let i = 1;
while ((m = regex.exec(act)) !== null) {
  console.log(i++, m[1].trim());
}
