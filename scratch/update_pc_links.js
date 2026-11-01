const fs = require('fs');

let html = fs.readFileSync('peak-climbing-nepal/index.html', 'utf8');

// Update Mera Peak Climbing card in Best Treks grid
const oldMeraCardStr = 'Mera Peak Climbing Expedition</h3><p style="color: var(--color-neutral-600); font-size: 0.88rem; line-height: 1.5; margin-bottom: 16px;">Ascend Nepal’s highest trekking peak (6,476m) for views of Everest, Lhotse, Cho Oyu, Makalu & Kanchenjunga.</p></div><div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--color-neutral-100); padding-top: 14px;"><div><span style="font-size: 0.72rem; color: var(--color-neutral-500); text-transform: uppercase;">From</span><strong style="display: block; font-size: 1.25rem; color: var(--color-primary-navy);">$2,090</strong></div><a href="../nepal-trekking-packages/" style="color: #10B981; font-weight: 700; font-size: 0.9rem; text-decoration: none;">Explore →</a>';

const newMeraCardStr = 'Mera Peak Climbing Expedition</h3><p style="color: var(--color-neutral-600); font-size: 0.88rem; line-height: 1.5; margin-bottom: 16px;">Ascend Nepal’s highest trekking peak (6,476m) for views of Everest, Lhotse, Cho Oyu, Makalu & Kanchenjunga.</p></div><div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--color-neutral-100); padding-top: 14px;"><div><span style="font-size: 0.72rem; color: var(--color-neutral-500); text-transform: uppercase;">From</span><strong style="display: block; font-size: 1.25rem; color: var(--color-primary-navy);">$1,850</strong></div><a href="../trek/mera-peak-climbing-trek/" style="color: #10B981; font-weight: 700; font-size: 0.9rem; text-decoration: none;">Explore →</a>';

if (html.includes(oldMeraCardStr)) {
  html = html.replace(oldMeraCardStr, newMeraCardStr);
  console.log('Updated Mera Peak card link in peak-climbing-nepal/index.html!');
} else {
  console.log('oldMeraCardStr not matched exactly, trying regex');
  html = html.replace(
    /(Mera Peak Climbing Expedition[\s\S]*?\$)\d[,\d]+(<\/strong><\/div><a href=")[^"]+(")/,
    '$11,850$2../trek/mera-peak-climbing-trek/$3'
  );
  console.log('Updated Mera Peak card with regex!');
}

fs.writeFileSync('peak-climbing-nepal/index.html', html, 'utf8');

