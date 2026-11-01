const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

// Parse all sections with start line, end line, id, class, inline style, headings
const lines = content.split('\n');

const sections = [];
let currentSection = null;

lines.forEach((line, index) => {
  const lineNum = index + 1;
  const matchOpen = line.match(/<section\b([^>]*)>/i);
  if (matchOpen) {
    const rawAttrs = matchOpen[1];
    const idMatch = rawAttrs.match(/id="([^"]+)"/i);
    const classMatch = rawAttrs.match(/class="([^"]+)"/i);
    const styleMatch = rawAttrs.match(/style="([^"]+)"/i);
    
    currentSection = {
      startLine: lineNum,
      id: idMatch ? idMatch[1] : '(no-id)',
      class: classMatch ? classMatch[1] : '(no-class)',
      style: styleMatch ? styleMatch[1] : '(none)',
      rawOpen: line.trim(),
      headings: [],
      pills: []
    };
  }

  if (currentSection) {
    const hMatch = line.match(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/i);
    if (hMatch) {
      currentSection.headings.push({
        tag: hMatch[1],
        text: hMatch[2].replace(/<[^>]+>/g, '').trim()
      });
    }
    const pillMatch = line.match(/class="[^"]*(?:pill|badge)[^"]*"[^>]*>([\s\S]*?)<\/(?:span|div)>/i);
    if (pillMatch) {
      currentSection.pills.push(pillMatch[1].replace(/<[^>]+>/g, '').trim());
    }

    if (line.includes('</section>')) {
      currentSection.endLine = lineNum;
      sections.push(currentSection);
      currentSection = null;
    }
  }
});

console.log(JSON.stringify(sections, null, 2));
