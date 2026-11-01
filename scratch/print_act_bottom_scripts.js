const fs = require('fs');

const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
const footerEnd = act.indexOf('</footer>') + '</footer>'.length;
console.log('Bottom scripts from ACT:\n', act.substring(footerEnd));
