# 🎬 Visual Tour — Experiência do Usuário Moderna

## Como o Site Funciona (Fluxo Completo)

### 1️⃣ PÁGINA CARREGA

```
┌─────────────────────────────┐
│  ▶ Header desliza de cima   │  Animação: slideDown 0.8s
│  ▶ Hero title aparece lento │  Animação: fadeInUp com stagger
│  ▶ Botões surgem em ordem   │  Cada elemento: +0.2s delay
└─────────────────────────────┘

RESULTADO: Entrada elegante, não abrupta
```

### 2️⃣ SCROLL DOWN LENTAMENTE

```
┌─────────────────────────────┐
│  ▶ Header blur aumenta      │  Backdrop filter progressivo
│  ▶ Sombra header cresce     │  Box-shadow suave
│  ▶ Seções fade in na order  │  Intersection Observer
│  ▶ Proof numbers contam     │  Animação de contador
└─────────────────────────────┘

RESULTADO: Fluidez constante, tudo coordenado
```

### 3️⃣ MOUSE MOVE (Desktop)

```
┌─────────────────────────────┐
│  ▶ Hero background se move  │  Parallax effect
│  ▶ Acompanha suavemente     │  Mouse coordinates
│  ▶ Cria profundidade        │  Subtle, não óbvio
└─────────────────────────────┘

RESULTADO: Sensação de imersão sem ser invasivo
```

### 4️⃣ HOVER NOS ELEMENTOS

**Botões:**
```
  Não hovering:         Hovering:
  ┌──────────┐         ┌──────────┐
  │ Pedir    │   →    │ Pedir    │  ↑ -3px
  │ Orçamento│         │ Orçamento│  🌟 Brilho aumenta
  └──────────┘         └──────────┘  
```

**Gallery Items:**
```
  Normal:                    Hover:
  ┌──────────┐              ┌──────────┐
  │ Tatuagem │     →        │ Tatuagem │  Scale 1.08
  │    P&B   │              │    P&B   │  +Overlay gold
  └──────────┘              └──────────┘
```

**Cards:**
```
  Normal:                    Hover:
  ┌────────────┐            ┌────────────┐
  │  Safety    │   →        │  Safety    │  ↑ -8px
  │   Item     │            │   Item     │  Top border animates
  └────────────┘            └────────────┘
```

### 5️⃣ CLICAR EM FILTRO DA GALERIA

```
  ANTES:                      DEPOIS:
  [Todos] [Realismo]         [Todos] [Realismo]  ← ativo (gold)
  [Fine Line] [Blackwork]    [Fine Line] [Blackwork]

  Items desaparecem com fade
  Novos items aparecem com fade + stagger (30ms cada)
  
  DURAÇÃO: ~600ms, não brusco
```

### 6️⃣ CLICAR EM IMAGEM DA GALERIA

```
  Lightbox abre:
  ┌─────────────────────────┐
  │  [X] Fechar             │  ← Hover: background expand
  │  ┌─────────────────────┐│
  │  │   IMAGEM ZOOM IN    ││  Animação: zoomIn 0.4s
  │  │   (com border-rad)  ││
  │  └─────────────────────┘│
  └─────────────────────────┘
  
  Fundo: blur 10px, fade in
  Imagem: scale 0.95 → 1.0
```

### 7️⃣ FAQ - CLICAR PARA ABRIR

```
  ▶ Pergunta 1 (normal)
    └─ Icon rotaciona 45°
    └─ Resposta desliza pra baixo
    └─ Max-height: 0 → 400px
    └─ Padding bottom: 0 → 28px
    
  ▶ Pergunta 2 (antes aberta, agora fecha)
    └─ Mesmo efeito reverso
    
  DURAÇÃO: 0.6s, smooth cubic-bezier
  SENSAÇÃO: Fluido, não mecânico
```

### 8️⃣ BEFORE & AFTER SLIDER

```
  Normal:                  Hover:
  ┌──────────┐            ┌──────────┐
  │ ANTES │ DEPOIS        │ ANTES │ DEPOIS
  │       │       │   →   │       │       │  Handle com shadow
  │       │ ← 50%         │       │ ← mouse  
  │       │       │        │       │       │
  └──────────┘            └──────────┘
  
  Arrasto: smooth update
  Handle: gradient gold, sombra dinâmica
```

### 9️⃣ HEADER - SCROLL BEHAVIOR

```
  Top:                    Scroll Down:              Scroll Up:
  ┌──────────────┐       ┌──────────────┐         ┌──────────────┐
  │ JUNCO • Menu │       │ JUNCO • Menu │         │ JUNCO • Menu │
  │ Botão CTA    │  ✓    │ Botão CTA    │ ✓       │ Botão CTA    │
  └──────────────┘   (se >300px)      (reappear) └──────────────┘
                         Transform Y: -100%         Transform Y: 0
                         Blur: 20px (max)           Blur: 20px → 10px
```

### 🔟 MENU MOBILE

```
  Desktop:                Mobile:
  JUNCO • Nav Links      ☰  JUNCO
  
  Click ☰:
  ┌────────────────────┐
  │ ✕                  │  ← Hamburger becomes X
  │ • Trabalhos        │  Slide down animation
  │ • Avaliações       │  Stagger: cada item +50ms
  │ • Piercing         │  Click item: close + smooth scroll
  │ • Sobre            │
  │ • Dúvidas          │
  │ • Contato          │
  └────────────────────┘
```

### 1️⃣1️⃣ CONTATO - FORM + MAPS

```
  Normal:                    Focus:
  ┌──────────────────┐      ┌──────────────────┐
  │ Nome             │  →   │ Nome             │  Border: gold
  └──────────────────┘      └──────────────────┘  Background: lighter
                                                  Glow: gold shadow
  
  Submit:
  └─→ Abre WhatsApp com dados do form pré-preenchido
  └─→ Evento tracker disparado
  └─→ Form reseta com fade
```

---

## 🎨 Efeitos Detalhados

### Gradients (Organic Look)
```css
/* Não é flat, é vivo */
background: linear-gradient(135deg, 
  rgba(26, 26, 26, 0.8) 0%,
  rgba(15, 15, 15, 0.8) 100%);
```
✅ Angle 135° = natural
✅ Múltiplas opacidades = depth
✅ Warm tones = confiável

### Backdrop Filters (Glassmorphism)
```css
/* Moderno, premium */
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
```
✅ Funciona em navegadores modernos
✅ Não é gimmick, é funcional
✅ Torna elementos legíveis mas elegantes

### Box Shadows (Subtle Depth)
```css
/* Não é grosseiro */
box-shadow: 0 20px 60px rgba(201, 162, 75, 0.1);
```
✅ Soft, not harsh
✅ Múltiplas camadas = realistic
✅ Cor do shadow = tema (dourado)

### Transições Customizadas
```css
/* Cubic-bezier = natural motion */
cubic-bezier(0.25, 0.46, 0.45, 0.94)
/* Não é linear, é easing */
```

---

## 📊 Performance & Smoothness

```
Frame Rate:     60 FPS
Animations:     GPU-accelerated (transform, opacity)
Lazy Loading:   Intersection Observer
Heavy: CSS -> transform, opacity
Light: JavaScript -> calculations only
```

---

## 🎯 Sensação Final

Quando você usa o site, você sente:

✅ **Elegância**
- Tudo se move com graça
- Nada é abrupt ou jarring

✅ **Profissionalismo**
- Design refinado
- Interações intentadas
- Não genérico/AI-looking

✅ **Modernidade**
- Tendências 2026
- Uso de animações smart
- Tipografia editorial

✅ **Fluidez**
- Scroll é suave
- Transições are coordinated
- Timing é perfeito

---

## 🚀 Resultado

O site não parece "feito com IA". Parece:
- ✅ Handcrafted
- ✅ Professional
- ✅ Modern
- ✅ Luxury brand (tattoo studio)
- ✅ Attention to detail

---

**Este é um site que Gabriel Junco pode estar orgulhoso de mostrar.**

Criado seguindo as melhores práticas de web design 2026.
