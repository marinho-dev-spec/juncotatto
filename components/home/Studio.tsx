// Fotos do espaço físico: prova de confiança para quem ainda não conhece o
// estúdio. Para adicionar novos ambientes (sala de piercing, barbearia...),
// basta acrescentar a foto em public/imagens-junco e uma entrada na lista.
const STUDIO_PHOTOS = [
  {
    src: '/imagens-junco/foto-estudio-todo.webp',
    alt: 'Vista completa do estúdio Junco Tattoo em Itapema, com lounge, recepção e estações de trabalho',
    caption: 'O estúdio completo',
    width: 382,
    height: 510,
  },
  {
    src: '/imagens-junco/estudio2.webp',
    alt: 'Sala de atendimento do Junco Tattoo com macas, ring lights e equipamentos esterilizados',
    caption: 'Sala de atendimento',
    width: 510,
    height: 510,
  },
  {
    src: '/imagens-junco/estudio.webp',
    alt: 'Lounge de espera do estúdio com sofás de couro e iluminação em LED',
    caption: 'Lounge de espera',
    width: 382,
    height: 510,
  },
  {
    src: '/imagens-junco/estudio-fktk.webp',
    alt: 'Recepção do estúdio Junco Tattoo com poltronas de couro e acabamento em concreto',
    caption: 'Recepção',
    width: 382,
    height: 510,
  },
];

export default function Studio() {
  return (
    <section className="studio" id="estudio">
      <div className="container">
        <h2 className="section-title">Conheça o estúdio</h2>
        <p className="section-subtitle">
          Um espaço pensado pra você chegar, relaxar e sair com orgulho da sua tatuagem: ambiente
          climatizado, materiais esterilizados e conforto de verdade, na Meia Praia em Itapema.
        </p>

        <div className="studio-grid">
          {STUDIO_PHOTOS.map((photo) => (
            <figure className="studio-card" key={photo.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
