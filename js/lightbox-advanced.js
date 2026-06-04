// =============================
// ADVANCED LIGHTBOX
// =============================

class AdvancedLightbox {
    constructor() {
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImg = document.getElementById('lightboxImg');
        this.lightboxContent = this.lightbox?.querySelector('.lightbox-content');

        if (this.lightbox) {
            this.setupLightboxEnhanced();
            this.overrideGalleryLightbox();
        }
    }

    setupLightboxEnhanced() {
        // Melhorar backdrop filter
        this.lightbox.style.cssText = `
            backdrop-filter: blur(20px) brightness(0.8) !important;
            -webkit-backdrop-filter: blur(20px) brightness(0.8) !important;
            background: rgba(0, 0, 0, 0.85) !important;
        `;

        // Style do content
        if (this.lightboxContent) {
            this.lightboxContent.style.cssText = `
                position: relative;
                max-width: 90%;
                max-height: 90vh;
                animation: zoomInAdvanced 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                will-change: transform;
            `;
        }

        // Close button aprimorado
        const closeBtn = this.lightbox.querySelector('.lightbox-close');
        if (closeBtn) {
            closeBtn.style.cssText = `
                position: absolute;
                top: 20px;
                right: 20px;
                background: rgba(201, 162, 75, 0.15) !important;
                border: 1.5px solid rgba(201, 162, 75, 0.3) !important;
                color: var(--bone) !important;
                font-size: 2rem !important;
                cursor: pointer !important;
                z-index: 1001;
                transition: all 0.3s ease !important;
                width: 50px !important;
                height: 50px !important;
                border-radius: 50% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                backdrop-filter: blur(10px) !important;
                -webkit-backdrop-filter: blur(10px) !important;
            `;

            closeBtn.addEventListener('mouseenter', () => {
                closeBtn.style.background = 'rgba(201, 162, 75, 0.4)';
                closeBtn.style.transform = 'scale(1.1) rotate(90deg)';
            });

            closeBtn.addEventListener('mouseleave', () => {
                closeBtn.style.background = 'rgba(201, 162, 75, 0.15)';
                closeBtn.style.transform = 'scale(1) rotate(0deg)';
            });
        }

        // Fechar ao clicar no overlay
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.closeLightboxAdvanced();
            }
        });

        // Suporte a teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.lightbox.classList.contains('active')) {
                this.closeLightboxAdvanced();
            }
            if (e.key === 'ArrowLeft') this.prevImage();
            if (e.key === 'ArrowRight') this.nextImage();
        });

        // Adicionar imagem anterior/próxima
        this.setupNavigation();
    }

    setupNavigation() {
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '❮';
        prevBtn.style.cssText = `
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(201, 162, 75, 0.2);
            border: 1.5px solid rgba(201, 162, 75, 0.3);
            color: var(--bone);
            font-size: 24px;
            cursor: pointer;
            z-index: 1002;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            display: none;
        `;

        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '❯';
        nextBtn.style.cssText = `
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(201, 162, 75, 0.2);
            border: 1.5px solid rgba(201, 162, 75, 0.3);
            color: var(--bone);
            font-size: 24px;
            cursor: pointer;
            z-index: 1002;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            display: none;
        `;

        [prevBtn, nextBtn].forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.background = 'rgba(201, 162, 75, 0.4)';
                btn.style.transform = 'translateY(-50%) scale(1.1)';
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.background = 'rgba(201, 162, 75, 0.2)';
                btn.style.transform = 'translateY(-50%) scale(1)';
            });

            this.lightbox.appendChild(btn);
        });

        this.prevBtn = prevBtn;
        this.nextBtn = nextBtn;
        this.currentImageIndex = -1;
        this.galleryImages = [];
    }

    openLightbox(src) {
        if (!this.lightbox || !this.lightboxImg) return;

        this.lightboxImg.src = src;
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Reset animation
        if (this.lightboxContent) {
            this.lightboxContent.style.animation = 'none';
            // Trigger reflow
            this.lightboxContent.offsetHeight;
            this.lightboxContent.style.animation = 'zoomInAdvanced 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        }

        // Animar imagem
        this.lightboxImg.style.animation = 'imageZoom 0.8s cubic-bezier(0.16, 1, 0.3, 1)';

        // Track índice de imagem para navegação
        this.updateCurrentImageIndex(src);

        console.log('✓ Lightbox opened:', src);
    }

    closeLightboxAdvanced() {
        if (!this.lightbox || !this.lightboxContent) return;

        this.lightboxContent.style.animation = 'zoomOutAdvanced 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        this.lightboxImg.style.animation = 'imageZoomOut 0.6s cubic-bezier(0.16, 1, 0.3, 1)';

        setTimeout(() => {
            this.lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }, 500);
    }

    updateCurrentImageIndex(src) {
        const images = document.querySelectorAll('.gallery-item img');
        this.galleryImages = Array.from(images).map(img => img.src);
        this.currentImageIndex = this.galleryImages.findIndex(
            imgSrc => imgSrc === src || imgSrc.endsWith(src.split('/').pop())
        );
    }

    prevImage() {
        if (this.currentImageIndex <= 0) return;
        this.currentImageIndex--;
        this.openLightbox(this.galleryImages[this.currentImageIndex]);
    }

    nextImage() {
        if (this.currentImageIndex >= this.galleryImages.length - 1) return;
        this.currentImageIndex++;
        this.openLightbox(this.galleryImages[this.currentImageIndex]);
    }

    overrideGalleryLightbox() {
        const originalFunction = window.openLightbox;

        window.openLightbox = (src) => {
            this.openLightbox(src);
        };

        window.closeLightbox = () => {
            this.closeLightboxAdvanced();
        };
    }
}

// =============================
// ANIMATION KEYFRAMES
// =============================

function createLightboxStyles() {
    if (document.getElementById('lightbox-styles')) return;

    const styleSheet = document.createElement('style');
    styleSheet.id = 'lightbox-styles';
    styleSheet.textContent = `
        @keyframes zoomInAdvanced {
            from {
                opacity: 0;
                transform: scale(0.8) translateY(30px);
                filter: blur(10px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
                filter: blur(0);
            }
        }

        @keyframes zoomOutAdvanced {
            from {
                opacity: 1;
                transform: scale(1) translateY(0);
                filter: blur(0);
            }
            to {
                opacity: 0;
                transform: scale(0.8) translateY(30px);
                filter: blur(10px);
            }
        }

        @keyframes imageZoom {
            from {
                transform: scale(0.95) rotate(-2deg);
                filter: blur(10px);
                opacity: 0;
            }
            to {
                transform: scale(1) rotate(0deg);
                filter: blur(0);
                opacity: 1;
            }
        }

        @keyframes imageZoomOut {
            from {
                transform: scale(1) rotate(0deg);
                filter: blur(0);
                opacity: 1;
            }
            to {
                transform: scale(0.95) rotate(2deg);
                filter: blur(10px);
                opacity: 0;
            }
        }

        /* Lightbox transitions */
        .lightbox {
            transition: all 0.3s ease !important;
        }

        .lightbox.active {
            display: flex !important;
        }

        .lightbox-content {
            position: relative;
        }

        .lightbox-content img {
            max-width: 100%;
            max-height: 90vh;
            object-fit: contain;
            border-radius: 12px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        /* Prevent layout shift */
        body.lightbox-open {
            overflow: hidden;
        }
    `;

    document.head.appendChild(styleSheet);
}

// =============================
// PRELOAD IMAGES
// =============================

class LightboxImagePreloader {
    constructor() {
        this.preloadGalleryImages();
    }

    preloadGalleryImages() {
        const images = document.querySelectorAll('.gallery-item img');

        images.forEach(img => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = img.src;
            document.head.appendChild(link);
        });
    }
}

// =============================
// INICIALIZAÇÃO
// =============================

document.addEventListener('DOMContentLoaded', () => {
    createLightboxStyles();
    window.advancedLightbox = new AdvancedLightbox();
    new LightboxImagePreloader();

    console.log('✓ Advanced lightbox initialized');
});
