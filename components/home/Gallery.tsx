import MarqueeGallery from '@/components/common/MarqueeGallery';

const GALLERY_IMAGES = [
  { src: '/imagens-junco/tattoo-15.webp', alt: 'Fechamento de braço com leão e rosto de Jesus fundidos, pomba e relógio em realismo preto e cinza' },
  { src: '/imagens-junco/tattoo-16.webp', alt: 'Tatuagem de estátua grega de Zeus em realismo preto e cinza no braço' },
  { src: '/imagens-junco/tattoo-17.webp', alt: 'Fechamento de braço com leão, cruz, relógio e bússola em realismo preto e cinza' },
  { src: '/imagens-junco/tattoo-18.webp', alt: 'Tatuagem de Jesus Cristo com coroa de espinhos e cruz em realismo no braço' },
  { src: '/imagens-junco/tattoo-19.webp', alt: 'Fechamento de braço com rosto feminino, relógio e cruz em realismo preto e cinza' },
  { src: '/imagens-junco/tattoo-20.webp', alt: 'Tatuagem de armadura de cavaleiro com espada em realismo no antebraço' },
  { src: '/imagens-junco/tattoo-21.webp', alt: 'Tatuagem de guerreiro com elmo e espada em realismo preto e cinza no braço' },
  { src: '/imagens-junco/tattoo-22.webp', alt: 'Tatuagem de cifrão com diamantes e cachorro em realismo no antebraço' },
  { src: '/imagens-junco/tattoo-23.webp', alt: 'Tatuagem de rosto feminino estilo chicano em realismo no antebraço' },
  { src: '/imagens-junco/tattoo-24.webp', alt: 'Tatuagem de rosto masculino estilo chicano em realismo no antebraço' },
  { src: '/imagens-junco/tattoo-25.webp', alt: 'Tatuagem estilo chicano com homem de bandana e santo em realismo' },
  { src: '/imagens-junco/tattoo-26.webp', alt: 'Tatuagem de rosto feminino com cruz em realismo se estendendo até a mão' },
  { src: '/imagens-junco/tattoo-27.webp', alt: 'Tatuagem hiper-realista de lata de energético segurada na mão' },
  { src: '/imagens-junco/tattoo-28.webp', alt: 'Tatuagem de rosto feminino estilo chicano em realismo nas costelas' },
];

export default function Gallery() {
  return (
    <section className="gallery" id="trabalhos">
      <div className="container">
        <h2 className="section-title">Trabalhos que falam por si</h2>
        <p className="section-subtitle">
          Realismo preto e cinza. Cada peça é criada do zero para o seu corpo. Aqui não tem
          desenho de catálogo.
        </p>
      </div>

      <MarqueeGallery
        images={GALLERY_IMAGES.map((img) => ({
          ...img,
          thumb: img.src.replace('/imagens-junco/', '/imagens-junco/thumbs/'),
        }))}
        lightboxGroup="tattoos"
        secondsPerImage={6}
      />

      <div className="container">
        <div className="gallery-footer">
          <a
            href="https://instagram.com/junco_tattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="link-instagram"
          >
            Ver mais no Instagram @junco_tattoo →
          </a>
        </div>
      </div>
    </section>
  );
}
