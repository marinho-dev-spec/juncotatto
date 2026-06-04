/**
 * ProgressiveBlur - Versão Vanilla JS
 * Cria um efeito de blur gradual no bottom da viewport
 * Usa 100% inline styles (sem CSS externo)
 */

class ProgressiveBlurVanilla {
  constructor(options = {}) {
    this.height = options.height || 200;
    this.zIndex = options.zIndex || 999;
    this.container = null;
    this.init();
  }

  init() {
    // Criar container principal
    this.container = document.createElement('div');
    this.container.setAttribute('aria-hidden', 'true');

    const containerStyle = {
      position: 'fixed',
      bottom: '0',
      left: '0',
      width: '100%',
      height: `${this.height}px`,
      zIndex: this.zIndex.toString(),
      pointerEvents: 'none',
    };

    Object.assign(this.container.style, containerStyle);

    // Definir camadas de blur progressivo
    const blurLayers = [
      { blur: 0.25, mask: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, transparent 37.5%)' },
      { blur: 0.5, mask: 'linear-gradient(to bottom, transparent 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 37.5%, transparent 50%)' },
      { blur: 1, mask: 'linear-gradient(to bottom, transparent 25%, rgba(0,0,0,1) 37.5%, rgba(0,0,0,1) 50%, transparent 62.5%)' },
      { blur: 2, mask: 'linear-gradient(to bottom, transparent 37.5%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 62.5%, transparent 75%)' },
      { blur: 4, mask: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,1) 62.5%, rgba(0,0,0,1) 75%, transparent 87.5%)' },
      { blur: 8, mask: 'linear-gradient(to bottom, transparent 62.5%, rgba(0,0,0,1) 75%, rgba(0,0,0,1) 87.5%, transparent 100%)' },
      { blur: 16, mask: 'linear-gradient(to bottom, transparent 75%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,1) 100%)' },
      { blur: 32, mask: 'linear-gradient(to bottom, transparent 87.5%, rgba(0,0,0,1) 100%)' },
    ];

    // Criar cada camada
    blurLayers.forEach((layer) => {
      const layerEl = document.createElement('div');

      const layerStyle = {
        position: 'absolute',
        inset: '0',
        backdropFilter: `blur(${layer.blur}px)`,
        WebkitBackdropFilter: `blur(${layer.blur}px)`,
        maskImage: layer.mask,
        WebkitMaskImage: layer.mask,
      };

      Object.assign(layerEl.style, layerStyle);
      this.container.appendChild(layerEl);
    });

    // Adicionar ao DOM
    document.body.appendChild(this.container);
  }

  // Método para mudar altura dinamicamente
  setHeight(newHeight) {
    this.height = newHeight;
    this.container.style.height = `${newHeight}px`;
  }

  // Método para remover o blur
  remove() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}

// Auto-inicializar se houver data-progressive-blur no HTML
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('[data-progressive-blur]');
    if (element) {
      const height = parseInt(element.dataset.progressiveBlurHeight || 200);
      const zIndex = parseInt(element.dataset.progressiveBlurZindex || 999);
      new ProgressiveBlurVanilla({ height, zIndex });
      element.remove(); // Remover elemento placeholder se existir
    }
  });
} else {
  const element = document.querySelector('[data-progressive-blur]');
  if (element) {
    const height = parseInt(element.dataset.progressiveBlurHeight || 200);
    const zIndex = parseInt(element.dataset.progressiveBlurZindex || 999);
    new ProgressiveBlurVanilla({ height, zIndex });
    element.remove(); // Remover elemento placeholder se existir
  }
}

// Exportar para uso manual
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ProgressiveBlurVanilla;
}
