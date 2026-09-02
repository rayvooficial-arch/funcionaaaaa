import fs from 'fs';

let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');
content = content.replace('import { handleCheckoutClick } from "../config";', 'import { scrollToOffer } from "../config";');
content = content.replace('onClick={(e) => handleCheckoutClick("premium", e)}', 'onClick={(e) => scrollToOffer(e)}');
fs.writeFileSync('src/components/Hero.tsx', content);
