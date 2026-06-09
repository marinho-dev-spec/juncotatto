/**
 * Tatuadores do estúdio Junco — perfis individuais.
 * As bios são um ponto de partida editável. Os "works" de Apollo e Money
 * ficam vazios até o envio das fotos de cada um.
 */

export interface Artist {
  slug: string;
  name: string;
  role: string;
  photo: string;
  /** Mensagem de agendamento no WhatsApp (já cita o nome do tatuador) */
  agendaMsg: string;
  bio: string[];
  instagram?: string;
  works: { src: string; alt: string }[];
}

export const ARTISTS: Artist[] = [
  {
    slug: 'gabriel-junco',
    name: 'Gabriel Junco',
    role: 'Especialista em Realismo Preto e Cinza',
    photo: '/imagens-junco/gabriel-junco.jpg',
    agendaMsg:
      'Oi, Gabriel! Vim pelo site e quero agendar uma tatuagem em realismo preto e cinza. Minha ideia é mais ou menos assim: ___ (posso mandar referência).',
    bio: [
      'Tatuo desde 2016 e me dediquei inteiro ao realismo preto e cinza. É o estilo que me move: retratos, religioso, animais e composições que parecem saltar da pele.',
      'Cada projeto é desenhado do zero pensando no seu corpo, na luz e nas sombras, para envelhecer bem e continuar bonito por muitos anos.',
    ],
    instagram: 'https://instagram.com/junco_tattoo',
    works: [
      { src: '/imagens-junco/tattoo-01.webp', alt: 'Tatuagem realista de leão e retrato no braço' },
      { src: '/imagens-junco/tattoo-02.webp', alt: 'Tatuagem realista de rostos em preto e cinza' },
      { src: '/imagens-junco/tattoo-03.webp', alt: 'Braço fechado em realismo preto e cinza' },
      { src: '/imagens-junco/tattoo-04.webp', alt: 'Tatuagem realista com relógio no antebraço' },
      { src: '/imagens-junco/tattoo-05.webp', alt: 'Retrato feminino em realismo preto e cinza' },
      { src: '/imagens-junco/tattoo-06.webp', alt: 'Tatuagem realista de rosto no braço' },
      { src: '/imagens-junco/tattoo-09.webp', alt: 'Tatuagem realista no antebraço' },
      { src: '/imagens-junco/tattoo-13.webp', alt: 'Tatuagem realista de guerreiro no antebraço' },
    ],
  },
  {
    slug: 'apollo',
    name: 'Apollo',
    role: 'Tatuador · Realismo Preto e Cinza',
    photo: '/imagens-junco/apollo.webp',
    agendaMsg:
      'Oi! Vim pelo site e quero agendar uma tatuagem em realismo com o Apollo. Minha ideia é mais ou menos assim: ___ (posso mandar referência).',
    bio: [
      'Apollo é tatuador no Junco e trabalha com realismo preto e cinza, dando vida a retratos e composições cheias de profundidade e textura.',
      'Atendimento próximo, do desenho à execução, sempre buscando o melhor resultado para a sua pele.',
    ],
    works: [],
  },
  {
    slug: 'money',
    name: 'Money',
    role: 'Tatuador · Realismo Preto e Cinza',
    photo: '/imagens-junco/money.webp',
    agendaMsg:
      'Oi! Vim pelo site e quero agendar uma tatuagem em realismo com o Money. Minha ideia é mais ou menos assim: ___ (posso mandar referência).',
    bio: [
      'Money é tatuador no Junco, especializado em realismo preto e cinza, com traço marcante e atenção total aos detalhes.',
      'Cada peça é pensada para ficar marcante hoje e continuar bonita com o passar dos anos.',
    ],
    works: [],
  },
];

export function getArtist(slug: string): Artist | undefined {
  return ARTISTS.find((a) => a.slug === slug);
}

export const WHATSAPP_NUMBER = '5547996615555';

export function artistWhatsAppLink(a: Artist): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(a.agendaMsg)}`;
}
