const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\steps\\448\\content.md', 'utf8');

// Find all JSON-LD blocks in content.md
const jsonLdMatches = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi) || [];
console.log('JSON-LD blocks found:', jsonLdMatches.length);

jsonLdMatches.forEach((block, idx) => {
  const jsonStr = block.replace(/<\/?script[^>]*>/gi, '');
  try {
    const data = JSON.parse(jsonStr);
    console.log(`Block ${idx} @type:`, data['@type']);
    if (data.itinerary || (Array.isArray(data['@graph']))) {
      fs.writeFileSync(`scratch/competitor_jsonld_${idx}.json`, JSON.stringify(data, null, 2), 'utf8');
      console.log(`Saved block ${idx}`);
    } else if (data.name && data.description) {
      fs.writeFileSync(`scratch/competitor_jsonld_${idx}.json`, JSON.stringify(data, null, 2), 'utf8');
      console.log(`Saved block ${idx} with name ${data.name}`);
    }
  } catch (e) {
    console.log(`Block ${idx} JSON parse error:`, e.message);
    // save raw
    fs.writeFileSync(`scratch/competitor_jsonld_raw_${idx}.txt`, jsonStr, 'utf8');
  }
});
