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

/** Rastreia clique de contato no WhatsApp em ambas as plataformas */
export function trackWhatsAppContact(label: string): void {
  trackEvent('whatsapp_contact', {
    event_category: 'engagement',
    event_label: label,
    value: 1,
  });
  trackPixelEvent('Contact', {
    content_name: 'WhatsApp Contact',
    value: 1.0,
    currency: 'BRL',
    content_type: 'product',
  });
}

/** Rastreia agendamento de piercing específico */
export function trackPiercingBooking(piercingName: string): void {
  trackEvent('piercing_booking', {
    event_category: 'engagement',
    event_label: piercingName,
  });
  trackPixelEvent('Contact', { content_name: piercingName });
}
