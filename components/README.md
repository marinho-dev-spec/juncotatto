# React Components — ScrollReveal & ProgressiveBlur

Dois componentes React/TypeScript reutilizáveis para melhorar a experiência visual do site.

---

## 📦 Componentes

### 1. ScrollReveal.tsx

Componente client que anima elementos quando entram no viewport usando Intersection Observer API nativa.

#### Props

```typescript
interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'; // default: 'up'
  delay?: number; // ms, default: 0
  duration?: number; // ms, default: 700
  distance?: string; // default: '40px'
  className?: string; // Tailwind classes
  once?: boolean; // Animar apenas uma vez, default: true
  threshold?: number; // Intersection Observer threshold, default: 0.15
}
```

#### Características

- ✅ Zero dependências externas (usa Intersection Observer nativo)
- ✅ Usa `"use client"` (client component)
- ✅ Inline styles (evita conflitos com Tailwind)
- ✅ Timing suave: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- ✅ `willChange: "opacity, transform"` para GPU acceleration
- ✅ `rootMargin: "0px 0px -50px 0px"` dispara um pouco antes do elemento entrar
- ✅ Performance otimizada

#### Exemplo de Uso

```tsx
import ScrollReveal from '@/components/ScrollReveal';

export default function Hero() {
  return (
    <section className="hero">
      {/* Badge com delay 0ms, direção up */}
      <ScrollReveal delay={0} direction="up">
        <div className="badge">Especialista em Realismo</div>
      </ScrollReveal>

      {/* Título com delay 150ms */}
      <ScrollReveal delay={150} direction="up" duration={800}>
        <h1>A Tatuagem Que Você Não Vai Querer Esconder</h1>
      </ScrollReveal>

      {/* Texto com delay 300ms */}
      <ScrollReveal delay={300} direction="up">
        <p>Fine Line · Realismo · Cobertura · Lettering</p>
      </ScrollReveal>

      {/* Imagem do lado direito com delay 300ms, direção right */}
      <ScrollReveal delay={300} direction="right" duration={800}>
        <img src="mockup.png" alt="Portfolio" />
      </ScrollReveal>
    </section>
  );
}
```

#### Uso com Grid/Cards

Quando envolvendo cards com Tailwind grid classes, passe as classes via `className`:

```tsx
<div className="grid grid-cols-3 gap-4">
  {items.map((item, index) => (
    <ScrollReveal
      key={item.id}
      delay={index * 150}
      direction="up"
      className="h-full" // Importante para grid items
    >
      <div className="card bg-white p-4 rounded-lg h-full">
        {/* Conteúdo do card */}
      </div>
    </ScrollReveal>
  ))}
</div>
```

#### Stagger Pattern

Para criar um efeito de stagger (elementos animando em sequência):

```tsx
{[0, 1, 2, 3].map((index) => (
  <ScrollReveal
    key={index}
    delay={index * 150} // 0ms, 150ms, 300ms, 450ms
    direction="up"
  >
    <div className="item">Item {index + 1}</div>
  </ScrollReveal>
))}
```

---

### 2. ProgressiveBlur.tsx

Componente server que renderiza um efeito de blur gradual no bottom da viewport. 100% inline styles (sem CSS classes).

#### Props

```typescript
interface ProgressiveBlurProps {
  height?: number; // Altura em pixels, default: 200
  zIndex?: number; // Z-index, default: 999
}
```

#### Características

- ✅ Server Component puro (nenhuma interatividade)
- ✅ 8 camadas com blur progressivo (0.25px → 32px)
- ✅ Mask image gradual para transição suave
- ✅ 100% inline styles (sem CSS externo)
- ✅ Suporte completo a Safari (`-webkit-` prefixes via camelCase)
- ✅ `pointerEvents: none` (não bloqueia clicks)
- ✅ Performance otimizada

#### Como Funciona

- Container fixo no bottom da viewport: `position: fixed`, `bottom: 0`, `width: 100%`
- 8 camadas empilhadas com `position: absolute`, cada uma com:
  - Blur crescente via `backdropFilter`
  - `maskImage` que define a faixa visível (overlap progressive)
- Resultado: blur gradual suave de cima pra baixo

#### Exemplo de Uso

Renderizar no layout principal **após** o `<Footer />`, fora do `<main>`:

```tsx
// app/layout.tsx (ou seu layout principal)
import ProgressiveBlur from '@/components/ProgressiveBlur';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>{children}</main>
        <footer>Conteúdo do footer</footer>
        
        {/* Adicionar ProgressiveBlur aqui */}
        <ProgressiveBlur height={200} zIndex={999} />
      </body>
    </html>
  );
}
```

#### Customização

```tsx
// Altura maior (mais suave)
<ProgressiveBlur height={300} />

// Altura menor (mais abrupto)
<ProgressiveBlur height={120} />

// Z-index customizado (se houver overlays)
<ProgressiveBlur zIndex={100} />
```

---

## 🚀 Como Integrar ao Projeto

### Opção 1: Manter Site Estático (HTML/CSS/JS)

Se quiser manter o projeto estático, vou converter esses componentes para **JavaScript Vanilla + CSS puro** que funcionam no seu site HTML atual.

### Opção 2: Migrar para Next.js

Se quiser usar os componentes React, vou:

1. Converter o projeto para **Next.js 14+** (App Router)
2. Migrar HTML/CSS/JS para componentes React
3. Integrar ScrollReveal e ProgressiveBlur
4. Manter tudo no Vercel (deployment automático)

---

## 📋 Checklist de Implementação

### Se usar ScrollReveal:

- [ ] Importar em componentes que precisam de animação
- [ ] Encapsular elementos que devem ser animados
- [ ] Ajustar `delay`, `direction`, `duration` conforme design
- [ ] Usar stagger com `index * 150ms` para sequences
- [ ] Testar em mobile (threshold pode precisar ajuste)

### Se usar ProgressiveBlur:

- [ ] Adicionar ao layout principal (após footer)
- [ ] Ajustar `height` conforme design
- [ ] Testar em diferentes viewports
- [ ] Verificar z-index com outros overlays

---

## ⚡ Performance

- **ScrollReveal**: Usa Intersection Observer nativa (muito eficiente)
- **ProgressiveBlur**: Puro CSS/HTML renderizado no servidor (sem JS)
- Ambos usam `willChange` e `transform` para GPU acceleration

---

## 🌐 Compatibilidade

- **ScrollReveal**: Chrome 51+, Firefox 55+, Safari 12.1+, Edge 15+
- **ProgressiveBlur**: Todos os navegadores modernos (com `-webkit-` prefix para Safari)

---

## 📝 Próximos Passos

**Qual você prefere?**

1. **Converter para JavaScript Vanilla** (mantém site estático)
   - Criar `scroll-reveal.js` e `progressive-blur.js`
   - Adicionar ao projeto HTML/CSS/JS atual
   - Sem mudanças de estrutura

2. **Migrar para Next.js** (usar componentes React)
   - Converter para `app/` directory structure
   - Integrar componentes TypeScript
   - Melhor DX, mais flexível no futuro

Qual você quer fazer?

