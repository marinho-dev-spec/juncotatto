# 📸 Guia Completo: Adicionar Imagens ao Site

## Opção 1: Usar Imagens Reais (Recomendado)

### Passo 1: Preparar Imagens
1. Coloque suas fotos P&B em `/images/`
2. Nomes sugeridos:
   - `hero.jpg` (1920x1080)
   - `tattoo-realismo-1.jpg`, `tattoo-realismo-2.jpg`
   - `tattoo-fineline-1.jpg`
   - `tattoo-blackwork-1.jpg`
   - `gabrielportrait.jpg` (3:4)
   - `before-after-1-before.jpg`, `before-after-1-after.jpg`

### Passo 2: Otimizar Imagens
```bash
# Converter para WebP (mais rápido)
# Usar ImageMagick ou online tools
convert original.jpg -quality 85 -resize 1920x1080 image.webp
```

### Passo 3: Editar HTML para usar suas imagens

**Hero (linha ~108 no index.html)**:
```css
.hero {
    background: linear-gradient(...),
                url('images/hero.jpg') center/cover;
}
```

**Galeria (editar js/script.js, função generateGalleryImages)**:
Trocar o SVG placeholder por imagens reais:

```javascript
item.innerHTML = `<img src='images/tattoo-${style}-${Math.floor(Math.random()*3)}.jpg' alt='${style}'>`;
```

**Foto Gabriel (linha ~385)**:
```html
<img src="images/gabriel-portrait.jpg" alt="Gabriel Junco">
```

---

## Opção 2: Gerar Imagens com IA (Rápido)

### Via Midjourney
1. Usar prompts do arquivo original (PDF, página 7)
2. Exemplos para galeria:

```
/imagine Close-up black and white photograph of a realism portrait tattoo 
on skin, sharp macro detail, professional studio lighting, desaturated, 
high contrast, pure black background --ar 1:1 --niji 5
```

### Via Runway.AI / Leonardo.AI
- Mesmos prompts funcionam
- Formato: square (1:1), portrait (3:4), landscape (16:9)

### Via Stable Diffusion (Local)
```bash
# Com WebUI
# Model: Realistic Vision, DPM++ Solver
# Prompt: black and white tattoo, high contrast, macro, no text
# Negative: color, bright, text, watermark
```

---

## Opção 3: Stock Photos P&B (Se não tiver tatuagens reais)

### Sites (filtrar P&B):
- [Unsplash](https://unsplash.com) — Tattoo, Portrait, Black and White
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)

**Buscar**: "black and white tattoo", "portrait photography", "body art"

---

## 🖼️ Estrutura de Pastas para Imagens

```
images/
├── hero.jpg              (1920x1080, 16:9)
├── gabriel-portrait.jpg  (400x500, 3:4)
├── before-after-1-before.jpg  (400x400, 1:1)
├── before-after-1-after.jpg   (400x400, 1:1)
├── gallery/
│   ├── realismo-1.jpg    (400x400, 1:1)
│   ├── realismo-2.jpg
│   ├── fineline-1.jpg
│   └── ...
└── thumbnails/          (opcional, para mobile)
    └── ...
```

---

## 📐 Tamanhos Recomendados

| Seção | Tamanho | Proporção | Formato |
|-------|---------|-----------|---------|
| Hero | 1920x1080 | 16:9 | JPG |
| Galeria | 400x400 | 1:1 | JPG/WebP |
| Galeria (alt) | 600x800 | 3:4 | JPG/WebP |
| Gabriel | 400x500 | 3:4 | JPG |
| Antes/Depois | 400x400 | 1:1 | JPG |
| Higiene | 400x400 | 1:1 | JPG |

---

## ⚡ Otimização de Imagens

### Compressão (manter qualidade)
```bash
# JPG → 85% qualidade
convert input.jpg -quality 85 -strip output.jpg

# Para WebP (mais leve, ~30% menor)
cwebp -q 85 input.jpg -o output.webp
```

### Redimensionar (manter proporção)
```bash
# Galeria (1:1 a 500px)
convert input.jpg -resize 500x500 -gravity center -extent 500x500 output.jpg
```

### Batch processing (múltiplas imagens)
```bash
# Converter todas em um diretório
for file in *.jpg; do
  convert "$file" -quality 85 "optimized/${file%.*}.jpg"
done
```

---

## 🔧 Editar JavaScript para Galeria Automática

**Arquivo**: `js/script.js`, linha ~45

### Versão atual (com placeholders SVG):
```javascript
item.innerHTML = `<img src='data:image/svg+xml;...' alt='${style}'>`;
```

### Trocar por imagens reais:
```javascript
const imageMap = {
    'realismo': ['realismo-1.jpg', 'realismo-2.jpg', 'realismo-3.jpg'],
    'fineline': ['fineline-1.jpg', 'fineline-2.jpg'],
    'blackwork': ['blackwork-1.jpg', 'blackwork-2.jpg'],
    'cobertura': ['cobertura-1.jpg'],
    'lettering': ['lettering-1.jpg', 'lettering-2.jpg']
};

const images = imageMap[style] || imageMap['realismo'];
const randomImage = images[Math.floor(Math.random() * images.length)];

item.innerHTML = `
    <img src='images/gallery/${randomImage}' 
         alt='${style}' 
         onclick='openLightbox(this.src)'>
`;
```

---

## ✅ Checklist Final

- [ ] Imagens em `/images/`
- [ ] Hero background configurado
- [ ] Galeria com 9-12 imagens
- [ ] Foto Gabriel adicionada
- [ ] Antes/Depois carregando
- [ ] Todas imagens otimizadas (< 200KB cada)
- [ ] Site testado em mobile
- [ ] Performance OK (< 3s carregamento)

---

**Dica**: Comece com 6 imagens. Depois adicione mais!
