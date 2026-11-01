const { execSync } = require('child_process');
const headHtml = execSync('git show HEAD:trek/annapurna-circuit-trek/index.html', { maxBuffer: 10 * 1024 * 1024 }).toString('utf8');

console.log('HEAD length:', headHtml.length);
const footerIdx = headHtml.indexOf('<footer class="site-footer">');
console.log('footerIdx in HEAD:', footerIdx);

const last10k = headHtml.slice(-10000);
console.log('Last 2000 chars in HEAD:\n', headHtml.slice(-2000));
