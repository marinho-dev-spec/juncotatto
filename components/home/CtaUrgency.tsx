'use client';

import { abrirWhatsApp } from '@/lib/whatsapp';

export default function CtaUrgency() {
  return (
    <section className="cta-urgency">
      <div className="container">
        <div className="cta-urgency-content">
          <h2>A agenda enche rápido. Garanta a sua data.</h2>
          <p>
            Trabalho com um cliente por vez, sem pressa. Por isso as datas fecham rápido. Se quer
            uma tatuagem de qualidade, fala comigo agora.
          </p>
          <button
            className="btn btn-primary btn-pulse"
            onClick={() => abrirWhatsApp('geral', 'urgencia')}
            style={{ marginTop: 8 }}
          >
            Garantir minha data no WhatsApp
          </button>
          <p className="cta-urgency-subtitle" style={{ marginTop: 16 }}>
            ★★★★★ 4,9 · Resposta em até 2h • Retoque incluso • Material descartável aberto na sua
            frente
          </p>
          <p
            style={{
              fontSize: '0.9rem',
              color: '#CCCCCC',
              marginTop: '20px',
              fontStyle: 'italic',
            }}
          >
            ★ Mais de 600 pessoas já confiaram em mim. E boa parte delas voltou.
          </p>
        </div>
      </div>
    </section>
  );
}
