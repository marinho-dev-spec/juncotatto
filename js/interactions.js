// =============================
// INTERACTIVE EFFECTS & ANIMATIONS
// =============================

class InteractiveEffects {
    constructor() {
        this.setupMagneticButtons();
        this.setupBloomEffects();
        this.setupCursorTracking();
        this.setupCardInteractions();
    }

    // ===========================
    // MAGNETIC CURSOR EFFECT
    // ===========================

    setupMagneticButtons() {
        const magneticElements = document.querySelectorAll('[data-magnetic]');

        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                const distance = Math.sqrt(x * x + y * y);
                const maxDistance = Math.sqrt(
                    rect.width * rect.width + rect.height * rect.height
                ) / 2;

                // Atrair apenas dentro de um raio
                if (distance < maxDistance * 0.6) {
                    el.style.setProperty('--mag-x', `${x * 0.15}px`);
                    el.style.setProperty('--mag-y', `${y * 0.15}px`);
                } else {
                    el.style.setProperty('--mag-x', '0px');
                    el.style.setProperty('--mag-y', '0px');
                }
            });

            el.addEventListener('mouseleave', () => {
                el.style.setProperty('--mag-x', '0px');
                el.style.setProperty('--mag-y', '0px');
            });
        });

        // Adicionar magnetic aos cards e botões por padrão
        const cards = document.querySelectorAll(
            '.testimonial-card, .gallery-item, .step, .piercing-card'
        );
        cards.forEach(card => {
            if (!card.hasAttribute('data-magnetic')) {
                card.classList.add('card-magnetic');
                this.setupMagneticCard(card);
            }
        });
    }

    setupMagneticCard(card) {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Movimento mais sutil em cards
            card.style.setProperty('--mag-x', `${x * 0.1}px`);
            card.style.setProperty('--mag-y', `${y * 0.1}px`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--mag-x', '0px');
            card.style.setProperty('--mag-y', '0px');
        });
    }

    // ===========================
    // BLOOM GLOW EFFECT
    // ===========================

    setupBloomEffects() {
        const bloomElements = document.querySelectorAll('[data-bloom]');

        bloomElements.forEach(el => {
            el.classList.add('gold-bloom');

            // Adicionar brilho ao hover
            el.addEventListener('mouseenter', () => {
                el.style.filter = 'drop-shadow(0 0 12px rgba(201, 162, 75, 0.6))';
            });

            el.addEventListener('mouseleave', () => {
                el.style.filter = 'drop-shadow(0 0 0px rgba(201, 162, 75, 0))';
            });
        });

        // Bloom nos números
        document.querySelectorAll('.proof-number, .proof-item, [data-counter]').forEach(el => {
            el.addEventListener('mouseenter', () => {
                el.classList.add('element-bloom');
            });

            el.addEventListener('mouseleave', () => {
                el.classList.remove('element-bloom');
            });
        });
    }

    // ===========================
    // CUSTOM CURSOR
    // ===========================

    setupCursorTracking() {
        if (window.innerWidth < 768) return; // Desabilitar em mobile

        const cursor = document.createElement('div');
        cursor.id = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid rgba(201, 162, 75, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: add;
            display: none;
            transition: all 0.1s ease-out;
            will-change: transform;
        `;
        document.body.appendChild(cursor);

        // Trail element (opcional)
        const trail = document.createElement('div');
        trail.id = 'cursor-trail';
        trail.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            border: 1px solid rgba(201, 162, 75, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            mix-blend-mode: add;
            display: none;
        `;
        document.body.appendChild(trail);

        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursor.style.display = 'block';
            cursor.style.left = (mouseX - 10) + 'px';
            cursor.style.top = (mouseY - 10) + 'px';

            // Atualizar trail com delay
            setTimeout(() => {
                trail.style.display = 'block';
                trail.style.left = (mouseX - 5) + 'px';
                trail.style.top = (mouseY - 5) + 'px';
            }, 30);

            // Expandir cursor ao hover de elementos interativos
            const target = e.target;
            const isInteractive =
                target.classList.contains('btn') ||
                target.classList.contains('gallery-item') ||
                target.classList.contains('card-magnetic') ||
                target.classList.contains('testimonial-card') ||
                target.closest('a') ||
                target.closest('button');

            if (isInteractive) {
                cursor.style.width = '36px';
                cursor.style.height = '36px';
                cursor.style.left = (mouseX - 18) + 'px';
                cursor.style.top = (mouseY - 18) + 'px';
                cursor.style.borderColor = 'rgba(201, 162, 75, 1)';
                cursor.style.boxShadow = '0 0 15px rgba(201, 162, 75, 0.5)';
            } else {
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.left = (mouseX - 10) + 'px';
                cursor.style.top = (mouseY - 10) + 'px';
                cursor.style.borderColor = 'rgba(201, 162, 75, 0.6)';
                cursor.style.boxShadow = 'none';
            }
        });

        // Esconder cursor customizado ao sair da janela
        document.addEventListener('mouseleave', () => {
            cursor.style.display = 'none';
            trail.style.display = 'none';
        });

        // Mostrar ao entrar
        document.addEventListener('mouseenter', () => {
            cursor.style.display = 'block';
        });

        // Hide default cursor
        document.body.style.cursor = 'none';
    }

    // ===========================
    // CARD INTERACTIONS
    // ===========================

    setupCardInteractions() {
        const cards = document.querySelectorAll(
            '.testimonial-card, .google-review-card, .review-card, .piercing-card'
        );

        cards.forEach(card => {
            // Adicionar glassmorphism classe
            card.classList.add('glass-card', 'lift-on-hover', 'card-magnetic');

            // Adicionar efeito de entrada
            card.addEventListener('mouseenter', () => {
                card.style.backdropFilter = 'blur(20px) saturate(1.8)';
                card.style.webkitBackdropFilter = 'blur(20px) saturate(1.8)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.backdropFilter = 'blur(10px) saturate(1.5)';
                card.style.webkitBackdropFilter = 'blur(10px) saturate(1.5)';
            });
        });
    }
}

// =============================
// BUTTON HOVER EFFECTS
// =============================

class ButtonEffects {
    constructor() {
        this.setupHoverEffects();
        this.setupRippleEffects();
    }

    setupHoverEffects() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');

        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                // Scale animation
                this.style.transform = 'translateY(-4px) scale(1.02)';
            });

            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });

            btn.addEventListener('mousedown', function() {
                this.style.transform = 'translateY(-2px) scale(0.98)';
            });

            btn.addEventListener('mouseup', function() {
                this.style.transform = 'translateY(-4px) scale(1.02)';
            });
        });
    }

    setupRippleEffects() {
        const rippleButtons = document.querySelectorAll('.btn');

        rippleButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Criar ripple
                const rect = btn.getBoundingClientRect();
                const ripple = document.createElement('span');
                ripple.style.cssText = `
                    position: absolute;
                    left: ${e.clientX - rect.left}px;
                    top: ${e.clientY - rect.top}px;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.4);
                    transform: translate(-50%, -50%);
                    pointer-events: none;
                    animation: rippleExpand 0.6s ease-out;
                `;

                // Adicionar animação se não existir
                if (!document.getElementById('ripple-style')) {
                    const style = document.createElement('style');
                    style.id = 'ripple-style';
                    style.textContent = `
                        @keyframes rippleExpand {
                            to {
                                width: 300px;
                                height: 300px;
                                opacity: 0;
                            }
                        }
                    `;
                    document.head.appendChild(style);
                }

                if (btn.style.position !== 'relative' && btn.style.position !== 'absolute') {
                    btn.style.position = 'relative';
                    btn.style.overflow = 'hidden';
                }

                btn.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }
}

// =============================
// LINK UNDERLINE EFFECTS
// =============================

class LinkEffects {
    constructor() {
        this.setupUnderlineAnimation();
    }

    setupUnderlineAnimation() {
        const links = document.querySelectorAll('a:not(.btn)');

        links.forEach(link => {
            // Skip links sem href significativo
            if (!link.href || link.href.startsWith('javascript')) return;

            link.style.position = 'relative';
            link.style.textDecoration = 'none';

            // Criar underline
            const underline = document.createElement('span');
            underline.style.cssText = `
                position: absolute;
                bottom: -4px;
                left: 0;
                width: 0;
                height: 2px;
                background: linear-gradient(90deg, var(--gold), var(--gold-light));
                transition: width 0.3s ease-out;
            `;
            link.appendChild(underline);

            link.addEventListener('mouseenter', () => {
                underline.style.width = '100%';
            });

            link.addEventListener('mouseleave', () => {
                underline.style.width = '0%';
            });
        });
    }
}

// =============================
// SCROLL INDICATOR
// =============================

class ScrollIndicator {
    constructor() {
        this.indicator = this.createIndicator();
        this.init();
    }

    createIndicator() {
        const indicator = document.createElement('div');
        indicator.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border: 2px solid rgba(201, 162, 75, 0.3);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            z-index: 100;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s;
            backdrop-filter: blur(10px);
        `;
        document.body.appendChild(indicator);
        return indicator;
    }

    init() {
        window.addEventListener('scroll', () => {
            const scrollPercentage =
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

            // Mostrar botão ao rolar
            if (scrollPercentage > 20) {
                this.indicator.style.opacity = '1';
            } else {
                this.indicator.style.opacity = '0';
            }

            // Atualizar texto
            this.indicator.textContent = Math.round(scrollPercentage) + '%';

            // Click para voltar ao topo
            this.indicator.onclick = () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };
        }, { passive: true });
    }
}

// =============================
// INICIALIZAÇÃO
// =============================

document.addEventListener('DOMContentLoaded', () => {
    new InteractiveEffects();
    new ButtonEffects();
    new LinkEffects();
    new ScrollIndicator();

    console.log('✓ Interactive effects initialized');
});
