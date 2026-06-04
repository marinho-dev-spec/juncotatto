const SAFETY = [
  {
    icon: '◆',
    title: 'Aplicação com Agulha',
    text: 'Nunca usamos pistola. Agulha descartável e esterilizada para cada cliente, garantindo segurança máxima e precisão em todos os procedimentos.',
  },
  {
    icon: '◇',
    title: 'Material Premium',
    text: 'Titânio ASTM F136 ou aço cirúrgico ASTM F139. Material hipoalergênico e seguro para todos os tipos de pele, evitando reações e inflamações.',
  },
  {
    icon: '◈',
    title: 'Higiene Clínica',
    text: 'Equipamento esterilizado em autoclave. Joia lacrada e aberta na sua frente. Ambiente profissional, higienizado e preparado para cada cliente.',
  },
];

export default function SafetyBlock() {
  return (
    <section className="catalog-section" style={{ background: '#161619' }}>
      <div className="container">
        <h2>Segurança no Piercing</h2>
        <p style={{ marginBottom: 60 }}>
          Todos os procedimentos seguem rigorosos padrões de higiene e profissionalismo. Sua
          segurança é nossa prioridade.
        </p>

        <div className="safety-block-grid">
          {SAFETY.map((item) => (
            <div className="safety-block-item" key={item.title}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
