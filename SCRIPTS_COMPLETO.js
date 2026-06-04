/* ============================================================
   SCRIPTS COMPLETOS 2026 - EFEITOS VISUAIS
   Tatuagem Cinematic Noir (Ouro + Preto)

   Instruções de uso:
   1. Copie este arquivo inteiro ou funções específicas
   2. Adicione <script src="SCRIPTS_COMPLETO.js"></script> antes de </body>
   3. Chame as classes conforme necessário
   ============================================================ */

// ============================================================
// 1. MAGNETIC BUTTON EFFECT
// ============================================================

class MagneticButton {
  constructor(element, options = {}) {
    this.element = element;
    this.strength = options.strength || 0.2;
    this.x = 0;
    this.y = 0;

    // Event listeners
    this.element.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.element.addEventListener('mouseleave', () => this.reset());

    // Prevenir em touch devices
    if (!this.isTouchDevice()) {
      this.element.style.cursor = 'pointer';
    }
  }

  handleMouseMove(e) {
    // Não executar em modo reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = this.element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    this.x = (e.clientX - centerX) * this.strength;
    this.y = (e.clientY - centerY) * this.strength;

    this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }

  reset() {
    this.element.style.transform = 'translate(0, 0)';
    this.element.style.transition = 'transform 0.3s ease-out';
  }

  isTouchDevice() {
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
  }
}

// Inicializar automaticamente
function initMagneticButtons() {
  document.querySelectorAll('.magnetic-btn').forEach((btn) => {
    new MagneticButton(btn, { strength: 0.2 });
  });
}

// ============================================================
// 2. RIPPLE EFFECT
// ============================================================

class RippleEffect {
  constructor(element, options = {}) {
    this.element = element;
    this.color = options.color || 'rgba(0, 0, 0, 0.4)';

    this.element.addEventListener('click', (e) => this.createRipple(e));
    this.element.style.position = 'relative';
    this.element.style.overflow = 'hidden';
  }

  createRipple(e) {
    // Não executar em modo reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = this.element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');
    ripple.style.background = this.color;

    this.element.appendChild(ripple);

    // Cleanup
    setTimeout(() => ripple.remove(), 600);
  }
}

// Inicializar automaticamente
function initRippleEffects() {
  document.querySelectorAll('.ripple-btn').forEach((btn) => {
    new RippleEffect(btn, { color: 'rgba(0, 0, 0, 0.4)' });
  });
}

// ============================================================
// 3. SCROLL REVEAL ANIMATION
// ============================================================

class ScrollReveal {
  constructor(selector, options = {}) {
    this.elements = document.querySelectorAll(selector);
    this.options = {
      threshold: options.threshold || 0.15,
      duration: options.duration || 0.8,
      stagger: options.stagger || 0.1,
      root: options.root || null,
      rootMargin: options.rootMargin || '0px',
    };

    // Verificar se o navegador suporta Intersection Observer
    if (!window.IntersectionObserver) {
      console.warn('IntersectionObserver não suportado. Reveal animations desabilitadas.');
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger effect
          const delay = index * this.options.stagger * 1000;
          setTimeout(() => {
            this.reveal(entry.target);
          }, delay);

          // Unobserve após reveal
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: this.options.threshold,
      root: this.options.root,
      rootMargin: this.options.rootMargin,
    });

    // Aplicar styles iniciais
    this.elements.forEach((el) => {
      this.observer.observe(el);
    });
  }

  reveal(element) {
    element.classList.add('active');
  }

  // Método para resetar animações (útil para testes)
  reset() {
    this.elements.forEach((el) => {
      el.classList.remove('active');
      this.observer.observe(el);
    });
  }
}

// Inicializar automaticamente
function initScrollReveal() {
  new ScrollReveal('.reveal-item', {
    threshold: 0.2,
    duration: 0.8,
    stagger: 0.1,
  });
}

// ============================================================
// 4. CURSOR TRACKING EFFECT
// ============================================================

class CursorTracker {
  constructor(options = {}) {
    this.options = {
      enabled: options.enabled || false,
      size: options.size || 35,
      color: options.color || '#C9A24B',
      ...options,
    };

    this.mouse = { x: 0, y: 0 };
    this.follower = null;

    if (this.options.enabled) {
      this.init();
    }
  }

  init() {
    // Criar elemento do cursor
    this.follower = document.createElement('div');
    this.follower.classList.add('cursor-follower');
    this.follower.classList.add('active');
    document.body.appendChild(this.follower);

    // Event listeners
    document.addEventListener('mousemove', (e) => this.onMouseMove(e));
    document.addEventListener('mouseenter', () => this.show());
    document.addEventListener('mouseleave', () => this.hide());
  }

  onMouseMove(e) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;

    if (this.follower) {
      this.follower.style.left = `${this.mouse.x - this.options.size / 2}px`;
      this.follower.style.top = `${this.mouse.y - this.options.size / 2}px`;
    }
  }

  show() {
    if (this.follower) {
      this.follower.style.opacity = '1';
    }
  }

  hide() {
    if (this.follower) {
      this.follower.style.opacity = '0';
    }
  }

  destroy() {
    if (this.follower) {
      this.follower.remove();
    }
  }
}

// ============================================================
// 5. PARALLAX 3D EFFECT
// ============================================================

class Parallax3D {
  constructor(element, options = {}) {
    this.element = element;
    this.container = this.element.parentElement;
    this.strength = options.strength || 20;
    this.enableScroll = options.enableScroll !== false;
    this.enableMouse = options.enableMouse !== false;

    if (this.enableMouse) {
      document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    if (this.enableScroll) {
      window.addEventListener('scroll', () => this.handleScroll());
    }
  }

  handleMouseMove(e) {
    // Não executar em modo reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;

    this.element.style.transform = `perspective(1000px) rotateX(${y * this.strength}deg) rotateY(${x * this.strength}deg)`;
  }

  handleScroll() {
    if (!this.enableScroll) return;

    const rect = this.element.getBoundingClientRect();
    const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;

    this.element.style.transform = `translateZ(${Math.max(0, scrollPercent * 50)}px)`;
  }
}

// ============================================================
// 6. SMOOTH SCROLL HELPER
// ============================================================

class SmoothScroller {
  constructor(options = {}) {
    this.duration = options.duration || 1200;
    this.easing = options.easing || this.easeInOutCubic;

    this.initSmoothScrollLinks();
  }

  initSmoothScrollLinks() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          this.smoothScrollTo(target);
        }
      });
    });
  }

  smoothScrollTo(target) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / this.duration, 1);

      window.scrollBy(0, distance * this.easing(progress) - (window.scrollY - startPosition));

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }

  easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 + (-2 * (--t) * t * t);
  }
}

// ============================================================
// 7. WORD HIGHLIGHT ON SCROLL
// ============================================================

class WordHighlight {
  constructor(selector, options = {}) {
    this.words = document.querySelectorAll(selector);
    this.threshold = options.threshold || 0.5;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: this.threshold });

    this.words.forEach((word) => {
      this.observer.observe(word);
    });
  }
}

// ============================================================
// 8. COUNTER ANIMATION
// ============================================================

class CounterAnimation {
  constructor(element, options = {}) {
    this.element = element;
    this.target = parseInt(element.textContent) || options.target || 0;
    this.duration = options.duration || 2000;
    this.format = options.format || ((n) => n.toLocaleString());

    this.animated = false;

    if (window.IntersectionObserver) {
      this.observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !this.animated) {
          this.animate();
          this.observer.unobserve(this.element);
        }
      }, { threshold: 0.5 });

      this.observer.observe(this.element);
    }
  }

  animate() {
    this.animated = true;
    const start = 0;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.duration, 1);

      const current = Math.floor(start + (this.target - start) * progress);
      this.element.textContent = this.format(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }
}

// ============================================================
// 9. PERFORMANCE MONITORING
// ============================================================

class PerformanceMonitor {
  constructor(options = {}) {
    this.verbose = options.verbose || false;
    this.logMetrics = options.logMetrics !== false;

    this.init();
  }

  init() {
    // Web Vitals
    if ('web-vital' in window) {
      this.logWebVitals();
    }

    // Performance Observer
    if (window.PerformanceObserver) {
      this.observePerformance();
    }

    if (this.logMetrics) {
      this.logPageMetrics();
    }
  }

  logWebVitals() {
    console.log('📊 Web Vitals monitoring active');
  }

  observePerformance() {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (this.verbose) {
            console.log(`⏱️ ${entry.name}: ${entry.duration.toFixed(2)}ms`);
          }
        }
      });

      observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });
    } catch (e) {
      if (this.verbose) {
        console.warn('Performance Observer not fully supported');
      }
    }
  }

  logPageMetrics() {
    if (window.performance && window.performance.timing) {
      const timing = window.performance.timing;
      const loadTime = timing.loadEventEnd - timing.navigationStart;

      console.log(`✅ Page Load Time: ${loadTime}ms`);
    }
  }
}

// ============================================================
// 10. UTILITY FUNCTIONS
// ============================================================

/**
 * Debounce function para performance
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function para performance
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Check if user prefers reduced motion
 */
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Check if device is touch
 */
function isTouchDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Safe intersection observer check
 */
function hasIntersectionObserver() {
  return 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window;
}

// ============================================================
// MAIN INITIALIZATION
// ============================================================

class EffectsManager {
  constructor(options = {}) {
    this.options = {
      magneticButtons: options.magneticButtons !== false,
      rippleEffects: options.rippleEffects !== false,
      scrollReveal: options.scrollReveal !== false,
      cursorTracker: options.cursorTracker === true,
      smoothScroll: options.smoothScroll !== false,
      performanceMonitor: options.performanceMonitor === true,
      verbose: options.verbose === true,
    };

    this.init();
  }

  init() {
    // Esperar DOM estar pronto
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initEffects());
    } else {
      this.initEffects();
    }
  }

  initEffects() {
    if (this.options.verbose) {
      console.log('🎨 Initializing visual effects...');
    }

    // Desabilitar efeitos em modo reduced motion
    if (prefersReducedMotion()) {
      console.log('⚠️ Reduced motion enabled. Some effects disabled.');
      return;
    }

    if (this.options.magneticButtons) {
      initMagneticButtons();
      if (this.options.verbose) console.log('✅ Magnetic buttons initialized');
    }

    if (this.options.rippleEffects) {
      initRippleEffects();
      if (this.options.verbose) console.log('✅ Ripple effects initialized');
    }

    if (this.options.scrollReveal) {
      initScrollReveal();
      if (this.options.verbose) console.log('✅ Scroll reveal initialized');
    }

    if (this.options.smoothScroll) {
      new SmoothScroller({ duration: 1200 });
      if (this.options.verbose) console.log('✅ Smooth scroll initialized');
    }

    if (this.options.cursorTracker) {
      new CursorTracker({ enabled: true, size: 35 });
      if (this.options.verbose) console.log('✅ Cursor tracker initialized');
    }

    if (this.options.performanceMonitor) {
      new PerformanceMonitor({ verbose: this.options.verbose });
      if (this.options.verbose) console.log('✅ Performance monitor initialized');
    }

    console.log('🎬 All effects ready!');
  }
}

// ============================================================
// AUTO-INITIALIZE (Descomente para usar)
// ============================================================

// Uncomment the line below to auto-initialize all effects when script loads
/*
document.addEventListener('DOMContentLoaded', () => {
  new EffectsManager({
    magneticButtons: true,
    rippleEffects: true,
    scrollReveal: true,
    smoothScroll: true,
    cursorTracker: false, // Desabilitado por padrão
    performanceMonitor: false,
    verbose: true
  });
});
*/

// ============================================================
// EXPORT (para uso em módulos)
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    MagneticButton,
    RippleEffect,
    ScrollReveal,
    CursorTracker,
    Parallax3D,
    SmoothScroller,
    WordHighlight,
    CounterAnimation,
    PerformanceMonitor,
    EffectsManager,
    debounce,
    throttle,
    prefersReducedMotion,
    isTouchDevice,
    hasIntersectionObserver,
  };
}

// ============================================================
// EOF - SCRIPTS COMPLETOS 2026
// ============================================================
