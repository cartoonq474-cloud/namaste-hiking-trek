const fs = require('fs');

const content = fs.readFileSync('scratch/evt_section6_upgraded.html', 'utf8');

// Check emojis
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
const hasEmoji = emojiRegex.test(content);
console.log('Contains emojis:', hasEmoji);

// Check div tag balance
const openDivs = (content.match(/<div(\s|>)/gi) || []).length;
const closeDivs = (content.match(/<\/div>/gi) || []).length;
console.log(`Div balance: open=${openDivs}, close=${closeDivs}, diff=${openDivs - closeDivs}`);

// Check section tag balance
const openSections = (content.match(/<section(\s|>)/gi) || []).length;
const closeSections = (content.match(/<\/section>/gi) || []).length;
console.log(`Section balance: open=${openSections}, close=${closeSections}`);

// Check p tag balance
const openP = (content.match(/<p(\s|>)/gi) || []).length;
const closeP = (content.match(/<\/p>/gi) || []).length;
console.log(`P balance: open=${openP}, close=${closeP}, diff=${openP - closeP}`);

// Check h4 tag balance
const openH4 = (content.match(/<h4(\s|>)/gi) || []).length;
const closeH4 = (content.match(/<\/h4>/gi) || []).length;
console.log(`H4 balance: open=${openH4}, close=${closeH4}, diff=${openH4 - closeH4}`);

// Check ul tag balance
const openUl = (content.match(/<ul(\s|>)/gi) || []).length;
const closeUl = (content.match(/<\/ul>/gi) || []).length;
console.log(`UL balance: open=${openUl}, close=${closeUl}, diff=${openUl - closeUl}`);

// Check table tag balance
const openTable = (content.match(/<table(\s|>)/gi) || []).length;
const closeTable = (content.match(/<\/table>/gi) || []).length;
console.log(`Table balance: open=${openTable}, close=${closeTable}, diff=${openTable - closeTable}`);

// Check 21 detail cards
const cardMatches = content.match(/class="detail-accordion-card"/g) || [];
console.log('Total detail cards:', cardMatches.length);

// Check unique IDs
const idMatches = [...content.matchAll(/data-detail-id="([^"]+)"/g)].map(m => m[1]);
console.log('Unique IDs count:', new Set(idMatches).size);
console.log('IDs list:', idMatches);
