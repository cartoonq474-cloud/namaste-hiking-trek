const fs = require('fs');

const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const actWp = actHtml.indexOf('chat.whatsapp.com');
const actWp2 = actHtml.indexOf('api.whatsapp.com') !== -1 ? actHtml.indexOf('api.whatsapp.com') : actHtml.indexOf('WhatsApp');
const ebcWp = ebcHtml.indexOf('api.whatsapp.com') !== -1 ? ebcHtml.indexOf('api.whatsapp.com') : ebcHtml.indexOf('WhatsApp');

console.log('--- ACT after WhatsApp (800 chars) ---');
console.log(actHtml.slice(actWp2, actWp2 + 800));

console.log('\n--- EBC after WhatsApp (800 chars) ---');
console.log(ebcHtml.slice(ebcWp, ebcWp + 800));
