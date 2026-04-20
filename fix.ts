import * as fs from 'fs';

let content = fs.readFileSync('./constants.ts', 'utf-8');

const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim().startsWith('ES: "')) {
    const esLine = lines[i];
    const bgLine = esLine.replace('ES: "', 'BG: "');
    const huLine = esLine.replace('ES: "', 'HU: "');
    const plLine = esLine.replace('ES: "', 'PL: "');
    
    // Add comma to ES line
    lines[i] = esLine + ',';
    
    // Insert new lines
    lines.splice(i + 1, 0, bgLine + ',', huLine + ',', plLine);
    i += 3;
  }
}

fs.writeFileSync('./constants.ts', lines.join('\n'));
