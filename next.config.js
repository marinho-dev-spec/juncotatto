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
      // Variações de URLs usadas em campanhas e versões antigas do site
      {
        source: '/tatuagem-itapema.html',
        destination: '/tatuagem-itapema',
        permanent: false,
      },
      {
        source: '/tatuagem',
        destination: '/tatuagem-itapema',
        permanent: false,
      },
      {
        source: '/piercing-itapema.html',
        destination: '/piercing-itapema',
        permanent: false,
      },
    ];
  },

  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;
