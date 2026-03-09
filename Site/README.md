# 🎮 NEVES TECH - Loja de Peças para Computadores Gamers

Uma loja online moderna e responsiva especializada em peças para computadores gamers, desenvolvida com HTML5, CSS3 e JavaScript puro.

## 📋 Sobre o Projeto

**NEVES TECH** é uma plataforma de e-commerce completa dedicada a fornecer peças de alta qualidade para computadores gamers. O projeto foi desenvolvido do zero com foco em:

- ✅ Design moderno e atrativo
- ✅ Experiência do usuário intuitiva
- ✅ Funcionalidades robustas de carrinho de compras
- ✅ Sistema de pagamento completo
- ✅ Responsividade para mobile e desktop

---

## ✨ Funcionalidades Principais

### 🛍️ Catálogo de Produtos
- Grade visual de produtos em destaque
- Informações detalhadas: nome, preço, avaliações
- Badges de desconto e promoção
- Sistema de filtros (categoria, preço, marca)
- Barra de busca funcional

### 🛒 Carrinho de Compras
- Adicionar produtos ao carrinho
- Visualizar todos os itens em uma aba modal elegante
- Remover produtos individuais
- Contador em tempo real de itens no carrinho
- Cálculo automático de subtotal e frete

### 💳 Sistema de Pagamento
- **4 Formas de Pagamento:**
  - 💳 Cartão de Crédito (até 12x sem juros)
  - 🏦 Débito (pagamento imediato)
  - 💰 PIX (com 5% de desconto)
  - 📱 Boleto Bancário (vencimento em 3 dias)
- Modal de checkout intuitivo
- Cálculo automático de descontos
- Confirmação de compra com resumo

### 🔍 Navegação e Busca
- Barra de busca em tempo real
- Navegação suave entre seções
- Menu responsivo

### 📱 Design Responsivo
- Totalmente adaptado para mobile
- Layout fluído para tablets e desktops
- Interface moderna com tema dark/neon

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura
- **CSS3** - Estilização (Flexbox, Grid, Gradientes, Animações)
- **JavaScript Vanilla** - Funcionalidades interativas

### Características Técnicas
- Design responsivo com media queries
- Animações suaves (CSS transitions)
- Modal overlays para melhor UX
- LocalStorage ready (extensível)

---

## 🚀 Como Usar

### Instalação
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/neves-tech.git
cd neves-tech
```

2. Abra o arquivo `index.html` no seu navegador:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Estrutura de Arquivos
```
neves-tech/
├── index.html          # Arquivo principal
├── script.js           # Lógica JavaScript
├── style.css          # Estilos
├── img/               # Imagens dos produtos
│   ├── produto1.webp
│   ├── produto2.webp
│   └── ...
└── README.md          # Este arquivo
```

---

## 📦 Produtos Disponíveis

A loja oferece uma variedade de produtos gamers:

- **Placas de Vídeo** - NVIDIA RTX series, AMD Radeon
- **Processadores** - Intel Core, AMD Ryzen
- **Memória RAM** - Corsair, G.Skill
- **Placas-Mãe** - ASUS ROG, MSI
- **Armazenamento** - SSDs NVMe, HDDs
- **Periféricos** - Monitores, Mouses, Teclados
- **Refrigeração** - Water Coolers, Coolers a Ar
- **Fontes e Acessórios** - Corsair, EVGA

---

## 💡 Como o Sistema Funciona

### 1. Adicionando Produtos
- Clique em **"Adicionar ao Carrinho"** em qualquer produto
- Botão muda para verde mostrando feedback visual
- Contador no canto superior atualiza automaticamente

### 2. Visualizando o Carrinho
- Clique no botão **"🛒 Carrinho"** no header
- Uma aba modal aparece com todos os itens
- Veja o subtotal, frete e total em tempo real

### 3. Removendo Produtos
- Na aba do carrinho, clique em **"Remover"** em um item
- Produto é removido instantaneamente
- Totais são recalculados automaticamente

### 4. Finalizando a Compra
- Clique em **"Ir para Pagamento"**
- Selecione a forma de pagamento desejada
- PIX oferece 5% de desconto automaticamente
- Clique em **"Confirmar Compra"** para finalizar

### 5. Buscar Produtos
- Use a barra de busca no topo
- Pressione Enter ou clique no botão Buscar
- O site rolará até o produto encontrado

---

## 📊 Recursos de Fretes

- **Frete Grátis**: Compras acima de R$ 200
- **Frete Pago**: R$ 15,00 (compras abaixo de R$ 200)
- Cálculo automático no carrinho

---

## 🎨 Customização

### Cores Principais
```css
Primária: #00d4ff (Ciano neon)
Secundária: #ff6b00 (Laranja)
Destaque: #4CAF50 (Verde sucesso)
Erro: #ff4444 (Vermelho)
Background: #0f0f0f (Cinza escuro)
```

### Fontes
- Primária: `Segoe UI, Tahoma, Geneva, Verdana, sans-serif`

### Adicionar Novos Produtos
Edite o arquivo `index.html` e adicione um novo bloco `product-card` na seção de produtos:

```html
<div class="product-card">
    <div class="product-image">
        <img src="img/seu-produto.webp" alt="Descrição">
        <span class="badge-sale">-20%</span>
    </div>
    <div class="product-info">
        <h3>Nome do Produto</h3>
        <div class="rating">
            <span class="stars">★★★★★</span>
            <span class="review-count">(X avaliações)</span>
        </div>
        <div class="price-section">
            <p class="price-old">R$ X.XXX,00</p>
            <p class="price-current">R$ X.XXX,00</p>
        </div>
        <p class="installment">ou 12x de R$ XXX,XX</p>
        <button class="btn-buy">Adicionar ao Carrinho</button>
    </div>
</div>
```

---

## 🔐 Segurança e Dados

**Nota Importante**: Este é um projeto educacional e de demonstração. Em produção:

- Implemente autenticação de usuários
- Use HTTPS para todas as transações
- Processe pagamentos através de APIs seguras (Stripe, PayPal, etc.)
- Armazene dados sensíveis no backend
- Configure o CORS apropriadamente

---

## 📱 Responsividade

O projeto foi testado em:
- ✅ Desktop (1920px+)
- ✅ Tablets (768px - 1024px)
- ✅ Smartphones (320px - 767px)

---

## 🤝 Como Contribuir

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adicione MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Sugestões de Melhorias
- [ ] Integração com API de pagamento real
- [ ] Autenticação de usuários
- [ ] Sistema de avaliações de produtos
- [ ] Carrinho persistente (localStorage/banco de dados)
- [ ] Página de detalhes expandida
- [ ] Sistema de cupons e promoções
- [ ] Chat com suporte em tempo real
- [ ] Dashboard administrativo

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**Vinicius Neves**

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- Email: contato@nevestech.com.br
- LinkedIn: [Seu LinkedIn]

---

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto:

- 📧 Email: contato@nevestech.com.br
- 📱 WhatsApp: (61) 99000-0000
- 💬 Abra uma [Issue](https://github.com/seu-usuario/neves-tech/issues)

---

## 🙏 Agradecimentos

- Comunidade de desenvolvedores web
- Inspiração em lojas gamers brasileiras
- Ícones e emojis para melhor UX

---

## 📈 Roadmap

- **v1.0** ✅ Lançamento inicial
- **v1.1** 🔄 Integração com API de pagamento
- **v1.2** 🔄 Sistema de usuários e autenticação
- **v2.0** 🔄 Admin dashboard

---

## 🌟 Se este projeto foi útil, considere deixar uma ⭐!

```
Desenvolvido com ❤️ para gamers
```
