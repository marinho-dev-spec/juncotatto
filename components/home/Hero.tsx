'use client';

import { useEffect, useState } from 'react';
import { abrirWhatsApp } from '@/lib/whatsapp';
import { IconChevronDown } from '@/components/common/Icons';

export interface HeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const HERO_IMAGES: HeroImage[] = [
  { src: '/imagens-junco/estudio.webp', alt: 'Estúdio profissional Junco Tattoo em Itapema com equipamentos de tatuagem', width: 382, height: 510 },
  { src: '/imagens-junco/tattoo-15.webp', alt: 'Fechamento de braço com leão e rosto de Jesus em realismo preto e cinza', width: 1400, height: 1867 },
  { src: '/imagens-junco/estudio2.webp', alt: 'Estúdio profissional Junco Tattoo em Itapema', width: 510, height: 510 },
  { src: '/imagens-junco/tattoo-17.webp', alt: 'Fechamento de braço com leão, cruz, relógio e bússola em realismo preto e cinza', width: 1400, height: 1867 },
  { src: '/imagens-junco/estudio-fktk.webp', alt: 'Estúdio profissional Junco Tattoo em Itapema', width: 382, height: 510 },
  { src: '/imagens-junco/tattoo-16.webp', alt: 'Tatuagem de estátua grega de Zeus em realismo preto e cinza no braço', width: 1400, height: 1867 },
  { src: '/imagens-junco/foto-estudio-todo.webp', alt: 'Vista completa do estúdio Junco com espaço dedicado e higienizado', width: 382, height: 510 },
  { src: '/imagens-junco/tattoo-18.webp', alt: 'Tatuagem de Jesus Cristo com coroa de espinhos e cruz em realismo no braço', width: 1400, height: 1867 },
];

interface HeroProps {
  /** Texto pequeno acima do H1 */
  eyebrow?: string;
  /** H1 da página — nas LPs de anúncio deve espelhar a busca (message match) */
  headline?: string;
  /** Linha de apoio abaixo do H1 */
  subtitle?: React.ReactNode;
  /** Imagens do carrossel (a primeira é a LCP da página) */
  images?: HeroImage[];
  /** Origem do clique para o rastreamento de conversão */
  trackingOrigin?: string;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero({
  eyebrow = '★ ESPECIALISTA REALISMO PRETO E CINZA · ITAPEMA/SC · DESDE 2016',
  headline = 'A tatuagem que você vai ter orgulho de mostrar por anos.',
  subtitle,
  images = HERO_IMAGES,
  trackingOrigin = 'hero',
}: HeroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="hero" id="hero">
      <div className="hero-carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="carousel-image"
              width={img.width}
              height={img.height}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : undefined}
            />
          ))}
        </div>
      </div>
      <div className="hero-overlay" />
      {/* Marca d'água do emblema (decorativa) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/junco-mark.svg" alt="" aria-hidden="true" className="hero-watermark" />
      <div className="hero-content">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="hero-headline">{headline}</h1>
        <p className="hero-subtitle">
          {subtitle ?? (
            <>
              Especialistas em realismo preto e cinza
              <br />
              <small>Consultoria → Design Exclusivo → Execução Perfeita</small>
            </>
          )}
        </p>
        <div className="hero-badge">
          <span className="stars">★★★★★ 4,9</span>
          <span className="rating">+600 avaliações reais · 100% Material Descartável</span>
        </div>
        <div className="hero-buttons">
          <button
            className="btn btn-primary btn-pulse"
            onClick={() => abrirWhatsApp('geral', trackingOrigin)}
          >
            Chamar o Gabriel no WhatsApp
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => scrollToSection('trabalhos')}
          >
            ↓ Ver trabalhos
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
