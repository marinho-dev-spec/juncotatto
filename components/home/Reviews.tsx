const REVIEWS = [
  {
    text: 'Melhor tatuador da região! Fiz um realismo no braço e ficou perfeito, exatamente como imaginei. Ambiente limpo e o Gabriel é super atencioso.',
    author: 'Mariana S.',
  },
  {
    text: 'Profissional impecável. Cuidado com a higiene do início ao fim, agulha aberta na minha frente. Voltarei com certeza pra próxima!',
    author: 'Rafael L.',
  },
  {
    text: 'Era minha primeira tatuagem e estava nervosa. O Gabriel me explicou tudo com calma e o resultado superou minhas expectativas.',
    author: 'Camila R.',
  },
  {
    text: 'Fiz uma cobertura de uma tattoo antiga que eu odiava. Transformou completamente. Trabalho de outro nível!',
    author: 'Thiago M.',
  },
  {
    text: 'Atendimento excelente, pontual e muito caprichoso. O traço do realismo preto e cinza dele é surreal. Recomendo demais.',
    author: 'Júlia F.',
  },
  {
    text: 'Já fiz 3 tatuagens com o Gabriel e todas ficaram impecáveis. Confiança total no trabalho dele.',
    author: 'Lucas P.',
  },
];

export default function Reviews() {
  return (
    <section className="reviews" id="avaliacoes">
      <div className="container">
        <h2 className="section-title">Mais de 600 motivos pra confiar</h2>

        <div className="reviews-header">
          <div className="reviews-badge">
            <span className="reviews-rating">★ 4,9</span>
            <span className="reviews-count">+600 avaliações reais no Google</span>
          </div>
          <a
            href="https://www.google.com/maps/search/Junco+Tattoo+Itapema"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-small"
          >
            Ver no Google
          </a>
        </div>

        <div className="reviews-container">
          <div className="example-reviews">
            {REVIEWS.map((review) => (
              <div className="review-card" key={review.author}>
                <div className="review-stars">★★★★★</div>
                <p className="review-text">&ldquo;{review.text}&rdquo;</p>
                <div className="review-author">{review.author}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
