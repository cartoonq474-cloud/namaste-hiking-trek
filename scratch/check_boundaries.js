const fs = require('fs');
const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const styleStart = content.indexOf('<style>\r\n              .rich-highlights-container');
const altStyleStart = styleStart !== -1 ? styleStart : content.indexOf('<style>\n              .rich-highlights-container');
const containerStart = content.indexOf('<div class="rich-highlights-container">');

const whyBookStart = content.indexOf('<style>\r\n              .why-book-container');
const altWhyBookStart = whyBookStart !== -1 ? whyBookStart : content.indexOf('<style>\n              .why-book-container');

console.log({
  styleStart: styleStart !== -1 ? styleStart : altStyleStart,
  containerStart,
  whyBookStart: whyBookStart !== -1 ? whyBookStart : altWhyBookStart
});

const startIdx = styleStart !== -1 ? styleStart : altStyleStart;
const endIdx = whyBookStart !== -1 ? whyBookStart : altWhyBookStart;

console.log('Snippet before replacement:');
console.log(content.substring(startIdx - 50, startIdx));
console.log('Snippet at end of replacement:');
console.log(content.substring(endIdx - 50, endIdx + 50));
