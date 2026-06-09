import Link from 'next/link';
import { ARTISTS } from '@/lib/artistsData';

export default function Team() {
  const founder = ARTISTS.find((a) => a.founder);
  const others = ARTISTS.filter((a) => !a.founder);

  return (
    <section className="team" id="equipe">
      <div className="container">
        <span className="eyebrow">★ EQUIPE</span>
        <h2 className="section-title">Quem faz acontecer</h2>
        <p className="section-subtitle">
          Tatuadores especializados em realismo preto e cinza. Conheça o trabalho de cada um e
          agende direto com quem vai te atender.
        </p>

        {founder && (
          <article className="team-card team-featured">
            <div className="team-photo">
              <span className="team-founder-badge">★ Fundador &amp; CEO</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={founder.photo}
                alt={`${founder.name}, fundador do Junco Studio`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="team-info">
              <h3 className="team-name">{founder.name}</h3>
              <span className="team-role">{founder.role}</span>
              <p className="team-featured-bio">{founder.bio[0]}</p>
              <Link
                className="btn btn-primary btn-small team-cta"
                href={`/tatuador/${founder.slug}`}
              >
                Conhecer o trabalho do {founder.name.split(' ')[0]}
              </Link>
            </div>
          </article>
        )}

        <div className="team-grid">
          {others.map((a) => (
            <article className="team-card" key={a.slug}>
              <div className="team-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.photo} alt={`${a.name}, ${a.role}`} loading="lazy" decoding="async" />
              </div>
              <div className="team-info">
                <h3 className="team-name">{a.name}</h3>
                <span className="team-role">{a.role}</span>
                <Link className="btn btn-secondary btn-small team-cta" href={`/tatuador/${a.slug}`}>
                  Conhecer meu trabalho
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
