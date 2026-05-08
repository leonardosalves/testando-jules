# Demonstração dos Novos Cards

## 🎨 Layout Executivo Premium

**Características:**
- Header com logo em destaque e badge "VEÍCULO PREMIUM"
- Imagem com overlay sutil e gradientes de fundo
- Título com ajuste automático de fonte
- Preço em destaque com efeito 3D rotacionado
- Especificações em cards flutuantes com sombras
- CTA pulsante com WhatsApp
- Elementos decorativos sutis

## 🌙 Layout Luxo Noturno

**Características:**
- Tema dark com gradientes dinâmicos
- Header com clip-path e texto em destaque
- Imagem com efeitos de foco e saturação
- Título com text-shadow para profundidade
- Preço com efeito de brilho pulsante
- Cards com backdrop-filter e bordas transparentes
- CTA com animação de pulso verde

## ⚡ Layout Energia Dinâmica

**Características:**
- Cores vibrantes com elementos flutuantes
- Header com badge "OFERTA RELÂMPAGO"
- Imagem com overlay gradiente dinâmico
- Título com quebra inteligente de linha
- Preço explosivo com sombra de texto
- Destaque "FINANCIAMENTO FÁCIL"
- CTA com efeito pulsante laranja

## 🌿 Layout Natureza Urbana

**Características:**
- Design institucional e profissional
- Header com gradiente verde corporativo
- Imagem com bordas temáticas
- Título clean e bem espaçado
- Preço em destaque com borda institucional
- Especificações organizadas em cards
- CTA verde com informações completas
- Rodapé com informações da empresa

## 🔧 Funcionalidades Técnicas

### Ajuste Automático de Fonte
```javascript
function ajustarTamanhoFonte(texto, maxWidth, fontSizeBase, fontSizeMin) {
    const estimatedWidth = texto.length * (fontSizeBase * 0.6);
    if (estimatedWidth > maxWidth && fontSizeBase > fontSizeMin) {
        return Math.max(fontSizeMin, fontSizeBase * (maxWidth / estimatedWidth));
    }
    return fontSizeBase;
}
```

### Quebra Inteligente de Texto
```javascript
function quebrarTextoLongo(texto, maxLength) {
    if (texto.length <= maxLength) return texto;

    const palavras = texto.split(' ');
    let resultado = '';
    let linhaAtual = '';

    for (const palavra of palavras) {
        if ((linhaAtual + ' ' + palavra).length <= maxLength) {
            linhaAtual += (linhaAtual ? ' ' : '') + palavra;
        } else {
            resultado += (resultado ? '\n' : '') + linhaAtual;
            linhaAtual = palavra;
        }
    }

    return linhaAtual ? resultado + (resultado ? '\n' : '') + linhaAtual : resultado;
}
```

## 📱 Como Usar

1. Abra a página de detalhes de um carro ou casa
2. Clique em "GERAR CARD STORIES (NOVO)"
3. Escolha um dos 4 layouts disponíveis
4. O card será gerado automaticamente e baixado

## 🎯 Benefícios

- **Profissional:** Designs modernos e institucionais
- **Inteligente:** Ajuste automático de texto e layout
- **Visual:** Elementos 3D, sombras e profundidade
- **Funcional:** Otimizado para redes sociais
- **Rápido:** Geração instantânea com html2canvas