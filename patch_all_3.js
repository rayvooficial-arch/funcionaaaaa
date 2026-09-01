import fs from 'fs';

// 9. Guarantee
fs.writeFileSync('src/components/Guarantee.tsx', `import React from "react";
import { ShieldCheck } from "lucide-react";

export const Guarantee: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto bg-white text-slate-800 rounded-[40px] p-8 md:p-12 text-center shadow-lg border border-[var(--color-primary)]/20">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 leading-tight tracking-normal text-slate-800">
            Garantia de <span className="text-[var(--color-primary)]">7 dias</span>
          </h3>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium mb-8">
            Fique tranquilo! Você tem 7 dias para acessar o material, conhecer as atividades e avaliar se ele faz sentido para sua realidade. Se não gostar, devolvemos 100% do seu dinheiro.
          </p>
          <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto shadow-sm">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};
`);

// 10. FAQ
fs.writeFileSync('src/components/FAQSection.tsx', `import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQSection: React.FC = () => {
  const faqs = [
    { q: "Funciona para crianças com dificuldade?", a: "Sim! O método foi desenvolvido justamente para ser passo a passo e no ritmo da criança, sendo ideal para quem tem dificuldades." },
    { q: "Preciso saber ensinar?", a: "Não! Você recebe um Guia Online de Aplicação Passo a Passo que te mostra exatamente o que fazer." },
    { q: "Quanto tempo por dia?", a: "Apenas 10 a 15 minutos por dia já são suficientes para ver uma grande evolução." },
    { q: "O acesso é imediato?", a: "Sim! Assim que o pagamento for aprovado, você recebe todo o material no seu e-mail." },
    { q: "É pagamento único?", a: "Sim! Você paga apenas uma vez e tem acesso vitalício ao material." }
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-10 font-bold text-slate-800 tracking-tight">
          Dúvidas <span className="text-[var(--color-primary)]">Frequentes</span>
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-slate-100 last:border-0">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full py-6 flex items-center justify-between text-left cursor-pointer">
                <span className={\`text-lg font-bold transition-colors \${openIndex === index ? 'text-[var(--color-primary)]' : 'text-slate-800'}\`}>{faq.q}</span>
                <ChevronDown className={\`w-5 h-5 transition-transform \${openIndex === index ? 'rotate-180 text-[var(--color-primary)]' : 'text-slate-400'}\`} />
              </button>
              <div className={\`overflow-hidden transition-all duration-300 ease-in-out \${openIndex === index ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}\`}>
                <p className="text-base text-slate-600 font-medium">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
`);

// 11. FinalCTA
fs.writeFileSync('src/components/FinalCTA.tsx', `import React from "react";
import { handleCheckoutClick } from "../config";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-800 leading-[1.1] mb-8 tracking-tight">
          Comece a evolução na leitura <span className="text-[var(--color-primary)]">hoje mesmo!</span>
        </h2>
        <button onClick={(e) => handleCheckoutClick("premium", e)} className="bg-[var(--color-cta)] text-[var(--color-on-action)] hover:opacity-90 px-8 py-5 rounded-full text-xl font-bold transition-all inline-flex items-center justify-center shadow-xl shadow-[var(--color-cta)]/30 animate-cta-pulse cursor-pointer w-full md:w-auto">
          👉 QUERO APROVEITAR A OFERTA AGORA
        </button>
        <p className="mt-4 text-slate-500 font-bold text-sm">
          Acesso imediato após o pagamento
        </p>
      </div>
    </section>
  );
};
`);

// 12. Footer
fs.writeFileSync('src/components/Footer.tsx', `import React from "react";
export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-900 text-slate-400 text-center text-sm">
      <div className="container mx-auto px-4">
        <p className="mb-4">© 2026 Pequenos Leitores. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
        </div>
        <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Este site não faz parte do site do Facebook ou da Meta Platforms, Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da META PLATFORMS, INC.
        </p>
      </div>
    </footer>
  );
};
`);

// Update numeric price in config.ts to 9.90
let config = fs.readFileSync('src/config.ts', 'utf8');
config = config.replace(/const numericPrice = plan === "premium" \? .*? : .*?;/g, 'const numericPrice = 9.90;');
fs.writeFileSync('src/config.ts', config);

