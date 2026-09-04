import React, { useState } from "react";
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
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-10 font-bold text-slate-800 tracking-tight">
          Dúvidas <span className="text-[var(--color-primary)]">Frequentes</span>
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-slate-100 last:border-0">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full py-6 flex items-center justify-between text-left cursor-pointer">
                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-[var(--color-primary)]' : 'text-slate-800'}`}>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180 text-[var(--color-primary)]' : 'text-slate-400'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-base text-slate-600 font-medium">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
