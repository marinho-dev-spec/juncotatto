'use client';

import { useState } from 'react';

export default function BeforeAfter() {
  const [value, setValue] = useState(50);

  return (
    <section className="before-after" id="antes-depois">
      <div className="container">
        <h2 className="section-title">Antes &amp; Depois</h2>
        <p className="section-subtitle">
          Aquela tatuagem que te incomoda pode virar a que você mais ama.
        </p>

        <div className="ba-slider" id="baSlider">
          <div className="ba-before" style={{ width: `${value}%` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/imagens-junco/tatto-braco.webp" alt="Antes da tatuagem" />
            <span className="ba-label">ANTES</span>
          </div>
          <div className="ba-after">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/imagens-junco/tatto-braco2.webp" alt="Depois da tatuagem" />
            <span className="ba-label">DEPOIS</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={value}
            className="ba-slider-handle"
            id="baSliderHandle"
            aria-label="Comparar antes e depois"
            style={{ left: `${value}%` }}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </div>
      </div>
    </section>
  );
}
