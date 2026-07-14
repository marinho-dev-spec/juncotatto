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
    'Piercing profissional em Itapema/SC. Orelha, nariz, septo, industrial e mais. Estúdio esterilizado, titânio/aço cirúrgico, +600 avaliações, nota 4,9. Agende seu piercing agora.',
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

// Referencia a entidade única declarada no layout (@id), sem duplicar o negócio.
const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TattooParlor',
  '@id': 'https://www.juncotattoo.com/#estudio',
  name: 'Junco Tattoo & Piercing',
  url: 'https://www.juncotattoo.com/piercing',
  image: 'https://www.juncotattoo.com/og-image.jpg',
  description:
    'Piercing profissional em Itapema/SC. Orelha, nariz, septo, industrial e mais. Esterilizado, titânio, agulha.',
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
