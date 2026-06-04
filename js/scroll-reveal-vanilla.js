/**
 * ScrollReveal - Versão Vanilla JS
 * Anima elementos quando entram no viewport usando Intersection Observer
 * Sem dependências externas, funciona em todos os navegadores modernos
 */

class ScrollRevealVanilla {
  constructor(selector, options = {}) {
    this.selector = selector;
    this.options = {
      direction: options.direction || 'up',
      delay: options.delay || 0,
      duration: options.duration || 700,
      distance: options.distance || '40px',
      once: options.once !== false, // true por padrão
      threshold: options.threshold || 0.15,
      stagger: options.stagger || 0, // ms entre elementos
      ...options,
    };

    this.elements = document.querySelectorAll(selector);
    this.init();
  }

  getInitialTransform() {
    const { direction, distance } = this.options;
    const offsetMap = {
      up: { x: '0', y: distance },
      down: { x: '0', y: `-${distance}` },
      left: { x: distance, y: '0' },
      right: { x: `-${distance}`, y: '0' },
      none: { x: '0', y: '0' },
    };
    const offset = offsetMap[direction] || offsetMap.up;
    return `translate(${offset.x}, ${offset.y})`;
  }

  init() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Calcular delay com stagger
            const delayMs = this.options.delay + index * this.options.stagger;

            setTimeout(() => {
              entry.target.style.transition = `all ${this.options.duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translate(0, 0)';

              // Disparar evento customizado
              entry.target.dispatchEvent(new CustomEvent('scrollreveal:animate'));
            }, delayMs);

            if (this.options.once) {
              observer.unobserve(entry.target);
            }
          } else if (!this.options.once) {
            // Resetar se once = false
            entry.target.style.transition = 'none';
            entry.target.style.opacity = '0';
            entry.target.style.transform = this.getInitialTransform();
          }
        });
      },
      {
        threshold: this.options.threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Aplicar estilos iniciais a todos os elementos
    this.elements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = this.getInitialTransform();
      el.style.willChange = 'opacity, transform';
      el.style.transition = 'none'; // Sem transição inicialmente
      observer.observe(el);
    });
  }

  static initAll() {
    // Auto-inicializar elementos com data-scroll-reveal
    const elements = document.querySelectorAll('[data-scroll-reveal]');
    elements.forEach((el) => {
      const direction = el.dataset.scrollRevealDirection || 'up';
      const delay = parseInt(el.dataset.scrollRevealDelay || 0);
      const duration = parseInt(el.dataset.scrollRevealDuration || 700);
      const distance = el.dataset.scrollRevealDistance || '40px';

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.style.transition = `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translate(0, 0)';
              }, delay);

              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      const offsetMap = {
        up: { x: '0', y: distance },
        down: { x: '0', y: `-${distance}` },
        left: { x: distance, y: '0' },
        right: { x: `-${distance}`, y: '0' },
        none: { x: '0', y: '0' },
      };
      const offset = offsetMap[direction] || offsetMap.up;

      el.style.opacity = '0';
      el.style.transform = `translate(${offset.x}, ${offset.y})`;
      el.style.willChange = 'opacity, transform';
      el.style.transition = 'none';
      observer.observe(el);
    });
  }
}

// Auto-inicializar quando DOM está pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    ScrollRevealVanilla.initAll();
  });
} else {
  ScrollRevealVanilla.initAll();
}

// Exportar para uso manual
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ScrollRevealVanilla;
}
