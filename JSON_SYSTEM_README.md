# Sistema JSON de Dados - MoisAuto

## 📋 Visão Geral

O sistema agora utiliza arquivos JSON como fonte de dados principal para carros e casas, com persistência automática das modificações através do localStorage. Este sistema simula um backend real em um ambiente estático.

## 📁 Estrutura de Arquivos

```
data/
├── cars.json      # Dados originais dos carros
└── houses.json    # Dados originais das casas

script.js          # Lógica do sistema JSON
```

## 🔄 Como Funciona

### 1. Carregamento Inicial
- O sistema carrega dados dos arquivos `data/cars.json` e `data/houses.json`
- Faz uma cópia profunda dos dados originais
- Carrega modificações salvas do localStorage
- Aplica as modificações aos dados originais

### 2. Modificações em Tempo Real
- **Adicionar:** Novos itens são salvos no localStorage
- **Editar:** Alterações são trackeadas e persistidas
- **Deletar:** Itens removidos são marcados como deletados
- **Status:** Mudanças de status (vendido/não vendido) são salvas

### 3. Persistência Inteligente
- Modificações são salvas automaticamente no localStorage
- Dados originais permanecem intactos nos JSONs
- Sistema de merge inteligente entre dados originais e modificações

## 📊 Estrutura dos Dados JSON

### Carros (`data/cars.json`)
```json
[
  {
    "id": 1,
    "titulo": "Toyota Corolla 2022",
    "brand": "Toyota",
    "model": "Corolla",
    "year": 2022,
    "price": 125000,
    "mileage": 35000,
    "fuel": "Flex",
    "transmission": "Automático",
    "color": "Prata",
    "description": "Descrição completa do veículo",
    "features": ["Ar-condicionado", "Vidro elétrico", "Airbag"],
    "images": ["url1.jpg", "url2.jpg"],
    "createdAt": "2026-05-08T18:00:42-03:00",
    "updatedAt": "2026-05-08T18:00:42-03:00",
    "sold": false,
    "soldAt": null
  }
]
```

### Casas (`data/houses.json`)
```json
[
  {
    "id": 1,
    "titulo": "Casa em Condomínio",
    "type": "Casa",
    "location": "Porto Alegre",
    "neighborhood": "Centro",
    "city": "Porto Alegre",
    "state": "RS",
    "zipCode": "90010-000",
    "price": 850000,
    "bedrooms": 4,
    "bathrooms": 3,
    "area": 180,
    "totalArea": 320,
    "description": "Descrição completa do imóvel",
    "features": ["Piscina", "Garagem", "Jardim"],
    "images": ["url1.jpg", "url2.jpg"],
    "createdAt": "2026-05-08T18:00:42-03:00",
    "updatedAt": "2026-05-08T18:00:42-03:00",
    "sold": false,
    "soldAt": null
  }
]
```

## 🔧 Funcionalidades do Sistema

### CRUD Completo
- ✅ **Create:** Adicionar novos carros/casas
- ✅ **Read:** Carregar e exibir dados
- ✅ **Update:** Editar informações existentes
- ✅ **Delete:** Remover itens

### Persistência Automática
- ✅ Modificações salvas automaticamente
- ✅ Backup inteligente dos dados originais
- ✅ Sistema de versionamento básico
- ✅ Recuperação de dados em caso de erro

### Integração com Interface
- ✅ Painel admin totalmente funcional
- ✅ Upload de múltiplas imagens
- ✅ Controle de status (vendido/não vendido)
- ✅ Filtros e busca mantidos

## 🚀 Como Usar

### Para Desenvolvedores
1. **Editar dados originais:** Modifique `data/cars.json` e `data/houses.json`
2. **Adicionar novos campos:** Atualize a estrutura JSON e o código JavaScript
3. **Backup:** Os dados originais permanecem intactos

### Para Administradores
1. **Adicionar itens:** Use o painel admin normalmente
2. **Modificações são salvas automaticamente**
3. **Reset:** Use o botão "Resetar Dados" para voltar ao estado original

## 🔄 Migração de Sistema

### De localStorage para JSON
- ✅ Dados originais movidos para arquivos JSON
- ✅ localStorage usado apenas para modificações
- ✅ Compatibilidade mantida com dados existentes
- ✅ Sistema de merge inteligente implementado

### Benefícios da Migração
- 📁 **Organização:** Dados estruturados em arquivos separados
- 🔄 **Versionamento:** Possibilidade de controle de versão dos dados
- 🚀 **Performance:** Carregamento mais rápido e organizado
- 🛡️ **Segurança:** Dados originais preservados
- 🔧 **Manutenibilidade:** Fácil edição e atualização

## 🐛 Tratamento de Erros

### Fallbacks Implementados
- ✅ **JSON indisponível:** Fallback para dados demo
- ✅ **Dados corrompidos:** Validação automática
- ✅ **Imagens faltando:** Placeholders automáticos
- ✅ **Campos obrigatórios:** Validação de estrutura

### Recuperação de Dados
- ✅ **Reset automático:** Em caso de dados inválidos
- ✅ **Backup localStorage:** Modificações preservadas
- ✅ **Merge inteligente:** Combinação de dados originais + modificações

## 🔮 Próximos Passos

### Melhorias Futuras
- 🔄 **Backend real:** Migração para API REST
- 📊 **Dashboard avançado:** Estatísticas e relatórios
- 🔍 **Busca avançada:** Filtros múltiplos
- 📱 **API móvel:** Integração com apps
- ☁️ **Cloud sync:** Sincronização automática

### Escalabilidade
- 🗂️ **Múltiplos JSONs:** Separação por categoria
- 📈 **Paginação:** Carregamento sob demanda
- 🔄 **Cache inteligente:** Otimização de performance
- 🔐 **Autenticação:** Controle de acesso

## 📞 Suporte

Para questões sobre o sistema JSON:
1. Verifique os arquivos `data/cars.json` e `data/houses.json`
2. Use o botão "Resetar Dados" no admin para debug
3. Verifique o console do navegador para erros
4. Dados são salvos automaticamente no localStorage

---

**Sistema implementado por:** Leonardo Soares Alves
**Data:** 08 de maio de 2026
**Versão:** 1.0.0