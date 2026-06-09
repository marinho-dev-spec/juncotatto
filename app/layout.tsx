import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID;

export const metadata: Metadata = {
  metadataBase: new URL('https://www.juncotattoo.com'),
  title: 'Junco Tattoo & Piercing · Tatuador em Itapema/SC · Realismo Preto e Cinza',
  description:
    'Gabriel Junco - Tatuador especialista em realismo preto e cinza desde 2016. Estúdio de tatuagem em Itapema/SC com mais de 600 avaliações 5 estrelas. Piercing e coberturas.',
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
      'Especialista em realismo preto e cinza. Mais de 600 avaliações 5 estrelas. Piercing e coberturas. Consultoria gratuita.',
    images: [
      {
        url: '/imagens-junco/estudio.webp',
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
      'Especialista em realismo preto e cinza. Mais de 600 avaliações 5 estrelas. Piercing e coberturas.',
    images: ['/imagens-junco/estudio.webp'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0B0B0D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'ProfessionalService',
  name: 'Junco Tattoo & Piercing',
  image: [
    'https://www.juncotattoo.com/imagens-junco/estudio.webp',
    'https://www.juncotattoo.com/imagens-junco/gabriel-junco.jpg',
  ],
  description:
    'Tatuador especialista em realismo preto e cinza em Itapema/SC. Piercing e coberturas. Desde 2016 com mais de 600 avaliações 5 estrelas.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Nereu Ramos, 4142, Sala 9',
    addressLocality: 'Itapema',
    addressRegion: 'SC',
    postalCode: '88220-000',
    addressCountry: 'BR',
  },
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/css/glightbox.min.css"
        />
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
        {children}

        {/* GLightbox */}
        <Script
          src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"
          strategy="afterInteractive"
        />

        {/* Google Analytics 4 — só carrega se o ID estiver configurado */}
        {GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA4_ID}', { send_page_view: true });
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
