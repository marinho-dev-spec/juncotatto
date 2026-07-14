'use client';

import { useEffect } from 'react';

type Img = {
  src: string;
  alt: string;
  /** Versão reduzida exibida no carrossel; o lightbox continua abrindo o src cheio */
  thumb?: string;
};

interface Props {
  images: Img[];
  /** Se definido, os itens viram links do GLightbox agrupados por esse nome */
  lightboxGroup?: string;
  /** Velocidade: segundos por imagem (quanto maior, mais devagar) */
  secondsPerImage?: number;
}

export default function MarqueeGallery({ images, lightboxGroup, secondsPerImage = 4.5 }: Props) {
  // Garante imagens suficientes para preencher telas largas mesmo com poucas fotos
  const MIN = 8;
  const reps = Math.max(2, Math.ceil(MIN / Math.max(images.length, 1)));
  const base = Array.from({ length: reps }, () => images).flat();
  const loop = [...base, ...base]; // duas cópias -> loop perfeito em -50%
  const duration = Math.round(loop.length * secondsPerImage);

  useEffect(() => {
    if (!lightboxGroup) return;
    let lb: { destroy: () => void } | null = null;
    let tries = 0;
    const init = () => {
      const G = (window as unknown as { GLightbox?: (o: object) => { destroy: () => void } })
        .GLightbox;
      if (typeof G === 'function') {
        lb = G({ selector: `.glightbox-${lightboxGroup}`, touchNavigation: true, loop: true });
      } else if (tries < 50) {
        // O GLightbox carrega em lazyOnload; em conexões lentas pode demorar
        tries += 1;
        setTimeout(init, 200);
      }
    };
    init();
    return () => {
      if (lb) lb.destroy();
    };
  }, [lightboxGroup]);

  return (
    <div
      className="marquee"
      style={{ ['--marquee-duration' as string]: `${duration}s` }}
      role="region"
      aria-roledescription="carrossel"
      aria-label="Trabalhos realizados"
    >
      <ul className="marquee-track">
        {loop.map((img, i) => {
          const isClone = i >= base.length;
          const imgEl = (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={img.thumb ?? img.src} alt={isClone ? '' : img.alt} loading="lazy" decoding="async" draggable={false} />
          );
          return (
            <li className="marquee-item" key={i} aria-hidden={isClone || undefined}>
              {lightboxGroup && !isClone ? (
                <a
                  href={img.src}
                  className={`glightbox-${lightboxGroup}`}
                  data-gallery={lightboxGroup}
                  aria-label={`Ampliar: ${img.alt}`}
                >
                  {imgEl}
                </a>
              ) : (
                imgEl
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
