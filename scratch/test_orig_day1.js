const { execSync } = require('child_process');
const orig = execSync('git show HEAD~1:trek/everest-base-camp-trek/index.html', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });

const d1Start = orig.indexOf('<!-- Day 01 -->');
const d2Start = orig.indexOf('<!-- Day 02 -->');
const d1Chunk = orig.substring(d1Start, d2Start);

console.log('Original Day 1 last 300 chars:');
console.log(d1Chunk.substring(d1Chunk.length - 300));

const opens = (d1Chunk.match(/<div/g) || []).length;
const closes = (d1Chunk.match(/<\/div>/g) || []).length;
console.log(`Original Day 1: <div opens: ${opens}, closes: ${closes}, diff: ${opens - closes}`);
