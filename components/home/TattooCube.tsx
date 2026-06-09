const FACES = [
  { src: '/imagens-junco/tattoo-01.webp', alt: 'Tatuagem realista de leão e retrato no braço', cls: 'cube-face-front' },
  { src: '/imagens-junco/tattoo-05.webp', alt: 'Retrato feminino em realismo preto e cinza', cls: 'cube-face-bottom' },
  { src: '/imagens-junco/tattoo-13.webp', alt: 'Tatuagem realista de guerreiro no antebraço', cls: 'cube-face-back' },
  { src: '/imagens-junco/tattoo-04.webp', alt: 'Tatuagem realista com relógio no antebraço', cls: 'cube-face-top' },
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
