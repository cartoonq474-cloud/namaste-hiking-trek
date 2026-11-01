const { execSync } = require('child_process');
const headHtml = execSync('git show HEAD:trek/annapurna-circuit-trek/index.html', { maxBuffer: 10 * 1024 * 1024 }).toString('utf8');

const footerIdx = headHtml.indexOf('<footer class="site-footer">');
console.log('Chars 1000 before footer in HEAD:\n', headHtml.slice(footerIdx - 1200, footerIdx));
