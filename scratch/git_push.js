const { execSync } = require('child_process');

try {
  console.log('Pushing local commits to origin main...');
  const pushOutput = execSync('git push origin main', { encoding: 'utf8' });
  console.log(pushOutput);
  console.log('Successfully pushed to origin main!');
} catch (e) {
  console.error('Error during git push:', e.message);
  if (e.stdout) console.log('Stdout:', e.stdout);
  if (e.stderr) console.error('Stderr:', e.stderr);
}
