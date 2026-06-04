'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  /** valor final */
  end: number;
  /** casas decimais (default 0) */
  decimals?: number;
  /** prefixo (ex.: "+") */
  prefix?: string;
  /** sufixo (ex.: "%") */
  suffix?: string;
  /** duração da contagem (ms) */
  duration?: number;
  /** separador de milhar (desligar para anos, ex.: 2014) */
  grouping?: boolean;
}

/** Contador animado que dispara quando entra na viewport. Formato pt-BR (vírgula decimal). */
export default function CountUp({
  end,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1600,
  grouping = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setValue(end);
      return;
    }

    const animate = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(end * eased);
        if (progress < 1) requestAnimationFrame(tick);
        else setValue(end);
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === 'undefined') {
      setValue(end);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  const formatted = value.toLocaleString('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: grouping,
  });

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
