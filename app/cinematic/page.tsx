import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './cinematic.css';
import Calculator from './Calculator';

// 'Aspekta' é uma fonte comercial; usamos Archivo (grotesk pesada, 900) como equivalente livre.
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300', '500', '700', '900'],
  variable: '--font-cine',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cinematic Style — Demo | Junco',
  description: 'Demonstração do sistema de design Cinematic: dark mode imersivo, 3D e editorial.',
  robots: { index: false, follow: false },
};

const CUBE_FACES = [
  { src: '/imagens-junco/tatto-braco.webp', title: 'Realismo', cls: 'cine-face-front' },
  { src: '/imagens-junco/estudio.webp', title: 'Estúdio', cls: 'cine-face-bottom' },
  { src: '/imagens-junco/tatto-braco11.webp', title: 'Blackwork', cls: 'cine-face-back' },
  { src: '/imagens-junco/tatto-braco3.webp', title: 'Fine Line', cls: 'cine-face-top' },
];

const SUB_PROJECTS = [
  { src: '/imagens-junco/tatto-braco2.webp', title: 'Lobo · Realismo', tag: 'Black & Grey' },
  { src: '/imagens-piercing/20260403_151858.jpg', title: 'Piercing · Titânio', tag: 'Body' },
  { src: '/imagens-junco/tatto-braco-jesus.webp', title: 'Sacro · Detalhe', tag: 'Realismo' },
  { src: '/imagens-junco/estudio2.webp', title: 'Ambiente', tag: 'Studio' },
];

export default function CinematicPage() {
  return (
    <div className={`${archivo.variable} cine`}>
      {/* NAV */}
      <nav className="cine-nav">
        <div className="cine-logo">
          <span className="cine-dot" />
          JUNCO/STUDIO
        </div>
        <div className="cine-nav-links">
          <a href="#work">Work</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="cine-nav-cta">Start a project</button>
      </nav>

      {/* HERO ROLODEX 3D */}
      <header className="cine-hero">
        <div className="cine-hero-bgtext">JUNCO</div>
        <div className="cine-cube-stage">
          <div className="cine-cube-wrapper">
            {CUBE_FACES.map((face) => (
              <div className={`cine-face ${face.cls}`} key={face.cls}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={face.src} alt={face.title} />
                <span className="cine-face-title">{face.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="cine-hero-scrollhint">Scroll ↓</div>
      </header>

      {/* CASE STUDIES / BENTO GRID */}
      <section className="cine-section" id="work">
        <span className="cine-section-sub">Selected Work — 2014/2026</span>
        <h2 className="cine-section-header">Studies</h2>

        <div className="cine-featured">
          <div className="cine-window-dots">
            <span />
            <span />
            <span />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/imagens-junco/foto-estudio-todo.webp" alt="Projeto em destaque — estúdio Junco" />
          <div className="cine-card-label">
            <h3>Flagship Studio</h3>
            <span>Itapema / SC</span>
          </div>
        </div>

        <div className="cine-grid-2">
          {SUB_PROJECTS.map((p) => (
            <article className="cine-card" key={p.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.title} />
              <div className="cine-card-label">
                <h3>{p.title}</h3>
                <span>{p.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="cine-pricing" id="pricing">
        <div className="cine-pricing-glow" />
        <div className="cine-pricing-inner">
          <div className="cine-pricing-head">
            <span className="cine-section-sub">Pricing</span>
            <h2>Choose your scope</h2>
          </div>

          <div className="cine-tiers">
            <div className="cine-tier">
              <span className="cine-tier-tag">Starter</span>
              <h3 className="cine-tier-name">Flash</h3>
              <div className="cine-tier-price">
                $250 <small>/ peça</small>
              </div>
              <ul>
                <li>Desenho pré-definido</li>
                <li>Sessão única</li>
                <li>Material descartável</li>
              </ul>
              <button className="cine-tier-btn">Selecionar</button>
            </div>

            <div className="cine-tier cine-tier-featured">
              <span className="cine-tier-tag">Mais escolhido</span>
              <h3 className="cine-tier-name">Custom</h3>
              <div className="cine-tier-price">
                $600 <small>/ projeto</small>
              </div>
              <ul>
                <li>Design exclusivo</li>
                <li>Consultoria + aprovação</li>
                <li>Retoque incluso</li>
                <li>Realismo preto e cinza</li>
              </ul>
              <button className="cine-tier-btn">Selecionar</button>
            </div>

            <div className="cine-tier">
              <span className="cine-tier-tag">Premium</span>
              <h3 className="cine-tier-name">Fechamento</h3>
              <div className="cine-tier-price">
                $1.5k+ <small>/ braço</small>
              </div>
              <ul>
                <li>Projeto de grande escala</li>
                <li>Múltiplas sessões</li>
                <li>Acompanhamento total</li>
              </ul>
              <button className="cine-tier-btn">Selecionar</button>
            </div>
          </div>

          <Calculator />
        </div>
      </section>

      {/* FOOTER EDITORIAL */}
      <footer className="cine-footer" id="contact">
        <div className="cine-footer-mega">LET&apos;S INK</div>
        <div className="cine-footer-bottom">
          <span>Junco Tattoo &amp; Piercing — Itapema/SC</span>
          <span>Demo Cinematic Style · 2026</span>
        </div>
      </footer>
    </div>
  );
}
