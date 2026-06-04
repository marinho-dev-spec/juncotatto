const SAFETY_ITEMS = [
  { icon: '🧵', title: 'Agulha lacrada', text: 'Aberta na sua frente, cada sessão uma nova' },
  { icon: '🔬', title: 'Equipamento esterilizado', text: 'Autoclave profissional, certificado' },
  { icon: '🧤', title: 'Luva e campo estéril', text: 'Protocolo a cada cliente' },
  { icon: '👤', title: 'Atendimento individual', text: 'Uma pessoa por vez, sem pressa' },
];

export default function Safety() {
  return (
    <section className="safety" id="higiene">
      <div className="container">
        <h2 className="section-title">Segurança &amp; Higiene</h2>
        <p className="section-subtitle">Padrão de protocolo clínico, zero compromissos.</p>

        <div className="safety-grid">
          {SAFETY_ITEMS.map((item) => (
            <div className="safety-item" key={item.title}>
              <div className="safety-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
