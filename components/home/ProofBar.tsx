export default function ProofBar() {
  const items = [
    { number: '4,9', text: '★ no Google' },
    { number: '+600', text: 'avaliações' },
    { number: '2014', text: 'desde então' },
    { number: '100%', text: 'material descartável' },
  ];

  return (
    <section className="proof-bar">
      <div className="container">
        <div className="proof-items">
          {items.map((item) => (
            <div className="proof-item" key={item.text}>
              <span className="proof-number">{item.number}</span>
              <span className="proof-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
