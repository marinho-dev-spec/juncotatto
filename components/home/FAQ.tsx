'use client';

import { useState } from 'react';
import { FAQ_ITEMS } from '@/lib/faqData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="faq" id="duvidas">
      <div className="container">
        <h2 className="section-title">Dúvidas Frequentes</h2>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className="faq-item" key={item.q}>
                <button
                  className={`faq-question${isOpen ? ' active' : ''}`}
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-label={`Expandir pergunta: ${item.q}`}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer${isOpen ? ' active' : ''}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
