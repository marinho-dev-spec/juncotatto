'use client';

import { useState } from 'react';

const POINTS = [
  { name: 'Hélix', cx: 115, cy: 95, labelX: 115, labelY: 75, anchor: 'middle' as const },
  { name: 'Tragus', cx: 150, cy: 175, labelX: 150, labelY: 155, anchor: 'middle' as const },
  { name: 'Lóbulo', cx: 140, cy: 310, labelX: 140, labelY: 330, anchor: 'middle' as const },
  { name: 'Daith', cx: 165, cy: 155, labelX: 185, labelY: 145, anchor: 'start' as const },
  { name: 'Conch', cx: 160, cy: 210, labelX: 185, labelY: 215, anchor: 'start' as const },
];

const EAR_CARDS = ['Hélix', 'Tragus', 'Lóbulo', 'Daith', 'Conch', 'Industrial'];

interface EarMapProps {
  onSelectOrelha: () => void;
}

export default function EarMap({ onSelectOrelha }: EarMapProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="catalog-section" style={{ background: '#161619' }}>
      <div className="container">
        <h2>Mapa da Orelha</h2>
        <p>Passe o mouse ou toque nos pontos para conhecer cada tipo de piercing de orelha.</p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '60px 0',
            minHeight: 400,
          }}
        >
          <svg
            width="320"
            height="420"
            viewBox="0 0 320 420"
            style={{ filter: 'drop-shadow(0 0 30px rgba(201, 162, 75, 0.15))', maxWidth: '100%', height: 'auto' }}
          >
            {/* Contorno da orelha */}
            <path
              d="M 100 60 Q 75 120 85 180 Q 80 240 100 290 Q 125 330 170 345 Q 215 330 240 290 Q 260 240 255 180 Q 265 120 240 60 Q 190 35 145 35 Q 120 40 100 60"
              fill="none"
              stroke="#C9A24B"
              strokeWidth="2.5"
              opacity="0.5"
            />
            {/* Linha do industrial */}
            <line x1="115" y1="95" x2="130" y2="135" stroke="#C9A24B" strokeWidth="2" opacity="0.4" />

            {POINTS.map((pt) => (
              <g key={pt.name}>
                <circle
                  cx={pt.cx}
                  cy={pt.cy}
                  r="8"
                  fill={hovered === pt.name ? '#C9A24B' : 'none'}
                  stroke="#C9A24B"
                  strokeWidth="2.5"
                  className="ear-point"
                  onMouseEnter={() => setHovered(pt.name)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={onSelectOrelha}
                />
                <text
                  x={pt.labelX}
                  y={pt.labelY}
                  textAnchor={pt.anchor}
                  fill="#C9A24B"
                  fontSize="12"
                  opacity={hovered === pt.name ? 1 : 0}
                  style={{ transition: 'opacity 0.3s ease', pointerEvents: 'none' }}
                >
                  {pt.name}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 16,
          }}
        >
          {EAR_CARDS.map((name) => (
            <div key={name} className="ear-info-card" onClick={onSelectOrelha}>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
