// =============================
// CONFIGURAÇÕES & INICIALIZAÇÃO
// =============================

const WHATSAPP_NUMBER = '5547996615555';
const GALLERY_STYLES = ['realismo', 'fineline', 'blackwork', 'cobertura', 'lettering'];

// =============================
// SISTEMA DE SCROLL REVEAL
// =============================

class ScrollReveal {
    constructor() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    this.observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        this.init();
    }

    init() {
        document.querySelectorAll('section').forEach(section => {
            section.setAttribute('data-scroll', '');
            this.observer.observe(section);
        });
    }
}

// =============================
// GALERIA MODERNA COM FILTROS
// =============================

class Gallery {
    constructor() {
        this.tattooImages = [
            'imagens-junco/tatto-braco.webp',
            'imagens-junco/tatto-braco2.webp',
            'imagens-junco/tatto-braco3.webp',
            'imagens-junco/tatto-braco5.jpg',
            'imagens-junco/tatto-braco11.webp',
            'imagens-junco/tatto-braco-jesus.webp',
            'imagens-junco/tatto-3.webp'
        ];
        this.generateImages();
    }

    generateImages() {
        const gallery = document.getElementById('galleryGrid');
        gallery.innerHTML = '';

        this.tattooImages.forEach((imagePath, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';

            item.innerHTML = `
                <img src='${imagePath}'
                     alt='Trabalho ${index + 1}'
                     style='width: 100%; height: 100%; object-fit: cover;'
                     onclick='gallery.openLightbox(this.src)'>
            `;

            gallery.appendChild(item);
        });
    }

    generateGradient(index) {
        const gradients = [
            { color1: '#1A1A1A', color2: '#2A2A2A' },
            { color1: '#1F1F1F', color2: '#2F2F2F' },
            { color1: '#151515', color2: '#252525' },
            { color1: '#202020', color2: '#303030' },
            { color1: '#1D1D1D', color2: '#2D2D2D' },
            { color1: '#1C1C1C', color2: '#2C2C2C' },
        ];
        return gradients[index % gradients.length];
    }

    openLightbox(src) {
        const lightbox = document.getElementById('lightbox');
        document.getElementById('lightboxImg').src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// =============================
// FAQ ACCORDEÃO
// =============================

class FAQ {
    constructor() {
        this.setup();
    }

    setup() {
        document.querySelectorAll('.faq-question').forEach(btn => {
            btn.addEventListener('click', (e) => this.toggle(e.currentTarget));
        });
    }

    toggle(button) {
        const faqItem = button.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        const icon = button.querySelector('.faq-icon');

        // Fechar outros
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                const otherAnswer = item.querySelector('.faq-answer');
                const otherBtn = item.querySelector('.faq-question');
                otherAnswer.classList.remove('active');
                otherBtn.classList.remove('active');
            }
        });

        // Toggle atual com animação
        answer.classList.toggle('active');
        button.classList.toggle('active');
    }
}

// =============================
// BEFORE & AFTER SLIDER
// =============================

class BeforeAfterSlider {
    constructor() {
        const handle = document.getElementById('baSliderHandle');
        if (handle) {
            handle.addEventListener('input', (e) => this.update(e.target.value));
            this.update(50);
        }
    }

    update(value) {
        const slider = document.getElementById('baSlider');
        const before = slider.querySelector('.ba-before');
        const handle = slider.querySelector('.ba-slider-handle');

        before.style.width = value + '%';
        handle.style.left = value + '%';
    }
}

// =============================
// HEADER STICKY COM BLUR
// =============================

class StickyHeader {
    constructor() {
        const header = document.getElementById('header');
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;

            if (scrollTop > 100) {
                header.style.boxShadow = '0 8px 32px rgba(201, 162, 75, 0.15)';
                header.style.backgroundColor = 'rgba(10, 10, 10, 0.85)';
            } else {
                header.style.boxShadow = 'none';
                header.style.backgroundColor = 'rgba(10, 10, 10, 0.6)';
            }

            // Hide/show header ao scroll down/up
            if (scrollTop > lastScrollTop && scrollTop > 300) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }

            header.style.transition = 'all var(--speed-fast) var(--ease-smooth)';
            lastScrollTop = scrollTop;
        });
    }
}

// =============================
// MENU MOBILE
// =============================

class MobileMenu {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.nav = document.querySelector('.nav');
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggle());
            this.setupNavLinks();
        }
    }

    toggle() {
        this.hamburger.classList.toggle('active');
        let mobileNav = document.querySelector('.mobile-nav');

        if (!mobileNav) {
            mobileNav = document.createElement('nav');
            mobileNav.className = 'mobile-nav';
            mobileNav.style.cssText = `
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: rgba(10, 10, 10, 0.98);
                backdrop-filter: blur(20px);
                display: flex;
                flex-direction: column;
                padding: 20px;
                gap: 0;
                border-bottom: 1px solid rgba(201, 162, 75, 0.1);
                animation: slideDown 0.3s var(--ease-smooth);
            `;

            this.nav.querySelectorAll('a').forEach((link, index) => {
                const clone = link.cloneNode(true);
                clone.style.cssText = `
                    padding: 14px 16px;
                    color: var(--bone);
                    opacity: 0.8;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    font-size: 0.85rem;
                    transition: all var(--speed-fast);
                    border-radius: 6px;
                    animation: slideDown var(--speed-fast) var(--ease-smooth);
                    animation-delay: ${index * 0.05}s;
                    animation-fill-mode: both;
                `;
                clone.addEventListener('click', () => this.close());
                clone.addEventListener('mouseenter', function() {
                    this.style.opacity = '1';
                    this.style.backgroundColor = 'rgba(201, 162, 75, 0.1)';
                    this.style.paddingLeft = '24px';
                });
                clone.addEventListener('mouseleave', function() {
                    this.style.opacity = '0.8';
                    this.style.backgroundColor = 'transparent';
                    this.style.paddingLeft = '16px';
                });
                mobileNav.appendChild(clone);
            });

            document.querySelector('.header').appendChild(mobileNav);
        } else {
            mobileNav.remove();
        }
    }

    close() {
        this.hamburger.classList.remove('active');
        const mobileNav = document.querySelector('.mobile-nav');
        if (mobileNav) mobileNav.remove();
    }

    setupNavLinks() {
        this.nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => this.close());
        });
    }
}

// =============================
// WHATSAPP INTEGRATION
// =============================

const WHATSAPP_MESSAGES = {
    geral: "Oi, Gabriel! Vim pelo site. Quero um orçamento — a ideia é mais ou menos: ___ (posso mandar referência). Quando você tem agenda?",
    cobertura: "Oi, Gabriel! Quero cobrir uma tatuagem antiga. Vou te mandar a foto agora pra você ver se dá.",
    piercing: "Oi, Gabriel! Quero colocar um piercing. Como funciona?"
};

function abrirWhatsApp(tipo = 'geral') {
    const message = WHATSAPP_MESSAGES[tipo] || WHATSAPP_MESSAGES.geral;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    trackEvent('whatsapp_click', { tipo, timestamp: new Date().toISOString() });
    window.open(url, '_blank');
}

// =============================
// FORM SUBMISSION
// =============================

function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const inputs = form.querySelectorAll('input, textarea');
    const nome = inputs[0].value;
    const whatsapp = inputs[1].value;
    const ideia = inputs[2].value;

    const message = `Oi, Gabriel! Meu nome é ${nome}. Vim pelo site e gostaria de um orçamento. Minha ideia: ${ideia}`;
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;

    trackEvent('form_submission', { form_type: 'contact', timestamp: new Date().toISOString() });
    window.open(url, '_blank');
    form.reset();
}

// =============================
// SCROLL ANIMATIONS COM PARALLAX
// =============================

class ParallaxScroll {
    constructor() {
        window.addEventListener('scroll', () => this.update());
    }

    update() {
        const scrollTop = window.scrollY;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPosition = `center ${scrollTop * 0.5}px`;
        }
    }
}

// =============================
// MOUSE FOLLOW EFFECT
// =============================

class MouseFollow {
    constructor() {
        this.setupHeroEffect();
    }

    setupHeroEffect() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            hero.style.backgroundPosition = `calc(50% + ${x * 20}px) calc(50% + ${y * 20}px)`;
        });
    }
}

// =============================
// CONTADOR ANIMADO
// =============================

class AnimatedCounter {
    constructor() {
        this.setupCounters();
    }

    setupCounters() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.proof-number').forEach(el => observer.observe(el));
    }

    animateElement(el) {
        const finalValue = el.textContent.trim();
        const cleanValue = finalValue.replace(/[^0-9.,]/g, '').replace(',', '.');
        const numValue = parseFloat(cleanValue);

        if (!isNaN(numValue) && numValue > 0) {
            let currentValue = 0;
            const increment = numValue / 40;
            const hasDecimal = finalValue.includes(',');

            const interval = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numValue) {
                    el.textContent = finalValue;
                    clearInterval(interval);
                } else {
                    const displayValue = hasDecimal
                        ? currentValue.toFixed(1).replace('.', ',')
                        : Math.floor(currentValue).toString();
                    el.textContent = displayValue;
                }
            }, 30);
        }
    }
}

// =============================
// GOOGLE ANALYTICS
// =============================

window.gtag = window.gtag || function() {};

function trackEvent(eventName, eventData = {}) {
    console.log(`📊 Event: ${eventName}`, eventData);
    gtag('event', eventName, eventData);
}

// =============================
// SCROLL SUAVE
// =============================

function scrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// =============================
// FECHAR LIGHTBOX
// =============================

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// =============================
// INICIALIZAÇÃO
// =============================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎨 Junco Tattoo & Piercing — Site Moderno 2026');

    // Instanciar sistemas
    const scrollReveal = new ScrollReveal();
    const gallery = new Gallery();
    window.gallery = gallery; // Disponível globalmente
    const faq = new FAQ();
    const slider = new BeforeAfterSlider();
    const header = new StickyHeader();
    const menu = new MobileMenu();
    const parallax = new ParallaxScroll();
    const mouse = new MouseFollow();
    const counter = new AnimatedCounter();

    // Fechar lightbox
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });

    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href').substring(1);
            scrollTo(target);
        });
    });

    console.log('✅ Todos os sistemas inicializados');
});

// =============================
// UTILITÁRIOS
// =============================

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Adicionar suporte a animações CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
