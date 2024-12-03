// Função para alternar a visibilidade do menu hambúrguer
// Script para abrir e fechar o menu hambúrguer
document.getElementById('hamburger-icon').addEventListener('click', function() {
    const menu = document.getElementById('menu-mobile');
    menu.classList.toggle('show');
  });
  
function toggleMenu() {
    const menu = document.getElementById('menu-mobile');
    menu.classList.toggle('show');
}

// Função para abrir/fechar o carrinho
let cartCount = 0;
let cartItems = [];

const cartToggle = document.getElementById("cart-toggle");
const cart = document.getElementById("cart");
const cartCounter = document.getElementById("cart-counter");
const closeCart = document.getElementById("close-cart");

cartToggle.addEventListener("click", () => {
    cart.classList.toggle("hidden");
});

closeCart.addEventListener("click", () => {
    cart.classList.add("hidden");
});

// Função para adicionar item ao carrinho
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const productId = event.target.dataset.id;
        const productTitle = event.target.closest(".product-card").querySelector(".product-title").innerText;
        const productPrice = event.target.closest(".product-card").querySelector(".product-price").innerText;

        cartItems.push({ productId, productTitle, productPrice });
        cartCount++;
        cartCounter.innerText = cartCount;

        updateCart();
    });
});

// Atualiza o carrinho exibido
function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = '';
    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerText = `${item.productTitle} - ${item.productPrice}`;
        cartItemsList.appendChild(listItem);
    });
}
