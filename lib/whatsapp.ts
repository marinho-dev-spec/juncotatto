/**
 * WhatsApp integration — Junco Tattoo & Piercing
 */

import { trackWhatsAppContact, trackPiercingBooking } from './analytics';

export const WHATSAPP_NUMBER = '5547996615555';

export type WhatsAppContext = 'geral' | 'cobertura' | 'piercing';

export const WHATSAPP_MESSAGES: Record<WhatsAppContext, string> = {
  geral:
    'Oi, Gabriel! Vim pelo site e queria um orçamento. Minha ideia é mais ou menos assim: ___ (posso mandar referência). Quando você tem agenda?',
  cobertura:
    'Oi, Gabriel! Quero cobrir uma tatuagem antiga. Vou te mandar a foto agora pra você ver se dá.',
  piercing: 'Oi, Gabriel! Quero colocar um piercing. Como funciona?',
};

/** Abre o WhatsApp com a mensagem pré-formatada para o contexto */
export function abrirWhatsApp(tipo: WhatsAppContext = 'geral'): void {
  const message = WHATSAPP_MESSAGES[tipo] ?? WHATSAPP_MESSAGES.geral;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  trackWhatsAppContact(tipo);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank');
  }
}

/** Abre o WhatsApp para agendar um piercing específico */
export function abrirWhatsAppPiercing(tipo: string): void {
  const message = `Oi Gabriel! Quero agendar um piercing ${tipo}. Como funciona?`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  trackPiercingBooking(tipo);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank');
  }
}

/** Envia mensagem livre (usado pelo formulário de contato) */
export function enviarMensagemWhatsApp(nome: string, telefone: string, mensagem: string): void {
  const texto = `Oi, Gabriel! Meu nome é ${nome} (WhatsApp: ${telefone}).\n\n${mensagem}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
  trackWhatsAppContact('formulario');
  if (typeof window !== 'undefined') {
    window.open(url, '_blank');
  }
}

/** Formata telefone para (XX) XXXXX-XXXX */
export function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}
