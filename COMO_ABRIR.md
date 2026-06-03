# 🚀 Como Abrir o Site

## Opção 1: Abrir Diretamente (Mais Rápido)

### Mac
```bash
# Abrir a pasta
open /Users/marinho/Downloads/juncotatto/

# Ou abrir direto no navegador
open /Users/marinho/Downloads/juncotatto/index.html
```

### Linux/Windows
```bash
# Navegar até a pasta e abrir index.html no seu navegador
```

---

## Opção 2: Com Servidor Local (Recomendado para testes)

### Python 3 (qualquer sistema)
```bash
# Entrar na pasta
cd /Users/marinho/Downloads/juncotatto/

# Iniciar servidor na porta 8000
python3 -m http.server 8000

# Abrir no navegador:
# http://localhost:8000
```

### Node.js (se tiver instalado)
```bash
# Instalar http-server globalmente
npm install -g http-server

# Entrar na pasta e rodar
cd /Users/marinho/Downloads/juncotatto/
http-server

# Vai aparecer um link tipo http://127.0.0.1:8080
```

### PHP (se tiver instalado)
```bash
cd /Users/marinho/Downloads/juncotatto/
php -S localhost:8000
```

---

## ✅ Checklist de Teste

Após abrir o site, verificar:

### Header & Navegação
- [ ] Logo "JUNCO" aparece no topo
- [ ] Menu horizontal em desktop (Trabalhos, Avaliações, Piercing, etc)
- [ ] Menu hamburger em mobile
- [ ] Botão "Pedir orçamento" funciona
- [ ] Barra de aviso "No verão a agenda enche..." no topo

### Hero
- [ ] Headline bem grande e legível
- [ ] Selo "★ 4,9 · +600 avaliações" aparece
- [ ] Dois botões funcionam (abrem WhatsApp)

### Seções
- [ ] Faixa de Prova com 4 números
- [ ] Galeria com grid e filtros
- [ ] Botões de filtro funcionam
- [ ] Lightbox abre ao clicar imagem
- [ ] FAQ abre/fecha ao clicar
- [ ] Before/After slider funciona
- [ ] Mapa do Google carrega

### Mobile
- [ ] Em celular, menu hamburger aparece
- [ ] Barra fixa inferior com "Pedir orçamento"
- [ ] Elementos redimensionam corretamente
- [ ] Tudo legível sem scroll horizontal

### WhatsApp
- [ ] Clicar em botão abre WhatsApp
- [ ] Mensagem pré-preenchida aparece
- [ ] Número está correto: 5547996615555

---

## 🐛 Solução de Problemas

### Site não carrega
**Solução**: Verificar que `index.html` existe:
```bash
ls -la /Users/marinho/Downloads/juncotatto/index.html
```

### Estilos não aparecem (página branca/sem cores)
**Solução**: Verificar caminho do CSS:
```bash
ls -la /Users/marinho/Downloads/juncotatto/css/styles.css
```

### JavaScript não funciona (galeria vazia, FAQ não clica)
**Solução**: Verificar console do navegador:
1. Abrir DevTools (F12 ou Cmd+Option+I)
2. Aba "Console"
3. Procurar por erros em vermelho

### WhatsApp não abre
**Solução**: 
1. Verificar número no arquivo `js/script.js`
2. Substituir por número correto em formato internacional (+55...)

### Menu mobile não abre
**Solução**:
1. Abrir DevTools (F12)
2. Verificar tamanho da janela (< 768px = mobile)
3. Clicar no hamburger (≡)

---

## 📊 Performance

Abrir DevTools → Aba "Network":
- Total de arquivos: 3 (HTML + CSS + JS)
- Tamanho esperado: ~40KB
- Tempo: < 1s (sem imagens)

Com imagens:
- Esperado: < 3s (imagens otimizadas)
- Alerta: > 5s significa compressão necessária

---

## 🎬 Demo do Site Completo

Quando tiver imagens reais adicionadas, o fluxo é:

1. Usuário entra → vê hero impactante com foto P&B
2. Scroll → vê faixa de confiança (4,9 ⭐ · +600)
3. Scroll → vê galeria de trabalhos (filtros funcionam)
4. Scroll → vê avaliações do Google (ao vivo via Elfsight)
5. Scroll → vê segurança, piercing, about
6. Scroll → FAQ responde dúvidas
7. Final → Formulário + mapa
8. Em qualquer momento → Clica em botão WhatsApp

**Resultado**: Taxa de conversão alta via WhatsApp direto.

---

## 🚢 Próximo Passo: Deploy

Após testes OK, colocar no ar:

### Opção 1: Vercel (mais fácil)
```bash
npm install -g vercel
vercel --prod
```

### Opção 2: Netlify
1. Arrastar pasta para [netlify.com](https://netlify.com/drop)
2. Pronto! URL gerada automaticamente

### Opção 3: Seu próprio servidor
1. Copiar arquivos para servidor via FTP/SFTP
2. Apontar domínio
3. Certificado SSL (Let's Encrypt = grátis)

---

**Sucesso! 🎉**
