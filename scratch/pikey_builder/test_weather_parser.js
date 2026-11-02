const fs = require('fs');
const { getLineRange, linesToHtml } = require('./content_parser.js');

const weatherLines = getLineRange(1358, 1600);
const weatherHtml = linesToHtml(weatherLines);
console.log("Weather lines count:", weatherLines.length, "HTML length:", weatherHtml.length);

