'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'Quanto custa?',
    a: 'O valor depende do tamanho, complexidade e local da tatuagem. Manda sua referência que faço um orçamento certinho. Geralmente realismo sai a partir de R$300, mas pode variar muito pra mais.',
  },
  {
    q: 'Dói?',
    a: 'Dói sim, mas passa rápido. Depende muito da sua tolerância, do local e do tamanho. Quem já fez comigo fala que a conversa e o ambiente ajudam a passar despercebido.',
  },
  {
    q: 'Como cuido depois?',
    a: 'Simples: deixar secar, não mexer, lavar com água morna e sabão neutro 2-3x ao dia nos primeiros dias. Usar pomada específica. Evitar exposição ao sol, piscina e academia por 15 dias. Dou um manual impresso no final.',
  },
  {
    q: 'Preciso de sinal?',
    a: 'Sim. Um sinal pequeno (combinamos no orçamento) garante sua data na agenda. Esse valor abate do preço final da tatuagem.',
  },
  {
    q: 'Posso levar minha referência?',
    a: 'Claro! Quanto melhor a referência, melhor a tatuagem. Pode ser foto, print, desenho — trago como está ou adapto para ficar perfeito no seu corpo.',
  },
  {
    q: 'Tem retoque/garantia?',
    a: 'Sim. Se algo sair fora do planejado, agendamos um retoque sem custo. A tatuagem é meu trabalho — sai certo.',
  },
  {
    q: 'E se não ficar bom?',
    a: 'A gente desenha o projeto junto antes de encostar a agulha. Você só aprova quando estiver 100%. E todo trabalho tem retoque incluso — se precisar ajustar, marcamos no mês seguinte sem custo.',
  },
  {
    q: 'É a sua primeira tatuagem?',
    a: 'Relaxa. Boa parte de quem me procura está estreando. Eu te explico cada passo antes — você nunca fica perdido. A gente conversa, eu tiro suas dúvidas e você entra confiante.',
  },
];

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
