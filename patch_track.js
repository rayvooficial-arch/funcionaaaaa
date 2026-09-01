import fs from 'fs';
let code = fs.readFileSync('src/config.ts', 'utf-8');
code = code.replace(
  /content_name: selectedPlan.name,/g,
  'content_name: "+400 Atividades de Grafismo Fonético",'
);
fs.writeFileSync('src/config.ts', code);
