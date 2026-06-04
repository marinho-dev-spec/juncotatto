# Configuração de Analytics & Tracking

## Google Analytics 4 (GA4)

### Como obter seu ID do GA4:
1. Acesse [Google Analytics](https://analytics.google.com)
2. Selecione sua propriedade "Junco Tattoo & Piercing"
3. Vá para **Admin** > **Property** > **Data Streams**
4. Selecione seu stream web
5. Copie o **Measurement ID** (começa com `G-`)

### Onde substituir:
**Arquivo:** `index.html` e `piercing.html`

Procure por:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_GA4_ID"></script>
<script>
  gtag('config', 'G-YOUR_GA4_ID', {...});
</script>
```

Substitua `G-YOUR_GA4_ID` pelo seu ID real (exemplo: `G-AB12CD34EF`)

---

## Meta Pixel (Facebook Pixel)

### Como obter seu Pixel ID:
1. Acesse [Meta Business Suite](https://business.facebook.com)
2. Vá para **Events Manager** > **Data Sources**
3. Selecione ou crie um Pixel
4. Copie seu **Pixel ID** (números apenas, ex: 123456789)

### Onde substituir:
**Arquivo:** `index.html` e `piercing.html`

Procure por:
```html
<script>
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

Substitua `YOUR_PIXEL_ID` pelo seu ID real (exemplo: `123456789`)

---

## Eventos Rastreados

### No Index (Home):
- `whatsapp_contact` — Quando usuário clica em CTA de WhatsApp
- `scroll_50percent` — Quando usuário scrolls 50% da página

### No Piercing:
- `piercing_booking` — Quando usuário agenda um piercing específico

---

## Teste de Implementação

Após substituir os IDs:

1. **GA4:** Abra Google Analytics em tempo real
2. **Meta Pixel:** Abra Meta Events Manager
3. Clique em uma CTA do site
4. Verifique se o evento aparece em tempo real nos dashboards

---

## Ambiente de Teste

Para testar sem afetar dados reais, você pode:
- Usar o Google Analytics Preview Mode
- Usar o Meta Pixel Test Event Code
- Temporariamente ativar "Block all cookies" em modo de teste

