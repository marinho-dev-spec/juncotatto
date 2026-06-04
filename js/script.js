// =============================
// CONFIGURAÇÕES & INICIALIZAÇÃO
// =============================

const WHATSAPP_NUMBER = '5547996615555';
const GALLERY_STYLES = ['realismo', 'fineline', 'blackwork', 'cobertura', 'lettering'];

// =============================
// HERO CAROUSEL BACKGROUND
// =============================

class HeroCarousel {
    constructor() {
        this.images = [
            'imagens-junco/estudio.webp',
            'imagens-junco/estudio2.webp',
            'imagens-junco/estudio-fktk.webp',
            'imagens-junco/foto-estudio-todo.webp'
        ];
        this.currentIndex = 0;
        this.hero = document.querySelector('.hero');
        this.carouselTrack = document.querySelector('.hero-carousel .carousel-track');

        if (this.carouselTrack) {
            this.setupCarousel();
            this.startCarousel();
        }
    }

    setupCarousel() {
        // Limpar track e adicionar todas as imagens
        this.carouselTrack.innerHTML = '';

        // Adicionar imagens 3 vezes para criar efeito infinito
        for (let cycle = 0; cycle < 3; cycle++) {
            this.images.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = 'Estúdio Junco';
                img.className = 'carousel-image';
                this.carouselTrack.appendChild(img);
            });
        }
    }

    startCarousel() {
        let position = 0;
        const imageWidth = 100 / this.images.length;
        const totalWidth = imageWidth * this.images.length;

        setInterval(() => {
            position -= imageWidth;

            // Reset para criar efeito contínuo
            if (Math.abs(position) >= totalWidth) {
                position = 0;
            }

            this.carouselTrack.style.transform = `translateX(${position}%)`;
        }, 5000);
    }
}

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
            { src: 'imagens-junco/tatto-braco.webp', category: 'realismo' },
            { src: 'imagens-junco/tatto-braco2.webp', category: 'realismo' },
            { src: 'imagens-junco/tatto-braco3.webp', category: 'fineline' },
            { src: 'imagens-junco/tatto-braco5.jpg', category: 'realismo' },
            { src: 'imagens-junco/tatto-braco11.webp', category: 'blackwork' },
            { src: 'imagens-junco/tatto-braco-jesus.webp', category: 'realismo' },
            { src: 'imagens-junco/tatto-3.webp', category: 'custom' }
        ];
        this.currentFilter = 'all';
        this.carouselIndex = 0;
        this.carouselInterval = null;
        this.setupFilters();
        this.generateImages();
        this.startCarousel();
    }

    setupFilters() {
        const gallerySection = document.getElementById('trabalhos')?.parentElement;
        if (!gallerySection) return;

        const filterContainer = document.createElement('div');
        filterContainer.className = 'gallery-filters';
        filterContainer.innerHTML = `
            <button class="filter-btn active" onclick="gallery.filterGallery('all')">Todos</button>
            <button class="filter-btn" onclick="gallery.filterGallery('realismo')">Realismo</button>
            <button class="filter-btn" onclick="gallery.filterGallery('fineline')">Fine Line</button>
            <button class="filter-btn" onclick="gallery.filterGallery('blackwork')">Blackwork</button>
            <button class="filter-btn" onclick="gallery.filterGallery('custom')">Custom</button>
        `;

        const gallery = document.getElementById('galleryGrid');
        gallery.parentElement.insertBefore(filterContainer, gallery);
    }

    filterGallery(category) {
        this.currentFilter = category;
        this.carouselIndex = 0;
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        this.stopCarousel();
        this.generateImages();
        this.startCarousel();
    }

    startCarousel() {
        this.carouselInterval = setInterval(() => this.rotateCarousel(), 4000);
    }

    stopCarousel() {
        if (this.carouselInterval) {
            clearInterval(this.carouselInterval);
            this.carouselInterval = null;
        }
    }

    rotateCarousel() {
        const gallery = document.getElementById('galleryGrid');
        const items = gallery.querySelectorAll('.gallery-item');

        if (items.length === 0) return;

        // Remove active de todos os items
        items.forEach(item => item.classList.remove('carousel-active'));

        // Avança o índice
        this.carouselIndex = (this.carouselIndex + 1) % items.length;

        // Adiciona active ao item atual
        items[this.carouselIndex].classList.add('carousel-active');

        // Atualiza indicators
        const indicators = document.querySelectorAll('.carousel-indicator');
        indicators.forEach((ind, idx) => {
            if (idx === this.carouselIndex) {
                ind.classList.add('active');
            } else {
                ind.classList.remove('active');
            }
        });
    }

    generateImages() {
        const gallery = document.getElementById('galleryGrid');
        gallery.innerHTML = '';

        const filteredImages = this.currentFilter === 'all'
            ? this.tattooImages
            : this.tattooImages.filter(img => img.category === this.currentFilter);

        filteredImages.forEach((image, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            if (index === 0) item.classList.add('carousel-active');
            item.style.animationDelay = (index * 0.1) + 's';

            const img = document.createElement('img');
            img.src = image.src;
            img.alt = 'Trabalho ' + (index + 1);
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.onclick = () => this.openLightbox(image.src);

            const overlay = document.createElement('div');
            overlay.className = 'gallery-overlay';
            overlay.innerHTML = `<span class="gallery-category">${this.getCategoryLabel(image.category)}</span>`;

            item.appendChild(img);
            item.appendChild(overlay);
            gallery.appendChild(item);
        });

        // Criar indicators
        this.createCarouselIndicators(filteredImages.length);
    }

    createCarouselIndicators(count) {
        const gallery = document.getElementById('galleryGrid');
        const existingIndicators = gallery.parentElement.querySelector('.carousel-indicators');
        if (existingIndicators) existingIndicators.remove();

        const indicatorsContainer = document.createElement('div');
        indicatorsContainer.className = 'carousel-indicators';

        for (let i = 0; i < count; i++) {
            const indicator = document.createElement('button');
            indicator.className = 'carousel-indicator' + (i === 0 ? ' active' : '');
            indicator.onclick = () => this.goToImage(i);
            indicatorsContainer.appendChild(indicator);
        }

        gallery.parentElement.appendChild(indicatorsContainer);
    }

    goToImage(index) {
        const gallery = document.getElementById('galleryGrid');
        const items = gallery.querySelectorAll('.gallery-item');

        items.forEach(item => item.classList.remove('carousel-active'));
        items[index].classList.add('carousel-active');

        const indicators = document.querySelectorAll('.carousel-indicator');
        indicators.forEach(ind => ind.classList.remove('active'));
        indicators[index].classList.add('active');

        this.carouselIndex = index;
    }

    getCategoryLabel(category) {
        const labels = {
            'realismo': 'Realismo',
            'fineline': 'Fine Line',
            'blackwork': 'Blackwork',
            'custom': 'Custom'
        };
        return labels[category] || category;
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

    // Validação básica
    if (!nome.trim() || !whatsapp.trim() || !ideia.trim()) {
        alert('Por favor, preencha todos os campos');
        return;
    }

    // Mostrar modal de confirmação
    showFormConfirmation(nome);

    const message = `Oi, Gabriel! Meu nome é ${nome}. Vim pelo site e gostaria de um orçamento. Minha ideia: ${ideia}`;
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;

    trackEvent('form_submission', { form_type: 'contact', timestamp: new Date().toISOString() });

    // Abrir WhatsApp após 1 segundo
    setTimeout(() => {
        window.open(url, '_blank');
    }, 1000);

    form.reset();
}

function showFormConfirmation(nome) {
    const modal = document.createElement('div');
    modal.className = 'form-modal';
    modal.innerHTML = `
        <div class="form-modal-content">
            <div class="form-modal-icon">✓</div>
            <h3>Mensagem Enviada!</h3>
            <p>Oi ${nome}! Sua mensagem foi enviada com sucesso.</p>
            <p class="form-modal-subtitle">Gabriel responderá em breve via WhatsApp.</p>
            <button onclick="this.parentElement.parentElement.remove()" class="btn btn-primary">Fechar</button>
        </div>
    `;

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });

    document.body.appendChild(modal);

    // Auto-fechar após 5 segundos
    setTimeout(() => {
        if (modal.parentElement) modal.remove();
    }, 5000);
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
    const heroCarousel = new HeroCarousel();
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
