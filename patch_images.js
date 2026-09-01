import fs from 'fs';

let hero = fs.readFileSync('src/components/Hero.tsx', 'utf8');
hero = hero.replace(
  'import heroImageAsset from "../assets/images/mockup_livro_grafismo_fonetico_1788145969916.jpg";',
  'import heroImageAsset from "../assets/images/mockup_kit_grafismo_1788303716716.jpg";'
);
fs.writeFileSync('src/components/Hero.tsx', hero);

let offer = fs.readFileSync('src/components/OfferSection.tsx', 'utf8');
offer = offer.replace(
  'import imagemPacoteCompleto from "../assets/images/9b00a708-b82d-4654-ac51-40dcbb85adcb.jpg";',
  'import imagemPacoteCompleto from "../assets/images/mockup_kit_grafismo_1788303716716.jpg";'
);
fs.writeFileSync('src/components/OfferSection.tsx', offer);
