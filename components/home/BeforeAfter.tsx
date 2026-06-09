'use client';

import { useCallback, useRef, useState } from 'react';

export default function BeforeAfter() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(50);
  const [dragging, setDragging] = useState(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setFromClientX(e.clientX);
  };

  const stop = () => setDragging(false);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === 'ArrowLeft') {
      setValue((v) => Math.max(0, v - step));
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      setValue((v) => Math.min(100, v + step));
      e.preventDefault();
    } else if (e.key === 'Home') {
      setValue(0);
      e.preventDefault();
    } else if (e.key === 'End') {
      setValue(100);
      e.preventDefault();
    }
  };

  return (
    <section className="before-after" id="antes-depois">
      <div className="container">
        <h2 className="section-title">Antes &amp; Depois</h2>
        <p className="section-subtitle">
          Aquela tatuagem que te incomoda pode virar a que você mais ama. Arraste para comparar.
        </p>

        <div
          className={`ba-slider${dragging ? ' is-dragging' : ''}`}
          id="baSlider"
          ref={sliderRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stop}
          onPointerCancel={stop}
        >
          {/* Camada base: DEPOIS */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="ba-img ba-img-after"
            src="/imagens-junco/tattoo-04.webp"
            alt="Tatuagem depois do trabalho"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
          {/* Camada recortada: ANTES */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="ba-img ba-img-before"
            src="/imagens-junco/tattoo-12.webp"
            alt="Tatuagem antes do trabalho"
            loading="lazy"
            decoding="async"
            draggable={false}
            style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
          />

          <span className="ba-label ba-label-antes">Antes</span>
          <span className="ba-label ba-label-depois">Depois</span>

          {/* Divisória + alça (arrastável e acessível por teclado) */}
          <div className="ba-divider" style={{ left: `${value}%` }}>
            <button
              type="button"
              className="ba-handle"
              role="slider"
              tabIndex={0}
              aria-label="Comparar antes e depois"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(value)}
              aria-valuetext={`${Math.round(value)}% antes`}
              onKeyDown={onKeyDown}
            >
              <span aria-hidden="true">‹</span>
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
