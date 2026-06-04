'use client';

import { useEffect } from 'react';
import { IconZoom } from '@/components/common/Icons';

declare global {
  interface Window {
    GLightbox?: (options: Record<string, unknown>) => { destroy: () => void };
  }
}

const GALLERY_IMAGES = [
  { src: '/imagens-junco/tatto-braco.webp', alt: 'Tatuagem realismo preto e cinza no braço' },
  { src: '/imagens-junco/tatto-braco2.webp', alt: 'Detalhe de tatuagem em realismo' },
  { src: '/imagens-junco/tatto-braco3.webp', alt: 'Tatuagem fine line no braço' },
  { src: '/imagens-junco/tatto-braco5.jpg', alt: 'Tatuagem realismo preto e cinza' },
  { src: '/imagens-junco/tatto-braco11.webp', alt: 'Tatuagem blackwork no braço' },
  { src: '/imagens-junco/tatto-braco-jesus.webp', alt: 'Tatuagem realismo religioso' },
  { src: '/imagens-junco/tatto-3.webp', alt: 'Tatuagem custom exclusiva' },
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
        <h2 className="section-title">Trabalhos Realizados</h2>
        <p className="section-subtitle">
          Especializado em realismo preto e cinza, cobertura e fine line. Veja alguns dos trabalhos
          que já realizei.
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
