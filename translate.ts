import { GoogleGenAI } from "@google/genai";
import * as fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  const content = fs.readFileSync('./constants.ts', 'utf-8');
  
  const response = await ai.models.generateContent({
    model: 'gemini-3.1-pro-preview',
    contents: `You are an expert translator. I have a TypeScript file with translations. The BG, HU, and PL translations are currently just copies of the ES translations. Please translate the IT (Italian) text into Bulgarian (BG), Hungarian (HU), and Polish (PL) and output the ENTIRE corrected constants.ts file. Do not change any other code. Just fix the BG, HU, and PL strings in the sections array.
    
Here is the file:
\`\`\`typescript
${content}
\`\`\`

Output only the raw TypeScript code, without markdown blocks.`,
  });

  let newContent = response.text || '';
  if (newContent.startsWith('\`\`\`typescript')) {
    newContent = newContent.replace(/^\`\`\`typescript\n/, '').replace(/\n\`\`\`$/, '');
  }
  if (newContent.startsWith('\`\`\`')) {
    newContent = newContent.replace(/^\`\`\`\n/, '').replace(/\n\`\`\`$/, '');
  }

  fs.writeFileSync('./constants.ts', newContent);
  console.log('Done');
}

run();
