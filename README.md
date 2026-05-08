# MoisAuto Agenciador

Site estático para agenciador de carros e casas desenvolvido com HTML, CSS e JavaScript puro.

## Estrutura do Projeto

```
MoisAuto-Website/
├── index.html          # Página inicial
├── cars.html           # Lista de carros
├── houses.html         # Lista de casas
├── car-detail.html     # Detalhes do carro
├── house-detail.html   # Detalhes do imóvel
├── about.html          # Página sobre
├── contact.html        # Página de contato
├── admin.html          # Painel administrativo
├── style.css           # Estilos CSS
└── script.js           # JavaScript
```

## Funcionalidades

### Páginas Principais
- **Início**: Apresentação com destaque de itens e seções modernas
- **Carros**: Lista com filtros por marca, preço e ano
- **Casas**: Lista com filtros por tipo, localização e preço
- **Detalhes**: Página individual para cada item com descrição completa
- **Sobre**: História, estatísticas, missão/visão/valores e equipe (redesign moderno)
- **Contato**: Formulário de contato, informações e mapa (redesign moderno)

### Recursos
- ✅ 6 carros de exemplo
- ✅ 6 casas de exemplo
- ✅ Sistema de busca
- ✅ Menu responsivo (hambúrguer mobile)
- ✅ Efeitos de animação suaves
- ✅ Layout em cards
- ✅ Página administrativa para adicionar novos itens
- ✅ Upload de múltiplas imagens (Cloudflare R2)
- ✅ **NOVO**: Geração de cards para redes sociais (4 layouts)
- ✅ Contato: WhatsApp (51) 98057-8310
- ✅ Redes sociais: Facebook, Instagram, Threads

### Geração de Cards para Redes Sociais

Nas páginas de detalhes de carros e casas, há um botão **"GERAR CARD STORIES (NOVO)"** que abre um modal com 4 layouts profissionais:

#### 🎨 Layouts Disponíveis:

1. **Executivo Premium** - Design sofisticado com elementos 3D e gradientes sutis
2. **Luxo Noturno** - Tema dark elegante com efeitos de luz e profundidade
3. **Energia Dinâmica** - Layout vibrante com movimento visual e destaques chamativos
4. **Natureza Urbana** - Estilo clean e profissional com elementos institucionais

#### ✨ Características Técnicas:

- **Formato Otimizado:** 1080x1920px (Stories Instagram/Threads)
- **Tipografia Inteligente:** Ajuste automático de tamanho para textos longos
- **Elementos Visuais:** Gradientes, sombras, blur effects e animações sutis
- **Responsividade:** Layouts balanceados que funcionam em qualquer dispositivo
- **Qualidade:** Renderização em alta resolução (2x scale)
- **👁️ Modal Interativo:** Previews visuais horizontais com scroll personalizado
- **🎯 Seleção Visual:** Destaque do layout selecionado com borda vermelha
- **📱 UX Aprimorada:** Interface intuitiva com hover effects e feedback visual

#### 📱 Conteúdo Incluído:

**Para Carros:**
- Imagem principal com efeitos visuais
- Título com quebra automática de linha
- Subtítulo em badge elegante
- Preço em destaque com efeitos 3D
- Especificações (ano, quilometragem) em cards flutuantes
- Contato WhatsApp com botão pulsante
- Logo e informações da empresa

**Para Imóveis:**
- Imagem do imóvel com overlays dinâmicos
- Título adaptável ao tamanho
- Características (quartos, área, localização)
- Preço institucional com bordas especiais
- Especificações organizadas em cards
- Call-to-action para agendamento de visita
- Informações completas de contato

#### 🚀 Funcionalidades Avançadas:

- **Ajuste Automático de Fonte:** Previne sobreposição de texto
- **Quebra Inteligente de Linha:** Mantém palavras completas
- **Efeitos Visuais:** Sombras, blur, gradientes e profundidade
- **Animações Subltis:** Pulsação em botões de CTA
- **Compatibilidade:** Funciona com CORS e imagens externas
- **Download Instantâneo:** Geração e download automático

## Como Usar

1. Abra `index.html` em qualquer navegador
2. Para acessar o painel admin: `admin.html`

## Personalização

### Adicionar novos itens via Admin
1. Acesse `admin.html`
2. Clique em "Adicionar Carro" ou "Adicionar Casa"
3. Preencha todos os campos obrigatórios
4. Clique em "Salvar"

### Modificar estilos
Edite `style.css` - as cores principais estão nas variáveis CSS no início do arquivo.

## Upload de Imagens

O site suporta upload de imagens através de Cloudflare Workers e R2 storage.

### Configuração:

1. **Criar bucket R2:**
   ```bash
   npx wrangler r2 bucket create moisauto-images
   ```

2. **Deploy do Worker:**
   ```bash
   cd src
   npm install
   npx wrangler deploy
   ```

3. **Configurar URLs:**
   - Atualize `WORKER_UPLOAD_URL` e `WORKER_AUTH_SECRET` no `script.js`
   - Use a URL do Worker deployado

### Funcionalidades de Upload:
- Upload direto de arquivos (JPG/PNG)
- Suporte a URLs externas
- Múltiplas imagens por anúncio
- Validação de tipo e tamanho de arquivo

## Sistema de Dados JSON

O projeto agora utiliza um sistema avançado de dados baseado em JSON:

### 📁 Arquivos de Dados
- `data/cars.json` - Base de dados dos carros
- `data/houses.json` - Base de dados das casas

### 🔄 Funcionalidades
- ✅ **Fonte de dados JSON** - Todos os dados vêm de arquivos estruturados
- ✅ **CRUD automático** - Modificações são salvas automaticamente
- ✅ **Persistência inteligente** - Sistema de merge entre dados originais e modificações
- ✅ **Backup automático** - Dados originais preservados
- ✅ **Fallback robusto** - Recuperação automática em caso de erros

### 📖 Documentação Detalhada
Consulte `JSON_SYSTEM_README.md` para documentação completa do sistema.

## Tecnologias
- HTML5
- CSS3 (Flexbox, Grid, Variáveis)
- JavaScript (Vanilla)
- Font Awesome (ícones)
- **Sistema JSON proprietário** - Persistência avançada
- Cloudflare Workers (futuro)
- Cloudflare R2 (futuro)