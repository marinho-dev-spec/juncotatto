'use client';

import { useState } from 'react';
import EarMap from './EarMap';
import PiercingGallery from './PiercingGallery';
import SafetyBlock from './SafetyBlock';
import PiercingCatalog from './PiercingCatalog';
import type { PiercingCategory } from '@/lib/piercingData';

type FilterKey = 'todos' | PiercingCategory;

export default function PiercingSections() {
  const [filter, setFilter] = useState<FilterKey>('todos');

  const selectOrelha = () => {
    setFilter('orelha');
    const el = document.getElementById('catalogo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <EarMap onSelectOrelha={selectOrelha} />
      <PiercingGallery />
      <SafetyBlock />
      <PiercingCatalog activeFilter={filter} onFilterChange={setFilter} />
    </>
  );
}
