const fs = require('fs');
const content = fs.readFileSync('scratch/three_passes_content.txt', 'utf8');

const sIdx = content.indexOf('Prepare before departure');
const eIdx = content.indexOf('Route alternatives and traveler suitability');

const slice = content.slice(sIdx, eIdx);
const lines = slice.split(/\r?\n/);
lines.forEach(l => {
  const trimmed = l.trim();
  if (trimmed.length > 0 && trimmed.length < 60 && !trimmed.endsWith('.') && !trimmed.endsWith(':') && !trimmed.startsWith('-') && !trimmed.startsWith('•')) {
    console.log(trimmed);
  }
});

