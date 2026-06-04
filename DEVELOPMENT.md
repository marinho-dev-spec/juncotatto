# 🛠️ Guia de Desenvolvimento

## Setup Local

### Pré-requisitos
- Node.js 16+ (opcional, apenas para tooling)
- Git
- Navegador moderno (Chrome, Firefox, Safari, Edge)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/marinho-dev-spec/juncotatto.git
cd juncotatto

# 2. Abrir com live server (VS Code)
# - Instalar extensão "Live Server"
# - Right-click em index.html → "Open with Live Server"
# - Acessa http://localhost:5500

# OU usar Python (macOS/Linux)
python3 -m http.server 8000
# Acessa http://localhost:8000
```

---

## Estrutura de Código

### JavaScript Classes

| Classe | Arquivo | Responsabilidade |
|--------|---------|-----------------|
| `HeroCarousel` | script.js | Carrossel automático de fundo |
| `Gallery` | script.js | Galeria com filtros e lightbox |
| `FAQ` | script.js | Accordion de perguntas |
| `BeforeAfterSlider` | script.js | Slider antes/depois |
| `StickyHeader` | script.js | Header sticky com animations |
| `MobileMenu` | script.js | Menu mobile com hamburger |
| `ScrollReveal` | script.js | Scroll reveal animations |
| `FloatingCtaButton` | script.js | CTA flutuante com scroll detection |
| `PhoneInputMask` | script.js | Máscara de telefone |
| `ActiveSectionIndicator` | script.js | Menu ativo conforme scroll |
| `AdvancedScrollReveal` | scroll-animations.js | Scroll avançado |
| `InteractiveEffects` | interactions.js | Efeitos interativos |
| `AdvancedLightbox` | lightbox-advanced.js | Lightbox customizado |

### CSS Modular

| Arquivo | Tamanho | Propósito |
|---------|--------|----------|
| styles.css | 53KB | Estilos base + componentes |
| animations-advanced.css | 11KB | 35+ keyframes |
| mobile-optimization.css | 18KB | Responsivo + breakpoints |
| glassmorphism.css | 8KB | Efeitos blur/vidro |
| visual-enhancements-2026.css | 10KB | Efeitos modernos 2026 |

---

## Workflow de Desenvolvimento

### 1. Editar Código

```bash
# Escolher um arquivo para editar
# Exemplo: melhorar o hero headline
nano index.html
```

### 2. Testar Localmente

```bash
# Abrir live server e verificar mudanças em tempo real
# Testar em múltiplos breakpoints
```

### 3. Fazer Commit

```bash
# Staging das mudanças
git add .

# Commit com mensagem descritiva
git commit -m "feat: descricao da mudanca

Descrição mais detalhada aqui se necessário.

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"

# Push para deploy automático
git push origin main
```

---

## Padrões de Código

### JavaScript

```javascript
// ✅ Bom
class MeuComponente {
    constructor() {
        this.elemento = document.getElementById('meu-elemento');
    }

    init() {
        this.setupListeners();
    }

    setupListeners() {
        // ...
    }
}

// ❌ Ruim
function meuComponente() {
    // código sem estrutura
}
```

### CSS

```css
/* ✅ Bom */
.componente {
    padding: var(--spacing-base);
    transition: all var(--transition-normal);
}

.componente:hover {
    transform: scale(1.05);
}

/* ❌ Ruim */
.componente {
    padding: 16px;
    transition: all 0.6s ease;
    transform: scale(1.05); /* sempre */
}
```

### HTML

```html
<!-- ✅ Bom -->
<button 
    class="btn btn-primary" 
    onclick="scrollTo('contato')"
    aria-label="Agendar Consulta"
    title="Ir para formulário de contato"
>
    Agendar
</button>

<!-- ❌ Ruim -->
<button onclick="alert('clicou')">Click</button>
```

---

## Debugging

### Browser DevTools

```javascript
// Ver console para logs
console.log('🎨 Debug message');

// Verificar performance
performance.mark('inicio');
// ... código ...
performance.mark('fim');
performance.measure('tempo', 'inicio', 'fim');

// Ver em DevTools → Performance tab
```

### Lighthouse Audit

```
Chrome DevTools → Lighthouse → Analyze page load
```

Target:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

---

## Common Tasks

### Adicionar Nova Seção

```html
<!-- 1. Adicionar seção com ID único -->
<section class="nova-secao" id="nova-secao">
    <div class="container">
        <h2 class="section-title" data-bloom>Título</h2>
        <!-- conteúdo -->
    </div>
</section>

<!-- 2. Adicionar link no menu (index.html) -->
<a href="#nova-secao">Nova Seção</a>

<!-- 3. Adicionar estilos (css/styles.css) -->
.nova-secao {
    padding: 80px 0;
    background: var(--black);
}
```

### Alterar Cores

Editar variáveis no `css/styles.css`:
```css
:root {
    --black: #0A0A0A;      /* background */
    --gold: #C9A24B;       /* primary CTA */
    --bone: #F5F1EB;       /* text principal */
}
```

### Adicionar Animação

```css
@keyframes minha-animacao {
    from { opacity: 0; }
    to { opacity: 1; }
}

.elemento {
    animation: minha-animacao 0.6s var(--ease-smooth);
}
```

---

## Performance Checklist

- [ ] Imagens em WebP com fallback JPG
- [ ] CSS modular e importado corretamente
- [ ] JS usando classes reutilizáveis
- [ ] Lazy loading em imagens
- [ ] Sem console.log em produção
- [ ] Sem comentários desnecessários
- [ ] Cache headers configurados (Vercel)

---

## Troubleshooting

| Problema | Solução |
|----------|---------|
| CSS não aplica | Verificar float: left/right (remover) |
| JS não funciona | Verificar console para erros |
| Mobile quebrado | Testar no DevTools (375px) |
| Form não envia | Verificar EmailJS credentials |
| Imagens lentas | Converter para WebP, adicionar loading="lazy" |

---

## Resources

- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)
- [JavaScript.info](https://javascript.info)
- [WebAIM](https://webaim.org) — Acessibilidade
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

**Happy coding! 🚀**
