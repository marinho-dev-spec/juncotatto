import { IconPerson } from '@/components/common/Icons';

interface Member {
  name: string;
  role: string;
  photo?: string;
  cta?: { label: string; href: string };
  placeholder?: boolean;
}

const TEAM: Member[] = [
  {
    name: 'Gabriel Junco',
    role: 'Especialista em Realismo Preto e Cinza',
    photo: '/imagens-junco/gabriel-junco.jpg',
    cta: { label: 'Ver trabalhos', href: '#trabalhos' },
  },
  { name: 'Em breve', role: 'Body Piercing', placeholder: true },
  { name: 'Em breve', role: 'Tatuador(a)', placeholder: true },
  { name: 'Em breve', role: 'Tatuador(a)', placeholder: true },
  { name: 'Em breve', role: 'Barbeiro', placeholder: true },
];

export default function Team() {
  return (
    <section className="team" id="equipe">
      <div className="container">
        <span className="eyebrow">★ EQUIPE</span>
        <h2 className="section-title">Quem faz acontecer</h2>
        <p className="section-subtitle">
          Um time de profissionais dedicados — tatuagem, piercing e barbearia — com o mesmo padrão
          de cuidado e qualidade.
        </p>

        <div className="team-grid">
          {TEAM.map((m, i) => (
            <article className={`team-card${m.placeholder ? ' team-card-placeholder' : ''}`} key={i}>
              <div className="team-photo">
                {m.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.photo} alt={`${m.name} — ${m.role}`} loading="lazy" decoding="async" />
                ) : (
                  <div className="team-photo-placeholder" aria-hidden="true">
                    <IconPerson />
                    <span>Foto em breve</span>
                  </div>
                )}
              </div>
              <div className="team-info">
                <h3 className="team-name">{m.name}</h3>
                <span className="team-role">{m.role}</span>
                {m.cta && (
                  <a className="btn btn-secondary btn-small team-cta" href={m.cta.href}>
                    {m.cta.label}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
