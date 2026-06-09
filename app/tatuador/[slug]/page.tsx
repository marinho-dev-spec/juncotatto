import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import '../artist.css';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';
import { ARTISTS, getArtist, artistWhatsAppLink } from '@/lib/artistsData';

export function generateStaticParams() {
  return ARTISTS.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const artist = getArtist(params.slug);
  if (!artist) return { title: 'Tatuador · Junco Tattoo' };
  const title = `${artist.name} · ${artist.role} · Junco Tattoo`;
  const description = artist.bio[0];
  return {
    title,
    description,
    alternates: { canonical: `/tatuador/${artist.slug}` },
    openGraph: {
      type: 'profile',
      url: `https://www.juncotattoo.com/tatuador/${artist.slug}`,
      title,
      description,
      images: [{ url: artist.photo, width: 1100, height: 1100 }],
      locale: 'pt_BR',
    },
  };
}

export default function TatuadorPage({ params }: { params: { slug: string } }) {
  const artist = getArtist(params.slug);
  if (!artist) notFound();

  const waLink = artistWhatsAppLink(artist);

  return (
    <>
      <Header crossPage />
      <main id="conteudo" className="artist-main">
        <section className="artist-hero">
          <div className="artist-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={artist.photo} alt={`${artist.name}, ${artist.role}`} />
          </div>
          <div className="artist-intro">
            <span className="artist-eyebrow">
              {artist.founder ? '★ Fundador & CEO do Junco Studio' : '★ Tatuador no Junco'}
            </span>
            <h1 className="artist-name">{artist.name}</h1>
            <span className="artist-role">{artist.role}</span>
            <div className="artist-bio">
              {artist.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="artist-actions">
              <a
                className="btn btn-primary"
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar com {artist.name}
              </a>
              {artist.instagram && (
                <a
                  className="btn btn-secondary"
                  href={artist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              )}
            </div>
          </div>
        </section>

        <section className="artist-works">
          <h2>Trabalhos realizados</h2>
          {artist.works.length > 0 ? (
            <>
              <p className="artist-works-sub">
                Realismo preto e cinza feito no estúdio em Itapema.
              </p>
              <div className="artist-works-grid">
                {artist.works.map((w) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <a
                    key={w.src}
                    className="artist-work"
                    href={w.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={w.src} alt={w.alt} loading="lazy" decoding="async" />
                  </a>
                ))}
              </div>
            </>
          ) : (
            <div className="artist-works-empty">
              <p>
                Portfólio chegando em breve. Quer ver mais trabalhos do {artist.name} agora? Chama no
                WhatsApp que a gente te mostra.
              </p>
              <a className="btn btn-primary" href={waLink} target="_blank" rel="noopener noreferrer">
                Falar com {artist.name}
              </a>
            </div>
          )}
        </section>

        <Link className="artist-back" href="/#equipe">
          ← Voltar para a equipe
        </Link>
      </main>
      <Footer crossPage />
      <BackToTop />
    </>
  );
}
