'use client';

import { useMemo, useState } from 'react';
import { piercingData, FILTER_LABELS, type PiercingCategory } from '@/lib/piercingData';
import { abrirWhatsAppPiercing } from '@/lib/whatsapp';

type FilterKey = 'todos' | PiercingCategory;

interface PiercingCatalogProps {
  /** filtro inicial controlado externamente (ex.: clique no mapa) */
  activeFilter: FilterKey;
  onFilterChange: (filter: FilterKey) => void;
}

export default function PiercingCatalog({ activeFilter, onFilterChange }: PiercingCatalogProps) {
  const items = useMemo(() => {
    if (activeFilter === 'todos') {
      return Object.values(piercingData).flat();
    }
    return piercingData[activeFilter] ?? [];
  }, [activeFilter]);

  return (
    <section className="catalog-section" id="catalogo">
      <div className="container">
        <h2>Catálogo Completo de Piercing</h2>
        <p>
          Conheça todos os tipos de piercing que oferecemos. Cada um com suas características únicas,
          tempo de cicatrização e material recomendado.
        </p>

        <div className="filter-buttons">
          {FILTER_LABELS.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
              onClick={() => onFilterChange(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="piercing-catalog">
          {items.map((p) => (
            <div className="piercing-card" key={p.nome}>
              <h3>{p.nome}</h3>
              <p>{p.desc}</p>
              <div className="piercing-details">
                <span>
                  <strong>Cicatrização:</strong> {p.cicatriza}
                </span>
                <span>
                  <strong>Joia:</strong> {p.joia}
                </span>
              </div>
              <button className="piercing-btn" onClick={() => abrirWhatsAppPiercing(p.nome)}>
                Agendar {p.nome}
              </button>
            </div>
          ))}
        </div>

        <p className="disclaimer">
          ★ Tempos de cicatrização são aproximados e variam de pessoa para pessoa. A higiene adequada
          acelera o processo. Não trabalho com preço fixo. Faça um orçamento pelo WhatsApp.
        </p>
      </div>
    </section>
  );
}
