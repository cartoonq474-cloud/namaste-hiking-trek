const fs = require('fs');

const path = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\steps\\448\\content.md';
const content = fs.readFileSync(path, 'utf8');

// Find where Day 1, Day 2 etc appear in the HTML
const days = [];
for (let d = 1; d <= 16; d++) {
  // Regex to find Day header or section
  const dayRegex = new RegExp(`(Day\\s*${d}[:\\s][\\s\\S]*?)(?=(Day\\s*${d+1}[:\\s]|<footer|id="faq|class="common-box|id="cost-includes))`, 'i');
  const match = content.match(dayRegex);
  if (match) {
    days.push({ day: d, text: match[1].slice(0, 1500) });
  }
}

console.log(`Found ${days.length} days in HTML:`);
days.forEach(d => {
  console.log(`\n=== DAY ${d.day} ===`);
  // clean tags
  const clean = d.text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(clean.slice(0, 400));
});
