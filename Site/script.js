// Tema claro/escuro
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Carregar preferência do tema salva
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('light-mode');
        themeToggle.textContent = '🌙';
    }
}

// Alternar tema
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '🌙';
        }
    });
}

// Carregar tema ao iniciar
loadThemePreference();

// ========== SISTEMA DE FILTROS ==========
const btnFilter = document.querySelector('.btn-filter');
const categoryCheckboxes = document.querySelectorAll('input[data-filter="category"]');
const brandCheckboxes = document.querySelectorAll('input[data-filter="brand"]');
const priceRadios = document.querySelectorAll('input[data-filter="price"]');
const productCards = document.querySelectorAll('.product-card');

// Função para obter preço na faixa especificada
function isInPriceRange(productPrice, range) {
    const price = parseFloat(productPrice);
    
    switch(range) {
        case '0-500':
            return price >= 0 && price <= 500;
        case '500-1000':
            return price > 500 && price <= 1000;
        case '1000-2000':
            return price > 1000 && price <= 2000;
        case '2000+':
            return price > 2000;
        default:
            return true;
    }
}

// Função para aplicar filtros
function applyFilters() {
    const selectedCategories = Array.from(categoryCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.dataset.value);
    
    const selectedBrands = Array.from(brandCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.dataset.value);
    
    const selectedPrice = Array.from(priceRadios).find(radio => radio.checked)?.dataset.range || null;
    
    let visibleCount = 0;
    
    productCards.forEach(card => {
        const productCategory = card.dataset.category;
        const productBrand = card.dataset.brand;
        const productPrice = card.dataset.price;
        
        // Verificar categoria
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(productCategory);
        
        // Verificar marca
        const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(productBrand);
        
        // Verificar preço
        const priceMatch = !selectedPrice || isInPriceRange(productPrice, selectedPrice);
        
        // Mostrar ou esconder produto
        if (categoryMatch && brandMatch && priceMatch) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Mensagem se nenhum produto encontrado
    const productsGrid = document.querySelector('.products-grid');
    const noResultsMessage = productsGrid.querySelector('.no-results');
    
    if (visibleCount === 0) {
        if (!noResultsMessage) {
            const message = document.createElement('div');
            message.className = 'no-results';
            message.style.gridColumn = '1 / -1';
            message.style.textAlign = 'center';
            message.style.padding = '40px';
            message.style.color = '#a0a0a0';
            message.style.fontSize = '1.2em';
            message.innerHTML = '😕 Nenhum produto encontrado com esses filtros.';
            productsGrid.appendChild(message);
        }
    } else {
        if (noResultsMessage) {
            noResultsMessage.remove();
        }
    }
}

// Adicionar event listeners aos filtros
btnFilter.addEventListener('click', applyFilters);

// Aplicar filtros ao mudar os checkboxes/radios em tempo real
categoryCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
});

brandCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
});

priceRadios.forEach(radio => {
    radio.addEventListener('change', applyFilters);
});

// Carrinho de compras
let cart = [];
let selectedPayment = 'credit';

// Elementos do DOM
const btnAddCart = document.querySelectorAll('.btn-buy');
const btnCart = document.querySelector('.btn-cart');
const cartCount = document.querySelector('.cart-count');
const cartModal = document.getElementById('cartModal');
const checkoutModal = document.getElementById('checkoutModal');
const cartItemsList = document.getElementById('cartItems');
const btnCheckout = document.getElementById('btnCheckout');
const btnConfirmPayment = document.getElementById('btnConfirmPayment');
const paymentRadios = document.querySelectorAll('input[name="payment"]');

// Adicionar ao carrinho
btnAddCart.forEach(btn => {
    btn.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price-current').textContent;
        
        const product = {
            name: productName,
            price: productPrice,
            id: Date.now()
        };
        
        cart.push(product);
        updateCartCount();
        
        // Feedback visual
        this.textContent = '✓ Adicionado!';
        this.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            this.textContent = 'Adicionar ao Carrinho';
            this.style.backgroundColor = '';
        }, 1500);
    });
});

// Atualizar contador do carrinho
function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Abrir o modal do carrinho
btnCart.addEventListener('click', function() {
    openCartModal();
});

// Abrir modal do carrinho
function openCartModal() {
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<div class="empty-cart-message">🛒 Seu carrinho está vazio!</div>';
    } else {
        renderCartItems();
    }
    cartModal.classList.add('active');
    updateCartSummary();
}

// Renderizar itens do carrinho
function renderCartItems() {
    cartItemsList.innerHTML = '';
    
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})">Remover</button>
        `;
        cartItemsList.appendChild(cartItem);
    });
}

// Remover item do carrinho
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<div class="empty-cart-message">🛒 Seu carrinho está vazio!</div>';
    } else {
        renderCartItems();
    }
    updateCartSummary();
}

// Atualizar resumo do carrinho
function updateCartSummary() {
    let subtotal = 0;
    
    cart.forEach(item => {
        const price = parseFloat(item.price.replace('R$', '').replace('.', '').replace(',', '.'));
        subtotal += price;
    });
    
    const shipping = subtotal > 200 ? 0 : 15;
    const total = subtotal + shipping;
    
    document.getElementById('subtotal').textContent = 'R$ ' + subtotal.toFixed(2).replace('.', ',');
    document.getElementById('shipping').textContent = shipping === 0 ? 'GRÁTIS' : 'R$ ' + shipping.toFixed(2).replace('.', ',');
    document.getElementById('totalPrice').textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
}

// Fechar modal do carrinho
function closeCartModal() {
    cartModal.classList.remove('active');
}

// Botão de fechar modal do carrinho
document.querySelectorAll('.btn-close-modal').forEach(btn => {
    btn.addEventListener('click', function() {
        closeCartModal();
    });
});

// Fechar modal ao clicar fora
cartModal.addEventListener('click', function(event) {
    if (event.target === cartModal) {
        closeCartModal();
    }
});

checkoutModal.addEventListener('click', function(event) {
    if (event.target === checkoutModal) {
        closeCheckout();
    }
});

// Abrir checkout
btnCheckout.addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    closeCartModal();
    openCheckout();
});

// Abrir modal de checkout
function openCheckout() {
    updatePaymentTotal();
    checkoutModal.classList.add('active');
}

// Fechar modal de checkout
function closeCheckout() {
    checkoutModal.classList.remove('active');
}

// Atualizar total com desconto
function updatePaymentTotal() {
    let subtotal = 0;
    
    cart.forEach(item => {
        const price = parseFloat(item.price.replace('R$', '').replace(',', '.'));
        subtotal += price;
    });
    
    const shipping = subtotal > 200 ? 0 : 15;
    let total = subtotal + shipping;
    let discountInfo = '';
    
    selectedPayment = document.querySelector('input[name="payment"]:checked').value;
    
    if (selectedPayment === 'pix') {
        const discount = total * 0.05;
        total -= discount;
        discountInfo = `<strong>✓ Desconto de 5%: -R$ ${discount.toFixed(2).replace('.', ',')}</strong>`;
    }
    
    document.getElementById('paymentTotal').textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
    document.getElementById('discountInfo').innerHTML = discountInfo;
}

// Monitorar mudanças de forma de pagamento
paymentRadios.forEach(radio => {
    radio.addEventListener('change', updatePaymentTotal);
});

// Confirmar pagamento
btnConfirmPayment.addEventListener('click', function() {
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    const paymentNames = {
        'credit': 'Cartão de Crédito',
        'debit': 'Débito',
        'pix': 'PIX',
        'boleto': 'Boleto Bancário'
    };
    
    let total = 0;
    cart.forEach(item => {
        const price = parseFloat(item.price.replace('R$', '').replace(',', '.'));
        total += price;
    });
    
    const shipping = total > 200 ? 0 : 15;
    total += shipping;
    
    if (paymentMethod === 'pix') {
        total *= 0.95;
    }
    
    alert(`✓ Compra realizada com sucesso!\n\nForma de pagamento: ${paymentNames[paymentMethod]}\nTotal: R$ ${total.toFixed(2).replace('.', ',')}\n\nObrigado por comprar na NEVES TECH! 🎮`);
    
    // Limpar carrinho após compra
    cart = [];
    updateCartCount();
    closeCheckout();
});

// Navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Barra de busca
const btnSearch = document.querySelector('.btn-search');
const searchInput = document.querySelector('.search-bar input');

btnSearch.addEventListener('click', function() {
    const query = searchInput.value.toLowerCase();
    if (query) {
        const products = document.querySelectorAll('.product-card h3');
        let found = false;
        
        products.forEach(product => {
            if (product.textContent.toLowerCase().includes(query)) {
                product.closest('.product-card').scrollIntoView({
                    behavior: 'smooth'
                });
                found = true;
            }
        });
        
        if (!found) {
            alert('Produto não encontrado!');
        }
    }
});

// Buscar ao pressionar Enter
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        btnSearch.click();
    }
});
