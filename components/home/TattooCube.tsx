const FACES = [
  { src: '/imagens-junco/tattoo-01.webp', title: 'Realismo', cls: 'cube-face-front' },
  { src: '/imagens-junco/tattoo-05.webp', title: 'Retratos', cls: 'cube-face-bottom' },
  { src: '/imagens-junco/tattoo-13.webp', title: 'Sombreado', cls: 'cube-face-back' },
  { src: '/imagens-junco/tattoo-04.webp', title: 'Detalhes', cls: 'cube-face-top' },
];

export default function TattooCube() {
  return (
    <section className="styles-showcase" id="estilos">
      <div className="container">
        <span className="eyebrow">★ REALISMO</span>
        <h2 className="section-title">O que a gente faz melhor</h2>
        <p className="section-subtitle">
          Realismo preto e cinza: retratos, sombreado e composições com profundidade e textura.
          A mesma obsessão por detalhe em cada peça.
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
