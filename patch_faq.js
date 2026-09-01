import fs from 'fs';
const newFAQ = `import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como vou receber o material?",
    answer: "O acesso é imediato! Assim que o pagamento for confirmado, você receberá um e-mail com os dados para acessar e baixar todo o material em PDF."
  },
  {
    question: "Para qual idade o material é recomendado?",
    answer: "O Livro de Grafismo Fonético foi desenvolvido especialmente para crianças de 4 a 8 anos que estão em processo de alfabetização ou precisam melhorar a coordenação motora."
  },
  {
    question: "Posso imprimir quantas vezes quiser?",
    answer: "Sim! O material é seu para sempre. Você pode baixar no seu computador e imprimir as páginas quantas vezes forem necessárias."
  },
  {
    question: "E se eu não gostar?",
    answer: "Você tem 7 dias de garantia incondicional. Se achar que o material não ajudou, basta enviar um e-mail e devolveremos 100% do seu dinheiro, sem burocracia."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-10 font-bold text-slate-800 tracking-tight">
          Dúvidas <span className="text-[var(--color-primary)]">Frequentes</span>
        </h2>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b-2 border-slate-100 last:border-0">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className={\`text-lg font-bold transition-colors \${isOpen ? 'text-[var(--color-primary)]' : 'text-slate-800 group-hover:text-[var(--color-primary)]'}\`}>
                    {faq.question}
                  </span>
                  <div className={\`w-8 h-8 rounded-full flex items-center justify-center transition-colors \${isOpen ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}\`}>
                    <ChevronDown className={\`w-5 h-5 transition-transform duration-300 \${isOpen ? 'rotate-180' : ''}\`} />
                  </div>
                </button>
                
                <div 
                  className={\`overflow-hidden transition-all duration-300 ease-in-out \${isOpen ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}\`}
                >
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
`;
fs.writeFileSync('src/components/FAQSection.tsx', newFAQ);
