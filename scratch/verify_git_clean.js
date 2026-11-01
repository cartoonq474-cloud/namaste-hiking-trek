const { execSync } = require('child_process');

try {
  console.log(execSync('git status -uno', { encoding: 'utf8' }));
} catch (e) {
  console.error(e.message);
}
