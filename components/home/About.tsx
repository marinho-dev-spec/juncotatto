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
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
          <div className="about-text">
            <h2 className="section-title">Sobre Gabriel Junco</h2>
            <p>
              Há mais de 10 anos transformando ideias em tatuagens que carregam significado,
              identidade e história.
            </p>
            <p>
              Sou Gabriel Junco, especialista em realismo preto e cinza, e acredito que uma boa
              tatuagem vai muito além de uma imagem bonita. Ela precisa ter impacto hoje e continuar
              impressionando daqui a muitos anos. Por isso, cada projeto é desenvolvido de forma
              exclusiva, respeitando a anatomia, o fluxo do corpo e a durabilidade da tatuagem ao
              longo do tempo.
            </p>
            <p>
              Atendo um cliente por vez, sem pressa, dedicando atenção total a cada detalhe do
              processo. Desde a criação da arte até a execução final, meu compromisso é entregar um
              trabalho que você tenha orgulho de carregar para o resto da vida.
            </p>
            <p>
              Mais de 600 avaliações 5 estrelas refletem aquilo que considero mais importante:
              confiança, qualidade e uma experiência que faz o cliente se sentir seguro do primeiro
              contato até a cicatrização.
            </p>
            <p>
              <strong style={{ color: 'var(--bone)' }}>
                Sua tatuagem merece mais do que uma sessão. Merece um projeto pensado para durar.
              </strong>
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
