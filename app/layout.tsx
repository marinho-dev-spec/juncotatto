import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import AnalyticsListener from '@/components/common/AnalyticsListener';
import './globals.css';

// Fontes self-hosted pelo Next (next/font): zero requisições ao Google Fonts
// e nenhum CSS render-blocking de terceiros no <head>.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID;
// gtag.js atende GA4 e Google Ads com um único carregamento
const GTAG_ID = GA4_ID || ADS_ID;

export const metadata: Metadata = {
  metadataBase: new URL('https://www.juncotattoo.com'),
  title: 'Junco Tattoo & Piercing · Tatuador em Itapema/SC · Realismo Preto e Cinza',
  description:
    'Gabriel Junco - Tatuador especialista em realismo preto e cinza desde 2016. Estúdio de tatuagem em Itapema/SC com mais de 600 avaliações, nota 4,9. Piercing e coberturas.',
  keywords: ['tatuador', 'tattoo', 'itapema', 'sc', 'realismo preto cinza', 'piercing', 'tatuagem'],
  authors: [{ name: 'Gabriel Junco' }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/junco-mark.svg', type: 'image/svg+xml' }],
    shortcut: '/junco-mark.svg',
    apple: '/junco-mark.svg',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.juncotattoo.com/',
    title: 'Junco Tattoo & Piercing · Tatuador em Itapema/SC',
    description:
      'Especialista em realismo preto e cinza. Mais de 600 avaliações, nota 4,9. Piercing e coberturas. Consultoria gratuita.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junco Tattoo & Piercing · Tatuador em Itapema/SC',
    description:
      'Especialista em realismo preto e cinza. Mais de 600 avaliações, nota 4,9. Piercing e coberturas.',
    images: ['/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0B0B0D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

// Entidade única do negócio, referenciada por @id nas demais páginas.
// Sem aggregateRating: avaliação auto-declarada no próprio site é
// "self-serving" pela diretriz de review snippets do Google.
const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TattooParlor',
  '@id': 'https://www.juncotattoo.com/#estudio',
  name: 'Junco Tattoo & Piercing',
  image: [
    'https://www.juncotattoo.com/og-image.jpg',
    'https://www.juncotattoo.com/imagens-junco/estudio.webp',
    'https://www.juncotattoo.com/imagens-junco/gabriel-junco.jpg',
  ],
  description:
    'Tatuador especialista em realismo preto e cinza em Itapema/SC. Piercing e coberturas. Desde 2016 com mais de 600 avaliações.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Nereu Ramos, 4142, Sala 9',
    addressLocality: 'Itapema',
    addressRegion: 'SC',
    postalCode: '88220-000',
    addressCountry: 'BR',
  },
  areaServed: [
    { '@type': 'City', name: 'Itapema' },
    { '@type': 'City', name: 'Porto Belo' },
    { '@type': 'City', name: 'Balneário Camboriú' },
    { '@type': 'City', name: 'Bombinhas' },
    { '@type': 'City', name: 'Tijucas' },
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Tatuagem realismo preto e cinza' },
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Cobertura de tatuagem' },
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Piercing profissional' },
    },
  ],
  telephone: '+5547996615555',
  url: 'https://www.juncotattoo.com',
  priceRange: 'R$',
  foundingDate: '2016',
  founder: { '@type': 'Person', name: 'Gabriel Junco' },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '13:30',
      closes: '20:30',
    },
  ],
  sameAs: [
    'https://instagram.com/junco_tattoo',
    'https://wa.me/5547996615555',
    'https://www.google.com/maps/search/Junco+Tattoo+Itapema',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        {/* Textura de marca: selos repetidos no fundo (decorativo) */}
        <div className="brand-pattern" aria-hidden="true" />
        <AnalyticsListener />
        {children}

        {/* GLightbox — CSS e JS carregados sem bloquear a renderização */}
        <Script id="glightbox-css" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/css/glightbox.min.css';document.head.appendChild(l);})();`}
        </Script>
        <Script
          src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"
          strategy="lazyOnload"
        />

        {/* Google Analytics 4 + Google Ads — só carregam se os IDs estiverem configurados */}
        {GTAG_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                ${GA4_ID ? `gtag('config', '${GA4_ID}', { send_page_view: true });` : ''}
                ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ''}
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel — só carrega se o ID estiver configurado */}
        {PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
