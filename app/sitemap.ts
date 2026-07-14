import type { MetadataRoute } from 'next';
import { ARTISTS } from '@/lib/artistsData';

const SITE = 'https://www.juncotattoo.com';

// Data do build: atualiza a cada deploy, bom sinal de frescor para o Google.
const LAST_MODIFIED = new Date();

// /piercing-itapema fica fora do sitemap: é duplicata de /piercing
// (canonical aponta para lá) e existe só como destino de campanha.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE}/piercing`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE}/tatuagem-itapema`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...ARTISTS.map((a) => ({
      url: `${SITE}/tatuador/${a.slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
