const fs = require('fs');

const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const lastScripts = [...actHtml.matchAll(/<script[\s\S]*?<\/script>/gi)];
console.log('Total scripts in ACT:', lastScripts.length);
lastScripts.forEach((s, i) => {
  const code = s[0];
  if (code.includes('src=')) {
    console.log(`Script ${i+1}: ${code}`);
  } else {
    console.log(`Script ${i+1}: inline (${code.length} chars) - ${code.slice(0, 100).replace(/\n/g, ' ')}...`);
  }
});
