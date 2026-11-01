const fs = require('fs');

const lines = fs.readFileSync('scratch_last_user_prompt.txt', 'utf8').split(/\r?\n/);

console.log('Total lines:', lines.length);

// Find all major section headings
// Let's identify lines that represent major sections:
// e.g. "Overview and key expedition facts", "Mera Peak Climbing highlights",
// "Key trip facts and expedition overview", "Mera Peak Climbing duration and route summary",
// "Mera Peak Climbing day-by-day overview", "Day 1: ...", "Difficulty, fitness and preparation",
// "Best time and seasons", "Cost, inclusions, exclusions and booking terms",
// "Climbing permits and required documents"

const majorSections = [
  'Overview and key expedition facts',
  'What is Mera Peak Climbing?',
  'Where is Mera Peak located?',
  'Mera Peak height and summit experience',
  'Why choose an 18-day Mera Peak Climbing package?',
  'Mera Peak Climbing route: from Kathmandu to the Hinku Valley',
  'Khare acclimatization and climbing preparation',
  'Mera High Camp and the summit attempt',
  'What makes Mera Peak Climbing challenging?',
  'Who is Mera Peak Climbing suitable for?',
  'What is included in the Mera Peak Climbing experience?',
  'Why choose a guided Mera Peak Climbing package?',
  'Begin planning your Mera Peak Climbing expedition',
  'Mera Peak Climbing highlights',
  'Key trip facts and expedition overview',
  'Mera Peak Climbing duration and route summary',
  'Mera Peak Climbing day-by-day overview',
  'Difficulty, fitness and preparation',
  'Best time and seasons',
  'Cost, inclusions, exclusions and booking terms',
  'Climbing permits and required documents'
];

for (const sec of majorSections) {
  const idx = lines.findIndex(l => l.trim() === sec);
  console.log(`Section: "${sec}" at line ${idx}`);
}
