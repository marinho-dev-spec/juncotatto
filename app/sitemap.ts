import type { MetadataRoute } from 'next';

const SITE = 'https://www.juncotattoo.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE}/`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE}/piercing`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
