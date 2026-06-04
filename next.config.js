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
    ];
  },

  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;
