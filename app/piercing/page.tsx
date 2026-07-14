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
  title: 'Piercing em Itapema/SC · Junco Tattoo & Piercing · Gabriel Junco',
  description:
    'Piercing profissional em Itapema/SC. Orelha, nariz, septo, industrial e mais. Estúdio esterilizado, titânio/aço cirúrgico, +600 avaliações 5 estrelas. Agende seu piercing agora.',
  alternates: { canonical: '/piercing' },
  openGraph: {
    type: 'website',
    url: 'https://www.juncotattoo.com/piercing',
    title: 'Piercing profissional · Junco Tattoo & Piercing',
    description: 'Piercing em Itapema/SC especializado. Agulha, titânio, higiene profissional.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piercing profissional · Junco Tattoo & Piercing',
    description: 'Piercing em Itapema/SC especializado. Agulha, titânio, higiene profissional.',
    images: ['/og-image.jpg'],
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
  url: 'https://www.juncotattoo.com/piercing',
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

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.juncotattoo.com' },
    { '@type': 'ListItem', position: 2, name: 'Piercing', item: 'https://www.juncotattoo.com/piercing' },
  ],
};

export default function PiercingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
