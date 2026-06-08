const STEPS = [
  {
    number: '01',
    title: 'Manda sua ideia no WhatsApp',
    text: 'Pode ser foto, descrição ou desenho. O que você tiver em mente já serve pra começar.',
  },
  {
    number: '02',
    title: 'Orçamento, agenda e sinal',
    text: 'Agendamos conversando. Um sinal que abate no valor final reserva sua data.',
  },
  {
    number: '03',
    title: 'Você sai com uma tatuagem pra vida toda',
    text: 'No dia marcado, sem pressa e com material aberto na sua frente, transformo o projeto na sua tatuagem.',
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
