'use client';

import { abrirWhatsApp } from '@/lib/whatsapp';

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imagens-junco/gabriel-junco.jpg"
              alt="Gabriel Junco - Tatuador especialista em realismo"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
          <div className="about-text">
            <h2 className="section-title">Sobre</h2>
            <p>
              Eu sei que tatuar dá frio na barriga: será que vai ficar bom, dói, vou me arrepender?
              Desde 2014 eu faço esse medo virar orgulho — e são mais de 600 avaliações 5 estrelas
              que confirmam isso.
            </p>
            <p>
              Sou especializado em realismo preto e cinza: um estilo que não perdoa erro. Por isso
              trabalho de um jeito só: sem pressa, um cliente por vez, com material descartável
              aberto na sua frente. Você não sai daqui com uma tatuagem qualquer. Sai com a sua, pra
              vida toda.
            </p>
            <button className="btn btn-primary" onClick={() => abrirWhatsApp('geral')}>
              Chamar o Gabriel no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
