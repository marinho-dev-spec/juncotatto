import type { SVGProps } from 'react';

const base = {
  width: 40,
  height: 40,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/** Agulha lacrada / esterilizada */
export function IconNeedle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M3 21l6-6" />
      <path d="M8.5 15.5l-2-2" />
      <path d="M9 9l6-6 3 3-6 6z" />
      <path d="M14 4l3 3" />
      <path d="M9 9l-1 1 3 3 1-1" />
    </svg>
  );
}

/** Esterilização / autoclave (escudo com check) */
export function IconShieldCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

/** Luva / proteção (gota + escudo simples) */
export function IconGlove(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M7 11V5.5a1.5 1.5 0 0 1 3 0V10" />
      <path d="M10 10V4.5a1.5 1.5 0 0 1 3 0V10" />
      <path d="M13 10V6a1.5 1.5 0 0 1 3 0v6" />
      <path d="M16 9.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-2.7L5 14.5a1.6 1.6 0 0 1 2.5-2L9 14" />
    </svg>
  );
}

/** Atendimento individual (pessoa) */
export function IconPerson(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
    </svg>
  );
}

/** Seta para baixo (scroll cue) */
export function IconChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={28} height={28} {...props} aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/** Seta para cima (back to top) */
export function IconArrowUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={22} height={22} {...props} aria-hidden="true">
      <path d="M12 19V5" />
      <path d="M5 12l7-7 7 7" />
    </svg>
  );
}

/** Ícone do WhatsApp (preenchido) */
export function IconWhatsApp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

/** Lupa / zoom (overlay da galeria) */
export function IconZoom(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={32} height={32} {...props} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
      <path d="M11 8v6M8 11h6" />
    </svg>
  );
}
