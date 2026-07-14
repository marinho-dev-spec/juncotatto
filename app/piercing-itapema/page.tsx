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
    'Piercing profissional em Itapema/SC. Orelha, nariz, septo, industrial e mais. Estúdio esterilizado, titânio/aço cirúrgico, +600 avaliações, nota 4,9. Agende seu piercing agora.',
  // Conteúdo idêntico a /piercing: canonical aponta para a página principal
  // para não competirem entre si no Google (a LP segue útil para anúncios).
  alternates: { canonical: '/piercing' },
  openGraph: {
    type: 'website',
    url: 'https://www.juncotattoo.com/piercing-itapema',
    title: 'Piercing profissional em Itapema · Junco Tattoo & Piercing',
    description: 'Piercing em Itapema/SC especializado. Agulha, titânio, higiene profissional.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piercing profissional em Itapema · Junco Tattoo & Piercing',
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
