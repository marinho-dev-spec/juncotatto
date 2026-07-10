const FACES = [
  { src: '/imagens-junco/tattoo-16.webp', alt: 'Tatuagem de estátua grega de Zeus em realismo preto e cinza', cls: 'cube-face-front' },
  { src: '/imagens-junco/tattoo-23.webp', alt: 'Tatuagem de rosto feminino estilo chicano em realismo', cls: 'cube-face-bottom' },
  { src: '/imagens-junco/tattoo-20.webp', alt: 'Tatuagem de armadura de cavaleiro com espada em realismo', cls: 'cube-face-back' },
  { src: '/imagens-junco/tattoo-21.webp', alt: 'Tatuagem de guerreiro com elmo e espada em realismo', cls: 'cube-face-top' },
];

export default function TattooCube() {
  return (
    <section className="styles-showcase" id="estilos">
      <div className="container">
        <span className="eyebrow">★ REALISMO</span>
        <h2 className="section-title">O que a gente faz melhor</h2>
        <p className="section-subtitle">
          Realismo preto e cinza. Cada peça é feita com profundidade, textura e obsessão por
          cada detalhe.
        </p>

        <div className="cube-stage" aria-hidden="true">
          <div className="cube-wrapper">
            {FACES.map((face) => (
              <div className={`cube-face ${face.cls}`} key={face.cls}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={face.src} alt={face.alt} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>

        <ul className="styles-list">
          <li>Realismo preto e cinza</li>
        </ul>
      </div>
    </section>
  );
}
