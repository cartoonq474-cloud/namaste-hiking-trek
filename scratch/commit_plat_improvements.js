const { execSync } = require('child_process');

try {
  execSync('git add index.html js/reviews-tabs.js', { encoding: 'utf8' });
  const commitMsg = "feat(reviews): improve platform reviews with official brand logos, dynamic rating banner, and interactive subtab filtering";
  execSync(`git commit -m "${commitMsg}"`, { encoding: 'utf8' });
  console.log('Committed successfully:\n', execSync('git log -n 1 --oneline', { encoding: 'utf8' }));
} catch (e) {
  console.error(e.message);
}
