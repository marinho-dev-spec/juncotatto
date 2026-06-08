const FACES = [
  { src: '/imagens-junco/tatto-braco.webp', title: 'Realismo', cls: 'cube-face-front' },
  { src: '/imagens-junco/tatto-braco11.webp', title: 'Blackwork', cls: 'cube-face-bottom' },
  { src: '/imagens-junco/tatto-braco3.webp', title: 'Fine Line', cls: 'cube-face-back' },
  { src: '/imagens-junco/tatto-braco-jesus.webp', title: 'Cobertura', cls: 'cube-face-top' },
];

export default function TattooCube() {
  return (
    <section className="styles-showcase" id="estilos">
      <div className="container">
        <span className="eyebrow">★ ESTILOS</span>
        <h2 className="section-title">O que eu faço melhor</h2>
        <p className="section-subtitle">
          Realismo preto e cinza, blackwork, fine line e cobertura. Em todos os estilos, a mesma
          obsessão por detalhe.
        </p>

        <div className="cube-stage" aria-hidden="true">
          <div className="cube-wrapper">
            {FACES.map((face) => (
              <div className={`cube-face ${face.cls}`} key={face.cls}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={face.src} alt={face.title} loading="lazy" decoding="async" />
                <span className="cube-face-title">{face.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lista acessível dos estilos (o cubo é decorativo/visual) */}
        <ul className="styles-list">
          {FACES.map((f) => (
            <li key={f.title}>{f.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
