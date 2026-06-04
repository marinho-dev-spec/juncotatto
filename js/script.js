// =============================
// CONFIGURAÇÕES & INICIALIZAÇÃO
// =============================

const WHATSAPP_NUMBER = '5547996615555';
const GALLERY_STYLES = ['realismo', 'fineline', 'blackwork', 'cobertura', 'lettering'];

// =============================
// FLOATING CTA BUTTON
// =============================

class FloatingCtaButton {
    constructor() {
        this.button = document.getElementById('floatingCta');
        this.scrollThreshold = 0.5; // 50% da página
        this.setupScrollListener();
    }

    setupScrollListener() {
        window.addEventListener('scroll', () => this.updateVisibility());
        // Verificar logo na carga
        this.updateVisibility();
    }

    updateVisibility() {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) || 0;

        if (scrollPercentage > this.scrollThreshold) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }
}

// =============================
// PHONE INPUT MASK
// =============================

class PhoneInputMask {
    constructor() {
        const phoneInput = document.querySelector('[name="user_phone"]');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => this.maskPhone(e.target));
            phoneInput.addEventListener('keydown', (e) => this.handleKeydown(e));
        }
    }

    maskPhone(input) {
        let value = input.value.replace(/\D/g, '');

        // Limita a 11 dígitos (DDD + telefone)
        if (value.length > 11) {
            value = value.substring(0, 11);
        }

        // Formata: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
        if (value.length > 0) {
            if (value.length <= 2) {
                value = `(${value}`;
            } else if (value.length <= 7) {
                value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
            } else {
                value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7)}`;
            }
        }

        input.value = value;
    }

    handleKeydown(e) {
        // Permitir backspace, delete, tab e arrow keys
        const allowedKeys = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];
        if (!allowedKeys.includes(e.key) && !e.ctrlKey && !e.metaKey) {
            if (!/\d/.test(e.key)) {
                e.preventDefault();
            }
        }
    }
}

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

            // Transição suave com easing cinematic
            this.carouselTrack.style.transition = 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
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

            const link = document.createElement('a');
            link.href = image.src;
            link.className = 'glightbox';
            link.setAttribute('data-gallery', 'gallery');

            const img = document.createElement('img');
            img.src = image.src;
            img.alt = 'Tatuagem realismo - ' + this.getCategoryLabel(image.category);
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';

            const overlay = document.createElement('div');
            overlay.className = 'gallery-overlay';
            overlay.innerHTML = `<span class="gallery-category">${this.getCategoryLabel(image.category)}</span>`;

            link.appendChild(img);
            item.appendChild(link);
            item.appendChild(overlay);
            gallery.appendChild(item);
        });

        // Criar indicators
        this.createCarouselIndicators(filteredImages.length);

        // Reinitialize GLightbox para novos elementos
        if (window.GLightbox) {
            GLightbox.init();
        }
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
            handle.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.handleTouch(e);
            });
            handle.addEventListener('touchmove', (e) => {
                e.preventDefault();
                this.handleTouch(e);
            });
            this.update(50);
        }
    }

    handleTouch(e) {
        const slider = document.getElementById('baSlider');
        const touch = e.touches[0];
        const rect = slider.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        this.update(percentage);
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
// ACTIVE SECTION INDICATOR
// =============================

class ActiveSectionIndicator {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav a[href^="#"]');
        this.updateActiveSection();
        window.addEventListener('scroll', () => this.updateActiveSection());
    }

    updateActiveSection() {
        let currentSection = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = '#' + section.id;
            }
        });

        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSection) {
                link.classList.add('active');
            }
        });
    }
}

// =============================
// HEADER STICKY COM BLUR
// =============================

class StickyHeader {
    constructor() {
        const header = document.getElementById('header');
        const logo = document.querySelector('.logo');
        let lastScrollTop = 0;

        // Logo clicável para voltar ao topo
        if (logo) {
            logo.style.cursor = 'pointer';
            logo.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

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

    // Disparar evento de conversão - Google Analytics 4
    if (typeof gtag === 'function') {
        gtag('event', 'whatsapp_contact', {
            'event_category': 'engagement',
            'event_label': tipo,
            'value': 1
        });
    }

    // Disparar evento de conversão - Meta Pixel
    if (typeof fbq === 'function') {
        fbq('track', 'Contact', {
            'content_name': 'WhatsApp Contact',
            'value': 1.0,
            'currency': 'BRL',
            'content_type': 'product'
        });
    }

    trackEvent('whatsapp_click', { tipo, timestamp: new Date().toISOString() });
    window.open(url, '_blank');
}

// =============================
// FORM SUBMISSION
// =============================

function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const statusDiv = document.getElementById('form-status');
    const submitBtn = form.querySelector('button[type="submit"]');

    // Get values
    const nome = form.querySelector('[name="user_name"]').value.trim();
    const whatsapp = form.querySelector('[name="user_phone"]').value.trim();
    const ideia = form.querySelector('[name="message"]').value.trim();

    // Clear previous status
    statusDiv.innerHTML = '';
    statusDiv.className = '';

    // VALIDAÇÃO 1: Campos vazios
    if (!nome || !whatsapp || !ideia) {
        statusDiv.innerHTML = '❌ Por favor, preencha todos os campos obrigatórios';
        statusDiv.style.color = '#FF6B6B';
        return;
    }

    // VALIDAÇÃO 2: Nome (mínimo 3 caracteres)
    if (nome.length < 3) {
        statusDiv.innerHTML = '❌ Digite um nome completo (mínimo 3 caracteres)';
        statusDiv.style.color = '#FF6B6B';
        return;
    }

    // VALIDAÇÃO 3: WhatsApp (deve ter números)
    const phoneCleaned = whatsapp.replace(/\D/g, '');
    if (phoneCleaned.length < 10) {
        statusDiv.innerHTML = '❌ Telefone inválido (mínimo 10 dígitos)';
        statusDiv.style.color = '#FF6B6B';
        return;
    }

    // VALIDAÇÃO 4: Mensagem (mínimo 10 caracteres)
    if (ideia.length < 10) {
        statusDiv.innerHTML = '❌ Descreva sua ideia com mais detalhes (mínimo 10 caracteres)';
        statusDiv.style.color = '#FF6B6B';
        return;
    }

    // ✅ TUDO OK - MOSTRAR LOADING
    submitBtn.disabled = true;
    submitBtn.textContent = '⏳ Processando...';
    statusDiv.innerHTML = '⏳ Enviando sua mensagem...';
    statusDiv.style.color = '#C9A24B';

    // Enviar para WhatsApp com delay
    setTimeout(() => {
        const message = `Oi Gabriel! 👋\n\nMeu nome é ${nome}\nVim pelo seu website e gostaria de um orçamento.\n\n💡 Minha ideia de tatuagem:\n${ideia}\n\nTelefone: ${whatsapp}`;
        const whatsappNumber = phoneCleaned.startsWith('55') ? phoneCleaned : '55' + phoneCleaned;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Track success
        if (window.gtag) {
            gtag('event', 'form_submission_success', {
                'form_type': 'contact',
                'method': 'whatsapp'
            });
        }

        // Show success message
        statusDiv.innerHTML = '✅ Mensagem pronta! Abrindo WhatsApp em 2 segundos...';
        statusDiv.style.color = '#51CF66';

        // Open WhatsApp
        setTimeout(() => {
            window.open(url, '_blank');

            // Reset form and button
            setTimeout(() => {
                form.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar';

                // Keep success message visible for 5 seconds, then clear
                setTimeout(() => {
                    statusDiv.innerHTML = '';
                }, 5000);
            }, 500);
        }, 2000);
    }, 300);
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
// MOBILE DETECTION
// =============================

const isMobile = () => window.innerWidth <= 768;
const isLandscape = () => window.innerHeight < window.innerWidth;

// =============================
// PERFORMANCE OPTIMIZATION
// =============================

// Disable heavy animations on mobile
if (isMobile()) {
    // Reduce animation frame rate on mobile
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            [data-bloom], [data-glow] { animation: none !important; }
            .btn-pulse { animation: none !important; }
            [data-stagger] > * { animation: none !important; }
        }
    `;
    document.head.appendChild(style);
}

// =============================
// INICIALIZAÇÃO
// =============================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎨 Junco Tattoo & Piercing — Site Moderno 2026');
    console.log(`📱 Mobile: ${isMobile()}, Landscape: ${isLandscape()}`);

    // Instanciar sistemas
    const heroCarousel = new HeroCarousel();
    const scrollReveal = new ScrollReveal();
    const gallery = new Gallery();
    window.gallery = gallery; // Disponível globalmente

    // Inicializar GLightbox para galeria
    setTimeout(() => {
        if (window.GLightbox) {
            GLightbox.init('.glightbox', {
                titlePosition: 'bottom',
                touchNavigation: true,
                keyboardNavigation: true,
                closeEffect: 'fadeOut',
                slideEffect: 'slide'
            });
        }
    }, 100);

    const faq = new FAQ();
    window.faqInstance = faq; // Exposição global para toggleFaq()
    const slider = new BeforeAfterSlider();
    window.sliderInstance = slider; // Exposição global para updateBeforeAfter()
    const activeSectionIndicator = new ActiveSectionIndicator();
    const header = new StickyHeader();
    const menu = new MobileMenu();
    const floatingCta = new FloatingCtaButton();
    const phoneInput = new PhoneInputMask();

    // Desabilitar parallax em mobile para performance
    if (!isMobile()) {
        const parallax = new ParallaxScroll();
        const mouse = new MouseFollow();
    }

    const counter = new AnimatedCounter();
    const ripple = new RippleEffect();

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
// RIPPLE EFFECT ON BUTTONS
// =============================

class RippleEffect {
    constructor() {
        this.setupRipples();
    }

    setupRipples() {
        document.querySelectorAll('.ripple-effect, .btn').forEach(element => {
            element.addEventListener('click', (e) => this.createRipple(e, element));
        });
    }

    createRipple(event, element) {
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const ripple = document.createElement('span');
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        ripple.style.position = 'absolute';
        ripple.style.pointerEvents = 'none';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(201, 162, 75, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';

        if (!element.style.position || element.style.position === 'static') {
            element.style.position = 'relative';
            element.style.overflow = 'hidden';
        }

        element.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }
}

// =============================
// WRAPPER FUNCTIONS PARA ONCLICK
// =============================

// Função global para toggle FAQ (chamada via onclick no HTML)
function toggleFaq(button) {
    if (window.faqInstance) {
        window.faqInstance.toggle(button);
    }
}

// Função global para atualizar Before/After slider (chamada via oninput no HTML)
function updateBeforeAfter(value) {
    if (window.sliderInstance) {
        window.sliderInstance.update(value);
    }
}

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
