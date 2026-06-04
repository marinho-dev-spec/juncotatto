'use client';

import { useState } from 'react';

export default function Calculator() {
  const [units, setUnits] = useState(8);
  const price = units * 125;

  return (
    <div className="cine-calc">
      <span className="cine-tier-tag">Estimativa rápida</span>
      <h3>Calculadora de projeto</h3>
      <div className="cine-calc-value">${price.toLocaleString('en-US')}</div>
      <input
        type="range"
        min={1}
        max={40}
        value={units}
        className="cine-range"
        aria-label="Quantidade de unidades do projeto"
        onChange={(e) => setUnits(Number(e.target.value))}
      />
      <div className="cine-calc-row">
        <span>{units} unidades</span>
        <span>$125 / unidade</span>
      </div>
    </div>
  );
}
