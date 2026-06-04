'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { abrirWhatsApp } from '@/lib/whatsapp';

interface HeaderProps {
  /** Quando true, links de seção usam /#secao (para a página de piercing) */
  crossPage?: boolean;
}

export default function Header({ crossPage = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Header com sombra ao rolar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bloqueia scroll do body quando menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const prefix = crossPage ? '/' : '';
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="header"
      id="header"
      role="banner"
      style={
        scrolled
          ? {
              boxShadow: '0 8px 32px rgba(201, 162, 75, 0.15)',
              backgroundColor: 'rgba(11, 11, 13, 0.97)',
            }
          : undefined
      }
    >
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo" aria-label="Junco Tattoo">
            <span className="logo-text">JUNCO</span>
            <span className="logo-dot" />
          </Link>

          <nav className="nav" role="navigation" aria-label="Menu principal">
            <a href={`${prefix}#trabalhos`}>Trabalhos</a>
            <Link href="/piercing">Piercing</Link>
            <a href={`${prefix}#contato`}>Contato</a>
          </nav>

          <button
            className="btn btn-header-schedule"
            onClick={() => abrirWhatsApp('geral')}
            aria-label="Abrir WhatsApp para agendar"
          >
            Agendar
          </button>

          <button
            className={`hamburger${menuOpen ? ' active' : ''}`}
            id="hamburger"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Menu mobile (dropdown) */}
      <nav
        className={`mobile-nav${menuOpen ? ' active' : ''}`}
        id="mobileMenu"
        aria-hidden={!menuOpen}
      >
        <a href={`${prefix}#trabalhos`} onClick={closeMenu}>
          Trabalhos
        </a>
        <Link href="/piercing" onClick={closeMenu}>
          Piercing
        </Link>
        <a href={`${prefix}#contato`} onClick={closeMenu}>
          Contato
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            closeMenu();
            abrirWhatsApp('geral');
          }}
          style={{ color: 'var(--gold)', fontWeight: 600 }}
        >
          Chamar no WhatsApp
        </a>
      </nav>
    </header>
  );
}
