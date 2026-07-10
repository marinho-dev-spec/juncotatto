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
import CtaUrgency from '@/components/home/CtaUrgency';
import Contact from '@/components/home/Contact';

export const metadata: Metadata = {
  title: 'Tatuagem Realismo Preto e Cinza em Itapema/SC · Junco Tattoo',
  description:
    'Tatuagem em realismo preto e cinza em Itapema/SC. Retratos, religioso, fechamento de braço. Design exclusivo criado do zero para o seu corpo. +600 avaliações 5 estrelas. Agende pelo WhatsApp.',
  alternates: { canonical: '/tatuagem-itapema' },
  openGraph: {
    type: 'website',
    url: 'https://www.juncotattoo.com/tatuagem-itapema',
    title: 'Tatuagem Realismo Preto e Cinza em Itapema · Junco Tattoo',
    description:
      'Especialistas em realismo preto e cinza. Design exclusivo, estúdio esterilizado, +600 avaliações 5 estrelas.',
    images: [{ url: '/imagens-junco/tattoo-15.webp', width: 1400, height: 1867 }],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tatuagem Realismo Preto e Cinza em Itapema · Junco Tattoo',
    description:
      'Especialistas em realismo preto e cinza. Design exclusivo, estúdio esterilizado, +600 avaliações 5 estrelas.',
    images: ['/imagens-junco/tattoo-15.webp'],
  },
};

const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TattooParlor',
  name: 'Junco Tattoo & Piercing',
  image: 'https://www.juncotattoo.com/imagens-junco/estudio.webp',
  description:
    'Estúdio especializado em tatuagem realismo preto e cinza em Itapema/SC. Retratos, religioso e fechamentos criados do zero.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Nereu Ramos, 4142, Sala 9',
    addressLocality: 'Itapema',
    addressRegion: 'SC',
    postalCode: '88220-000',
    addressCountry: 'BR',
  },
  telephone: '+5547996615555',
  url: 'https://www.juncotattoo.com/tatuagem-itapema',
  priceRange: 'R$',
  foundingDate: '2016',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '600',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://instagram.com/junco_tattoo',
    'https://wa.me/5547996615555',
    'https://www.google.com/maps/search/Junco+Tattoo+Itapema',
  ],
};

export default function TatuagemItapemaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />
      <Header crossPage />
      <main id="conteudo">
        <Hero />
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
          <CtaUrgency />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <Contact />
        </ScrollReveal>
      </main>
      <Footer crossPage />

      <MobileBottomBar context="geral" label="Agendar Consulta" />
      <FloatingCTA context="geral" label="Agendar" />
      <BackToTop />
      <ProgressiveBlur height={160} zIndex={40} />
    </>
  );
}
