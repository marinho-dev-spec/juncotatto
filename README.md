# 🎨 Junco Tattoo & Piercing — Landing Page Moderno 2026

**Site profissional para estúdio de tatuagem especializado em realismo preto e cinza.**

> Desenvolvido com tecnologias modernas (HTML5, CSS3, JavaScript Vanilla)

---

## 📋 Informações do Projeto

| Campo | Valor |
|-------|-------|
| **Nome** | Junco Tattoo & Piercing |
| **Localização** | Itapema, SC - Brasil |
| **Telefone** | +55 (47) 99661-5555 |
| **Especialidade** | Realismo Preto e Cinza • Fine Line • Cobertura |
| **Design** | Cinematic Noir (Dark Theme com Ouro) |
| **Deployment** | Vercel (https://juncotatto.vercel.app) |

---

## 🏗️ Estrutura do Projeto

```
juncotatto/
├── index.html                 # Landing page principal
├── piercing.html              # Página de piercing
├── vercel.json                # Configuração de deployment
├── README.md                  # Documentação do projeto
│
├── css/                       # Estilos CSS modularizados
│   ├── styles.css            # Estilos principais (53KB)
│   ├── animations-advanced.css # Keyframes avançadas (11KB)
│   ├── mobile-optimization.css # Responsivo mobile (18KB)
│   ├── glassmorphism.css      # Efeitos glassmorphism (8KB)
│   └── visual-enhancements-2026.css # Efeitos visuais 2026 (10KB)
│
├── js/                        # JavaScript modularizado
│   ├── script.js             # Lógica principal (1034 linhas)
│   ├── scroll-animations.js   # Scroll reveal avançado (298 linhas)
│   ├── interactions.js        # Efeitos interativos (428 linhas)
│   └── lightbox-advanced.js   # Lightbox customizado (347 linhas)
│
├── imagens-junco/            # Imagens do estúdio e tatuagens
│   └── *.webp, *.jpg        # Otimizadas em WebP
│
└── imagens-piercing/         # Imagens de piercing
    └── *.webp, *.jpg        # Otimizadas em WebP
```

---

## ✨ Recursos Implementados

### 🎯 P1 - Crítico (100%)
- ✅ **Floating CTA Button** — Aparece após 50% de scroll
- ✅ **Before/After Slider** — Navegação por toque e mouse
- ✅ **Form Validation** — Máscara de telefone (XX) XXXXX-XXXX
- ✅ **Piercing Page** — Rota `/piercing` integrada

### 🎨 P2 - Importante (100%)
- ✅ **Grid Responsivo** — 3 colunas (desktop) → 2 (tablet) → 1 (mobile)
- ✅ **Active Section Indicator** — Menu marca seção ativa
- ✅ **Contraste WCAG AA+** — #CCCCCC para textos secundários
- ✅ **Logo Clickable** — Volta ao topo com scroll suave

### 🚀 P3 - Melhorias (100%)
- ✅ **Animações Suaves** — Fade-in + slide com stagger
- ✅ **Schema.org JSON-LD** — LocalBusiness structured data
- ✅ **Lazy Loading** — Imagens carregam sob demanda
- ✅ **Mobile Menu** — Hamburger com close automático

---

## 🎨 Design System

### Cores (Cinematic Noir)
```css
--black: #0A0A0A          /* Background principal */
--gold: #C9A24B           /* CTA primária */
--gold-light: #D4B76A     /* Accent secundário */
--bone: #F5F1EB           /* Texto principal */
--text-secondary: #CCCCCC /* Texto secundário */
```

### Tipografia
```css
--font-display: 'Playfair Display' (Headlines)
--font-sans: 'Space Grotesk' (Corpo)
--font-body: 'Inter' (Suporte)
```

### Animações
```css
--speed-fast: 0.3s    /* UI feedback rápido */
--speed-normal: 0.6s  /* Transições padrão */
--speed-slow: 1s      /* Entrada de seções */
```

---

## 🚀 Deployment na Vercel

Site publicado automaticamente via GitHub:
```
https://juncotatto.vercel.app
```

Deploy automático ao fazer push para `main`:
```bash
git push origin main
```

---

## 🧪 Checklist de QA

- [ ] Testar desktop (1920px, 1440px)
- [ ] Testar tablet (768px, 1024px)
- [ ] Testar mobile (375px, 425px)
- [ ] Validar form com todos os casos
- [ ] Verificar scroll suave
- [ ] Testar links internos (#trabalhos, #contato)
- [ ] Verificar Lighthouse score (90+)
- [ ] Validar WCAG AA+ compliance

---

## 📱 Responsividade

### Breakpoints
```css
Desktop:  1024px+      (3 colunas gallery)
Tablet:   768-1023px   (2 colunas gallery)
Mobile:   < 768px      (1 coluna gallery)
```

---

## 📝 Último Commit

Todas as melhorias P1, P2 e P3 implementadas e testadas.
Status: ✅ LIVE on Vercel

---

**Mantido com ❤️ em Itapema, SC**
