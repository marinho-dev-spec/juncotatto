# 📧 CONFIGURAR EMAILJS — FORM BACKEND

**Status:** ✅ Form HTML atualizado  
**Próximo passo:** Configurar EmailJS em 5 minutos

---

## 🚀 PASSO 1: Criar Conta no EmailJS

1. **Ir em:** https://www.emailjs.com
2. **Clicar:** "Create an account" (ou Sign Up)
3. **Email:** use seu email
4. **Senha:** qualquer senha
5. **Confirmar email** (verificação)
6. **Done!** ✅

---

## 🔑 PASSO 2: Pegar Credenciais

### 2a. PUBLIC KEY

1. **No dashboard EmailJS**
2. **Clicar:** "Integration" (ou account → Public Key)
3. **Copiar:** Public Key (começa com números)
4. **Exemplo:** `abc123def456ghi789`

### 2b. SERVICE ID

1. **Na sidebar:** "Email Services"
2. **Clicar:** "+ Create New Service"
3. **Selecionar:** Gmail (ou outro email)
4. **Conectar:** Gmail account (vai pedir permissão)
5. **Copiar:** Service ID (ex: `service_abc123`)

### 2c. TEMPLATE ID

1. **Na sidebar:** "Email Templates"
2. **Clicar:** "+ Create New Template"
3. **Nome:** `contact_form`
4. **Subject:** `Nova mensagem de {{user_name}}`
5. **Conteúdo do email:**

```
Olá Gabriel!

Você recebeu uma nova mensagem de contato:

Nome: {{user_name}}
WhatsApp: {{user_phone}}
Mensagem:
{{message}}

---
Responda direto no WhatsApp: {{user_phone}}
```

6. **Salvar!** ✅
7. **Copiar:** Template ID (ex: `contact_form`)

---

## 📝 PASSO 3: Substituir no Code

**Arquivo:** `index.html`

**Procurar por (linha ~450):**
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
...
emailjs.sendForm('SERVICE_ID', 'contact_form', form)
```

**Substituir:**
- `YOUR_PUBLIC_KEY` → seu Public Key
- `SERVICE_ID` → seu Service ID

**Exemplo:**
```javascript
emailjs.init('abc123def456ghi789');
...
emailjs.sendForm('service_abc123def', 'contact_form', form)
```

---

## ✅ PASSO 4: Testar

1. **Abrir site:** https://juncotatto.vercel.app
2. **Scroll até:** "Contato" (seção final)
3. **Preencher:**
   - Nome: Gabriel Test
   - WhatsApp: 11999999999
   - Mensagem: Teste de forma enviado
4. **Clicar:** Enviar
5. **Esperado:**
   - ✅ "Mensagem enviada com sucesso!"
   - 📧 Email chega em seu Gmail

---

## 📧 O QUE O EMAIL CONTERÁ

```
Assunto: Nova mensagem de Gabriel Test

Corpo:
Olá Gabriel!

Você recebeu uma nova mensagem de contato:

Nome: Gabriel Test
WhatsApp: 11999999999
Mensagem:
Teste de form enviado

---
Responda direto no WhatsApp: 11999999999
```

---

## 🎯 RESUMO RÁPIDO

```
1. Ir em emailjs.com → Create account
2. Pegar Public Key (em Integration)
3. Criar Email Service (Gmail)
4. Criar Template: contact_form
5. Substituir em index.html:
   - YOUR_PUBLIC_KEY → seu key
   - SERVICE_ID → seu service
6. Testar no site
7. Done! ✅
```

**Tempo total:** 5-10 minutos

---

## 💡 DICAS

- EmailJS é **gratuito até 200 emails/mês**
- Depois custa $5/mês (ou $20/ano)
- Toda mensagem você recebe em seu Gmail
- Pode responder direto no Gmail ou WhatsApp

---

## 🆘 SE ALGO NÃO FUNCIONAR

1. **Abrir DevTools** (F12)
2. **Ir em Console**
3. **Procurar por erro em vermelho**
4. **Comum:**
   - `Invalid Public Key` → Verificar se copiou certo
   - `Service not found` → Verificar Service ID
   - `Template not found` → Verificar Template ID (deve ser `contact_form`)

---

## ✨ PRONTO!

Após configurar, seu form vai:
✅ Enviar emails automaticamente
✅ Mostrar mensagem de sucesso
✅ Fazer reset do form
✅ Funcionar 100% no navegador (sem servidor necessário!)

