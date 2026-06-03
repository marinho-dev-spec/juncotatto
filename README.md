# Junco Tattoo & Piercing — Landing Page

Site profissional de tatuagem e piercing para Gabriel Junco em Itapema/SC, Brasil.

## 📁 Estrutura do Projeto

```
juncotatto/
├── index.html          # Estrutura HTML completa (14 seções)
├── css/
│   └── styles.css      # Estilos com identidade visual "Galeria Sombria"
├── js/
│   └── script.js       # Interatividade (galeria, FAQ, WhatsApp, etc)
├── images/             # Pasta para imagens (vazia, adicionar aqui)
└── README.md           # Este arquivo
```

## 🎨 Identidade Visual

**Conceito**: Galeria Sombria — sofisticada, escura, elegante.

### Cores
- **Preto Ônix**: `#0B0B0D` (fundo)
- **Grafite**: `#161619` (cards/seções)
- **Osso**: `#EDE7DB` (texto principal)
- **Dourado Velho**: `#C9A24B` (acentos)
- **Fumaça**: `#8A8A90` (texto secundário)
- **Verde WhatsApp**: `#25D366` (apenas WhatsApp)

### Tipografia
- **Títulos**: Cormorant Garamond (serifa, peso 600)
- **Corpo**: Inter (sans-serif, peso 400/500)
- **Rótulos**: Inter maiúscula, letter-spacing 0.25em

## 📋 Seções do Site

1. **Barra de Aviso** — Urgência de verão
2. **Header Fixo** — Logo, menu, botão de orçamento
3. **Hero** — Foto P&B, headline, selo de avaliação
4. **Faixa de Prova** — 4 métricas de confiança
5. **Galeria** — Grid masonry com filtros e lightbox
6. **Avaliações do Google** — Widget Elfsight (ao vivo)
7. **Segurança & Higiene** — 4 diferenciais
8. **Catálogo de Piercing** — 6 categorias por local
9. **Sobre o Gabriel** — Foto + texto 1ª pessoa
10. **Antes & Depois** — Slider comparativo
11. **Como Funciona** — 3 passos
12. **FAQ** — Acordeão com 6 perguntas
13. **Contato** — Mapa + formulário
14. **Rodapé** — Links e informações

## 🚀 Como Usar

### Opção 1: Abrir Localmente (Sem Servidor)
```bash
# Abrir diretamente no navegador
open index.html
# Ou no navegador (copiar o caminho):
file:///Users/marinho/Downloads/juncotatto/index.html
```

### Opção 2: Com Servidor Local
```bash
# Na pasta do projeto:
cd /Users/marinho/Downloads/juncotatto

# Iniciar servidor (Python 3)
python3 -m http.server 8000

# Abrir no navegador:
# http://localhost:8000/
```

### Opção 3: Deploy na Web
1. Fazer upload para Vercel, Netlify ou similar
2. Ou hostar em servidor próprio (compartilhe os arquivos)

## 📸 Próximos Passos: Adicionar Imagens

### 1. Hero Image (Topo)
- Tamanho: 1920x1080 (16:9)
- Descrição: Fotografia P&B de tatuagem realista com overlay preto
- **Como adicionar**: Editar `index.html`, linha ~108, adicionar `background-image: url('path/to/hero.jpg')`

### 2. Galeria (9-12 imagens)
- Tamanho: Variado (1:1, 3:4, 4:5 para masonry)
- Descrição: Tatuagens P&B realistas em detalhe macro
- **Como adicionar**: 
  - Salvar imagens em `/images/`
  - Editar `js/script.js`, função `generateGalleryImages()` (~45)
  - Substituir placeholders por `<img src="images/tattoo-1.jpg">`

### 3. Foto do Gabriel (Sobre)
- Tamanho: 400x500 (3:4)
- Descrição: Retrato P&B do tatuador na sua obra
- **Como adicionar**: Editar `index.html`, linha ~385, adicionar `<img src="images/gabriel.jpg">`

### 4. Imagens Antes/Depois
- Tamanho: 400x400 (1:1)
- Descrição: Par de fotos (antes/depois) de cobertura
- **Como adicionar**: Editar `index.html`, linhas ~410-415

### 5. Material Lacrado (Higiene)
- Tamanho: 400x400 (1:1)
- Descrição: Foto do material estéril sendo aberto
- **Como adicionar**: Adicionar seção na linha ~360 com `<img>`

## 🎯 Gerar Imagens com IA (Nano Banana / Midjourney)

O PDF original tem prompts prontos. Use:

**HERO**:
```
Cinematic black and white photograph of a tattoo artist's hands 
working on a detailed black-and-grey realism portrait tattoo on a 
forearm, dramatic low-key lighting, deep shadows, fine ink detail, 
sterile professional studio. Heavily desaturated, moody, high contrast.
```

**GALERIA** (repetir com variações):
```
Close-up black and white photograph of a [realism portrait / fine line 
/ blackwork] tattoo on skin, sharp macro detail, professional studio 
lighting, desaturated, high contrast, pure black background.
```

## 📱 Responsivo

O site é **mobile-first**:
- Desktop (1200px+): 2 colunas em seções onde aplicável
- Tablet (768px–1199px): Adapta grid, menu hamburger aparece
- Mobile (< 768px): 
  - Menu hamburger
  - Barra fixa inferior com "Pedir orçamento"
  - Grid 1 coluna na galeria

## 🔗 Integrações Essenciais

### 1. WhatsApp
- **Número**: `5547996615555`
- **Funcionalidade**: Todos os botões abrem WhatsApp com mensagem pré-preenchida
- **Status**: ✅ Pronto (configurado em `js/script.js`)

### 2. Google Reviews (Elfsight)
- **Como adicionar**:
  1. Ir em [elfsight.com](https://elfsight.com)
  2. Criar conta → Google Reviews Widget
  3. Conectar perfil do Google
  4. Copiar código do widget
  5. Colar no `<div id="google-reviews">` (linha ~293)

### 3. Google Maps
- **Status**: ✅ Iframe já está configurado
- **Localização**: Av. Nereu Ramos, 4142, Itapema
- **Editar**: Alterar query do iframe se endereço mudar

### 4. Google Analytics
- **Como adicionar**:
  1. Criar projeto em [google.com/analytics](https://google.com/analytics)
  2. Copiar Measurement ID (formato: `G-XXXXX`)
  3. Editar `index.html`, linha ~575, substituir `GA_MEASUREMENT_ID`

### 5. SEO & Schema
- **Status**: ✅ Meta tags e JSON-LD já configurados
- **Title**: "Junco Tattoo & Piercing — Tatuador em Itapema/SC..."
- **Descrição**: Otimizada para buscas locais
- **Schema**: LocalBusiness + FAQPage (Google entende a estrutura)

## 🎬 Funcionalidades Implementadas

✅ **Galeria com Filtros**
- 6 categorias: Todos, Realismo, Fine Line, Blackwork, Cobertura, Lettering
- Animações ao filtrar
- Lightbox ao clicar

✅ **FAQ Acordeão**
- Clique para expandir/recolher
- Apenas 1 resposta aberta por vez
- Smooth animation

✅ **Before & After Slider**
- Arraste ou clique para comparar
- Padrão em 50%

✅ **Menu Mobile**
- Hamburger que abre/fecha
- Links navegam suavemente

✅ **WhatsApp Integration**
- Mensagens pré-preenchidas por contexto
- Evento de tracking disparado
- Número configurável

✅ **Formulário de Contato**
- Pré-preenchimento de mensagem WhatsApp com dados
- Validação básica
- Tracking de envio

✅ **Animações Sutis**
- Fade-in ao scroll
- Hover em cards
- Transições suaves

## 🔧 Customizações Rápidas

### Mudar número do WhatsApp
Arquivo: `js/script.js`, linha ~17
```javascript
const WHATSAPP_NUMBER = '5547996615555'; // ← Altere aqui
```

### Mudar cores
Arquivo: `css/styles.css`, linhas 6-12
```css
--gold: #C9A24B;        /* Altere aqui */
--bone: #EDE7DB;        /* Altere aqui */
```

### Mudar horário de funcionamento
Arquivo: `index.html`, linha ~493
```html
<p class="contact-hours">
    <strong>Horário</strong><br>
    Seg–Sex: 9h–18h<br>    <!-- Altere aqui -->
    Sáb: 9h–13h
</p>
```

## 📊 Performance

- Tamanho: ~27KB HTML + 12KB CSS + 3.7KB JS
- Imagens: Placeholder SVG (substitua por PNG/WebP otimizadas)
- Carregamento esperado: < 2s (com imagens otimizadas)

## 🐛 Debug & Troubleshooting

### Galeria não aparece
- Verificar se JavaScript está ativado
- Abrir console (F12) e procurar erros

### WhatsApp não abre
- Verificar número: `5547996615555`
- Testar URL manualmente: `https://wa.me/5547996615555`

### Imagens não carregam
- Verificar caminhos relativos (`images/foto.jpg`)
- Ou usar URLs absolutas (https://...)

### Menu mobile não funciona
- Inspecionar CSS em `styles.css` (`.mobile-nav`)
- Verificar JavaScript em `script.js` (`setupMobileMenu()`)

## 📧 Contato & Suporte

Para edições adicionais, screenshots de testes, ou customizações:
- Descrever a mudança desejada
- Indicar arquivo e linha (se conhecido)

---

**Versão**: 1.0 | **Data**: Junho 2026 | **Conceito**: Galeria Sombria
