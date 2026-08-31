import React, { useState } from "react";
import { FAQ_ITEMS } from "../data";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { StarSpark } from "./BrandDoodles";

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "faq-1": true,
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[var(--color-bg-page)] border-b border-[var(--color-border)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--color-bg-card)] text-[var(--color-primary)] text-xs font-black uppercase tracking-wider mb-3 border border-[var(--color-primary)]/20 shadow-2xs">
            <StarSpark color="var(--color-primary)" size={14} />
            <span>PERGUNTAS FREQUENTES</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-black text-[var(--color-text-title)] tracking-tight leading-tight">
            Tire suas dúvidas sobre o método
          </h2>
          <p className="text-xs sm:text-base text-[var(--color-text-secondary)] font-medium mt-2">
            Respostas diretas e transparentes para as dúvidas mais comuns.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = !!openIds[faq.id];

            return (
              <div
                key={faq.id}
                className={`rounded-[24px] border-2 transition-all overflow-hidden ${
                  isOpen ? "border-[var(--color-primary)]/40 bg-[var(--color-bg-card)] shadow-sm" : "border-[var(--color-border)] bg-[var(--color-bg-alt)] hover:border-[var(--color-primary)]/20"
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-extrabold text-[var(--color-text-title)] text-sm sm:text-base cursor-pointer hover:text-[var(--color-primary)] transition-colors"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[var(--color-primary)] text-white border-transparent shadow-xs" : "bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border-[var(--color-border)]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-[var(--color-text-secondary)] font-medium leading-relaxed border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-10 p-5 rounded-2xl bg-[var(--color-primary-bg)] border border-[var(--color-primary)]/20 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <MessageCircle className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
          <span className="text-xs sm:text-sm text-[var(--color-text-body)] font-bold">
            Ainda tem alguma dúvida? Envie um e-mail para <strong className="text-[var(--color-primary)]">contato@metodolerebrincar.com.br</strong>
          </span>
        </div>

      </div>
    </section>
  );
};
