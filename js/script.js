var gallery = new SimpleLightbox('.gallery-item a', {
    nav: true, // Habilitar navegação entre imagens
    close: true, // Habilitar botão de fechar
    showCounter: true, // Mostrar contador de imagens
    captions: true, // Mostrar título das imagens
    captionSelector: 'img', // Mostrar o título da imagem a partir do atributo 'alt'
    enableKeyboard: true, // Habilitar navegação com o teclado
    closeText: 'X', // Personalizar texto de fechamento
});
// script.js - Para melhorias adicionais
document.querySelectorAll('.group').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('img').style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseout', () => {
        item.querySelector('img').style.transform = 'scale(1)';
    });
});
// Lista de produtos (incluindo preços como números)
// Lista de produtos (incluindo preços como números)
const products = [
    {
        id: 1,
        name: 'Camisa de Linho Masculina, Casual Manga Comprida',
        price: 99.99, // Preço em número
        image: './image/camisa_linho.png'
    },
    {
        id: 2,
        name: 'Blazer Feminino Alfaiataria Acinturado Modern',
        price: 129.99, // Preço em número
        image: './image/blaze_feminino.png'
    },
    {
        id: 3,
        name: 'Calça Alfaiataria Algodão Preta',
        price: 159.99, // Preço em número
        image: './image/calca_alfaiate.jpg'
    }
];

// Armazena os itens no carrinho
let cart = [];

// Atualiza o contador de itens no carrinho
function updateCartCounter() {
    const cartCounter = document.getElementById('cart-counter');
    cartCounter.textContent = cart.length; // Atualiza o número no contador
}

// Adiciona um item ao carrinho
function addToCart(productId) {
    // Verifica se o item já está no carrinho
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        // Se não existe no carrinho, pega o produto da lista e adiciona
        const product = products.find(item => item.id === productId);
        cart.push({...product, quantity: 1});
    }
    
    // Atualiza o contador
    updateCartCounter();

    // Exibe os itens no carrinho
    displayCartItems();
}

// Exibe os itens no carrinho
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Limpa a lista de itens antes de adicionar os novos

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}`;
        cartItemsContainer.appendChild(li);
    });
}

// Abre o carrinho
function openCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.classList.remove('hidden');
}

// Fecha o carrinho
function closeCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.classList.add('hidden');
}

// Evento de clique nos botões "Comprar" (add-to-cart)
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productId = parseInt(event.target.getAttribute('data-id'), 10); // Obtém o ID do produto
        addToCart(productId); // Adiciona o produto ao carrinho
    });
});

// Exibir o carrinho ao clicar no ícone do carrinho
document.getElementById('cart-icon').addEventListener('click', openCart);

// Fechar o carrinho
document.getElementById('close-cart').addEventListener('click', closeCart);
