import { IconNeedle, IconShieldCheck, IconGlove, IconPerson } from '@/components/common/Icons';

const SAFETY_ITEMS = [
  { Icon: IconNeedle, title: 'Agulha lacrada', text: 'Aberta na sua frente, cada sessão uma nova' },
  { Icon: IconShieldCheck, title: 'Equipamento esterilizado', text: 'Autoclave profissional, certificado' },
  { Icon: IconGlove, title: 'Luva e campo estéril', text: 'Protocolo a cada cliente' },
  { Icon: IconPerson, title: 'Atendimento individual', text: 'Uma pessoa por vez, sem pressa' },
];

export default function Safety() {
  return (
    <section className="safety" id="higiene">
      <div className="container">
        <h2 className="section-title">Segurança &amp; Higiene</h2>
        <p className="section-subtitle">Padrão de protocolo clínico, zero compromissos.</p>

        <div className="safety-grid">
          {SAFETY_ITEMS.map(({ Icon, title, text }) => (
            <div className="safety-item" key={title}>
              <div className="safety-icon" style={{ color: 'var(--gold)' }}>
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
