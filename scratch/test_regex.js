const fs = require('fs');
const css = fs.readFileSync('index.css', 'utf8');

const regex = /\.detail-accordion-content-inner\s*\{[\s\S]*?padding:\s*0\s*20px\s*20px\s*20px;[\s\S]*?\}/;
const m = css.match(regex);
console.log('Match:');
console.log(m ? m[0] : 'NONE');

