# 🎬 Guia de Componentes de Animação

Este guia mostra como integrar ScrollReveal e ProgressiveBlur ao seu site estático.

---

## 📦 Componentes Disponíveis

### ✅ Versão Vanilla JS (Recomendada para Site Estático)

- `js/scroll-reveal-vanilla.js` — Anima elementos por scroll
- `js/progressive-blur-vanilla.js` — Blur gradual no bottom

### 📱 Versão React (Para Migração Futura)

- `components/ScrollReveal.tsx` — Cliente React
- `components/ProgressiveBlur.tsx` — Servidor React

---

## 🚀 Como Usar (Vanilla JS)

### 1. ScrollReveal

Adiciona um efeito de fade + slide quando elementos entram no viewport.

#### Importar no HTML

```html
<!-- Adicionar antes do </body> -->
<script defer src="js/scroll-reveal-vanilla.js"></script>
```

#### Opção A: Usando data-attributes (Auto-detecta)

```html
<!-- Direção: up, down, left, right, none -->
<div data-scroll-reveal="true" data-scroll-reveal-direction="up">
  Animado para cima
</div>

<!-- Com customização -->
<div 
  data-scroll-reveal="true"
  data-scroll-reveal-direction="left"
  data-scroll-reveal-delay="100"
  data-scroll-reveal-duration="800"
  data-scroll-reveal-distance="50px"
>
  Animado para esquerda com delay
</div>
```

#### Opção B: Usando JavaScript Manual

```javascript
// Animar todos os elementos com classe 'card'
new ScrollRevealVanilla('.card', {
  direction: 'up',
  delay: 0,
  duration: 700,
  distance: '40px',
  stagger: 150, // 150ms entre cada elemento
  once: true,
  threshold: 0.15,
});
```

#### Exemplo Prático — Hero Section

```html
<section class="hero">
  <!-- Badge com delay 0 -->
  <div data-scroll-reveal="true" data-scroll-reveal-direction="up" data-scroll-reveal-delay="0">
    <span class="eyebrow">★ ESPECIALISTA REALISMO PRETO E CINZA</span>
  </div>

  <!-- Título com delay 150ms -->
  <div data-scroll-reveal="true" data-scroll-reveal-direction="up" data-scroll-reveal-delay="150" data-scroll-reveal-duration="800">
    <h1>A Tatuagem Que Você Não Vai Querer Esconder</h1>
  </div>

  <!-- Subtítulo com delay 300ms -->
  <div data-scroll-reveal="true" data-scroll-reveal-direction="up" data-scroll-reveal-delay="300">
    <p>Fine Line · Realismo · Cobertura · Lettering</p>
  </div>

  <!-- Botões com delay 450ms -->
  <div data-scroll-reveal="true" data-scroll-reveal-direction="up" data-scroll-reveal-delay="450">
    <button class="btn btn-primary">Chamar o Gabriel</button>
    <button class="btn btn-secondary">Ver Portfólio</button>
  </div>
</section>
```

#### Exemplo Prático — Card Grid com Stagger

```html
<section class="galeria">
  <h2 data-scroll-reveal="true" data-scroll-reveal-direction="up">Meus Trabalhos</h2>

  <div class="gallery-grid">
    <!-- JavaScript auto-detecta index e aplica stagger -->
    <div class="gallery-item" data-scroll-reveal="true" data-scroll-reveal-direction="up">
      <img src="work-1.jpg" alt="">
    </div>
    <div class="gallery-item" data-scroll-reveal="true" data-scroll-reveal-direction="up">
      <img src="work-2.jpg" alt="">
    </div>
    <div class="gallery-item" data-scroll-reveal="true" data-scroll-reveal-direction="up">
      <img src="work-3.jpg" alt="">
    </div>
    <!-- ... mais items ... -->
  </div>
</section>

<script>
  // Auto-aplica stagger com 150ms entre cada item
  new ScrollRevealVanilla('[data-scroll-reveal="true"]', {
    direction: 'up',
    stagger: 150,
    duration: 700,
  });
</script>
```

#### Exemplo Prático — Sobre Section

```html
<section class="about">
  <h2 data-scroll-reveal="true" data-scroll-reveal-direction="up">Sobre Mim</h2>

  <div class="about-content">
    <!-- Texto à esquerda, fade in left -->
    <div data-scroll-reveal="true" data-scroll-reveal-direction="left" data-scroll-reveal-delay="100">
      <p>Sou Gabriel Junco, tatuador especializado em realismo...</p>
    </div>

    <!-- Imagem à direita, fade in right com delay maior -->
    <div data-scroll-reveal="true" data-scroll-reveal-direction="right" data-scroll-reveal-delay="300" data-scroll-reveal-duration="800">
      <img src="gabriel.jpg" alt="Gabriel Junco">
    </div>
  </div>
</section>
```

---

### 2. ProgressiveBlur

Efeito de blur gradual no bottom da página. Útil para destacar conteúdo footer.

#### Importar no HTML

```html
<!-- Adicionar antes do </body>, APÓS o footer -->
<script defer src="js/progressive-blur-vanilla.js"></script>

<!-- Elemento placeholder (será removido e substituído pelo blur) -->
<div data-progressive-blur="true" data-progressive-blur-height="200" data-progressive-blur-zindex="999"></div>
```

#### Opção A: Usando data-attribute

```html
<!-- Altura padrão 200px, z-index padrão 999 -->
<div data-progressive-blur="true"></div>

<!-- Customizado -->
<div 
  data-progressive-blur="true" 
  data-progressive-blur-height="300"
  data-progressive-blur-zindex="1000"
></div>
```

#### Opção B: Usando JavaScript Manual

```javascript
// Criar blur com altura 200px
const blur = new ProgressiveBlurVanilla({ height: 200, zIndex: 999 });

// Mudar altura dinamicamente
blur.setHeight(300);

// Remover blur
blur.remove();
```

#### Exemplo Completo

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- ... meta tags, css ... -->
  </head>
  <body>
    <main>
      <!-- Conteúdo principal -->
    </main>

    <footer>
      <!-- Conteúdo do footer -->
    </footer>

    <!-- Scripts de animação -->
    <script defer src="js/scroll-reveal-vanilla.js"></script>
    <script defer src="js/progressive-blur-vanilla.js"></script>

    <!-- Placeholder do blur (será removido) -->
    <div data-progressive-blur="true" data-progressive-blur-height="250"></div>
  </body>
</html>
```

---

## 📋 Padrões de Uso Recomendados

### Pattern 1: Hero com Stagger

```html
<section class="hero">
  <div data-scroll-reveal="true" data-scroll-reveal-direction="up" data-scroll-reveal-delay="0">
    <!-- Badge -->
  </div>
  <div data-scroll-reveal="true" data-scroll-reveal-direction="up" data-scroll-reveal-delay="150">
    <!-- Título -->
  </div>
  <div data-scroll-reveal="true" data-scroll-reveal-direction="up" data-scroll-reveal-delay="300">
    <!-- Subtitle -->
  </div>
  <div data-scroll-reveal="true" data-scroll-reveal-direction="up" data-scroll-reveal-delay="450">
    <!-- Botões -->
  </div>
</section>
```

### Pattern 2: Imagem + Texto

```html
<section>
  <div data-scroll-reveal="true" data-scroll-reveal-direction="left">
    <!-- Texto: entra pela esquerda -->
  </div>
  <div data-scroll-reveal="true" data-scroll-reveal-direction="right" data-scroll-reveal-delay="200">
    <!-- Imagem: entra pela direita, delay para sequência -->
  </div>
</section>
```

### Pattern 3: Card Grid

```html
<div class="grid">
  <div class="card" data-scroll-reveal="true" data-scroll-reveal-direction="up"><!-- Card 1: 0ms --></div>
  <div class="card" data-scroll-reveal="true" data-scroll-reveal-direction="up"><!-- Card 2: 150ms (auto) --></div>
  <div class="card" data-scroll-reveal="true" data-scroll-reveal-direction="up"><!-- Card 3: 300ms (auto) --></div>
</div>

<script>
  new ScrollRevealVanilla('.card', { stagger: 150 });
</script>
```

---

## ⚙️ Configuração Padrão

### ScrollReveal

```javascript
{
  direction: 'up',        // 'up' | 'down' | 'left' | 'right' | 'none'
  delay: 0,              // ms (pode ser overridden por data-attribute)
  duration: 700,         // ms (pode ser overridden por data-attribute)
  distance: '40px',      // (pode ser overridden por data-attribute)
  once: true,            // Animar apenas uma vez
  threshold: 0.15,       // Elemento precisa estar 15% visível
  stagger: 0,            // ms entre elementos (auto-applica a index)
}
```

### ProgressiveBlur

```javascript
{
  height: 200,           // pixels (altura do blur)
  zIndex: 999,          // z-index do container
}
```

---

## 🎯 Checklist de Integração

### Para ScrollReveal

- [ ] Adicionar `<script defer src="js/scroll-reveal-vanilla.js"></script>` no HTML
- [ ] Adicionar `data-scroll-reveal="true"` aos elementos que devem ser animados
- [ ] Escolher `direction` apropriada (up/down/left/right)
- [ ] Ajustar `delay` para criar stagger effect
- [ ] Testar em mobile (threshold pode precisar ajuste)
- [ ] Verificar performance em navegadores antigos

### Para ProgressiveBlur

- [ ] Adicionar `<script defer src="js/progressive-blur-vanilla.js"></script>` no HTML
- [ ] Adicionar `<div data-progressive-blur="true"></div>` após `<footer>`
- [ ] Ajustar `height` conforme design
- [ ] Testar em diferentes viewport sizes
- [ ] Verificar com outros overlays/modals

---

## 🚀 Performance

- **ScrollReveal**: Usa Intersection Observer nativa (muito eficiente, sem libraries)
- **ProgressiveBlur**: Puro CSS (backdrop-filter), renderizado uma vez
- Ambos usam `willChange` e `transform` para GPU acceleration
- Sem re-layouts ou re-paints desnecessários

---

## 📱 Responsividade

Para ajustar animações em mobile:

```javascript
if (window.innerWidth < 768) {
  // Mobile: distância menor, delays mais rápidos
  new ScrollRevealVanilla('.element', {
    distance: '20px',
    duration: 500,
    stagger: 100,
  });
} else {
  // Desktop: valores padrão
  new ScrollRevealVanilla('.element', {
    distance: '40px',
    duration: 700,
    stagger: 150,
  });
}
```

---

## 🔧 Troubleshooting

### Elementos não animam

1. Verificar se script está carregado: `window.ScrollRevealVanilla` deve existir
2. Verificar se elemento tem `data-scroll-reveal="true"` ou está no seletor JS
3. Verificar console para erros
4. Testar com `threshold: 0.5` (elemento precisa estar 50% visível)

### Animações começam antes/depois do esperado

1. Aumentar `rootMargin: '0px 0px -100px 0px'` para disparar mais cedo
2. Ajustar `delay` nos data-attributes
3. Verificar `threshold` (0.15 = 15% do elemento visível)

### Blur não aparece

1. Verificar se `<div data-progressive-blur="true"></div>` está após footer
2. Verificar z-index de outros elementos
3. Testar com `height="300"` (maior) para ver se funciona
4. Abrir DevTools e procurar por `position: fixed` no DOM

---

## 🌐 Compatibilidade

- **ScrollReveal**: Chrome 51+, Firefox 55+, Safari 12.1+, Edge 15+, Opera 38+
- **ProgressiveBlur**: Chrome 76+, Firefox 103+, Safari 9+, Edge 79+

Para navegadores antigos, elementos simplesmente não animam (graceful degradation).

---

## 📚 Referências

- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [backdrop-filter CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
- [mask-image CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image)

---

## ❓ Dúvidas Frequentes

**P: Posso usar ambos (ScrollReveal + ProgressiveBlur) juntos?**
R: Sim! Eles não conflitam. ScrollReveal anima elementos, ProgressiveBlur cria overlay fixo.

**P: Qual é o impacto de performance?**
R: Mínimo. Intersection Observer é nativa e otimizada. ProgressiveBlur usa uma única renderização.

**P: Posso customizar as curvas de animação?**
R: Sim, mude `cubic-bezier(0.25, 0.46, 0.45, 0.94)` em `scroll-reveal-vanilla.js` linha ~50.

**P: E se quiser migrar para React?**
R: Use os componentes `components/ScrollReveal.tsx` e `components/ProgressiveBlur.tsx` com Next.js.

---

**Status:** Componentes prontos para uso  
**Última atualização:** 04 de Junho de 2026

