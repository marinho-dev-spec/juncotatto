'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { abrirWhatsApp } from '@/lib/whatsapp';

interface HeaderProps {
  /** Quando true, links de seção usam /#secao (para a página de piercing) */
  crossPage?: boolean;
  /**
   * Modo landing page (tráfego pago): navegação mínima com âncoras locais,
   * sem links que tirem o visitante da página.
   */
  landing?: boolean;
}

export default function Header({ crossPage = false, landing = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Indicador de seção ativa no menu (apenas onde os links são âncoras locais)
  useEffect(() => {
    if ((crossPage && !landing) || typeof IntersectionObserver === 'undefined') return;
    const ids = ['trabalhos', 'contato'];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [crossPage, landing]);

  // Bloqueia scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Fecha o menu com a tecla Esc
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const prefix = crossPage && !landing ? '/' : '';
  const closeMenu = () => setMenuOpen(false);

  // Em modo landing a navegação é mínima e 100% local: nenhum link tira o
  // visitante do anúncio da página (evita vazamento de tráfego pago).
  const links = landing
    ? [
        { label: 'Trabalhos', href: '#trabalhos', internal: false },
        { label: 'Contato', href: '#contato', internal: false },
      ]
    : [
        { label: 'Trabalhos', href: `${prefix}#trabalhos`, internal: false },
        { label: 'Piercing', href: '/piercing', internal: true },
        { label: 'Contato', href: `${prefix}#contato`, internal: false },
      ];

  return (
    <>
      <header className={`header${scrolled ? ' is-scrolled' : ''}`} id="header" role="banner">
        <div className="container">
          <div className="header-content">
            {landing ? (
              <a href="#hero" className="logo" aria-label="Junco Tattoo & Piercing" onClick={closeMenu}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/junco-mark.svg"
                  alt=""
                  aria-hidden="true"
                  className="logo-img"
                  width={56}
                  height={56}
                />
                <span className="logo-word">JUNCO</span>
              </a>
            ) : (
              <Link href="/" className="logo" aria-label="Junco Tattoo & Piercing" onClick={closeMenu}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/junco-mark.svg"
                  alt=""
                  aria-hidden="true"
                  className="logo-img"
                  width={56}
                  height={56}
                />
                <span className="logo-word">JUNCO</span>
              </Link>
            )}

            <nav className="nav" role="navigation" aria-label="Menu principal">
              {links.map((l) => {
                const sectionId = l.href.includes('#') ? l.href.split('#')[1] : '';
                const isActive = (!crossPage || landing) && sectionId !== '' && sectionId === activeId;
                return l.internal ? (
                  <Link key={l.label} href={l.href}>
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    className={isActive ? 'active' : undefined}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {l.label}
                  </a>
                );
              })}
            </nav>

            <button
              className="btn btn-header-schedule"
              onClick={() => abrirWhatsApp('geral', 'header')}
              aria-label="Abrir WhatsApp para agendar"
            >
              Agendar
            </button>

            <button
              className={`hamburger${menuOpen ? ' active' : ''}`}
              id="hamburger"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              aria-controls="mobileMenu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile — overlay full-screen */}
      <div
        className={`mobile-menu${menuOpen ? ' active' : ''}`}
        id="mobileMenu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-menu-nav" aria-label="Menu mobile">
          {links.map((l, i) =>
            l.internal ? (
              <Link
                key={l.label}
                href={l.href}
                onClick={closeMenu}
                style={{ transitionDelay: `${0.12 + i * 0.07}s` }}
              >
                <span className="mobile-menu-index">0{i + 1}</span>
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                onClick={closeMenu}
                style={{ transitionDelay: `${0.12 + i * 0.07}s` }}
              >
                <span className="mobile-menu-index">0{i + 1}</span>
                {l.label}
              </a>
            )
          )}
        </nav>

        <div className="mobile-menu-footer">
          <button
            className="btn btn-primary mobile-menu-cta"
            onClick={() => {
              closeMenu();
              abrirWhatsApp('geral', 'menu-mobile');
            }}
          >
            Chamar o Gabriel no WhatsApp
          </button>
          <div className="mobile-menu-socials">
            <a href="https://instagram.com/junco_tattoo" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://www.google.com/maps/search/Junco+Tattoo+Itapema"
              target="_blank"
              rel="noopener noreferrer"
            >
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
