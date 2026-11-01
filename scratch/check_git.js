const fs = require('fs');
const { execSync } = require('child_process');

try {
  const log = execSync('git log -n 5 --oneline', { encoding: 'utf8' });
  console.log('Recent commits:\n', log);
} catch (e) {
  console.error(e.message);
}
