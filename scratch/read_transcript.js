const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\logs\\transcript_full.jsonl';

if (fs.existsSync(logPath)) {
  const lines = fs.readFileSync(logPath, 'utf8').trim().split('\n');
  const lastLine = JSON.parse(lines[lines.length - 1]);
  console.log('Last line type:', lastLine.type);
  if (lastLine.content) {
    console.log('Content length:', lastLine.content.length);
    // Find headings in the content
    const headings = lastLine.content.match(/^#{1,4}\s.+$/gm) || [];
    console.log('Headings found (total ' + headings.length + '):');
    headings.slice(0, 30).forEach(h => console.log('  ' + h));
  }
} else {
  console.log('Log file not found at:', logPath);
}
