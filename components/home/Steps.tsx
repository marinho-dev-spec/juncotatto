const STEPS = [
  {
    number: '01',
    title: 'Manda sua ideia no WhatsApp',
    text: 'Pode ser foto, descrição, desenho — o que você tiver em mente.',
  },
  {
    number: '02',
    title: 'Orçamento, agenda e sinal',
    text: 'Agendamos conversando. Um sinal que abate no valor final reserva sua data.',
  },
  {
    number: '03',
    title: 'Faço sua tatuagem',
    text: 'No dia marcado, você sai com a sua tatuagem. Sem pressa.',
  },
];

export default function Steps() {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">Como funciona</h2>

        <div className="steps">
          {STEPS.map((step) => (
            <div className="step" key={step.number}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

        <div className="how-note">
          <p>
            <strong>Para reservar a data pedimos um sinal que abate no valor final.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
