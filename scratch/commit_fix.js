const { execSync } = require('child_process');

try {
  execSync('git add index.html', { encoding: 'utf8' });
  const commitMsg = "fix(homepage): consolidate reviews into single master section after How It Works and remove duplicate block below specialists";
  execSync(`git commit -m "${commitMsg}"`, { encoding: 'utf8' });
  console.log('Committed successfully:\n', execSync('git log -n 1 --oneline', { encoding: 'utf8' }));
} catch (e) {
  console.error(e.message);
}
