const fs = require('fs');
const { execSync } = require('child_process');

try {
  const matches = execSync('git grep -i "cho la" -- "*.html"', { encoding: 'utf8' });
  console.log('Matches for "cho la":\n', matches.substring(0, 3000));
} catch (e) {
  console.error(e.message);
}
