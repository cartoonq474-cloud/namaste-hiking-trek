const fs = require('fs');

const filePath = 'trek/everest-base-camp-trek/index.html';
let content = fs.readFileSync(filePath, 'utf8');

const regexH4 = /<h4 class="ebc-highlight-card-title">([\s\S]*?)<\/h4>/g;

let count = 0;
const updatedContent = content.replace(regexH4, (match, p1) => {
  count++;
  return `<h3 class="ebc-highlight-card-title">${p1}</h3>`;
});

console.log(`Replaced ${count} occurrences of <h4 class="ebc-highlight-card-title"> with <h3>`);

if (count === 15) {
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log('Successfully wrote updated file.');
} else {
  console.error(`Expected 15 occurrences, but found ${count}. File not updated.`);
  process.exit(1);
}
