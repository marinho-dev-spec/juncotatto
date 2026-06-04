'use client';

import React, { useEffect, useRef, type ReactNode, type CSSProperties } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  /** atraso antes de iniciar a animação (ms) */
  delay?: number;
  /** duração da transição (ms) */
  duration?: number;
  /** distância do deslocamento inicial */
  distance?: string;
  className?: string;
  /** anima apenas uma vez (padrão) ou sempre que entra/sai do viewport */
  once?: boolean;
  /** fração do elemento visível para disparar */
  threshold?: number;
  /** estilos extras aplicados ao wrapper */
  style?: CSSProperties;
}

function initialTransform(direction: Direction, distance: string): string {
  switch (direction) {
    case 'up':
      return `translate(0, ${distance})`;
    case 'down':
      return `translate(0, -${distance})`;
    case 'left':
      return `translate(${distance}, 0)`;
    case 'right':
      return `translate(-${distance}, 0)`;
    default:
      return 'translate(0, 0)';
  }
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  distance = '32px',
  className = '',
  once = true,
  threshold = 0.15,
  style,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Respeita usuários que preferem menos movimento
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Fallback: sem suporte a IntersectionObserver ou movimento reduzido → mostra direto
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      element.style.opacity = '1';
      element.style.transform = 'translate(0, 0)';
      return;
    }

    const reveal = () => {
      element.style.transition = `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
      element.style.opacity = '1';
      element.style.transform = 'translate(0, 0)';
    };

    const hide = () => {
      element.style.transition = 'none';
      element.style.opacity = '0';
      element.style.transform = initialTransform(direction, distance);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(reveal, delay);
            if (once) observer.unobserve(element);
          } else if (!once) {
            hide();
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [direction, delay, duration, distance, once, threshold]);

  // Estilos iniciais definidos já na renderização (SSR) para evitar "flash"
  const initialStyle: CSSProperties = {
    opacity: 0,
    transform: initialTransform(direction, distance),
    willChange: 'opacity, transform',
    ...style,
  };

  return (
    <div ref={elementRef} className={className} style={initialStyle}>
      {children}
    </div>
  );
};

export default ScrollReveal;
