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
