const fs = require('fs');
const { allLines } = require('./content_parser.js');

let dayIndices = [];
allLines.forEach((l, idx) => {
  if (l.trim().startsWith('Day ') && l.includes(':')) {
    dayIndices.push({ idx, text: l.trim() });
  }
});

console.log("Day markers found:");
dayIndices.forEach(d => console.log(`Line ${d.idx + 1}: ${d.text}`));

