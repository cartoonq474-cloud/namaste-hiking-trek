// Content Parser: Transforms raw lines from scratch/pikey_peak_raw_user_content.txt into clean semantic HTML
const fs = require('fs');

const raw = fs.readFileSync('scratch/pikey_peak_raw_user_content.txt', 'utf8');
const allLines = raw.split('\n');

function getLineRange(startIdx, endIdx) {
  return allLines.slice(startIdx, endIdx);
}

// Converts a slice of lines into clean semantic HTML paragraphs, subheadings, lists, and tables
function linesToHtml(lines) {
  let html = [];
  let inList = false;
  let inTable = false;
  let tableRows = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) {
      if (inList) { html.push('</ul>'); inList = false; }
      continue;
    }

    // Ignore <USER_REQUEST> tags
    if (line.includes('<USER_REQUEST>') || line.includes('</USER_REQUEST>') || line.includes('<truncated')) {
      continue;
    }

    // Check if line looks like a bullet point
    if (line.startsWith('- ') || line.startsWith('* ') || /^[0-9]+\.\s+/.test(line)) {
      if (!inList) {
        html.push('<ul style="margin: 12px 0 16px 20px; line-height: 1.6; color: #334155;">');
        inList = true;
      }
      const itemText = line.replace(/^[-*]\s+/, '').replace(/^[0-9]+\.\s+/, '');
      html.push(`  <li style="margin-bottom: 6px;">${itemText}</li>`);
      continue;
    } else {
      if (inList) { html.push('</ul>'); inList = false; }
    }

    // Check if line looks like a sub-heading (short, no period at end, or ends with question mark / colon)
    const isHeading = (
      (line.length < 80 && !line.includes('.') && !line.includes(',') && !line.includes(';') && (
        line === line.toUpperCase() && line.length > 3 ||
        line.endsWith('?') ||
        line.endsWith(':') ||
        ['Overview', 'Highlights', 'Route', 'Difficulty', 'Fitness', 'Acclimatization', 'Altitude', 'Best time', 'Month-by-month', 'Preparation', 'Training', 'Footwear', 'Checklist'].some(k => line.includes(k))
      )) ||
      line.startsWith('#')
    );

    if (isHeading) {
      const cleanTitle = line.replace(/^[#\s]+/, '').replace(/:$/, '');
      if (line.startsWith('# ') || cleanTitle.toLowerCase().includes('overview') || cleanTitle.toLowerCase().includes('highlights') || cleanTitle.toLowerCase().includes('route and altitude') || cleanTitle.toLowerCase().includes('difficulty') || cleanTitle.toLowerCase().includes('acclimatization and altitude') || cleanTitle.toLowerCase().includes('best time')) {
        html.push(`<h3 style="font-size: 1.35rem; font-weight: 700; color: #0f172a; margin-top: 28px; margin-bottom: 12px;">${cleanTitle}</h3>`);
      } else {
        html.push(`<h4 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin-top: 20px; margin-bottom: 8px;">${cleanTitle}</h4>`);
      }
      continue;
    }

    // Default: paragraph
    html.push(`<p style="font-size: 0.98rem; line-height: 1.7; color: #334155; margin-bottom: 14px;">${line}</p>`);
  }

  if (inList) html.push('</ul>');
  return html.join('\n');
}

module.exports = { getLineRange, linesToHtml, allLines };

