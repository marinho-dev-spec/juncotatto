import type { Metadata } from 'next';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import FloatingCTA from '@/components/common/FloatingCTA';
import MobileBottomBar from '@/components/common/MobileBottomBar';
import BackToTop from '@/components/common/BackToTop';
import ProgressiveBlur from '@/components/ProgressiveBlur';
import ScrollReveal from '@/components/ScrollReveal';

import Hero from '@/components/home/Hero';
import ProofBar from '@/components/home/ProofBar';
import Gallery from '@/components/home/Gallery';
import TattooCube from '@/components/home/TattooCube';
import Reviews from '@/components/home/Reviews';
import Safety from '@/components/home/Safety';
import Steps from '@/components/home/Steps';
import FAQ from '@/components/home/FAQ';
import CtaUrgency from '@/components/home/CtaUrgency';
import Contact from '@/components/home/Contact';
import { FAQ_ITEMS } from '@/lib/faqData';

export const metadata: Metadata = {
  title: 'Tatuagem Realismo Preto e Cinza em Itapema/SC · Junco Tattoo',
  description:
    'Tatuagem em realismo preto e cinza em Itapema/SC. Retratos, religioso, fechamento de braço. Design exclusivo criado do zero para o seu corpo. +600 avaliações, nota 4,9. Agende pelo WhatsApp.',
  alternates: { canonical: '/tatuagem-itapema' },
  openGraph: {
    type: 'website',
    url: 'https://www.juncotattoo.com/tatuagem-itapema',
    title: 'Tatuagem Realismo Preto e Cinza em Itapema · Junco Tattoo',
    description:
      'Especialistas em realismo preto e cinza. Design exclusivo, estúdio esterilizado, +600 avaliações, nota 4,9.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tatuagem Realismo Preto e Cinza em Itapema · Junco Tattoo',
    description:
      'Especialistas em realismo preto e cinza. Design exclusivo, estúdio esterilizado, +600 avaliações, nota 4,9.',
    images: ['/og-image.jpg'],
  },
};

// Referencia a mesma entidade declarada no layout (@id) em vez de criar
// um negócio duplicado — evita entidades conflitantes para o Google.
const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TattooParlor',
  '@id': 'https://www.juncotattoo.com/#estudio',
  name: 'Junco Tattoo & Piercing',
  url: 'https://www.juncotattoo.com/tatuagem-itapema',
  image: 'https://www.juncotattoo.com/og-image.jpg',
  description:
    'Estúdio especializado em tatuagem realismo preto e cinza em Itapema/SC. Retratos, religioso e fechamentos criados do zero.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

// Na LP de anúncio a primeira imagem é o produto (realismo), não o estúdio —
// o visitante pago decide nos primeiros segundos.
const LP_HERO_IMAGES = [
  { src: '/imagens-junco/tattoo-15.webp', alt: 'Fechamento de braço com leão e rosto de Jesus em realismo preto e cinza', width: 1400, height: 1867 },
  { src: '/imagens-junco/tattoo-16.webp', alt: 'Tatuagem de estátua grega de Zeus em realismo preto e cinza no braço', width: 1400, height: 1867 },
  { src: '/imagens-junco/tattoo-17.webp', alt: 'Fechamento de braço com leão, cruz, relógio e bússola em realismo preto e cinza', width: 1400, height: 1867 },
  { src: '/imagens-junco/tattoo-18.webp', alt: 'Tatuagem de Jesus Cristo com coroa de espinhos e cruz em realismo no braço', width: 1400, height: 1867 },
  { src: '/imagens-junco/estudio.webp', alt: 'Estúdio profissional Junco Tattoo em Itapema com equipamentos de tatuagem', width: 382, height: 510 },
];

export default function TatuagemItapemaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header landing />
      <main id="conteudo">
        <Hero
          eyebrow="★ GABRIEL JUNCO · TATUADOR EM ITAPEMA/SC · DESDE 2016"
          headline="Tatuagem em realismo preto e cinza em Itapema, feita pra durar anos."
          subtitle={
            <>
              Retratos, religioso e fechamento de braço — design exclusivo criado do zero
              <br />
              <small>Orçamento rápido pelo WhatsApp · Resposta em até 2h</small>
            </>
          }
          images={LP_HERO_IMAGES}
          trackingOrigin="hero-lp-tatuagem"
        />
        <ProofBar />

        <ScrollReveal direction="up">
          <Gallery />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <TattooCube />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <Reviews />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <Safety />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <Steps />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <FAQ />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <CtaUrgency />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <Contact />
        </ScrollReveal>
      </main>
      <Footer landing />

      <MobileBottomBar context="geral" label="Agendar Consulta" />
      <FloatingCTA context="geral" label="Agendar" />
      <BackToTop />
      <ProgressiveBlur height={160} zIndex={40} />
    </>
  );
}
