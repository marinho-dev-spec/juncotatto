'use client';

import { useEffect } from 'react';
import { IconZoom } from '@/components/common/Icons';

declare global {
  interface Window {
    GLightbox?: (options: Record<string, unknown>) => { destroy: () => void };
  }
}

const GALLERY_IMAGES = [
  { src: '/imagens-junco/tattoo-01.webp', alt: 'Tatuagem em realismo preto e cinza com leão e retrato no braço' },
  { src: '/imagens-junco/tattoo-02.webp', alt: 'Tatuagem realista de rostos em preto e cinza no braço' },
  { src: '/imagens-junco/tattoo-03.webp', alt: 'Braço fechado em realismo preto e cinza' },
  { src: '/imagens-junco/tattoo-04.webp', alt: 'Tatuagem realista com relógio e detalhes no antebraço' },
  { src: '/imagens-junco/tattoo-05.webp', alt: 'Retrato feminino em realismo preto e cinza no braço' },
  { src: '/imagens-junco/tattoo-06.webp', alt: 'Tatuagem realista de rosto no braço' },
  { src: '/imagens-junco/tattoo-07.webp', alt: 'Retrato em realismo preto e cinza no braço' },
  { src: '/imagens-junco/tattoo-09.webp', alt: 'Tatuagem realista no antebraço em preto e cinza' },
  { src: '/imagens-junco/tattoo-13.webp', alt: 'Tatuagem de guerreiro em realismo no antebraço' },
  { src: '/imagens-junco/tattoo-14.webp', alt: 'Tatuagem fine line de lettering no braço' },
];

export default function Gallery() {
  useEffect(() => {
    let lightbox: { destroy: () => void } | null = null;
    let tries = 0;

    const init = () => {
      if (typeof window !== 'undefined' && typeof window.GLightbox === 'function') {
        lightbox = window.GLightbox({
          selector: '.glightbox',
          touchNavigation: true,
          loop: true,
        });
      } else if (tries < 20) {
        tries += 1;
        setTimeout(init, 200);
      }
    };

    init();
    return () => {
      if (lightbox) lightbox.destroy();
    };
  }, []);

  return (
    <section className="gallery" id="trabalhos">
      <div className="container">
        <h2 className="section-title">Trabalhos que falam por si</h2>
        <p className="section-subtitle">
          Realismo preto e cinza, cobertura e fine line. Cada peça é criada do zero para o seu
          corpo. Aqui não tem desenho de catálogo.
        </p>

        <div className="gallery-grid" id="galleryGrid">
          {GALLERY_IMAGES.map((img) => (
            <a
              key={img.src}
              href={img.src}
              className="gallery-item glightbox"
              data-gallery="tattoos"
              aria-label={`Ampliar: ${img.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
              <span className="gallery-overlay">
                <IconZoom />
              </span>
            </a>
          ))}
        </div>

        <div className="gallery-footer">
          <a
            href="https://instagram.com/junco_tattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="link-instagram"
          >
            Ver mais no Instagram @junco_tattoo →
          </a>
        </div>
      </div>
    </section>
  );
}
