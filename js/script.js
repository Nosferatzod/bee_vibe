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

