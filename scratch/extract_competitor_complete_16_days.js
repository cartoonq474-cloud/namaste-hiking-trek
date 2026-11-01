const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\steps\\448\\content.md', 'utf8');

const jsonldData = JSON.parse(fs.readFileSync('scratch/competitor_jsonld_2.json', 'utf8'));

// Refs mapping for Days 1 to 16
const dayRefs = {
  1: '33',
  2: '34',
  3: '35',
  4: '36',
  5: '37',
  6: '38',
  7: '39',
  8: '3a',
  9: '3b',
  10: '3c',
  11: '3d',
  12: '3e',
  13: '3f',
  14: '40',
  15: '41',
  16: '42'
};

const fullDays = [];

for (let d = 1; d <= 16; d++) {
  const ref = dayRefs[d];
  const item = jsonldData.itinerary[d - 1];
  
  // Extract narrative description from payload
  // Find where ref:Txxx starts
  let descHtml = '';
  const searchPattern = new RegExp(`${ref}:T([0-9a-f]+),([\\s\\S]*?)(?=(?:[0-9a-f]+:T[0-9a-f]+,|\\]\\)\\<\\/script\\>\\<script\\>self\\.__next_f\\.push\\(\\[1,\"[0-9a-f]+:))`);
  
  // Alternatively search by slice:
  let idx = content.indexOf(`${ref}:T`);
  if (idx !== -1) {
    let sub = content.slice(idx, idx + 6000);
    // Remove the ref:Txxx,
    sub = sub.replace(new RegExp(`^${ref}:T[0-9a-f]+,`), '');
    // If it has "])</script><script>self.__next_f.push([1,"
    sub = sub.replace(/\"\]\)\<\/script\>\<script\>self\.__next_f\.push\(\[1,\"/g, '');
    // Take up to next ref:T or end of string
    let endIdx = sub.search(/[0-9a-f]{2}:T[0-9a-f]+,/);
    if (endIdx !== -1) {
      sub = sub.slice(0, endIdx);
    }
    // Clean up trailing '"])</script>'
    let endScript = sub.indexOf('"])</script>');
    if (endScript !== -1) {
      sub = sub.slice(0, endScript);
    }
    
    descHtml = sub
      .replace(/\\u003c/g, '<')
      .replace(/\\u003e/g, '>')
      .replace(/\\"/g, '"')
      .replace(/\\n/g, '\n')
      .replace(/\\r/g, '')
      .replace(/\\t/g, ' ');
  }
  
  const props = {};
  if (item && item.additionalProperty) {
    item.additionalProperty.forEach(p => {
      props[p.name] = p.value;
    });
  }

  // Extract clean text paragraphs
  let cleanText = descHtml
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  fullDays.push({
    day: d,
    title: item ? item.name : `Day ${d}`,
    walking_hours: props.walking_hours || '',
    accommodation: props.accommodation || '',
    meals: props.meals || '',
    transportation: props.transportation || '',
    description_html: descHtml,
    description_text: cleanText
  });
}

fs.writeFileSync('scratch/competitor_16_days_complete.json', JSON.stringify(fullDays, null, 2), 'utf8');
console.log('Successfully extracted 16 days:');
fullDays.forEach(d => {
  console.log(`Day ${d.day}: ${d.title} (${d.walking_hours}) - Desc len: ${d.description_text.length}`);
});
