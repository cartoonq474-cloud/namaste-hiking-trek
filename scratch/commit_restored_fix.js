const { execSync } = require('child_process');

try {
  execSync('git add index.html', { encoding: 'utf8' });
  const commitMsg = "fix(homepage): restore authentic SMM/MoreThanPanel ticker review designs and typography for Video and Customer reviews";
  execSync(`git commit -m "${commitMsg}"`, { encoding: 'utf8' });
  console.log('Committed successfully:\n', execSync('git log -n 1 --oneline', { encoding: 'utf8' }));
} catch (e) {
  console.error(e.message);
}
