import Link from 'next/link';

interface FooterProps {
  crossPage?: boolean;
}

export default function Footer({ crossPage = false }: FooterProps) {
  const prefix = crossPage ? '/' : '';

  return (
    <footer className="footer">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/junco-mark.svg" alt="" aria-hidden="true" className="footer-watermark" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/junco-logo.svg"
              alt="Junco Tattoo & Piercing"
              className="footer-logo"
              width={90}
              height={90}
            />
            <p>
              Tatuagem &amp; Piercing em Itapema/SC
              <br />
              Gabriel Junco
            </p>
          </div>
          <div className="footer-nav">
            <h5>Navegação</h5>
            <a href={`${prefix}#trabalhos`}>Trabalhos</a>
            <a href={`${prefix}#avaliacoes`}>Avaliações</a>
            <Link href="/piercing">Piercing</Link>
            <a href={`${prefix}#sobre`}>Sobre</a>
            <a href={`${prefix}#duvidas`}>Dúvidas</a>
            <a href={`${prefix}#contato`}>Contato</a>
          </div>
          <div className="footer-contact">
            <h5>Contato</h5>
            <a href="https://wa.me/5547996615555" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="https://instagram.com/junco_tattoo" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a
              href="https://www.google.com/maps/search/Junco+Tattoo+Itapema"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Junco Tattoo &amp; Piercing. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
