const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

const m = css.match(/--color-glacier-bg\s*:\s*[^;]+;/);
console.log(m ? m[0] : '--color-glacier-bg not found');
