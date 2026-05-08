# Guia de Configuração - Upload de Imagens Cloudflare

## Pré-requisitos

1. **Conta Cloudflare** com Workers ativado
2. **Wrangler CLI** instalado: `npm install -g wrangler`
3. **Login no Wrangler**: `wrangler auth login`

## Passo 1: Criar Bucket R2

1. Acesse o [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Vá para R2 > Create bucket
3. Nome: `moisauto-images`
4. Configure CORS (opcional, para uploads diretos):
   ```json
   [
     {
       "AllowedOrigins": ["*"],
       "AllowedMethods": ["GET", "PUT", "POST"],
       "AllowedHeaders": ["*"]
     }
   ]
   ```

## Passo 2: Configurar o Worker

1. **Gerar secret seguro:**
   ```bash
   # Gere uma string aleatória segura (use openssl ou similar)
   openssl rand -base64 32
   ```

2. **Editar wrangler.toml:**
   - Atualize `AUTH_SECRET` com o secret gerado
   - Verifique se `bucket_name` está correto

3. **Instalar dependências:**
   ```bash
   npm install
   ```

4. **Deploy do Worker:**
   ```bash
   wrangler deploy
   ```

5. **Copiar URL do Worker:**
   - A saída do deploy mostrará algo como: `https://moisauto-upload-api.SEU_USERNAME.workers.dev`
   - Copie esta URL

## Passo 3: Configurar o Site

1. **Editar script.js:**
   - Atualize `WORKER_UPLOAD_URL` com a URL do seu Worker
   - Atualize `WORKER_AUTH_SECRET` com o mesmo secret do wrangler.toml

2. **Exemplo:**
   ```javascript
   const WORKER_UPLOAD_URL = 'https://moisauto-upload-api.SEU_USERNAME.workers.dev/upload';
   const WORKER_AUTH_SECRET = 'SUA_SECRET_AQUI';
   ```

## Passo 4: Testar

1. Abra `admin.html`
2. Tente adicionar um carro ou casa
3. Selecione uma imagem
4. Clique em "Salvar"

## Troubleshooting

### Erro "Unauthorized"
- Verifique se `WORKER_AUTH_SECRET` no script.js é igual ao `AUTH_SECRET` no wrangler.toml

### Erro "Bucket not found"
- Verifique se o bucket R2 foi criado corretamente
- Verifique se o binding no wrangler.toml está correto

### Imagens não carregam
- Verifique se as URLs retornadas pelo Worker estão acessíveis
- Teste a URL direta do Worker: `https://SEU_WORKER.workers.dev/image/NOME_DO_ARQUIVO`

### Worker não faz deploy
- Execute `wrangler whoami` para verificar login
- Verifique se tem permissões para Workers

## Segurança

- **Nunca** commite secrets no código
- Use secrets fortes (mínimo 32 caracteres)
- Considere usar Wrangler secrets: `wrangler secret put AUTH_SECRET`

## Limites

- **Tamanho máximo:** 10MB por imagem
- **Tipos aceitos:** JPG, PNG
- **Armazenamento:** Sem limite de R2 (pago por uso)