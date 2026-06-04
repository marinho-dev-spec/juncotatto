'use client';

import { useEffect, useState } from 'react';
import { abrirWhatsApp, type WhatsAppContext } from '@/lib/whatsapp';

interface FloatingCTAProps {
  context?: WhatsAppContext;
  label?: string;
}

export default function FloatingCTA({ context = 'geral', label = 'Agendar' }: FloatingCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? window.scrollY / max : 0;
      setVisible(pct > 0.5);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      id="floatingCta"
      className={`floating-cta-btn${visible ? ' visible' : ''}`}
      onClick={() => abrirWhatsApp(context)}
      aria-label={label}
      title={label}
    >
      <span className="floating-cta-icon">💬</span>
      <span className="floating-cta-text">{label}</span>
    </button>
  );
}
