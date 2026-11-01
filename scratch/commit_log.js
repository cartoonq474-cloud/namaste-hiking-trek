const fs = require('fs');
const { execSync } = require('child_process');

try {
  const commitLog = execSync('git log -n 1 --stat bf92a21', { encoding: 'utf8' });
  console.log(commitLog);
} catch (e) {
  console.error(e.message);
}
