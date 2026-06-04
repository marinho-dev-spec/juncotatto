'use client';

import { useEffect } from 'react';

const GALLERY = [
  { src: '/imagens-piercing/20260403_151858.jpg', alt: 'Piercing realizado no estúdio Junco' },
  { src: '/imagens-piercing/20260403_151907.jpg', alt: 'Piercing em titânio aplicado com agulha' },
  { src: '/imagens-piercing/20260403_152441.jpg', alt: 'Piercing de orelha profissional' },
  { src: '/imagens-piercing/20260403_152610.jpg', alt: 'Piercing com joia de titânio' },
  { src: '/imagens-piercing/20260403_152822.jpg', alt: 'Detalhe de piercing realizado' },
  { src: '/imagens-piercing/20260403_153227.jpg', alt: 'Piercing profissional em Itapema' },
];

export default function PiercingGallery() {
  useEffect(() => {
    let lightbox: { destroy: () => void } | null = null;
    let tries = 0;

    const init = () => {
      if (typeof window !== 'undefined' && typeof window.GLightbox === 'function') {
        lightbox = window.GLightbox({
          selector: '.glightbox-piercing',
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
    <section className="catalog-section">
      <div className="container">
        <h2>Trabalhos Realizados</h2>
        <p>Veja alguns dos piercings que já realizamos. Cada trabalho é único e personalizado.</p>

        <div className="piercing-gallery-grid">
          {GALLERY.map((img) => (
            <a
              key={img.src}
              href={img.src}
              className="piercing-gallery-item glightbox-piercing"
              data-gallery="piercing-gallery"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} loading="lazy" />
            </a>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: '#CCCCCC', fontSize: '0.9rem', marginTop: 0 }}>
          Clique em qualquer foto para ver em maior detalhe.
        </p>
      </div>
    </section>
  );
}
