/**
 * Analytics utilities — Google Analytics 4 + Meta Pixel
 * Funções seguras: só disparam se gtag/fbq existirem no window.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Dispara um evento no Google Analytics 4 */
export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

/** Dispara um evento no Meta Pixel */
export function trackPixelEvent(
  eventName: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', eventName, params);
  }
}

const ATTRIBUTION_KEYS = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign'] as const;

/**
 * Captura gclid/UTMs da URL na primeira visita e persiste na sessão,
 * para que a conversão (clique no WhatsApp) carregue a origem da campanha
 * mesmo depois de navegar entre páginas.
 */
export function getAttribution(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const params = new URLSearchParams(window.location.search);
    for (const key of ATTRIBUTION_KEYS) {
      const value = params.get(key);
      if (value) sessionStorage.setItem(`junco_${key}`, value);
    }
    const attribution: Record<string, string> = {};
    for (const key of ATTRIBUTION_KEYS) {
      const stored = sessionStorage.getItem(`junco_${key}`);
      if (stored) attribution[key] = stored;
    }
    return attribution;
  } catch {
    return {};
  }
}

/**
 * Rastreia clique de contato no WhatsApp (a conversão principal do site).
 * `contexto` = tipo de serviço; `origem` = qual CTA foi clicado.
 */
export function trackWhatsAppContact(contexto: string, origem = 'nao-informado'): void {
  trackEvent('whatsapp_contact', {
    contexto,
    cta_origem: origem,
    ...getAttribution(),
  });
  trackPixelEvent('Contact', {
    content_name: 'WhatsApp Contact',
    content_category: contexto,
  });
}

/** Rastreia agendamento de piercing específico */
export function trackPiercingBooking(piercingName: string): void {
  trackEvent('piercing_booking', {
    contexto: 'piercing',
    piercing: piercingName,
    ...getAttribution(),
  });
  trackPixelEvent('Contact', { content_name: piercingName });
}
