'use client';

import { useEffect } from 'react';
import { trackEvent, trackWhatsAppContact, getAttribution } from '@/lib/analytics';

/**
 * Rastreador global de cliques externos (delegação no document):
 * cobre TODOS os links de saída do site sem instrumentar componente por
 * componente — Instagram, Google Maps/"Como chegar" e links diretos de
 * WhatsApp (os botões CTA já rastreiam no onClick e não passam por aqui,
 * pois são <button>, não <a>).
 * Também captura gclid/UTMs na chegada da página.
 */
export default function AnalyticsListener() {
  useEffect(() => {
    // persiste a atribuição da campanha assim que a página carrega
    getAttribution();

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as Element | null)?.closest?.('a[href]');
      if (!anchor) return;
      const href = anchor.getAttribute('href') ?? '';

      if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        trackWhatsAppContact('geral', 'link-direto');
      } else if (href.includes('instagram.com')) {
        trackEvent('instagram_click', { link_url: href, ...getAttribution() });
      } else if (href.includes('google.com/maps') || href.includes('maps.google')) {
        trackEvent('como_chegar_click', { link_url: href, ...getAttribution() });
      }
    };

    document.addEventListener('click', onClick, { capture: true, passive: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
