const { execSync } = require('child_process');

try {
  console.log('--- Git Status ---');
  console.log(execSync('git status', { encoding: 'utf8' }));
  
  console.log('\n--- Git Remote ---');
  console.log(execSync('git remote -v', { encoding: 'utf8' }));
  
  console.log('\n--- Recent Local Commits vs Remote ---');
  console.log(execSync('git log -n 5 --oneline', { encoding: 'utf8' }));
} catch (e) {
  console.error(e.message);
}
