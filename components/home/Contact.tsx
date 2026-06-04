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
              Meia Praia — Itapema/SC
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
          <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="user_name"
              placeholder="Seu nome"
              required
              aria-label="Seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="WhatsApp (com DDD)"
              required
              aria-label="Telefone ou WhatsApp com DDD"
              value={telefone}
              onChange={(e) => setTelefone(formatPhoneNumber(e.target.value))}
            />
            <textarea
              name="message"
              placeholder="Descreve sua ideia..."
              rows={4}
              required
              aria-label="Descreva sua ideia de tatuagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
            <button type="submit" className="btn btn-primary" aria-label="Enviar mensagem">
              Enviar
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
