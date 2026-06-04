'use client';

import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: string;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 700,
  distance = '40px',
  className = '',
  once = true,
  threshold = 0.15,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Calcular posição inicial baseada na direção
    const getInitialTransform = () => {
      const offsetMap: Record<string, { x: string; y: string }> = {
        up: { x: '0', y: distance },
        down: { x: '0', y: `-${distance}` },
        left: { x: distance, y: '0' },
        right: { x: `-${distance}`, y: '0' },
        none: { x: '0', y: '0' },
      };
      const offset = offsetMap[direction];
      return `translate(${offset.x}, ${offset.y})`;
    };

    // Aplicar estilos iniciais
    element.style.opacity = '0';
    element.style.transform = getInitialTransform();
    element.style.willChange = 'opacity, transform';
    element.style.transition = 'none'; // Sem transição inicialmente

    // Configurar Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Elemento entrou no viewport
            setTimeout(() => {
              if (element) {
                element.style.transition = `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
                element.style.opacity = '1';
                element.style.transform = 'translate(0, 0)';
              }
            }, delay);

            // Desinscrever se once = true
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            // Resetar se once = false e elemento saiu do viewport
            element.style.transition = 'none';
            element.style.opacity = '0';
            element.style.transform = getInitialTransform();
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [direction, delay, duration, distance, once, threshold]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
