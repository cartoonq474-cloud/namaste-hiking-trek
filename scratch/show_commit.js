const { execSync } = require('child_process');

try {
  console.log(execSync('git show --stat bf92a21', { encoding: 'utf8' }));
  console.log('\nCommit message and diff overview:');
  console.log(execSync('git log -n 1 -p bf92a21 -- index.html', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }).substring(0, 2500));
} catch (e) {
  console.error(e.message);
}
