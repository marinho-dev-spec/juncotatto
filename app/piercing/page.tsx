import type { Metadata } from 'next';
import './piercing.css';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import FloatingCTA from '@/components/common/FloatingCTA';
import MobileBottomBar from '@/components/common/MobileBottomBar';
import BackToTop from '@/components/common/BackToTop';
import PiercingHero from '@/components/piercing/PiercingHero';
import PiercingSections from '@/components/piercing/PiercingSections';

export const metadata: Metadata = {
  title: 'Piercing em Itapema/SC — Junco Tattoo & Piercing | Gabriel Junco',
  description:
    'Piercing profissional em Itapema/SC. Orelha, nariz, septo, industrial e mais. Estúdio esterilizado, titânio/aço cirúrgico, +600 avaliações 5 estrelas. Agende seu piercing agora.',
  openGraph: {
    type: 'website',
    url: 'https://juncotatto.vercel.app/piercing',
    title: 'Piercing profissional — Junco Tattoo & Piercing',
    description: 'Piercing em Itapema/SC especializado. Agulha, titânio, higiene profissional.',
    locale: 'pt_BR',
  },
};

const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'ProfessionalService',
  name: 'Junco Tattoo & Piercing',
  image: 'https://juncotatto.vercel.app/imagens-junco/estudio.webp',
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
  url: 'https://juncotatto.vercel.app/piercing',
  foundingDate: '2014',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '600',
  },
};

export default function PiercingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />
      <Header crossPage />
      <main>
        <PiercingHero />
        <PiercingSections />
      </main>
      <Footer crossPage />

      <MobileBottomBar context="piercing" label="Agendar Piercing" />
      <FloatingCTA context="piercing" label="Agendar" />
      <BackToTop />
    </>
  );
}
