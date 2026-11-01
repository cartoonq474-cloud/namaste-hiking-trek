const { execSync } = require('child_process');

try {
  console.log('--- Commits touching homepage-reviews: ---');
  console.log(execSync('git log -S "homepage-reviews" --oneline', { encoding: 'utf8' }));
  
  console.log('--- Commits touching reviews-section: ---');
  console.log(execSync('git log -S "reviews-section" --oneline', { encoding: 'utf8' }));
} catch (e) {
  console.error(e.message);
}
