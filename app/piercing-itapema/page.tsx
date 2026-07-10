import type { Metadata } from 'next';
import '../piercing/piercing.css';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import FloatingCTA from '@/components/common/FloatingCTA';
import MobileBottomBar from '@/components/common/MobileBottomBar';
import BackToTop from '@/components/common/BackToTop';
import PiercingHero from '@/components/piercing/PiercingHero';
import PiercingSections from '@/components/piercing/PiercingSections';

export const metadata: Metadata = {
  title: 'Piercing em Itapema/SC · Junco Tattoo & Piercing',
  description:
    'Piercing profissional em Itapema/SC. Orelha, nariz, septo, industrial e mais. Estúdio esterilizado, titânio/aço cirúrgico, +600 avaliações 5 estrelas. Agende seu piercing agora.',
  alternates: { canonical: '/piercing-itapema' },
  openGraph: {
    type: 'website',
    url: 'https://www.juncotattoo.com/piercing-itapema',
    title: 'Piercing profissional em Itapema · Junco Tattoo & Piercing',
    description: 'Piercing em Itapema/SC especializado. Agulha, titânio, higiene profissional.',
    images: [{ url: '/imagens-junco/estudio.webp', width: 1200, height: 630 }],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piercing profissional em Itapema · Junco Tattoo & Piercing',
    description: 'Piercing em Itapema/SC especializado. Agulha, titânio, higiene profissional.',
    images: ['/imagens-junco/estudio.webp'],
  },
};

const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'ProfessionalService',
  name: 'Junco Tattoo & Piercing',
  image: 'https://www.juncotattoo.com/imagens-junco/estudio.webp',
  description:
    'Piercing profissional em Itapema/SC. Orelha, nariz, septo, industrial e mais. Esterilizado, titânio, agulha.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Nereu Ramos, 4142, Sala 9',
    addressLocality: 'Itapema',
    addressRegion: 'SC',
    postalCode: '88220-000',
    addressCountry: 'BR',
  },
  telephone: '+5547996615555',
  url: 'https://www.juncotattoo.com/piercing-itapema',
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

export default function PiercingItapemaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />
      <Header crossPage />
      <main id="conteudo">
        <PiercingHero />
        <PiercingSections />
      </main>
      <Footer crossPage />

      <MobileBottomBar context="piercing" label="Tirar dúvida no WhatsApp" />
      <FloatingCTA context="piercing" label="WhatsApp" />
      <BackToTop />
    </>
  );
}
