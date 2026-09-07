import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQSection: React.FC = () => {
  const faqs = [
    { q: "Para qual idade o material é indicado?", a: "Para crianças a partir de 4 anos que estão iniciando o processo ou até 8 anos que ainda apresentam dificuldades." },
    { q: "Meu filho ainda não sabe ler. Pode utilizar?", a: "Sim, o material foi criado exatamente para construir a base até a leitura." },
    { q: "Precisa de algum material adicional?", a: "Não, todo o método está incluso no material. Você precisará apenas de lápis, borracha ou lápis de cor." },
    { q: "Como recebo o material?", a: "O material é 100% digital. Você recebe o acesso no seu e-mail assim que o pagamento for aprovado." },
    { q: "Posso imprimir?", a: "Sim, os materiais estão em formato PDF, prontos para serem impressos na sua casa ou em uma gráfica." },
    { q: "É indicado para crianças que apresentam dificuldade na alfabetização?", a: "Com certeza. As atividades são lúdicas e visuais, respeitando o ritmo e ajudando quem tem dificuldade a ganhar confiança." }
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
