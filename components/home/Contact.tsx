'use client';

import { useState } from 'react';
import { formatPhoneNumber, enviarMensagemWhatsApp } from '@/lib/whatsapp';

export default function Contact() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !telefone.trim() || !mensagem.trim()) {
      setStatus('Por favor, preencha todos os campos.');
      return;
    }
    enviarMensagemWhatsApp(nome.trim(), telefone.trim(), mensagem.trim());
    setStatus('Abrindo o WhatsApp… é só enviar a mensagem que o Gabriel responde rápido!');
    setNome('');
    setTelefone('');
    setMensagem('');
    setTimeout(() => setStatus(''), 6000);
  };

  return (
    <section className="contact" id="contato">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=Junco+Tattoo+Itapema+Av+Nereu+Ramos+4142&output=embed"
              width="100%"
              height={400}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do estúdio Junco Tattoo"
            />
          </div>
          <div className="contact-info">
            <h3>Onde estamos</h3>
            <p className="contact-address">
              <strong>Av. Nereu Ramos, 4142, Sala 9</strong>
              <br />
              Meia Praia, Itapema/SC
            </p>
            <p className="contact-hours">
              <strong>Horário</strong>
              <br />
              Seg–Sex: 9h–18h
              <br />
              Sáb: 9h–13h
            </p>
            <button
              className="btn btn-secondary btn-small"
              onClick={() =>
                window.open('https://maps.google.com/?q=Junco+Tattoo+Itapema', '_blank')
              }
            >
              Como chegar
            </button>
          </div>
        </div>

        <div className="contact-cta">
          <h2>Sua próxima tatuagem começa com uma mensagem</h2>
          <p className="contact-cta-sub">
            Me conta sua ideia. Quem responde sou eu, geralmente em até 2 horas. Sem compromisso e
            sem robô do outro lado.
          </p>
          <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="contact-nome" className="form-label">
                Seu nome
              </label>
              <input
                id="contact-nome"
                type="text"
                name="user_name"
                placeholder="Como podemos te chamar?"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-tel" className="form-label">
                Seu WhatsApp (com DDD)
              </label>
              <input
                id="contact-tel"
                type="tel"
                name="user_phone"
                placeholder="(48) 99999-9999"
                required
                value={telefone}
                onChange={(e) => setTelefone(formatPhoneNumber(e.target.value))}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-msg" className="form-label">
                Sua ideia
              </label>
              <textarea
                id="contact-msg"
                name="message"
                placeholder="O que, onde no corpo, tamanho... (pode mandar referência depois)"
                rows={4}
                required
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary" aria-label="Enviar pelo WhatsApp">
              Enviar pelo WhatsApp
            </button>
          </form>
          <div
            id="form-status"
            style={{ marginTop: 12, fontSize: '0.95rem', textAlign: 'center', minHeight: 20, color: '#C9A24B' }}
          >
            {status}
          </div>
        </div>
      </div>
    </section>
  );
}
