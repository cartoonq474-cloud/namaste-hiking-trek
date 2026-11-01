const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

const m = css.match(/\.video-stories-grid[^{]*\{[^}]*\}/g);
console.log(m ? m[0] : 'not found');
