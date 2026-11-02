const fs = require('fs');
const { getLineRange, linesToHtml } = require('./content_parser.js');

const diffLines = getLineRange(783, 1074);
const diffHtml = linesToHtml(diffLines);
console.log("Difficulty lines count:", diffLines.length, "HTML length:", diffHtml.length);

