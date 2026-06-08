'use client';

import { useEffect, useState } from 'react';
import { abrirWhatsApp } from '@/lib/whatsapp';
import { IconChevronDown } from '@/components/common/Icons';

const HERO_IMAGES = [
  { src: '/imagens-junco/estudio.webp', alt: 'Estúdio profissional Junco Tattoo em Itapema com equipamentos de tatuagem' },
  { src: '/imagens-junco/tatto-braco.webp', alt: 'Tatuagem em realismo preto e cinza feita no braço por Gabriel Junco' },
  { src: '/imagens-junco/estudio2.webp', alt: 'Estúdio profissional Junco Tattoo em Itapema' },
  { src: '/imagens-junco/tatto-braco2.webp', alt: 'Detalhe de tatuagem em realismo preto e cinza' },
  { src: '/imagens-junco/estudio-fktk.webp', alt: 'Estúdio profissional Junco Tattoo em Itapema' },
  { src: '/imagens-junco/tatto-braco3.webp', alt: 'Tatuagem no braço em realismo preto e cinza' },
  { src: '/imagens-junco/foto-estudio-todo.webp', alt: 'Vista completa do estúdio Junco com espaço dedicado e higienizado' },
  { src: '/imagens-junco/tatto-braco11.webp', alt: 'Obra de tatuagem em realismo preto e cinza' },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {HERO_IMAGES.map((img, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="carousel-image"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="eyebrow">
          ★ ESPECIALISTA REALISMO PRETO E CINZA · ITAPEMA/SC · DESDE 2016
        </span>
        <h1 className="hero-headline">
          A tatuagem que você vai ter orgulho de mostrar por anos.
        </h1>
        <p className="hero-subtitle">
          Fine Line · Realismo · Cobertura · Lettering
          <br />
          <small>Consultoria → Design Exclusivo → Execução Perfeita</small>
        </p>
        <div className="hero-badge">
          <span className="stars">★★★★★ 4,9</span>
          <span className="rating">+600 avaliações reais · 100% Material Descartável</span>
        </div>
        <div className="hero-buttons">
          <button
            className="btn btn-primary btn-pulse ripple-effect"
            onClick={() => abrirWhatsApp('geral')}
          >
            Chamar o Gabriel no WhatsApp
          </button>
          <button
            className="btn btn-secondary ripple-effect"
            onClick={() => scrollToSection('trabalhos')}
          >
            ↓ Ver Portfólio
          </button>
        </div>
        <div className="hero-urgency">
          <small>
            Atendimento individual, criação exclusiva e agenda limitada para garantir qualidade em
            cada projeto.
          </small>
        </div>
      </div>

      <button
        className="hero-scroll-cue"
        onClick={() => scrollToSection('trabalhos')}
        aria-label="Rolar para ver os trabalhos"
      >
        <span>Role para ver</span>
        <IconChevronDown />
      </button>
    </section>
  );
}
