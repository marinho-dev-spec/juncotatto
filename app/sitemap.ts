import type { MetadataRoute } from 'next';
import { ARTISTS } from '@/lib/artistsData';

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
    {
      url: `${SITE}/tatuagem-itapema`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE}/piercing-itapema`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...ARTISTS.map((a) => ({
      url: `${SITE}/tatuador/${a.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
