/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/piercing.html',
        destination: '/piercing',
        permanent: true,
      },
      // URLs usadas em campanhas (Google Ads) e versões antigas do site
      {
        source: '/tatuagem-itapema',
        destination: '/',
        permanent: false,
      },
      {
        source: '/tatuagem-itapema.html',
        destination: '/',
        permanent: false,
      },
      {
        source: '/tatuagem',
        destination: '/',
        permanent: false,
      },
      {
        source: '/piercing-itapema',
        destination: '/piercing',
        permanent: false,
      },
      {
        source: '/piercing-itapema.html',
        destination: '/piercing',
        permanent: false,
      },
    ];
  },

  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;
