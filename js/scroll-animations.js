// =============================
// SCROLL REVEAL AVANÇADO
// =============================

class AdvancedScrollReveal {
    constructor() {
        this.elements = [];
        this.scrollVelocity = 0;
        this.lastScrollY = 0;
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupParallax();
        this.setupScrollVelocity();
    }

    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Adicionar classe de visibilidade
                    entry.target.classList.add('scroll-visible');

                    // Stagger para elementos filhos se houver
                    const children = entry.target.querySelectorAll('[data-stagger]');
                    if (children.length > 0) {
                        children.forEach((child, childIndex) => {
                            child.style.animationDelay = `${childIndex * 50}ms`;
                            child.classList.add('stagger-item');
                        });
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, options);

        // Observar elementos específicos
        const elementsToObserve = document.querySelectorAll(
            '[data-scroll], section, .gallery-item, .testimonial-card, ' +
            '.step, .faq-item, .safety-item, .review-card'
        );

        elementsToObserve.forEach(el => {
            observer.observe(el);
        });
    }

    setupParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        if (parallaxElements.length === 0) return;

        window.addEventListener('scroll', () => {
            parallaxElements.forEach(el => {
                const speed = parseFloat(el.dataset.parallax) || 0.3;
                const rect = el.getBoundingClientRect();
                const elementY = window.scrollY + rect.top;
                const distance = window.scrollY - elementY;

                el.style.transform = `translateY(${distance * speed}px)`;
            });
        }, { passive: true });
    }

    setupScrollVelocity() {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            this.scrollVelocity = Math.abs(currentScrollY - this.lastScrollY);
            this.lastScrollY = currentScrollY;
        }, { passive: true });
    }
}

// =============================
// STAGGER ANIMATION HELPER
// =============================

class StaggerAnimation {
    static staggerChildren(container, selector = '*', delayBetween = 50) {
        const children = container.querySelectorAll(selector);

        children.forEach((child, index) => {
            child.style.animationDelay = `${index * delayBetween}ms`;
            child.classList.add('stagger-item');
        });
    }

    static staggerOnScroll(selector, delayBetween = 50) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const parent = entry.target;
                    const children = parent.querySelectorAll('[data-stagger-item], .gallery-item');

                    children.forEach((child, index) => {
                        child.style.animationDelay = `${index * delayBetween}ms`;
                        child.classList.add('stagger-item');
                    });

                    observer.unobserve(parent);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll(selector).forEach(el => {
            observer.observe(el);
        });
    }

    static observeElement(selector, className = 'visible', delay = 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add(className);
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll(selector).forEach(el => {
            observer.observe(el);
        });
    }
}

// =============================
// SCROLL PROGRESS BAR
// =============================

class ScrollProgress {
    constructor() {
        this.progressBar = this.createProgressBar();
        this.init();
    }

    createProgressBar() {
        const bar = document.createElement('div');
        bar.id = 'scroll-progress';
        bar.style.cssText = `
            position: fixed;
            top: 60px;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--gold), var(--gold-light));
            width: 0%;
            z-index: 200;
            transition: width 0.1s ease;
            box-shadow: 0 0 10px rgba(201, 162, 75, 0.3);
        `;
        document.body.appendChild(bar);
        return bar;
    }

    init() {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            this.progressBar.style.width = scrollPercent + '%';
        }, { passive: true });
    }
}

// =============================
// FADE IN ON SCROLL
// =============================

function initFadeInOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .card, [data-fade-in]').forEach(el => {
        observer.observe(el);
    });
}

// =============================
// NÚMERO ANIMADO COM SCROLL TRIGGER
// =============================

class ScrollCounter {
    constructor() {
        this.init();
    }

    init() {
        const counters = document.querySelectorAll('[data-counter]');

        if (counters.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    const target = parseInt(entry.target.dataset.counter, 10);
                    const duration = parseInt(entry.target.dataset.duration || 1000, 10);
                    this.animateCounter(entry.target, target, duration);
                    entry.target.classList.add('counted');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element, target, duration = 1000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const counter = setInterval(() => {
            current += increment;

            if (current >= target) {
                element.textContent = target;
                clearInterval(counter);
            } else {
                // Formatar número com casas decimais se necessário
                const isDecimal = element.dataset.counter.includes('.');
                element.textContent = isDecimal ?
                    current.toFixed(1) :
                    Math.floor(current);
            }
        }, 16);
    }
}

// =============================
// SMOOTH SCROLL BEHAVIOR
// =============================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 60;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =============================
// INICIALIZAR QUANDO DOM ESTIVER PRONTO
// =============================

document.addEventListener('DOMContentLoaded', () => {
    // Iniciar scroll reveal
    new AdvancedScrollReveal();

    // Iniciar contador
    new ScrollCounter();

    // Scroll progress bar (opcional, comentado por padrão)
    // new ScrollProgress();

    // Fade in
    initFadeInOnScroll();

    // Smooth scroll
    setupSmoothScroll();

    // Stagger animation
    StaggerAnimation.staggerOnScroll('.gallery, .testimonials-grid, .steps, .safety-grid');

    console.log('✓ Advanced scroll animations initialized');
});
