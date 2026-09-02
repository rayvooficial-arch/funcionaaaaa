import fs from 'fs';

let configContent = fs.readFileSync('src/config.ts', 'utf8');

configContent = configContent + `
export const scrollToOffer = (e?: React.MouseEvent) => {
  if (e) e.preventDefault();
  const offerElement = document.getElementById("oferta");
  if (offerElement) {
    offerElement.scrollIntoView({ behavior: "smooth" });
  }
};
`;
fs.writeFileSync('src/config.ts', configContent);
