document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.promo-slide'); // Seleciona todos os slides
    const totalSlides = slides.length; // Total de slides
    let currentSlide = 0; // Índice do slide atual

    const prevButton = document.getElementById('prev'); // Botão de anterior
    const nextButton = document.getElementById('next'); // Botão de próximo
    const carousel = document.getElementById('carousel'); // Contêiner do carrossel

    // Função para mostrar o slide correto com base no índice
    function showSlide(index) {
        if (index < 0) {
            currentSlide = totalSlides - 1; // Vai para o último slide se o índice for negativo
        } else if (index >= totalSlides) {
            currentSlide = 0; // Vai para o primeiro slide se o índice for maior que o total
        } else {
            currentSlide = index;
        }

        // Muda a posição do carrossel com a propriedade transform
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`; // Desloca os slides
    }

    // Adiciona o evento de click para o botão anterior
    prevButton.addEventListener('click', () => {
        showSlide(currentSlide - 1); // Mostra o slide anterior
    });

    // Adiciona o evento de click para o botão próximo
    nextButton.addEventListener('click', () => {
        showSlide(currentSlide + 1); // Mostra o próximo slide
    });

    // Inicializa o carrossel na primeira imagem
    showSlide(currentSlide);
});

