# Michel Representações - Landing Page

Uma landing page moderna, responsiva e totalmente otimizada para **Michel Representações** - oferecendo proteção veicular, crédito facilitado e limpeza de nome.

## 📋 Características

✅ **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
✅ **Interações Hover** - Efeitos suaves e profissionais em todos os elementos
✅ **Performance Otimizada** - Carregamento rápido com lazy loading de imagens
✅ **Acessibilidade** - Totalmente acessível com suporte a leitores de tela
✅ **SEO Friendly** - Meta tags e estrutura semântica otimizadas
✅ **Animações Suaves** - Transições e animações fluidas
✅ **Compatibilidade** - Funciona em todos os navegadores modernos

## 📁 Estrutura de Arquivos

```
michel-landing/
├── index.html          # Arquivo HTML principal
├── css/
│   └── styles.css      # Estilos CSS responsivos
├── js/
│   └── main.js         # Funcionalidades JavaScript
├── img/                # Pasta para imagens locais
├── assets/             # Pasta para outros assets
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir Localmente

Simplesmente abra o arquivo `index.html` em seu navegador:

```bash
# No terminal, navegue até a pasta
cd michel-landing

# Abra com seu navegador padrão
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### 2. Usar com um Servidor Local

Para melhor experiência com lazy loading e cache:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

### 3. Fazer Deploy

Você pode fazer deploy em qualquer plataforma que suporte HTML/CSS/JS:

- **Netlify**: Arraste a pasta para o site
- **Vercel**: Conecte seu repositório Git
- **GitHub Pages**: Faça upload para um repositório
- **Servidor Próprio**: FTP ou SSH

## 🎨 Personalização

### Alterar Cores

Abra `css/styles.css` e modifique as variáveis CSS no topo:

```css
:root {
  --orange: #F47B20;        /* Cor primária */
  --orange-2: #EF5A1D;      /* Cor primária hover */
  --ink: #1A1815;           /* Cor de texto */
  --bg-soft: #FBF8F5;       /* Cor de fundo suave */
}
```

### Alterar Conteúdo

Edite o arquivo `index.html` para:
- Mudar textos e títulos
- Adicionar/remover seções
- Atualizar informações de contato
- Modificar depoimentos

### Adicionar Imagens

1. Coloque suas imagens na pasta `img/`
2. Atualize os `src` das imagens no HTML:

```html
<img src="img/sua-imagem.jpg" alt="Descrição">
```

### Integrar WhatsApp

No arquivo `js/main.js`, procure por:

```javascript
const phone = '5511999999999'; // Substitua pelo seu número
```

Altere para seu número de WhatsApp com código do país.

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: até 767px

Todos os elementos se adaptam automaticamente!

## ⚡ Performance

- Imagens otimizadas com lazy loading
- CSS minificado e otimizado
- JavaScript eficiente e sem dependências
- Carregamento rápido em conexões lentas

## 🔒 Segurança

- Sem dependências externas perigosas
- Código limpo e validado
- Proteção contra XSS
- Compatível com Content Security Policy

## 🌐 Compatibilidade

Testado e funciona em:

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 SEO

Otimizado para mecanismos de busca:

- Meta tags descritivas
- Estrutura semântica HTML5
- URLs amigáveis
- Schema markup
- Sitemap pronto

## 🛠️ Customização Avançada

### Adicionar Nova Seção

1. Adicione o HTML em `index.html`
2. Crie os estilos em `css/styles.css`
3. Adicione interações em `js/main.js` se necessário

### Modificar Animações

As animações estão definidas em `css/styles.css`:

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Adicionar Formulário

Exemplo de formulário simples:

```html
<form onsubmit="handleSubmit(event)">
  <input type="text" placeholder="Seu nome" required>
  <input type="email" placeholder="Seu email" required>
  <button type="submit" class="btn btn-orange">Enviar</button>
</form>
```

## 📞 Suporte

Para dúvidas ou problemas:

1. Verifique se todos os arquivos estão na pasta correta
2. Limpe o cache do navegador (Ctrl+Shift+Delete)
3. Teste em outro navegador
4. Verifique o console (F12) para erros

## 📄 Licença

Este projeto é fornecido como está. Sinta-se livre para usar e modificar conforme necessário.

## 🎯 Próximos Passos

1. ✅ Substituir imagens por suas próprias
2. ✅ Atualizar informações de contato
3. ✅ Customizar cores e fontes
4. ✅ Testar em diferentes dispositivos
5. ✅ Fazer deploy online

---

**Desenvolvido com ❤️ para Michel Representações**

Última atualização: Julho 2024
